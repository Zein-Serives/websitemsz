// Enforce HTTPS (fallback if host doesn't provide it)
if (location.protocol === 'http:' && location.hostname && !location.hostname.includes('localhost')) {
  location.href = 'https://' + location.host + location.pathname + location.search + location.hash;
}
// Mobile nav
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (navToggle) { navToggle.addEventListener('click', () => nav.classList.toggle('open')); }
// Active link highlighting
const path = location.pathname.replace(/\/$/, '');
document.querySelectorAll('.nav-link').forEach(a => {
  const href = a.getAttribute('href').replace(/\/$/, '');
  if (href === path) a.classList.add('active');
});
// Promo deadline (30 days)
const deadlineEl = document.getElementById('promo-deadline');
if (deadlineEl) { const d = new Date(); d.setDate(d.getDate() + 30);
  deadlineEl.textContent = d.toLocaleDateString(document.documentElement.lang || 'de-DE', { day:'2-digit', month:'2-digit', year:'numeric' }); }
// Non-intrusive language hint (keeps SEO stable)
(function(){
  const here = location.pathname;
  const pref = (navigator.language || '').toLowerCase();
  if (here.startsWith('/en/') || here.startsWith('/ar/')) return;
  if (pref.startsWith('en')) {
    const n = document.createElement('div'); n.className='ribbon'; n.style.position='static';
    n.innerHTML='Prefer English? <a href="/en/">Switch to EN</a>';
    document.body.insertBefore(n, document.body.firstChild);
  } else if (pref.startsWith('ar')) {
    const n = document.createElement('div'); n.className='ribbon'; n.style.position='static';
    n.innerHTML='تفضل العربية؟ <a href="/ar/">اضغط هنا</a>';
    document.body.insertBefore(n, document.body.firstChild);
  }
})();