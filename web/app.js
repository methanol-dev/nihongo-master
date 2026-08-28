// ===================================================
// NIHONGO MASTER - CLIENT APPLICATION LOGIC
// ===================================================

// State Management
const STORAGE_KEYS = {
  ATTENDANCE: 'nihongo_attendance_dates',
  COMPLETED_LESSONS: 'nihongo_completed_lessons',
  MASTERED_CARDS: 'nihongo_mastered_cards',
  THEME: 'nihongo_theme_mode',
  LAST_LESSON: 'nihongo_last_lesson_id'
};

let attendanceDates = JSON.parse(localStorage.getItem(STORAGE_KEYS.ATTENDANCE) || '[]');
let completedLessons = new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS) || '[]'));
let masteredCards = new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.MASTERED_CARDS) || '[]'));
let currentTheme = localStorage.getItem(STORAGE_KEYS.THEME) || 'light';
let lastLessonId = localStorage.getItem(STORAGE_KEYS.LAST_LESSON) || 'nhap_mon_bai_01_hiragana';

let currentCategory = 'ALL';
let currentLesson = null;
let currentFlashcardIndex = 0;
let currentFlashcardList = [...FLASHCARDS];
let deferredInstallPrompt = null;

// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(err => {
      console.log('SW registration failed: ', err);
    });
  });
}

// PWA Install Prompt
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  const installBtn = document.getElementById('btn-pwa-install');
  if (installBtn) {
    installBtn.style.display = 'block';
    installBtn.addEventListener('click', () => {
      deferredInstallPrompt.prompt();
      deferredInstallPrompt.userChoice.then(() => {
        deferredInstallPrompt = null;
        installBtn.style.display = 'none';
      });
    });
  }
});

// Helper: Format Date to YYYY-MM-DD
function getTodayString() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Calculate Streak
function calculateStreak() {
  if (!attendanceDates.length) return 0;
  const sorted = [...new Set(attendanceDates)].sort().reverse();
  const today = getTodayString();
  
  let streak = 0;
  let checkDate = new Date();
  
  // If not checked in today, verify if yesterday was checked in
  const todayChecked = sorted.includes(today);
  if (!todayChecked) {
    checkDate.setDate(checkDate.getDate() - 1);
  }
  
  while (true) {
    const y = checkDate.getFullYear();
    const m = String(checkDate.getMonth() + 1).padStart(2, '0');
    const d = String(checkDate.getDate()).padStart(2, '0');
    const dateStr = `${y}-${m}-${d}`;
    
    if (sorted.includes(dateStr)) {
      streak++;
      checkDate.setDate(checkDate.getDate() - 1);
    } else {
      break;
    }
  }
  
  return streak;
}

let currentSpeechRate = 0.85;

// Text-to-Speech (Japanese)
function speakJapanese(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  
  const cleanText = text.replace(/[*_#`()\[\]]/g, '').trim();
  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'ja-JP';
  utterance.rate = currentSpeechRate;
  
  window.speechSynthesis.speak(utterance);
}

// Simple Markdown to HTML Parser
function parseMarkdown(md) {
  let html = md;

  html = html.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Blockquotes
  html = html.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>');

  // Bold & Italic
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');
  html = html.replace(/`([^`]+)`/gim, '<code>$1</code>');

  // Parse Tables
  html = html.replace(/((?:\|[^\n]+\|\r?\n)+)/g, function(tableBlock) {
    const lines = tableBlock.trim().split('\n');
    if (lines.length < 2) return tableBlock;
    
    let tableHtml = '<div class="table-responsive"><table>';
    let isHeader = true;
    
    lines.forEach((line, idx) => {
      if (line.includes('---')) {
        isHeader = false;
        return;
      }
      const cells = line.split('|').filter((_, i, arr) => i > 0 && i < arr.length - 1);
      tableHtml += '<tr>';
      cells.forEach(cell => {
        const tag = isHeader ? 'th' : 'td';
        let cellContent = cell.trim();
        tableHtml += `<${tag}>${cellContent}</${tag}>`;
      });
      tableHtml += '</tr>';
      if (idx === 0) isHeader = false;
    });
    
    tableHtml += '</table></div>';
    return tableHtml;
  });

  // Task Lists
  html = html.replace(/^- \[ \]\s+(.*$)/gim, '<div class="task-item"><input type="checkbox" disabled> $1</div>');
  html = html.replace(/^- \[x\]\s+(.*$)/gim, '<div class="task-item"><input type="checkbox" checked disabled> $1</div>');

  // Regular Lists
  html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');

  // Paragraphs
  html = html.replace(/\n\n+/g, '</p><p>');
  html = '<p>' + html + '</p>';

  // Clean empty paragraphs
  html = html.replace(/<p><\/p>/g, '');
  html = html.replace(/<p>(<h[1-6]>)/g, '$1');
  html = html.replace(/(<\/h[1-6]>)<\/p>/g, '$1');
  html = html.replace(/<p>(<div class="table-responsive">)/g, '$1');
  html = html.replace(/(<\/table><\/div>)<\/p>/g, '$1');
  html = html.replace(/<p>(<blockquote>)/g, '$1');
  html = html.replace(/(<\/blockquote>)<\/p>/g, '$1');

  return html;
}

// Confetti Effect
function triggerConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];
  const numberOfPieces = 100;
  const colors = ['#f43f5e', '#fb7185', '#fda4af', '#fecdd3', '#10b981', '#6366f1', '#fbbf24'];

  for (let i = 0; i < numberOfPieces; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      rotation: Math.random() * 360,
      size: Math.random() * 10 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 5 + 3,
      angle: Math.random() * 6 - 3
    });
  }

  let animationFrame;
  let opacity = 1;

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = opacity;

    let stillVisible = false;
    pieces.forEach(p => {
      p.y += p.speed;
      p.x += p.angle;
      p.rotation += 2;

      if (p.y < canvas.height) stillVisible = true;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
    });

    opacity -= 0.008;
    if (opacity > 0 && stillVisible) {
      animationFrame = requestAnimationFrame(update);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame);
    }
  }

  update();
}

// Initialize and UI Handlers
document.addEventListener('DOMContentLoaded', () => {
  // Theme Setup
  if (currentTheme === 'dark') {
    document.body.classList.replace('light-theme', 'dark-theme');
    document.getElementById('theme-icon').textContent = '☀️';
    document.getElementById('theme-text').textContent = 'Giao diện sáng';
  }

  // Event Listeners
  setupNavigation();
  setupCheckin();
  setupThemeToggle();
  setupFlashcards();
  setupSearchAndFilters();
  setupBackupModal();
  
  // Render initial views
  renderDashboard();
  renderCalendar();
  renderCategoryCounts();
});

// Setup Navigation
function setupNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const tab = item.dataset.tab;
      switchTab(tab);
    });
  });

  document.querySelectorAll('.level-progress-card').forEach(card => {
    card.addEventListener('click', () => {
      const cat = card.dataset.cat;
      switchTab(cat);
    });
  });

  document.getElementById('btn-continue-learning').addEventListener('click', () => {
    openLessonById(lastLessonId);
  });

  document.getElementById('btn-quick-flashcard').addEventListener('click', () => {
    switchTab('flashcards');
  });

  document.getElementById('btn-reader-back').addEventListener('click', () => {
    switchTab(currentCategory === 'ALL' ? 'nhap_mon' : currentCategory);
  });

  const mobileBtn = document.getElementById('mobile-menu-btn');
  const sidebar = document.querySelector('.sidebar');
  if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }
}

// Switch Active Tab View
function switchTab(tabId) {
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });

  document.querySelectorAll('.view-panel').forEach(panel => {
    panel.classList.remove('active');
  });

  const titles = {
    dashboard: ["Bảng Điều Khiển Học Tập", "Theo dõi tiến độ, điểm danh và rèn luyện mỗi ngày."],
    nhap_mon: ["🔰 Nhập Môn & Bảng Chữ Cái", "Làm chủ Hiragana, Katakana, Âm ghép & Phát âm."],
    n5: ["📘 JLPT N5 - Sơ Cấp 1", "25 Bài học Minna no Nihongo I & 100 chữ Hán N5."],
    n4: ["📙 JLPT N4 - Sơ Cấp 2", "25 Bài học Minna no Nihongo II & Kính ngữ sơ cấp."],
    n3: ["🏆 JLPT N3 - Trung Cấp", "12 Chuyên đề Shinkanzen Master & Kỹ năng Đọc - Nghe."],
    flashcards: ["🎴 Luyện Phản Xạ Flashcard", "Ghi nhớ nhanh từ vựng, kanji & ngữ pháp."],
    bo_tro: ["📚 Sổ Tay & Tài Liệu Bổ Trợ", "214 Bộ thủ, Cẩm nang Trợ từ & Bảng chia thể."]
  };

  const titleBox = titles[tabId] || ["Danh Sách Bài Học", "Chọn bài học để bắt đầu."];
  document.getElementById('current-view-title').textContent = titleBox[0];
  document.getElementById('current-view-desc').textContent = titleBox[1];

  if (tabId === 'dashboard') {
    document.getElementById('view-dashboard').classList.add('active');
    renderDashboard();
    renderCalendar();
  } else if (tabId === 'flashcards') {
    document.getElementById('view-flashcards').classList.add('active');
    renderFlashcard();
  } else {
    document.getElementById('view-lessons').classList.add('active');
    currentCategory = tabId;
    renderLessonsGrid(tabId);
  }
}

// Setup Check-in
function setupCheckin() {
  const quickBtn = document.getElementById('btn-quick-checkin');
  const dashBtn = document.getElementById('btn-dash-checkin');

  function handleCheckin() {
    const today = getTodayString();
    if (!attendanceDates.includes(today)) {
      attendanceDates.push(today);
      localStorage.setItem(STORAGE_KEYS.ATTENDANCE, JSON.stringify(attendanceDates));
      triggerConfetti();
    }
    updateCheckinUI();
    renderDashboard();
    renderCalendar();
  }

  quickBtn.addEventListener('click', handleCheckin);
  dashBtn.addEventListener('click', handleCheckin);

  updateCheckinUI();
}

function updateCheckinUI() {
  const today = getTodayString();
  const isChecked = attendanceDates.includes(today);
  const streak = calculateStreak();

  document.getElementById('sidebar-streak').textContent = `${streak} ngày`;
  
  const quickBtn = document.getElementById('btn-quick-checkin');
  const quickIcon = document.getElementById('checkin-btn-icon');
  const quickText = document.getElementById('checkin-btn-text');

  const dashBtn = document.getElementById('btn-dash-checkin');

  if (isChecked) {
    quickBtn.classList.add('checked');
    quickIcon.textContent = '✅';
    quickText.textContent = 'Đã điểm danh hôm nay';
    dashBtn.textContent = '✅ Đã Điểm Danh Hôm Nay';
    dashBtn.disabled = true;
    dashBtn.style.opacity = '0.7';
    dashBtn.style.cursor = 'default';
  } else {
    quickBtn.classList.remove('checked');
    quickIcon.textContent = '✨';
    quickText.textContent = 'Điểm danh hôm nay';
    dashBtn.textContent = '✨ Điểm Danh Ngay';
    dashBtn.disabled = false;
    dashBtn.style.opacity = '1';
    dashBtn.style.cursor = 'pointer';
  }
}

// Setup Theme Toggle
function setupThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  toggleBtn.addEventListener('click', () => {
    if (document.body.classList.contains('light-theme')) {
      document.body.classList.replace('light-theme', 'dark-theme');
      document.getElementById('theme-icon').textContent = '☀️';
      document.getElementById('theme-text').textContent = 'Giao diện sáng';
      localStorage.setItem(STORAGE_KEYS.THEME, 'dark');
    } else {
      document.body.classList.replace('dark-theme', 'light-theme');
      document.getElementById('theme-icon').textContent = '🌙';
      document.getElementById('theme-text').textContent = 'Giao diện tối';
      localStorage.setItem(STORAGE_KEYS.THEME, 'light');
    }
  });
}

// Render Dashboard Metrics & Progress
function renderDashboard() {
  const streak = calculateStreak();
  const totalCompleted = completedLessons.size;
  const totalLessons = ALL_LESSONS.length;
  const pct = Math.round((totalCompleted / totalLessons) * 100);

  document.getElementById('dash-streak').textContent = `${streak} Ngày`;
  document.getElementById('dash-streak-sub').textContent = attendanceDates.includes(getTodayString()) 
    ? 'Đã duy trì kỷ luật hôm nay 🔥' 
    : 'Chưa điểm danh hôm nay';

  document.getElementById('dash-completed').textContent = `${totalCompleted} / ${totalLessons}`;
  document.getElementById('dash-completed-sub').textContent = `${pct}% tổng lộ trình`;

  document.getElementById('dash-total-days').textContent = `${attendanceDates.length} Ngày`;
  document.getElementById('dash-mastered-cards').textContent = `${masteredCards.size} / ${FLASHCARDS.length}`;

  // Update Level Bars
  ['nhap_mon', 'n5', 'n4', 'n3'].forEach(catId => {
    const catLessons = ALL_LESSONS.filter(l => l.categoryId === catId);
    const catCompleted = catLessons.filter(l => completedLessons.has(l.id)).length;
    const catPct = catLessons.length ? Math.round((catCompleted / catLessons.length) * 100) : 0;

    const fillEl = document.getElementById(`lp-${catId}-bar`);
    const pctEl = document.getElementById(`lp-${catId}-pct`);
    if (fillEl) fillEl.style.width = `${catPct}%`;
    if (pctEl) pctEl.textContent = `${catPct}%`;
  });
}

// Render Calendar Heatmap
function renderCalendar() {
  const container = document.getElementById('calendar-days-container');
  container.innerHTML = '';

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const todayDate = today.getDate();

  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const cell = document.createElement('div');
    cell.className = 'calendar-day-cell';
    
    if (d === todayDate) cell.classList.add('today');
    if (attendanceDates.includes(dateStr)) cell.classList.add('attended');

    cell.textContent = d;
    cell.title = dateStr;
    container.appendChild(cell);
  }
}

// Render Category Counts in Sidebar
function renderCategoryCounts() {
  LESSON_CATEGORIES.forEach(cat => {
    const catLessons = ALL_LESSONS.filter(l => l.categoryId === cat.id);
    const catCompleted = catLessons.filter(l => completedLessons.has(l.id)).length;
    const el = document.getElementById(`count-${cat.id}`);
    if (el) el.textContent = `${catCompleted}/${catLessons.length}`;
  });
}

// Search and Filters
function setupSearchAndFilters() {
  const searchInput = document.getElementById('lesson-search-input');
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    renderLessonsGrid(currentCategory, query);
  });
}

// Render Lesson Cards
function renderLessonsGrid(catId, searchQuery = '') {
  const container = document.getElementById('lesson-cards-container');
  container.innerHTML = '';

  let filtered = ALL_LESSONS;
  if (catId && catId !== 'ALL') {
    filtered = filtered.filter(l => l.categoryId === catId);
  }

  if (searchQuery) {
    filtered = filtered.filter(l => 
      l.title.toLowerCase().includes(searchQuery) || 
      l.content.toLowerCase().includes(searchQuery)
    );
  }

  if (!filtered.length) {
    container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--color-text-muted);">Không tìm thấy bài học nào phù hợp.</p>';
    return;
  }

  filtered.forEach(lesson => {
    const isCompleted = completedLessons.has(lesson.id);
    const card = document.createElement('div');
    card.className = `lesson-item-card ${isCompleted ? 'completed' : ''}`;
    
    card.innerHTML = `
      <div>
        <div class="lic-top">
          <span class="lic-badge">${lesson.categoryName}</span>
          <span class="lic-status">${isCompleted ? '✅' : '⭕'}</span>
        </div>
        <h4 class="lic-title">${lesson.title}</h4>
      </div>
      <div class="lic-footer">
        <span>📄 ${lesson.filename}</span>
        <strong style="color: var(--color-primary);">Học ngay →</strong>
      </div>
    `;

    card.addEventListener('click', () => {
      openLesson(lesson);
    });

    container.appendChild(card);
  });
}

// Open Lesson in Reader
function openLesson(lesson) {
  currentLesson = lesson;
  lastLessonId = lesson.id;
  localStorage.setItem(STORAGE_KEYS.LAST_LESSON, lesson.id);

  document.querySelectorAll('.view-panel').forEach(panel => panel.classList.remove('active'));
  document.getElementById('view-reader').classList.add('active');

  document.getElementById('current-view-title').textContent = lesson.title;
  document.getElementById('current-view-desc').textContent = `${lesson.categoryName} • ${lesson.filename}`;

  updateCompleteButton();

  const contentBox = document.getElementById('reader-content-box');
  contentBox.innerHTML = parseMarkdown(lesson.content);

  injectTTSButtons(contentBox);

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openLessonById(id) {
  const lesson = ALL_LESSONS.find(l => l.id === id) || ALL_LESSONS[0];
  openLesson(lesson);
}

function updateCompleteButton() {
  const btn = document.getElementById('btn-toggle-complete');
  const icon = document.getElementById('complete-icon');
  const text = document.getElementById('complete-text');

  if (!currentLesson) return;

  const isCompleted = completedLessons.has(currentLesson.id);
  if (isCompleted) {
    btn.classList.add('is-completed');
    icon.textContent = '✅';
    text.textContent = 'Đã hoàn thành';
  } else {
    btn.classList.remove('is-completed');
    icon.textContent = '⭕';
    text.textContent = 'Đánh dấu đã học';
  }
}

// Toggle Complete
document.getElementById('btn-toggle-complete').addEventListener('click', () => {
  if (!currentLesson) return;

  if (completedLessons.has(currentLesson.id)) {
    completedLessons.delete(currentLesson.id);
  } else {
    completedLessons.add(currentLesson.id);
    triggerConfetti();
  }

  localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify([...completedLessons]));
  updateCompleteButton();
  renderCategoryCounts();
  renderDashboard();
});

// Inject Text-To-Speech Buttons into rendered article
function injectTTSButtons(container) {
  const strongs = container.querySelectorAll('strong, blockquote, td');
  const jpRegex = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/;

  strongs.forEach(el => {
    const text = el.innerText.trim();
    if (jpRegex.test(text) && text.length < 100 && !el.querySelector('.speak-btn')) {
      const btn = document.createElement('button');
      btn.className = 'speak-btn';
      btn.textContent = '🔊';
      btn.title = 'Nghe phát âm';
      btn.onclick = (e) => {
        e.stopPropagation();
        speakJapanese(text);
      };
      el.appendChild(btn);
    }
  });
}

// Setup Flashcards
function setupFlashcards() {
  const card = document.getElementById('active-flashcard');
  const prevBtn = document.getElementById('fc-btn-prev');
  const nextBtn = document.getElementById('fc-btn-next');
  const masteredBtn = document.getElementById('fc-btn-mastered');
  const unmasteredBtn = document.getElementById('fc-btn-unmastered');
  const soundBtn = document.getElementById('fc-sound-btn');

  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });

  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentFlashcardIndex = (currentFlashcardIndex - 1 + currentFlashcardList.length) % currentFlashcardList.length;
    renderFlashcard();
  });

  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentFlashcardIndex = (currentFlashcardIndex + 1) % currentFlashcardList.length;
    renderFlashcard();
  });

  soundBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const item = currentFlashcardList[currentFlashcardIndex];
    if (item) speakJapanese(item.front);
  });

  masteredBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const item = currentFlashcardList[currentFlashcardIndex];
    if (item) {
      masteredCards.add(item.front);
      localStorage.setItem(STORAGE_KEYS.MASTERED_CARDS, JSON.stringify([...masteredCards]));
      triggerConfetti();
      currentFlashcardIndex = (currentFlashcardIndex + 1) % currentFlashcardList.length;
      renderFlashcard();
      renderDashboard();
    }
  });

  unmasteredBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const item = currentFlashcardList[currentFlashcardIndex];
    if (item) {
      masteredCards.delete(item.front);
      localStorage.setItem(STORAGE_KEYS.MASTERED_CARDS, JSON.stringify([...masteredCards]));
      currentFlashcardIndex = (currentFlashcardIndex + 1) % currentFlashcardList.length;
      renderFlashcard();
      renderDashboard();
    }
  });

  document.querySelectorAll('.fc-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.fc-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const tag = chip.dataset.tag;
      if (tag === 'ALL') {
        currentFlashcardList = [...FLASHCARDS];
      } else {
        currentFlashcardList = FLASHCARDS.filter(f => f.tag === tag);
      }
      currentFlashcardIndex = 0;
      renderFlashcard();
    });
  });

  // Audio Speed Selector Buttons
  document.querySelectorAll('.speed-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.speed-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentSpeechRate = parseFloat(btn.dataset.speed) || 0.85;
    });
  });

  // Global Keyboard Shortcuts for Flashcards
  window.addEventListener('keydown', (e) => {
    const flashcardsView = document.getElementById('view-flashcards');
    if (!flashcardsView || !flashcardsView.classList.contains('active')) return;
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

    if (e.code === 'Space') {
      e.preventDefault();
      card.click();
    } else if (e.code === 'ArrowLeft') {
      e.preventDefault();
      prevBtn.click();
    } else if (e.code === 'ArrowRight') {
      e.preventDefault();
      nextBtn.click();
    } else if (e.key.toLowerCase() === 's' || e.key.toLowerCase() === 'a') {
      e.preventDefault();
      soundBtn.click();
    } else if (e.key === '1') {
      e.preventDefault();
      unmasteredBtn.click();
    } else if (e.key === '2') {
      e.preventDefault();
      masteredBtn.click();
    }
  });
}

function renderFlashcard() {
  const card = document.getElementById('active-flashcard');
  card.classList.remove('flipped');

  if (!currentFlashcardList.length) return;

  const item = currentFlashcardList[currentFlashcardIndex];

  document.getElementById('fc-tag-display').textContent = item.tag;
  document.getElementById('fc-front-text').textContent = item.front;
  document.getElementById('fc-back-meaning').textContent = item.back;
  document.getElementById('fc-example-jp').textContent = item.example;
  
  document.getElementById('fc-current-index').textContent = currentFlashcardIndex + 1;
  document.getElementById('fc-total-count').textContent = currentFlashcardList.length;
  document.getElementById('fc-mastered-count').textContent = masteredCards.size;
}

// Setup Backup & Restore Modal
function setupBackupModal() {
  const modal = document.getElementById('backup-modal');
  const openBtn = document.getElementById('btn-open-backup-modal');
  const closeBtn = document.getElementById('btn-close-backup-modal');
  const exportBtn = document.getElementById('btn-export-json');
  const importTriggerBtn = document.getElementById('btn-trigger-import');
  const fileInput = document.getElementById('import-json-file');

  openBtn.addEventListener('click', () => modal.classList.add('active'));
  closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  // Export JSON
  exportBtn.addEventListener('click', () => {
    const backupData = {
      version: 1,
      exportDate: new Date().toISOString(),
      attendanceDates: attendanceDates,
      completedLessons: [...completedLessons],
      masteredCards: [...masteredCards],
      theme: currentTheme,
      lastLessonId: lastLessonId
    };

    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `nihongo_master_backup_${getTodayString()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  });

  // Import JSON
  importTriggerBtn.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        if (Array.isArray(data.attendanceDates)) {
          attendanceDates = data.attendanceDates.filter(d => typeof d === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(d));
          localStorage.setItem(STORAGE_KEYS.ATTENDANCE, JSON.stringify(attendanceDates));
        }
        if (Array.isArray(data.completedLessons)) {
          const validLessons = data.completedLessons.filter(id => typeof id === 'string' && id.length < 100);
          completedLessons = new Set(validLessons);
          localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify([...completedLessons]));
        }
        if (Array.isArray(data.masteredCards)) {
          const validCards = data.masteredCards.filter(c => typeof c === 'string' && c.length < 100);
          masteredCards = new Set(validCards);
          localStorage.setItem(STORAGE_KEYS.MASTERED_CARDS, JSON.stringify([...masteredCards]));
        }
        
        triggerConfetti();
        alert('🎉 Khôi phục dữ liệu học tập thành công!');
        modal.classList.remove('active');
        updateCheckinUI();
        renderDashboard();
        renderCalendar();
        renderCategoryCounts();
      } catch (err) {
        alert('⚠️ File sao lưu không hợp lệ.');
      }
    };
    reader.readAsText(file);
  });
}
