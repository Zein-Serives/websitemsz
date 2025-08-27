
(function(){
  // Smooth scroll
  document.querySelectorAll('header.site nav a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const id=a.getAttribute('href').slice(1);
      const el=document.getElementById(id);
      if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); }
    });
  });
  // Active nav on section in view
  const navLinks = Array.from(document.querySelectorAll('header.site nav a[href^="#"]'));
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(ent=>{
      const id = ent.target.id;
      const link = navLinks.find(l=>l.getAttribute('href')==='#'+id);
      if(link && ent.isIntersecting){
        navLinks.forEach(l=>l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  },{rootMargin:"-50% 0px -50% 0px",threshold:0});
  document.querySelectorAll('section[id]').forEach(s=>obs.observe(s));

  // Year
  const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
})();
