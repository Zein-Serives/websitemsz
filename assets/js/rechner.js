
(function(){
  const $=id=>document.getElementById(id);
  const P={km:0.81,hour:32,day:194,stand:17,free:20,night:0.25};
  function euro(n){return (Math.round(n*100)/100).toFixed(2).replace('.',',')+' €'}
  function toggle(){
    const m=$('mode').value;
    document.querySelectorAll('.mode-km').forEach(e=>e.style.display=m==='km'?'grid':'none');
    document.querySelectorAll('.mode-hour').forEach(e=>e.style.display=m==='hour'?'grid':'none');
    document.querySelectorAll('.mode-day').forEach(e=>e.style.display=m==='day'?'grid':'none');
  }
  function calc(){
    const m=$('mode').value, dist=+($('distance')?.value||0), hrs=+($('hours')?.value||0),
          days=+($('days')?.value||0), load=+$('loadMins').value, stand=+$('standHours').value,
          extras=+$('extras').value, night=$('nightHoliday').checked;
    let rows=[], total=0;
    const over=Math.max(load-P.free,0), loadC=over/60*P.stand;
    if(over>0){rows.push(['Be-/Entladezeit (über 20 min)', over+' min × '+P.stand+' €', euro(loadC)]); total+=loadC;}
    if(stand>0){const c=stand*P.stand; rows.push(['Standzeit', stand+' h × '+P.stand+' €', euro(c)]); total+=c;}
    if(m==='km'){const c=dist*P.km; rows.push(['Kilometer', dist+' km × '+P.km.toFixed(2)+' €', euro(c)]); total+=c;}
    if(m==='hour'){let c=hrs*P.hour; if(night)c*=(1+P.night); rows.push([night?'Fahrzeit (Nacht/So/FT +25%)':'Fahrzeit', hrs+' h × '+P.hour+' €', euro(c)]); total+=c;}
    if(m==='day'){let c=days*P.day; if(night)c*=(1+P.night); rows.push([night?'Tagessatz (Nacht/So/FT +25%)':'Tagessatz', days+' × '+P.day+' €', euro(c)]); rows.push(['Hinweis','Kilometer bis 300 km inklusive, darüber Aufpreis.','']); total+=c;}
    if(extras>0){rows.push(['Maut / Sonstiges','',euro(extras)]); total+=extras;}
    $('breakdown').innerHTML = rows.map(r=>`<tr><td>${r[0]}<br><span class="muted">${r[1]}</span></td><td>${r[2]}</td></tr>`).join('');
    $('total').textContent = euro(total);
  }
  $('mode').addEventListener('change', toggle);
  document.getElementById('calcBtn').addEventListener('click', e=>{e.preventDefault();calc();});
  document.getElementById('resetBtn').addEventListener('click', e=>{e.preventDefault();location.reload();});
  toggle();
})();
