/**
 * 갈보리교회 임마누엘 성가대 로컬 스토리지 & 영구 데이터 관리자 (storage.js)
 * 대원 일정 및 티켓/참석 신청 기능 영구 데이터 지원
 */

const STORAGE_KEYS = {
  NOTICES: 'calvary_choir_notices',
  PRAISES: 'calvary_choir_praises',
  SCHEDULES: 'calvary_choir_schedules',
  MEMBERS: 'calvary_choir_members',
  PRAYERS: 'calvary_choir_prayers',
  IS_OFFICER: 'calvary_choir_is_officer',
  DATA_VERSION: 'calvary_choir_data_v1000' // 데이터 버전 v12 (파트 연습실 임의 생성 더미 제거 및 관리자 수동 등록 전용 유지)
};

class ChoirStorage {
  constructor() {
    this.isSyncing = false;
    this.initialSyncDone = false; // 첫 클라우드 동기화 완료 여부
    this.lastSyncedAt = Number(localStorage.getItem('calvary_last_cloud_sync_at') || 0);
    this.lastSyncFailed = false;
    this.lastSyncResult = null;
    this.pendingPushCount = { notices: 0, praises: 0, schedules: 0, members: 0, prayers: 0 };
    this.lastMutationTime = { notices: 0, praises: 0, schedules: 0, members: 0, prayers: 0 };
    this.init();
    this.startCloudSync();
  }

  hasAnyLocalData() {
    const keys = [STORAGE_KEYS.NOTICES, STORAGE_KEYS.PRAISES, STORAGE_KEYS.SCHEDULES, STORAGE_KEYS.MEMBERS, STORAGE_KEYS.PRAYERS];
    for (const key of keys) {
      try {
        const val = localStorage.getItem(key);
        if (val && val !== '[]' && val !== '{}') {
          const parsed = JSON.parse(val);
          if (Array.isArray(parsed) && parsed.length > 0) return true;
        }
      } catch (e) { }
    }
    return false;
  }

  init() {
    const currentVer = localStorage.getItem(STORAGE_KEYS.DATA_VERSION);
    if (currentVer !== 'v1005') {
      if ('caches' in window) {
        caches.keys().then(names => {
          for (let name of names) {
            caches.delete(name);
          }
        });
      }
      localStorage.setItem(STORAGE_KEYS.DATA_VERSION, 'v1005');
    }
  }

  startCloudSync() {
    // 앱 진입 즉시 클라우드 실시간 데이터 동기화 (SSOT)
    this.syncFromCloud();

    // 5분(300초) 주기 백그라운드 안전망 자동 동기화 (보면대 등에 오래 켜둘 때 대비)
    setInterval(() => {
      this.syncFromCloud();
    }, 300000);

    // 앱 화면 다시 활성화(포커스) 및 온라인 복구 시 즉시 클라우드 동기화
    window.addEventListener('focus', () => this.syncFromCloud());
    window.addEventListener('online', () => this.syncFromCloud());
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        this.syncFromCloud();
      }
    });
  }

  async syncFromCloud(options = {}) {
    const isManualRetry = Boolean(options && options.isManualRetry);
    if (this.isSyncing && this.activeSyncPromise && !isManualRetry) {
      return this.activeSyncPromise;
    }
    this.isSyncing = true;

    const isFirstSync = !this.initialSyncDone;
    const prevSyncedAt = this.lastSyncedAt || 0;
    const hadLocalDataBeforeSync = this.hasAnyLocalData();

    if (window.app && typeof window.app.onCloudSyncStart === 'function') {
      window.app.onCloudSyncStart({
        isFirstSync,
        isManualRetry,
        prevSyncedAt,
        hadLocalData: hadLocalDataBeforeSync
      });
    }

    this.activeSyncPromise = (async () => {
      let hasChanges = false;
      let syncSucceeded = false;

      try {
        const apiBaseUrl = (location.hostname === 'localhost' || location.hostname === '127.0.0.1') ? 'https://calvary-ch.vercel.app/api/storage' : './api/storage';
        const resp = await fetch(`${apiBaseUrl}?key=all`);
        if (!resp.ok) {
          this.lastSyncFailed = true;
          return false;
        }

        const cloudData = await resp.json();
        syncSucceeded = true;

        const categoryMap = [
          { cat: 'notices', key: STORAGE_KEYS.NOTICES },
          { cat: 'praises', key: STORAGE_KEYS.PRAISES },
          { cat: 'schedules', key: STORAGE_KEYS.SCHEDULES },
          { cat: 'members', key: STORAGE_KEYS.MEMBERS },
          { cat: 'prayers', key: STORAGE_KEYS.PRAYERS }
        ];

        const now = Date.now();
        for (const item of categoryMap) {
          const lastMut = this.lastMutationTime[item.cat] || 0;
          const pendingCount = this.pendingPushCount[item.cat] || 0;
          const isRecentlyMutatedByMe = (now - lastMut) < 10000; // 최근 10초 이내에 내가 직접 등록/수정/삭제한 카테고리

          // 내가 방금 수정 중이거나 전송(Push) 중이라면 서버의 지연된 이전 데이터로 순간 롤백되는 현상 방지
          if (pendingCount > 0 || isRecentlyMutatedByMe) {
            continue;
          }

          if (cloudData[item.cat] !== undefined && cloudData[item.cat] !== null && Array.isArray(cloudData[item.cat])) {
            const localObj = this.get(item.key);
            const cloudObj = cloudData[item.cat];
            const localStr = JSON.stringify(localObj);
            const cloudStr = JSON.stringify(cloudObj);

            if (localStr !== cloudStr) {
              localStorage.setItem(item.key, cloudStr);
              hasChanges = true;
            }
          }
        }

        // 관리자 비밀번호 클라우드 단일 동기화
        if (cloudData.officer_pin && typeof cloudData.officer_pin === 'string' && cloudData.officer_pin.trim().length > 0) {
          const localPin = localStorage.getItem('calvary_choir_officer_pin');
          if (cloudData.officer_pin !== localPin) {
            localStorage.setItem('calvary_choir_officer_pin', cloudData.officer_pin);
          }
        }

        this.initialSyncDone = true;
        this.lastSyncFailed = false;
        this.lastSyncedAt = Date.now();
        try {
          localStorage.setItem('calvary_last_cloud_sync_at', String(this.lastSyncedAt));
        } catch (e) { }

        // 변경사항이 감지되면 UI 및 안읽은 배포 건수 즉시 갱신
        if (hasChanges && window.app) {
          if (window.app.pendingDeepLink && window.app.pendingDeepLink.id) {
            if (typeof window.app.applyPendingDeepLink === 'function') {
              window.app.applyPendingDeepLink();
            }
          } else if (typeof window.app.renderAll === 'function') {
            window.app.renderAll();
          }
          if (typeof window.app.updateUnreadBadges === 'function') window.app.updateUnreadBadges();
        }
        return hasChanges;
      } catch (e) {
        console.warn('Cloud sync offline or error:', e);
        this.lastSyncFailed = true;
        return false;
      } finally {
        this.isSyncing = false;
        this.activeSyncPromise = null;
        this.lastSyncResult = {
          isFirstSync,
          hasChanges,
          success: syncSucceeded,
          isManualRetry,
          prevSyncedAt,
          hadLocalData: hadLocalDataBeforeSync,
          completedAt: Date.now()
        };

        // 로컬에 기존 데이터가 아예 없어 '로딩 안내 화면'이 떠 있던 경우에만 첫 동기화 완료 후 화면 갱신
        // (기존 데이터가 이미 있는 사용자는 동일 데이터 재렌더링을 생략하여 유튜브 등 iframe 깜빡임 방지)
        if (window.app && isFirstSync && syncSucceeded && !hasChanges && !this.hasAnyLocalData() && typeof window.app.renderAll === 'function') {
          window.app.renderAll();
        }

        if (window.app && typeof window.app.onCloudSyncComplete === 'function') {
          window.app.onCloudSyncComplete(this.lastSyncResult);
        }
      }
    })();

    return this.activeSyncPromise;
  }

  async pushCategoryToCloud(category, data) {
    this.pendingPushCount[category] = (this.pendingPushCount[category] || 0) + 1;
    this.lastMutationTime[category] = Date.now();

    try {
      const apiBaseUrl = (location.hostname === 'localhost' || location.hostname === '127.0.0.1') ? 'https://calvary-ch.vercel.app/api/storage' : './api/storage';
      const resp = await fetch(apiBaseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category, data })
      });
      if (resp.ok) {
        this.lastMutationTime[category] = Date.now();
      }
    } catch (e) {
      console.warn('Cloud push error:', e);
    } finally {
      if (this.pendingPushCount[category] > 0) {
        this.pendingPushCount[category]--;
      }
    }
  }

  get(key) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Storage parse error:', e);
      return [];
    }
  }

  saveLocal(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Storage save error:', e);
      if (e.name === 'QuotaExceededError' || e.code === 22) {
        alert('⚠️ 저장 공간이 부족하여 저장이 거부되었습니다. 불필요한 사진 용량을 자동으로 압축 정리합니다.');
      }
    }
  }

  save(key, data) {
    const categoryKeyMap = {
      [STORAGE_KEYS.NOTICES]: 'notices',
      [STORAGE_KEYS.PRAISES]: 'praises',
      [STORAGE_KEYS.SCHEDULES]: 'schedules',
      [STORAGE_KEYS.MEMBERS]: 'members',
      [STORAGE_KEYS.PRAYERS]: 'prayers'
    };

    const category = categoryKeyMap[key];
    if (category) {
      this.lastMutationTime[category] = Date.now();
      localStorage.setItem('last_mut_' + category, Date.now().toString());
    }

    // 1. 로컬 스토리지에 즉시 반응형 저장 (0ms)
    this.saveLocal(key, data);

    // 2. 전 대원 공유 클라우드 DB로 비동기 전송 동기화 (유저가 직접 등록/수정/삭제했을 때만 실행)
    if (category) {
      this.pushCategoryToCloud(category, data);
    }
  }

  isOfficer() {
    return localStorage.getItem(STORAGE_KEYS.IS_OFFICER) === 'true';
  }

  setOfficer(isOfficer) {
    localStorage.setItem(STORAGE_KEYS.IS_OFFICER, isOfficer ? 'true' : 'false');
  }

  getOfficerPin() {
    return localStorage.getItem('calvary_choir_officer_pin') || '1234';
  }

  setOfficerPin(pin) {
    localStorage.setItem('calvary_choir_officer_pin', pin);
    this.pushCategoryToCloud('officer_pin', pin);
  }

  getMemberPin() {
    return localStorage.getItem('calvary_choir_member_pin') || '1004';
  }

  setMemberPin(pin) {
    localStorage.setItem('calvary_choir_member_pin', pin);
  }

  isMemberUnlocked() {
    return localStorage.getItem('calvary_choir_member_unlocked') === 'true';
  }

  setMemberUnlocked(status) {
    localStorage.setItem('calvary_choir_member_unlocked', status ? 'true' : 'false');
  }

  // ----------------------------------------------------
  // 🔐 내 기기 작성 항목 (기도제목, 댓글, 일정신청) 관리
  // ----------------------------------------------------
  getMyItemIds() {
    try {
      const data = localStorage.getItem('calvary_choir_my_item_ids');
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  addMyItemId(id) {
    if (!id) return;
    const ids = this.getMyItemIds();
    if (!ids.includes(id)) {
      ids.push(id);
      try {
        localStorage.setItem('calvary_choir_my_item_ids', JSON.stringify(ids));
      } catch (e) { }
    }
  }

  removeMyItemId(id) {
    if (!id) return;
    let ids = this.getMyItemIds();
    ids = ids.filter(itemId => itemId !== id);
    try {
      localStorage.setItem('calvary_choir_my_item_ids', JSON.stringify(ids));
    } catch (e) { }
  }

  isMyItem(id) {
    if (!id) return false;
    const ids = this.getMyItemIds();
    return ids.includes(id);
  }

  // ----------------------------------------------------
  // ⭐ 즐겨찾기 공지사항 (Notice Favorites) 관리
  // ----------------------------------------------------
  getFavoriteNoticeIds() {
    try {
      const data = localStorage.getItem('calvary_choir_fav_notices');
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  setFavoriteNotice(noticeId, targetFavState) {
    const ids = this.getFavoriteNoticeIds();
    const idx = ids.indexOf(noticeId);
    if (targetFavState && idx < 0) {
      ids.push(noticeId);
    } else if (!targetFavState && idx >= 0) {
      ids.splice(idx, 1);
    }
    try {
      localStorage.setItem('calvary_choir_fav_notices', JSON.stringify(ids));
    } catch (e) { }
    return ids;
  }

  toggleFavoriteNotice(noticeId) {
    const ids = this.getFavoriteNoticeIds();
    const idx = ids.indexOf(noticeId);
    if (idx >= 0) {
      ids.splice(idx, 1);
    } else {
      ids.push(noticeId);
    }
    try {
      localStorage.setItem('calvary_choir_fav_notices', JSON.stringify(ids));
    } catch (e) { }
    return ids;
  }
}

window.choirStorage = new ChoirStorage();

