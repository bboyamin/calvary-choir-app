/**
 * 갈보리교회 임마누엘 성가대 모바일 PWA 애플리케이션 코어 로직 (app.js)
 * 일정 및 티켓/참석 신청 기능, 가나다순 대원 정렬, PIN 인증 관리자 모드
 */

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

    this.init();
  }

  init() {
    this.initReadTimestamps();
    this.setupPwaInstall();
    this.checkOfficerStatus();
    this.populatePraiseMonthDropdown();
    this.renderAll();
    this.updateUnreadBadges();
    this.requestNotificationPermission();
    this.markTabAsRead(this.currentTab);
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
    const DEFAULT_PIN = '1234';
    if (this.enteredPin === DEFAULT_PIN) {
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
    const badge = document.getElementById('adminStatusBadge');

    if (isOfficer) {
      banner.classList.remove('hidden');
      if (badge) badge.textContent = '편집 모드 중';
      document.querySelectorAll('.officer-only').forEach(el => el.classList.remove('hidden'));
    } else {
      banner.classList.add('hidden');
      if (badge) badge.textContent = '관리자';
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

  renderTab(tabId) {
    if (tabId === 'notice') this.renderNotices();
    else if (tabId === 'praise') this.renderPraises();
    else if (tabId === 'schedule') this.renderSchedules();
    else if (tabId === 'member') this.renderMembers();
    else if (tabId === 'prayer') this.renderPrayers();
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
    this.openModal('modalImageViewer');
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
  renderNotices() {
    const listEl = document.getElementById('noticeList');
    if (!listEl) return;
    const notices = this.storage.get(STORAGE_KEYS.NOTICES);
    const isOfficer = this.storage.isOfficer();

    if (notices.length === 0) {
      listEl.innerHTML = `<div class="item-card"><p class="card-body-text">등록된 공지사항이 없습니다.</p></div>`;
      return;
    }

    // 최신 생성 시각(Timestamp) 내림차순 1차 정렬 -> 날짜 내림차순 2차 정렬 (신규 작성글 최상단 배치 보장)
    notices.sort((a, b) => {
      const timeDiff = this.getItemTimestamp(b) - this.getItemTimestamp(a);
      if (timeDiff !== 0) return timeDiff;
      return (b.date || '').localeCompare(a.date || '');
    });

    const MAX_RECENT = 4;
    const recentNotices = notices.slice(0, MAX_RECENT);
    const olderNotices = notices.slice(MAX_RECENT);

    const renderNoticeCard = (item) => `
      <div class="item-card">
        ${isOfficer ? `<button class="btn-delete-card" onclick="app.deleteNotice('${item.id}', this)" title="삭제">✕</button>` : ''}
        <div class="card-top">
          <span class="card-badge badge-notice">📢 성가대 공지</span>
          <span class="card-date">${item.date}</span>
        </div>
        <h3 class="card-title">${item.title}</h3>
        <p class="card-body-text">${item.content}</p>
        ${item.imageUrl ? `<img src="${item.imageUrl}" class="card-img-preview clickable-photo" onclick="app.openImageViewer('${item.imageUrl}', '${this.escapeHtml(item.title)}')" alt="공지 사진" title="클릭하여 원본 사진 크게 보기">` : ''}
        ${item.youtubeUrl ? `<div class="video-responsive">${this.getYoutubeIframe(item.youtubeUrl)}</div>` : ''}
      </div>
    `;

    let html = recentNotices.map(renderNoticeCard).join('');

    if (olderNotices.length > 0) {
      html += `
        <details class="archive-accordion">
          <summary class="archive-summary">📁 지난 공지사항 보관함 (총 ${olderNotices.length}개)</summary>
          <div class="archive-content">
            ${olderNotices.map(renderNoticeCard).join('')}
          </div>
        </details>
      `;
    }

    if (listEl.innerHTML !== html) {
      listEl.innerHTML = html;
    }
  }

  openNoticeModal() {
    document.getElementById('formNotice').reset();
    this.clearUploadedImage('noticeFilePhoto', 'noticePhotoPreview', 'noticePhotoData');
    this.openModal('modalNotice');
  }

  saveNotice(e) {
    e.preventDefault();
    const title = document.getElementById('noticeTitle').value.trim();
    const content = document.getElementById('noticeContent').value.trim();
    const youtubeUrl = document.getElementById('noticeYoutube').value.trim();
    const uploadedDataUrl = document.getElementById('noticePhotoData').value.trim();
    const inputUrl = document.getElementById('noticeImageUrl').value.trim();
    const imageUrl = uploadedDataUrl || inputUrl;

    const notices = this.storage.get(STORAGE_KEYS.NOTICES);
    const now = Date.now();
    const newNotice = {
      id: 'n_' + now,
      createdAt: now,
      title,
      content,
      youtubeUrl,
      imageUrl,
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

  // ----------------------------------------------------
  // 🎵 4. 찬양 음원/영상 렌더링
  // ----------------------------------------------------
  renderPraises() {
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
        ${isOfficer ? `<button class="btn-delete-card" onclick="app.deletePraise('${item.id}', this)" title="삭제">✕</button>` : ''}
        <div class="card-top">
          <span class="card-badge ${badgeClass}">${badgeText}</span>
          <span class="card-date">🗓️ ${item.date}</span>
        </div>
        <h3 class="card-title">${item.title}</h3>
        
        <div class="video-responsive">
          ${this.getYoutubeIframe(item.youtubeUrl)}
        </div>
      </div>
    `;
  }

  openPraiseModal() {
    document.getElementById('formPraise').reset();

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
    const type = document.getElementById('praiseType').value;
    const partTarget = type === 'part' ? document.getElementById('praisePartTarget').value : '';
    const title = document.getElementById('praiseTitle').value.trim();
    const date = document.getElementById('praiseDate').value;
    const youtubeUrl = document.getElementById('praiseYoutube').value.trim();

    const praises = this.storage.get(STORAGE_KEYS.PRAISES);
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

    const upcoming = [];
    const past = [];

    schedules.forEach(s => {
      const sDate = new Date(s.datetime);
      if (sDate >= todayMidnight) {
        upcoming.push(s);
      } else {
        past.push(s);
      }
    });

    // 예정된 일정: 빠르게 다가오는 날짜순 정렬
    upcoming.sort((a, b) => new Date(a.datetime) - new Date(b.datetime));
    // 지나간 일정: 최근 지난 날짜가 맨 위로 오도록 내림차순 정렬
    past.sort((a, b) => new Date(b.datetime) - new Date(a.datetime));

    const renderScheduleCard = (s, isPast = false) => {
      const dt = new Date(s.datetime);
      const dateStr = `${dt.getFullYear()}년 ${dt.getMonth() + 1}월 ${dt.getDate()}일 (${['일','월','화','수','목','금','토'][dt.getDay()]})`;
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
          ${isOfficer ? `<button class="btn-delete-card" onclick="app.deleteSchedule('${s.id}', this)" title="삭제">✕</button>` : ''}
          <div class="card-top">
            <span class="card-badge ${isPast ? 'badge-past' : 'badge-praise'}">${isPast ? '📜 지난 일정' : '📅 주요 일정'} · ${dateStr} ${timeStr}</span>
          </div>
          <h3 class="card-title">${s.title}</h3>
          <p class="card-body-text">📍 <strong>장소:</strong> ${s.location}</p>
          ${s.note ? `<p class="card-body-text" style="color: var(--text-sub);">💡 ${s.note}</p>` : ''}

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
    document.getElementById('formSchedule').reset();
    this.toggleSchedApplyFields(false);
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
    const title = document.getElementById('schedTitle').value.trim();
    const datetime = document.getElementById('schedDate').value;
    const location = document.getElementById('schedLocation').value.trim();
    const note = document.getElementById('schedNote').value.trim();
    const enableApply = document.getElementById('schedEnableApply').checked;
    const applyTitle = document.getElementById('schedApplyTitle').value.trim() || '🎟️ 참석/티켓 신청하기';
    const applyType = document.getElementById('schedApplyType').value;

    const schedules = this.storage.get(STORAGE_KEYS.SCHEDULES);
    const now = Date.now();
    schedules.push({
      id: 's_' + now,
      createdAt: now,
      title,
      datetime,
      location,
      note,
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
    const dateStr = `${dt.getFullYear()}년 ${dt.getMonth() + 1}월 ${dt.getDate()}일 (${['일','월','화','수','목','금','토'][dt.getDay()]})`;
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
      sched.applications.push({
        id: 'app_' + Date.now(),
        part,
        name,
        option,
        note,
        time: new Date().toLocaleString('ko-KR', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })
      });

      this.storage.save(STORAGE_KEYS.SCHEDULES, schedules);
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
      // 파트순 및 가나다순 정렬
      apps.sort((a, b) => a.name.localeCompare(b.name, 'ko'));

      container.innerHTML = `
        <table class="apply-table">
          <thead>
            <tr>
              <th>파트</th>
              <th>이름</th>
              <th>신청 내용</th>
              <th>메모</th>
              ${isOfficer ? '<th>관리</th>' : ''}
            </tr>
          </thead>
          <tbody>
            ${apps.map(a => `
              <tr>
                <td><span class="part-tag ${a.part}">${a.part}</span></td>
                <td><strong>${a.name}</strong></td>
                <td>${a.option}</td>
                <td>${a.note || '-'}</td>
                ${isOfficer ? `<td><button style="color:red; background:none; border:none; cursor:pointer;" onclick="app.deleteApplication('${schedId}', '${a.id}', this)">삭제</button></td>` : ''}
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    }

    this.openModal('modalApplyList');
  }

  deleteApplication(schedId, appId, btn) {
    this.confirmAction('🎟️ 해당 대원의 신청을 삭제하시겠습니까?', () => {
      this.animateRemoveCard(btn, () => {
        const schedules = this.storage.get(STORAGE_KEYS.SCHEDULES);
        const sched = schedules.find(s => s.id === schedId);
        if (sched && sched.applications) {
          sched.applications = sched.applications.filter(a => a.id !== appId);
          this.storage.save(STORAGE_KEYS.SCHEDULES, schedules);
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
    let members = this.storage.get(STORAGE_KEYS.MEMBERS);
    const isOfficer = this.storage.isOfficer();

    if (this.memberPartFilter !== 'ALL') {
      members = members.filter(m => m.part === this.memberPartFilter);
    }

    members.sort((a, b) => a.name.localeCompare(b.name, 'ko'));

    const html = members.length === 0
      ? `<div class="item-card"><p class="card-body-text">등록된 대원이 없습니다.</p></div>`
      : members.map(m => {
      const cleanPhone = (m.phone || '').replace(/[^0-9+]/g, '');

      return `
        <div class="member-card">
          <div class="member-info-left">
            ${m.photoUrl ? `<img src="${m.photoUrl}" class="member-avatar clickable-photo" onclick="app.openImageViewer('${m.photoUrl}', '${this.escapeHtml(m.name)} 대원 프로필')" alt="${m.name}" title="클릭하여 원본 사진 보기">` : `<div class="member-avatar">${m.name.charAt(0)}</div>`}
            <div class="member-details">
              <div class="member-name-row">
                <span class="member-name">${m.name}</span>
                ${m.role ? `<span class="member-role">(${m.role})</span>` : ''}
              </div>
              <span class="part-tag ${m.part}">${m.part}</span>
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

    if (listEl.innerHTML !== html) {
      listEl.innerHTML = html;
    }
  }

  openMemberModal() {
    document.getElementById('formMember').reset();
    const editingIdEl = document.getElementById('editingMemberId');
    if (editingIdEl) editingIdEl.value = '';
    this.clearUploadedImage('memFilePhoto', 'memPhotoPreview', 'memPhotoData');
    this.openModal('modalMember');
  }

  editMember(id) {
    const members = this.storage.get(STORAGE_KEYS.MEMBERS);
    const member = members.find(m => m.id === id);
    if (!member) return;

    document.getElementById('formMember').reset();
    this.clearUploadedImage('memFilePhoto', 'memPhotoPreview', 'memPhotoData');

    const editingIdEl = document.getElementById('editingMemberId');
    if (editingIdEl) editingIdEl.value = member.id;

    document.getElementById('memName').value = member.name || '';
    document.getElementById('memPart').value = member.part || '소프라노';
    document.getElementById('memRole').value = member.role || '';
    document.getElementById('memPhone').value = member.phone || '';

    if (member.photoUrl) {
      if (member.photoUrl.startsWith('data:image')) {
        document.getElementById('memPhotoData').value = member.photoUrl;
        const previewEl = document.getElementById('memPhotoPreview');
        previewEl.innerHTML = `<img src="${member.photoUrl}" alt="미리보기"><button type="button" class="btn-remove-photo" onclick="app.clearUploadedImage('memFilePhoto', 'memPhotoPreview', 'memPhotoData')">✕ 사진 삭제</button>`;
        previewEl.classList.remove('hidden');
      } else {
        document.getElementById('memPhoto').value = member.photoUrl;
      }
    }

    this.openModal('modalMember');
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
    const photoUrl = uploadedDataUrl || inputUrl;

    let members = this.storage.get(STORAGE_KEYS.MEMBERS);

    if (editingId) {
      // 대원 정보 수정 모드
      const index = members.findIndex(m => m.id === editingId);
      if (index !== -1) {
        members[index] = {
          ...members[index],
          name,
          part,
          role,
          phone,
          photoUrl
        };
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
        photoUrl
      });
      alert(`👥 ${name} 대원이 성공적으로 등록되었습니다.`);
    }

    this.storage.save(STORAGE_KEYS.MEMBERS, members);
    this.closeModal('modalMember');
    this.renderMembers();
  }

  // ----------------------------------------------------
  // 📷 스마트폰 이미지 파일 업로드 & 캔버스 압축 헬퍼
  // ----------------------------------------------------
  handleImageUpload(event, previewId, hiddenInputId) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 1600;
        const MAX_HEIGHT = 1600;
        let width = img.width;
        let height = img.height;

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
        ctx.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL('image/jpeg', 0.88);

        document.getElementById(hiddenInputId).value = dataUrl;
        const previewEl = document.getElementById(previewId);
        previewEl.innerHTML = `<img src="${dataUrl}" class="clickable-photo" onclick="app.openImageViewer('${dataUrl}', '업로드 이미지 미리보기')" alt="미리보기" title="클릭하여 크게 보기"><button type="button" class="btn-remove-photo" onclick="app.clearUploadedImage('${event.target.id}', '${previewId}', '${hiddenInputId}')">✕ 사진 삭제</button>`;
        previewEl.classList.remove('hidden');
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  clearUploadedImage(fileInputId, previewId, hiddenInputId) {
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

  // ----------------------------------------------------
  // 🙏 7. 중보기도방 소통 & 공감 (아멘)
  // ----------------------------------------------------
  renderPrayers() {
    const listEl = document.getElementById('prayerList');
    if (!listEl) return;
    const prayers = this.storage.get(STORAGE_KEYS.PRAYERS);

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

    const renderPrayerCard = (p) => `
      <div class="item-card" style="position: relative;">
        ${isOfficer ? `<button class="btn-delete-card" onclick="app.deletePrayer('${p.id}', this)" title="삭제">✕</button>` : ''}
        <div class="card-top">
          <span class="card-badge badge-notice">🙏 ${p.author} 대원</span>
          <span class="card-date">${p.date}</span>
        </div>
        <p class="card-body-text">${p.content}</p>

        <!-- 함께 기도해요 (아멘) 버튼 -->
        <button class="amen-button" onclick="app.addAmen('${p.id}')">
          ❤️ 함께 기도해요 (아멘 ${p.amenCount || 0})
        </button>

        <!-- 댓글 목록 -->
        <div class="comment-section">
          <div class="comment-list">
            ${(p.comments || []).map(c => `
              <div class="comment-item">
                <span class="comment-author">${c.author}:</span>
                <span>${c.text}</span>
              </div>
            `).join('')}
          </div>

          <!-- 댓글 입력 폼 -->
          <div class="comment-input-row">
            <input type="text" id="comment_input_${p.id}" placeholder="응원과 기도의 글을 남겨주세요...">
            <button onclick="app.addComment('${p.id}')">등록</button>
          </div>
        </div>
      </div>
    `;

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

  deletePrayer(id, btn) {
    this.confirmAction('🙏 이 중보기도제목을 삭제하시겠습니까?', () => {
      this.animateRemoveCard(btn, () => {
        let prayers = this.storage.get(STORAGE_KEYS.PRAYERS);
        prayers = prayers.filter(p => p.id !== id);
        this.storage.save(STORAGE_KEYS.PRAYERS, prayers);
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
    prayers.unshift({
      id: 'pr_' + now,
      createdAt: now,
      author,
      content,
      date: new Date().toISOString().split('T')[0],
      amenCount: 1,
      comments: []
    });

    this.storage.save(STORAGE_KEYS.PRAYERS, prayers);
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

    const author = prompt('작성자 성함을 입력해주세요 (예: 김은혜 권사):', '익명 대원');
    if (!author) return;

    const prayers = this.storage.get(STORAGE_KEYS.PRAYERS);
    const prayer = prayers.find(p => p.id === id);
    if (prayer) {
      if (!prayer.comments) prayer.comments = [];
      prayer.comments.push({ author, text });
      this.storage.save(STORAGE_KEYS.PRAYERS, prayers);
      this.renderPrayers();
    }
  }

  // ----------------------------------------------------
  // 🛠️ 헬퍼 메서드 (유튜브 변환 & 모달 제어)
  // ----------------------------------------------------
  getYoutubeIframe(url) {
    if (!url) return '';
    let videoId = '';
    if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    } else if (url.includes('youtube.com/watch')) {
      const urlParams = new URLSearchParams(url.split('?')[1]);
      videoId = urlParams.get('v');
    } else if (url.includes('youtube.com/embed/')) {
      videoId = url.split('youtube.com/embed/')[1].split('?')[0];
    }

    if (!videoId) return `<p style="padding:10px; color:red;">잘못된 유튜브 주소입니다.</p>`;

    return `<iframe src="https://www.youtube.com/embed/${videoId}?rel=0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>`;
  }

  openModal(modalId) {
    document.getElementById(modalId)?.classList.remove('hidden');
  }

  closeModal(modalId) {
    document.getElementById(modalId)?.classList.add('hidden');
  }
}

// 글로벌 앱 인스턴스 가동
window.app = new ChoirApp();
