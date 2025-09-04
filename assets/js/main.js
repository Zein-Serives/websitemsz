
// Mobile nav
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (navToggle) {
  navToggle.addEventListener('click', () => nav.classList.toggle('open'));
}
// Active link based on path
const path = location.pathname.replace(/\/index\.html$/, '');
document.querySelectorAll('.nav-link').forEach(a => {
  if (a.getAttribute('href') === path) a.classList.add('active');
});
// Promo deadline: 30 days from now
const deadlineEl = document.getElementById('promo-deadline');
if (deadlineEl) {
  const d = new Date(); d.setDate(d.getDate() + 30);
  deadlineEl.textContent = d.toLocaleDateString('de-DE', { day:'2-digit', month:'2-digit', year:'numeric' });
}
