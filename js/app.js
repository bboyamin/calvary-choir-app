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

    // 파트별 음원 5개 연속 등록 시 제목 및 주일 일자 자동 입력용 상태
    this.lastBatchTitle = '';
    this.lastBatchDate = '';
    this.lastNextPartTarget = '';

    // 지연 렌더링(Lazy rendering) 관리용 셋
    this.renderedTabs = new Set();

    this.init();
  }

  init() {
    this.initReadTimestamps();
    this.setupPwaInstall();
    this.checkOfficerStatus();
    this.populatePraiseMonthDropdown();
    this.renderCurrentTab();
    this.updateUnreadBadges();
    this.requestNotificationPermission();
    this.markTabAsRead(this.currentTab);
    this.startAutoUpdateChecker();
  }

  startAutoUpdateChecker() {
    const checkVersion = async () => {
      try {
        const resp = await fetch('./version.json?t=' + Date.now());
        if (!resp.ok) return;
        const data = await resp.json();
        const serverVer = data.version;
        const localVer = localStorage.getItem('calvary_app_code_ver');
        if (localVer && localVer !== serverVer) {
          localStorage.setItem('calvary_app_code_ver', serverVer);
          if ('caches' in window) {
            caches.keys().then(names => {
              for (let name of names) {
                caches.delete(name);
              }
            });
          }
          window.location.reload(true);
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
  // 1. 임원 관리자 모드 & PIN 번호 인증 (기본 1234)
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

  checkOfficerStatus() {
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
    this.renderAll();
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
    if (this.renderedTabs.size === 0) {
      this.renderCurrentTab();
    } else {
      this.renderedTabs.forEach(tabId => this.renderTab(tabId));
    }
  }

  switchPraiseSubtab(subtab) {
    this.praiseSubtab = subtab;
    document.querySelectorAll('.sub-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.subtab === subtab);
    });
    document.getElementById('praiseSubtabAll').classList.toggle('active', subtab === 'all');
    document.getElementById('praiseSubtabPart').classList.toggle('active', subtab === 'part');

    const dateFilterBox = document.getElementById('praiseDateFilterBox');
    if (dateFilterBox) {
      dateFilterBox.style.display = (subtab === 'all') ? 'flex' : 'none';
    }

    this.renderPraises();
  }

  filterPartPraise(part) {
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
    this.praiseMonthFilter = val;
    this.renderPraises();
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
      html += `<option value="${m}">📅 ${year}년 ${parseInt(month, 10)}월 찬양 모음</option>`;
    });

    selectEl.innerHTML = html;
    selectEl.value = this.praiseMonthFilter;
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

  renderAll() {
    this.renderNotices();
    this.renderPraises();
    this.renderSchedules();
    this.renderMembers();
    this.renderPrayers();
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

  renderNotices() {
    this.renderDailyVerse();
    this.updateNoticeFavBadge();

    const listEl = document.getElementById('noticeList');
    if (!listEl) return;
    const rawNotices = this.storage.get(STORAGE_KEYS.NOTICES);
    const isOfficer = this.storage.isOfficer();
    const favIds = new Set(this.storage.getFavoriteNoticeIds());

    if (rawNotices.length === 0) {
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

    const q = this.noticeSearchQuery;
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

    const renderNoticeMediaItems = (item) => {
      if (item.mediaList && Array.isArray(item.mediaList) && item.mediaList.length > 0) {
        return item.mediaList.map(m => {
          if (m.type === 'youtube' && m.url) {
            return `<div class="video-responsive" style="margin-top: 10px;">${this.getYoutubeIframe(m.url)}</div>`;
          }
          if (m.type === 'media' && m.url) {
            return `<div style="margin-top: 10px;">${this.getNoticeMediaHtml(m.url, item.title)}</div>`;
          }
          return '';
        }).join('');
      }

      let html = '';
      if (item.imageUrl) html += this.getNoticeMediaHtml(item.imageUrl, item.title);
      if (item.youtubeUrl) html += `<div class="video-responsive">${this.getYoutubeIframe(item.youtubeUrl)}</div>`;
      return html;
    };

    const renderNoticeCard = (item) => {
      const content = item.content || '';
      const isLong = content.length > 120 || (content.match(/\n/g) || []).length >= 3;
      const isExpanded = this.expandedNoticeIds && this.expandedNoticeIds.has(item.id);
      const isFav = favIds.has(item.id);

      const starButtonHtml = `
        <button type="button" class="btn-star-notice ${isFav ? 'is-starred' : ''}" onclick="app.toggleNoticeFavorite('${item.id}', event)" title="${isFav ? '즐겨찾기 해제' : '즐겨찾기 추가'}">
          ${this.getStarSvg(isFav)}
        </button>
      `;

      if (!isLong) {
        return `
          <div class="item-card" id="notice_card_${item.id}">
            <div class="card-top">
              <span class="card-badge badge-notice">📢 성가대 공지</span>
              <div class="card-top-right">
                <span class="card-date">${item.date}</span>
                ${starButtonHtml}
                ${isOfficer ? `
                  <div class="card-admin-actions">
                    <button type="button" class="btn-card-edit" onclick="app.openEditNoticeModal('${item.id}')" title="수정">✏️</button>
                    <button type="button" class="btn-card-delete" onclick="app.deleteNotice('${item.id}', this)" title="삭제">✕</button>
                  </div>
                ` : ''}
              </div>
            </div>
            <h3 class="card-title">${item.title}</h3>
            <p class="card-body-text">${content}</p>
            ${renderNoticeMediaItems(item)}
          </div>
        `;
      }

      const previewText = content.slice(0, 120).replace(/\r?\n/g, ' ').trim() + '...';

      return `
        <div class="item-card notice-card-collapsible ${isExpanded ? 'is-expanded' : ''}" id="notice_card_${item.id}">
          <div class="card-top">
            <span class="card-badge badge-notice">📢 성가대 공지</span>
            <div class="card-top-right">
              <span class="card-date">${item.date}</span>
              ${starButtonHtml}
              ${isOfficer ? `
                <div class="card-admin-actions">
                  <button type="button" class="btn-card-edit" onclick="app.openEditNoticeModal('${item.id}')" title="수정">✏️</button>
                  <button type="button" class="btn-card-delete" onclick="app.deleteNotice('${item.id}', this)" title="삭제">✕</button>
                </div>
              ` : ''}
            </div>
          </div>
          <h3 class="card-title">${item.title}</h3>

          <div class="notice-preview-box" style="display: ${isExpanded ? 'none' : 'block'};">
            <p class="card-body-text notice-text-preview">${previewText}</p>
          </div>

          <div class="notice-full-box" style="display: ${isExpanded ? 'block' : 'none'};">
            <p class="card-body-text notice-text-full">${content}</p>
            ${renderNoticeMediaItems(item)}
          </div>

          <button type="button" class="btn-toggle-expand" onclick="app.toggleNoticeExpand('${item.id}', this)">
            ${isExpanded ? '🔼 내용 접기' : '🔽 자세히 보기'}
          </button>
        </div>
      `;
    };

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
        <details class="archive-accordion" ${this.isNoticeArchiveOpen ? 'open' : ''} ontoggle="app.onNoticeArchiveToggle(this)">
          <summary class="archive-summary">📁 지난 공지사항 보관함 (총 ${olderNotices.length}개)</summary>
          <div class="archive-content">
            ${displayedOlder.map(renderNoticeCard).join('')}
            ${hasMore ? `
              <div class="load-more-archive-box">
                <button type="button" class="btn-load-more-archive" onclick="app.loadMoreNoticeArchive()">
                  👇 공지사항 더보기
                </button>
              </div>
            ` : ''}
          </div>
        </details>
      `;
    }

    if (listEl.innerHTML !== html) {
      listEl.innerHTML = html;
    }
  }

  onNoticeArchiveToggle(detailsEl) {
    if (detailsEl) {
      this.isNoticeArchiveOpen = detailsEl.open;
    }
  }

  loadMoreNoticeArchive() {
    this.visibleNoticeArchiveCount = (this.visibleNoticeArchiveCount || 5) + 5;
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
          <span class="daily-verse-badge">📖 오늘의 말씀</span>
          <span class="daily-verse-date">🗓️ ${dateStr}</span>
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
          } else if (item.type === 'media') {
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
          <label for="noticeFilePhoto_${id}" style="font-size: 12.5px;">📷 사진 파일 / 📄 PDF 첨부 (선택)</label>
          <input type="file" id="noticeFilePhoto_${id}" accept="image/*,.pdf" class="file-upload-input" onclick="this.value=''" onchange="app.handleImageUpload(event, 'noticePhotoPreview_${id}', 'noticePhotoData_${id}', 'noticeImageUrl_${id}')">
          <input type="hidden" id="noticePhotoData_${id}" value="${this.escapeHtml(savedData[id]?.dataUrl || '')}">
          <div id="noticePhotoPreview_${id}" class="photo-upload-preview ${savedData[id]?.previewHidden !== false ? 'hidden' : ''}">
            ${savedData[id]?.previewHtml || ''}
          </div>
          <input type="text" id="noticeImageUrl_${id}" placeholder="또는 사진 주소 및 PDF / 구글드라이브 URL 직접 입력" style="margin-top: 6px;" value="${this.escapeHtml(savedData[id]?.imgUrl || '')}" oninput="app.clearFileInputOnly('noticeFilePhoto_${id}', 'noticePhotoPreview_${id}', 'noticePhotoData_${id}')">
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
          mediaList.push({ type: 'youtube', url: youtubeUrl });
        }
        if (imageUrl) {
          mediaList.push({ type: 'media', url: imageUrl });
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
      dateFilterBox.style.display = (this.praiseSubtab === 'all') ? 'flex' : 'none';
    }

    // 26년 1월부터만 보여지도록 필터링
    praises = praises.filter(p => p.date && p.date >= '2026-01-01');

    praises.sort((a, b) => {
      const timeDiff = this.getItemTimestamp(b) - this.getItemTimestamp(a);
      if (timeDiff !== 0) return timeDiff;
      return (b.date || '').localeCompare(a.date || '');
    });

    // 1. 성가대 찬양 영상 필터링 (type === 'all') - 월별/최신 주일 필터 적용
    let allPraises = praises.filter(p => p.type === 'all');
    if (this.praiseMonthFilter === 'LATEST') {
      if (allPraises.length > 0) {
        const latestDate = allPraises[0].date;
        allPraises = allPraises.filter(p => p.date === latestDate);
      }
    } else if (this.praiseMonthFilter) {
      allPraises = allPraises.filter(p => p.date.startsWith(this.praiseMonthFilter));
    }

    if (listAllEl) {
      const htmlAll = allPraises.length === 0
        ? `<div class="item-card"><p class="card-body-text">선택하신 일자의 성가대 찬양 영상이 없습니다.</p></div>`
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

    if (listPartEl) {
      const htmlPart = displayPartPraises.length === 0
        ? `<div class="item-card"><p class="card-body-text">등록된 파트별 연습 음원이 없습니다.</p></div>`
        : displayPartPraises.map(p => this.createPraiseCardHtml(p, isOfficer)).join('');
      if (listPartEl.innerHTML !== htmlPart) {
        listPartEl.innerHTML = htmlPart;
      }
    }
  }

  createPraiseCardHtml(item, isOfficer) {
    const partNames = { 'ALL_PART': '4부 합창', 'S': '소프라노', 'A': '알토', 'T': '테너', 'B': '베이스' };
    const partBadges = { 'ALL_PART': 'badge-praise', 'S': 'badge-part-s', 'A': 'badge-part-a', 'T': 'badge-part-t', 'B': 'badge-part-b' };

    const badgeClass = item.type === 'part' ? (partBadges[item.partTarget] || 'badge-praise') : 'badge-notice';
    const badgeText = item.type === 'part' ? `🎼 ${partNames[item.partTarget] || '파트'} 연습` : '🎬 성가대 찬양 영상';

    return `
      <div class="item-card">
        <div class="card-top">
          <span class="card-badge ${badgeClass}">${badgeText}</span>
          <div class="card-top-right">
            <span class="card-date">🗓️ ${item.date}</span>
            ${isOfficer ? `
              <div class="card-admin-actions">
                <button type="button" class="btn-card-edit" onclick="app.openEditPraiseModal('${item.id}')" title="수정">✏️</button>
                <button type="button" class="btn-card-delete" onclick="app.deletePraise('${item.id}', this)" title="삭제">✕</button>
              </div>
            ` : ''}
          </div>
        </div>
        <h3 class="card-title">${item.title}</h3>
        
        <div class="video-responsive">
          ${this.getYoutubeIframe(item.youtubeUrl)}
        </div>
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
      const dateStr = `${dt.getFullYear()}년 ${dt.getMonth() + 1}월 ${dt.getDate()}일 (${['일', '월', '화', '수', '목', '금', '토'][dt.getDay()]})`;
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
        <div class="item-card ${isPast ? 'opacity-80' : ''}">
          <div class="card-top">
            <span class="card-badge ${isPast ? 'badge-past' : 'badge-praise'}">${isPast ? '📜 지난 일정' : '📅 주요 일정'} · ${dateStr} ${timeStr}</span>
            <div class="card-top-right">
              ${isOfficer ? `
                <div class="card-admin-actions">
                  <button type="button" class="btn-card-edit" onclick="app.openEditScheduleModal('${s.id}')" title="수정">✏️</button>
                  <button type="button" class="btn-card-delete" onclick="app.deleteSchedule('${s.id}', this)" title="삭제">✕</button>
                </div>
              ` : ''}
            </div>
          </div>
          <h3 class="card-title">${s.title}</h3>
          <p class="card-body-text">📍 <strong>장소:</strong> ${s.location}</p>
          ${s.note ? `<p class="card-body-text" style="color: var(--text-sub);">💡 ${s.note}</p>` : ''}
          ${s.imageUrl ? `<div style="margin-top: 10px;">${this.getNoticeMediaHtml(s.imageUrl, s.title)}</div>` : ''}
          ${s.youtubeUrl ? `<div class="video-responsive" style="margin-top: 10px;">${this.getYoutubeIframe(s.youtubeUrl)}</div>` : ''}

          <!-- 🎟️ 신청 기능 활성화 시 버튼 표시 -->
          ${s.enableApply ? `
            <div class="sched-apply-box">
              <button class="btn-card-apply" onclick="app.openApplyModal('${s.id}')">
                🎟️ ${s.applyTitle || '신청하기'}
              </button>
              
              <button class="btn-card-apply-list" onclick="app.openApplyListModal('${s.id}')">
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
    if (sched) {
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
  }

  openApplyListModal(schedId) {
    const schedules = this.storage.get(STORAGE_KEYS.SCHEDULES);
    const sched = schedules.find(s => s.id === schedId);
    if (!sched) return;

    document.getElementById('applyListSchedTitle').textContent = sched.title;
    const apps = sched.applications || [];
    let totalTickets = 0;
    apps.forEach(a => {
      if (a.option) {
        const match = a.option.match(/(\d+)매/);
        if (match) totalTickets += parseInt(match[1], 10);
      }
    });

    const totalText = totalTickets > 0
      ? `총 ${apps.length}명 신청 완료 (티켓 총 ${totalTickets}매)`
      : `총 ${apps.length}명 신청 완료`;
    document.getElementById('applyTotalCountBadge').textContent = totalText;

    const container = document.getElementById('applyListContainer');
    const isOfficer = this.storage.isOfficer();

    if (apps.length === 0) {
      container.innerHTML = `<p style="padding:16px; text-align:center; color:var(--text-sub);">아직 신청한 대원이 없습니다.</p>`;
    } else {
      // 1. 파트순 (소프라노 -> 알토 -> 테너 -> 베이스) -> 2. 파트 내 가나다순 정렬
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

      container.innerHTML = `
        <table class="apply-table">
          <thead>
            <tr>
              <th>파트</th>
              <th>이름</th>
              <th>신청 내용</th>
              <th>메모</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            ${apps.map(a => {
              const isMine = this.storage.isMyItem(a.id);
              const canEdit = isMine || isOfficer;
              return `
                <tr>
                  <td><span class="part-tag ${a.part}">${this.formatPartTag(a.part)}</span></td>
                  <td><strong>${this.escapeHtml(a.name || '')}</strong> ${isMine ? '<span style="font-size:10px; background:var(--primary-navy); color:#fff; padding:1px 5px; border-radius:8px; margin-left:4px;">내 신청</span>' : ''}</td>
                  <td>${this.escapeHtml(a.option || '')}</td>
                  <td>${this.escapeHtml(a.note || '-')}</td>
                  <td>
                    ${canEdit ? `
                      <div style="display:flex; gap:6px;">
                        <button type="button" style="color:var(--primary-navy); background:none; border:none; cursor:pointer; font-weight:bold; font-size:12px; padding:2px 4px;" onclick="app.openEditApplicationModal('${schedId}', '${a.id}')">수정</button>
                        <button type="button" style="color:#EF4444; background:none; border:none; cursor:pointer; font-weight:bold; font-size:12px; padding:2px 4px;" onclick="app.deleteApplication('${schedId}', '${a.id}', this)">삭제</button>
                      </div>
                    ` : '-'}
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      `;
    }

    this.openModal('modalApplyList');
  }

  openEditApplicationModal(schedId, appId) {
    if (!this.storage.isMyItem(appId) && !this.storage.isOfficer()) {
      alert('🔒 본인이 작성한 신청 내역만 수정할 수 있습니다.');
      return;
    }
    const schedules = this.storage.get(STORAGE_KEYS.SCHEDULES);
    const sched = schedules.find(s => s.id === schedId);
    if (!sched || !sched.applications) return;
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

    if (!this.storage.isMyItem(appId) && !this.storage.isOfficer()) {
      alert('🔒 본인이 작성한 신청 내역만 수정할 수 있습니다.');
      return;
    }

    const schedules = this.storage.get(STORAGE_KEYS.SCHEDULES);
    const sched = schedules.find(s => s.id === schedId);
    if (sched && sched.applications) {
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
  }

  deleteApplication(schedId, appId, btn) {
    if (!this.storage.isMyItem(appId) && !this.storage.isOfficer()) {
      alert('🔒 본인이 작성한 신청 내역만 삭제할 수 있습니다.');
      return;
    }
    this.confirmAction('🎟️ 해당 신청 내역을 삭제하시겠습니까?', () => {
      this.animateRemoveCard(btn, () => {
        const schedules = this.storage.get(STORAGE_KEYS.SCHEDULES);
        const sched = schedules.find(s => s.id === schedId);
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

    const html = members.length === 0
      ? `<div class="item-card"><p class="card-body-text">등록된 대원이 없습니다.</p></div>`
      : members.map(m => {
        const cleanPhone = (m.phone || '').replace(/[^0-9+]/g, '');

        const photoUrl = this.formatMemberPhotoUrl(m.photoUrl, m.id);

        return `
        <div class="member-card">
          <div class="member-info-left">
            ${photoUrl ? `<img src="${photoUrl}" class="member-avatar clickable-photo" onclick="app.openImageViewer('${photoUrl}', '${this.escapeHtml(m.name)}')" alt="${m.name}" title="클릭하여 원본 사진 보기">` : `<div class="member-avatar">${m.name.charAt(0)}</div>`}
            <div class="member-details">
              <div class="member-name-row">
                <span class="member-name">${m.name}</span>
                ${m.role ? `<span class="member-role">(${m.role})</span>` : ''}
              </div>
              <span class="part-tag ${m.part}">${this.formatPartTag(m.part)}</span>
            </div>
          </div>

          <div class="member-contact-buttons">
            <a href="tel:${cleanPhone}" class="btn-contact-call" title="전화 연결">
              📞 <span class="btn-text-sm">전화</span>
            </a>
            <a href="sms:${cleanPhone}" class="btn-contact-sms" title="문자 보내기">
              💬 <span class="btn-text-sm">문자</span>
            </a>
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

  // ----------------------------------------------------
  // 🙏 7. 중보기도방 소통 & 공감 (아멘)
  // ----------------------------------------------------
  renderPrayers() {
    const listEl = document.getElementById('prayerList');
    if (!listEl) return;
    const prayers = this.storage.get(STORAGE_KEYS.PRAYERS) || [];

    if (prayers.length === 0) {
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
        <div class="item-card">
          <div class="card-top">
            <span class="card-badge badge-notice">🙏 ${this.escapeHtml(p.author || '익명')} 대원</span>
            <div class="card-top-right">
              <span class="card-date">${p.date || ''}</span>
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
            ❤️ 함께 기도해요 (아멘 ${p.amenCount || 0})
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
  getYoutubeIframe(url) {
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

    return `<iframe src="https://www.youtube.com/embed/${videoId}?rel=0" loading="lazy" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>`;
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

  getNoticeMediaHtml(url, title) {
    if (!url) return '';
    url = url.trim();

    const fileIdMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/) || url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    const fileId = fileIdMatch ? fileIdMatch[1] : '';

    // 1. URL에 .pdf가 명시되어 있거나 백그라운드 검사 결과 PDF로 판명된 경우 즉시 PDF 뷰어로 표시
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

    // 2. 구글 드라이브 주소인 경우 1차 이미지 표시 + 백그라운드 실시간 PDF 파일 타입 검사 수행
    const convertedImg = this.convertGoogleDriveUrl(url);
    const escapedTitle = this.escapeHtml(title);
    const wrapId = fileId ? `media_wrap_${fileId}` : ('media_wrap_' + Math.random().toString(36).substring(2, 9));

    if (fileId) {
      setTimeout(() => this.checkDrivePdfFile(fileId), 30);

      return `
        <div id="${wrapId}">
          <img src="${convertedImg}" loading="lazy" referrerpolicy="no-referrer" class="card-img-preview clickable-photo" onclick="app.openImageViewer('${convertedImg}', '${escapedTitle}')" onerror="app.convertMediaToPdf('${wrapId}', '${fileId}', this)" alt="공지 사진" title="클릭하여 원본 사진 크게 보기">
        </div>
      `;
    }

    return `<img src="${convertedImg}" loading="lazy" referrerpolicy="no-referrer" class="card-img-preview clickable-photo" onclick="app.openImageViewer('${convertedImg}', '${escapedTitle}')" alt="공지 사진" title="클릭하여 원본 사진 크게 보기">`;
  }

  async checkDrivePdfFile(fileId) {
    if (!fileId) return;
    if (!this.drivePdfCache) this.drivePdfCache = {};
    if (this.drivePdfCache[fileId] !== undefined) return;

    // 🛑 1. 중복 요청 방지: 요청 시작 시점에 즉시 'pending' 처리하여 동일 fileId의 중복 fetch 전면 차단
    this.drivePdfCache[fileId] = 'pending';

    let timeoutId = null;
    try {
      // 🛑 2. 타임아웃 3.5초 제한 (느린 스마트폰 통신망에서 무한 대기/먹통 현상 100% 방지)
      const controller = new AbortController();
      timeoutId = setTimeout(() => controller.abort(), 3500);

      const res = await fetch(`https://drive.google.com/file/d/${fileId}/view`, {
        signal: controller.signal
      });

      if (timeoutId) clearTimeout(timeoutId);

      if (!res || !res.ok) {
        this.drivePdfCache[fileId] = false;
        return;
      }
      const html = await res.text();
      const isPdf = /itemprop="name"\s+content="[^"]*\.pdf"/i.test(html) || 
                    /property="og:title"\s+content="[^"]*\.pdf"/i.test(html) || 
                    /<title>[^<]*\.pdf\s*(?:-[^<]*)?<\/title>/i.test(html);

      this.drivePdfCache[fileId] = isPdf;

      if (isPdf) {
        const wrapEl = document.getElementById(`media_wrap_${fileId}`);
        // 🛑 3. 화면 이동 후에도 안전하게 현재 활성 DOM에 위치할 때만 PDF 뷰어로 업데이트
        if (wrapEl && document.body.contains(wrapEl)) {
          const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
          const openUrl = `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;
          wrapEl.innerHTML = this.getPdfViewerHtml(embedUrl, openUrl);
        }
      }
    } catch (e) {
      if (timeoutId) clearTimeout(timeoutId);
      this.drivePdfCache[fileId] = false;
    }
  }

  convertMediaToPdf(wrapId, fileId, imgEl) {
    if (imgEl) {
      imgEl.onerror = null; // 🛑 무한 재귀 호출 및 모바일 멈춤 현상 100% 방지 (이벤트 핸들러 즉시 제거)
    }

    // 1. 이미 이미지 파일(isPdf: false)로 확정되었으면 절대로 PDF 뷰어로 전환하지 않음
    if (this.drivePdfCache && this.drivePdfCache[fileId] === false) {
      return;
    }

    // 2. 백그라운드 검사가 완료되었고 100% PDF(true)임이 확인된 경우에만 PDF 뷰어로 전환
    if (this.drivePdfCache && this.drivePdfCache[fileId] === true) {
      const wrap = document.getElementById(wrapId);
      if (!wrap) return;
      const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
      const openUrl = `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;
      wrap.innerHTML = this.getPdfViewerHtml(embedUrl, openUrl);
    }
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
}

// 글로벌 앱 인스턴스 가동
window.app = new ChoirApp();
