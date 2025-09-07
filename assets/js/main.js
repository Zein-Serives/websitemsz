// Mobile nav
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (navToggle) { navToggle.addEventListener('click', () => nav.classList.toggle('open')); }
// Active link
const path = location.pathname.replace(/\/index\.html$/, '');
document.querySelectorAll('.nav-link').forEach(a => { if (a.getAttribute('href') === path) a.classList.add('active'); });
// Promo deadline
const deadlineEl = document.getElementById('promo-deadline');
if (deadlineEl) { const d = new Date(); d.setDate(d.getDate() + 30);
  deadlineEl.textContent = d.toLocaleDateString(document.documentElement.lang || 'de-DE', { day:'2-digit', month:'2-digit', year:'numeric' }); }
// Language hint
(function(){
  const lang = (navigator.language || 'en').toLowerCase();
  const here = location.pathname;
  if (here.startsWith('/en/') || here.startsWith('/ar/')) return;
  if (lang.startsWith('en')) {
    const n = document.createElement('div');
    n.className = 'ribbon'; n.style.position='static';
    n.innerHTML = 'Prefer English? <a href="/en/">Switch to EN</a>';
    document.body.insertBefore(n, document.body.firstChild);
  } else if (lang.startsWith('ar')) {
    const n = document.createElement('div');
    n.className = 'ribbon'; n.style.position='static';
    n.innerHTML = 'تفضل العربية؟ <a href="/ar/">اضغط هنا</a>';
    document.body.insertBefore(n, document.body.firstChild);
  }
})();