/**
 * 갈보리교회 임마누엘 성가대 - 클라우드 실시간 데이터 동기화 API (Vercel Serverless Function)
 * /api/storage
 * - 전 대원이 어느 기기(아이폰, 안드로이드, PC)에서 접속하든 실시간으로 공지, 찬양음원, 일정, 중보기도, 대원 명단을 공유합니다.
 */

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb'
    }
  }
};

// 메모리 기반 전역 캐시 (서버리스 인스턴스 간 고속 응답용)
let globalData = {
  notices: null,
  praises: null,
  schedules: null,
  members: null,
  prayers: null,
  officer_pin: null,
  member_pin: null,
  lastUpdated: Date.now()
};

export default async function handler(req, res) {
  // 모바일 PWA 및 웹 크로스 오리진 CORS 헤더 설정
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST,PUT,DELETE');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const urlRaw = process.env.KV_REST_API_URL || process.env.STORAGE_REST_API_URL || process.env.UPSTASH_REST_API_URL || process.env.KV_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.STORAGE_REST_API_TOKEN || process.env.UPSTASH_REST_API_TOKEN || process.env.KV_TOKEN;
  const baseUrl = urlRaw ? urlRaw.replace(/\/$/, '') : null;

  // Vercel KV / Upstash Redis 연동 지원
  const kvGet = async (key) => {
    if (!baseUrl || !token) return null;
    try {
      const resp = await fetch(`${baseUrl}/get/${key}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!resp.ok) return null;
      const data = await resp.json();
      if (data.result !== undefined && data.result !== null) {
        return typeof data.result === 'string' ? JSON.parse(data.result) : data.result;
      }
      return null;
    } catch (e) {
      console.error('KV get error:', e);
      return null;
    }
  };

  const kvSet = async (key, val) => {
    if (!baseUrl || !token) return;
    try {
      const stringifiedVal = JSON.stringify(val);
      const resp = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(['SET', key, stringifiedVal])
      });
      if (!resp.ok) {
        const errText = await resp.text();
        console.error('KV set error response:', resp.status, errText);
      }
    } catch (e) {
      console.error('KV set error:', e);
    }
  };

  // GET: 클라우드 전체 또는 개별 데이터 조회
  if (req.method === 'GET') {
    res.setHeader('Cache-Control', 'public, s-maxage=3, stale-while-revalidate=15');
    const key = req.query.key || 'all';
    const since = Number(req.query.since || 0);

    // ⚡ 2단계 최적화: key=all 이고 since 파라미터가 유효한 경우,
    // 서버 최종 갱신 시각과 비교하여 변경사항이 없으면 143KB 전송 대신 초경량(수십 바이트) 응답 반환
    if (key === 'all' && since > 0) {
      const kvLastUpdated = await kvGet('calvary_last_updated');
      const serverLastUpdated = Number(kvLastUpdated || globalData.lastUpdated || 0);

      if (serverLastUpdated > 0 && since >= serverLastUpdated) {
        return res.status(200).json({
          modified: false,
          lastUpdated: serverLastUpdated
        });
      }
    }

    if (key === 'all') {
      const categories = ['notices', 'praises', 'schedules', 'members', 'prayers', 'officer_pin', 'member_pin'];
      const values = await Promise.all(categories.map(cat => kvGet(`calvary_${cat}`)));

      // 🛑 안전 가드: KV가 설정되어 있으나 서버 통신 장애로 전 카테고리가 null이고 메모리 캐시도 없는 경우
      // 클라이언트 로컬스토리지를 빈 값으로 덮어쓰지 못하도록 503 오류 반환
      if (baseUrl && token && values.slice(0, 5).every(v => v === null) && !globalData.notices) {
        return res.status(503).json({ error: 'Database temporarily unavailable', message: 'DB 연결 지연으로 이전 데이터를 안전하게 유지합니다.' });
      }

      const kvLastUpdated = await kvGet('calvary_last_updated');
      const finalLastUpdated = Number(kvLastUpdated || globalData.lastUpdated || Date.now());
      const result = { lastUpdated: finalLastUpdated };

      categories.forEach((cat, idx) => {
        const kvVal = values[idx];
        const defaultFallback = (cat === 'officer_pin' || cat === 'member_pin') ? null : [];
        result[cat] = (kvVal !== null && kvVal !== undefined) ? kvVal : (globalData[cat] !== null ? globalData[cat] : defaultFallback);
      });

      return res.status(200).json(result);
    } else {
      const kvVal = await kvGet(`calvary_${key}`);
      const val = (kvVal !== null && kvVal !== undefined) ? kvVal : (globalData[key] !== null ? globalData[key] : []);
      return res.status(200).json({ [key]: val, lastUpdated: globalData.lastUpdated });
    }
  }

  // POST / PUT: 공지/찬양/일정/명단/기도 등록 및 변경사항 전대원 클라우드 저장
  if (req.method === 'POST' || req.method === 'PUT') {
    try {
      let body = req.body;
      if (typeof body === 'string') {
        body = JSON.parse(body);
      }

      globalData.lastUpdated = Date.now();
      await kvSet('calvary_last_updated', globalData.lastUpdated);

      const { category, data } = body;
      if (category && data !== undefined) {
        globalData[category] = data;
        await kvSet(`calvary_${category}`, data);
        return res.status(200).json({ success: true, category, data, lastUpdated: globalData.lastUpdated });
      }

      // 전체 객체 구조 저장 지원
      const categories = ['notices', 'praises', 'schedules', 'members', 'prayers', 'officer_pin', 'member_pin'];
      for (const cat of categories) {
        if (body[cat] !== undefined) {
          globalData[cat] = body[cat];
          await kvSet(`calvary_${cat}`, body[cat]);
        }
      }

      return res.status(200).json({ success: true, data: globalData, lastUpdated: globalData.lastUpdated });
    } catch (err) {
      return res.status(400).json({ error: 'Invalid JSON payload', message: err.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
