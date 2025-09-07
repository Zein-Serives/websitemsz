function formatEUR(v){return new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR'}).format(v)}
function calcPriceTexts(){
  const lang=document.documentElement.lang||'de';
  return lang==='en'?{subtotal:'Subtotal (reference): ',final:'Relaunch -15% (reference): ',night:'Night/Sun/PH (+25%)',km:'Transport (km)',hour:'Hour',day:'Day'}
       :lang==='ar'?{subtotal:'المجموع الفرعي (مرجعي): ',final:'خصم الإطلاق 15٪ (مرجعي): ',night:'ليل/أحد/عطلة (+25%)',km:'النقل (كم)',hour:'ساعة',day:'يوم'}
       :{subtotal:'Zwischensumme (Richtwert): ',final:'Relaunch –15 % (Richtwert): ',night:'Nacht/So/FT (+25 %)',km:'Transport (km)',hour:'Stunde',day:'Tag'};
}
function calcPrice(){
  const km=parseFloat(document.getElementById('km')?.value||0);
  const hours=parseFloat(document.getElementById('hours')?.value||0);
  const days=parseFloat(document.getElementById('days')?.value||0);
  const mode=document.querySelector('input[name=mode]:checked')?.value||'km';
  const night=document.getElementById('night')?.checked;
  const base={ km:0.95, hour:39, day:290 };
  let total=0;
  if(mode==='km') total=km*base.km;
  if(mode==='hour') total=hours*base.hour;
  if(mode==='day') total=days*base.day;
  if(night) total*=1.25;
  const discounted=total*0.85;
  const t=calcPriceTexts();
  document.getElementById('price-raw').textContent=t.subtotal+formatEUR(total);
  document.getElementById('price-final').textContent=t.final+formatEUR(discounted);
}
document.addEventListener('input',e=>{ if(e.target.closest('#calc')) calcPrice(); });
document.addEventListener('change',e=>{ if(e.target.closest('#calc')) calcPrice(); });
window.addEventListener('DOMContentLoaded', calcPrice);