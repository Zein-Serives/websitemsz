
(function(){const path=location.pathname.replace(/\/index\.html$/,'/');document.querySelectorAll('nav.primary a').forEach(a=>{if(a.getAttribute('href')===path)a.classList.add('active');});})();
