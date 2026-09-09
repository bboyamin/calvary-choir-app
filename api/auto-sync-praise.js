/**
 * Vercel Serverless Cron Function: /api/auto-sync-praise
 * 매주 일요일 저녁 21:00 KST (12:00 UTC) Vercel Cron에 의해 자동 실행됩니다.
 * 유튜브 플레이리스트에서 새로 업데이트된 '임마누엘 성가대(1부)' 주일 찬양 영상을 감지하여
 * Vercel Cloud DB에 자동으로 즉시 등록합니다.
 */

const API_KEY = "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8";
const PLAYLIST_BROWSE_ID = "VLPLKCgcz4bwtVKBy6iqdceHaYhnL9pBgjWu";

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { KV_REST_API_URL, KV_REST_API_TOKEN } = process.env;

  const kvGet = async (key) => {
    if (!KV_REST_API_URL || !KV_REST_API_TOKEN) return null;
    try {
      const resp = await fetch(`${KV_REST_API_URL}/get/${key}`, {
        headers: { Authorization: `Bearer ${KV_REST_API_TOKEN}` }
      });
      const data = await resp.json();
      return data.result ? JSON.parse(data.result) : null;
    } catch (e) {
      console.error('KV get error:', e);
      return null;
    }
  };

  const kvSet = async (key, val) => {
    if (!KV_REST_API_URL || !KV_REST_API_TOKEN) return;
    try {
      await fetch(`${KV_REST_API_URL}/set/${key}`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${KV_REST_API_TOKEN}` },
        body: JSON.stringify(val)
      });
    } catch (e) {
      console.error('KV set error:', e);
    }
  };

  try {
    // 1. YouTube Innertube API 조회
    const ytUrl = `https://www.youtube.com/youtubei/v1/browse?key=${API_KEY}`;
    const ytPayload = {
      context: {
        client: {
          clientName: "WEB",
          clientVersion: "2.20260902.07.00",
          hl: "ko",
          gl: "KR"
        }
      },
      browseId: PLAYLIST_BROWSE_ID
    };

    const ytResp = await fetch(ytUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
        'Accept-Language': 'ko-KR,ko;q=0.9'
      },
      body: JSON.stringify(ytPayload)
    });

    const ytData = await ytResp.json();

    const rawItems = [];
    const extractLockups = (obj) => {
      if (!obj) return;
      if (typeof obj === 'object') {
        if (obj.lockupViewModel) {
          const l = obj.lockupViewModel;
          const contentId = l.contentId;
          let title = '';
          if (l.metadata && l.metadata.lockupMetadataViewModel) {
            const meta = l.metadata.lockupMetadataViewModel;
            if (meta.title && meta.title.content) {
              title = meta.title.content;
            }
          }
          if (contentId && title) {
            rawItems.push({ videoId: contentId, title });
          }
        } else if (obj.playlistVideoRenderer) {
          const r = obj.playlistVideoRenderer;
          const vid = r.videoId;
          let title = '';
          if (r.title && r.title.runs) {
            title = r.title.runs.map(run => run.text || '').join('');
          } else if (r.title && r.title.simpleText) {
            title = r.title.simpleText;
          }
          if (vid && title) {
            rawItems.push({ videoId: vid, title });
          }
        }
        for (const k in obj) {
          extractLockups(obj[k]);
        }
      } else if (Array.isArray(obj)) {
        for (const item of obj) {
          extractLockups(item);
        }
      }
    };

    extractLockups(ytData);

    // 2. 임마누엘 성가대(1부) 2026년 찬양 파싱 및 정제
    const newPraises = [];
    const seenVids = new Set();

    for (const v of rawItems) {
      if (seenVids.has(v.videoId)) continue;
      seenVids.add(v.videoId);

      const title = v.title;
      if (!title.includes('임마누엘')) continue;
      if (title.includes('베들레헴') && !title.includes('임마누엘')) continue;

      let parsedDate = '';
      const dateMatch = title.match(/(\d{2,4})[년\.]\s*(\d{1,2})[월\.]\s*(\d{1,2})[일\.]?/);
      if (dateMatch) {
        let [_, yy, mm, dd] = dateMatch;
        const year = yy.length === 2 ? '20' + yy : yy;
        parsedDate = `${year}-${mm.padStart(2, '0')}-${dd.padStart(2, '0')}`;
      } else {
        const dateMatch2 = title.match(/(\d{2,4})\.(\d{1,2})\.(\d{1,2})/);
        if (dateMatch2) {
          let [_, yy, mm, dd] = dateMatch2;
          const year = yy.length === 2 ? '20' + yy : yy;
          parsedDate = `${year}-${mm.padStart(2, '0')}-${dd.padStart(2, '0')}`;
        }
      }

      if (!parsedDate || parsedDate < '2026-01-01') continue;

      let cleanSong = title;
      cleanSong = cleanSong.replace(/\d{2,4}[년\.]\s*\d{1,2}[월\.]\s*\d{1,2}[일\.]?/g, '');
      cleanSong = cleanSong.replace(/\d{2,4}\.\d{1,2}\.\d{1,2}/g, '');
      cleanSong = cleanSong.replace(/임마누엘\s*성가대\s*\(주일1부\)|임마누엘\s*성가대\(1부\)|임마누엘성가대\(1부\)|임마누엘\s*성가대|임마누엘성가대|주일1부|1부|임마누엘\s*솔리스트|\b솔리스트\b|베들레헴\s*성가대/g, '');
      cleanSong = cleanSong.replace(/-\s*갈보리교회|갈보리교회/g, '');
      cleanSong = cleanSong.replace(/\(.*?\)/g, '');
      cleanSong = cleanSong.replace(/\[.*?\]/g, '');
      cleanSong = cleanSong.replace(/^[ "“‘”’\-_\t()]+|[ "“‘”’\-_\t()]+$/g, '');

      if (!cleanSong) cleanSong = title.trim();

      newPraises.push({
        id: `p_imm_auto_${v.videoId}`,
        type: 'all',
        partTarget: '',
        title: cleanSong,
        date: parsedDate,
        youtubeUrl: `https://www.youtube.com/watch?v=${v.videoId}`
      });
    }

    // 3. 기존 DB 데이터와 비교하여 신규 찬양 자동 추가
    let currentPraises = (await kvGet('calvary_praises')) || [];

    const existingUrls = new Set(currentPraises.map(p => p.youtubeUrl));
    const addedItems = [];

    for (const np of newPraises) {
      if (!existingUrls.has(np.youtubeUrl)) {
        existingUrls.add(np.youtubeUrl);
        addedItems.push(np);
      }
    }

    if (addedItems.length > 0) {
      const merged = [...addedItems, ...currentPraises];
      merged.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
      await kvSet('calvary_praises', merged);
      return res.status(200).json({
        success: true,
        message: `새로운 주일 성가대 찬양 ${addedItems.length}건이 자동으로 추가되었습니다!`,
        addedCount: addedItems.length,
        addedPraises: addedItems,
        totalPraises: merged.length
      });
    }

    return res.status(200).json({
      success: true,
      message: '새로 등록할 신규 찬양이 없습니다. 최신 상태입니다.',
      addedCount: 0,
      totalPraises: currentPraises.length
    });
  } catch (err) {
    console.error('Auto-sync error:', err);
    return res.status(500).json({ error: err.message });
  }
}
