function formatEUR(v){return new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR'}).format(v)}
function calcPrice(){
  const mode=document.querySelector('input[name=mode]:checked').value;
  const km=parseFloat(document.getElementById('km').value||0);
  const hours=parseFloat(document.getElementById('hours').value||0);
  const days=parseFloat(document.getElementById('days').value||0);
  const night=document.getElementById('night').checked;
  const base={ km:0.95, hour:39, day:290 }; // 15% reduziert
  let total=0;
  if(mode==='km') total=km*base.km;
  if(mode==='hour') total=hours*base.hour;
  if(mode==='day') total=days*base.day;
  if(night) total*=1.25;
  const discounted=total*0.85;
  document.getElementById('price-raw').textContent=formatEUR(total);
  document.getElementById('price-final').textContent=formatEUR(discounted);
}
document.addEventListener('input',e=>{ if(e.target.closest('#calc')) calcPrice(); });
document.addEventListener('change',e=>{ if(e.target.closest('#calc')) calcPrice(); });
window.addEventListener('DOMContentLoaded', calcPrice);