/* ══════════════════════════════════════════
   EXPENSE TRACKER — APP.JS
   ══════════════════════════════════════════ */

// ─── DEFAULT CATEGORIES ───
const DEFAULT_CATEGORIES = [
  { id: 'food', emoji: '🍕', name: 'Food', color: '#FF6B6B', type: 'expense' },
  { id: 'transport', emoji: '🚗', name: 'Transport', color: '#4ECDC4', type: 'expense' },
  { id: 'shopping', emoji: '🛍️', name: 'Shopping', color: '#A78BFA', type: 'expense' },
  { id: 'entertainment', emoji: '🎬', name: 'Entertainment', color: '#F472B6', type: 'expense' },
  { id: 'bills', emoji: '💡', name: 'Bills', color: '#FBBF24', type: 'expense' },
  { id: 'health', emoji: '🏥', name: 'Health', color: '#34D399', type: 'expense' },
  { id: 'education', emoji: '📚', name: 'Education', color: '#60A5FA', type: 'expense' },
  { id: 'rent', emoji: '🏠', name: 'Rent', color: '#F97316', type: 'expense' },
  { id: 'groceries', emoji: '🛒', name: 'Groceries', color: '#22D3EE', type: 'expense' },
  { id: 'subscriptions', emoji: '📱', name: 'Subscriptions', color: '#C084FC', type: 'expense' },
  { id: 'gifts', emoji: '🎁', name: 'Gifts', color: '#FB7185', type: 'expense' },
  { id: 'salary', emoji: '💼', name: 'Salary', color: '#00E676', type: 'income' },
  { id: 'stocks', emoji: '📈', name: 'Stocks & Equity', color: '#40C4FF', type: 'investment' },
  { id: 'mutual_funds', emoji: '📊', name: 'Mutual Funds / SIP', color: '#00E676', type: 'investment' },
  { id: 'crypto', emoji: '🪙', name: 'Crypto', color: '#FBBF24', type: 'investment' },
  { id: 'gold', emoji: '🏆', name: 'Gold & Silver', color: '#FFD600', type: 'investment' },
  { id: 'fd_ppf', emoji: '🏦', name: 'FD / PPF / EPF', color: '#A78BFA', type: 'investment' },
  { id: 'real_estate', emoji: '🏢', name: 'Real Estate', color: '#FB7185', type: 'investment' },
  { id: 'others', emoji: '⚡', name: 'Others', color: '#888888', type: 'expense' },
];

// ─── DEFAULT KEYWORDS FOR SMART AUTO-DETECTION ───
const DEFAULT_KEYWORDS = {
  transport: ['uber', 'ola', 'rapido', 'auto', 'metro', 'bus', 'cab', 'train', 'flight', 'petrol', 'fuel', 'diesel', 'parking', 'toll', 'fare', 'bike', 'taxi', 'ride', 'rickshaw', 'irctc', 'fastag', 'indigo', 'air india'],
  food: ['swiggy', 'zomato', 'lunch', 'dinner', 'breakfast', 'snacks', 'coffee', 'tea', 'cafe', 'restaurant', 'burger', 'pizza', 'biryani', 'food', 'meal', 'eat', 'kfc', 'mcdonalds', 'starbucks', 'dominos', 'chai', 'canteen', 'dhaba', 'bakery', 'subway', 'maggi', 'samosa', 'thali', 'mess'],
  groceries: ['blinkit', 'zepto', 'instamart', 'bigbasket', 'grocery', 'groceries', 'vegetables', 'fruits', 'milk', 'supermarket', 'mart', 'ration', 'bread', 'eggs', 'dmart', 'kirana'],
  shopping: ['amazon', 'flipkart', 'myntra', 'clothes', 'shoes', 'mall', 'ajio', 'zara', 'h&m', 'meesho', 'purchase', 'buy', 'dress', 'shirt', 'tshirt', 'jeans', 'nykaa'],
  entertainment: ['movie', 'cinema', 'netflix', 'prime', 'hotstar', 'spotify', 'youtube', 'concert', 'party', 'pub', 'club', 'game', 'gaming', 'bookmyshow', 'theatre'],
  bills: ['electricity', 'wifi', 'internet', 'water', 'gas', 'recharge', 'mobile', 'broadband', 'dth', 'bill', 'current bill', 'cylinder', 'eb bill', 'airtel', 'jio', 'vi', 'bescom'],
  health: ['medicine', 'doctor', 'hospital', 'pharmacy', 'clinic', 'test', 'lab', 'dental', 'gym', 'fitness', '1mg', 'apollo', 'pharmeasy', 'meds', 'tablet', 'consultation'],
  education: ['fees', 'course', 'book', 'tuition', 'udemy', 'college', 'school', 'exam', 'stationary', 'class', 'coursera', 'books'],
  rent: ['rent', 'flat rent', 'house rent', 'maintenance', 'pg', 'room rent'],
  subscriptions: ['subscription', 'subscriptions', 'sub', 'icloud', 'google one', 'apple', 'youtube premium', 'chatgpt', 'openai', 'patreon'],
  gifts: ['gift', 'present', 'donation', 'charity', 'birthday', 'anniversary'],
  salary: ['salary', 'stipend', 'bonus', 'freelance', 'client', 'dividend', 'interest', 'cashback', 'credit', 'received', 'incentive'],
  stocks: ['stocks', 'shares', 'equity', 'zerodha', 'groww', 'angelone', 'upstox', 'nifty', 'sensex', 'demat', 'share market', 'trading'],
  mutual_funds: ['mutual fund', 'mutual funds', 'mf', 'sip', 'index fund', 'etf', 'coin', 'uti', 'parag parikh', 'mirae', 'quant', 'hdfc mf'],
  crypto: ['crypto', 'bitcoin', 'btc', 'eth', 'ethereum', 'solana', 'sol', 'binance', 'wazirx', 'coindcx', 'coinbase', 'doge'],
  gold: ['gold', 'digital gold', 'silver', 'sgb', 'sovereign gold', 'tanishq', 'jewel', 'precious metal'],
  fd_ppf: ['fd', 'fixed deposit', 'rd', 'ppf', 'epf', 'provident fund', 'nps', 'bonds', 'treasury', 'recurring deposit'],
  real_estate: ['real estate', 'property', 'land', 'plot', 'flat purchase', 'apartment'],
  others: ['other', 'misc']
};

// ─── BRAND DOMAINS FOR FAVICONS ───
const BRAND_DOMAINS = {
  rapido: 'rapido.bike',
  uber: 'uber.com',
  ola: 'olacabs.com',
  swiggy: 'swiggy.com',
  zomato: 'zomato.com',
  blinkit: 'blinkit.com',
  zepto: 'zeptonow.com',
  instamart: 'swiggy.com',
  bigbasket: 'bigbasket.com',
  dmart: 'dmart.in',
  amazon: 'amazon.in',
  flipkart: 'flipkart.com',
  myntra: 'myntra.com',
  ajio: 'ajio.com',
  zara: 'zara.com',
  meesho: 'meesho.com',
  nykaa: 'nykaa.com',
  netflix: 'netflix.com',
  prime: 'primevideo.com',
  hotstar: 'hotstar.com',
  spotify: 'spotify.com',
  youtube: 'youtube.com',
  bookmyshow: 'bookmyshow.com',
  airtel: 'airtel.in',
  jio: 'jio.com',
  vi: 'myvi.in',
  bescom: 'bescom.karnataka.gov.in',
  apollo: 'apollopharmacy.in',
  pharmeasy: 'pharmeasy.in',
  '1mg': '1mg.com',
  udemy: 'udemy.com',
  coursera: 'coursera.com',
  chatgpt: 'chatgpt.com',
  openai: 'openai.com',
  zerodha: 'zerodha.com',
  groww: 'groww.in',
  angelone: 'angelone.in',
  upstox: 'upstox.com',
  binance: 'binance.com',
  wazirx: 'wazirx.com',
  coindcx: 'coindcx.com',
  coinbase: 'coinbase.com',
  kfc: 'kfc.co.in',
  mcdonalds: 'mcdonaldsindia.com',
  starbucks: 'starbucks.in',
  dominos: 'dominos.co.in',
  subway: 'subway.com',
  irctc: 'irctc.co.in',
  fastag: 'fastag.ihmcl.com',
  indigo: 'goindigo.in',
  apple: 'apple.com',
  google: 'google.com'
};

function getTransactionIcon(t, cat) {
  const note = (t.note || '').toLowerCase();
  for (const [brand, domain] of Object.entries(BRAND_DOMAINS)) {
    if (note.includes(brand)) {
      return `<img src="https://www.google.com/s2/favicons?domain=${domain}&sz=64" alt="${brand}" class="txn-favicon" onerror="this.outerHTML='<span>${cat.emoji}</span>'">`;
    }
  }
  return `<span>${cat.emoji}</span>`;
}

// ─── STATE ───
let state = {
  settings: {
    name: 'papi',
    theme: 'dark',
    monthlyBudget: 5000,
    cycleStartDay: 1,
    categories: JSON.parse(JSON.stringify(DEFAULT_CATEGORIES)),
    keywords: JSON.parse(JSON.stringify(DEFAULT_KEYWORDS)),
  },
  transactions: [],
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear(),
  currentView: 'home-view',
  statsTimePeriod: 'month',
  historyFilter: 'all',
};

// ─── STORAGE ───
const STORAGE_KEY = 'papi_expense_tracker';

function saveData() {
  const data = {
    settings: state.settings,
    transactions: state.transactions,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      if (data.settings) {
        state.settings = { ...state.settings, ...data.settings };
      }
      if (!state.settings.keywords) {
        state.settings.keywords = JSON.parse(JSON.stringify(DEFAULT_KEYWORDS));
      } else {
        for (const [k, v] of Object.entries(DEFAULT_KEYWORDS)) {
          if (!state.settings.keywords[k]) state.settings.keywords[k] = [...v];
        }
      }
      if (state.settings.categories) {
        // Ensure default investment categories are present
        const defaultInvestCats = DEFAULT_CATEGORIES.filter(c => c.type === 'investment');
        defaultInvestCats.forEach(invCat => {
          if (!state.settings.categories.find(c => c.id === invCat.id)) {
            state.settings.categories.push(invCat);
          }
        });
      }
      if (data.transactions) state.transactions = data.transactions;
    } else {
      state.settings.keywords = JSON.parse(JSON.stringify(DEFAULT_KEYWORDS));
    }
  } catch (e) {
    console.warn('Failed to load data:', e);
    state.settings.keywords = JSON.parse(JSON.stringify(DEFAULT_KEYWORDS));
  }
}

// ─── UTILITIES ───
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function formatCurrency(amount) {
  const abs = Math.abs(amount);
  if (abs >= 100000) return '₹' + (abs / 100000).toFixed(1) + 'L';
  if (abs >= 1000) return '₹' + abs.toLocaleString('en-IN', { maximumFractionDigits: 2 });
  return '₹' + abs.toFixed(abs % 1 === 0 ? 0 : 2);
}

function formatCurrencyFull(amount) {
  const abs = Math.abs(amount);
  return '₹' + abs.toLocaleString('en-IN', { maximumFractionDigits: 2 });
}

function getGreeting() {
  const h = new Date().getHours();
  if (h < 5) return 'GOOD NIGHT';
  if (h < 12) return 'GOOD MORNING';
  if (h < 17) return 'GOOD AFTERNOON';
  if (h < 21) return 'GOOD EVENING';
  return 'GOOD NIGHT';
}

function getMonthName(m) {
  return ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'][m];
}

function getShortMonth(m) {
  return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][m];
}

function formatTime(dateStr) {
  const d = new Date(dateStr);
  let h = d.getHours();
  const m = d.getMinutes().toString().padStart(2, '0');
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  return `${h.toString().padStart(2, '0')}:${m} ${ampm}`;
}

function getDateLabel(dateStr) {
  const d = new Date(dateStr);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (d.toDateString() === today.toDateString()) return 'TODAY';
  if (d.toDateString() === yesterday.toDateString()) return 'YESTERDAY';

  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }).toUpperCase();
}

function getCategoryById(id) {
  return state.settings.categories.find(c => c.id === id) || { emoji: '⚡', name: 'Others', color: '#888', type: 'expense' };
}

function getTransactionsForMonth(m, y) {
  const cycle = state.settings.cycleStartDay;
  let start, end;
  if (cycle === 1) {
    start = new Date(y, m, 1);
    end = new Date(y, m + 1, 0, 23, 59, 59, 999);
  } else {
    start = new Date(y, m, cycle);
    const nextM = m + 1 > 11 ? 0 : m + 1;
    const nextY = m + 1 > 11 ? y + 1 : y;
    end = new Date(nextY, nextM, cycle - 1, 23, 59, 59, 999);
  }
  return state.transactions.filter(t => {
    const d = new Date(t.date);
    return d >= start && d <= end;
  });
}

function sumByType(txns, type) {
  return txns.filter(t => t.type === type).reduce((s, t) => s + t.amount, 0);
}

// ─── TOAST ───
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('visible');
  setTimeout(() => toast.classList.remove('visible'), 2500);
}

// ─── NAVIGATION ───
function switchView(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(viewId).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const navBtn = document.querySelector(`.nav-item[data-view="${viewId}"]`);
  if (navBtn) navBtn.classList.add('active');
  state.currentView = viewId;
  renderCurrentView();
}

function renderCurrentView() {
  switch (state.currentView) {
    case 'home-view': renderHome(); break;
    case 'stats-view': renderStats(); break;
    case 'history-view': renderHistory(); break;
    case 'settings-view': renderSettings(); break;
  }
}

// ─── MONTH NAVIGATION ───
function updateMonthLabels() {
  const label = `${getShortMonth(state.currentMonth)} ${state.currentYear}`;
  const fullLabel = `${getMonthName(state.currentMonth)} ${state.currentYear}`;
  document.getElementById('home-month-label').textContent = label;
  document.getElementById('stats-month-label').textContent = label;
  document.getElementById('history-month-label').textContent = label;
  document.getElementById('balance-month').textContent = fullLabel;
  document.getElementById('breakdown-month').textContent = fullLabel;
  const invMonth = document.getElementById('invest-breakdown-month');
  if (invMonth) invMonth.textContent = fullLabel;
}

function prevMonth() {
  state.currentMonth--;
  if (state.currentMonth < 0) { state.currentMonth = 11; state.currentYear--; }
  updateMonthLabels();
  renderCurrentView();
}

function nextMonth() {
  state.currentMonth++;
  if (state.currentMonth > 11) { state.currentMonth = 0; state.currentYear++; }
  updateMonthLabels();
  renderCurrentView();
}

// ─── HOME VIEW ───
function renderHome() {
  const txns = getTransactionsForMonth(state.currentMonth, state.currentYear);
  const income = sumByType(txns, 'income');
  const expense = sumByType(txns, 'expense');
  const invest = sumByType(txns, 'investment');
  const net = income - expense - invest;

  // Greeting
  document.getElementById('greeting-label').textContent = getGreeting();
  document.getElementById('greeting-name').textContent = state.settings.name;

  // Balance
  const sign = net < 0 ? '- ' : '';
  document.getElementById('net-balance').textContent = `₹ ${sign}${formatCurrency(Math.abs(net)).slice(1)}`;
  document.getElementById('home-income').textContent = formatCurrency(income);
  document.getElementById('home-expense').textContent = formatCurrency(expense);
  document.getElementById('home-invest').textContent = formatCurrency(invest);

  // Budget
  const budget = state.settings.monthlyBudget;
  const spent = expense;
  const pct = budget > 0 ? Math.min((spent / budget) * 100, 100) : 0;
  const remaining = budget - spent;
  document.getElementById('budget-amounts').textContent = `${formatCurrency(spent)} / ${formatCurrency(budget)}`;
  document.getElementById('budget-progress').style.width = `${pct}%`;
  document.getElementById('budget-progress').style.background = pct > 90 ? 'var(--expense)' : pct > 70 ? '#FBBF24' : 'var(--accent)';
  const remEl = document.getElementById('budget-remaining');
  remEl.textContent = remaining >= 0 ? `${formatCurrency(remaining)} remaining` : `${formatCurrency(Math.abs(remaining))} over budget!`;
  remEl.className = 'budget-remaining' + (remaining < 0 ? ' over' : '');

  // Recent transactions (latest 5)
  const sorted = [...txns].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);
  const container = document.getElementById('recent-transactions');

  if (sorted.length === 0) {
    container.innerHTML = '<div class="empty-state">No transactions yet. Tap + to add one!</div>';
  } else {
    container.innerHTML = sorted.map(t => renderTransactionItem(t)).join('');
    setupSwipeToDelete(container);
  }
}

function renderTransactionItem(t) {
  const cat = getCategoryById(t.category);
  const prefix = t.type === 'income' ? '+' : t.type === 'investment' ? '↗ ' : '-';
  const iconHtml = getTransactionIcon(t, cat);
  return `
    <div class="txn-swipe-wrap" data-id="${t.id}">
      <div class="txn-delete-bg">🗑 Delete</div>
      <div class="txn-item" data-id="${t.id}">
        <div class="txn-icon" style="border-color:${cat.color}40">${iconHtml}</div>
        <div class="txn-details">
          <div class="txn-name">${t.note || cat.name}</div>
          <div class="txn-meta">
            <span class="txn-category-tag">${cat.name.toUpperCase()}</span>
            <span>${t.method || 'Cash'}</span>
          </div>
        </div>
        <div class="txn-right">
          <div class="txn-amount ${t.type}">${prefix}${formatCurrency(t.amount)}</div>
          <div class="txn-time">${formatTime(t.date)}</div>
        </div>
      </div>
    </div>
  `;
}

function setupSwipeToDelete(container) {
  container.querySelectorAll('.txn-swipe-wrap').forEach(wrap => {
    const txnItem = wrap.querySelector('.txn-item');
    const deleteBtn = wrap.querySelector('.txn-delete-bg');
    const id = wrap.dataset.id;
    if (!txnItem) return;

    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let isSwiping = false;
    let isOpen = false;

    if (deleteBtn) {
      deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        deleteTransactionById(id);
      });
    }

    wrap.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      currentX = 0;
      isSwiping = false;
      txnItem.style.transition = 'none';
    }, { passive: true });

    wrap.addEventListener('touchmove', (e) => {
      const touchX = e.touches[0].clientX;
      const touchY = e.touches[0].clientY;
      const dx = touchX - startX;
      const dy = touchY - startY;

      if (!isSwiping && Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy)) {
        isSwiping = true;
      }

      if (isSwiping) {
        const base = isOpen ? -85 : 0;
        const targetX = base + dx;
        currentX = Math.min(10, Math.max(targetX, -160));
        txnItem.style.transform = `translateX(${currentX}px)`;
      }
    }, { passive: true });

    wrap.addEventListener('touchend', () => {
      txnItem.style.transition = 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)';
      if (isSwiping) {
        if (currentX < -130) {
          txnItem.style.transform = 'translateX(-100%)';
          setTimeout(() => deleteTransactionById(id), 220);
          return;
        }
        if (currentX < -40) {
          txnItem.style.transform = 'translateX(-85px)';
          isOpen = true;
        } else {
          txnItem.style.transform = 'translateX(0)';
          isOpen = false;
        }
      } else {
        if (isOpen) {
          txnItem.style.transform = 'translateX(0)';
          isOpen = false;
        } else {
          openEditModal(id);
        }
      }
    });

    txnItem.addEventListener('click', (e) => {
      if (isOpen) {
        e.stopPropagation();
        txnItem.style.transition = 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)';
        txnItem.style.transform = 'translateX(0)';
        isOpen = false;
      }
    });
  });
}

function deleteTransactionById(id) {
  state.transactions = state.transactions.filter(t => t.id !== id);
  saveData();
  showToast('Transaction deleted');
  renderCurrentView();
}

// ─── STATS VIEW ───
let donutChart = null;
let trendChart = null;

function renderStats() {
  const txns = getTransactionsForMonth(state.currentMonth, state.currentYear);
  const income = sumByType(txns, 'income');
  const expense = sumByType(txns, 'expense');
  const invest = sumByType(txns, 'investment');
  const totalOut = expense + invest;

  // Summary cards
  document.getElementById('stats-income').textContent = formatCurrency(income);
  document.getElementById('stats-expense').textContent = formatCurrency(expense);
  document.getElementById('stats-invest').textContent = formatCurrency(invest);

  // Donut center
  document.getElementById('donut-amount').textContent = formatCurrency(totalOut);
  const budget = state.settings.monthlyBudget;
  const budgetPct = budget > 0 ? Math.round((totalOut / budget) * 100) : 0;
  document.getElementById('donut-budget').textContent = `${budgetPct}% of budget`;

  // Net savings
  const netSavings = income - expense - invest;
  const savingsEl = document.getElementById('net-savings');
  savingsEl.textContent = `${netSavings < 0 ? '-' : ''}${formatCurrency(Math.abs(netSavings))}`;
  savingsEl.className = 'savings-amount ' + (netSavings >= 0 ? 'positive' : 'negative');
  const savingsRate = income > 0 ? Math.round((netSavings / income) * 100) : 0;
  document.getElementById('savings-rate').textContent = `${Math.max(0, savingsRate)}%`;

  // Donut chart
  renderDonutChart(txns);

  // Trend chart
  renderTrendChart();

  // Breakdown
  renderBreakdown(txns);
  renderInvestmentBreakdown(txns);
}

function renderDonutChart(txns) {
  const expenseTxns = txns.filter(t => t.type === 'expense' || t.type === 'investment');
  const categoryMap = {};
  expenseTxns.forEach(t => {
    const cat = getCategoryById(t.category);
    if (!categoryMap[t.category]) categoryMap[t.category] = { name: cat.name, color: cat.color, total: 0 };
    categoryMap[t.category].total += t.amount;
  });

  const entries = Object.values(categoryMap).sort((a, b) => b.total - a.total);
  const labels = entries.map(e => e.name);
  const data = entries.map(e => e.total);
  const colors = entries.map(e => e.color);

  if (data.length === 0) {
    labels.push('No Data');
    data.push(1);
    colors.push('#333');
  }

  // Legend
  const legendEl = document.getElementById('donut-legend');
  legendEl.innerHTML = entries.map(e =>
    `<div class="legend-item">
      <span class="legend-dot" style="background:${e.color}"></span>
      <span>${e.name}</span>
      <span class="legend-amount">${formatCurrency(e.total)}</span>
    </div>`
  ).join('');

  const ctx = document.getElementById('donut-chart').getContext('2d');
  if (donutChart) donutChart.destroy();
  donutChart = new Chart(ctx, {
    type: 'doughnut',
    data: { labels, datasets: [{ data, backgroundColor: colors, borderWidth: 0, cutout: '70%' }] },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: { legend: { display: false }, tooltip: { enabled: true } },
      animation: { animateRotate: true, duration: 800 },
    },
  });
}

function renderTrendChart() {
  const months = [];
  const incomeData = [];
  const expenseData = [];

  for (let i = 5; i >= 0; i--) {
    let m = state.currentMonth - i;
    let y = state.currentYear;
    if (m < 0) { m += 12; y--; }
    months.push(getShortMonth(m));
    const txns = getTransactionsForMonth(m, y);
    incomeData.push(sumByType(txns, 'income'));
    expenseData.push(sumByType(txns, 'expense'));
  }

  const ctx = document.getElementById('trend-chart').getContext('2d');
  if (trendChart) trendChart.destroy();
  trendChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: months,
      datasets: [
        {
          label: 'Income',
          data: incomeData,
          borderColor: '#00E676',
          backgroundColor: 'rgba(0,230,118,0.1)',
          tension: 0.4,
          fill: false,
          pointRadius: 5,
          pointBackgroundColor: '#00E676',
          pointBorderColor: '#000',
          pointBorderWidth: 2,
          borderWidth: 2.5,
        },
        {
          label: 'Expenses',
          data: expenseData,
          borderColor: '#FF5252',
          backgroundColor: 'rgba(255,82,82,0.1)',
          tension: 0.4,
          fill: false,
          pointRadius: 5,
          pointBackgroundColor: '#FF5252',
          pointBorderColor: '#000',
          pointBorderWidth: 2,
          borderWidth: 2.5,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: { color: 'rgba(255,255,255,0.05)' },
          ticks: { color: '#888', font: { size: 11, family: 'Inter' } },
        },
        y: {
          grid: { color: 'rgba(255,255,255,0.05)' },
          ticks: {
            color: '#888',
            font: { size: 11, family: 'JetBrains Mono' },
            callback: v => '₹' + (v >= 1000 ? (v / 1000) + 'k' : v),
          },
          beginAtZero: true,
        },
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#1a1a1a',
          borderColor: 'rgba(255,255,255,0.1)',
          borderWidth: 1,
          titleFont: { family: 'Inter' },
          bodyFont: { family: 'JetBrains Mono' },
          callbacks: { label: ctx => `${ctx.dataset.label}: ${formatCurrency(ctx.parsed.y)}` },
        },
      },
      animation: { duration: 800 },
    },
  });
}

function renderBreakdown(txns) {
  const expenseTxns = txns.filter(t => t.type === 'expense');
  const total = expenseTxns.reduce((s, t) => s + t.amount, 0);
  const categoryMap = {};
  expenseTxns.forEach(t => {
    const cat = getCategoryById(t.category);
    if (!categoryMap[t.category]) categoryMap[t.category] = { name: cat.name, color: cat.color, total: 0 };
    categoryMap[t.category].total += t.amount;
  });

  const entries = Object.values(categoryMap).sort((a, b) => b.total - a.total);
  const container = document.getElementById('breakdown-list');

  if (entries.length === 0) {
    container.innerHTML = '<div class="empty-state" style="padding:20px 0">No expenses this month</div>';
    return;
  }

  container.innerHTML = entries.map(e => {
    const pct = total > 0 ? Math.round((e.total / total) * 100) : 0;
    return `
      <div>
        <div class="breakdown-item">
          <span class="breakdown-dot" style="background:${e.color}"></span>
          <span class="breakdown-name">${e.name}</span>
          <span class="breakdown-amount">${formatCurrency(e.total)}</span>
          <span class="breakdown-pct">${pct}%</span>
        </div>
        <div class="breakdown-bar-track">
          <div class="breakdown-bar-fill" style="width:${pct}%;background:${e.color}"></div>
        </div>
      </div>
    `;
  }).join('');
}

function renderInvestmentBreakdown(txns) {
  const investTxns = txns.filter(t => t.type === 'investment');
  const total = investTxns.reduce((s, t) => s + t.amount, 0);
  const categoryMap = {};
  investTxns.forEach(t => {
    const cat = getCategoryById(t.category);
    if (!categoryMap[t.category]) categoryMap[t.category] = { name: cat.name, color: cat.color, emoji: cat.emoji, total: 0 };
    categoryMap[t.category].total += t.amount;
  });

  const entries = Object.values(categoryMap).sort((a, b) => b.total - a.total);
  const container = document.getElementById('invest-breakdown-list');
  if (!container) return;

  if (entries.length === 0) {
    container.innerHTML = '<div class="empty-state" style="padding:20px 0">No investments recorded for this month. Tap + to add SIP, Stocks, Crypto or Gold!</div>';
    return;
  }

  container.innerHTML = entries.map(e => {
    const pct = total > 0 ? Math.round((e.total / total) * 100) : 0;
    return `
      <div>
        <div class="breakdown-item">
          <span class="breakdown-dot" style="background:${e.color}"></span>
          <span class="breakdown-name">${e.emoji} ${e.name}</span>
          <span class="breakdown-amount" style="color:var(--invest)">${formatCurrency(e.total)}</span>
          <span class="breakdown-pct">${pct}%</span>
        </div>
        <div class="breakdown-bar-track">
          <div class="breakdown-bar-fill" style="width:${pct}%;background:${e.color}"></div>
        </div>
      </div>
    `;
  }).join('');
}

// ─── HISTORY VIEW ───
function renderHistory() {
  const txns = getTransactionsForMonth(state.currentMonth, state.currentYear);
  let filtered = txns;

  if (state.historyFilter !== 'all') {
    filtered = txns.filter(t => t.type === state.historyFilter);
  }

  // Also support category-based filters
  const catFilter = state.historyFilter;
  const isCategoryFilter = !['all', 'income', 'expense', 'investment'].includes(catFilter);
  if (isCategoryFilter) {
    filtered = txns.filter(t => t.category === catFilter);
  }

  // Update filter pills — add category pills dynamically
  renderFilterPills(txns);

  const sorted = [...filtered].sort((a, b) => new Date(b.date) - new Date(a.date));
  const container = document.getElementById('history-transactions');

  if (sorted.length === 0) {
    container.innerHTML = '<div class="empty-state">No transactions for this period.</div>';
    return;
  }

  // Group by date
  const groups = {};
  sorted.forEach(t => {
    const label = getDateLabel(t.date);
    if (!groups[label]) groups[label] = [];
    groups[label].push(t);
  });

  let html = '';
  Object.entries(groups).forEach(([label, items]) => {
    html += `<div class="date-group-label">${label}</div>`;
    html += items.map(t => renderTransactionItem(t)).join('');
  });

  container.innerHTML = html;
  setupSwipeToDelete(container);
}

function renderFilterPills(txns) {
  const container = document.getElementById('history-filters');
  const usedCategories = [...new Set(txns.map(t => t.category))];

  let pills = [
    { filter: 'all', label: 'ALL' },
    { filter: 'income', label: 'INCOME' },
    { filter: 'expense', label: 'EXPENSE' },
    { filter: 'investment', label: 'INVESTMENT' },
  ];

  // Add category pills
  usedCategories.forEach(catId => {
    const cat = getCategoryById(catId);
    if (!pills.find(p => p.filter === catId)) {
      pills.push({ filter: catId, label: cat.name.toUpperCase() });
    }
  });

  container.innerHTML = pills.map(p =>
    `<button class="filter-pill${state.historyFilter === p.filter ? ' active' : ''}" data-filter="${p.filter}">${p.label}</button>`
  ).join('');

  container.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      state.historyFilter = btn.dataset.filter;
      renderHistory();
    });
  });
}

// ─── SETTINGS VIEW ───
function renderSettings() {
  document.getElementById('setting-theme').value = state.settings.theme;
  document.getElementById('setting-name').value = state.settings.name;
  document.getElementById('setting-budget').value = state.settings.monthlyBudget;
  document.getElementById('setting-cycle').value = state.settings.cycleStartDay;
  document.getElementById('category-count').textContent = `${state.settings.categories.length} Categories`;
  
  const mDesc = document.getElementById('export-month-desc');
  if (mDesc) mDesc.textContent = `${getMonthName(state.currentMonth)} ${state.currentYear} · CSV`;
  const yDesc = document.getElementById('export-year-desc');
  if (yDesc) yDesc.textContent = `${state.currentYear} · All months · CSV`;

  renderCategoriesList();
  renderKeywordsList();
}

function renderCategoriesList() {
  const container = document.getElementById('categories-list');
  container.innerHTML = state.settings.categories.map(c =>
    `<div class="category-item">
      <span class="cat-emoji">${c.emoji}</span>
      <span class="cat-name">${c.name}</span>
      <span class="cat-type-label">${c.type}</span>
      <button class="cat-remove-btn" data-id="${c.id}" title="Remove">×</button>
    </div>`
  ).join('');

  container.querySelectorAll('.cat-remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (state.settings.categories.length <= 1) {
        showToast('Need at least one category');
        return;
      }
      state.settings.categories = state.settings.categories.filter(c => c.id !== btn.dataset.id);
      saveData();
      renderCategoriesList();
      document.getElementById('category-count').textContent = `${state.settings.categories.length} Categories`;
      showToast('Category removed');
    });
  });
}

function applyTheme(theme) {
  const mode = theme === 'light' ? 'light' : 'dark';
  state.settings.theme = mode;
  document.documentElement.setAttribute('data-theme', mode);
  if (mode === 'light') {
    document.body.classList.add('light-theme');
  } else {
    document.body.classList.remove('light-theme');
  }
  const themeSelect = document.getElementById('setting-theme');
  if (themeSelect && themeSelect.value !== mode) {
    themeSelect.value = mode;
  }
}

function saveSettings() {
  state.settings.name = document.getElementById('setting-name').value || 'papi';
  const chosenTheme = document.getElementById('setting-theme').value;
  applyTheme(chosenTheme);
  state.settings.monthlyBudget = parseFloat(document.getElementById('setting-budget').value) || 5000;
  state.settings.cycleStartDay = parseInt(document.getElementById('setting-cycle').value) || 1;
  saveData();
  showToast('Settings saved!');
  renderCurrentView();
}

function addCategory() {
  const emoji = document.getElementById('new-cat-emoji').value || '🏷️';
  const name = document.getElementById('new-cat-name').value.trim();
  const color = document.getElementById('new-cat-color').value;
  const type = document.getElementById('new-cat-type').value;

  if (!name) { showToast('Enter a category name'); return; }
  if (state.settings.categories.find(c => c.name.toLowerCase() === name.toLowerCase())) {
    showToast('Category already exists');
    return;
  }

  state.settings.categories.push({
    id: name.toLowerCase().replace(/\s+/g, '_'),
    emoji, name, color, type,
  });

  saveData();
  document.getElementById('new-cat-emoji').value = '';
  document.getElementById('new-cat-name').value = '';
  renderCategoriesList();
  document.getElementById('category-count').textContent = `${state.settings.categories.length} Categories`;
  showToast('Category added!');
}

// ─── UTILITIES (DATE FORMATTING) ───
function formatForDateTimeLocal(d) {
  const pad = n => n.toString().padStart(2, '0');
  const year = d.getFullYear();
  const month = pad(d.getMonth() + 1);
  const day = pad(d.getDate());
  const hours = pad(d.getHours());
  const mins = pad(d.getMinutes());
  return `${year}-${month}-${day}T${hours}:${mins}`;
}

// ─── SMART NATURAL LANGUAGE PARSER ───
function parseSmartText(rawText) {
  if (!rawText || !rawText.trim()) return null;
  let text = rawText.trim();
  const result = {
    amount: null,
    date: null,
    category: null,
    method: null,
    type: 'expense',
    note: ''
  };

  const now = new Date();

  // 1. Check Date (yesterday, today, tomorrow, N days ago)
  if (/\bday before yesterday\b/i.test(text)) {
    const d = new Date(now);
    d.setDate(d.getDate() - 2);
    result.date = d;
    text = text.replace(/\bday before yesterday\b/i, ' ');
  } else if (/\byesterday\b/i.test(text)) {
    const d = new Date(now);
    d.setDate(d.getDate() - 1);
    result.date = d;
    text = text.replace(/\byesterday\b/i, ' ');
  } else if (/\btoday\b/i.test(text)) {
    result.date = new Date(now);
    text = text.replace(/\btoday\b/i, ' ');
  } else if (/\btomorrow\b/i.test(text)) {
    const d = new Date(now);
    d.setDate(d.getDate() + 1);
    result.date = d;
    text = text.replace(/\btomorrow\b/i, ' ');
  } else {
    const daysAgoMatch = text.match(/\b(\d+)\s*(?:days?|d)\s*ago\b/i);
    if (daysAgoMatch) {
      const days = parseInt(daysAgoMatch[1], 10);
      const d = new Date(now);
      d.setDate(d.getDate() - days);
      result.date = d;
      text = text.replace(daysAgoMatch[0], ' ');
    }
  }

  // 2. Check Payment Method (CASH & UPI ONLY)
  if (/\b(?:cash|nakad)\b/i.test(text)) {
    result.method = 'Cash';
    text = text.replace(/\b(?:cash|nakad)\b/i, ' ');
  } else if (/\b(?:upi|online|gpay|phonepe|paytm|scan|qr|netbanking|card|bank)\b/i.test(text)) {
    result.method = 'UPI';
    text = text.replace(/\b(?:upi|online|gpay|phonepe|paytm|scan|qr|netbanking|card|bank)\b/i, ' ');
  }

  // 3. Check Amount (e.g. 50, 200, 50k, 1.5k, ₹50, rs 50, 50rs)
  const kMatch = text.match(/(?:₹|rs\.?|inr)?\s*(\d+(?:\.\d+)?)\s*(k|l)\b/i);
  if (kMatch) {
    let num = parseFloat(kMatch[1]);
    if (kMatch[2].toLowerCase() === 'k') num *= 1000;
    if (kMatch[2].toLowerCase() === 'l') num *= 100000;
    result.amount = num;
    text = text.replace(kMatch[0], ' ');
  } else {
    const amtMatch = text.match(/(?:₹|rs\.?|inr)?\s*(\d+(?:\.\d+)?)\s*(?:rs\.?|inr)?\b/i);
    if (amtMatch && !isNaN(parseFloat(amtMatch[1]))) {
      result.amount = parseFloat(amtMatch[1]);
      text = text.replace(amtMatch[0], ' ');
    }
  }

  // 4. Check Type (income / investment / expense)
  if (/\b(?:salary|stipend|bonus|freelance|earnings|interest|dividend|income|received|credited)\b/i.test(text)) {
    result.type = 'income';
  } else if (/\b(?:invest|investment|stocks|shares|mutual fund|sip|crypto|fd|gold)\b/i.test(text)) {
    result.type = 'investment';
  }

  // 5. Check Category from keywords
  const cleaned = text.replace(/[^a-zA-Z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
  const lowerWords = cleaned.toLowerCase().split(' ').filter(Boolean);

  const keywords = (state.settings && state.settings.keywords) || DEFAULT_KEYWORDS;
  let detectedCat = null;

  // First check exact keyword matches in word list
  for (const word of lowerWords) {
    for (const [catId, words] of Object.entries(keywords)) {
      if (words.some(kw => kw.toLowerCase() === word)) {
        detectedCat = catId;
        break;
      }
    }
    if (detectedCat) break;
  }

  // If not found, check partial/substring matches
  if (!detectedCat) {
    for (const [catId, words] of Object.entries(keywords)) {
      if (words.some(kw => cleaned.toLowerCase().includes(kw.toLowerCase()))) {
        detectedCat = catId;
        break;
      }
    }
  }

  // Also match category names directly
  if (!detectedCat) {
    for (const cat of (state.settings.categories || DEFAULT_CATEGORIES)) {
      if (lowerWords.includes(cat.id.toLowerCase()) || lowerWords.includes(cat.name.toLowerCase())) {
        detectedCat = cat.id;
        break;
      }
    }
  }

  result.category = detectedCat || 'others';  // fallback to "others" for unknown items
  if (detectedCat) {
    const catObj = getCategoryById(detectedCat);
    if (catObj && catObj.type) {
      result.type = catObj.type;
    }
  }
  result.note = cleaned || (detectedCat ? (getCategoryById(detectedCat).name) : '');

  return result;
}

// ─── ADD TRANSACTION MODAL ───
let currentType = 'expense';
let selectedCategory = 'food';
let selectedMethod = 'UPI';

function openAddModal(presetType = 'expense', presetCategory = null) {
  currentType = (presetType === 'investment' || presetType === 'income') ? presetType : 'expense';
  if (presetCategory) {
    selectedCategory = presetCategory;
  } else if (currentType === 'investment') {
    selectedCategory = 'mutual_funds';
  } else if (currentType === 'income') {
    selectedCategory = 'salary';
  } else {
    selectedCategory = 'food';
  }
  selectedMethod = 'UPI'; // STRICTLY Cash & UPI only, default UPI

  const modal = document.getElementById('add-modal');
  modal.classList.remove('hidden');

  // Set default datetime to now
  const now = new Date();
  document.getElementById('txn-datetime').value = formatForDateTimeLocal(now);
  document.getElementById('txn-amount').value = '';
  document.getElementById('txn-note').value = '';

  const smartInput = document.getElementById('smart-text-input');
  if (smartInput) {
    smartInput.value = '';
  }
  const preview = document.getElementById('smart-preview');
  if (preview) {
    preview.classList.add('hidden');
  }

  document.querySelectorAll('.amount-pill').forEach(p => p.classList.remove('active'));

  renderModalTypeButtons();
  renderCategoryGrid();
  renderMethodButtons();

  // Always start with category grid hidden, chip visible
  const catGrid = document.getElementById('category-grid');
  if (catGrid) catGrid.style.display = 'none';
  const toggleBtn = document.getElementById('toggle-cat-grid-btn');
  if (toggleBtn) toggleBtn.classList.remove('open');

  setTimeout(() => {
    if (smartInput) smartInput.focus();
  }, 100);
}

function closeAddModal() {
  document.getElementById('add-modal').classList.add('hidden');
}

function renderModalTypeButtons() {
  document.querySelectorAll('#add-modal .type-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.type === currentType);
  });
  renderCategoryGrid();
}

function renderCategoryGrid() {
  const grid = document.getElementById('category-grid');
  const cats = state.settings.categories.filter(c => {
    if (currentType === 'income') return c.type === 'income' || c.id === 'others';
    if (currentType === 'investment') return c.type === 'investment' || c.id === 'others';
    return c.type === 'expense' || c.id === 'others';
  });

  grid.innerHTML = cats.map(c =>
    `<button type="button" class="cat-btn${selectedCategory === c.id ? ' active' : ''}" data-id="${c.id}">${c.emoji} ${c.name}</button>`
  ).join('');

  grid.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedCategory = btn.dataset.id;
      grid.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateCatChip();
      // Auto-collapse grid after selection
      grid.style.display = 'none';
      const toggleBtn = document.getElementById('toggle-cat-grid-btn');
      if (toggleBtn) toggleBtn.classList.remove('open');
    });
  });

  // Auto-select first if current selection not visible
  if (!cats.find(c => c.id === selectedCategory) && cats.length > 0) {
    selectedCategory = cats[0].id;
    const first = grid.querySelector('.cat-btn');
    if (first) first.classList.add('active');
  }

  updateCatChip();
}

function updateCatChip() {
  const chip = document.getElementById('cat-selected-chip');
  if (!chip) return;
  const cat = getCategoryById(selectedCategory);
  chip.textContent = cat ? `${cat.emoji} ${cat.name}` : '— pick a category';
}

function renderMethodButtons() {
  document.querySelectorAll('#add-modal .method-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.method === selectedMethod);
  });
}

function handleSmartTextInput() {
  const input = document.getElementById('smart-text-input');
  if (!input) return;
  const val = input.value;
  const parsed = parseSmartText(val);
  const preview = document.getElementById('smart-preview');

  if (!parsed || (!parsed.amount && !parsed.category && !parsed.date && !parsed.method)) {
    if (preview) preview.classList.add('hidden');
    return;
  }

  if (preview) preview.classList.remove('hidden');

  // Amount
  const amtPill = document.getElementById('smart-preview-amt');
  if (parsed.amount !== null && !isNaN(parsed.amount)) {
    document.getElementById('txn-amount').value = parsed.amount;
    if (amtPill) {
      amtPill.textContent = '₹' + parsed.amount;
      amtPill.style.display = 'inline-flex';
    }
    // Highlight matching quick pill if any
    document.querySelectorAll('.amount-pill').forEach(pill => {
      pill.classList.toggle('active', parseFloat(pill.dataset.amount) === parsed.amount);
    });
  } else {
    if (amtPill) amtPill.style.display = 'none';
  }

  // Category
  const catPill = document.getElementById('smart-preview-cat');
  if (parsed.category) {
    selectedCategory = parsed.category;
    const catObj = getCategoryById(parsed.category);
    if (catObj && catObj.type && currentType !== catObj.type) {
      currentType = catObj.type;
      renderModalTypeButtons();
    } else {
      renderCategoryGrid();
    }
    if (catPill) {
      catPill.textContent = `${catObj.emoji} ${catObj.name}`;
      catPill.style.display = 'inline-flex';
    }
    updateCatChip();
  } else {
    if (catPill) catPill.style.display = 'none';
  }

  // Date
  const datePill = document.getElementById('smart-preview-date');
  if (parsed.date) {
    document.getElementById('txn-datetime').value = formatForDateTimeLocal(parsed.date);
    if (datePill) {
      datePill.textContent = '📅 ' + getDateLabel(parsed.date);
      datePill.style.display = 'inline-flex';
    }
  } else {
    if (datePill) datePill.style.display = 'none';
  }

  // Payment Method
  const methodPill = document.getElementById('smart-preview-method');
  if (parsed.method) {
    selectedMethod = parsed.method;
    renderMethodButtons();
    if (methodPill) {
      methodPill.textContent = (selectedMethod === 'UPI' ? '⚡ ' : '💵 ') + selectedMethod;
      methodPill.style.display = 'inline-flex';
    }
  } else {
    if (methodPill) methodPill.style.display = 'none';
  }

  // Note
  if (parsed.note) {
    document.getElementById('txn-note').value = parsed.note;
  }
}

function submitSmartText() {
  handleSmartTextInput();
  const amt = parseFloat(document.getElementById('txn-amount').value);
  if (!amt || amt <= 0) {
    showToast('Please specify an amount (e.g. "50 uber")');
    return;
  }
  saveTransaction();
}

function saveTransaction() {
  const amount = parseFloat(document.getElementById('txn-amount').value);
  if (!amount || amount <= 0) { showToast('Enter a valid amount'); return; }

  const note = document.getElementById('txn-note').value.trim();
  const datetime = document.getElementById('txn-datetime').value;

  const txn = {
    id: generateId(),
    type: currentType,
    amount,
    category: selectedCategory,
    method: selectedMethod, // Cash or UPI only
    note,
    date: datetime ? new Date(datetime).toISOString() : new Date().toISOString(),
  };

  state.transactions.push(txn);
  saveData();
  closeAddModal();
  showToast('Transaction added!');
  renderCurrentView();
}

// ─── EDIT TRANSACTION MODAL ───
let editType = 'expense';
let editCategory = 'others';
let editMethod = 'UPI';

function openEditModal(txnId) {
  const txn = state.transactions.find(t => t.id === txnId);
  if (!txn) return;

  editType = txn.type;
  editCategory = txn.category || 'others';
  editMethod = (txn.method === 'Cash') ? 'Cash' : 'UPI'; // UPI & Cash only

  document.getElementById('edit-txn-id').value = txn.id;
  document.getElementById('edit-txn-amount').value = txn.amount;
  document.getElementById('edit-txn-note').value = txn.note || '';

  const d = new Date(txn.date);
  document.getElementById('edit-txn-datetime').value = formatForDateTimeLocal(d);

  renderEditTypeButtons();
  renderEditCategoryGrid();
  renderEditMethodButtons();
  updateEditCatChip();

  const editGrid = document.getElementById('edit-category-grid');
  if (editGrid) editGrid.style.display = 'none';
  const toggleBtn = document.getElementById('toggle-edit-cat-grid-btn');
  if (toggleBtn) toggleBtn.classList.remove('open');

  document.getElementById('edit-modal').classList.remove('hidden');
}

function closeEditModal() {
  document.getElementById('edit-modal').classList.add('hidden');
}

function updateEditCatChip() {
  const chip = document.getElementById('edit-cat-selected-chip');
  if (!chip) return;
  const cat = getCategoryById(editCategory);
  chip.textContent = cat ? `${cat.emoji} ${cat.name}` : '— pick a category';
}

function renderEditTypeButtons() {
  document.querySelectorAll('#edit-type-selector .type-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.type === editType);
  });
  renderEditCategoryGrid();
}

function renderEditCategoryGrid() {
  const grid = document.getElementById('edit-category-grid');
  if (!grid) return;
  const cats = state.settings.categories.filter(c => {
    if (editType === 'income') return c.type === 'income' || c.id === 'others';
    if (editType === 'investment') return c.type === 'investment' || c.id === 'others';
    return c.type === 'expense' || c.id === 'others';
  });

  grid.innerHTML = cats.map(c =>
    `<button type="button" class="cat-btn${editCategory === c.id ? ' active' : ''}" data-id="${c.id}">${c.emoji} ${c.name}</button>`
  ).join('');

  grid.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      editCategory = btn.dataset.id;
      grid.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateEditCatChip();
      grid.style.display = 'none';
      const toggleBtn = document.getElementById('toggle-edit-cat-grid-btn');
      if (toggleBtn) toggleBtn.classList.remove('open');
    });
  });

  updateEditCatChip();
}

function renderEditMethodButtons() {
  document.querySelectorAll('#edit-method-selector .method-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.method === editMethod);
  });
}

function updateTransaction() {
  const id = document.getElementById('edit-txn-id').value;
  const amount = parseFloat(document.getElementById('edit-txn-amount').value);
  if (!amount || amount <= 0) { showToast('Enter a valid amount'); return; }

  const idx = state.transactions.findIndex(t => t.id === id);
  if (idx === -1) return;

  state.transactions[idx] = {
    ...state.transactions[idx],
    type: editType,
    amount,
    category: editCategory,
    method: editMethod,
    note: document.getElementById('edit-txn-note').value.trim(),
    date: new Date(document.getElementById('edit-txn-datetime').value).toISOString(),
  };

  saveData();
  closeEditModal();
  showToast('Transaction updated!');
  renderCurrentView();
}

function deleteTransaction() {
  const id = document.getElementById('edit-txn-id').value;
  if (!confirm('Delete this transaction?')) return;
  state.transactions = state.transactions.filter(t => t.id !== id);
  saveData();
  closeEditModal();
  showToast('Transaction deleted');
  renderCurrentView();
}

// ─── KEYWORDS MANAGEMENT ───
function renderKeywordsList() {
  const container = document.getElementById('keywords-list');
  if (!container) return;
  const keywords = state.settings.keywords || DEFAULT_KEYWORDS;
  const cats = state.settings.categories;

  container.innerHTML = Object.entries(keywords).map(([catId, words]) => {
    const cat = getCategoryById(catId);
    if (!words || words.length === 0) return '';
    const tagsHtml = words.map(w =>
      `<span class="keyword-tag">${w} <span class="keyword-tag-remove" data-cat="${catId}" data-word="${w}">✕</span></span>`
    ).join('');
    return `
      <div class="keyword-cat-group">
        <div class="keyword-cat-header">${cat.emoji} ${cat.name}</div>
        <div class="keyword-tags">${tagsHtml}</div>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.keyword-tag-remove').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const catId = btn.dataset.cat;
      const word = btn.dataset.word;
      if (state.settings.keywords && state.settings.keywords[catId]) {
        state.settings.keywords[catId] = state.settings.keywords[catId].filter(w => w !== word);
        saveData();
        renderKeywordsList();
        showToast(`Removed "${word}"`);
      }
    });
  });

  const select = document.getElementById('kw-category-select');
  if (select) {
    select.innerHTML = cats.map(c => `<option value="${c.id}">${c.emoji} ${c.name}</option>`).join('');
  }
}

function addKeyword() {
  const select = document.getElementById('kw-category-select');
  const input = document.getElementById('new-keyword-input');
  if (!select || !input) return;
  const catId = select.value;
  const word = input.value.trim().toLowerCase();
  if (!word) {
    showToast('Enter a keyword');
    return;
  }
  if (!state.settings.keywords) {
    state.settings.keywords = JSON.parse(JSON.stringify(DEFAULT_KEYWORDS));
  }
  if (!state.settings.keywords[catId]) {
    state.settings.keywords[catId] = [];
  }
  if (state.settings.keywords[catId].includes(word)) {
    showToast('Keyword already exists');
    return;
  }
  state.settings.keywords[catId].push(word);
  saveData();
  input.value = '';
  renderKeywordsList();
  showToast(`Added "${word}" to ${getCategoryById(catId).name}!`);
}

// ─── IMPORT / EXPORT / BACKUP ───
function exportCSVList(txns, filename) {
  if (txns.length === 0) {
    showToast('No transactions to export');
    return;
  }
  const headers = ['Date', 'Type', 'Category', 'Amount', 'Method', 'Note'];
  const rows = txns.map(t => {
    const cat = getCategoryById(t.category);
    return [
      new Date(t.date).toLocaleString('en-IN'),
      t.type,
      cat.name,
      t.amount,
      t.method || '',
      (t.note || '').replace(/,/g, ';'),
    ].join(',');
  });

  const csv = [headers.join(','), ...rows].join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
  showToast('CSV downloaded!');
}

function exportMonthCSV() {
  const txns = getTransactionsForMonth(state.currentMonth, state.currentYear);
  const mName = getShortMonth(state.currentMonth);
  exportCSVList(txns, `expenses_${state.settings.name}_${mName}_${state.currentYear}.csv`);
}

function exportYearCSV() {
  const txns = state.transactions.filter(t => new Date(t.date).getFullYear() === state.currentYear);
  exportCSVList(txns, `expenses_${state.settings.name}_year_${state.currentYear}.csv`);
}

function backupJSON() {
  const backup = {
    version: '1.0',
    exportedAt: new Date().toISOString(),
    settings: state.settings,
    transactions: state.transactions,
  };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `expense_backup_${state.settings.name}_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('JSON Backup downloaded!');
}

function restoreJSON(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (data.transactions && Array.isArray(data.transactions)) {
        state.transactions = data.transactions;
      }
      if (data.settings) {
        state.settings = { ...state.settings, ...data.settings };
      }
      saveData();
      showToast('Backup restored successfully!');
      renderCurrentView();
      renderSettings();
    } catch (err) {
      showToast('Restore failed — invalid backup JSON');
      console.error(err);
    }
  };
  reader.readAsText(file);
}

function importCSV(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const lines = e.target.result.split('\n').filter(l => l.trim());
      if (lines.length < 2) { showToast('File seems empty'); return; }

      const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
      const dateIdx = headers.indexOf('date');
      const typeIdx = headers.indexOf('type');
      const catIdx = headers.indexOf('category');
      const amountIdx = headers.indexOf('amount');
      const methodIdx = headers.indexOf('method');
      const noteIdx = headers.indexOf('note');

      let imported = 0;
      for (let i = 1; i < lines.length; i++) {
        const cols = lines[i].split(',');
        if (cols.length < 4) continue;

        const catName = cols[catIdx] || 'Others';
        const cat = state.settings.categories.find(c => c.name.toLowerCase() === catName.trim().toLowerCase());

        const rawMethod = cols[methodIdx]?.trim();
        const method = (rawMethod === 'Cash') ? 'Cash' : 'UPI';

        state.transactions.push({
          id: generateId(),
          date: new Date(cols[dateIdx]).toISOString() || new Date().toISOString(),
          type: (cols[typeIdx] || 'expense').trim().toLowerCase(),
          category: cat ? cat.id : 'others',
          amount: parseFloat(cols[amountIdx]) || 0,
          method,
          note: cols[noteIdx]?.trim() || '',
        });
        imported++;
      }

      saveData();
      showToast(`Imported ${imported} transactions!`);
      renderCurrentView();
    } catch (err) {
      showToast('Import failed — check file format');
      console.error(err);
    }
  };
  reader.readAsText(file);
}

// ─── EVENT LISTENERS ───
function initEventListeners() {
  // Nav buttons
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => switchView(btn.dataset.view));
  });

  // FAB
  document.getElementById('fab-add').addEventListener('click', () => openAddModal());

  // Summary Invest pill switches to analytics investment breakdown
  const investSummaryPill = document.querySelector('.summary-pill.invest');
  if (investSummaryPill) {
    investSummaryPill.style.cursor = 'pointer';
    investSummaryPill.addEventListener('click', () => {
      switchView('stats-view');
      setTimeout(() => {
        const invCard = document.getElementById('invest-stats-card');
        if (invCard) invCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 50);
    });
  }

  // Month nav (all views)
  document.getElementById('home-prev-month').addEventListener('click', prevMonth);
  document.getElementById('home-next-month').addEventListener('click', nextMonth);
  document.getElementById('stats-prev-month').addEventListener('click', prevMonth);
  document.getElementById('stats-next-month').addEventListener('click', nextMonth);
  document.getElementById('history-prev-month').addEventListener('click', prevMonth);
  document.getElementById('history-next-month').addEventListener('click', nextMonth);

  // See all → history
  document.getElementById('see-all-btn').addEventListener('click', () => switchView('history-view'));

  // Smart text input listeners
  const smartInput = document.getElementById('smart-text-input');
  if (smartInput) {
    smartInput.addEventListener('input', handleSmartTextInput);
    smartInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        submitSmartText();
      }
    });
  }

  const smartAddBtn = document.getElementById('smart-add-btn');
  if (smartAddBtn) {
    smartAddBtn.addEventListener('click', submitSmartText);
  }

  // Quick Amount Pills
  document.querySelectorAll('.amount-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const amt = parseFloat(pill.dataset.amount);
      document.getElementById('txn-amount').value = amt;
      document.querySelectorAll('.amount-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const amtPill = document.getElementById('smart-preview-amt');
      const preview = document.getElementById('smart-preview');
      if (amtPill && preview) {
        amtPill.textContent = '₹' + amt;
        amtPill.style.display = 'inline-flex';
        preview.classList.remove('hidden');
      }
    });
  });

  // Auto-detect category on direct Note input as well
  const txnNote = document.getElementById('txn-note');
  if (txnNote) {
    txnNote.addEventListener('input', (e) => {
      const noteVal = e.target.value.trim().toLowerCase();
      const keywords = (state.settings && state.settings.keywords) || DEFAULT_KEYWORDS;
      for (const [catId, words] of Object.entries(keywords)) {
        if (words.some(kw => noteVal.includes(kw.toLowerCase()))) {
          selectedCategory = catId;
          const catObj = getCategoryById(catId);
          if (catObj && catObj.type && currentType !== catObj.type) {
            currentType = catObj.type;
            renderModalTypeButtons();
          } else {
            renderCategoryGrid();
          }
          break;
        }
      }
    });
  }

  // Add modal type & method
  document.querySelectorAll('#add-modal .type-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentType = btn.dataset.type;
      renderModalTypeButtons();
    });
  });
  document.querySelectorAll('#add-modal .method-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedMethod = btn.dataset.method;
      renderMethodButtons();
    });
  });

  // Add modal buttons
  document.getElementById('modal-cancel').addEventListener('click', closeAddModal);
  document.getElementById('modal-save').addEventListener('click', saveTransaction);
  const modalCloseIcon = document.getElementById('modal-close-icon');
  if (modalCloseIcon) modalCloseIcon.addEventListener('click', closeAddModal);

  // Category toggle button (show/hide full grid)
  const toggleCatBtn = document.getElementById('toggle-cat-grid-btn');
  if (toggleCatBtn) {
    toggleCatBtn.addEventListener('click', () => {
      const grid = document.getElementById('category-grid');
      const isOpen = grid.style.display !== 'none';
      grid.style.display = isOpen ? 'none' : 'flex';
      toggleCatBtn.classList.toggle('open', !isOpen);
    });
  }

  // Edit modal category toggle button
  const toggleEditCatBtn = document.getElementById('toggle-edit-cat-grid-btn');
  if (toggleEditCatBtn) {
    toggleEditCatBtn.addEventListener('click', () => {
      const grid = document.getElementById('edit-category-grid');
      const isOpen = grid.style.display !== 'none';
      grid.style.display = isOpen ? 'none' : 'flex';
      toggleEditCatBtn.classList.toggle('open', !isOpen);
    });
  }

  // Edit modal auto-detect category on Note change
  const editTxnNote = document.getElementById('edit-txn-note');
  if (editTxnNote) {
    editTxnNote.addEventListener('input', (e) => {
      const noteVal = e.target.value.trim().toLowerCase();
      const keywords = (state.settings && state.settings.keywords) || DEFAULT_KEYWORDS;
      let found = null;
      for (const [catId, words] of Object.entries(keywords)) {
        if (words.some(kw => noteVal.includes(kw.toLowerCase()))) {
          found = catId;
          break;
        }
      }
      if (found) {
        editCategory = found;
        const catObj = getCategoryById(found);
        if (catObj && catObj.type && editType !== catObj.type) {
          editType = catObj.type;
          renderEditTypeButtons();
        } else {
          renderEditCategoryGrid();
        }
        updateEditCatChip();
      }
    });
  }

  // Edit modal
  document.querySelectorAll('#edit-type-selector .type-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      editType = btn.dataset.type;
      renderEditTypeButtons();
    });
  });
  document.querySelectorAll('#edit-method-selector .method-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      editMethod = btn.dataset.method;
      renderEditMethodButtons();
    });
  });
  document.getElementById('edit-cancel').addEventListener('click', closeEditModal);
  document.getElementById('edit-save').addEventListener('click', updateTransaction);
  document.getElementById('edit-delete').addEventListener('click', deleteTransaction);
  const editCloseIcon = document.getElementById('edit-close-icon');
  if (editCloseIcon) editCloseIcon.addEventListener('click', closeEditModal);

  // Close modals on overlay click
  document.getElementById('add-modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeAddModal();
  });
  document.getElementById('edit-modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeEditModal();
  });

  // Settings
  document.getElementById('save-settings-btn').addEventListener('click', saveSettings);
  const themeSelect = document.getElementById('setting-theme');
  if (themeSelect) {
    themeSelect.addEventListener('change', (e) => {
      applyTheme(e.target.value);
      saveData();
      showToast(`Theme set to ${e.target.value.toUpperCase()}`);
    });
  }
  document.getElementById('manage-categories-btn').addEventListener('click', () => {
    const panel = document.getElementById('categories-panel');
    const chevron = document.getElementById('categories-chevron');
    panel.classList.toggle('hidden');
    panel.classList.toggle('visible');
    chevron.classList.toggle('open');
  });
  document.getElementById('add-category-btn').addEventListener('click', addCategory);

  // Keywords management
  const kwBtn = document.getElementById('manage-keywords-btn');
  if (kwBtn) {
    kwBtn.addEventListener('click', () => {
      const panel = document.getElementById('keywords-panel');
      const chevron = document.getElementById('keywords-chevron');
      panel.classList.toggle('hidden');
      panel.classList.toggle('visible');
      chevron.classList.toggle('open');
      if (panel.classList.contains('visible')) {
        renderKeywordsList();
      }
    });
  }
  const addKwBtn = document.getElementById('add-keyword-btn');
  if (addKwBtn) addKwBtn.addEventListener('click', addKeyword);
  const kwInput = document.getElementById('new-keyword-input');
  if (kwInput) {
    kwInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        addKeyword();
      }
    });
  }

  // Import / Export
  const expMonthBtn = document.getElementById('export-month-btn');
  if (expMonthBtn) expMonthBtn.addEventListener('click', exportMonthCSV);

  const expYearBtn = document.getElementById('export-year-btn');
  if (expYearBtn) expYearBtn.addEventListener('click', exportYearCSV);

  const backupJsonBtn = document.getElementById('backup-json-btn');
  if (backupJsonBtn) backupJsonBtn.addEventListener('click', backupJSON);

  const restoreJsonBtn = document.getElementById('restore-json-btn');
  if (restoreJsonBtn) {
    restoreJsonBtn.addEventListener('click', () => {
      document.getElementById('restore-file').click();
    });
  }
  const restoreFileInput = document.getElementById('restore-file');
  if (restoreFileInput) {
    restoreFileInput.addEventListener('change', (e) => {
      if (e.target.files[0]) restoreJSON(e.target.files[0]);
      e.target.value = '';
    });
  }

  document.getElementById('import-csv-btn').addEventListener('click', () => {
    document.getElementById('import-file').click();
  });
  document.getElementById('import-file').addEventListener('change', (e) => {
    if (e.target.files[0]) importCSV(e.target.files[0]);
    e.target.value = '';
  });

  const signOutBtn = document.getElementById('sign-out-btn');
  if (signOutBtn) {
    signOutBtn.addEventListener('click', () => {
      showToast('Signed out of local session');
    });
  }

  document.getElementById('clear-data-btn').addEventListener('click', () => {
    if (confirm('Are you sure? This will delete ALL your data permanently.')) {
      state.transactions = [];
      state.settings = {
        ...state.settings,
        categories: JSON.parse(JSON.stringify(DEFAULT_CATEGORIES)),
        keywords: JSON.parse(JSON.stringify(DEFAULT_KEYWORDS)),
      };
      saveData();
      showToast('All data cleared');
      renderCurrentView();
      renderSettings();
    }
  });

  // Time period tabs
  document.querySelectorAll('.time-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.time-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.statsTimePeriod = tab.dataset.period;
      renderStats();
    });
  });

  // Keyboard shortcut: Escape closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAddModal();
      closeEditModal();
    }
  });
}

// ─── INITIALIZATION ───
function init() {
  loadData();
  applyTheme(state.settings.theme || 'dark');
  updateMonthLabels();
  initEventListeners();
  renderHome();
}

// Boot
document.addEventListener('DOMContentLoaded', init);
