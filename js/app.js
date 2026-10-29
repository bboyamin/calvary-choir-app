const BIBLE_VERSES = [
  { text: "여호와는 나의 목자시니 내게 부족함이 없으리로다", ref: "시편 23:1" },
  { text: "내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라", ref: "빌립보서 4:13" },
  { text: "두려워하지 말라 내가 너와 함께 함이라 놀라지 말라 나는 네 하나님이 됨이라 내가 너를 세게 하리라 참으로 너를 도와 주리라", ref: "이사야 41:10" },
  { text: "여호와를 기뻐하라 그가 네 마음의 소원을 네게 이루어 주시리로다", ref: "시편 37:4" },
  { text: "하나님을 사랑하는 자 곧 그의 뜻대로 부르심을 입은 자들에게는 모든 것이 합력하여 선을 이루느니라", ref: "로마서 8:28" },
  { text: "수고하고 짐 진 자들아 다 내게로 오라 내가 너희를 쉬게 하리라", ref: "마태복음 11:28" },
  { text: "아무 것도 염려하지 말고 다만 모든 일에 기도와 간구로, 너희 구할 것을 감사함으로 하나님께 아뢰라", ref: "빌립보서 4:6" },
  { text: "여호와는 나의 빛이요 나의 구원이시니 내가 누구를 두려워하리요 여호와는 내 생명의 능력이시니 내가 누구를 무서워하리요", ref: "시편 27:1" },
  { text: "오직 여호와를 앙망하는 자는 새 힘을 얻으리니 독수리가 날개치며 올라감 같을 것이요 달음박질하여도 곤비하지 아니하겠고 걸어가도 피곤하지 아니하리로다", ref: "이사야 40:31" },
  { text: "너의 길을 여호와께 맡기라 그를 의지하면 그가 이루시고 네 의를 빛 같이 나타내시며 네 공의를 정오의 빛 같이 하시리로다", ref: "시편 37:5-6" },
  { text: "너는 마음을 다하여 여호와를 신뢰하고 네 명철을 의지하지 말라 너는 범사에 그를 인정하라 그리하면 네 길을 지도하시리라", ref: "잠언 3:5-6" },
  { text: "너의 행사를 여호와께 맡기라 그리하면 네가 경영하는 것이 이루어지리라", ref: "잠언 16:3" },
  { text: "평안을 너희에게 끼치노니 곧 나의 평안을 너희에게 주노라 내가 너희에게 주는 것은 세상이 주는 것과 같지 아니하니라 너희는 마음에 근심하지도 말고 두려워하지도 말라", ref: "요한복음 14:27" },
  { text: "하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니 이는 그를 믿는 자마다 멸망하지 않고 영생을 얻게 하려 하심이라", ref: "요한복음 3:16" },
  { text: "보라 내가 새 일을 행하리니 이제 나타낼 것이라 너희가 그것을 알지 못하겠느냐 반드시 내가 광야에 길을 사막에 강을 내리니", ref: "이사야 43:19" },
  { text: "너희 염려를 다 주께 맡기라 이는 그가 너희를 돌보심이라", ref: "베드로전서 5:7" },
  { text: "그런즉 누구든지 그리스도 안에 있으면 새로운 피조물이라 이전 것은 지나갔으니 보라 새 것이 되었도다", ref: "고린도후서 5:17" },
  { text: "여호와는 상심한 자들을 고치시며 그들의 상처를 싸매시는도다", ref: "시편 147:3" },
  { text: "내가 평안히 눕고 자기도 하리니 나를 안전히 살게 하시는 이는 오직 여호와이시니이다", ref: "시편 4:8" },
  { text: "너희는 먼저 그의 나라와 그의 의를 구하라 그리하면 이 모든 것을 너희에게 더하시리라", ref: "마태복음 6:33" },
  { text: "나의 하나님이 그리스도 예수 안에서 영광 가운데 그 풍성한 대로 너희 모든 쓸 것을 채우시리라", ref: "빌립보서 4:19" },
  { text: "새 계명을 너희에게 주노니 서로 사랑하라 내가 너희를 사랑한 것 같이 너희도 서로 사랑하라", ref: "요한복음 13:34" },
  { text: "여호와는 너를 지키시는 이시라 여호와께서 네 오른쪽에서 네 그늘이 되시나니 낮의 해가 너를 상하게 하지 아니하며 밤의 달도 너를 해치 아니하리로다", ref: "시편 121:5-6" },
  { text: "너희 중에 누구든지 지혜가 부족하거든 모든 사람에게 후히 주시고 꾸짖지 아니하시는 하나님께 구하라 그리하면 주시리라", ref: "야고보서 1:5" },
  { text: "여호와의 말씀이니라 너희를 향한 나의 생각을 내가 아나니 평안이요 재앙이 아니니라 너희에게 희망과 미래를 주는 것이니라", ref: "예레미야 29:11" },
  { text: "볼지어다 내가 세상 끝날까지 너희와 항상 함께 있으리라 하시니라", ref: "마태복음 28:20" },
  { text: "항상 기뻐하라 쉬지 말고 기도하라 범사에 감사하라 이것이 그리스도 예수 안에서 너희를 향하신 하나님의 뜻이니라", ref: "데살로니가전서 5:16-18" },
  { text: "믿음은 바라는 것들의 실상이요 보이지 않는 것들의 증거니", ref: "히브리서 11:1" },
  { text: "주 여호와의 영이 내게 내리셨으니 이는 여호와께서 내게 기름을 부으사 가난한 자에게 아름다운 소식을 전하게 하려 하심이라", ref: "이사야 61:1" },
  { text: "여호와는 나의 힘과 나의 방패이시니 내 마음이 그를 의지하여 도우심을 얻었도다 그러므로 내 마음이 크게 기뻐하며 내 노래로 그를 찬송하리로다", ref: "시편 28:7" },
  { text: "너의 하나님 여호와가 너의 가운데에 계시니 그는 구원을 베푸실 전능자이시라 그가 너로 말미암아 기쁨을 이기지 못하시며 너를 잠잠히 사랑하시며 너로 말미암아 즐거이 부르며 기뻐하시리라", ref: "스바냐 3:17" },
  { text: "주의 말씀은 내 발에 등이요 내 길에 빛이니이다", ref: "시편 119:105" },
  { text: "우리가 선을 행하되 낙심하지 말지니 포기하지 아니하면 때가 이르매 거두리라", ref: "갈라디아서 6:9" },
  { text: "사랑은 오래 참고 사랑은 온유하며 시기하지 아니하며 사랑은 자랑하지 아니하며 교만하지 아니하며", ref: "고린도전서 13:4" },
  { text: "여호와를 경외하는 것이 지식의 근본이거늘 미련한 자는 지혜와 훈계를 멸시하느니라", ref: "잠언 1:7" },
  { text: "구하라 그리하면 너희에게 주실 것이요 찾으라 그리하면 찾아낼 것이요 문을 두드리라 그리하면 너희에게 열릴 것이니", ref: "마태복음 7:7" },
  { text: "내가 산을 향하여 눈을 들리라 나의 도움이 어디서 올까 나의 도움은 천지를 지으신 여호와에게서로다", ref: "시편 121:1-2" },
  { text: "하나님은 우리의 피난처시요 힘이시니 환난 중에 만날 큰 도움이시라", ref: "시편 46:1" },
  { text: "빛이 어둠에 비치되 어둠이 깨닫지 못하더라", ref: "요한복음 1:5" },
  { text: "여호와는 자비로우시며 은혜로우시며 노하기를 더디 하시며 인자하심이 크시도다", ref: "시편 103:8" },
  { text: "오직 성령의 열매는 사랑과 희락과 화평과 오래 참음과 자비와 양선과 충성과 온유와 절제니 이같은 것을 금지할 법이 없느니라", ref: "갈라디아서 5:22-23" },
  { text: "너희는 세상의 빛이라 산 위에 있는 동네가 숨겨지지 못할 것이요", ref: "마태복음 5:14" },
  { text: "여호와를 의지하는 자는 시온 산이 흔들리지 아니하고 영원히 있음 같도다", ref: "시편 125:1" },
  { text: "내 입술이 주를 찬양할 것이요 나의 영혼이 주를 기뻐하리이다", ref: "시편 63:3-5" },
  { text: "여호와께서 너의 출입을 지금부터 영원까지 지키시리로다", ref: "시편 121:8" },
  { text: "나를 사랑하는 자들이 나의 사랑을 입으며 나를 간절히 찾는 자가 나를 만날 것이니라", ref: "잠언 8:17" },
  { text: "도둑이 오는 것은 도둑질하고 죽이고 멸망시키려는 것뿐이요 내가 온 것은 양으로 생명을 얻게 하고 더 풍성히 얻게 하려는 것이라", ref: "요한복음 10:10" },
  { text: "너희는 여호와를 만날 만한 때에 찾으라 가까이 계실 때에 그를 부르라", ref: "이사야 55:6" },
  { text: "하나님의 성령이 너희 안에 계시는 것을 알지 못하느냐", ref: "고린도전서 3:16" }
];

class ChoirApp {
  constructor() {
    this.storage = window.choirStorage;
    this.currentTab = 'notice';
    this.praiseSubtab = 'all';
    this.partPraiseFilter = 'ALL'; // 파트별 연습실 기본 전체 (각 파트별 최신 1개씩 총 5개)
    this.praiseMonthFilter = 'LATEST';  // 찬양 날짜 기본 최신 이번 주
    this.memberPartFilter = 'ALL';
    this.enteredPin = '';
    this.deferredPrompt = null;

    // 🔍 찬양곡 실시간 검색 상태
    this.isPraiseSearchOpen = false;
    this.praiseSearchQuery = '';
    this.isClearingPraiseSearch = false;

    // 파트별 음원 5개 연속 등록 시 제목 및 주일 일자 자동 입력용 상태
    this.lastBatchTitle = '';
    this.lastBatchDate = '';
    this.lastNextPartTarget = '';

    // 지연 렌더링(Lazy rendering) 관리용 셋
    this.renderedTabs = new Set();

    // 🎧 파트 연습 도우미 (A-B 반복 & 배속 제어) 상태
    this.ytPlayers = {};
    this.loopIntervals = {};
    this.practiceConfigs = {};

    this.init();
  }

  init() {
    this._syncBannerShownAt = 0;
    this._syncBannerHideTimer = null;
    this._syncBannerDelayTimer = null;
    this._syncBannerMorphTimer = null;
    this._syncBannerVisible = false;
    this._isApplyingAppUpdate = false;

    this.initReadTimestamps();
    this.setupPwaInstall();
    this.checkOfficerStatus(true);

    const urlParams = new URLSearchParams(window.location.search);
    const targetTab = urlParams.get('tab');
    if (targetTab && ['notice', 'praise', 'schedule', 'prayer'].includes(targetTab)) {
      this.checkDeepLink();
    } else {
      this.populatePraiseMonthDropdown();
      this.renderCurrentTab();
    }

    // 앱 진입 시 이미 진행 중인 클라우드 동기화 또는 직전 완료 결과와 UI 연동
    if (this.storage) {
      if (this.storage.isSyncing) {
        this.onCloudSyncStart({
          isFirstSync: !this.storage.initialSyncDone,
          isManualRetry: false,
          prevSyncedAt: this.storage.lastSyncedAt || 0,
          hadLocalData: this.storage.hasAnyLocalData()
        });
      } else if (this.storage.lastSyncResult) {
        this.onCloudSyncComplete(this.storage.lastSyncResult);
      }
    }

    window.addEventListener('scroll', () => {
      if (this._syncBannerVisible) this.updateCloudSyncBannerOffset();
    }, { passive: true });

    this.updateUnreadBadges();
    this.requestNotificationPermission();
    this.markTabAsRead(this.currentTab);
    this.startAutoUpdateChecker();
    this.checkFirstVisitManual();
  }

  updateCloudSyncBannerOffset() {
    const bannerEl = document.getElementById('cloudSyncBanner');
    if (!bannerEl) return;
    const headerEl = document.querySelector('.app-header');
    const officerEl = document.getElementById('officerBanner');
    let anchorBottom = 62;
    if (headerEl) {
      const hRect = headerEl.getBoundingClientRect();
      if (hRect.bottom > 0) anchorBottom = hRect.bottom;
    }
    if (officerEl && !officerEl.classList.contains('hidden')) {
      const oRect = officerEl.getBoundingClientRect();
      if (oRect.bottom > anchorBottom) anchorBottom = oRect.bottom;
    }
    bannerEl.style.setProperty('--sync-banner-top', `${Math.round(anchorBottom + 10)}px`);
  }

  showCloudSyncBanner(state, titleText, subText, options = {}) {
    const bannerEl = document.getElementById('cloudSyncBanner');
    if (!bannerEl) return;

    if (this._syncBannerHideTimer) {
      clearTimeout(this._syncBannerHideTimer);
      this._syncBannerHideTimer = null;
    }

    const titleEl = document.getElementById('cloudSyncTitle');
    const subEl = document.getElementById('cloudSyncSub');
    const dotsEl = document.getElementById('cloudSyncDots');
    const spinnerEl = document.getElementById('cloudSyncSpinnerSvg');
    const checkEl = document.getElementById('cloudSyncCheckSvg');
    const warnEl = document.getElementById('cloudSyncWarnIcon');
    const retryBtn = document.getElementById('btnCloudSyncRetry');
    const dismissBtn = document.getElementById('btnCloudSyncDismiss');

    bannerEl.classList.remove('state-syncing', 'state-updated', 'state-uptodate', 'state-delayed', 'state-updating');
    bannerEl.classList.add(`state-${state}`);

    if (titleEl && titleText) titleEl.textContent = titleText;
    if (subEl && subText) subEl.textContent = subText;

    const isSpinning = (state === 'syncing' || state === 'updating');
    const isChecked = (state === 'updated' || state === 'uptodate');
    const isDelayed = (state === 'delayed');

    if (dotsEl) dotsEl.classList.toggle('hidden', !isSpinning);
    if (spinnerEl) spinnerEl.classList.toggle('hidden', !isSpinning);
    if (checkEl) checkEl.classList.toggle('hidden', !isChecked);
    if (warnEl) warnEl.classList.toggle('hidden', !isDelayed);
    if (retryBtn) retryBtn.classList.toggle('hidden', !options.showRetry);
    if (dismissBtn) dismissBtn.classList.toggle('hidden', !options.showDismiss);

    this.updateCloudSyncBannerOffset();

    if (bannerEl.classList.contains('hidden')) {
      bannerEl.classList.remove('hidden');
      this._syncBannerShownAt = Date.now();
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          bannerEl.classList.add('is-visible');
        });
      });
    } else {
      if (!this._syncBannerVisible) {
        this._syncBannerShownAt = Date.now();
      }
      bannerEl.classList.add('is-visible');
    }
    this._syncBannerVisible = true;
  }

  hideCloudSyncBanner() {
    const bannerEl = document.getElementById('cloudSyncBanner');
    if (!bannerEl) return;
    this._syncBannerVisible = false;
    bannerEl.classList.remove('is-visible');

    if (this._syncBannerHideTimer) clearTimeout(this._syncBannerHideTimer);
    this._syncBannerHideTimer = setTimeout(() => {
      if (!this._syncBannerVisible) {
        bannerEl.classList.add('hidden');
      }
    }, 320);
  }

  onCloudSyncStart({ isFirstSync = false, isManualRetry = false, prevSyncedAt = 0, hadLocalData = false } = {}) {
    if (this._isApplyingAppUpdate) return;

    if (this._syncBannerDelayTimer) {
      clearTimeout(this._syncBannerDelayTimer);
      this._syncBannerDelayTimer = null;
    }
    if (this._syncBannerMorphTimer) {
      clearTimeout(this._syncBannerMorphTimer);
      this._syncBannerMorphTimer = null;
    }

    // 6초 이상 클라우드 응답 지연 시 안내 표시
    this._syncBannerDelayTimer = setTimeout(() => {
      if (this.storage && this.storage.isSyncing && !this._isApplyingAppUpdate) {
        const helpEl = document.getElementById('initialSyncTimeoutHelp');
        if (helpEl) helpEl.classList.remove('hidden');

        if (this.storage.hasAnyLocalData()) {
          this.showCloudSyncBanner(
            'delayed',
            '데이터 연결이 조금 지연되고 있습니다',
            '통신 환경을 확인하시거나 다시 불러오기를 눌러주세요',
            { showRetry: true, showDismiss: true }
          );
        }
      }
    }, 6000);

    // ⚡ UX 최적화: 사용자가 직접 버튼을 누른 수동 재시도(isManualRetry)일 때만 시작 배너 표시!
    // 창 전환, 포커스 복귀, 5분 주기 등 평상시 백그라운드 검사는 일절 배너를 띄우지 않고 0.03초 만에 무음 처리
    if (!isManualRetry) {
      return;
    }

    this.showCloudSyncBanner(
      'syncing',
      '최신 공지와 찬양 음원을 다시 불러오는 중',
      '잠시만 기다려 주시면 최신 목록으로 자동 갱신됩니다'
    );
  }

  onCloudSyncComplete({ isFirstSync = false, hasChanges = false, success = false, isManualRetry = false, hadLocalData = false } = {}) {
    if (this._syncBannerDelayTimer) {
      clearTimeout(this._syncBannerDelayTimer);
      this._syncBannerDelayTimer = null;
    }
    if (this._isApplyingAppUpdate) return;

    if (!success) {
      if (!this.storage || !this.storage.hasAnyLocalData()) {
        const helpEl = document.getElementById('initialSyncTimeoutHelp');
        if (helpEl) helpEl.classList.remove('hidden');
      } else if (isManualRetry) {
        this.showCloudSyncBanner(
          'delayed',
          '오프라인 상태이거나 연결이 불안정합니다',
          '현재 기기에 저장된 이전 목록을 표시하고 있습니다',
          { showRetry: true, showDismiss: true }
        );
        this._syncBannerHideTimer = setTimeout(() => {
          this.hideCloudSyncBanner();
        }, 6500);
      }
      return;
    }

    const helpEl = document.getElementById('initialSyncTimeoutHelp');
    if (helpEl) helpEl.classList.add('hidden');

    // 첫 방문 대원이 데이터를 성공적으로 다 받았을 때
    if (!hadLocalData) {
      if (hasChanges) {
        this.showCloudSyncBanner(
          'updated',
          '최신 공지와 찬양 음원을 모두 불러왔습니다!',
          '임마누엘 성가대 앱에 오신 것을 환영합니다 ✨'
        );
        this._syncBannerHideTimer = setTimeout(() => {
          this.hideCloudSyncBanner();
        }, 1700);
      }
      return;
    }

    // ⚡ 1. 실제 새로운 글/음원이 등록되어 반영되었을 때: 기분 좋게 1회 안내 배너 노출
    if (hasChanges) {
      if (this._syncBannerMorphTimer) clearTimeout(this._syncBannerMorphTimer);
      this.showCloudSyncBanner(
        'updated',
        '새로 등록된 최신 글과 음원이 반영되었습니다!',
        '방금 업데이트된 최신 목록을 바로 확인해 보세요 ✨'
      );
      this._syncBannerHideTimer = setTimeout(() => {
        this.hideCloudSyncBanner();
      }, 1800);
      return;
    }

    // ⚡ 2. 사용자가 직접 '다시 불러오기'를 눌렀는데 변경사항이 없던 경우: 최신 상태임을 1.2초간 확인시켜줌
    if (isManualRetry && this._syncBannerVisible) {
      this.showCloudSyncBanner(
        'uptodate',
        '모든 공지와 찬양 음원이 최신 상태입니다',
        '새로 추가된 항목까지 확인을 마쳤습니다 ✓'
      );
      this._syncBannerHideTimer = setTimeout(() => {
        this.hideCloudSyncBanner();
      }, 1200);
      return;
    }

    // ⚡ 3. 평상시 백그라운드 점검(창 전환, 포커스 복귀 등)이고 변경사항이 없는 경우:
    // 어떠한 배너도 띄우지 않고 고요하게 유지! 혹시 떠 있던 배너가 있다면 닫음.
    if (this._syncBannerVisible) {
      this.hideCloudSyncBanner();
    }
  }

  getInitialLoadingHtml(categoryName = '자료') {
    const showHelpNow = Boolean(this.storage && this.storage.lastSyncFailed);
    return `
      <div class="item-card initial-welcome-loader" style="text-align: center; padding: 44px 20px 40px 20px; border-radius: 18px; border: 1.5px solid #DBEAFE; margin: 12px 0; box-shadow: 0 10px 28px rgba(30, 58, 138, 0.08);">
        <div class="welcome-orb-stage">
          <div class="welcome-orb-halo"></div>
          <div class="welcome-orb-ring"></div>
          <div class="welcome-symbol-spin" style="font-size: 38px; position: relative; z-index: 2; display: inline-block; animation: softPulse 1.8s infinite ease-in-out;">🕊️</div>
        </div>
        <div class="welcome-live-pill">
          <span class="welcome-live-dot"></span>
          <span>실시간 데이터 연결 중</span>
        </div>
        <h3 style="font-size: 20px; font-weight: 800; color: #1E3A8A; margin: 0 0 8px 0; letter-spacing: -0.3px;">임마누엘 성가대</h3>
        <p style="font-weight: 700; color: #0F172A; font-size: 16px; margin: 0 0 12px 0; line-height: 1.48;">
          최신 찬양 음원과 ${categoryName}을<br>안전하게 불러오는 중입니다...
        </p>
        <div class="welcome-loader-bar" style="width: 168px; height: 6px; background: #E2E8F0; border-radius: 999px; margin: 16px auto 14px auto; overflow: hidden; position: relative;">
          <div class="welcome-loader-progress" style="width: 58%; height: 100%; background: linear-gradient(90deg, #1E3A8A, #3B82F6, #F59E0B, #2563EB); border-radius: 999px; animation: progressSlide 1.25s infinite ease-in-out;"></div>
        </div>
        <p style="font-size: 13.5px; color: #64748B; margin: 0; font-weight: 500;">잠시만 기다려 주시면 바로 열립니다 🎵</p>
        <div id="initialSyncTimeoutHelp" class="${showHelpNow ? '' : 'hidden'}" style="margin-top: 18px; padding-top: 14px; border-top: 1px dashed #CBD5E1;">
          <p style="font-size: 13px; color: #DC2626; margin: 0 0 8px 0; font-weight: 700;">인터넷 연결이 지연되고 있습니다.</p>
          <button type="button" class="btn-primary-large" style="padding: 10px 18px; font-size: 14.5px; display: inline-block; width: auto; font-weight: 700;" onclick="app.retryInitialSync()">🔄 다시 불러오기</button>
        </div>
      </div>
    `;
  }

  retryInitialSync() {
    const helpEl = document.getElementById('initialSyncTimeoutHelp');
    if (helpEl) helpEl.classList.add('hidden');
    if (this.storage) {
      this.storage.isSyncing = false;
      this.storage.syncFromCloud({ isManualRetry: true }).then(() => {
        this.renderAll();
      });
    }
  }

  startAutoUpdateChecker() {
    const getLoadedScriptVersion = () => {
      try {
        const scriptEl = document.querySelector('script[src*="js/app.js"]');
        if (!scriptEl) return null;
        const src = scriptEl.getAttribute('src') || '';
        const match = src.match(/[?&]v=([^&]+)/);
        if (!match || !match[1]) return null;
        return match[1].startsWith('v') ? match[1] : `v${match[1]}`;
      } catch (e) {
        return null;
      }
    };

    const checkVersion = async () => {
      try {
        const resp = await fetch('./version.json?t=' + Date.now(), { cache: 'no-store' });
        if (!resp.ok) return;
        const data = await resp.json();
        const serverVer = data.version;
        if (!serverVer) return;

        const loadedCodeVer = getLoadedScriptVersion();
        const localVer = localStorage.getItem('calvary_app_code_ver');

        // 현재 실행 중인 스크립트가 이미 서버 최신 버전과 일치하면 불필요한 강제 새로고침 생략
        if (loadedCodeVer && loadedCodeVer === serverVer) {
          if (localVer !== serverVer) {
            localStorage.setItem('calvary_app_code_ver', serverVer);
          }
          if ('caches' in window) {
            const expectedCache = `calvary-choir-${serverVer}`;
            caches.keys().then(names => {
              names.forEach(name => {
                if (name !== expectedCache) caches.delete(name);
              });
            });
          }
          return;
        }

        const alreadyReloadedForVer = sessionStorage.getItem('calvary_reloaded_for_ver');
        const needsUpdateReload = (loadedCodeVer && loadedCodeVer !== serverVer) || (!loadedCodeVer && localVer && localVer !== serverVer);

        if (needsUpdateReload && alreadyReloadedForVer !== serverVer) {
          this._isApplyingAppUpdate = true;
          sessionStorage.setItem('calvary_reloaded_for_ver', serverVer);
          localStorage.setItem('calvary_app_code_ver', serverVer);

          this.showCloudSyncBanner(
            'updating',
            '새로운 앱 기능을 적용하고 있습니다',
            '잠시 후 최신 화면으로 자동 전환됩니다 ✨'
          );

          if ('caches' in window) {
            try {
              const names = await caches.keys();
              await Promise.all(names.map(name => caches.delete(name)));
            } catch (e) { }
          }

          await new Promise(resolve => setTimeout(resolve, 450));
          window.location.reload();
        } else if (!localVer) {
          localStorage.setItem('calvary_app_code_ver', serverVer);
        }
      } catch (e) {
        // silent catch
      }
    };

    checkVersion();
    setInterval(checkVersion, 300000); // 5분 주기 여유 있는 체크
    window.addEventListener('focus', checkVersion);
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') checkVersion();
    });
  }

  initReadTimestamps() {
    let lastRead = JSON.parse(localStorage.getItem('calvary_choir_last_read') || 'null');
    if (!lastRead) {
      const now = Date.now();
      lastRead = {
        notice: now,
        praise: now,
        schedule: now,
        prayer: now
      };
      localStorage.setItem('calvary_choir_last_read', JSON.stringify(lastRead));
    }
  }

  updateUnreadBadges() {
    const lastRead = JSON.parse(localStorage.getItem('calvary_choir_last_read') || '{}');
    const tabs = ['notice', 'praise', 'schedule', 'prayer'];

    tabs.forEach(tabKey => {
      const badgeEl = document.getElementById(`unread-badge-${tabKey}`);
      if (!badgeEl) return;

      const lastTime = lastRead[tabKey] || 0;
      let items = [];
      if (tabKey === 'notice') items = this.storage.get(STORAGE_KEYS.NOTICES);
      else if (tabKey === 'praise') items = this.storage.get(STORAGE_KEYS.PRAISES);
      else if (tabKey === 'schedule') items = this.storage.get(STORAGE_KEYS.SCHEDULES);
      else if (tabKey === 'prayer') items = this.storage.get(STORAGE_KEYS.PRAYERS);

      const unreadCount = items.filter(item => {
        let created = item.createdAt;
        if (!created && item.id) {
          const match = item.id.match(/\d{10,}/);
          if (match) created = parseInt(match[0], 10);
        }
        if (!created && item.date) {
          const dTime = new Date(`${item.date}T23:59:59`).getTime();
          if (!isNaN(dTime)) created = dTime;
        }
        return created && created > lastTime;
      }).length;

      if (unreadCount > 0) {
        badgeEl.textContent = unreadCount > 99 ? '99+' : unreadCount;
        badgeEl.classList.remove('hidden');
      } else {
        badgeEl.textContent = '0';
        badgeEl.classList.add('hidden');
      }
    });
  }

  markTabAsRead(tabKey) {
    if (['notice', 'praise', 'schedule', 'prayer'].includes(tabKey)) {
      const lastRead = JSON.parse(localStorage.getItem('calvary_choir_last_read') || '{}');
      lastRead[tabKey] = Date.now();
      localStorage.setItem('calvary_choir_last_read', JSON.stringify(lastRead));
      this.updateUnreadBadges();
    }
  }

  requestNotificationPermission() {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }

  triggerNotification(title, body) {
    if ('Notification' in window && Notification.permission === 'granted') {
      try {
        new Notification(title, {
          body: body,
          icon: 'assets/church-logo.svg'
        });
      } catch (e) {
        console.log('Notification API error:', e);
      }
    }
  }

  // PWA 원터치 설치 프롬프트 바인딩 (안드로이드)
  setupPwaInstall() {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      const btnNative = document.getElementById('btnNativeInstall');
      if (btnNative) {
        btnNative.classList.remove('hidden');
      }
    });

    document.getElementById('btnPwaGuide')?.addEventListener('click', () => {
      this.openModal('modalPwaGuide');
    });

    document.getElementById('btnOfficerToggle')?.addEventListener('click', () => {
      if (this.storage.isOfficer()) {
        this.exitOfficerMode();
      } else {
        this.openPinModal();
      }
    });

    document.getElementById('btnExitOfficer')?.addEventListener('click', () => {
      this.exitOfficerMode();
    });
  }

  triggerNativeInstall() {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      this.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted PWA installation');
        }
        this.deferredPrompt = null;
        this.closeModal('modalPwaGuide');
      });
    }
  }

  // ----------------------------------------------------
  // 1. 임원 관리자 모드 & PIN 번호 인증
  // ----------------------------------------------------
  openPinModal() {
    this.enteredPin = '';
    this.updatePinDisplay();
    document.getElementById('pinErrorMsg').classList.add('hidden');
    this.openModal('modalPin');
  }

  appendPin(num) {
    if (this.enteredPin.length < 4) {
      this.enteredPin += num;
      this.updatePinDisplay();
    }
  }

  clearPin() {
    this.enteredPin = '';
    this.updatePinDisplay();
    document.getElementById('pinErrorMsg').classList.add('hidden');
  }

  updatePinDisplay() {
    const input = document.getElementById('pinInput');
    if (input) {
      input.value = this.enteredPin;
    }
  }

  submitPin() {
    const validPin = this.storage.getOfficerPin();
    if (this.enteredPin === validPin) {
      this.storage.setOfficer(true);
      this.closeModal('modalPin');
      this.checkOfficerStatus();
      alert('관리자 모드로 전환되었습니다. 게시글 등록 및 관리가 가능합니다.');
    } else {
      document.getElementById('pinErrorMsg').classList.remove('hidden');
      this.enteredPin = '';
      this.updatePinDisplay();
    }
  }

  checkOfficerStatus(skipRender = false) {
    const isOfficer = this.storage.isOfficer();
    const banner = document.getElementById('officerBanner');
    const toggleBtn = document.getElementById('btnOfficerToggle');

    if (isOfficer) {
      if (banner) banner.classList.remove('hidden');
      if (toggleBtn) {
        toggleBtn.classList.add('is-active');
        toggleBtn.title = '관리자 모드 실행 중 (클릭시 종료/설정)';
      }
      document.querySelectorAll('.officer-only').forEach(el => el.classList.remove('hidden'));
    } else {
      if (banner) banner.classList.add('hidden');
      if (toggleBtn) {
        toggleBtn.classList.remove('is-active');
        toggleBtn.title = '관리자 접속';
      }
      document.querySelectorAll('.officer-only').forEach(el => el.classList.add('hidden'));
    }

    if (this._syncBannerVisible) {
      this.updateCloudSyncBannerOffset();
    }

    if (!skipRender) {
      this.renderAll();
    }
  }

  exitOfficerMode() {
    this.storage.setOfficer(false);
    this.checkOfficerStatus();
    alert('관리자 모드가 종료되었습니다. 일반 화면으로 돌아갑니다.');
  }

  // ----------------------------------------------------
  // 2. 탭 전환 및 화면 렌더링
  // ----------------------------------------------------
  switchTab(tabId) {
    if (tabId === 'member' && !this.storage.isMemberUnlocked() && !this.storage.isOfficer()) {
      this.openMemberPinModal();
      return;
    }

    // 다른 메뉴(탭)로 나갈 때나 찬양 탭으로 다시 돌아올 때 연습 도우미 및 재생 음원 완전 초기화
    if (this.currentTab !== tabId || tabId === 'praise') {
      this.resetAllPracticeHelpers();
    }

    this.currentTab = tabId;
    document.querySelectorAll('.tab-item').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    document.querySelectorAll('.tab-pane').forEach(pane => {
      pane.classList.toggle('active', pane.id === `tab-${tabId}`);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.renderTab(tabId);
    this.markTabAsRead(tabId);
  }

  renderCurrentTab() {
    this.renderTab(this.currentTab);
  }

  renderTab(tabId) {
    this.renderedTabs.add(tabId);
    if (tabId === 'notice') this.renderNotices();
    else if (tabId === 'praise') this.renderPraises();
    else if (tabId === 'schedule') this.renderSchedules();
    else if (tabId === 'member') this.renderMembers();
    else if (tabId === 'prayer') this.renderPrayers();
  }

  renderAll() {
    this.renderCurrentTab();
  }

  switchPraiseSubtab(subtab) {
    this.targetPraiseId = null;

    // 찬양 탭 내 서브탭 전환 시(성가대 찬양 영상 ↔ 파트별 연습실) 연습도우미 및 음원 초기화
    this.resetAllPracticeHelpers();

    this.praiseSubtab = subtab;
    document.querySelectorAll('.sub-tab-btn[data-subtab]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.subtab === subtab);
    });
    document.getElementById('praiseSubtabAll').classList.toggle('active', subtab === 'all');
    document.getElementById('praiseSubtabPart').classList.toggle('active', subtab === 'part');

    const isAll = (subtab === 'all');
    const dateFilterBox = document.getElementById('praiseDateFilterBox');
    if (dateFilterBox) {
      dateFilterBox.style.display = (isAll && !this.praiseSearchQuery) ? 'flex' : 'none';
    }

    // 돋보기 검색 버튼과 검색창은 성가대 찬양 영상 메뉴에만 노출
    const searchBtn = document.getElementById('btnTogglePraiseSearch');
    const searchBox = document.getElementById('praiseSearchBox');
    if (searchBtn) {
      searchBtn.style.display = isAll ? 'flex' : 'none';
    }
    if (searchBox) {
      if (!isAll) {
        searchBox.classList.add('hidden');
      } else if (this.isPraiseSearchOpen) {
        searchBox.classList.remove('hidden');
      }
    }

    this.renderPraises();
  }

  filterPartPraise(part) {
    this.targetPraiseId = null;

    // 다른 파트로 나갈 때(전체/4부/소프라노/알토/테너/베이스 파트 칩 변경 시) 연습도우미 및 음원 초기화
    this.resetAllPracticeHelpers();

    this.partPraiseFilter = part;
    document.querySelectorAll('.part-chip').forEach(chip => {
      chip.classList.toggle('active', chip.dataset.part === part);
    });
    this.renderPraises();
  }

  filterMembers(mpart) {
    this.memberPartFilter = mpart;
    document.querySelectorAll('.member-chip').forEach(chip => {
      chip.classList.toggle('active', chip.dataset.mpart === mpart);
    });
    this.renderMembers();
  }

  filterPraiseByMonth(val) {
    this.targetPraiseId = null;
    this.resetAllPracticeHelpers();
    this.praiseMonthFilter = val;
    this.renderPraises();

    // 모바일 브라우저(특히 삼성 브라우저)에서 라디오버튼 선택 즉시
    // 네이티브 팝업 대화상자가 부드럽게 닫히도록 포커스 해제
    const selectEl = document.getElementById('praiseMonthFilter');
    if (selectEl && typeof selectEl.blur === 'function') {
      selectEl.blur();
    }
  }

  // ----------------------------------------------------
  // 🔍 7. 찬양곡 실시간 초간편 곡명 검색
  // ----------------------------------------------------
  togglePraiseSearch() {
    this.isPraiseSearchOpen = !this.isPraiseSearchOpen;
    const searchBox = document.getElementById('praiseSearchBox');
    const searchBtn = document.getElementById('btnTogglePraiseSearch');
    const searchInput = document.getElementById('praiseSearchInput');
    const clearBtn = document.getElementById('btnClearPraiseSearch');

    if (searchBox) {
      searchBox.classList.toggle('hidden', !this.isPraiseSearchOpen);
    }
    if (searchBtn) {
      searchBtn.classList.toggle('active', this.isPraiseSearchOpen);
    }
    if (this.isPraiseSearchOpen) {
      if (searchInput) {
        setTimeout(() => searchInput.focus(), 100);
      }
      if (clearBtn) {
        const hasText = searchInput && searchInput.value.trim().length > 0;
        clearBtn.style.display = hasText ? 'flex' : 'none';
      }
    } else {
      if (this.praiseSearchQuery || (searchInput && searchInput.value)) {
        this.clearPraiseSearch();
      }
    }
  }

  onPraiseSearchInput(val) {
    const rawVal = val || '';
    const cleaned = rawVal.trim().toLowerCase();

    const clearBtn = document.getElementById('btnClearPraiseSearch');
    if (clearBtn) {
      clearBtn.style.display = rawVal.length > 0 ? 'flex' : 'none';
    }

    if (this.praiseSearchQuery === cleaned) return;
    this.resetAllPracticeHelpers();
    this.praiseSearchQuery = cleaned;
    this.renderPraises();
  }

  clearPraiseSearch() {
    this.resetAllPracticeHelpers();
    const searchInput = document.getElementById('praiseSearchInput');
    const clearBtn = document.getElementById('btnClearPraiseSearch');
    const currentVal = searchInput ? searchInput.value : '';

    if (clearBtn) clearBtn.style.display = 'none';

    if (!this.praiseSearchQuery && !currentVal) {
      if (searchInput) searchInput.value = '';
      return;
    }

    if (this.isClearingPraiseSearch) return;
    this.isClearingPraiseSearch = true;

    this.praiseSearchQuery = '';
    if (searchInput) {
      searchInput.value = '';
      searchInput.focus();
    }
    this.renderPraises();

    setTimeout(() => {
      this.isClearingPraiseSearch = false;
    }, 200);
  }

  populatePraiseMonthDropdown() {
    const selectEl = document.getElementById('praiseMonthFilter');
    if (!selectEl) return;
    const praises = this.storage.get(STORAGE_KEYS.PRAISES);

    const months = new Set();
    praises.filter(p => p.type === 'all').forEach(p => {
      // 26년 1월부터만 월별 선택 옵션 추출
      if (p.date && p.date >= '2026-01-01' && p.date.length >= 7) {
        months.add(p.date.substring(0, 7));
      }
    });

    const sortedMonths = Array.from(months).sort((a, b) => b.localeCompare(a));

    let html = `
      <option value="LATEST">✨ 이번 주 찬양 (최신 주일)</option>
    `;

    sortedMonths.forEach(m => {
      const [year, month] = m.split('-');
      html += `<option value="${m}">${year}년 ${parseInt(month, 10)}월 찬양 모음</option>`;
    });

    // 🛑 중요: 내용이 동일하면 innerHTML을 재할당하지 않음!
    // 재할당 시 모바일(특히 삼성 브라우저)에서 라디오버튼 터치 도중 DOM 노드가 파괴되어 팝업이 닫히지 않고 고립됨
    if (selectEl.innerHTML.replace(/\s+/g, '') !== html.replace(/\s+/g, '')) {
      selectEl.innerHTML = html;
    }
    if (selectEl.value !== this.praiseMonthFilter) {
      selectEl.value = this.praiseMonthFilter;
    }
  }

  escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  confirmAction(message, onConfirm) {
    const msgEl = document.getElementById('confirmModalMsg');
    const btnExec = document.getElementById('btnConfirmExecute');
    if (msgEl) msgEl.textContent = message;
    if (btnExec) {
      btnExec.onclick = () => {
        this.closeModal('modalConfirm');
        if (typeof onConfirm === 'function') onConfirm();
      };
    }
    this.openModal('modalConfirm');
  }

  animateRemoveCard(btnElement, callback) {
    const cardEl = btnElement ? (btnElement.closest('.item-card') || btnElement.closest('.member-card') || btnElement.closest('tr')) : null;
    if (cardEl) {
      cardEl.style.transition = 'all 0.22s cubic-bezier(0.4, 0, 0.2, 1)';
      cardEl.style.opacity = '0';
      cardEl.style.transform = 'scale(0.92) translateY(-6px)';
      cardEl.style.maxHeight = '0px';
      cardEl.style.paddingTop = '0px';
      cardEl.style.paddingBottom = '0px';
      cardEl.style.marginTop = '0px';
      cardEl.style.marginBottom = '0px';
      cardEl.style.overflow = 'hidden';

      setTimeout(() => {
        if (typeof callback === 'function') callback();
      }, 230);
    } else {
      if (typeof callback === 'function') callback();
    }
  }

  openImageViewer(url, caption = '') {
    if (!url) return;
    const imgEl = document.getElementById('viewerImage');
    const capEl = document.getElementById('viewerCaption');
    if (imgEl) imgEl.src = url;
    if (capEl) {
      if (caption) {
        capEl.textContent = caption;
        capEl.classList.remove('hidden');
      } else {
        capEl.classList.add('hidden');
      }
    }
    this.resetZoomImage();
    this.initImageViewerGestures();
    this.openModal('modalImageViewer');
  }

  zoomImage(factor) {
    this.viewerScale = Math.min(Math.max(1, (this.viewerScale || 1) * factor), 4);
    if (this.viewerScale === 1) {
      this.viewerTranslateX = 0;
      this.viewerTranslateY = 0;
    }
    this.updateViewerTransform();
  }

  resetZoomImage() {
    this.viewerScale = 1;
    this.viewerTranslateX = 0;
    this.viewerTranslateY = 0;
    this.updateViewerTransform();
  }

  updateViewerTransform() {
    const imgEl = document.getElementById('viewerImage');
    const wrapEl = document.getElementById('viewerImgWrap');
    if (!imgEl) return;
    const s = this.viewerScale || 1;
    const tx = this.viewerTranslateX || 0;
    const ty = this.viewerTranslateY || 0;
    imgEl.style.transform = `translate(${tx}px, ${ty}px) scale(${s})`;
    if (wrapEl) {
      wrapEl.style.cursor = s > 1 ? 'grab' : 'default';
    }
  }

  initImageViewerGestures() {
    const wrap = document.getElementById('viewerImgWrap');
    if (!wrap || wrap.dataset.gesturesBound) return;
    wrap.dataset.gesturesBound = 'true';

    let initialDist = 0;
    let initialScale = 1;
    let startX = 0;
    let startY = 0;
    let isDragging = false;
    let lastTapTime = 0;

    // 모바일 터치 피치 줌 & 드래그 조작
    wrap.addEventListener('touchstart', (e) => {
      if (e.touches.length === 2) {
        initialDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        initialScale = this.viewerScale || 1;
      } else if (e.touches.length === 1) {
        const now = Date.now();
        if (now - lastTapTime < 300) {
          if ((this.viewerScale || 1) > 1.2) {
            this.resetZoomImage();
          } else {
            this.viewerScale = 2.5;
            this.viewerTranslateX = 0;
            this.viewerTranslateY = 0;
            this.updateViewerTransform();
          }
          lastTapTime = 0;
          return;
        }
        lastTapTime = now;

        if ((this.viewerScale || 1) > 1) {
          isDragging = true;
          startX = e.touches[0].clientX - (this.viewerTranslateX || 0);
          startY = e.touches[0].clientY - (this.viewerTranslateY || 0);
        }
      }
    }, { passive: true });

    wrap.addEventListener('touchmove', (e) => {
      if (e.touches.length === 2 && initialDist > 0) {
        const dist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        this.viewerScale = Math.min(Math.max(1, initialScale * (dist / initialDist)), 4);
        if (this.viewerScale === 1) {
          this.viewerTranslateX = 0;
          this.viewerTranslateY = 0;
        }
        this.updateViewerTransform();
      } else if (e.touches.length === 1 && isDragging && (this.viewerScale || 1) > 1) {
        this.viewerTranslateX = e.touches[0].clientX - startX;
        this.viewerTranslateY = e.touches[0].clientY - startY;
        this.updateViewerTransform();
      }
    }, { passive: true });

    wrap.addEventListener('touchend', (e) => {
      if (e.touches.length < 2) initialDist = 0;
      if (e.touches.length === 0) isDragging = false;
    }, { passive: true });

    // PC 마우스 휠 확대/축소 지원
    wrap.addEventListener('wheel', (e) => {
      e.preventDefault();
      const delta = e.deltaY < 0 ? 1.15 : 0.85;
      this.zoomImage(delta);
    }, { passive: false });

    // PC 마우스 드래그 구석구석 이동 조작 지원
    let isMouseDragging = false;
    let mouseStartX = 0;
    let mouseStartY = 0;

    wrap.addEventListener('mousedown', (e) => {
      if (e.button === 0 && (this.viewerScale || 1) > 1) {
        isMouseDragging = true;
        mouseStartX = e.clientX - (this.viewerTranslateX || 0);
        mouseStartY = e.clientY - (this.viewerTranslateY || 0);
        wrap.style.cursor = 'grabbing';
      }
    });

    window.addEventListener('mousemove', (e) => {
      if (isMouseDragging && (this.viewerScale || 1) > 1) {
        this.viewerTranslateX = e.clientX - mouseStartX;
        this.viewerTranslateY = e.clientY - mouseStartY;
        this.updateViewerTransform();
        wrap.style.cursor = 'grabbing';
      }
    });

    const stopMouseDrag = () => {
      if (isMouseDragging) {
        isMouseDragging = false;
        wrap.style.cursor = (this.viewerScale || 1) > 1 ? 'grab' : 'default';
      }
    };

    window.addEventListener('mouseup', stopMouseDrag);
    wrap.addEventListener('mouseleave', stopMouseDrag);

    // PC 마우스 더블클릭 토글 줌
    wrap.addEventListener('dblclick', () => {
      if ((this.viewerScale || 1) > 1.2) {
        this.resetZoomImage();
      } else {
        this.viewerScale = 2.5;
        this.viewerTranslateX = 0;
        this.viewerTranslateY = 0;
        this.updateViewerTransform();
      }
    });
  }

  getItemTimestamp(item) {
    if (!item) return 0;
    if (item.createdAt) return item.createdAt;
    if (item.id) {
      const match = String(item.id).match(/\d{10,}/);
      if (match) return parseInt(match[0], 10);
    }
    return 0;
  }

  // ----------------------------------------------------
  // 📢 3. 공지사항 렌더링 & 등록
  // ----------------------------------------------------
  // ----------------------------------------------------
  // 📢 3. 공지사항 렌더링, 검색, 즐겨찾기 & 등록
  // ----------------------------------------------------
  toggleNoticeSearch() {
    this.isNoticeSearchOpen = !this.isNoticeSearchOpen;
    const searchBox = document.getElementById('noticeSearchBox');
    const searchBtn = document.getElementById('btnToggleNoticeSearch');
    const searchInput = document.getElementById('noticeSearchInput');
    const clearBtn = document.getElementById('btnClearNoticeSearch');

    if (searchBox) {
      searchBox.classList.toggle('hidden', !this.isNoticeSearchOpen);
    }
    if (searchBtn) {
      searchBtn.classList.toggle('active', this.isNoticeSearchOpen);
    }
    if (this.isNoticeSearchOpen) {
      if (searchInput) {
        setTimeout(() => searchInput.focus(), 100);
      }
      if (clearBtn) {
        const hasText = searchInput && searchInput.value.trim().length > 0;
        clearBtn.style.display = hasText ? 'flex' : 'none';
      }
    } else {
      if (this.noticeSearchQuery || (searchInput && searchInput.value)) {
        this.clearNoticeSearch();
      }
    }
  }

  onNoticeSearchInput(val) {
    const rawVal = val || '';
    const cleaned = rawVal.trim().toLowerCase();

    const clearBtn = document.getElementById('btnClearNoticeSearch');
    if (clearBtn) {
      clearBtn.style.display = rawVal.length > 0 ? 'flex' : 'none';
    }

    if (this.noticeSearchQuery === cleaned) return;
    this.noticeSearchQuery = cleaned;
    this.renderNotices();
  }

  clearNoticeSearch() {
    const searchInput = document.getElementById('noticeSearchInput');
    const clearBtn = document.getElementById('btnClearNoticeSearch');
    const currentVal = searchInput ? searchInput.value : '';

    if (clearBtn) clearBtn.style.display = 'none';

    // 🛑 1. 이미 검색어와 입력창이 모두 비어있는 경우: 불필요한 DOM 전체 파괴/재생성 및 모바일 멈춤 현상 100% 방지
    if (!this.noticeSearchQuery && !currentVal) {
      if (searchInput) searchInput.value = '';
      return;
    }

    // 🛑 2. 지우기 버튼 연속 연타 차단 (Debounce Lock)
    if (this.isClearingNoticeSearch) return;
    this.isClearingNoticeSearch = true;
    setTimeout(() => { this.isClearingNoticeSearch = false; }, 300);

    this.noticeSearchQuery = '';
    if (searchInput) searchInput.value = '';
    this.renderNotices();
  }

  getStarSvg(isFav) {
    if (isFav) {
      return `<svg class="star-svg is-starred" width="20" height="20" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
    }
    return `<svg class="star-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
  }

  setNoticeFilter(filter) {
    this.noticeFilter = filter || 'all';
    document.querySelectorAll('[data-notice-filter]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-notice-filter') === this.noticeFilter);
    });
    this.renderNotices();
  }

  toggleNoticeFavorite(noticeId, event) {
    if (event) event.stopPropagation();

    const currentFavs = this.storage.getFavoriteNoticeIds();
    const isNowFav = !currentFavs.includes(noticeId);
    this.storage.setFavoriteNotice(noticeId, isNowFav);
    this.updateNoticeFavBadge();

    if (this.noticeFilter === 'fav') {
      this.renderNotices();
      return;
    }

    const cardEl = document.getElementById(`notice_card_${noticeId}`);
    if (cardEl) {
      const starBtn = cardEl.querySelector('.btn-star-notice');
      if (starBtn) {
        starBtn.classList.toggle('is-starred', isNowFav);
        starBtn.title = isNowFav ? '즐겨찾기 해제' : '즐겨찾기 추가';
        starBtn.innerHTML = this.getStarSvg(isNowFav);
      }
    }
  }

  updateNoticeFavBadge() {
    const badge = document.getElementById('noticeFavCountBadge');
    if (badge) {
      const favIds = this.storage.getFavoriteNoticeIds();
      badge.textContent = favIds.length;
    }
  }

  getShareButtonHtml(type, id) {
    return `
      <button type="button" class="btn-card-share" onclick="app.shareItem('${type}', '${id}', event)" title="공유하기">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="18" cy="5" r="3"></circle>
          <circle cx="6" cy="12" r="3"></circle>
          <circle cx="18" cy="19" r="3"></circle>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
        </svg>
      </button>
    `;
  }

  getYoutubeVideoId(url) {
    if (!url) return null;
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    return match ? match[1] : null;
  }

  getItemShareImageUrl(type, item) {
    if (!item) return '';

    const resolveUrl = (rawUrl) => {
      if (!rawUrl) return null;
      const trimmed = String(rawUrl).trim();
      const vid = this.getYoutubeVideoId(trimmed);
      if (vid) {
        return `https://img.youtube.com/vi/${vid}/hqdefault.jpg`;
      }
      const driveUrl = this.convertGoogleDriveUrl(trimmed);
      if (driveUrl !== trimmed || trimmed.startsWith('data:image/') || /\.(jpg|jpeg|png|gif|webp|svg)($|\?)/i.test(trimmed)) {
        return driveUrl;
      }
      return null;
    };

    if (type === 'notice') {
      if (item.mediaList && Array.isArray(item.mediaList) && item.mediaList.length > 0) {
        for (const m of item.mediaList) {
          if (m && m.url) {
            const found = resolveUrl(m.url);
            if (found) return found;
          }
        }
      }
      if (item.imageUrl) {
        const found = resolveUrl(item.imageUrl);
        if (found) return found;
      }
      if (item.youtubeUrl) {
        const found = resolveUrl(item.youtubeUrl);
        if (found) return found;
      }
    } else if (type === 'praise') {
      if (item.youtubeUrl) {
        const found = resolveUrl(item.youtubeUrl);
        if (found) return found;
      }
      if (item.imageUrl) {
        const found = resolveUrl(item.imageUrl);
        if (found) return found;
      }
    } else if (type === 'schedule') {
      if (item.imageUrl) {
        const found = resolveUrl(item.imageUrl);
        if (found) return found;
      }
    } else if (type === 'prayer') {
      if (item.imageUrl) {
        const found = resolveUrl(item.imageUrl);
        if (found) return found;
      }
    }

    const defaultImg = `${window.location.origin}${window.location.pathname.replace(/\/[^\/]*$/, '/')}/assets/icon-512.png`;
    return defaultImg;
  }

  updateOpenGraphMetaTags(title, description, imageUrl, url) {
    const setMeta = (property, content) => {
      if (!content) return;
      let meta = document.querySelector(`meta[property="${property}"]`) || document.querySelector(`meta[name="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        if (property.startsWith('og:')) {
          meta.setAttribute('property', property);
        } else {
          meta.setAttribute('name', property);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    if (title) {
      setMeta('og:title', title);
      setMeta('twitter:title', title);
    }
    if (description) {
      setMeta('og:description', description);
      setMeta('twitter:description', description);
    }
    if (imageUrl) {
      setMeta('og:image', imageUrl);
      setMeta('twitter:image', imageUrl);
    }
    if (url) {
      setMeta('og:url', url);
    }
  }

  shareItem(type, id, event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    let title = '';
    let text = '';
    let item = null;

    if (type === 'notice') {
      const notices = this.storage.get(STORAGE_KEYS.NOTICES) || [];
      item = notices.find(n => n.id === id);
      if (item) {
        title = `[갈보리교회 임마누엘성가대] 공지사항: ${item.title}`;
        text = item.content ? item.content.slice(0, 100).replace(/\r?\n/g, ' ').trim() + '...' : item.title;
      }
    } else if (type === 'praise') {
      const praises = this.storage.get(STORAGE_KEYS.PRAISES) || [];
      item = praises.find(p => p.id === id);
      if (item) {
        const partNames = { 'ALL_PART': '4부 합창', 'S': '소프라노', 'A': '알토', 'T': '테너', 'B': '베이스' };
        const partStr = item.type === 'part' ? ` (${partNames[item.partTarget] || '파트'} 연습)` : '';
        title = `[갈보리교회 임마누엘성가대] 찬양: ${item.title}${partStr}`;
        text = `${item.date || ''} 성가대 찬양 음원/영상입니다.`;
      }
    } else if (type === 'schedule') {
      const schedules = this.storage.get(STORAGE_KEYS.SCHEDULES) || [];
      item = schedules.find(s => s.id === id);
      if (item) {
        title = `[갈보리교회 임마누엘성가대] 주요일정: ${item.title}`;
        text = `📍 장소: ${item.location || ''}`;
      }
    } else if (type === 'prayer') {
      const prayers = this.storage.get(STORAGE_KEYS.PRAYERS) || [];
      item = prayers.find(p => p.id === id);
      if (item) {
        title = `[갈보리교회 임마누엘성가대] 중보기도 (${item.author || '익명'} 대원)`;
        text = item.content ? item.content.slice(0, 100).replace(/\r?\n/g, ' ').trim() + '...' : '';
      }
    }

    if (!item) return;

    const imageUrl = this.getItemShareImageUrl(type, item);
    const originUrl = window.location.origin;
    const basePath = window.location.pathname.replace(/\/[^\/]*$/, '/');
    const shareUrl = `${originUrl}${basePath}share?tab=${type}&id=${id}`;

    this.updateOpenGraphMetaTags(title, text, imageUrl, shareUrl);

    if (navigator.share) {
      navigator.share({
        title: title,
        url: shareUrl
      }).catch(err => {
        if (err.name !== 'AbortError') {
          this.copyToClipboard(shareUrl);
        }
      });
    } else {
      this.copyToClipboard(shareUrl);
    }
  }

  copyToClipboard(url) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(() => {
        this.showToast('🔗 공유 링크가 복사되었습니다! 카카오톡이나 메시지에 붙여넣어 공유해보세요.');
      }).catch(() => {
        this.fallbackCopyText(url);
      });
    } else {
      this.fallbackCopyText(url);
    }
  }

  fallbackCopyText(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      this.showToast('🔗 공유 링크가 복사되었습니다! 카카오톡이나 메시지에 붙여넣어 공유해보세요.');
    } catch (err) {
      alert(`공유 링크: ${text}`);
    }
    document.body.removeChild(textArea);
  }

  showToast(msg) {
    const toast = document.getElementById('appToast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    if (this.toastTimeout) clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  scrollToTargetCard(cardEl) {
    if (!cardEl) return;
    const appContent = document.querySelector('.app-content');
    if (!appContent) return;

    const alignCardToTop = () => {
      if (!cardEl || !cardEl.isConnected) return;
      const cardRect = cardEl.getBoundingClientRect();
      const contentRect = appContent.getBoundingClientRect();
      const relativeTop = cardRect.top - contentRect.top;
      const targetTop = appContent.scrollTop + relativeTop - 14;
      appContent.scrollTop = Math.max(0, targetTop);

      try {
        cardEl.scrollIntoView({ behavior: 'instant', block: 'start' });
      } catch (e) {
        try { cardEl.scrollIntoView(true); } catch (err) { }
      }
    };

    // 1. 단 1회 즉시 스크롤
    alignCardToTop();

    // 2. 해당 탭 내 동적 높이 변화(미디어/이미지 로딩 등)를 관찰하여 최종 위치 100% 정밀 고정
    if (window.ResizeObserver) {
      const activePane = cardEl.closest('.tab-pane') || appContent;
      let ro = new ResizeObserver(() => {
        alignCardToTop();
      });
      ro.observe(activePane);
      setTimeout(() => {
        if (ro) {
          ro.disconnect();
          ro = null;
        }
      }, 1500);
    } else {
      setTimeout(alignCardToTop, 250);
    }
  }

  checkDeepLink() {
    const urlParams = new URLSearchParams(window.location.search);
    const targetTab = urlParams.get('tab');
    const targetId = urlParams.get('id');

    if (!targetTab || !['notice', 'praise', 'schedule', 'prayer'].includes(targetTab)) {
      return;
    }

    this.pendingDeepLink = { tab: targetTab, id: targetId };
    this.currentTab = targetTab;

    document.querySelectorAll('.tab-item').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === targetTab);
    });
    document.querySelectorAll('.tab-pane').forEach(pane => {
      pane.classList.toggle('active', pane.id === `tab-${targetTab}`);
    });

    if (!targetId) {
      this.renderTab(targetTab);
      return;
    }

    this.applyPendingDeepLink();
  }

  showDeepLinkLoading(targetTab) {
    const loadingLabels = {
      praise: '공유된 찬양 음원을 확인하는 중입니다...',
      notice: '공유된 공지사항을 확인하는 중입니다...',
      schedule: '공유된 주요 일정을 확인하는 중입니다...',
      prayer: '공유된 중보기도를 확인하는 중입니다...'
    };
    const msg = loadingLabels[targetTab] || '공유된 항목을 확인하는 중입니다...';
    const html = `
      <div class="item-card" style="text-align:center; padding: 44px 20px; background: #FFFFFF; border-radius: 14px; border: 1.5px solid #E2E8F0; margin: 16px 0; box-shadow: 0 4px 12px rgba(0,0,0,0.04);">
        <div style="font-size: 32px; margin-bottom: 12px; display: inline-block;">⏳</div>
        <p style="font-weight: 800; color: #0F172A; font-size: 16px; margin: 0 0 6px 0;">${msg}</p>
        <p style="font-size: 13px; color: #64748B; margin: 0;">최신 등록 데이터를 실시간으로 안전하게 동기화하고 있습니다.</p>
      </div>
    `;

    if (targetTab === 'notice') {
      const el = document.getElementById('noticeList');
      if (el) el.innerHTML = html;
    } else if (targetTab === 'praise') {
      const elAll = document.getElementById('praiseListAll');
      const elPart = document.getElementById('praiseListPart');
      if (elAll) elAll.innerHTML = html;
      if (elPart) elPart.innerHTML = html;
    } else if (targetTab === 'schedule') {
      const el = document.getElementById('scheduleList');
      if (el) el.innerHTML = html;
    } else if (targetTab === 'prayer') {
      const el = document.getElementById('prayerList');
      if (el) el.innerHTML = html;
    }
  }

  async applyPendingDeepLink() {
    if (!this.pendingDeepLink || !this.pendingDeepLink.id) return;
    const { tab: targetTab, id: targetId } = this.pendingDeepLink;

    // 1. 현재 로컬 저장소에 해당 ID를 가진 글이 존재하는지 4개 메뉴 전수 검사
    let targetExists = false;
    if (targetTab === 'notice') {
      const notices = this.storage.get(STORAGE_KEYS.NOTICES) || [];
      targetExists = notices.some(n => n.id === targetId);
    } else if (targetTab === 'praise') {
      const praises = this.storage.get(STORAGE_KEYS.PRAISES) || [];
      targetExists = praises.some(p => p.id === targetId);
    } else if (targetTab === 'schedule') {
      const schedules = this.storage.get(STORAGE_KEYS.SCHEDULES) || [];
      targetExists = schedules.some(s => s.id === targetId);
    } else if (targetTab === 'prayer') {
      const prayers = this.storage.get(STORAGE_KEYS.PRAYERS) || [];
      targetExists = prayers.some(p => p.id === targetId);
    }

    // 2. 신규 글 등록 직후 등 로컬에 데이터가 아직 없는 경우:
    // 엉뚱한 기본 최신글이 화면에 노출되지 않도록 로딩 피드백을 보여주고,
    // 클라우드 동기화 완료를 대기한 뒤 100% 최신 데이터로 재실행!
    if (!targetExists && !this._deepLinkSyncDone) {
      this._deepLinkSyncDone = true;
      this.showDeepLinkLoading(targetTab);
      try {
        await this.storage.syncFromCloud();
      } catch (err) {
        console.warn('Deep link cloud sync wait error:', err);
      }
      return this.applyPendingDeepLink();
    }

    // 3. 각 메뉴별 상세 렌더링 및 하위 탭/보관함/필터 자동 전환
    if (targetTab === 'notice') {
      this.noticeFilter = 'all';
      this.noticeSearchQuery = '';
      const searchInput = document.getElementById('noticeSearchInput');
      if (searchInput) searchInput.value = '';

      const notices = this.storage.get(STORAGE_KEYS.NOTICES) || [];
      const sortedNotices = [...notices].sort((a, b) => {
        const timeDiff = this.getItemTimestamp(b) - this.getItemTimestamp(a);
        if (timeDiff !== 0) return timeDiff;
        return (b.date || '').localeCompare(a.date || '');
      });

      const sortedIdx = sortedNotices.findIndex(n => n.id === targetId);
      const MAX_RECENT = 4;

      if (sortedIdx >= MAX_RECENT || sortedIdx !== -1) {
        this.isNoticeArchiveOpen = true;
        this.visibleNoticeArchiveCount = Math.max(this.visibleNoticeArchiveCount || 5, sortedIdx + 5);
      }

      if (!this.expandedNoticeIds) this.expandedNoticeIds = new Set();
      this.expandedNoticeIds.add(targetId);

      this.renderNotices();
    } else if (targetTab === 'praise') {
      const praises = this.storage.get(STORAGE_KEYS.PRAISES) || [];
      const item = praises.find(p => p.id === targetId);
      this.targetPraiseId = targetId;

      if (item) {
        if (item.type === 'part') {
          this.praiseSubtab = 'part';
          this.partPraiseFilter = item.partTarget || 'ALL';
        } else {
          this.praiseSubtab = 'all';
          if (item.date && item.date.length >= 7) {
            this.praiseMonthFilter = item.date.substring(0, 7);
          } else {
            this.praiseMonthFilter = 'LATEST';
          }
        }
        document.querySelectorAll('.sub-tab-btn[data-subtab]').forEach(btn => {
          btn.classList.toggle('active', btn.dataset.subtab === this.praiseSubtab);
        });
        const subAll = document.getElementById('praiseSubtabAll');
        const subPart = document.getElementById('praiseSubtabPart');
        if (subAll) subAll.classList.toggle('active', this.praiseSubtab === 'all');
        if (subPart) subPart.classList.toggle('active', this.praiseSubtab === 'part');
        const dateFilterBox = document.getElementById('praiseDateFilterBox');
        if (dateFilterBox) {
          dateFilterBox.style.display = (this.praiseSubtab === 'all') ? 'flex' : 'none';
        }

        // 파트별 필터 칩 활성화 상태 동기화
        if (item.type === 'part') {
          const partTarget = item.partTarget || 'ALL';
          document.querySelectorAll('.part-chip').forEach(chip => {
            chip.classList.toggle('active', chip.dataset.part === partTarget);
          });
        } else if (item.date && item.date.length >= 7) {
          const monthSelect = document.getElementById('praiseMonthFilter');
          if (monthSelect) monthSelect.value = this.praiseMonthFilter;
        }
      }
      this.renderPraises();
    } else if (targetTab === 'schedule') {
      this.renderSchedules();
    } else if (targetTab === 'prayer') {
      const prayers = this.storage.get(STORAGE_KEYS.PRAYERS) || [];
      const sortedPrayers = [...prayers].sort((a, b) => {
        const timeDiff = this.getItemTimestamp(b) - this.getItemTimestamp(a);
        if (timeDiff !== 0) return timeDiff;
        return (b.date || '').localeCompare(a.date || '');
      });

      const MAX_RECENT = 4;
      const olderPrayers = sortedPrayers.slice(MAX_RECENT);
      const olderIdx = olderPrayers.findIndex(p => p.id === targetId);

      if (olderIdx !== -1) {
        this.isPrayerArchiveOpen = true;
        this.visiblePrayerArchiveCount = Math.max(this.visiblePrayerArchiveCount || 5, olderIdx + 1);
      }

      this.renderPrayers();
    }

    // 4. 해당 카드 위치로 스크롤 및 하이라이트 (최대 20회 재시도, 약 2초간 DOM 안정화 대기)
    const attemptScroll = (retryCount = 0) => {
      const cardEl = document.getElementById(`${targetTab}_card_${targetId}`);
      if (cardEl) {
        const parentDetails = cardEl.closest('details');
        if (parentDetails) {
          parentDetails.open = true;
        }

        const parentAccordion = cardEl.closest('.archive-accordion');
        if (parentAccordion && !parentAccordion.classList.contains('is-open')) {
          parentAccordion.classList.add('is-open');
          const archiveContent = parentAccordion.querySelector('.archive-content');
          if (archiveContent) archiveContent.style.display = 'flex';
          const archiveArrow = parentAccordion.querySelector('.archive-arrow');
          if (archiveArrow) archiveArrow.textContent = '▲ 접기';
        }

        this.scrollToTargetCard(cardEl);
        cardEl.classList.add('highlight-shared-item');
        setTimeout(() => {
          cardEl.classList.remove('highlight-shared-item');
        }, 3500);

        this.pendingDeepLink = null;
      } else if (retryCount < 20) {
        setTimeout(() => attemptScroll(retryCount + 1), 100);
      }
    };

    setTimeout(() => attemptScroll(0), 50);
  }

  renderNoticeCardHtml(item, isOfficer, favIds) {
    const content = item.content || '';
    const isLong = content.length > 120 || (content.match(/\n/g) || []).length >= 3;
    const isExpanded = this.expandedNoticeIds && this.expandedNoticeIds.has(item.id);
    const isFav = favIds ? favIds.has(item.id) : false;

    const starButtonHtml = `
      <button type="button" class="btn-star-notice ${isFav ? 'is-starred' : ''}" onclick="app.toggleNoticeFavorite('${item.id}', event)" title="${isFav ? '즐겨찾기 해제' : '즐겨찾기 추가'}">
        ${this.getStarSvg(isFav)}
      </button>
    `;

    const renderNoticeMediaItems = (notice) => {
      if (notice.mediaList && Array.isArray(notice.mediaList) && notice.mediaList.length > 0) {
        return notice.mediaList.map(m => {
          if (m.type === 'youtube' && m.url) {
            return `<div class="video-responsive" style="margin-top: 10px;">${this.getYoutubeIframe(m.url)}</div>`;
          }
          if (m.type === 'media' && m.url) {
            return `<div style="margin-top: 10px;">${this.getNoticeMediaHtml(m.url, notice.title)}</div>`;
          }
          if (m.type === 'link' && m.url) {
            return `<div style="margin-top: 10px;">${this.getNoticeLinkCardHtml(m.url)}</div>`;
          }
          return '';
        }).join('');
      }

      let html = '';
      if (notice.imageUrl) html += this.getNoticeMediaHtml(notice.imageUrl, notice.title);
      if (notice.youtubeUrl) html += `<div class="video-responsive">${this.getYoutubeIframe(notice.youtubeUrl)}</div>`;
      if (notice.linkUrl) html += `<div style="margin-top: 10px;">${this.getNoticeLinkCardHtml(notice.linkUrl)}</div>`;
      return html;
    };

    if (!isLong) {
      return `
        <div class="item-card" id="notice_card_${item.id}">
          <div class="card-top">
            <span class="card-badge badge-notice">공지사항</span>
            <div class="card-top-right">
              <span class="card-date">${item.date}</span>
              ${starButtonHtml}
              ${this.getShareButtonHtml('notice', item.id)}
              ${isOfficer ? `
                <div class="card-admin-actions">
                  <button type="button" class="btn-card-edit" onclick="app.openEditNoticeModal('${item.id}')" title="수정">✏️</button>
                  <button type="button" class="btn-card-delete" onclick="app.deleteNotice('${item.id}', this)" title="삭제">✕</button>
                </div>
              ` : ''}
            </div>
          </div>
          <h3 class="card-title">${this.escapeHtml(item.title || '')}</h3>
          <div class="card-body-text">${this.formatNoticeContentWithLinks(content)}</div>
          ${renderNoticeMediaItems(item)}
        </div>
      `;
    }

    const previewText = content.slice(0, 120).replace(/\r?\n/g, ' ').trim() + '...';

    return `
      <div class="item-card notice-card-collapsible ${isExpanded ? 'is-expanded' : ''}" id="notice_card_${item.id}">
        <div class="card-top">
          <span class="card-badge badge-notice">공지사항</span>
          <div class="card-top-right">
            <span class="card-date">${item.date}</span>
            ${starButtonHtml}
            ${this.getShareButtonHtml('notice', item.id)}
            ${isOfficer ? `
              <div class="card-admin-actions">
                <button type="button" class="btn-card-edit" onclick="app.openEditNoticeModal('${item.id}')" title="수정">✏️</button>
                <button type="button" class="btn-card-delete" onclick="app.deleteNotice('${item.id}', this)" title="삭제">✕</button>
              </div>
            ` : ''}
          </div>
        </div>
        <h3 class="card-title">${this.escapeHtml(item.title || '')}</h3>

        <div class="notice-preview-box" style="display: ${isExpanded ? 'none' : 'block'};">
          <div class="card-body-text notice-text-preview">${this.formatNoticeContentWithLinks(previewText)}</div>
        </div>

        <div class="notice-full-box" style="display: ${isExpanded ? 'block' : 'none'};">
          <div class="card-body-text notice-text-full">${this.formatNoticeContentWithLinks(content)}</div>
          ${renderNoticeMediaItems(item)}
        </div>

        <button type="button" class="btn-toggle-expand" onclick="app.toggleNoticeExpand('${item.id}', this)">
          ${isExpanded ? '🔼 내용 접기' : '🔽 자세히 보기'}
        </button>
      </div>
    `;
  }

  renderNotices() {
    this.renderDailyVerse();
    this.updateNoticeFavBadge();

    // 공지 탭 활성화 시 서브탭(전체 공지 vs 즐겨찾기)의 활성 상태를 100% 보장
    document.querySelectorAll('[data-notice-filter]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-notice-filter') === (this.noticeFilter || 'all'));
    });

    const listEl = document.getElementById('noticeList');
    if (!listEl) return;

    const rawNotices = this.storage.get(STORAGE_KEYS.NOTICES) || [];
    const isOfficer = this.storage.isOfficer();
    const favIds = new Set(this.storage.getFavoriteNoticeIds() || []);

    if (rawNotices.length === 0) {
      if (!this.storage.initialSyncDone) {
        listEl.innerHTML = this.getInitialLoadingHtml('공지사항');
        return;
      }
      listEl.innerHTML = `<div class="item-card"><p class="card-body-text">등록된 공지사항이 없습니다.</p></div>`;
      return;
    }

    const notices = [...rawNotices].sort((a, b) => {
      const timeDiff = this.getItemTimestamp(b) - this.getItemTimestamp(a);
      if (timeDiff !== 0) return timeDiff;
      return (b.date || '').localeCompare(a.date || '');
    });

    let filteredNotices = notices;
    if (this.noticeFilter === 'fav') {
      filteredNotices = filteredNotices.filter(item => favIds.has(item.id));
    }

    const q = this.noticeSearchQuery ? this.noticeSearchQuery.trim().toLowerCase() : '';
    if (q) {
      filteredNotices = filteredNotices.filter(item => {
        const title = (item.title || '').toLowerCase();
        const content = (item.content || '').toLowerCase();
        return title.includes(q) || content.includes(q);
      });
    }

    if (filteredNotices.length === 0) {
      if (this.noticeFilter === 'fav') {
        listEl.innerHTML = `
          <div class="item-card" style="text-align: center; padding: 30px 16px;">
            <p style="font-size: 36px; margin-bottom: 8px;">⭐</p>
            <h4 style="font-size: 16px; font-weight: 800; color: var(--primary-navy); margin-bottom: 6px;">즐겨찾기한 공지사항이 없습니다</h4>
            <p class="card-body-text" style="color: var(--text-sub);">중요한 공지 카드 상단의 별(☆) 아이콘을 눌러 즐겨찾기에 추가해 보세요!</p>
          </div>
        `;
        return;
      }
      if (q) {
        listEl.innerHTML = `
          <div class="item-card" style="text-align: center; padding: 30px 16px;">
            <p style="font-size: 36px; margin-bottom: 8px;">🔍</p>
            <h4 style="font-size: 16px; font-weight: 800; color: var(--primary-navy); margin-bottom: 6px;">검색 결과가 없습니다</h4>
            <p class="card-body-text" style="color: var(--text-sub);">'${this.escapeHtml(q)}' 와(과) 일치하는 공지사항이 없습니다.</p>
          </div>
        `;
        return;
      }
    }

    const renderNoticeCard = (item) => this.renderNoticeCardHtml(item, isOfficer, favIds);

    if (q || this.noticeFilter === 'fav') {
      const html = filteredNotices.map(renderNoticeCard).join('');
      if (listEl.innerHTML !== html) {
        listEl.innerHTML = html;
      }
      return;
    }

    const MAX_RECENT = 4;
    const recentNotices = filteredNotices.slice(0, MAX_RECENT);
    const olderNotices = filteredNotices.slice(MAX_RECENT);

    let html = recentNotices.map(renderNoticeCard).join('');

    if (olderNotices.length > 0) {
      if (!this.visibleNoticeArchiveCount) {
        this.visibleNoticeArchiveCount = 5;
      }
      const visibleCount = Math.min(this.visibleNoticeArchiveCount, olderNotices.length);
      const displayedOlder = olderNotices.slice(0, visibleCount);
      const hasMore = visibleCount < olderNotices.length;

      html += `
        <div class="archive-accordion ${this.isNoticeArchiveOpen ? 'is-open' : ''}">
          <div class="archive-summary" onclick="app.toggleNoticeArchiveFolder(event)">
            <span>📁 지난 공지사항 보관함 (총 ${olderNotices.length}개)</span>
            <span class="archive-arrow" style="font-size: 12px; opacity: 0.7;">${this.isNoticeArchiveOpen ? '▲ 접기' : '▼ 펼치기'}</span>
          </div>
          <div class="archive-content" style="display: ${this.isNoticeArchiveOpen ? 'flex' : 'none'};">
            ${displayedOlder.map(renderNoticeCard).join('')}
            ${hasMore ? `
              <div class="load-more-archive-box">
                <button type="button" class="btn-load-more-archive" onclick="app.loadMoreNoticeArchive(event)">
                  👇 공지사항 더보기
                </button>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    }

    if (listEl.innerHTML !== html) {
      listEl.innerHTML = html;
    }

    if (this.pendingDeepLink && this.pendingDeepLink.tab === 'notice') {
      const targetId = this.pendingDeepLink.id;
      setTimeout(() => {
        const cardEl = document.getElementById(`notice_card_${targetId}`);
        if (cardEl) {
          const parentAccordion = cardEl.closest('.archive-accordion');
          if (parentAccordion && !parentAccordion.classList.contains('is-open')) {
            parentAccordion.classList.add('is-open');
            const archiveContent = parentAccordion.querySelector('.archive-content');
            if (archiveContent) archiveContent.style.display = 'flex';
          }
          this.scrollToTargetCard(cardEl);
          cardEl.classList.add('highlight-shared-item');
          setTimeout(() => { cardEl.classList.remove('highlight-shared-item'); }, 3500);
          this.pendingDeepLink = null;
        }
      }, 50);
    }
  }

  toggleNoticeArchiveFolder(event) {
    if (event) event.preventDefault();
    this.isNoticeArchiveOpen = !this.isNoticeArchiveOpen;

    const folderEl = document.querySelector('.archive-accordion');
    const contentEl = document.querySelector('.archive-content');
    const arrowEl = document.querySelector('.archive-arrow');

    if (folderEl && contentEl) {
      if (this.isNoticeArchiveOpen) {
        folderEl.classList.add('is-open');
        contentEl.style.display = 'flex';
        if (arrowEl) arrowEl.textContent = '▲ 접기';
      } else {
        folderEl.classList.remove('is-open');
        contentEl.style.display = 'none';
        if (arrowEl) arrowEl.textContent = '▼ 펼치기';
      }
      return;
    }

    this.renderNotices();
  }

  loadMoreNoticeArchive(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    const notices = this.storage.get(STORAGE_KEYS.NOTICES) || [];
    const favIds = new Set(this.storage.getFavoriteNoticeIds() || []);
    const q = this.noticeSearchQuery ? this.noticeSearchQuery.trim().toLowerCase() : '';
    const sortedNotices = [...notices].sort((a, b) => {
      const timeDiff = this.getItemTimestamp(b) - this.getItemTimestamp(a);
      if (timeDiff !== 0) return timeDiff;
      return (b.date || '').localeCompare(a.date || '');
    });
    const filteredNotices = sortedNotices.filter(n => {
      const matchSearch = !q || (n.title && n.title.toLowerCase().includes(q)) || (n.content && n.content.toLowerCase().includes(q));
      const matchFav = this.noticeFilter !== 'fav' || favIds.has(n.id);
      return matchSearch && matchFav;
    });

    const MAX_RECENT = 4;
    const olderNotices = filteredNotices.slice(MAX_RECENT);
    if (!olderNotices.length) return;

    const prevCount = this.visibleNoticeArchiveCount || 5;
    const nextCount = prevCount + 5;
    this.visibleNoticeArchiveCount = nextCount;

    const newItemsToAppend = olderNotices.slice(prevCount, nextCount);

    const contentEl = document.querySelector('.archive-content');
    const loadMoreBox = document.querySelector('.load-more-archive-box');

    if (contentEl && newItemsToAppend.length) {
      const isOfficer = this.storage.isOfficer();

      const tempWrapper = document.createElement('div');
      tempWrapper.innerHTML = newItemsToAppend.map(item => this.renderNoticeCardHtml(item, isOfficer, favIds)).join('');

      while (tempWrapper.firstChild) {
        if (loadMoreBox) {
          contentEl.insertBefore(tempWrapper.firstChild, loadMoreBox);
        } else {
          contentEl.appendChild(tempWrapper.firstChild);
        }
      }

      if (nextCount >= olderNotices.length && loadMoreBox) {
        loadMoreBox.remove();
      }
      return;
    }

    this.renderNotices();
  }

  renderDailyVerse() {
    const container = document.getElementById('dailyVerseContainer');
    if (!container) return;

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();

    // 일자 기준 고유 시드 계산 (매일 자정 00:00 KST에 자동으로 다음 구절로 변경됨)
    const dateSeed = year * 10000 + month * 100 + date;
    const index = dateSeed % BIBLE_VERSES.length;
    const verse = BIBLE_VERSES[index];

    const dateStr = `${year}.${String(month).padStart(2, '0')}.${String(date).padStart(2, '0')}`;

    const html = `
      <div class="daily-verse-card">
        <div class="daily-verse-header">
          <span class="daily-verse-badge">오늘의 말씀</span>
          <span class="daily-verse-date">${dateStr}</span>
        </div>
        <p class="daily-verse-text">"${verse.text}"</p>
        <p class="daily-verse-ref">- ${verse.ref} -</p>
      </div>
    `;

    if (container.innerHTML !== html) {
      container.innerHTML = html;
    }
  }

  openNoticeModal() {
    const form = document.getElementById('formNotice');
    if (form) form.reset();
    const editingIdEl = document.getElementById('editingNoticeId');
    if (editingIdEl) editingIdEl.value = '';

    const headerTitle = document.getElementById('noticeHeaderTitle');
    if (headerTitle) headerTitle.textContent = '📢 신규 공지사항 작성';
    const btnSubmit = document.getElementById('btnSubmitNotice');
    if (btnSubmit) btnSubmit.textContent = '등록하기';

    this.noticeMediaSlots = [Date.now()];
    this.renderNoticeMediaSlots();
    this.openModal('modalNotice');
  }

  openEditNoticeModal(id) {
    if (!this.storage.isOfficer()) {
      alert('🔒 관리자만 공지사항을 수정할 수 있습니다.');
      return;
    }
    const notices = this.storage.get(STORAGE_KEYS.NOTICES);
    const notice = notices.find(n => n.id === id);
    if (!notice) return;

    const form = document.getElementById('formNotice');
    if (form) form.reset();

    const editingIdEl = document.getElementById('editingNoticeId');
    if (editingIdEl) editingIdEl.value = id;

    const headerTitle = document.getElementById('noticeHeaderTitle');
    if (headerTitle) headerTitle.textContent = '✏️ 공지사항 수정';

    const btnSubmit = document.getElementById('btnSubmitNotice');
    if (btnSubmit) btnSubmit.textContent = '수정 완료';

    document.getElementById('noticeTitle').value = notice.title || '';
    document.getElementById('noticeContent').value = notice.content || '';

    let mediaList = notice.mediaList || [];
    if (!mediaList || mediaList.length === 0) {
      if (notice.youtubeUrl || notice.imageUrl) {
        mediaList = [];
        if (notice.youtubeUrl) mediaList.push({ type: 'youtube', url: notice.youtubeUrl });
        if (notice.imageUrl) mediaList.push({ type: 'media', url: notice.imageUrl });
      }
    }

    if (!mediaList || mediaList.length === 0) {
      this.noticeMediaSlots = [Date.now()];
      this.renderNoticeMediaSlots();
    } else {
      this.noticeMediaSlots = mediaList.map((m, idx) => Date.now() + idx);
      this.renderNoticeMediaSlots();
      this.noticeMediaSlots.forEach((slotId, idx) => {
        const item = mediaList[idx];
        if (item) {
          if (item.type === 'youtube') {
            const ytInput = document.getElementById(`noticeYoutube_${slotId}`);
            if (ytInput) ytInput.value = item.url || '';
          } else if (item.type === 'media' || item.type === 'link') {
            const imgInput = document.getElementById(`noticeImageUrl_${slotId}`);
            if (imgInput) imgInput.value = item.url || '';
          }
        }
      });
    }

    this.openModal('modalNotice');
  }

  renderNoticeMediaSlots() {
    const container = document.getElementById('noticeMediaListContainer');
    const badge = document.getElementById('noticeMediaCountBadge');
    const addBtn = document.getElementById('btnAddNoticeMedia');
    if (!container) return;

    if (!this.noticeMediaSlots || this.noticeMediaSlots.length === 0) {
      this.noticeMediaSlots = [Date.now()];
    }

    const count = this.noticeMediaSlots.length;
    if (badge) badge.textContent = `${count} / 5`;
    if (addBtn) {
      addBtn.disabled = count >= 5;
      addBtn.style.opacity = count >= 5 ? '0.5' : '1';
    }

    const savedData = {};
    this.noticeMediaSlots.forEach(id => {
      const yt = document.getElementById(`noticeYoutube_${id}`)?.value || '';
      const dataUrl = document.getElementById(`noticePhotoData_${id}`)?.value || '';
      const imgUrl = document.getElementById(`noticeImageUrl_${id}`)?.value || '';
      const previewHtml = document.getElementById(`noticePhotoPreview_${id}`)?.innerHTML || '';
      const previewHidden = document.getElementById(`noticePhotoPreview_${id}`)?.classList.contains('hidden');
      savedData[id] = { yt, dataUrl, imgUrl, previewHtml, previewHidden };
    });

    container.innerHTML = this.noticeMediaSlots.map((id, index) => `
      <div class="notice-media-item-box" id="notice_media_slot_${id}">
        <div class="notice-media-item-header">
          <span class="notice-media-item-title">📌 첨부 #${index + 1}</span>
          ${this.noticeMediaSlots.length > 1 ? `
            <button type="button" class="btn-remove-media-slot" onclick="app.removeNoticeMediaSlot(${id})">✕ 삭제</button>
          ` : ''}
        </div>
        <div class="form-group" style="margin-bottom: 8px;">
          <label for="noticeYoutube_${id}" style="font-size: 12.5px;">🎥 유튜브 영상 링크 (선택)</label>
          <input type="url" id="noticeYoutube_${id}" placeholder="https://www.youtube.com/watch?v=..." value="${this.escapeHtml(savedData[id]?.yt || '')}">
        </div>
        <div class="form-group" style="margin-bottom: 0;">
          <label for="noticeFilePhoto_${id}" style="font-size: 12.5px;">📷 사진 파일 / 📄 PDF / 🔗 외부 URL 링크 (선택)</label>
          <input type="file" id="noticeFilePhoto_${id}" accept="image/*,.pdf" class="file-upload-input" onclick="this.value=''" onchange="app.handleImageUpload(event, 'noticePhotoPreview_${id}', 'noticePhotoData_${id}', 'noticeImageUrl_${id}')">
          <input type="hidden" id="noticePhotoData_${id}" value="${this.escapeHtml(savedData[id]?.dataUrl || '')}">
          <div id="noticePhotoPreview_${id}" class="photo-upload-preview ${savedData[id]?.previewHidden !== false ? 'hidden' : ''}">
            ${savedData[id]?.previewHtml || ''}
          </div>
          <input type="text" id="noticeImageUrl_${id}" placeholder="예: https://brunch.co.kr/@yehunkim/162 또는 사진/PDF/구글드라이브 URL" style="margin-top: 6px;" value="${this.escapeHtml(savedData[id]?.imgUrl || '')}" oninput="app.clearFileInputOnly('noticeFilePhoto_${id}', 'noticePhotoPreview_${id}', 'noticePhotoData_${id}')">
        </div>
      </div>
    `).join('');
  }

  addNoticeMediaSlot() {
    if (!this.noticeMediaSlots) this.noticeMediaSlots = [Date.now()];
    if (this.noticeMediaSlots.length >= 5) {
      alert('첨부파일 및 영상은 최대 5개까지 등록할 수 있습니다.');
      return;
    }
    this.noticeMediaSlots.push(Date.now() + Math.floor(Math.random() * 1000));
    this.renderNoticeMediaSlots();
  }

  removeNoticeMediaSlot(id) {
    if (!this.noticeMediaSlots || this.noticeMediaSlots.length <= 1) return;
    this.noticeMediaSlots = this.noticeMediaSlots.filter(sId => sId !== id);
    this.renderNoticeMediaSlots();
  }

  saveNotice(e) {
    e.preventDefault();
    const editingId = document.getElementById('editingNoticeId')?.value;
    const title = document.getElementById('noticeTitle').value.trim();
    const content = document.getElementById('noticeContent').value.trim();

    const mediaList = [];
    if (this.noticeMediaSlots && this.noticeMediaSlots.length > 0) {
      this.noticeMediaSlots.forEach(id => {
        const youtubeUrl = document.getElementById(`noticeYoutube_${id}`)?.value.trim() || '';
        const uploadedDataUrl = document.getElementById(`noticePhotoData_${id}`)?.value.trim() || '';
        const inputUrl = document.getElementById(`noticeImageUrl_${id}`)?.value.trim() || '';
        const imageUrl = uploadedDataUrl || this.convertGoogleDriveUrl(inputUrl);

        if (youtubeUrl) {
          if (youtubeUrl.includes('youtube.com/') || youtubeUrl.includes('youtu.be/')) {
            mediaList.push({ type: 'youtube', url: youtubeUrl });
          } else {
            mediaList.push({ type: 'link', url: youtubeUrl });
          }
        }
        if (imageUrl) {
          if (imageUrl.includes('youtube.com/') || imageUrl.includes('youtu.be/')) {
            mediaList.push({ type: 'youtube', url: imageUrl });
          } else if (uploadedDataUrl || imageUrl.startsWith('data:image/') || /\.(jpg|jpeg|png|gif|webp|svg)($|\?)/i.test(imageUrl) || imageUrl.includes('drive.google.com/')) {
            mediaList.push({ type: 'media', url: imageUrl });
          } else {
            mediaList.push({ type: 'link', url: imageUrl });
          }
        }
      });
    }

    const firstYoutube = mediaList.find(m => m.type === 'youtube')?.url || '';
    const firstMedia = mediaList.find(m => m.type === 'media')?.url || '';

    const notices = this.storage.get(STORAGE_KEYS.NOTICES);

    if (editingId) {
      const notice = notices.find(n => n.id === editingId);
      if (notice) {
        notice.title = title;
        notice.content = content;
        notice.mediaList = mediaList;
        notice.youtubeUrl = firstYoutube;
        notice.imageUrl = firstMedia;
        this.storage.save(STORAGE_KEYS.NOTICES, notices);
        this.closeModal('modalNotice');
        this.renderNotices();
        alert('✏️ 공지사항이 성공적으로 수정되었습니다.');
        return;
      }
    }

    const now = Date.now();
    const newNotice = {
      id: 'n_' + now,
      createdAt: now,
      title,
      content,
      mediaList,
      youtubeUrl: firstYoutube,
      imageUrl: firstMedia,
      date: new Date().toISOString().split('T')[0]
    };
    notices.unshift(newNotice);
    this.storage.save(STORAGE_KEYS.NOTICES, notices);
    this.closeModal('modalNotice');
    this.renderNotices();
    this.updateUnreadBadges();
    this.triggerNotification('📢 [공지사항] 새 소식', title);
    alert('📢 새로운 공지사항이 등록되었습니다.');
  }

  deleteNotice(id, btn) {
    this.confirmAction('📢 이 공지사항을 삭제하시겠습니까?', () => {
      this.animateRemoveCard(btn, () => {
        let notices = this.storage.get(STORAGE_KEYS.NOTICES);
        notices = notices.filter(n => n.id !== id);
        this.storage.save(STORAGE_KEYS.NOTICES, notices);
        this.renderNotices();
      });
    });
  }

  toggleNoticeExpand(id, btn) {
    if (!this.expandedNoticeIds) {
      this.expandedNoticeIds = new Set();
    }
    if (this.expandedNoticeIds.has(id)) {
      this.expandedNoticeIds.delete(id);
    } else {
      this.expandedNoticeIds.add(id);
    }

    const cardEl = document.getElementById(`notice_card_${id}`);
    if (cardEl) {
      const previewBox = cardEl.querySelector('.notice-preview-box');
      const fullBox = cardEl.querySelector('.notice-full-box');
      const isExpanded = this.expandedNoticeIds.has(id);

      if (previewBox && fullBox && btn) {
        previewBox.style.display = isExpanded ? 'none' : 'block';
        fullBox.style.display = isExpanded ? 'block' : 'none';
        btn.innerHTML = isExpanded ? '🔼 내용 접기' : '🔽 자세히 보기';
        cardEl.classList.toggle('is-expanded', isExpanded);
        return;
      }
    }
    this.renderNotices();
  }

  // ----------------------------------------------------
  // 🎵 4. 찬양 음원/영상 렌더링
  // ----------------------------------------------------
  renderPraises() {
    this.populatePraiseMonthDropdown();
    const listAllEl = document.getElementById('praiseListAll');
    const listPartEl = document.getElementById('praiseListPart');
    let praises = this.storage.get(STORAGE_KEYS.PRAISES);
    const isOfficer = this.storage.isOfficer();

    const dateFilterBox = document.getElementById('praiseDateFilterBox');
    if (dateFilterBox) {
      dateFilterBox.style.display = (this.praiseSubtab === 'all' && !this.praiseSearchQuery) ? 'flex' : 'none';
    }

    // 돋보기 검색 버튼 표시 여부 관리
    const searchBtn = document.getElementById('btnTogglePraiseSearch');
    if (searchBtn) {
      searchBtn.style.display = (this.praiseSubtab === 'all') ? 'flex' : 'none';
    }

    // 26년 1월부터만 보여지도록 필터링 (곡명 검색 시에는 등록된 전체 찬양곡 대상 검색)
    if (!this.praiseSearchQuery) {
      praises = praises.filter(p => p.date && p.date >= '2026-01-01');
    }

    if (praises.length === 0 && !this.storage.initialSyncDone) {
      if (listAllEl) listAllEl.innerHTML = this.getInitialLoadingHtml('찬양 음원 & 영상');
      if (listPartEl) listPartEl.innerHTML = this.getInitialLoadingHtml('파트별 연습실');
      return;
    }

    praises.sort((a, b) => {
      const dateDiff = (b.date || '').localeCompare(a.date || '');
      if (dateDiff !== 0) return dateDiff;
      return this.getItemTimestamp(b) - this.getItemTimestamp(a);
    });

    // 1. 성가대 찬양 영상 필터링 (type === 'all') - 검색어 또는 월별/최신 주일 필터 적용
    let allPraises = praises.filter(p => p.type === 'all');
    if (this.praiseSearchQuery) {
      const q = this.praiseSearchQuery.toLowerCase();
      allPraises = allPraises.filter(p => (p.title || '').toLowerCase().includes(q));
    } else {
      if (this.praiseMonthFilter === 'LATEST') {
        if (allPraises.length > 0) {
          const latestDate = allPraises[0].date;
          allPraises = allPraises.filter(p => p.date === latestDate);
        }
      } else if (this.praiseMonthFilter) {
        allPraises = allPraises.filter(p => p.date.startsWith(this.praiseMonthFilter));
      }
    }

    if (listAllEl) {
      let emptyMsg = '선택하신 일자의 성가대 찬양 영상이 없습니다.';
      if (this.praiseSearchQuery) {
        emptyMsg = `🔍 '${this.escapeHtml(this.praiseSearchQuery)}' 검색어와 일치하는 찬양곡이 없습니다.`;
      }
      const htmlAll = allPraises.length === 0
        ? `<div class="item-card"><p class="card-body-text">${emptyMsg}</p></div>`
        : allPraises.map(p => this.createPraiseCardHtml(p, isOfficer)).join('');
      if (listAllEl.innerHTML !== htmlAll) {
        listAllEl.innerHTML = htmlAll;
      }
    }

    // 2. 파트별 연습실 음원 필터링 (type === 'part')
    // 파트별 연습실은 날짜 조회를 사용하지 않으며, 관리자가 등록한 각 파트별(4부합창, 소프라노, 알토, 테너, 베이스) 최신 음원 1개씩만 표시
    let partPraisesRaw = praises.filter(p => p.type === 'part');

    const latestPartMap = {};
    const partOrder = ['ALL_PART', 'S', 'A', 'T', 'B'];

    partPraisesRaw.forEach(p => {
      const target = p.partTarget || 'ALL_PART';
      if (!latestPartMap[target]) {
        latestPartMap[target] = p;
      }
    });

    let displayPartPraises = [];
    if (this.partPraiseFilter && this.partPraiseFilter !== 'ALL') {
      if (latestPartMap[this.partPraiseFilter]) {
        displayPartPraises.push(latestPartMap[this.partPraiseFilter]);
      }
    } else {
      // 'ALL' (전체) 선택 시 4부합창 -> 소프라노 -> 알토 -> 테너 -> 베이스 순서대로 최신 1개씩 나열 (최대 5개)
      partOrder.forEach(pt => {
        if (latestPartMap[pt]) {
          displayPartPraises.push(latestPartMap[pt]);
        }
      });
    }

    // 딥링크 공유 접속 시 해당 찬양 항목이 필터에 의해 숨겨지지 않도록 포함 보장
    if (this.targetPraiseId) {
      const targetPraise = praises.find(p => p.id === this.targetPraiseId);
      if (targetPraise) {
        if (targetPraise.type === 'all' && !allPraises.some(p => p.id === this.targetPraiseId)) {
          const targetMonth = targetPraise.date ? targetPraise.date.substring(0, 7) : '';
          if (this.praiseMonthFilter === 'LATEST' || this.praiseMonthFilter === targetMonth) {
            allPraises.unshift(targetPraise);
          }
        } else if (targetPraise.type === 'part' && !displayPartPraises.some(p => p.id === this.targetPraiseId)) {
          const targetPart = targetPraise.partTarget || 'ALL_PART';
          if (this.partPraiseFilter === 'ALL' || this.partPraiseFilter === targetPart) {
            displayPartPraises.unshift(targetPraise);
          }
        }
      }
    }

    if (listPartEl) {
      const htmlPart = displayPartPraises.length === 0
        ? `<div class="item-card"><p class="card-body-text">등록된 파트별 연습 음원이 없습니다.</p></div>`
        : displayPartPraises.map(p => this.createPraiseCardHtml(p, isOfficer)).join('');
      if (listPartEl.innerHTML !== htmlPart) {
        listPartEl.innerHTML = htmlPart;
      }
    }

    if (this.pendingDeepLink && this.pendingDeepLink.tab === 'praise') {
      const targetId = this.pendingDeepLink.id;
      this.pendingDeepLink = null;
      requestAnimationFrame(() => {
        const cardEl = document.getElementById(`praise_card_${targetId}`);
        if (cardEl) {
          this.scrollToTargetCard(cardEl);
          cardEl.classList.add('highlight-shared-item');
          setTimeout(() => { cardEl.classList.remove('highlight-shared-item'); }, 3500);
        }
      });
    }
  }

  createPraiseCardHtml(item, isOfficer) {
    const partNames = { 'ALL_PART': '4부 합창', 'S': '소프라노', 'A': '알토', 'T': '테너', 'B': '베이스' };
    const partBadges = { 'ALL_PART': 'badge-praise', 'S': 'badge-part-s', 'A': 'badge-part-a', 'T': 'badge-part-t', 'B': 'badge-part-b' };

    const badgeClass = item.type === 'part' ? (partBadges[item.partTarget] || 'badge-praise') : 'badge-notice';
    const badgeText = item.type === 'part' ? `${partNames[item.partTarget] || '파트'} 연습` : '찬양 영상';

    const iframeId = `yt_player_${item.id}`;

    // 파트 연습 도우미는 파트별 연습실 음원(item.type === 'part')에만 제공
    const practiceBoxHtml = item.type === 'part' ? `
        <!-- 🎧 파트 연습 도우미 (파트별 연습실 음원 전용: 구간 반복 & 배속) -->
        <div class="practice-helper-box">
          <button type="button" class="btn-toggle-practice" onclick="app.togglePracticePanel('${item.id}')" id="btn_practice_toggle_${item.id}">
            <div class="practice-toggle-left">
              <span class="practice-pulse-dot"></span>
              <span class="practice-toggle-title">🎧 파트 연습 도우미</span>
              <span class="practice-toggle-badge">구간 반복 · 배속</span>
            </div>
            <span class="practice-toggle-chevron" id="chevron_practice_${item.id}">도구 열기 ▼</span>
          </button>

          <div id="practice_panel_${item.id}" class="practice-panel hidden">
            <div class="practice-panel-inner modern-pro">
              <!-- 1. 시간 표시 & 4단 정밀 점프 컨트롤러 (10초 / 5초) -->
              <div class="practice-time-row">
                <div class="practice-time-display">
                  <div class="time-label-group">
                    <span class="time-clock-icon">⏱️</span>
                    <span class="time-label">현재 위치</span>
                  </div>
                  <div class="time-readout">
                    <span class="time-current" id="practice_curr_time_${item.id}">00:00</span>
                    <span class="time-slash">/</span>
                    <span class="time-duration" id="practice_total_time_${item.id}">--:--</span>
                  </div>
                </div>
                <div class="practice-jump-actions">
                  <button type="button" class="btn-jump-pill" onclick="app.jumpPlayerTime('${item.id}', -10)" title="10초 뒤로 되감기">
                    <span class="jump-sign minus">-</span>10초
                  </button>
                  <button type="button" class="btn-jump-pill" onclick="app.jumpPlayerTime('${item.id}', -5)" title="5초 뒤로 되감기">
                    <span class="jump-sign minus">-</span>5초
                  </button>
                  <button type="button" class="btn-jump-pill" onclick="app.jumpPlayerTime('${item.id}', 5)" title="5초 앞으로 이동">
                    <span class="jump-sign plus">+</span>5초
                  </button>
                  <button type="button" class="btn-jump-pill" onclick="app.jumpPlayerTime('${item.id}', 10)" title="10초 앞으로 이동">
                    <span class="jump-sign plus">+</span>10초
                  </button>
                </div>
              </div>

              <!-- 2. 구간 반복 & 배속 통합 컨트롤러 카드 (초슬림 컴팩트) -->
              <div class="practice-loop-card">
                <!-- 반복 재생 중 활성화되는 프리미엄 네이비 글래스 배너 -->
                <div id="senior_looping_banner_${item.id}" class="practice-active-banner hidden">
                  <div class="active-banner-header">
                    <div class="active-badge-group">
                      <!-- 실시간 이퀄라이저 파동 애니메이션 -->
                      <div class="live-equalizer-bars" aria-hidden="true">
                        <span class="eq-bar bar-1"></span>
                        <span class="eq-bar bar-2"></span>
                        <span class="eq-bar bar-3"></span>
                        <span class="eq-bar bar-4"></span>
                      </div>
                      <span class="active-live-tag">마디 무한 반복 중</span>
                    </div>
                    <div class="active-range-chip">
                      <span class="range-digits" id="senior_loop_range_txt_${item.id}">00:00 ~ 00:30</span>
                    </div>
                  </div>

                  <button type="button" class="btn-stop-loop-pro" onclick="app.stopLoop('${item.id}')">
                    <span class="stop-icon">■</span> 반복 종료하고 계속 듣기
                  </button>
                </div>

                <!-- 구간 설정 영역 (평상시) -->
                <div id="senior_loop_controls_${item.id}" class="practice-loop-controls">
                  <div class="practice-card-header">
                    <span class="practice-card-title">🔁 원하는 부분 반복</span>
                    <span class="practice-card-desc">1번 시작 ➔ 2번 끝</span>
                  </div>

                  <div class="loop-steps-grid">
                    <button type="button" class="btn-loop-step btn-step-start" id="btn_step1_${item.id}" onclick="app.setSeniorStart('${item.id}')">
                      <div class="step-badge">1</div>
                      <div class="step-text-wrap">
                        <span class="step-main-label">여기서부터</span>
                        <span class="step-sub-status" id="step1_time_${item.id}">시작할 때 누르기</span>
                      </div>
                    </button>

                    <div class="steps-flow-arrow">➔</div>

                    <button type="button" class="btn-loop-step btn-step-end" id="btn_step2_${item.id}" onclick="app.setSeniorEndAndLoop('${item.id}')">
                      <div class="step-badge">2</div>
                      <div class="step-text-wrap">
                        <span class="step-main-label">여기까지</span>
                        <span class="step-sub-status" id="step2_time_${item.id}">누르면 무한 반복</span>
                      </div>
                    </button>
                  </div>

                  <!-- 원터치 15초 바로 반복 (슬림 앰버 골드 버튼) -->
                  <button type="button" class="btn-recent-loop-pill" onclick="app.loopRecentSeconds('${item.id}', 15)" title="방금 지나간 15초를 바로 반복합니다">
                    <span class="pill-text">방금 15초 다시 듣기</span>
                  </button>
                </div>

                <!-- 3. 컴팩트 인라인 재생 배속 세그먼트 바 -->
                <div class="practice-speed-inline-row">
                  <span class="speed-inline-label">⚡ 속도</span>
                  <div class="speed-segmented-control" id="speed_bar_${item.id}">
                    <button type="button" class="btn-senior-speed" data-speed="0.8" onclick="app.setPlayerSpeed('${item.id}', 0.8)">
                      0.8x 느리게
                    </button>
                    <button type="button" class="btn-senior-speed active" data-speed="1.0" onclick="app.setPlayerSpeed('${item.id}', 1.0)">
                      1.0x 기본
                    </button>
                    <button type="button" class="btn-senior-speed" data-speed="1.2" onclick="app.setPlayerSpeed('${item.id}', 1.2)">
                      1.2x 빠르게
                    </button>
                  </div>
                </div>
              </div>

              <!-- 4. 하단 세련된 초기화 버튼 & 힌트 -->
              <div class="practice-panel-footer">
                <button type="button" class="btn-reset-action" onclick="app.resetPracticeConfig('${item.id}')" title="연습 설정 초기화">
                  <span class="reset-icon">↺</span> 설정 초기화
                </button>
                <span class="panel-hint-text">💡 1번 시작 ➔ 2번 끝 순서로 눌러주세요</span>
              </div>
            </div>
          </div>
        </div>
    ` : '';

    return `
      <div class="item-card" id="praise_card_${item.id}">
        <div class="card-top">
          <span class="card-badge ${badgeClass}">${badgeText}</span>
          <div class="card-top-right">
            <span class="card-date">${item.date}</span>
            ${this.getShareButtonHtml('praise', item.id)}
            ${isOfficer ? `
              <div class="card-admin-actions">
                <button type="button" class="btn-card-edit" onclick="app.openEditPraiseModal('${item.id}')" title="수정">✏️</button>
                <button type="button" class="btn-card-delete" onclick="app.deletePraise('${item.id}', this)" title="삭제">✕</button>
              </div>
            ` : ''}
          </div>
        </div>
        <h3 class="card-title">${this.escapeHtml(item.title || '')}</h3>
        
        <div class="video-responsive">
          ${this.getYoutubeIframe(item.youtubeUrl, iframeId)}
        </div>

        ${practiceBoxHtml}
      </div>
    `;
  }

  openPraiseModal() {
    const form = document.getElementById('formPraise');
    if (form) form.reset();

    const editingIdEl = document.getElementById('editingPraiseId');
    if (editingIdEl) editingIdEl.value = '';

    const headerTitle = document.getElementById('praiseHeaderTitle');
    if (headerTitle) headerTitle.textContent = '🎵 찬양 음원/영상 등록';

    const btnSubmit = document.getElementById('btnSubmitPraise');
    if (btnSubmit) btnSubmit.textContent = '등록하기';

    if (this.lastBatchTitle && this.lastBatchDate && this.lastNextPartTarget) {
      document.getElementById('praiseType').value = 'part';
      this.togglePartSelect('part');
      document.getElementById('praisePartTarget').value = this.lastNextPartTarget;
      document.getElementById('praiseTitle').value = this.lastBatchTitle;
      document.getElementById('praiseDate').value = this.lastBatchDate;
      document.getElementById('praiseYoutube').value = '';
    } else {
      if (this.praiseSubtab === 'part') {
        document.getElementById('praiseType').value = 'part';
        this.togglePartSelect('part');
        document.getElementById('praisePartTarget').value = 'ALL_PART';
      } else {
        document.getElementById('praiseType').value = 'all';
        this.togglePartSelect('all');
      }
    }
    this.openModal('modalPraise');

    setTimeout(() => {
      const ytInput = document.getElementById('praiseYoutube');
      if (ytInput) ytInput.focus();
    }, 150);
  }

  openEditPraiseModal(id) {
    if (!this.storage.isOfficer()) {
      alert('🔒 관리자만 찬양 음원/영상을 수정할 수 있습니다.');
      return;
    }
    const praises = this.storage.get(STORAGE_KEYS.PRAISES);
    const item = praises.find(p => p.id === id);
    if (!item) return;

    const form = document.getElementById('formPraise');
    if (form) form.reset();

    const editingIdEl = document.getElementById('editingPraiseId');
    if (editingIdEl) editingIdEl.value = id;

    const headerTitle = document.getElementById('praiseHeaderTitle');
    if (headerTitle) headerTitle.textContent = '✏️ 찬양 음원/영상 수정';

    const btnSubmit = document.getElementById('btnSubmitPraise');
    if (btnSubmit) btnSubmit.textContent = '수정 완료';

    document.getElementById('praiseType').value = item.type || 'all';
    this.togglePartSelect(item.type || 'all');
    if (item.type === 'part') {
      document.getElementById('praisePartTarget').value = item.partTarget || 'ALL_PART';
    }
    document.getElementById('praiseTitle').value = item.title || '';
    document.getElementById('praiseDate').value = item.date || '';
    document.getElementById('praiseYoutube').value = item.youtubeUrl || '';

    this.openModal('modalPraise');
  }

  togglePartSelect(val) {
    const grp = document.getElementById('groupPartSelect');
    if (val === 'part') {
      grp.classList.remove('hidden');
    } else {
      grp.classList.add('hidden');
    }
  }

  savePraise(e) {
    e.preventDefault();
    const editingId = document.getElementById('editingPraiseId')?.value;
    const type = document.getElementById('praiseType').value;
    const partTarget = type === 'part' ? document.getElementById('praisePartTarget').value : '';
    const title = document.getElementById('praiseTitle').value.trim();
    const date = document.getElementById('praiseDate').value;
    const youtubeUrl = document.getElementById('praiseYoutube').value.trim();

    const praises = this.storage.get(STORAGE_KEYS.PRAISES);

    if (editingId) {
      const item = praises.find(p => p.id === editingId);
      if (item) {
        item.type = type;
        item.partTarget = partTarget;
        item.title = title;
        item.date = date;
        item.youtubeUrl = youtubeUrl;
        this.storage.save(STORAGE_KEYS.PRAISES, praises);
        this.closeModal('modalPraise');
        this.populatePraiseMonthDropdown();
        this.renderPraises();
        alert('✏️ 찬양 정보가 성공적으로 수정되었습니다.');
        return;
      }
    }
    const newPraise = {
      id: 'p_' + Date.now(),
      type,
      partTarget,
      title,
      date,
      youtubeUrl
    };

    praises.unshift(newPraise);
    this.storage.save(STORAGE_KEYS.PRAISES, praises);
    this.closeModal('modalPraise');
    this.populatePraiseMonthDropdown();
    this.renderPraises();

    if (type === 'part') {
      const partOrder = ['ALL_PART', 'S', 'A', 'T', 'B'];
      const partNames = { 'ALL_PART': '4부 합창', 'S': '소프라노', 'A': '알토', 'T': '테너', 'B': '베이스' };
      const currentIndex = partOrder.indexOf(partTarget);

      this.lastBatchTitle = title;
      this.lastBatchDate = date;

      if (currentIndex >= 0 && currentIndex < partOrder.length - 1) {
        const nextTarget = partOrder[currentIndex + 1];
        this.lastNextPartTarget = nextTarget;
        const nextPartName = partNames[nextTarget] || '다음 파트';
        alert(`🎵 [${partNames[partTarget] || '파트'}] 음원이 등록되었습니다!\n다음 [${nextPartName}] 음원 등록 시 곡 제목과 일자가 자동 입력됩니다.`);
      } else {
        // 베이스(B) 또는 마지막 파트까지 등록 완료 시 자동 입력 배치 리셋
        this.lastBatchTitle = '';
        this.lastBatchDate = '';
        this.lastNextPartTarget = '';
        alert('🎉 [베이스 파트]까지 5개 파트 연습 음원 등록이 모두 완료되었습니다!');
      }
    } else {
      alert('🎵 새로운 성가대 찬양 영상이 성공적으로 등록되었습니다.');
    }
  }

  deletePraise(id, btn) {
    this.confirmAction('🎵 이 찬양 항목을 삭제하시겠습니까?', () => {
      this.animateRemoveCard(btn, () => {
        let praises = this.storage.get(STORAGE_KEYS.PRAISES);
        praises = praises.filter(p => p.id !== id);
        this.storage.save(STORAGE_KEYS.PRAISES, praises);
        this.populatePraiseMonthDropdown();
        this.renderPraises();
      });
    });
  }

  // ----------------------------------------------------
  // 📅 5. 주요일정 렌더링 & 티켓/참석 신청 로직
  // ----------------------------------------------------
  renderSchedules() {
    const listEl = document.getElementById('scheduleList');
    if (!listEl) return;
    const schedules = this.storage.get(STORAGE_KEYS.SCHEDULES);
    const isOfficer = this.storage.isOfficer();

    if (schedules.length === 0) {
      if (!this.storage.initialSyncDone) {
        listEl.innerHTML = this.getInitialLoadingHtml('주요 일정');
        return;
      }
      listEl.innerHTML = `<div class="item-card"><p class="card-body-text">등록된 일정이 없습니다.</p></div>`;
      return;
    }

    const now = new Date();
    // 당일 자정 기준 (오늘 일정까지는 진행 중인 일정으로 포함)
    const todayMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const parseScheduleDate = (s) => {
      if (s.datetime) {
        const dt = new Date(s.datetime);
        if (!isNaN(dt.getTime())) return dt;
      }
      if (s.date) {
        const timePart = s.time ? (s.time.length === 5 ? s.time : s.time + ':00') : '00:00';
        const dt = new Date(`${s.date}T${timePart}`);
        if (!isNaN(dt.getTime())) return dt;
      }
      return new Date();
    };

    const upcoming = [];
    const past = [];

    schedules.forEach(s => {
      const sDate = parseScheduleDate(s);
      if (sDate >= todayMidnight) {
        upcoming.push(s);
      } else {
        past.push(s);
      }
    });

    // 예정된 일정: 빠르게 다가오는 날짜순 정렬
    upcoming.sort((a, b) => parseScheduleDate(a) - parseScheduleDate(b));
    // 지나간 일정: 최근 지난 날짜가 맨 위로 오도록 내림차순 정렬
    past.sort((a, b) => parseScheduleDate(b) - parseScheduleDate(a));

    const renderScheduleCard = (s, isPast = false) => {
      const dt = parseScheduleDate(s);
      const monthStr = `${dt.getMonth() + 1}월`;
      const dayStr = String(dt.getDate()).padStart(2, '0');
      const dowStr = `${['일', '월', '화', '수', '목', '금', '토'][dt.getDay()]}요일`;
      const timeStr = `${dt.getHours().toString().padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}`;

      const apps = s.applications || [];
      const totalApps = apps.length;
      let totalTickets = 0;
      apps.forEach(a => {
        if (a.option) {
          const match = a.option.match(/(\d+)매/);
          if (match) totalTickets += parseInt(match[1], 10);
        }
      });
      const ticketInfoStr = totalTickets > 0 ? ` · 티켓 총 ${totalTickets}매` : '';

      return `
        <div class="item-card ${isPast ? 'opacity-80' : ''}" id="schedule_card_${s.id}">
          <div class="schedule-card-inner">
            <div class="sched-date-stamp">
              <span class="sched-stamp-header">${monthStr}</span>
              <span class="sched-stamp-day">${dayStr}</span>
              <span class="sched-stamp-dow">${dowStr}</span>
            </div>
            <div class="sched-details">
              <div class="card-top" style="margin-bottom: 2px;">
                <span class="card-badge ${isPast ? 'badge-past' : 'badge-praise'}">${isPast ? '지난 일정' : '예정 일정'} · ${timeStr}</span>
                <div class="card-top-right">
                  ${this.getShareButtonHtml('schedule', s.id)}
                  ${isOfficer ? `
                    <div class="card-admin-actions">
                      <button type="button" class="btn-card-edit" onclick="app.openEditScheduleModal('${s.id}')" title="수정">✏️</button>
                      <button type="button" class="btn-card-delete" onclick="app.deleteSchedule('${s.id}', this)" title="삭제">✕</button>
                    </div>
                  ` : ''}
                </div>
              </div>
              <h3 class="card-title">${this.escapeHtml(s.title || '')}</h3>
              ${s.location ? `<p class="sched-location-text"><strong>장소:</strong> ${this.escapeHtml(s.location)}</p>` : ''}
            </div>
          </div>
          ${s.note ? `<p class="sched-body-text">${this.escapeHtml(s.note)}</p>` : ''}
          ${s.imageUrl ? `<div style="margin-top: 6px;">${this.getNoticeMediaHtml(s.imageUrl, s.title)}</div>` : ''}
          ${s.youtubeUrl ? `<div class="video-responsive" style="margin-top: 6px;">${this.getYoutubeIframe(s.youtubeUrl)}</div>` : ''}

          <!-- 🎟️ 신청 기능 활성화 시 버튼 표시 -->
          ${s.enableApply ? `
            <div class="sched-apply-box">
              ${s.isApplyClosed ? `
                <button type="button" class="btn-card-apply disabled" disabled title="신청이 마감되었습니다">
                  🔒 신청 마감
                </button>
              ` : `
                <button type="button" class="btn-card-apply" onclick="app.openApplyModal('${s.id}')">
                  🎟️ ${s.applyTitle || '신청하기'}
                </button>
              `}
              
              <button type="button" class="btn-card-apply-list" onclick="app.openApplyListModal('${s.id}')">
                📋 신청 현황 보기 (총 ${totalApps}명 신청${ticketInfoStr})
              </button>
            </div>
          ` : ''}
        </div>
      `;
    };

    let html = '';

    if (upcoming.length > 0) {
      html += upcoming.map(s => renderScheduleCard(s, false)).join('');
    } else {
      html += `<div class="item-card"><p class="card-body-text">📅 현재 예정된 새로운 주요 일정이 없습니다.</p></div>`;
    }

    if (past.length > 0) {
      html += `
        <details class="archive-accordion">
          <summary class="archive-summary">📜 지나간 일정 보관함 (총 ${past.length}개)</summary>
          <div class="archive-content">
            ${past.map(s => renderScheduleCard(s, true)).join('')}
          </div>
        </details>
      `;
    }

    if (listEl.innerHTML !== html) {
      listEl.innerHTML = html;
    }
  }

  openScheduleModal() {
    const form = document.getElementById('formSchedule');
    if (form) form.reset();

    const editingIdEl = document.getElementById('editingSchedId');
    if (editingIdEl) editingIdEl.value = '';

    const headerTitle = document.getElementById('schedHeaderTitle');
    if (headerTitle) headerTitle.textContent = '📅 성가대 일정 등록';

    const btnSubmit = document.getElementById('btnSubmitSched');
    if (btnSubmit) btnSubmit.textContent = '등록하기';

    this.clearUploadedImage('schedFilePhoto', 'schedPhotoPreview', 'schedPhotoData');
    this.toggleSchedApplyFields(false);
    const isApplyClosedEl = document.getElementById('schedIsApplyClosed');
    if (isApplyClosedEl) isApplyClosedEl.checked = false;
    this.openModal('modalSchedule');
  }

  openEditScheduleModal(id) {
    if (!this.storage.isOfficer()) {
      alert('🔒 관리자만 일정을 수정할 수 있습니다.');
      return;
    }
    const schedules = this.storage.get(STORAGE_KEYS.SCHEDULES);
    const sched = schedules.find(s => s.id === id);
    if (!sched) return;

    const form = document.getElementById('formSchedule');
    if (form) form.reset();

    const editingIdEl = document.getElementById('editingSchedId');
    if (editingIdEl) editingIdEl.value = id;

    const headerTitle = document.getElementById('schedHeaderTitle');
    if (headerTitle) headerTitle.textContent = '✏️ 성가대 일정 수정';

    const btnSubmit = document.getElementById('btnSubmitSched');
    if (btnSubmit) btnSubmit.textContent = '수정 완료';

    document.getElementById('schedTitle').value = sched.title || '';
    document.getElementById('schedDate').value = sched.datetime || '';
    document.getElementById('schedLocation').value = sched.location || '';
    document.getElementById('schedNote').value = sched.note || '';

    const ytInput = document.getElementById('schedYoutube');
    if (ytInput) ytInput.value = sched.youtubeUrl || '';

    const imgInput = document.getElementById('schedImageUrl');
    if (imgInput) imgInput.value = sched.imageUrl || '';

    const enableApplyCheckbox = document.getElementById('schedEnableApply');
    const isApplyEnabled = !!sched.enableApply;
    if (enableApplyCheckbox) enableApplyCheckbox.checked = isApplyEnabled;
    this.toggleSchedApplyFields(isApplyEnabled);

    const isApplyClosedEl = document.getElementById('schedIsApplyClosed');
    if (isApplyClosedEl) isApplyClosedEl.checked = !!sched.isApplyClosed;

    if (isApplyEnabled) {
      document.getElementById('schedApplyTitle').value = sched.applyTitle || '';
      document.getElementById('schedApplyType').value = sched.applyType || 'ticket';
    }

    this.openModal('modalSchedule');
  }

  toggleSchedApplyFields(checked) {
    const fields = document.getElementById('schedApplyFields');
    if (checked) {
      fields.classList.remove('hidden');
    } else {
      fields.classList.add('hidden');
      const isApplyClosedEl = document.getElementById('schedIsApplyClosed');
      if (isApplyClosedEl) isApplyClosedEl.checked = false;
    }
  }

  saveSchedule(e) {
    e.preventDefault();
    const editingId = document.getElementById('editingSchedId')?.value;
    const title = document.getElementById('schedTitle').value.trim();
    const datetime = document.getElementById('schedDate').value;
    const location = document.getElementById('schedLocation').value.trim();
    const note = document.getElementById('schedNote').value.trim();
    const enableApply = document.getElementById('schedEnableApply').checked;
    const isApplyClosed = enableApply && !!document.getElementById('schedIsApplyClosed')?.checked;
    const applyTitle = document.getElementById('schedApplyTitle').value.trim() || '🎟️ 참석/티켓 신청하기';
    const applyType = document.getElementById('schedApplyType').value;

    const youtubeUrl = document.getElementById('schedYoutube')?.value.trim() || '';
    const uploadedDataUrl = document.getElementById('schedPhotoData')?.value.trim() || '';
    const inputUrl = document.getElementById('schedImageUrl')?.value.trim() || '';
    const imageUrl = uploadedDataUrl || this.convertGoogleDriveUrl(inputUrl);

    const schedules = this.storage.get(STORAGE_KEYS.SCHEDULES);

    if (editingId) {
      const sched = schedules.find(s => s.id === editingId);
      if (sched) {
        sched.title = title;
        sched.datetime = datetime;
        sched.location = location;
        sched.note = note;
        sched.youtubeUrl = youtubeUrl;
        sched.imageUrl = imageUrl;
        sched.enableApply = enableApply;
        sched.isApplyClosed = isApplyClosed;
        sched.applyTitle = applyTitle;
        sched.applyType = applyType;

        this.storage.save(STORAGE_KEYS.SCHEDULES, schedules);
        this.closeModal('modalSchedule');
        this.renderSchedules();
        alert('✏️ 일정이 성공적으로 수정되었습니다.');
        return;
      }
    }
    const now = Date.now();
    schedules.push({
      id: 's_' + now,
      createdAt: now,
      title,
      datetime,
      location,
      note,
      youtubeUrl,
      imageUrl,
      enableApply,
      isApplyClosed,
      applyTitle,
      applyType,
      applications: []
    });

    this.storage.save(STORAGE_KEYS.SCHEDULES, schedules);
    this.closeModal('modalSchedule');
    this.renderSchedules();
    this.updateUnreadBadges();
    this.triggerNotification('📅 [주요일정] 새 소식', title);
    alert('📅 신규 일정이 등록되었습니다.');
  }

  deleteSchedule(id, btn) {
    this.confirmAction('📅 이 일정을 삭제하시겠습니까?', () => {
      this.animateRemoveCard(btn, () => {
        let schedules = this.storage.get(STORAGE_KEYS.SCHEDULES);
        schedules = schedules.filter(s => s.id !== id);
        this.storage.save(STORAGE_KEYS.SCHEDULES, schedules);
        this.renderSchedules();
      });
    });
  }

  // ----------------------------------------------------
  // 🎟️ 대원 일정 신청 & 신청자 현황 관리
  // ----------------------------------------------------
  openApplyModal(schedId) {
    const schedules = this.storage.get(STORAGE_KEYS.SCHEDULES);
    const sched = schedules.find(s => s.id === schedId);
    if (!sched) return;

    if (sched.isApplyClosed) {
      alert('🔒 해당 일정의 신청이 마감되었습니다.');
      return;
    }

    document.getElementById('formApplySchedule').reset();
    document.getElementById('applyTargetSchedId').value = schedId;
    document.getElementById('applyModalHeaderTitle').textContent = sched.applyTitle || '🎟️ 일정 신청하기';
    document.getElementById('applySchedName').textContent = sched.title;

    const dt = new Date(sched.datetime);
    const dateStr = `${dt.getFullYear()}년 ${dt.getMonth() + 1}월 ${dt.getDate()}일 (${['일', '월', '화', '수', '목', '금', '토'][dt.getDay()]})`;
    document.getElementById('applySchedInfo').textContent = `📍 장소: ${sched.location} | 일시: ${dateStr}`;

    // 신청 옵션 생성
    const selectEl = document.getElementById('applyOptionSelect');
    const lblEl = document.getElementById('lblApplyOption');

    if (sched.applyType === 'ticket') {
      lblEl.textContent = '🎟️ 신청 티켓 수량 선택 *';
      selectEl.innerHTML = `
        <option value="1매">1매 (본인)</option>
        <option value="2매">2매 (동반 1인)</option>
        <option value="3매">3매 (동반 2인)</option>
        <option value="4매">4매 (동반 3인)</option>
      `;
    } else if (sched.applyType === 'attend') {
      lblEl.textContent = '🙋 참석 여부 선택 *';
      selectEl.innerHTML = `
        <option value="참석">참석합니다</option>
        <option value="불참">불참합니다</option>
      `;
    } else {
      lblEl.textContent = '🙋 참석 여부 선택 *';
      selectEl.innerHTML = `
        <option value="참석">참석합니다</option>
        <option value="불참">불참합니다</option>
      `;
    }

    this.openModal('modalApplySchedule');
  }

  saveApplication(e) {
    e.preventDefault();
    const schedId = document.getElementById('applyTargetSchedId').value;
    const part = document.getElementById('applyPart').value;
    const name = document.getElementById('applyName').value.trim();
    const option = document.getElementById('applyOptionSelect').value;
    const note = document.getElementById('applyNote').value.trim();

    const schedules = this.storage.get(STORAGE_KEYS.SCHEDULES);
    const sched = schedules.find(s => s.id === schedId);
    if (!sched) return;

    if (sched.isApplyClosed) {
      alert('🔒 해당 일정의 신청이 이미 마감되었습니다.');
      return;
    }

    if (!sched.applications) sched.applications = [];
    const appId = 'app_' + Date.now();
    sched.applications.push({
      id: appId,
      part,
      name,
      option,
      note,
      time: new Date().toLocaleString('ko-KR', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })
    });

    this.storage.save(STORAGE_KEYS.SCHEDULES, schedules);
    this.storage.addMyItemId(appId);
    this.closeModal('modalApplySchedule');
    this.renderSchedules();
    alert(`🎉 ${name} 대원님의 신청이 성공적으로 접수되었습니다!`);
  }

  openApplyListModal(schedId) {
    this.currentApplyListSchedId = schedId;
    const schedules = this.storage.get(STORAGE_KEYS.SCHEDULES);
    const sched = schedules.find(s => s.id === schedId);
    if (!sched) return;

    const isClosed = Boolean(sched.isApplyClosed);
    const titleEl = document.getElementById('applyListSchedTitle');
    if (titleEl) {
      titleEl.innerHTML = `${this.escapeHtml(sched.title)} ${isClosed ? '<span style="background:#FEE2E2; color:#DC2626; font-size:12px; font-weight:800; padding:2px 8px; border-radius:6px; border:1px solid #FECACA; margin-left:6px; vertical-align:middle;">🔒 신청마감</span>' : ''}`;
    }
    const apps = sched.applications || [];
    let totalTickets = 0;

    const partCounts = {
      '소프라노': 0,
      '알토': 0,
      '테너': 0,
      '베이스': 0,
      '임원': 0
    };

    apps.forEach(a => {
      if (a.option) {
        const match = a.option.match(/(\d+)매/);
        if (match) totalTickets += parseInt(match[1], 10);
      }
      if (a.part) {
        const pKey = a.part === '소프' ? '소프라노' : a.part;
        partCounts[pKey] = (partCounts[pKey] || 0) + 1;
      }
    });

    const totalText = totalTickets > 0
      ? `총 ${apps.length}명 신청 완료 (티켓 총 ${totalTickets}매)`
      : `총 ${apps.length}명 신청 완료`;
    document.getElementById('applyTotalCountBadge').textContent = totalText;

    const breakdownEl = document.getElementById('applyPartBreakdownBadges');
    if (breakdownEl) {
      const partsArr = ['소프라노', '알토', '테너', '베이스', '임원'];
      const activeParts = partsArr.filter(p => partCounts[p] > 0);
      if (activeParts.length > 0) {
        breakdownEl.innerHTML = activeParts.map(p => {
          const label = p === '임원' ? '지휘/반주' : p;
          return `<span class="part-count-badge ${p}">${label} ${partCounts[p]}명</span>`;
        }).join('');
      } else {
        breakdownEl.innerHTML = '';
      }
    }

    const container = document.getElementById('applyListContainer');
    const isOfficer = this.storage.isOfficer();

    if (apps.length === 0) {
      container.innerHTML = `<p style="padding:24px 16px; text-align:center; color:var(--text-sub); font-size:15px;">아직 신청한 대원이 없습니다.</p>`;
    } else {
      const partRank = {
        '소프라노': 1,
        '소프': 1,
        '알토': 2,
        '테너': 3,
        '베이스': 4,
        '지휘자/반주자': 5,
        '임원': 5
      };

      apps.sort((a, b) => {
        const rankA = partRank[a.part] || 99;
        const rankB = partRank[b.part] || 99;
        if (rankA !== rankB) {
          return rankA - rankB;
        }
        return (a.name || '').localeCompare(b.name || '', 'ko');
      });

      container.innerHTML = apps.map(a => {
        const isMine = this.storage.isMyItem(a.id);
        const canEdit = isOfficer || (!isClosed && isMine);
        const partClass = a.part || '';
        const displayPart = this.formatPartTag(a.part);

        return `
          <div class="applicant-row-card ${isMine ? 'is-mine' : ''}">
            <div class="applicant-row-main">
              <div class="applicant-info-group">
                <span class="part-tag ${partClass}">${displayPart}</span>
                <strong class="applicant-name">${this.escapeHtml(a.name || '')}</strong>
                ${isMine ? '<span class="my-apply-badge">내 신청</span>' : ''}
              </div>

              <div class="applicant-right-group">
                <span class="applicant-option-badge">${this.escapeHtml(a.option || '신청')}</span>
                ${canEdit ? `
                  <div class="applicant-action-btns">
                    <button type="button" class="btn-app-edit" onclick="app.openEditApplicationModal('${schedId}', '${a.id}')">수정</button>
                    <button type="button" class="btn-app-delete" onclick="app.deleteApplication('${schedId}', '${a.id}', this)">삭제</button>
                  </div>
                ` : ''}
              </div>
            </div>

            ${a.note ? `
              <div class="applicant-note-row">
                <span style="font-size:12px;">💬</span>
                <span>${this.escapeHtml(a.note)}</span>
              </div>
            ` : ''}
          </div>
        `;
      }).join('');
    }

    this.openModal('modalApplyList');
  }

  shareApplyListText() {
    if (!this.currentApplyListSchedId) return;
    const schedules = this.storage.get(STORAGE_KEYS.SCHEDULES) || [];
    const sched = schedules.find(s => s.id === this.currentApplyListSchedId);
    if (!sched) return;

    const apps = sched.applications || [];
    if (apps.length === 0) {
      this.showToast('📋 아직 등록된 신청자가 없습니다.');
      return;
    }

    const shareText = this.generateApplyListShareText(sched);

    if (navigator.share) {
      navigator.share({
        title: `[신청 현황] ${sched.title}`,
        text: shareText
      }).catch(err => {
        if (err.name !== 'AbortError') {
          this.copyApplyListText(shareText);
        }
      });
    } else {
      this.copyApplyListText(shareText);
    }
  }

  generateApplyListShareText(sched) {
    const isTicket = sched.applyType === 'ticket';
    const apps = sched.applications || [];
    const headerTitle = isTicket ? `[티켓 신청 현황] ${sched.title}` : `[참석 신청 현황] ${sched.title}`;

    // 1. 일시 및 장소 정보 구성
    const metaLines = [];
    if (sched.datetime) {
      try {
        const dt = new Date(sched.datetime);
        if (!isNaN(dt.getTime())) {
          const days = ['일', '월', '화', '수', '목', '금', '토'];
          const dateStr = `${dt.getFullYear()}년 ${dt.getMonth() + 1}월 ${dt.getDate()}일 (${days[dt.getDay()]})`;
          const timeStr = dt.toTimeString().slice(0, 5);
          metaLines.push(`📅 일시: ${dateStr}${timeStr !== '00:00' ? ' ' + timeStr : ''}`);
        }
      } catch (e) { }
    } else if (sched.date) {
      metaLines.push(`📅 일시: ${sched.date}`);
    }
    if (sched.location) {
      metaLines.push(`📍 장소: ${sched.location}`);
    }

    // 2. 신청 현황 집계
    let totalTickets = 0;
    let attendCount = 0;
    let absentCount = 0;

    const partCounts = {
      '소프라노': 0,
      '알토': 0,
      '테너': 0,
      '베이스': 0,
      '지휘/반주': 0
    };
    const partTicketCounts = {
      '소프라노': 0,
      '알토': 0,
      '테너': 0,
      '베이스': 0,
      '지휘/반주': 0
    };

    const normalizePart = (p) => {
      if (!p) return '소프라노';
      if (p === '소프') return '소프라노';
      if (p === '임원' || p === '지휘' || p === '반주' || p === '지휘자' || p === '반주자' || p === '지휘/반주') return '지휘/반주';
      return p;
    };

    apps.forEach(a => {
      const part = normalizePart(a.part);
      if (isTicket) {
        let ticketNum = 1;
        if (a.option) {
          const match = a.option.match(/(\d+)매/);
          if (match) ticketNum = parseInt(match[1], 10);
        }
        totalTickets += ticketNum;
        partCounts[part] = (partCounts[part] || 0) + 1;
        partTicketCounts[part] = (partTicketCounts[part] || 0) + ticketNum;
      } else {
        if (a.option === '불참') {
          absentCount++;
        } else {
          attendCount++;
          partCounts[part] = (partCounts[part] || 0) + 1;
        }
      }
    });

    const summaryLines = [];
    if (isTicket) {
      summaryLines.push(`• 총 신청: ${apps.length}명 (티켓 총 ${totalTickets}매)`);
      const partSummary = ['소프라노', '알토', '테너', '베이스', '지휘/반주']
        .filter(p => partCounts[p] > 0)
        .map(p => `${p} ${partCounts[p]}명 (${partTicketCounts[p]}매)`)
        .join(', ');
      if (partSummary) summaryLines.push(`• 파트별: ${partSummary}`);
    } else {
      if (absentCount > 0) {
        summaryLines.push(`• 참석: ${attendCount}명 / 불참: ${absentCount}명 (총 ${apps.length}명 응답)`);
      } else {
        summaryLines.push(`• 참석: ${attendCount}명 신청 완료`);
      }
      const partSummary = ['소프라노', '알토', '테너', '베이스', '지휘/반주']
        .filter(p => partCounts[p] > 0)
        .map(p => `${p} ${partCounts[p]}명`)
        .join(', ');
      if (partSummary) summaryLines.push(`• 파트별 참석: ${partSummary}`);
    }

    // 3. 파트별 신청자 명단
    const partOrder = ['소프라노', '알토', '테너', '베이스', '지휘/반주'];
    const groups = {};
    partOrder.forEach(p => { groups[p] = []; });
    const absentList = [];

    apps.forEach(a => {
      if (!isTicket && a.option === '불참') {
        absentList.push(a);
        return;
      }
      const p = normalizePart(a.part);
      if (!groups[p]) groups[p] = [];
      groups[p].push(a);
    });

    const memberSection = [];
    partOrder.forEach(p => {
      const list = groups[p] || [];
      if (list.length === 0) return;

      list.sort((x, y) => (x.name || '').localeCompare(y.name || '', 'ko'));

      let partHeader = '';
      if (isTicket) {
        partHeader = `[${p}] ${list.length}명 (${partTicketCounts[p]}매)`;
      } else {
        partHeader = `[${p}] ${list.length}명`;
      }

      const rows = list.map(item => {
        const optStr = item.option ? `: ${item.option}` : '';
        const noteStr = item.note ? ` (${item.note})` : '';
        return `• ${item.name}${optStr}${noteStr}`;
      });

      memberSection.push(`${partHeader}\n${rows.join('\n')}`);
    });

    if (absentList.length > 0) {
      absentList.sort((x, y) => (x.name || '').localeCompare(y.name || '', 'ko'));
      const rows = absentList.map(item => {
        const p = normalizePart(item.part);
        const noteStr = item.note ? ` - ${item.note}` : '';
        return `• ${item.name} (${p})${noteStr}`;
      });
      memberSection.push(`[불참 대원] ${absentList.length}명\n${rows.join('\n')}`);
    }

    // 4. 최종 텍스트 조립
    const parts = [
      `📋 ${headerTitle}`,
      metaLines.length > 0 ? metaLines.join('\n') : '',
      `━━━━━━━━━━━━━━━━━━`,
      `📊 전체 현황 요약\n${summaryLines.join('\n')}`,
      `━━━━━━━━━━━━━━━━━━`,
      `👥 신청자 명단\n\n${memberSection.join('\n\n')}`,
      `━━━━━━━━━━━━━━━━━━\n갈보리교회 임마누엘 성가대`
    ].filter(Boolean);

    return parts.join('\n\n');
  }

  copyApplyListText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        this.showToast('📋 신청 현황 텍스트가 복사되었습니다! 카톡이나 문자에 붙여넣어 보세요.');
      }).catch(() => {
        this.fallbackCopyApplyListText(text);
      });
    } else {
      this.fallbackCopyApplyListText(text);
    }
  }

  fallbackCopyApplyListText(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      this.showToast('📋 신청 현황 텍스트가 복사되었습니다! 카톡이나 문자에 붙여넣어 보세요.');
    } catch (err) {
      alert(`신청 현황 내용:\n\n${text}`);
    }
    document.body.removeChild(textArea);
  }

  openEditApplicationModal(schedId, appId) {
    const isOfficer = this.storage.isOfficer();
    const schedules = this.storage.get(STORAGE_KEYS.SCHEDULES);
    const sched = schedules.find(s => s.id === schedId);
    if (!sched || !sched.applications) return;

    if (sched.isApplyClosed && !isOfficer) {
      alert('🔒 신청이 마감되어 대원은 수정할 수 없습니다. (관리자에게 문의해주세요)');
      return;
    }

    if (!this.storage.isMyItem(appId) && !isOfficer) {
      alert('🔒 본인이 작성한 신청 내역만 수정할 수 있습니다.');
      return;
    }
    const appItem = sched.applications.find(a => a.id === appId);
    if (!appItem) return;

    document.getElementById('editAppSchedId').value = schedId;
    document.getElementById('editAppId').value = appId;
    document.getElementById('editAppPart').value = appItem.part || '소프라노';
    document.getElementById('editAppName').value = appItem.name || '';
    document.getElementById('editAppNote').value = appItem.note || '';

    const selectEl = document.getElementById('editAppOptionSelect');
    selectEl.innerHTML = '';
    if (sched.applyType === 'ticket') {
      [1, 2, 3, 4].forEach(num => {
        const opt = document.createElement('option');
        opt.value = `${num}매`;
        opt.textContent = `🎟️ 티켓 ${num}매`;
        if (appItem.option === `${num}매`) opt.selected = true;
        selectEl.appendChild(opt);
      });
    } else {
      ['참석', '불참'].forEach(val => {
        const opt = document.createElement('option');
        opt.value = val;
        opt.textContent = val === '참석' ? '🙋 참석' : '🙅 불참';
        if (appItem.option === val) opt.selected = true;
        selectEl.appendChild(opt);
      });
    }

    this.openModal('modalEditApplication');
  }

  saveEditedApplication(e) {
    e.preventDefault();
    const schedId = document.getElementById('editAppSchedId').value;
    const appId = document.getElementById('editAppId').value;
    const part = document.getElementById('editAppPart').value;
    const name = document.getElementById('editAppName').value.trim();
    const option = document.getElementById('editAppOptionSelect').value;
    const note = document.getElementById('editAppNote').value.trim();

    const isOfficer = this.storage.isOfficer();
    const schedules = this.storage.get(STORAGE_KEYS.SCHEDULES);
    const sched = schedules.find(s => s.id === schedId);
    if (!sched || !sched.applications) return;

    if (sched.isApplyClosed && !isOfficer) {
      alert('🔒 신청이 마감되어 대원은 수정할 수 없습니다. (관리자에게 문의해주세요)');
      return;
    }

    if (!this.storage.isMyItem(appId) && !isOfficer) {
      alert('🔒 본인이 작성한 신청 내역만 수정할 수 있습니다.');
      return;
    }

    const appItem = sched.applications.find(a => a.id === appId);
    if (appItem) {
      appItem.part = part;
      appItem.name = name;
      appItem.option = option;
      appItem.note = note;
      this.storage.save(STORAGE_KEYS.SCHEDULES, schedules);
      this.closeModal('modalEditApplication');
      this.openApplyListModal(schedId);
      this.renderSchedules();
      alert('✏️ 신청 내역이 성공적으로 수정되었습니다.');
    }
  }

  deleteApplication(schedId, appId, btn) {
    const isOfficer = this.storage.isOfficer();
    const schedules = this.storage.get(STORAGE_KEYS.SCHEDULES);
    const sched = schedules.find(s => s.id === schedId);

    if (sched && sched.isApplyClosed && !isOfficer) {
      alert('🔒 신청이 마감되어 대원은 삭제(취소)할 수 없습니다. (관리자에게 문의해주세요)');
      return;
    }

    if (!this.storage.isMyItem(appId) && !isOfficer) {
      alert('🔒 본인이 작성한 신청 내역만 삭제할 수 있습니다.');
      return;
    }
    this.confirmAction('🎟️ 해당 신청 내역을 삭제하시겠습니까?', () => {
      this.animateRemoveCard(btn, () => {
        if (sched && sched.applications) {
          sched.applications = sched.applications.filter(a => a.id !== appId);
          this.storage.save(STORAGE_KEYS.SCHEDULES, schedules);
          this.storage.removeMyItemId(appId);
          this.openApplyListModal(schedId);
          this.renderSchedules();
        }
      });
    });
  }

  // ----------------------------------------------------
  // 👥 6. 성가대원 렌더링 (가나다순 정렬 & 통화/문자 연동)
  // ----------------------------------------------------
  renderMembers() {
    const listEl = document.getElementById('memberList');
    if (!listEl) return;
    const allMembers = this.storage.get(STORAGE_KEYS.MEMBERS);
    const isOfficer = this.storage.isOfficer();

    this.updateMemberPartChipCounts(allMembers);

    let members = allMembers;
    if (this.memberPartFilter !== 'ALL') {
      members = members.filter(m => m.part === this.memberPartFilter);
    }

    members.sort((a, b) => a.name.localeCompare(b.name, 'ko'));

    if (allMembers.length === 0 && !this.storage.initialSyncDone) {
      listEl.innerHTML = this.getInitialLoadingHtml('대원 명단');
      return;
    }

    const html = members.length === 0
      ? `<div class="item-card"><p class="card-body-text">등록된 대원이 없습니다.</p></div>`
      : members.map(m => {
        const cleanPhone = (m.phone || '').replace(/[^0-9+]/g, '');
        const isConsentPublic = Boolean(m.isPublic);
        const showDetails = isOfficer || isConsentPublic;

        const photoUrl = showDetails ? this.formatMemberPhotoUrl(m.photoUrl, m.id) : null;

        return `
        <div class="member-card">
          <div class="member-info-left">
            ${photoUrl ? `<img src="${photoUrl}" class="member-avatar clickable-photo" onclick="app.openImageViewer('${photoUrl}', '${this.escapeHtml(m.name)}')" alt="${m.name}" title="클릭하여 원본 사진 보기">` : `<div class="member-avatar">${m.name.charAt(0)}</div>`}
            <div class="member-details">
              <div class="member-name-row">
                <span class="member-name">${m.name}</span>
                ${m.role ? `<span class="member-role">(${m.role})</span>` : ''}
                ${isOfficer && isConsentPublic ? `<span style="background:#ECFDF5; color:#059669; font-size:11px; font-weight:700; padding:2px 6px; border-radius:4px; border:1px solid #A7F3D0; margin-left:4px;">🔓공개</span>` : ''}
              </div>
              <span class="part-tag ${m.part}">${this.formatPartTag(m.part)}</span>
            </div>
          </div>

          <div class="member-contact-buttons">
            ${showDetails ? `
              <a href="tel:${cleanPhone}" class="btn-contact-call" title="전화 연결">
                📞 <span class="btn-text-sm">전화</span>
              </a>
              <a href="sms:${cleanPhone}" class="btn-contact-sms" title="문자 보내기">
                💬 <span class="btn-text-sm">문자</span>
              </a>
            ` : ''}
            ${isOfficer ? `
              <button class="btn-edit-card" style="position:static; margin-right:4px;" onclick="app.editMember('${m.id}')" title="수정">✏️</button>
              <button class="btn-delete-card" style="position:static;" onclick="app.deleteMember('${m.id}', this)" title="삭제">✕</button>
            ` : ''}
          </div>
        </div>
      `;
      }).join('');

    listEl.innerHTML = html;
  }

  updateMemberPartChipCounts(allMembers) {
    const counts = {
      'ALL': allMembers.length,
      '임원': 0,
      '소프라노': 0,
      '알토': 0,
      '테너': 0,
      '베이스': 0
    };

    allMembers.forEach(m => {
      if (counts[m.part] !== undefined) {
        counts[m.part]++;
      }
    });

    const labels = {
      'ALL': '전체',
      '임원': '지휘자/반주자',
      '소프라노': '소프라노',
      '알토': '알토',
      '테너': '테너',
      '베이스': '베이스'
    };

    document.querySelectorAll('.member-chip').forEach(chip => {
      const mpart = chip.dataset.mpart;
      if (mpart && counts[mpart] !== undefined) {
        const name = labels[mpart] || mpart;
        const newText = `${name} (${counts[mpart]}명)`;
        if (chip.textContent !== newText) {
          chip.textContent = newText;
        }
      }
    });
  }

  // ----------------------------------------------------
  // 👥 대원 사진 전용 핸들러 (원점 재설계)
  // ----------------------------------------------------
  clearMemberPhoto(clearUrlInput = true) {
    const fileEl = document.getElementById('memFilePhoto');
    const dataEl = document.getElementById('memPhotoData');
    const previewEl = document.getElementById('memPhotoPreview');
    const urlEl = document.getElementById('memPhoto');

    if (fileEl) fileEl.value = '';
    if (dataEl) dataEl.value = '';
    if (clearUrlInput && urlEl) urlEl.value = '';
    if (previewEl) {
      previewEl.innerHTML = '';
      previewEl.classList.add('hidden');
    }
  }

  handleMemberPhotoUpload(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    // 1. 기존 폼 사진 데이터 0ms 즉시 리셋
    const dataEl = document.getElementById('memPhotoData');
    if (dataEl) dataEl.value = '';

    const previewEl = document.getElementById('memPhotoPreview');
    if (previewEl) {
      previewEl.innerHTML = `<div style="padding:10px; font-size:13px; color:#38BDF8; background:rgba(56,189,248,0.1); border-radius:8px; text-align:center;">⏳ 사진을 분석하여 압축하는 중입니다...</div>`;
      previewEl.classList.remove('hidden');
    }

    // 📷 대용량/모든 확장자 전천후 초고속 Canvas 압축 처리기
    const processImageObject = (imgObj, cleanupFn) => {
      try {
        const canvas = document.createElement('canvas');
        const MAX = 500;
        let w = imgObj.width || 500;
        let h = imgObj.height || 500;

        if (w > h) {
          if (w > MAX) { h = Math.round(h * (MAX / w)); w = MAX; }
        } else {
          if (h > MAX) { w = Math.round(w * (MAX / h)); h = MAX; }
        }

        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(imgObj, 0, 0, canvas.width, canvas.height);

        // 500px 고화질 크롭 (20~30KB 내외 완벽 보장)
        const dataUrl = canvas.toDataURL('image/jpeg', 0.75);

        if (dataEl) dataEl.value = dataUrl;

        // URL 입력창 비움 (업로드 파일 최우선)
        const urlEl = document.getElementById('memPhoto');
        if (urlEl) urlEl.value = '';

        if (previewEl) {
          previewEl.innerHTML = `<img src="${dataUrl}" class="clickable-photo" onclick="app.openImageViewer('${dataUrl}', '대원 프로필 사진 미리보기')" alt="미리보기" title="클릭하여 크게 보기"><button type="button" class="btn-remove-photo" onclick="app.clearMemberPhoto(true)">✕ 사진 삭제</button>`;
          previewEl.classList.remove('hidden');
        }
      } catch (err) {
        console.error('Image canvas processing error:', err);
        alert('⚠️ 이미지 처리 중 오류가 발생했습니다. 다른 사진으로 선택해 주세요.');
        this.clearMemberPhoto(true);
      } finally {
        if (typeof cleanupFn === 'function') cleanupFn();
      }
    };

    // 1차 시도: 초고속 객체 메모리 URL (URL.createObjectURL - 20MB 이상 대용량 사진 및 모든 이미지 파일 지원)
    try {
      const objectUrl = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => {
        processImageObject(img, () => URL.revokeObjectURL(objectUrl));
      };
      img.onerror = () => {
        URL.revokeObjectURL(objectUrl);
        // 2차 시도 Fallback: FileReader 방식
        const reader = new FileReader();
        reader.onload = (e) => {
          const fallbackImg = new Image();
          fallbackImg.onload = () => processImageObject(fallbackImg);
          fallbackImg.onerror = () => {
            alert('⚠️ 선택하신 사진 파일(포맷)은 읽을 수 없습니다.\n스마트폰 카메라로 찍은 JPG/PNG 사진을 선택해 주세요.');
            this.clearMemberPhoto(true);
          };
          fallbackImg.src = e.target.result;
        };
        reader.onerror = () => {
          alert('⚠️ 사진 파일 읽기에 실패했습니다.');
          this.clearMemberPhoto(true);
        };
        reader.readAsDataURL(file);
      };
      img.src = objectUrl;
    } catch (e) {
      // 3차 시도: 표준 FileReader
      const reader = new FileReader();
      reader.onload = (ev) => {
        const img = new Image();
        img.onload = () => processImageObject(img);
        img.onerror = () => {
          alert('⚠️ 선택하신 사진 파일 형식은 지원되지 않습니다.');
          this.clearMemberPhoto(true);
        };
        img.src = ev.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  openMemberModal() {
    document.getElementById('formMember').reset();
    const editingIdEl = document.getElementById('editingMemberId');
    if (editingIdEl) editingIdEl.value = '';
    const isPublicEl = document.getElementById('memIsPublic');
    if (isPublicEl) isPublicEl.checked = false;
    this.clearMemberPhoto(true);
    this.openModal('modalMember');
  }

  editMember(id) {
    const members = this.storage.get(STORAGE_KEYS.MEMBERS);
    const member = members.find(m => m.id === id);
    if (!member) return;

    document.getElementById('formMember').reset();
    this.clearMemberPhoto(true);

    const editingIdEl = document.getElementById('editingMemberId');
    if (editingIdEl) editingIdEl.value = member.id;

    document.getElementById('memName').value = member.name || '';
    document.getElementById('memPart').value = member.part || '소프라노';
    document.getElementById('memRole').value = member.role || '';
    document.getElementById('memPhone').value = member.phone || '';

    const isPublicEl = document.getElementById('memIsPublic');
    if (isPublicEl) isPublicEl.checked = Boolean(member.isPublic);

    const currentPhoto = this.formatMemberPhotoUrl(member.photoUrl, member.id);
    const previewEl = document.getElementById('memPhotoPreview');

    if (member.photoUrl === 'none') {
      document.getElementById('memPhoto').value = 'none';
      if (previewEl) {
        previewEl.innerHTML = `<span style="color:#EF4444; font-weight:700; font-size:13px;">🚫 프로필 사진 삭제됨 (기본 이니셜 아이콘 표시 중)</span> <button type="button" class="btn-secondary-sm" style="margin-left:8px;" onclick="app.restoreDefaultMemberPhoto()">🔄 사진 복원</button>`;
        previewEl.classList.remove('hidden');
      }
    } else if (currentPhoto) {
      document.getElementById('memPhoto').value = member.photoUrl || '';
      if (previewEl) {
        previewEl.innerHTML = `<img src="${currentPhoto}" class="clickable-photo" onclick="app.openImageViewer('${currentPhoto}', '${this.escapeHtml(member.name)}')" alt="미리보기" title="클릭하여 크게 보기"><button type="button" class="btn-remove-photo" style="background:#EF4444; color:#FFF; font-weight:700; padding:4px 8px; border-radius:6px; border:none; margin-left:8px; cursor:pointer;" onclick="app.removeMemberPhoto()">🗑️ 사진 삭제 (기본 이니셜 아이콘 사용)</button>`;
        previewEl.classList.remove('hidden');
      }
    }

    this.openModal('modalMember');
  }

  removeMemberPhoto() {
    const photoInput = document.getElementById('memPhoto');
    const dataInput = document.getElementById('memPhotoData');
    const fileInput = document.getElementById('memFilePhoto');
    const previewEl = document.getElementById('memPhotoPreview');

    if (photoInput) photoInput.value = 'none';
    if (dataInput) dataInput.value = '';
    if (fileInput) fileInput.value = '';

    if (previewEl) {
      previewEl.innerHTML = `<span style="color:#EF4444; font-weight:700; font-size:13px;">🚫 프로필 사진 삭제 선택됨 (저장 시 기본 이니셜 아이콘으로 표시됩니다)</span> <button type="button" class="btn-secondary-sm" style="margin-left:8px;" onclick="app.restoreDefaultMemberPhoto()">🔄 취소 (사진 유지)</button>`;
      previewEl.classList.remove('hidden');
    }
  }

  restoreDefaultMemberPhoto() {
    const photoInput = document.getElementById('memPhoto');
    const editingIdEl = document.getElementById('editingMemberId');
    const memberId = editingIdEl ? editingIdEl.value : '';

    if (photoInput) photoInput.value = '';
    this.clearMemberPhoto(true);

    if (memberId) {
      const currentPhoto = this.formatMemberPhotoUrl('', memberId);
      const previewEl = document.getElementById('memPhotoPreview');
      if (previewEl && currentPhoto) {
        previewEl.innerHTML = `<img src="${currentPhoto}" class="clickable-photo" onclick="app.openImageViewer('${currentPhoto}', '${this.escapeHtml(document.getElementById('memName').value.trim())}')" alt="미리보기" title="클릭하여 크게 보기"><button type="button" class="btn-remove-photo" style="background:#EF4444; color:#FFF; font-weight:700; padding:4px 8px; border-radius:6px; border:none; margin-left:8px; cursor:pointer;" onclick="app.removeMemberPhoto()">🗑️ 사진 삭제 (기본 이니셜 아이콘 사용)</button>`;
        previewEl.classList.remove('hidden');
      }
    }
  }

  saveMember(e) {
    e.preventDefault();
    const editingId = document.getElementById('editingMemberId') ? document.getElementById('editingMemberId').value : '';
    const name = document.getElementById('memName').value.trim();
    const part = document.getElementById('memPart').value;
    const role = document.getElementById('memRole').value.trim();
    const phone = document.getElementById('memPhone').value.trim();

    const uploadedDataUrl = document.getElementById('memPhotoData').value.trim();
    const inputUrl = document.getElementById('memPhoto').value.trim();
    const photoUrl = uploadedDataUrl || this.convertGoogleDriveUrl(inputUrl);
    const isPublic = document.getElementById('memIsPublic') ? document.getElementById('memIsPublic').checked : false;

    let members = this.storage.get(STORAGE_KEYS.MEMBERS);

    if (editingId) {
      // 대원 정보 수정 모드 (ID 매칭 -> 이름 2차 매칭 -> 자동 신규 등록 3차 보장)
      let index = members.findIndex(m => m.id === editingId);
      if (index === -1 && name) {
        index = members.findIndex(m => m.name === name);
      }

      if (index !== -1) {
        members[index] = {
          ...members[index],
          name,
          part,
          role,
          phone,
          photoUrl,
          isPublic,
          photoUpdatedAt: Date.now()
        };
      } else {
        members.push({
          id: editingId || ('m_' + Date.now()),
          name,
          part,
          role,
          phone,
          photoUrl,
          isPublic,
          photoUpdatedAt: Date.now()
        });
      }
      alert(`👥 ${name} 대원의 정보가 수정되었습니다.`);
    } else {
      // 신규 대원 추가 모드
      members.push({
        id: 'm_' + Date.now(),
        name,
        part,
        role,
        phone,
        photoUrl,
        isPublic,
        photoUpdatedAt: Date.now()
      });
      alert(`👥 ${name} 대원이 성공적으로 등록되었습니다.`);
    }

    this.storage.save(STORAGE_KEYS.MEMBERS, members);
    this.closeModal('modalMember');
    this.clearMemberPhoto(true);

    const memberListEl = document.getElementById('memberList');
    if (memberListEl) memberListEl.innerHTML = '';
    this.renderMembers();
  }

  // ----------------------------------------------------
  // 📷 스마트폰 이미지 파일 업로드 & 캔버스 선명 스마트 압축 헬퍼
  // ----------------------------------------------------
  handleImageUpload(event, previewId, hiddenInputId, urlInputId) {
    const file = event.target.files[0];
    if (!file) return;

    // 💥 핵심 Fix 1: 새 파일을 선택하는 즉시 이전 구 사진 Base64를 0ms 만에 즉각 비웁니다.
    const hiddenEl = document.getElementById(hiddenInputId);
    if (hiddenEl) hiddenEl.value = '';

    if (urlInputId) {
      const urlEl = document.getElementById(urlInputId);
      if (urlEl) urlEl.value = '';
    }

    // 💥 핵심 Fix 2: 비동기 사진 캔버스 변환 중 로딩 상태 표시 및 폼 제출 버튼 일시 잠금
    const previewEl = document.getElementById(previewId);
    if (previewEl) {
      previewEl.innerHTML = `<div style="padding: 10px; font-size: 13px; color: #38BDF8; background: rgba(56, 189, 248, 0.1); border-radius: 8px; text-align: center;">⏳ 새로운 사진을 변환 중입니다...</div>`;
      previewEl.classList.remove('hidden');
    }

    const formEl = event.target.form;
    const submitBtn = formEl ? formEl.querySelector('button[type="submit"]') : null;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.5';
    }

    const processCanvas = (imgObj, cleanupCallback) => {
      try {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 650;
        const MAX_HEIGHT = 650;
        let width = imgObj.width;
        let height = imgObj.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        // 투명 PNG/HEIC/WebP 이미지도 흰색 배경으로 깨끗하게 채움
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(imgObj, 0, 0, width, height);

        // 크게 보아도 선명하면서 용량은 30~50KB로 철저히 통제되는 650px 규격 (품질 0.75)
        const dataUrl = canvas.toDataURL('image/jpeg', 0.75);

        if (hiddenEl) hiddenEl.value = dataUrl;

        if (previewEl) {
          previewEl.innerHTML = `<img src="${dataUrl}" class="clickable-photo" onclick="app.openImageViewer('${dataUrl}', '업로드 이미지 미리보기')" alt="미리보기" title="클릭하여 크게 보기"><button type="button" class="btn-remove-photo" onclick="app.clearUploadedImage('${event.target.id}', '${previewId}', '${hiddenInputId}')">✕ 사진 삭제</button>`;
          previewEl.classList.remove('hidden');
        }

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.style.opacity = '1';
        }
      } catch (err) {
        console.error('Canvas process error:', err);
        alert('⚠️ 이미지 변환 중 오류가 발생했습니다. 다른 일반 사진(JPG, PNG)으로 선택해 주세요.');
        this.clearUploadedImage(event.target.id, previewId, hiddenInputId);
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.style.opacity = '1';
        }
      } finally {
        if (typeof cleanupCallback === 'function') cleanupCallback();
      }
    };

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => processCanvas(img);
      img.onerror = () => {
        // Fallback 1: FileReader 실패 시 URL.createObjectURL 2중 시도 (아이폰 HEIC 및 특수 이미지 대응)
        try {
          const blobUrl = URL.createObjectURL(file);
          const fallbackImg = new Image();
          fallbackImg.onload = () => processCanvas(fallbackImg, () => URL.revokeObjectURL(blobUrl));
          fallbackImg.onerror = () => {
            URL.revokeObjectURL(blobUrl);
            alert('⚠️ 선택하신 사진 형식을 스마트폰/브라우저에서 읽을 수 없습니다.\n카메라로 직접 다시 찍거나 다른 일반 이미지(JPG, PNG)를 선택해 주세요.');
            this.clearUploadedImage(event.target.id, previewId, hiddenInputId);
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.style.opacity = '1';
            }
          };
          fallbackImg.src = blobUrl;
        } catch (err) {
          alert('⚠️ 사진 읽기 오류입니다. 다른 일반 이미지 파일로 선택해 주세요.');
          this.clearUploadedImage(event.target.id, previewId, hiddenInputId);
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
          }
        }
      };
      img.src = e.target.result;
    };
    reader.onerror = () => {
      alert('⚠️ 파일을 읽을 수 없습니다. 다른 사진으로 시도해 주세요.');
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
      }
    };
    reader.readAsDataURL(file);
  }

  clearFileInputOnly(fileInputId, previewId, hiddenInputId) {
    const fileEl = document.getElementById(fileInputId);
    const hiddenEl = document.getElementById(hiddenInputId);
    const previewEl = document.getElementById(previewId);

    if (fileEl) fileEl.value = '';
    if (hiddenEl) hiddenEl.value = '';
    if (previewEl) {
      previewEl.innerHTML = '';
      previewEl.classList.add('hidden');
    }
  }

  clearUploadedImage(fileInputId, previewId, hiddenInputId) {
    const fileEl = document.getElementById(fileInputId);
    const hiddenEl = document.getElementById(hiddenInputId);
    const previewEl = document.getElementById(previewId);

    if (fileInputId === 'memFilePhoto' || hiddenInputId === 'memPhotoData') {
      const memUrlEl = document.getElementById('memPhoto');
      if (memUrlEl) memUrlEl.value = '';
    }
    if (fileInputId === 'noticeFilePhoto' || hiddenInputId === 'noticePhotoData') {
      const noticeUrlEl = document.getElementById('noticeImageUrl');
      if (noticeUrlEl) noticeUrlEl.value = '';
    }

    if (fileEl) fileEl.value = '';
    if (hiddenEl) hiddenEl.value = '';
    if (previewEl) {
      previewEl.innerHTML = '';
      previewEl.classList.add('hidden');
    }
  }

  deleteMember(id, btn) {
    this.confirmAction('👥 해당 대원을 삭제하시겠습니까?', () => {
      this.animateRemoveCard(btn, () => {
        let members = this.storage.get(STORAGE_KEYS.MEMBERS);
        members = members.filter(m => m.id !== id);
        this.storage.save(STORAGE_KEYS.MEMBERS, members);
        this.renderMembers();
      });
    });
  }

  openMemberPinModal() {
    const input = document.getElementById('inputMemberPin');
    if (input) input.value = '';
    this.openModal('modalMemberPin');
    setTimeout(() => { if (input) input.focus(); }, 200);
  }

  verifyMemberPin(e) {
    e.preventDefault();
    const input = document.getElementById('inputMemberPin');
    const pin = input ? input.value.trim() : '';
    if (pin === this.storage.getMemberPin()) {
      this.storage.setMemberUnlocked(true);
      this.closeModal('modalMemberPin');
      this.switchTab('member');
    } else {
      alert('🔒 비밀번호가 올바르지 않습니다. 다시 입력해주세요.');
      if (input) {
        input.value = '';
        input.focus();
      }
    }
  }

  openChangeMemberPinModal() {
    const input = document.getElementById('inputNewMemberPin');
    if (input) input.value = '';
    this.openModal('modalChangeMemberPin');
  }

  saveNewMemberPin(e) {
    e.preventDefault();
    const input = document.getElementById('inputNewMemberPin');
    const newPin = input ? input.value.trim() : '';
    if (!/^\d{4}$/.test(newPin)) {
      alert('비밀번호는 숫자 4자리로 입력해주세요.');
      return;
    }
    this.storage.setMemberPin(newPin);
    this.closeModal('modalChangeMemberPin');
    alert(`🔑 대원명단 접근 비밀번호가 [ ${newPin} ](으)로 변경되었습니다.`);
  }

  openChangeOfficerPinModal() {
    const input = document.getElementById('inputNewOfficerPin');
    if (input) input.value = '';
    this.openModal('modalChangeOfficerPin');
  }

  saveNewOfficerPin(e) {
    if (e) e.preventDefault();
    const input = document.getElementById('inputNewOfficerPin');
    const newPin = input ? input.value.trim() : '';
    if (!/^\d{4}$/.test(newPin)) {
      alert('비밀번호는 숫자 4자리로 입력해주세요.');
      return;
    }
    this.storage.setOfficerPin(newPin);
    this.closeModal('modalChangeOfficerPin');
    alert(`🔑 관리자 모드 접근 비밀번호가 [ ${newPin} ](으)로 변경되었습니다.`);
  }

  openUserManualModal() {
    this.openModal('modalUserManual');
  }

  checkFirstVisitManual() {
    const hasSeenManual = localStorage.getItem('calvary_user_manual_seen');
    if (!hasSeenManual) {
      localStorage.setItem('calvary_user_manual_seen', 'true');
      setTimeout(() => {
        this.openUserManualModal();
      }, 500);
    }
  }

  // ----------------------------------------------------
  // 🙏 7. 중보기도방 소통 & 공감 (아멘)
  // ----------------------------------------------------
  renderPrayers() {
    const listEl = document.getElementById('prayerList');
    if (!listEl) return;
    const prayers = this.storage.get(STORAGE_KEYS.PRAYERS) || [];

    if (prayers.length === 0) {
      if (!this.storage.initialSyncDone) {
        listEl.innerHTML = this.getInitialLoadingHtml('중보기도');
        return;
      }
      listEl.innerHTML = `<div class="item-card"><p class="card-body-text">등록된 기도제목이 없습니다.</p></div>`;
      return;
    }

    // 최신순 (생성시각 내림차순 > 날짜 내림차순) 정렬
    prayers.sort((a, b) => {
      const timeDiff = this.getItemTimestamp(b) - this.getItemTimestamp(a);
      if (timeDiff !== 0) return timeDiff;
      return (b.date || '').localeCompare(a.date || '');
    });

    const MAX_RECENT = 4;
    const recentPrayers = prayers.slice(0, MAX_RECENT);
    const olderPrayers = prayers.slice(MAX_RECENT);

    const isOfficer = this.storage.isOfficer();

    const renderPrayerCard = (p) => {
      const isMyPrayer = this.storage.isMyItem(p.id);
      const canEditPrayer = isMyPrayer || isOfficer;

      return `
        <div class="item-card" id="prayer_card_${p.id}">
          <div class="card-top">
            <span class="card-badge badge-notice">${this.escapeHtml(p.author || '익명')} 대원의 기도</span>
            <div class="card-top-right">
              <span class="card-date">${p.date || ''}</span>
              ${this.getShareButtonHtml('prayer', p.id)}
              ${canEditPrayer ? `
                <div class="card-admin-actions">
                  <button type="button" class="btn-card-edit" onclick="app.openEditPrayerModal('${p.id}')" title="수정">✏️</button>
                  <button type="button" class="btn-card-delete" onclick="app.deletePrayer('${p.id}', this)" title="삭제">✕</button>
                </div>
              ` : ''}
            </div>
          </div>
          <p class="card-body-text">${this.escapeHtml(p.content || '')}</p>

          <!-- 함께 기도해요 (아멘) 버튼 -->
          <button type="button" class="amen-button" onclick="app.addAmen('${p.id}')">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            <span>함께 기도해요 (아멘 ${p.amenCount || 0})</span>
          </button>

          <!-- 댓글 목록 -->
          <div class="comment-section">
            <div class="comment-list">
              ${(p.comments || []).map(c => {
        const commentId = c.id || '';
        const canEditComment = (commentId && this.storage.isMyItem(commentId)) || isOfficer;
        return `
                  <div class="comment-item" style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                      <span class="comment-author">${this.escapeHtml(c.author || '익명')}:</span>
                      <span>${this.escapeHtml(c.text || '')}</span>
                    </div>
                    ${canEditComment ? `
                      <div style="display: flex; gap: 4px; flex-shrink: 0; margin-left: 8px;">
                        <button type="button" onclick="app.openEditCommentModal('${p.id}', '${c.id}')" style="background: none; border: none; color: var(--primary-navy); font-size: 11px; font-weight: bold; cursor: pointer;">[수정]</button>
                        <button type="button" onclick="app.deleteComment('${p.id}', '${c.id}', this)" style="background: none; border: none; color: #EF4444; font-size: 11px; font-weight: bold; cursor: pointer;">[삭제]</button>
                      </div>
                    ` : ''}
                  </div>
                `;
      }).join('')}
            </div>

            <!-- 댓글 입력 폼 -->
            <div class="comment-input-row">
              <input type="text" id="comment_input_${p.id}" placeholder="응원과 기도의 글을 남겨주세요...">
              <button type="button" onclick="app.addComment('${p.id}')">등록</button>
            </div>
          </div>
        </div>
      `;
    };

    let html = recentPrayers.map(renderPrayerCard).join('');

    if (olderPrayers.length > 0) {
      html += `
        <details class="archive-accordion">
          <summary class="archive-summary">🙏 지나간 중보기도 제목 보관함 (총 ${olderPrayers.length}개)</summary>
          <div class="archive-content">
            ${olderPrayers.map(renderPrayerCard).join('')}
          </div>
        </details>
      `;
    }

    if (listEl.innerHTML !== html) {
      listEl.innerHTML = html;
    }
  }

  openEditPrayerModal(id) {
    if (!this.storage.isMyItem(id) && !this.storage.isOfficer()) {
      alert('🔒 본인이 작성한 기도제목만 수정할 수 있습니다.');
      return;
    }
    const prayers = this.storage.get(STORAGE_KEYS.PRAYERS);
    const prayer = prayers.find(p => p.id === id);
    if (!prayer) return;

    document.getElementById('editPrayerId').value = id;
    const titleEl = document.getElementById('editPrayerTitle');
    if (titleEl) titleEl.textContent = prayer.author ? `✏️ ${prayer.author} 대원님의 기도제목 수정` : '✏️ 기도제목 수정하기';
    document.getElementById('editPrayerContent').value = prayer.content || '';
    this.openModal('modalEditPrayer');
  }

  saveEditedPrayer(e) {
    e.preventDefault();
    const id = document.getElementById('editPrayerId').value;
    const content = document.getElementById('editPrayerContent').value.trim();

    if (!this.storage.isMyItem(id) && !this.storage.isOfficer()) {
      alert('🔒 본인이 작성한 기도제목만 수정할 수 있습니다.');
      return;
    }

    const prayers = this.storage.get(STORAGE_KEYS.PRAYERS);
    const prayer = prayers.find(p => p.id === id);
    if (prayer) {
      prayer.content = content;
      this.storage.save(STORAGE_KEYS.PRAYERS, prayers);
      this.closeModal('modalEditPrayer');
      this.renderPrayers();
      alert('✏️ 기도제목이 성공적으로 수정되었습니다.');
    }
  }

  deletePrayer(id, btn) {
    if (!this.storage.isMyItem(id) && !this.storage.isOfficer()) {
      alert('🔒 본인이 작성한 기도제목만 삭제할 수 있습니다.');
      return;
    }
    this.confirmAction('🙏 이 중보기도제목을 삭제하시겠습니까?', () => {
      this.animateRemoveCard(btn, () => {
        let prayers = this.storage.get(STORAGE_KEYS.PRAYERS);
        prayers = prayers.filter(p => p.id !== id);
        this.storage.save(STORAGE_KEYS.PRAYERS, prayers);
        this.storage.removeMyItemId(id);
        this.renderPrayers();
        this.updateUnreadBadges();
      });
    });
  }

  addAmen(id) {
    if (!this._amenThrottle) this._amenThrottle = {};
    const now = Date.now();
    if (this._amenThrottle[id] && (now - this._amenThrottle[id] < 800)) {
      return; // 0.8초 이내 빠른 연타 및 중복 전송 방지
    }
    this._amenThrottle[id] = now;

    const prayers = this.storage.get(STORAGE_KEYS.PRAYERS);
    const prayer = prayers.find(p => p.id === id);
    if (prayer) {
      prayer.amenCount = (prayer.amenCount || 0) + 1;
      this.storage.save(STORAGE_KEYS.PRAYERS, prayers);
      this.renderPrayers();
    }
  }

  openPrayerModal() {
    document.getElementById('formPrayer').reset();
    this.openModal('modalPrayer');
  }

  savePrayer(e) {
    e.preventDefault();
    const author = document.getElementById('prayAuthor').value.trim();
    const content = document.getElementById('prayContent').value.trim();

    const prayers = this.storage.get(STORAGE_KEYS.PRAYERS);
    const now = Date.now();
    const newPrayerId = 'pr_' + now;
    prayers.unshift({
      id: newPrayerId,
      createdAt: now,
      author,
      content,
      date: new Date().toISOString().split('T')[0],
      amenCount: 1,
      comments: []
    });

    this.storage.save(STORAGE_KEYS.PRAYERS, prayers);
    this.storage.addMyItemId(newPrayerId);
    this.closeModal('modalPrayer');
    this.renderPrayers();
    this.updateUnreadBadges();
    this.triggerNotification('🙏 [중보기도] 새 기도제목', author + ' 대원님의 기도제목');
    alert('🙏 중보기도제목이 은혜롭게 나누어졌습니다.');
  }

  addComment(id) {
    const inputEl = document.getElementById(`comment_input_${id}`);
    if (!inputEl) return;
    const text = inputEl.value.trim();
    if (!text) return;

    const author = prompt('작성자 성함을 입력해주세요:', '익명 대원');
    if (!author) return;

    const commentId = 'c_' + Date.now();
    const newComment = { id: commentId, author, text };

    const prayers = this.storage.get(STORAGE_KEYS.PRAYERS);
    const prayer = prayers.find(p => p.id === id);
    if (prayer) {
      if (!prayer.comments) prayer.comments = [];
      prayer.comments.push(newComment);
      this.storage.save(STORAGE_KEYS.PRAYERS, prayers);
      this.storage.addMyItemId(commentId);
      inputEl.value = '';
      this.renderPrayers();
    }
  }

  openEditCommentModal(prayerId, commentId) {
    if (!this.storage.isMyItem(commentId) && !this.storage.isOfficer()) {
      alert('🔒 본인이 작성한 댓글만 수정할 수 있습니다.');
      return;
    }
    const prayers = this.storage.get(STORAGE_KEYS.PRAYERS);
    const prayer = prayers.find(p => p.id === prayerId);
    if (!prayer || !prayer.comments) return;
    const comment = prayer.comments.find(c => c.id === commentId);
    if (!comment) return;

    document.getElementById('editCommentPrayerId').value = prayerId;
    document.getElementById('editCommentId').value = commentId;
    document.getElementById('editCommentText').value = comment.text || '';
    this.openModal('modalEditComment');
  }

  saveEditedComment(e) {
    e.preventDefault();
    const prayerId = document.getElementById('editCommentPrayerId').value;
    const commentId = document.getElementById('editCommentId').value;
    const text = document.getElementById('editCommentText').value.trim();

    if (!this.storage.isMyItem(commentId) && !this.storage.isOfficer()) {
      alert('🔒 본인이 작성한 댓글만 수정할 수 있습니다.');
      return;
    }

    const prayers = this.storage.get(STORAGE_KEYS.PRAYERS);
    const prayer = prayers.find(p => p.id === prayerId);
    if (prayer && prayer.comments) {
      const comment = prayer.comments.find(c => c.id === commentId);
      if (comment) {
        comment.text = text;
        this.storage.save(STORAGE_KEYS.PRAYERS, prayers);
        this.closeModal('modalEditComment');
        this.renderPrayers();
        alert('✏️ 댓글이 성공적으로 수정되었습니다.');
      }
    }
  }

  deleteComment(prayerId, commentId, btn) {
    if (!this.storage.isMyItem(commentId) && !this.storage.isOfficer()) {
      alert('🔒 본인이 작성한 댓글만 삭제할 수 있습니다.');
      return;
    }
    this.confirmAction('💬 이 응원 댓글을 삭제하시겠습니까?', () => {
      const prayers = this.storage.get(STORAGE_KEYS.PRAYERS);
      const prayer = prayers.find(p => p.id === prayerId);
      if (prayer && prayer.comments) {
        prayer.comments = prayer.comments.filter(c => c.id !== commentId);
        this.storage.save(STORAGE_KEYS.PRAYERS, prayers);
        this.storage.removeMyItemId(commentId);
        this.renderPrayers();
      }
    });
  }

  formatPartTag(part) {
    if (part === '임원') return '지휘/반주';
    return part || '';
  }

  // ----------------------------------------------------
  // 🛠️ 헬퍼 메서드 (유튜브 변환 & 모달 제어)
  // ----------------------------------------------------
  getYoutubeIframe(url, iframeId = '') {
    if (!url) return '';
    let videoId = '';
    const cleanUrl = url.trim();

    // 1. URL 쿼리 파라미터 v= 처리 (예: https://www.youtube.com/watch?v=...)
    if (cleanUrl.includes('v=')) {
      const match = cleanUrl.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
      if (match) videoId = match[1];
    }

    // 2. 경로형 URL 처리 (youtu.be/..., /shorts/..., /live/..., /embed/..., /v/...)
    if (!videoId) {
      const match = cleanUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|shorts\/|live\/|watch\/))([a-zA-Z0-9_-]{11})/i);
      if (match) videoId = match[1];
    }

    // 3. 11자리 비디오 ID 직접 입력 경우
    if (!videoId && /^[a-zA-Z0-9_-]{11}$/.test(cleanUrl)) {
      videoId = cleanUrl;
    }

    // 4. 슬래시(/)나 이퀄(=) 뒤 11자리 고유 토큰 강제 탐색 (모든 변종 URL 커버)
    if (!videoId) {
      const match = cleanUrl.match(/[\/=]([a-zA-Z0-9_-]{11})(?:[\/?&#?]|.|$)/);
      if (match) videoId = match[1];
    }

    if (!videoId) return `<p style="padding:10px; color:#DC2626; font-size: 13.5px; text-align: center;">⚠️ 잘못된 유튜브 주소입니다.</p>`;

    // 5. 시작 시간(t= 또는 start=) 파싱 지원 (예: t=22m35s, t=1h22m35s, t=1355s, t=1355, start=1355)
    let startSeconds = 0;
    const timeMatch = cleanUrl.match(/[?&#](?:t|start)=([0-9hmsHMS]+)/i);
    if (timeMatch && timeMatch[1]) {
      const timeVal = timeMatch[1];
      if (/^\d+$/.test(timeVal)) {
        startSeconds = parseInt(timeVal, 10);
      } else {
        const hours = (timeVal.match(/(\d+)h/i) || [])[1] || 0;
        const minutes = (timeVal.match(/(\d+)m/i) || [])[1] || 0;
        const seconds = (timeVal.match(/(\d+)s/i) || [])[1] || 0;
        startSeconds = (parseInt(hours, 10) * 3600) + (parseInt(minutes, 10) * 60) + parseInt(seconds, 10);
      }
    }

    const startParam = startSeconds > 0 ? `&start=${startSeconds}` : '';
    const idAttr = iframeId ? ` id="${iframeId}"` : '';
    return `<iframe${idAttr} src="https://www.youtube.com/embed/${videoId}?enablejsapi=1&rel=0${startParam}" loading="lazy" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>`;
  }

  convertGoogleDriveUrl(url) {
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
  }

  getNoticeLinkCardHtml(url) {
    if (!url) return '';
    url = url.trim();
    let targetUrl = url;
    if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
      targetUrl = 'https://' + targetUrl;
    }

    let domain = '';
    try {
      const parsed = new URL(targetUrl);
      domain = parsed.hostname.replace('www.', '');
    } catch (e) {
      domain = '관련 웹 사이트';
    }

    const faviconUrl = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=64`;
    const cleanUrlDisplay = url.length > 55 ? url.substring(0, 52) + '...' : url;

    return `
      <a href="${this.escapeHtml(targetUrl)}" target="_blank" rel="noopener noreferrer" class="notice-link-card" onclick="event.stopPropagation();">
        <div class="notice-link-card-left">
          <img src="${faviconUrl}" class="notice-link-favicon" onerror="this.src='./assets/church-symbol.svg'" alt="favicon">
          <div class="notice-link-card-info">
            <div class="notice-link-domain">🔗 ${this.escapeHtml(domain)}</div>
            <div class="notice-link-url">${this.escapeHtml(cleanUrlDisplay)}</div>
          </div>
        </div>
        <span class="notice-link-btn-text">바로가기 ↗</span>
      </a>
    `;
  }

  formatNoticeContentWithLinks(text) {
    if (!text) return '';
    const escaped = this.escapeHtml(text);
    const urlRegex = /(https?:\/\/[^\s<]+)/g;
    return escaped.replace(urlRegex, (url) => {
      return `<a href="${url}" target="_blank" rel="noopener noreferrer" style="color: #2563eb; font-weight: 700; text-decoration: underline;" onclick="event.stopPropagation();">${url}</a>`;
    }).replace(/\r?\n/g, '<br>');
  }

  getNoticeMediaHtml(url, title) {
    if (!url) return '';
    url = url.trim();

    // 1. YouTube URL 체크
    if (url.includes('youtube.com/') || url.includes('youtu.be/')) {
      return `<div class="video-responsive" style="margin-top: 10px;">${this.getYoutubeIframe(url)}</div>`;
    }

    // 2. Google Drive / PDF 체크
    const fileIdMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/) || url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    const fileId = fileIdMatch ? fileIdMatch[1] : '';

    if (url.toLowerCase().includes('.pdf') || (fileId && this.drivePdfCache?.[fileId] === true)) {
      let embedUrl = url;
      let openUrl = url;
      if (fileId) {
        embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
        openUrl = `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;
      } else {
        embedUrl = `https://docs.google.com/gview?url=${encodeURIComponent(url)}&embedded=true`;
      }
      return this.getPdfViewerHtml(embedUrl, openUrl);
    }

    // 3. 사진/이미지 확장자 또는 Data URL, Google Drive 이미지 체크
    const isDataImg = url.startsWith('data:image/');
    const isImgExt = /\.(jpg|jpeg|png|gif|webp|svg)($|\?)/i.test(url);
    const isDriveImg = Boolean(fileId);

    if (!isDataImg && !isImgExt && !isDriveImg) {
      return this.getNoticeLinkCardHtml(url);
    }

    const convertedImg = this.convertGoogleDriveUrl(url);
    const escapedTitle = this.escapeHtml(title);
    const wrapId = fileId ? `media_wrap_${fileId}` : ('media_wrap_' + Math.random().toString(36).substring(2, 9));

    if (fileId) {
      return `
        <div id="${wrapId}">
          <img src="${convertedImg}" loading="lazy" referrerpolicy="no-referrer" class="card-img-preview clickable-photo" onclick="app.openImageViewer('${convertedImg}', '${escapedTitle}')" onerror="app.convertMediaToPdf('${wrapId}', '${fileId}', this)" alt="공지 사진" title="클릭하여 원본 사진 크게 보기">
        </div>
      `;
    }

    return `<img src="${convertedImg}" loading="lazy" referrerpolicy="no-referrer" class="card-img-preview clickable-photo" onclick="app.openImageViewer('${convertedImg}', '${escapedTitle}')" alt="공지 사진" title="클릭하여 원본 사진 크게 보기">`;
  }

  convertMediaToPdf(wrapId, fileId, imgEl) {
    if (imgEl) {
      imgEl.onerror = null; // 🛑 무한 재귀 호출 방지
    }
    const wrap = document.getElementById(wrapId);
    if (!wrap) return;
    const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
    const openUrl = `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;
    wrap.innerHTML = this.getPdfViewerHtml(embedUrl, openUrl);
  }

  getPdfViewerHtml(embedUrl, openUrl) {
    const boxId = 'pdf_box_' + Math.random().toString(36).substring(2, 9);
    const escapedEmbed = this.escapeHtml(embedUrl);
    const escapedOpen = this.escapeHtml(openUrl);

    return `
      <div class="notice-pdf-container" style="margin-top: 12px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 12px;">
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap;">
          <span style="font-size: 13.5px; font-weight: 600; color: #1E293B; display: flex; align-items: center; gap: 6px;">
            📄 PDF 첨부 문서
          </span>
          <div style="display: flex; align-items: center; gap: 6px;">
            <button type="button" onclick="app.togglePdfPreview(this, '${boxId}', '${escapedEmbed}')" style="font-size: 12.5px; background: #2563EB; color: #ffffff; border: none; padding: 6px 12px; border-radius: 6px; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;">
              👁️ 미리보기 열기
            </button>
            <a href="${escapedOpen}" target="_blank" rel="noopener noreferrer" style="font-size: 12.5px; background: #F1F5F9; color: #475569; border: 1px solid #CBD5E1; padding: 5px 10px; border-radius: 6px; text-decoration: none; font-weight: 600;">
              전체화면 열기 ↗
            </a>
          </div>
        </div>
        <div id="${boxId}" class="pdf-iframe-box" style="display: none; margin-top: 10px;"></div>
      </div>
    `;
  }

  togglePdfPreview(btn, boxId, embedUrl) {
    const box = document.getElementById(boxId);
    if (!box) return;

    if (box.style.display === 'none' || !box.innerHTML) {
      box.innerHTML = `<iframe src="${embedUrl}" style="width: 100%; height: 420px; border: none; border-radius: 6px; background: #ffffff;" loading="lazy"></iframe>`;
      box.style.display = 'block';
      btn.innerHTML = '✕ 미리보기 닫기';
      btn.style.background = '#64748B';
      btn.style.color = '#ffffff';
    } else {
      box.style.display = 'none';
      box.innerHTML = '';
      btn.innerHTML = '👁️ 미리보기 열기';
      btn.style.background = '#2563EB';
      btn.style.color = '#ffffff';
    }
  }

  formatMemberPhotoUrl(url, memberId) {
    if (url === 'none') {
      return '';
    }
    if (!url && memberId) {
      return `assets/members/${memberId}.jpg`;
    }
    if (!url) return '';
    url = url.trim();
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) {
      return url;
    }
    if (!url.startsWith('assets/')) {
      url = 'assets/members/' + url;
    }
    try {
      return encodeURI(url);
    } catch (e) {
      return url;
    }
  }

  openModal(modalId) {
    document.getElementById(modalId)?.classList.remove('hidden');
  }

  closeModal(modalId) {
    document.getElementById(modalId)?.classList.add('hidden');
  }

  forceRefreshAndClearCache() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        for (let registration of registrations) {
          registration.unregister();
        }
      });
    }
    if ('caches' in window) {
      caches.keys().then(names => {
        for (let name of names) {
          caches.delete(name);
        }
      });
    }
    localStorage.removeItem(STORAGE_KEYS.DATA_VERSION);
    alert('🔄 스마트폰 찌꺼기 캐시를 삭제하고 클라우드 최신 데이터를 즉시 불러옵니다!');
    window.location.reload(true);
  }

  // ====================================================
  // 🎧 파트 연습실 도우미 (A-B 구간 무한 반복 & 배속 제어)
  // ====================================================
  formatTime(sec) {
    if (isNaN(sec) || sec < 0) sec = 0;
    const s = Math.floor(sec);
    const m = Math.floor(s / 60);
    const remainingSec = s % 60;
    if (m >= 60) {
      const h = Math.floor(m / 60);
      const remM = m % 60;
      return `${String(h).padStart(2, '0')}:${String(remM).padStart(2, '0')}:${String(remainingSec).padStart(2, '0')}`;
    }
    return `${String(m).padStart(2, '0')}:${String(remainingSec).padStart(2, '0')}`;
  }

  togglePracticePanel(itemId) {
    const panel = document.getElementById(`practice_panel_${itemId}`);
    const chevron = document.getElementById(`chevron_practice_${itemId}`);
    const btn = document.getElementById(`btn_practice_toggle_${itemId}`);
    if (!panel) return;

    const isOpening = panel.classList.contains('hidden');
    panel.classList.toggle('hidden', !isOpening);
    if (btn) btn.classList.toggle('is-open', isOpening);
    if (chevron) chevron.textContent = isOpening ? '도구 닫기 ▲' : '도구 열기 ▼';

    if (isOpening) {
      // 다른 카드의 열려 있는 연습 도우미가 있다면 정리하여 현재 카드에만 집중하도록 처리
      document.querySelectorAll('.practice-panel').forEach(p => {
        if (p.id !== `practice_panel_${itemId}` && !p.classList.contains('hidden')) {
          const otherId = p.id.replace('practice_panel_', '');
          this.resetSinglePracticeHelper(otherId);
        }
      });
      this.initPracticeForCard(itemId);
    } else {
      // 사용자가 직접 '도구 닫기'를 누른 경우:
      // 음원 재생 상태는 절대 건드리지 않고(재생 중이면 계속 재생, 멈춰있으면 멈춤 유지), 반복 타이머와 플래그만 안전하게 정리
      if (this.loopIntervals && this.loopIntervals[itemId]) {
        try { clearInterval(this.loopIntervals[itemId]); } catch (e) {}
        delete this.loopIntervals[itemId];
      }

      const cfg = this.practiceConfigs[itemId];
      if (cfg) {
        cfg.isLooping = false;
        cfg.step1Set = false;
        this.updateSeniorMarkerUi(itemId);
      }
    }
  }

  initPracticeForCard(itemId) {
    if (!this.practiceConfigs[itemId]) {
      const praises = this.storage ? this.storage.get(STORAGE_KEYS.PRAISES) : [];
      const item = (praises || []).find(p => p.id === itemId);
      let initialStart = 0;
      if (item && item.youtubeUrl) {
        const timeMatch = item.youtubeUrl.match(/[?&#](?:t|start)=([0-9hmsHMS]+)/i);
        if (timeMatch && timeMatch[1]) {
          const timeVal = timeMatch[1];
          if (/^\d+$/.test(timeVal)) {
            initialStart = parseInt(timeVal, 10);
          } else {
            const hours = (timeVal.match(/(\d+)h/i) || [])[1] || 0;
            const minutes = (timeVal.match(/(\d+)m/i) || [])[1] || 0;
            const seconds = (timeVal.match(/(\d+)s/i) || [])[1] || 0;
            initialStart = (parseInt(hours, 10) * 3600) + (parseInt(minutes, 10) * 60) + parseInt(seconds, 10);
          }
        }
      }
      this.practiceConfigs[itemId] = {
        startSec: initialStart,
        endSec: initialStart + 20,
        isLooping: false,
        step1Set: false,
        speed: 1.0,
        duration: 0
      };
    }

    const cfg = this.practiceConfigs[itemId];
    this.updateSeniorMarkerUi(itemId);

    this.ensureYtPlayer(itemId, (player) => {
      try {
        const dur = Math.floor(player.getDuration() || 0);
        if (dur > 0) {
          cfg.duration = dur;
          const totalEl = document.getElementById(`practice_total_time_${itemId}`);
          if (totalEl) totalEl.textContent = this.formatTime(dur);
          if (cfg.endSec > dur) cfg.endSec = dur;
          this.updateSeniorMarkerUi(itemId);
        }
      } catch (e) {}
    });

    this.startPracticeMonitor(itemId);
  }

  ensureYtPlayer(itemId, onReady) {
    if (this.ytPlayers[itemId] && typeof this.ytPlayers[itemId].getCurrentTime === 'function') {
      try {
        const iframe = this.ytPlayers[itemId].getIframe();
        if (iframe && document.body.contains(iframe)) {
          if (onReady) onReady(this.ytPlayers[itemId]);
          return this.ytPlayers[itemId];
        }
      } catch (e) {}
    }

    const iframeId = `yt_player_${itemId}`;
    const iframeEl = document.getElementById(iframeId);
    if (!iframeEl) return null;

    const setupPlayer = () => {
      try {
        const player = new YT.Player(iframeId, {
          events: {
            'onReady': () => {
              this.ytPlayers[itemId] = player;
              if (onReady) onReady(player);
            },
            'onStateChange': (e) => {
              if (window.YT && e.data === YT.PlayerState.PLAYING) {
                this.startPracticeMonitor(itemId);
              } else if (window.YT && (e.data === YT.PlayerState.PAUSED || e.data === YT.PlayerState.ENDED)) {
                this.stopPracticeMonitor(itemId);
              }
            }
          }
        });
        this.ytPlayers[itemId] = player;
        return player;
      } catch (err) {
        console.warn('YT.Player init failed, using fallback:', err);
      }
    };

    if (window.YT && window.YT.Player) {
      return setupPlayer();
    } else {
      const prevCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (typeof prevCallback === 'function') prevCallback();
        setupPlayer();
      };
    }
    return null;
  }

  stopPracticeMonitor(itemId) {
    if (this.loopIntervals && this.loopIntervals[itemId]) {
      try { clearInterval(this.loopIntervals[itemId]); } catch (e) {}
      delete this.loopIntervals[itemId];
    }
  }

  startPracticeMonitor(itemId) {
    if (this.loopIntervals[itemId]) {
      clearInterval(this.loopIntervals[itemId]);
    }

    this.loopIntervals[itemId] = setInterval(() => {
      const player = this.ytPlayers[itemId];
      if (!player || typeof player.getCurrentTime !== 'function') return;

      try {
        let playerState = -1;
        if (typeof player.getPlayerState === 'function') {
          try { playerState = player.getPlayerState(); } catch (e) {}
        }

        // 재생이 멈췄거나(2) 끝났으면(0) 즉시 모니터링 인터벌을 종료하여 스마트폰 배터리 절약
        if (playerState === 2 || playerState === 0) {
          this.stopPracticeMonitor(itemId);
          return;
        }
        const curr = player.getCurrentTime() || 0;
        const dur = player.getDuration() || 0;

        const currEl = document.getElementById(`practice_curr_time_${itemId}`);
        if (currEl) currEl.textContent = this.formatTime(curr);

        if (dur > 0) {
          const totalEl = document.getElementById(`practice_total_time_${itemId}`);
          if (totalEl && (totalEl.textContent === '--:--' || totalEl.textContent === '00:00')) {
            totalEl.textContent = this.formatTime(dur);
          }
        }

        const cfg = this.practiceConfigs[itemId];
        // 오직 실제로 재생 중(PLAYING = 1)일 때만 구간 반복 루프 검사 및 이동 수행
        if (cfg && cfg.isLooping && playerState === 1) {
          // 방어 코드: 끝점이 시작점보다 작거나 같으면 0초 무한 반복 방지를 위해 반복 즉시 해제
          if (cfg.endSec <= cfg.startSec) {
            cfg.isLooping = false;
            this.updateSeniorMarkerUi(itemId);
            return;
          }
          if (curr >= cfg.endSec || curr < cfg.startSec - 1.5) {
            player.seekTo(cfg.startSec, true);
            player.playVideo();
          }
        }
      } catch (e) {}
    }, 250);
  }

  // 1단계: 여기서부터 찍기
  setSeniorStart(itemId) {
    const player = this.ytPlayers[itemId];
    const step1Btn = document.getElementById(`btn_step1_${itemId}`);

    const shakeAndWarn = (msg) => {
      if (step1Btn) {
        step1Btn.classList.add('shake-highlight');
        setTimeout(() => step1Btn.classList.remove('shake-highlight'), 800);
      }
      this.showToast(msg);
    };

    if (!player || typeof player.getCurrentTime !== 'function') {
      shakeAndWarn('먼저 위의 영상 재생(▶) 버튼을 눌러 찬양을 들으시면서 눌러주세요!');
      return;
    }

    let playerState = -1;
    if (typeof player.getPlayerState === 'function') {
      try {
        playerState = player.getPlayerState();
      } catch (e) {}
    }

    const curr = Math.floor(player.getCurrentTime() || 0);

    // 음원을 아직 재생하지 않았거나 (미시작: -1, 대기: 5) 0초 시점에서 멈춰 있는 경우 안내 및 쉐이크
    if (curr < 1 && (playerState === -1 || playerState === 5 || playerState === 2)) {
      shakeAndWarn('먼저 위의 영상 재생(▶) 버튼을 눌러 찬양을 들으시면서 눌러주세요!');
      return;
    }

    const cfg = this.practiceConfigs[itemId];
    if (!cfg) return;

    cfg.startSec = curr;
    cfg.step1Set = true;
    cfg.isLooping = false;

    this.updateSeniorMarkerUi(itemId);
    this.showToast(`🔵 시작 위치(${this.formatTime(curr)}) 설정 완료! 끝나는 부분에서 초록색 [2번 여기까지]를 눌러주세요.`);
  }

  // 2단계: 여기까지 반복 시작!
  setSeniorEndAndLoop(itemId) {
    const player = this.ytPlayers[itemId];
    if (!player || typeof player.getCurrentTime !== 'function') {
      this.showToast('먼저 위의 찬양 재생 버튼을 눌러주세요.');
      return;
    }
    const curr = Math.floor(player.getCurrentTime() || 0);
    const cfg = this.practiceConfigs[itemId];
    if (!cfg) return;

    // 1단계 시작점을 먼저 누르지 않은 경우 명확한 가이드 제공
    if (!cfg.step1Set) {
      const step1Btn = document.getElementById(`btn_step1_${itemId}`);
      if (step1Btn) {
        step1Btn.classList.add('shake-highlight');
        setTimeout(() => step1Btn.classList.remove('shake-highlight'), 800);
      }
      this.showToast('먼저 [1번: 여기서부터] 시작할 때를 선택해 주세요!');
      return;
    }

    // 끝점이 시작점보다 앞서거나 같으면 안내
    if (curr <= cfg.startSec) {
      this.showToast(`끝점은 시작점(${this.formatTime(cfg.startSec)})보다 뒤여야 합니다. 조금 더 듣고 눌러주세요!`);
      return;
    }

    cfg.endSec = curr;
    cfg.isLooping = true;
    cfg.step1Set = false;

    if (typeof player.seekTo === 'function') {
      player.seekTo(cfg.startSec, true);
      player.playVideo();
    }

    this.updateSeniorMarkerUi(itemId);
    this.showToast(`🔁 ${this.formatTime(cfg.startSec)} ~ ${this.formatTime(cfg.endSec)} 구간 무한 반복 시작!`);
  }

  // 원터치: 방금 들은 15초 바로 반복하기
  loopRecentSeconds(itemId, seconds = 15) {
    const player = this.ytPlayers[itemId];
    if (!player || typeof player.getCurrentTime !== 'function') {
      this.showToast('먼저 위의 찬양 재생 버튼(▶)을 눌러 음원을 재생해 주세요.');
      return;
    }

    let playerState = -1;
    if (typeof player.getPlayerState === 'function') {
      try {
        playerState = player.getPlayerState();
      } catch (e) {}
    }

    const curr = Math.floor(player.getCurrentTime() || 0);

    // 음원을 아직 재생하지 않았거나(미시작/대기 상태) 재생 위치가 0초(또는 2초 미만)인 경우 예외 안내
    if (curr < 2 || playerState === -1 || playerState === 5) {
      this.showToast('먼저 찬양 음원을 재생해 주세요. 음원을 들으시면서 누르면 방금 들은 15초 구간이 반복됩니다.');
      return;
    }

    const cfg = this.practiceConfigs[itemId];
    if (!cfg) return;

    cfg.endSec = curr;
    cfg.startSec = Math.max(0, curr - seconds);

    // 구간 길이 방어 (끝점이 시작점 이하인 경우)
    if (cfg.endSec <= cfg.startSec) {
      this.showToast('반복할 구간이 너무 짧습니다. 조금 더 재생한 후 눌러주세요.');
      return;
    }

    cfg.isLooping = true;
    cfg.step1Set = false;

    if (typeof player.seekTo === 'function') {
      player.seekTo(cfg.startSec, true);
      player.playVideo();
    }

    this.updateSeniorMarkerUi(itemId);
    this.showToast(`⚡ 방금 15초(${this.formatTime(cfg.startSec)} ~ ${this.formatTime(cfg.endSec)}) 무한 반복 시작!`);
  }

  // 반복 끄기 (전체 계속 듣기)
  stopLoop(itemId) {
    const cfg = this.practiceConfigs[itemId];
    if (cfg) {
      cfg.isLooping = false;
      cfg.step1Set = false;
    }
    this.updateSeniorMarkerUi(itemId);
    this.showToast('구간 반복을 끄고 전체 찬양을 계속 듣습니다.');
  }

  // UI 상태 갱신
  updateSeniorMarkerUi(itemId) {
    const cfg = this.practiceConfigs[itemId];
    if (!cfg) return;

    const bannerEl = document.getElementById(`senior_looping_banner_${itemId}`);
    const controlsEl = document.getElementById(`senior_loop_controls_${itemId}`);
    const rangeTxtEl = document.getElementById(`senior_loop_range_txt_${itemId}`);
    const step1Btn = document.getElementById(`btn_step1_${itemId}`);
    const step2Btn = document.getElementById(`btn_step2_${itemId}`);
    const step1Time = document.getElementById(`step1_time_${itemId}`);
    const step2Time = document.getElementById(`step2_time_${itemId}`);

    if (cfg.isLooping) {
      if (bannerEl) bannerEl.classList.remove('hidden');
      if (controlsEl) controlsEl.classList.add('hidden');
      if (rangeTxtEl) rangeTxtEl.textContent = `${this.formatTime(cfg.startSec)} ~ ${this.formatTime(cfg.endSec)}`;
    } else {
      if (bannerEl) bannerEl.classList.add('hidden');
      if (controlsEl) controlsEl.classList.remove('hidden');

      if (cfg.step1Set) {
        if (step1Btn) step1Btn.classList.add('is-set');
        if (step2Btn) step2Btn.classList.add('is-ready');
        if (step1Time) step1Time.textContent = `시작: ${this.formatTime(cfg.startSec)}`;
        if (step2Time) step2Time.textContent = '지금 누르면 반복!';
      } else {
        if (step1Btn) step1Btn.classList.remove('is-set');
        if (step2Btn) step2Btn.classList.remove('is-ready');
        if (step1Time) step1Time.textContent = '시작할 때 누르기';
        if (step2Time) step2Time.textContent = '누르면 무한 반복';
      }
    }
  }

  // 호환성 유지용 래퍼
  updateMarkerUi(itemId) {
    this.updateSeniorMarkerUi(itemId);
  }

  toggleLoop(itemId) {
    const cfg = this.practiceConfigs[itemId];
    if (cfg && cfg.isLooping) {
      this.stopLoop(itemId);
    } else {
      this.setSeniorEndAndLoop(itemId);
    }
  }

  // 10초 / 5초 점프 이동
  jumpPlayerTime(itemId, seconds) {
    const player = this.ytPlayers[itemId];
    if (!player || typeof player.getCurrentTime !== 'function') {
      this.showToast('먼저 위의 찬양 재생 버튼을 눌러주세요.');
      return;
    }
    const curr = player.getCurrentTime() || 0;
    const next = Math.max(0, curr + seconds);
    player.seekTo(next, true);
    const absSec = Math.abs(seconds);
    if (seconds < 0) {
      this.showToast(`⏪ ${absSec}초 뒤로 (-${absSec}초) 이동했습니다.`);
    } else {
      this.showToast(`⏩ ${absSec}초 앞으로 (+${absSec}초) 이동했습니다.`);
    }
  }

  // 3단계 배속 제어
  setPlayerSpeed(itemId, speed) {
    const cfg = this.practiceConfigs[itemId];
    if (cfg) cfg.speed = speed;

    const player = this.ytPlayers[itemId];
    if (player && typeof player.setPlaybackRate === 'function') {
      player.setPlaybackRate(speed);
    }

    const speedBar = document.getElementById(`speed_bar_${itemId}`);
    if (speedBar) {
      speedBar.querySelectorAll('.btn-senior-speed').forEach(btn => {
        const btnSpeed = parseFloat(btn.dataset.speed);
        btn.classList.toggle('active', Math.abs(btnSpeed - speed) < 0.05);
      });
    }

    if (speed <= 0.85) {
      this.showToast('재생 속도: 0.8x (느리게)');
    } else if (speed >= 1.15) {
      this.showToast('재생 속도: 1.2x (빠르게)');
    } else {
      this.showToast('재생 속도: 1.0x (기본)');
    }
  }

  resetPracticeConfig(itemId) {
    const praises = this.storage ? this.storage.get(STORAGE_KEYS.PRAISES) : [];
    const item = (praises || []).find(p => p.id === itemId);
    let initialStart = 0;
    if (item && item.youtubeUrl) {
      const timeMatch = item.youtubeUrl.match(/[?&#](?:t|start)=([0-9hmsHMS]+)/i);
      if (timeMatch && timeMatch[1]) {
        const timeVal = timeMatch[1];
        if (/^\d+$/.test(timeVal)) {
          initialStart = parseInt(timeVal, 10);
        } else {
          const hours = (timeVal.match(/(\d+)h/i) || [])[1] || 0;
          const minutes = (timeVal.match(/(\d+)m/i) || [])[1] || 0;
          const seconds = (timeVal.match(/(\d+)s/i) || [])[1] || 0;
          initialStart = (parseInt(hours, 10) * 3600) + (parseInt(minutes, 10) * 60) + parseInt(seconds, 10);
        }
      }
    }

    const cfg = this.practiceConfigs[itemId];
    if (cfg) {
      cfg.isLooping = false;
      cfg.step1Set = false;
      cfg.speed = 1.0;
      cfg.startSec = initialStart;
      cfg.endSec = initialStart + 20;
    }

    const player = this.ytPlayers[itemId];
    if (player) {
      try {
        if (typeof player.setPlaybackRate === 'function') player.setPlaybackRate(1.0);
        if (typeof player.seekTo === 'function') player.seekTo(initialStart, true);
        if (typeof player.pauseVideo === 'function') player.pauseVideo();
      } catch (e) {}
    }

    const currEl = document.getElementById(`practice_curr_time_${itemId}`);
    if (currEl) currEl.textContent = this.formatTime(initialStart);

    const speedBar = document.getElementById(`speed_bar_${itemId}`);
    if (speedBar) {
      speedBar.querySelectorAll('.btn-senior-speed').forEach(btn => {
        const btnSpeed = parseFloat(btn.dataset.speed);
        btn.classList.toggle('active', Math.abs(btnSpeed - 1.0) < 0.05);
      });
    }

    this.updateSeniorMarkerUi(itemId);
    this.showToast('연습 설정이 처음으로 되돌아갔습니다.');
  }

  // ----------------------------------------------------
  // 🔄 연습 도우미 및 재생 음원 상태 완전 초기화
  // ----------------------------------------------------
  resetSinglePracticeHelper(itemId) {
    if (!itemId) return;

    // 1. 해당 곡의 구간 반복 인터벌 타이머 제거
    if (this.loopIntervals && this.loopIntervals[itemId]) {
      try { clearInterval(this.loopIntervals[itemId]); } catch (e) {}
      delete this.loopIntervals[itemId];
    }

    // 2. 해당 곡의 설정 메모리 완전 초기화 (재오픈 시 0초부터 새로 설정되도록)
    if (this.practiceConfigs && this.practiceConfigs[itemId]) {
      delete this.practiceConfigs[itemId];
    }

    // 3. 해당 곡의 유튜브 플레이어 일시정지 (절대 seekTo를 호출하지 않음! 정지 상태에서 자동 재생 유발 방지)
    if (this.ytPlayers && this.ytPlayers[itemId]) {
      const player = this.ytPlayers[itemId];
      try {
        if (typeof player.pauseVideo === 'function') player.pauseVideo();
        if (typeof player.setPlaybackRate === 'function') player.setPlaybackRate(1.0);
      } catch (e) {}
    }

    // 4. 해당 곡의 DOM UI 완전 초기화
    const panel = document.getElementById(`practice_panel_${itemId}`);
    if (panel) panel.classList.add('hidden');

    const btn = document.getElementById(`btn_practice_toggle_${itemId}`);
    if (btn) btn.classList.remove('is-open');

    const chevron = document.getElementById(`chevron_practice_${itemId}`);
    if (chevron) chevron.textContent = '도구 열기 ▼';

    const currEl = document.getElementById(`practice_curr_time_${itemId}`);
    if (currEl) currEl.textContent = '00:00';

    const totalEl = document.getElementById(`practice_total_time_${itemId}`);
    if (totalEl) totalEl.textContent = '--:--';

    const bannerEl = document.getElementById(`senior_looping_banner_${itemId}`);
    if (bannerEl) bannerEl.classList.add('hidden');

    const controlsEl = document.getElementById(`senior_loop_controls_${itemId}`);
    if (controlsEl) controlsEl.classList.remove('hidden');

    const rangeTxtEl = document.getElementById(`senior_loop_range_txt_${itemId}`);
    if (rangeTxtEl) rangeTxtEl.textContent = '00:00 ~ 00:30';

    const step1Btn = document.getElementById(`btn_step1_${itemId}`);
    if (step1Btn) step1Btn.classList.remove('is-set', 'shake-highlight');

    const step1Time = document.getElementById(`step1_time_${itemId}`);
    if (step1Time) step1Time.textContent = '시작할 때 누르기';

    const step2Btn = document.getElementById(`btn_step2_${itemId}`);
    if (step2Btn) step2Btn.classList.remove('is-ready');

    const step2Time = document.getElementById(`step2_time_${itemId}`);
    if (step2Time) step2Time.textContent = '누르면 무한 반복';

    const speedBar = document.getElementById(`speed_bar_${itemId}`);
    if (speedBar) {
      speedBar.querySelectorAll('.btn-senior-speed').forEach(sBtn => {
        const btnSpeed = parseFloat(sBtn.dataset.speed);
        sBtn.classList.toggle('active', Math.abs(btnSpeed - 1.0) < 0.05);
      });
    }
  }

  resetAllPracticeHelpers() {
    // 1. 모든 실행 중인 인터벌 타이머 즉시 정지 및 제거
    if (this.loopIntervals) {
      Object.keys(this.loopIntervals).forEach(id => {
        try { clearInterval(this.loopIntervals[id]); } catch (e) {}
      });
      this.loopIntervals = {};
    }

    // 2. 모든 설정 메모리 초기화
    this.practiceConfigs = {};

    // 3. 모든 유튜브 플레이어 정지 및 1배속으로 초기화 (절대 seekTo를 호출하지 않음!)
    if (this.ytPlayers) {
      Object.keys(this.ytPlayers).forEach(id => {
        const p = this.ytPlayers[id];
        if (p) {
          try {
            if (typeof p.pauseVideo === 'function') p.pauseVideo();
            if (typeof p.setPlaybackRate === 'function') p.setPlaybackRate(1.0);
          } catch (e) {}
        }
      });
      this.ytPlayers = {};
    }

    // 4. 모든 유튜브 iframe에 표준 pauseVideo 메시지 일괄 전송 (인스턴스 미바인딩 상태까지 100% 커버)
    try {
      document.querySelectorAll('iframe[src*="youtube.com"]').forEach(iframe => {
        try {
          if (iframe.contentWindow) {
            iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
          }
        } catch (e) {}
      });
    } catch (e) {}

    // 5. DOM 상의 모든 연습 도우미 패널 및 UI 100% 일괄 초기화
    document.querySelectorAll('.practice-panel').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.btn-toggle-practice').forEach(el => el.classList.remove('is-open'));
    document.querySelectorAll('.practice-toggle-chevron').forEach(el => el.textContent = '도구 열기 ▼');
    document.querySelectorAll('[id^="practice_curr_time_"]').forEach(el => el.textContent = '00:00');
    document.querySelectorAll('[id^="practice_total_time_"]').forEach(el => el.textContent = '--:--');
    document.querySelectorAll('.practice-active-banner').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.practice-loop-controls').forEach(el => el.classList.remove('hidden'));
    document.querySelectorAll('.btn-loop-step').forEach(el => el.classList.remove('is-set', 'is-ready', 'shake-highlight'));
    document.querySelectorAll('[id^="step1_time_"]').forEach(el => el.textContent = '시작할 때 누르기');
    document.querySelectorAll('[id^="step2_time_"]').forEach(el => el.textContent = '누르면 무한 반복');
    document.querySelectorAll('.btn-senior-speed').forEach(el => {
      const speed = parseFloat(el.dataset.speed);
      el.classList.toggle('active', Math.abs(speed - 1.0) < 0.05);
    });
  }

  // ====================================================
  // 🎹 5. 첫 음 잡기용 피치 파이프 (조율 건반 / Pitch Pipe)
  // ====================================================
  pitchState = {
    audioCtx: null,
    octave: 4, // 2 ~ 5 (가온 4 기본)
    timbre: 'piano', // 'piano' | 'organ'
    activeVoice: null,
    activeKeyIndex: null,
    pressStartTime: 0,
    releaseTimer: null,
    safetyTimer: null,
    volume: 0.85
  };

  pitchNotes = [
    { index: 0, ko: '가온 도', shortKo: '도', eng: 'C', isBlack: false, semitone: 0 },
    { index: 1, ko: '도# / 레♭', shortKo: '도#', eng: 'C#', isBlack: true, semitone: 1 },
    { index: 2, ko: '레', shortKo: '레', eng: 'D', isBlack: false, semitone: 2 },
    { index: 3, ko: '레# / 미♭', shortKo: '레#', eng: 'D#', isBlack: true, semitone: 3 },
    { index: 4, ko: '미', shortKo: '미', eng: 'E', isBlack: false, semitone: 4 },
    { index: 5, ko: '파', shortKo: '파', eng: 'F', isBlack: false, semitone: 5 },
    { index: 6, ko: '파# / 솔♭', shortKo: '파#', eng: 'F#', isBlack: true, semitone: 6 },
    { index: 7, ko: '솔', shortKo: '솔', eng: 'G', isBlack: false, semitone: 7 },
    { index: 8, ko: '솔# / 라♭', shortKo: '솔#', eng: 'G#', isBlack: true, semitone: 8 },
    { index: 9, ko: '라 (표준 조율음 ★)', shortKo: '라', eng: 'A', isBlack: false, semitone: 9 },
    { index: 10, ko: '라# / 시♭', shortKo: '라#', eng: 'A#', isBlack: true, semitone: 10 },
    { index: 11, ko: '시', shortKo: '시', eng: 'B', isBlack: false, semitone: 11 },
    { index: 12, ko: '높은 도', shortKo: '높은도', eng: 'C', isBlack: false, semitone: 12 }
  ];

  unlockMobileAudio() {
    // 이미 언락되어 컨텍스트가 동작 중이면 즉시 반환 (반복적인 무음 버퍼 재생으로 인한 팝/클릭 노이즈 100% 방지)
    if (this.isAudioHardwareUnlocked && this.pitchAudioCtx && this.pitchAudioCtx.state === 'running') {
      return this.pitchAudioCtx;
    }

    // 1. iOS 15+ AudioSession API를 미디어 재생(playback) 모드로 설정하여 무음 스위치 우회
    if (typeof navigator !== 'undefined' && navigator.audioSession) {
      try {
        navigator.audioSession.type = 'playback';
      } catch (e) {}
    }

    // 2. Web Audio Context 인스턴스 초기화
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!this.pitchAudioCtx && AudioCtx) {
      this.pitchAudioCtx = new AudioCtx();
    }

    if (this.pitchAudioCtx) {
      if (this.pitchAudioCtx.state === 'suspended') {
        this.pitchAudioCtx.resume().catch(() => {});
      }

      // 3. 최초 1회만 하드웨어 오디오 연결 활성화 (중복 실행 방지)
      if (!this.isAudioHardwareUnlocked) {
        this.isAudioHardwareUnlocked = true;

        try {
          const buf = this.pitchAudioCtx.createBuffer(1, 1, 22050);
          const src = this.pitchAudioCtx.createBufferSource();
          src.buffer = buf;
          src.connect(this.pitchAudioCtx.destination);
          src.start(0);
        } catch (e) {}

        try {
          if (!this.silentAudioEl) {
            this.silentAudioEl = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA');
            this.silentAudioEl.setAttribute('playsinline', '');
            this.silentAudioEl.setAttribute('webkit-playsinline', '');
            this.silentAudioEl.volume = 0.01;
          }
          const p = this.silentAudioEl.play();
          if (p && typeof p.then === 'function') {
            p.then(() => {
              this.silentAudioEl.pause();
            }).catch(() => {});
          }
        } catch (e) {}
      }
    }

    return this.pitchAudioCtx;
  }

  initPitchAudioContext() {
    this.unlockMobileAudio();
    return this.pitchAudioCtx;
  }

  openPitchPipeModal() {
    this.resetAllPracticeHelpers();
    this.unlockMobileAudio();
    this.openModal('modalPitchPipe');
    this.updatePitchOctaveLabels();
    this.updatePitchDisplay(0, 4);
  }

  closePitchPipeModal() {
    this.stopCurrentPitchVoice(0.1);
    this.closeModal('modalPitchPipe');
  }

  setPitchTimbre(timbre) {
    if (timbre !== 'piano' && timbre !== 'organ') return;
    this.pitchState.timbre = timbre;
    const btnPiano = document.getElementById('btnTimbrePiano');
    const btnOrgan = document.getElementById('btnTimbreOrgan');
    if (btnPiano) btnPiano.classList.toggle('active', timbre === 'piano');
    if (btnOrgan) btnOrgan.classList.toggle('active', timbre === 'organ');

    const timbreIndicator = document.getElementById('pitchTimbreIndicator');
    if (timbreIndicator) {
      timbreIndicator.textContent = timbre === 'piano' ? '🎹 맑은 피아노' : '⛪ 파이프 오르간';
    }
  }

  shiftPitchOctave(delta) {
    const nextOctave = Math.max(2, Math.min(5, (this.pitchState.octave || 4) + delta));
    if (nextOctave === this.pitchState.octave) return;
    this.pitchState.octave = nextOctave;
    this.updatePitchOctaveLabels();

    const activeIdx = this.pitchState.activeKeyIndex !== null ? this.pitchState.activeKeyIndex : 0;
    this.updatePitchDisplay(activeIdx, nextOctave);
  }

  updatePitchOctaveLabels() {
    const oct = this.pitchState.octave || 4;
    for (let i = 0; i <= 12; i++) {
      const el = document.getElementById(`lbl_eng_${i}`);
      if (!el) continue;
      const note = this.pitchNotes[i];
      const keyOct = (i === 12) ? oct + 1 : oct;
      el.textContent = `${note.eng}${keyOct}`;
    }

    const octBadge = document.getElementById('pitchCurrentOctaveLabel');
    if (octBadge) {
      let desc = `${oct} 옥타브`;
      if (oct === 4) desc = '4 옥타브 (가온 보통)';
      else if (oct === 3) desc = '3 옥타브 (남성/테너)';
      else if (oct === 2) desc = '2 옥타브 (베이스 저음)';
      else if (oct === 5) desc = '5 옥타브 (여성 고음)';
      octBadge.textContent = desc;
    }

    const btnDown = document.getElementById('btnOctaveDown');
    const btnUp = document.getElementById('btnOctaveUp');
    if (btnDown) btnDown.disabled = (oct <= 2);
    if (btnUp) btnUp.disabled = (oct >= 5);
  }

  calculateNoteFrequency(semitoneIndex, octave) {
    const midiNumber = (octave + 1) * 12 + semitoneIndex;
    const freq = 440 * Math.pow(2, (midiNumber - 69) / 12);
    return Math.round(freq * 100) / 100;
  }

  updatePitchDisplay(noteIndex, octave, customKo = null) {
    const note = this.pitchNotes[noteIndex] || this.pitchNotes[0];
    const keyOct = (noteIndex === 12) ? octave + 1 : octave;
    const freq = this.calculateNoteFrequency(noteIndex, octave);

    const elKo = document.getElementById('pitchNoteKorean');
    const elEng = document.getElementById('pitchNoteEnglish');
    const elFreq = document.getElementById('pitchFreqValue');

    let koText = customKo || note.ko;
    if (!customKo) {
      if (noteIndex === 0 && octave === 4) koText = '가온 도';
      else if (noteIndex === 0 && octave === 3) koText = '낮은 도';
      else if (noteIndex === 0 && octave === 2) koText = '아주 낮은 도';
      else if (noteIndex === 0 && octave === 5) koText = '높은 도';
      else if (noteIndex === 9 && octave === 4) koText = '라 (표준음)';
      else if (noteIndex === 12) koText = '높은 도';
    }

    if (elKo) elKo.textContent = koText;
    if (elEng) elEng.innerHTML = `${note.eng}${keyOct} <span class="pitch-octave-tag" id="pitchOctaveTag">${keyOct} 옥타브</span>`;
    if (elFreq) elFreq.innerHTML = `${freq.toFixed(2)} <span class="freq-unit">Hz</span>`;
  }

  setSoundWaveActive(isActive) {
    const wave = document.getElementById('pitchSoundWave');
    const screen = document.getElementById('pitchDisplayScreen');
    if (wave) wave.classList.toggle('is-sounding', isActive);
    if (screen) screen.classList.toggle('is-active', isActive);
  }

  playPartPreset(partKey) {
    this.unlockMobileAudio();

    document.querySelectorAll('.pitch-chip').forEach(c => c.classList.remove('is-active-preset'));
    const chip = document.getElementById(`chip_${partKey}`);
    if (chip) chip.classList.add('is-active-preset');

    let targetOctave = 4;
    let targetIndex = 0;
    let customLabel = '';

    switch (partKey) {
      case 'soprano':
        targetOctave = 4;
        targetIndex = 12; // C5 (523.25 Hz)
        customLabel = '소프라노 (높은 도)';
        break;
      case 'alto':
        targetOctave = 4;
        targetIndex = 9; // A4 (440.00 Hz)
        customLabel = '알토 (라)';
        break;
      case 'tenor':
        targetOctave = 4;
        targetIndex = 0; // C4 (261.63 Hz)
        customLabel = '테너 (가온 도)';
        break;
      case 'bass':
        targetOctave = 3;
        targetIndex = 0; // C3 (130.81 Hz)
        customLabel = '베이스 (낮은 도)';
        break;
      case 'ref440':
      default:
        targetOctave = 4;
        targetIndex = 9; // A4 (440.00 Hz)
        customLabel = '표준 기준음 (라)';
        break;
    }

    this.pitchState.octave = targetOctave;
    this.updatePitchOctaveLabels();
    this.updatePitchDisplay(targetIndex, targetOctave, customLabel);

    this.playPitchNoteTone(targetIndex, targetOctave, 2.4);

    setTimeout(() => {
      if (chip) chip.classList.remove('is-active-preset');
    }, 2400);
  }

  handlePianoKeyStart(index, event) {
    // 모바일 터치와 데스크톱 마우스 중복 호출 방지 (touch-action: none 적용)
    if (event) {
      if (event.type === 'touchstart') {
        this.lastPianoTouchTime = Date.now();
      } else if (event.type === 'mousedown') {
        if (this.lastPianoTouchTime && (Date.now() - this.lastPianoTouchTime < 500)) {
          return;
        }
      }
    }
    this.unlockMobileAudio();
    const oct = this.pitchState.octave || 4;
    this.updatePitchDisplay(index, oct);
    this.pitchState.pressStartTime = Date.now();
    this.startPitchVoice(index, oct);

    const onEndHandler = () => {
      window.removeEventListener('mouseup', onEndHandler);
      window.removeEventListener('touchend', onEndHandler);
      window.removeEventListener('touchcancel', onEndHandler);
      this.handlePianoKeyEnd(index);
    };
    window.addEventListener('mouseup', onEndHandler);
    window.addEventListener('touchend', onEndHandler);
    window.addEventListener('touchcancel', onEndHandler);
  }

  handlePianoKeyEnd(index) {
    const elapsed = Date.now() - (this.pitchState.pressStartTime || 0);
    const minHoldMs = 700; // 어쿠스틱 피아노의 자연스러운 최소 울림 시간 (0.7초)
    if (elapsed < minHoldMs) {
      const remaining = minHoldMs - elapsed;
      if (this.pitchState.releaseTimer) clearTimeout(this.pitchState.releaseTimer);
      this.pitchState.releaseTimer = setTimeout(() => {
        this.stopCurrentPitchVoice();
      }, remaining);
    } else {
      this.stopCurrentPitchVoice();
    }
  }

  playPitchNoteTone(index, octave, duration = 2.4) {
    this.stopCurrentPitchVoice();
    const ctx = this.unlockMobileAudio();
    if (!ctx) return;
    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }

    const freq = this.calculateNoteFrequency(index, octave);
    const voice = this.synthesizeTone(freq, this.pitchState.timbre, duration, ctx);
    if (!voice) return;

    this.pitchState.activeVoice = voice;
    this.pitchState.activeKeyIndex = index;
    this.highlightPianoKey(index, true);
    this.setSoundWaveActive(true);

    if (this.pitchState.safetyTimer) clearTimeout(this.pitchState.safetyTimer);
    this.pitchState.safetyTimer = setTimeout(() => {
      this.highlightPianoKey(index, false);
      this.setSoundWaveActive(false);
      this.pitchState.activeVoice = null;
      this.pitchState.activeKeyIndex = null;
    }, duration * 1000 + 100);
  }

  startPitchVoice(index, octave) {
    this.stopCurrentPitchVoice();
    const ctx = this.unlockMobileAudio();
    if (!ctx) return;
    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }

    const freq = this.calculateNoteFrequency(index, octave);
    const voice = this.synthesizeTone(freq, this.pitchState.timbre, null, ctx);
    if (!voice) return;

    this.pitchState.activeVoice = voice;
    this.pitchState.activeKeyIndex = index;
    this.highlightPianoKey(index, true);
    this.setSoundWaveActive(true);

    if (this.pitchState.safetyTimer) clearTimeout(this.pitchState.safetyTimer);
    this.pitchState.safetyTimer = setTimeout(() => {
      this.stopCurrentPitchVoice();
    }, 8000);
  }

  stopCurrentPitchVoice() {
    if (this.pitchState.safetyTimer) {
      clearTimeout(this.pitchState.safetyTimer);
      this.pitchState.safetyTimer = null;
    }
    if (this.pitchState.releaseTimer) {
      clearTimeout(this.pitchState.releaseTimer);
      this.pitchState.releaseTimer = null;
    }
    if (this.pitchState.activeVoice) {
      try {
        if (typeof this.pitchState.activeVoice.stop === 'function') {
          this.pitchState.activeVoice.stop();
        }
      } catch (e) {}
      this.pitchState.activeVoice = null;
    }
    if (this.pitchState.activeKeyIndex !== null) {
      this.highlightPianoKey(this.pitchState.activeKeyIndex, false);
      this.pitchState.activeKeyIndex = null;
    }
    this.setSoundWaveActive(false);
  }

  highlightPianoKey(index, isHighlight) {
    const key = document.getElementById(`pkey_${index}`);
    if (key) {
      key.classList.toggle('is-pressed', isHighlight);
    }
  }

  synthesizeTone(freq, timbre = 'piano', duration = null, ctxParam = null) {
    const ctx = ctxParam || this.pitchAudioCtx;
    if (!ctx) return null;

    const baseTime = Math.max(ctx.currentTime, 0.001);
    const now = baseTime + 0.015; // 15ms 미세 룩어헤드로 스케줄링 안정성 확보

    const masterGain = ctx.createGain();
    masterGain.connect(ctx.destination);
    masterGain.gain.setValueAtTime(0.85, now);

    if (timbre === 'piano') {
      // 🎹 맑고 청아한 어쿠스틱 피아노/피치파이프 (Pure Sine Harmonics)
      const harmonics = [
        { mult: 1, gain: 0.58 }, // 기음
        { mult: 2, gain: 0.18 }, // 2배음
        { mult: 3, gain: 0.05 }, // 3배음
        { mult: 4, gain: 0.02 }  // 4배음
      ];

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(2800, now);
      filter.frequency.setTargetAtTime(700, now + 0.02, 0.8);
      filter.connect(masterGain);

      const noteGain = ctx.createGain();
      noteGain.connect(filter);

      // Attack: 15ms 부드럽게 1.0으로 상승 (클릭 노이즈 제로)
      noteGain.gain.setValueAtTime(0, now);
      noteGain.gain.linearRampToValueAtTime(1.0, now + 0.015);

      // Natural Decay: 그랜드 피아노 현의 자연스러운 지수 감쇠 (setTargetAtTime으로 0을 향해 끝없이 부드럽게 감쇠)
      noteGain.gain.setTargetAtTime(0, now + 0.015, 0.75);

      const maxSec = (duration || 2.5) + 0.5;
      const oscs = harmonics.map(h => {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq * h.mult, now);

        const hGain = ctx.createGain();
        hGain.gain.setValueAtTime(h.gain, now);
        osc.connect(hGain);
        hGain.connect(noteGain);

        osc.start(now);
        // 완전히 소리가 0에 도달한 후 안전 정지 (끝에서 잘려 생기는 '띡' 소리 원천 차단)
        osc.stop(now + maxSec + 0.5);
        return osc;
      });

      return {
        stop: () => {
          try {
            const stopTime = ctx.currentTime;
            // 🛑 중요: gain.value를 읽어 재설정하면 불연속 점프로 인한 '띡' 소리가 발생하므로 절대 하지 않음!
            // setTargetAtTime은 현재 실시간 볼륨 위치에서부터 0으로 40ms 동안 완벽하게 부드럽게 페이드아웃시킴
            noteGain.gain.cancelScheduledValues(stopTime);
            noteGain.gain.setTargetAtTime(0, stopTime, 0.04);
            setTimeout(() => {
              oscs.forEach(o => { try { o.stop(); } catch(e){} });
            }, 250);
          } catch (e) {}
        }
      };
    } else {
      // ⛪ 파이프 오르간 (순수 정현파 기반 8' 4' 2' 플루트 스톱 사운드)
      const organRanks = [
        { type: 'sine', mult: 1, gain: 0.52 },
        { type: 'sine', mult: 2, gain: 0.20 },
        { type: 'sine', mult: 3, gain: 0.08 },
        { type: 'sine', mult: 4, gain: 0.03 }
      ];

      const noteGain = ctx.createGain();
      noteGain.connect(masterGain);

      noteGain.gain.setValueAtTime(0, now);
      noteGain.gain.linearRampToValueAtTime(0.85, now + 0.035);

      if (duration) {
        const fadeStart = Math.max(0.1, duration - 0.25);
        noteGain.gain.setTargetAtTime(0, now + fadeStart, 0.06);
      }

      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(4.5, now);
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(freq * 0.005, now);
      lfo.connect(lfoGain);

      const maxSec = (duration || 2.8) + 0.5;
      const oscs = organRanks.map(rank => {
        const osc = ctx.createOscillator();
        osc.type = rank.type;
        osc.frequency.setValueAtTime(freq * rank.mult, now);
        lfoGain.connect(osc.frequency);

        const rGain = ctx.createGain();
        rGain.gain.setValueAtTime(rank.gain, now);
        osc.connect(rGain);
        rGain.connect(noteGain);

        osc.start(now);
        osc.stop(now + maxSec + 0.5);
        return osc;
      });

      lfo.start(now);
      lfo.stop(now + maxSec + 0.5);

      return {
        stop: () => {
          try {
            const stopTime = ctx.currentTime;
            noteGain.gain.cancelScheduledValues(stopTime);
            noteGain.gain.setTargetAtTime(0, stopTime, 0.04);
            setTimeout(() => {
              oscs.forEach(o => { try { o.stop(); } catch(e){} });
              try { lfo.stop(); } catch(e){}
            }, 250);
          } catch (e) {}
        }
      };
    }
  }
}

// 글로벌 앱 인스턴스 가동
window.app = new ChoirApp();
