
function $(s){return document.querySelector(s)}
function calc(){
  const mode = $("#mode").value;
  const km = parseFloat($("#km").value || 0);
  const standMin = parseFloat($("#standMin").value || 0);
  const standHours = Math.max(0,(standMin-20)/60);
  const isNight = $("#night").checked;
  let sum = 0;
  let note = "";
  if(mode==="km"){
     sum = km*0.81;
     note = "Mindestpreis entfällt – Richtwert je nach Tourdaten.";
  }else if(mode==="hour"){
     sum = 32*parseFloat($("#hours").value || 0);
  }else{ // day
     sum = 194;
     note = "Inklusive bis 300 km; darüber Aufpreis.";
  }
  // Standzeit 17 €/h
  sum += standHours*17;
  // Nacht/So/FT +25% bei Stunde/Tag
  if(isNight && (mode==="hour" || mode==="day")) sum *= 1.25;

  $("#result").textContent = sum>0 ? (sum.toFixed(2)+" € netto") : "-";
  $("#note").textContent = note;
}

function toggleFields(){
  const m = $("#mode").value;
  document.querySelectorAll(".field-hour").forEach(e=>e.style.display=(m==="hour")?"block":"none");
  document.querySelectorAll(".field-km").forEach(e=>e.style.display=(m==="km")?"block":"none");
  document.querySelectorAll(".field-day").forEach(e=>e.style.display=(m==="day")?"block":"none");
}
document.addEventListener("DOMContentLoaded",()=>{toggleFields();calc();["#mode","#km","#hours","#standMin","#night"].forEach(id=>$(id).addEventListener("input",()=>{toggleFields();calc()}));});
