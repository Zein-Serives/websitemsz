
document.addEventListener('DOMContentLoaded',()=>{
  // highlight active link by path
  const path = location.pathname.replace(/\/$/,'/index.html');
  document.querySelectorAll('header nav a').forEach(a=>{
    if(a.getAttribute('href')===path){ a.classList.add('active'); }
  });
});
