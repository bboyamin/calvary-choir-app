/**
 * 갈보리교회 임마누엘 성가대 - 동적 공유 OpenGraph 메타 태그 생성기 (Vercel Serverless Function)
 * /api/share
 * - 카카오톡, SMS, SNS 스크랩 요청 시 선택된 콘텐츠(공지, 찬양, 일정, 기도)의 실제 이미지/썸네일과 제목을 메타 태그로 즉시 반환합니다.
 * - 일반 브라우저 접속 시 실제 콘텐츠 페이지로 즉시 리다이렉트합니다.
 */

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');

  const { tab = 'notice', id = '' } = req.query;

  const host = req.headers['host'] || 'calvary-ch.vercel.app';
  const proto = req.headers['x-forwarded-proto'] || 'https';
  const baseUrl = `${proto}://${host}`;
  const targetRedirectUrl = `${baseUrl}/?tab=${encodeURIComponent(tab)}&id=${encodeURIComponent(id)}`;
  const defaultImageUrl = `${baseUrl}/assets/icon-512.png`;

  let title = '갈보리교회 임마누엘성가대';
  let description = '임마누엘성가대 스마트 앱';
  let imageUrl = defaultImageUrl;

  const convertGoogleDriveUrl = (url) => {
    if (!url) return '';
    url = url.trim();
    const fileIdMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/) || url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (fileIdMatch && fileIdMatch[1]) {
      return `https://drive.google.com/thumbnail?id=${fileIdMatch[1]}&sz=w800`;
    }
    if (url.includes('lh3.googleusercontent.com/d/')) {
      const parts = url.split('/d/');
      if (parts[1]) {
        const id = parts[1].split('?')[0];
        return `https://drive.google.com/thumbnail?id=${id}&sz=w800`;
      }
    }
    return url;
  };

  const getYoutubeVideoId = (url) => {
    if (!url) return null;
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    return match ? match[1] : null;
  };

  const resolveImageUrl = (rawUrl) => {
    if (!rawUrl) return null;
    const trimmed = String(rawUrl).trim();
    const vid = getYoutubeVideoId(trimmed);
    if (vid) return `https://img.youtube.com/vi/${vid}/hqdefault.jpg`;
    const driveUrl = convertGoogleDriveUrl(trimmed);
    if (driveUrl !== trimmed || trimmed.startsWith('data:image/') || /\.(jpg|jpeg|png|gif|webp|svg)($|\?)/i.test(trimmed)) {
      return driveUrl;
    }
    return null;
  };

  if (id) {
    try {
      const kvUrlRaw = process.env.KV_REST_API_URL || process.env.STORAGE_REST_API_URL || process.env.UPSTASH_REST_API_URL || process.env.KV_URL;
      const token = process.env.KV_REST_API_TOKEN || process.env.STORAGE_REST_API_TOKEN || process.env.UPSTASH_REST_API_TOKEN || process.env.KV_TOKEN;
      const kvBaseUrl = kvUrlRaw ? kvUrlRaw.replace(/\/$/, '') : null;

      if (kvBaseUrl && token) {
        const catKey = tab === 'notice' ? 'notices' : tab === 'praise' ? 'praises' : tab === 'schedule' ? 'schedules' : tab === 'prayer' ? 'prayers' : null;
        if (catKey) {
          const resp = await fetch(`${kvBaseUrl}/get/calvary_${catKey}`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          if (resp.ok) {
            const data = await resp.json();
            const items = data.result ? (typeof data.result === 'string' ? JSON.parse(data.result) : data.result) : [];
            const item = Array.isArray(items) ? items.find(i => String(i.id) === String(id)) : null;

            if (item) {
              if (tab === 'notice') {
                title = `[공지사항] ${item.title || '공지사항'}`;
                description = item.content ? item.content.slice(0, 100).replace(/\r?\n/g, ' ').trim() : '갈보리교회 임마누엘성가대 공지사항입니다.';

                if (item.mediaList && Array.isArray(item.mediaList)) {
                  for (const m of item.mediaList) {
                    if (m && m.url) {
                      const img = resolveImageUrl(m.url);
                      if (img) { imageUrl = img; break; }
                    }
                  }
                }
                if (imageUrl === defaultImageUrl && item.imageUrl) {
                  const img = resolveImageUrl(item.imageUrl);
                  if (img) imageUrl = img;
                }
                if (imageUrl === defaultImageUrl && item.youtubeUrl) {
                  const img = resolveImageUrl(item.youtubeUrl);
                  if (img) imageUrl = img;
                }
              } else if (tab === 'praise') {
                const partNames = { 'ALL_PART': '4부 합창', 'S': '소프라노', 'A': '알토', 'T': '테너', 'B': '베이스' };
                const partStr = item.type === 'part' ? ` (${partNames[item.partTarget] || '파트'} 연습)` : '';
                title = `[찬양] ${item.title || '찬양'}${partStr}`;
                description = `${item.date || ''} 갈보리교회 임마누엘성가대 찬양 음원/영상입니다.`;

                if (item.youtubeUrl) {
                  const img = resolveImageUrl(item.youtubeUrl);
                  if (img) imageUrl = img;
                }
                if (imageUrl === defaultImageUrl && item.imageUrl) {
                  const img = resolveImageUrl(item.imageUrl);
                  if (img) imageUrl = img;
                }
              } else if (tab === 'schedule') {
                title = `[주요일정] ${item.title || '주요일정'}`;
                description = `📍 장소: ${item.location || '임마누엘성가대실'} | 일시: ${item.date || ''}`;

                if (item.imageUrl) {
                  const img = resolveImageUrl(item.imageUrl);
                  if (img) imageUrl = img;
                }
              } else if (tab === 'prayer') {
                title = `[중보기도] (${item.author || '익명'} 대원)`;
                description = item.content ? item.content.slice(0, 100).replace(/\r?\n/g, ' ').trim() : '임마누엘성가대 중보기도 요청입니다.';

                if (item.imageUrl) {
                  const img = resolveImageUrl(item.imageUrl);
                  if (img) imageUrl = img;
                }
              }
            }
          }
        }
      }
    } catch (e) {
      console.error('Error fetching share metadata:', e);
    }
  }

  const safeTitle = title.replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const safeDesc = description.replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const safeImage = imageUrl.replace(/"/g, '&quot;');

  const html = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>${safeTitle}</title>
  <meta property="og:title" content="${safeTitle}">
  <meta property="og:description" content="${safeDesc}">
  <meta property="og:image" content="${safeImage}">
  <meta property="og:image:width" content="800">
  <meta property="og:image:height" content="450">
  <meta property="og:url" content="${targetRedirectUrl}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="갈보리교회 임마누엘성가대">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${safeTitle}">
  <meta name="twitter:description" content="${safeDesc}">
  <meta name="twitter:image" content="${safeImage}">
  <meta http-equiv="refresh" content="0;url=${targetRedirectUrl}">
  <script>
    window.location.replace(${JSON.stringify(targetRedirectUrl)});
  </script>
</head>
<body>
  <p>성가대 앱으로 이동 중입니다... <a href="${targetRedirectUrl}">여기를 클릭하세요</a></p>
</body>
</html>`;

  return res.status(200).send(html);
}
