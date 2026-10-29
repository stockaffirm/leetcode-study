/* Shared player: question -> code -> flow -> diagram. Flow arrows jump between flow steps; diagram arrows step through every sub-step. */
(function(){
const ORDER = window.ORDER;
const P = window.PROBLEM, $ = s => document.querySelector(s);
const esc = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
function stmtHtml(t){
  const f = x => esc(x).replace(/`([^`]+)`/g, "<code>$1</code>"), L = t.split("\n"), o = []; let i = 0;
  while(i < L.length){ const l = L[i];
    if(l.startsWith("```")){ const c = []; i++; while(i < L.length && !L[i].startsWith("```")) c.push(L[i++]); i++; o.push(`<pre class="code stc">${esc(c.join("\n"))}</pre>`); continue; }
    if(/^\* /.test(l)){ const u = []; while(i < L.length && /^\* /.test(L[i])) u.push(`<li>${f(L[i++].slice(2))}</li>`); o.push(`<ul>${u.join("")}</ul>`); continue; }
    if(/^(Example \d+:|Constraints:|Follow[- ]up:?)$/.test(l.trim())){ o.push(`<h4 class="sth">${esc(l.trim())}</h4>`); i++; continue; }
    if(l.trim()){ const p = [l]; i++; while(i < L.length && L[i].trim() && !L[i].startsWith("```") && !/^\* /.test(L[i])) p.push(L[i++]); o.push(`<p>${f(p.join(" "))}</p>`); continue; }
    i++; }
  return `<div class="stmt">${o.join("")}</div>`;
}
let vi = 0, idx = 0, timer = null, speed = 1, mode = "guided", tidx = 0, ex = 1;

function hl(line){
  return esc(line).replace(/(#.*$)|('[^']*'|"[^"]*")|\b(class|def|return|for|in|if|elif|else|while|and|or|not|import|from|reversed|range)\b|\b(\d+)\b/g,
    (m,c,s,k,n)=> c?`<span class="c">${c}</span>`: s?`<span class="s">${s}</span>`: k?`<span class="k">${k}</span>`: `<span class="n">${n}</span>`);
}

const cur = ORDER.findIndex(d=>d.startsWith(P.id+"-")), pv = ORDER[cur-1], nx = ORDER[cur+1];
const pnav = `<div class="pnav bot">${pv?`<a href="../${pv}/">◀ Previous problem</a>`:"<span></span>"}${nx?`<a data-next href="../${nx}/">Next problem ▶</a>`:"<span></span>"}</div>`;
$("#app").innerHTML = `
<div class="pnav"><a href="../">← All problems</a><span class="pos">${cur+1} of ${ORDER.length}</span>${nx?`<a data-next class="go" href="../${nx}/">Next problem ▶</a>`:"<span></span>"}</div>
<h1>${P.id}. ${esc(P.title)}</h1>
<p class="sub"><span class="tag ${P.level}">${P.level}</span><span class="tag">${esc(P.topic)}</span></p>
<section class="sec"><h2><b>1</b>Question</h2>
  ${P.statement?`<details class="qfull"><summary>Full question (examples and constraints)</summary>${stmtHtml(P.statement)}</details>`:`<p class="q">${esc(P.question)}</p>`}
  <p class="lcl"><a id="lclink" href="https://leetcode.com/problemset/?search=${encodeURIComponent(P.id)}" target="_blank" rel="noopener">Open the original problem on LeetCode ↗</a></p>
  <div class="io"><div><small>Example input</small>${esc(P.input)}</div><div class="arrow">→</div><div><small>Output</small>${esc(P.output)}</div></div>
  ${P.why?`<p class="why"><b>Why?</b> ${esc(P.why)}</p>`:""}${P.idea?`<p class="idea"><b>💡 Key idea</b> ${esc(P.idea)}</p>`:""}${P.ex2?`<p class="why edge"><b>Edge / failure case</b> <code>${esc(P.ex2.input)}</code> → <code>${esc(P.ex2.output)}</code><br>${esc(P.ex2.why)}</p>`:""}
</section>
<div class="work"><section class="sec codeSec"><h2><b>2</b>Code<span class="copyw"><button id="copy" title="Copy the whole solution">Copy all</button></span></h2><div class="tabs" id="tabs"></div><pre class="code" id="code"></pre><div class="meta" id="meta"></div></section>
<div class="right"><section class="sec" id="flowSec"><h2><b>3</b>Flow<span class="arrows"><button id="fprev" title="Previous flow step">◀</button><button id="fnext" title="Next flow step">▶</button></span></h2><div class="flow" id="flow"></div></section>
<section class="sec dock"><h2><b>4</b>Diagram<span class="modes" id="modes"><button data-mode="guided" class="on" title="Curated steps with explanations">Guided</button><button data-mode="trace" title="Run the real code and step through every line">Every line</button></span><span class="exs" id="exs"><button data-ex="1" class="on" title="The main example">Example</button><button data-ex="2" title="A failure / edge case">Edge case</button></span><span class="arrows"><button id="dprev" title="Previous detail step (shift+←)">◀</button><span class="dct" id="dct"></span><button id="dnext" title="Next detail step (shift+→)">▶</button></span></h2><div class="stage" id="stage"></div><p class="cap" id="cap"></p></section></div></div>
<section class="sec sum" id="summary"></section>
<section class="sec und" id="understand"></section>
${pnav}
<div class="bar"><div class="in">
  <button id="prev" title="Previous flow step (←)">◀ Flow</button>
  <button id="play" class="play" title="Play / Pause (space)">▶ Play</button>
  <button id="next" title="Next flow step (→)">Flow ▶</button>
  <button id="done" class="dn" title="Mark as read">☐ Read</button>
  <button id="later" class="dn lt" title="Skip this problem for now and come back to it later">⏰ Learn later</button>
  <div class="prog"><i id="pg"></i></div><span class="ct" id="ct"></span>
  <select id="spd" title="Speed"><option value="2">0.5×</option><option value="1" selected>1×</option><option value="0.5">2×</option></select>
</div></div>`;

document.querySelectorAll("a[data-next]").forEach(a=>a.addEventListener("click",()=>Progress.set(P.id,true)));
const V = () => P.variants[vi];
function micro(){ const v=V(); if(!v._m){ v._m=[]; v.frames.forEach((f,fi)=>{ if(f.sub&&f.sub.length) f.sub.forEach((m,si)=>v._m.push({fi,si,m,f})); else v._m.push({fi,si:0,m:f,f}); }); } return v._m; }
const M = () => micro()[idx];
const firstOf = fi => micro().findIndex(x=>x.fi===fi);

function renderTabs(){
  $("#tabs").innerHTML = P.variants.length>1 ? P.variants.map((v,i)=>`<button class="${i==vi?"on":""}" data-i="${i}">${i==0?"★ ":""}${esc(v.name)}</button>`).join("") : "";
  $("#tabs").style.display = P.variants.length>1 ? "" : "none";
  $("#tabs").querySelectorAll("button").forEach(b=>b.onclick=()=>chooseVariant(+b.dataset.i));
}

/* ---------- "Answer at a glance": one-page summary of the best solution ---------- */
function sRows(rows){
  return rows.map(r=>{
    const mk=r.marks||{};
    const ch=(c,i,hot)=>{const t=String(c);return `<span class="sc"><span class="cell${hot?" hot":""}${t==="·"?" sp nul":""}">${t===" "?"␣":esc(t)}</span><span class="smk">${i>=0&&mk[i]?esc(mk[i]):""}</span></span>`;};
    const body = r.kind==="grid"
      ? `<div class="sgrid">${r.cells.map((row,ri)=>`<div class="scells">${row.map((c,ci)=>ch(c,-1,r.hot.includes(ri+","+ci))).join("")}</div>`).join("")}</div>`
      : `<div class="scells${r.kind==="list"?" slist":""}">${r.cells.map((c,i)=>ch(c,i,r.hot.includes(i))).join("")}</div>`;
    return `<div class="srow"><span class="snm">${esc(r.name)}</span>${body}</div>`;
  }).join("");
}
function renderSummary(){
  const B=P.variants[0], fr=B.frames||[], n=fr.length;
  const idx = n<=10 ? fr.map((_,i)=>i) : [0,1,2,3,4,5].concat([n-3,n-2]);
  const bullets=[P.idea].concat(P.notes||[]).filter(Boolean).slice(0,5);
  const steps = idx.map((i,k)=>{
    const f=fr[i], gap = k>0 && idx[k]-idx[k-1]>1 ? `<div class="sgap">⋯ ${idx[k]-idx[k-1]-1} more steps — use the walkthrough above ⋯</div>` : "";
    const facts=Object.entries(f.facts||{}).map(([a,b])=>`<span class="sf">${esc(a)} = ${esc(b)}</span>`).join("");
    const rows=(f.sub&&f.sub.length?f.sub[f.sub.length-1].rows:f.rows);
    return gap+`<div class="sstep"><div class="sinfo"><b>Step ${i}: ${esc(f.title)}</b><div class="sfacts">${facts}</div></div><div class="sdia">${sRows(rows)}</div><div class="snote">${esc(f.description)}</div></div>`;
  }).join("");
  const last=fr[n-1];
  $("#summary").innerHTML=`<h2>Answer at a glance</h2>
  <div class="sumgrid"><div class="sleft">
    <div class="pn pq"><h3>${P.id}. ${esc(P.title)}</h3><p>${esc(P.question)}</p><p class="spio"><b>Input</b> ${esc(P.input)}<br><b>Output</b> ${esc(P.output)}</p></div>
    <div class="pn pc"><pre class="code scode">${B.code.split("\n").map((l,i)=>`<span class="ln"><i>${i+1}</i>${hl(l)||" "}</span>`).join("")}</pre></div>
    <div class="pn pk"><h3>Key idea <small>(${esc(B.name)})</small></h3><ul>${bullets.map(b=>`<li>${esc(b)}</li>`).join("")}</ul></div>
    ${P.ex2?`<div class="pn pe"><h3>Edge / failure case</h3><p class="spio"><b>Input</b> ${esc(P.ex2.input)}<br><b>Output</b> ${esc(P.ex2.output)}</p><p>${esc(P.ex2.why)}</p></div>`:""}<div class="pn px"><h3>Complexity</h3><ul><li><b>Time:</b> <span class="sf">${esc(B.time)}</span></li><li><b>Space:</b> <span class="sf b">${esc(B.space)}</span></li></ul><p>${esc(B.explain||"")}</p></div>
  </div><div class="pn pw"><h3>Example walkthrough</h3><p class="spio"><b>Input</b> ${esc(P.input)}</p>${steps}
    <div class="sstep sres"><div class="sinfo"><b>Result</b></div><div class="sdia">${last?sRows(last.sub&&last.sub.length?last.sub[last.sub.length-1].rows:last.rows):""}</div><div class="snote">Output: ${esc(P.output)}</div></div></div></div>`;
}
function fmt(t){return esc(t).replace(/`([^`]+)`/g,"<code>$1</code>")}
function renderUnderstand(){
  const U=P.understand, el=$("#understand"); if(!U){ el.style.display="none"; return; }
  const tb=t=>`<div class="utw"><table class="ut"><thead><tr>${t.head.map(h=>`<th>${fmt(h)}</th>`).join("")}</tr></thead><tbody>${t.rows.map(r=>`<tr>${r.map((c,i)=>`<td>${i==0&&/[(\[=.]/.test(c)&&t.head[0]==="Code"?`<code>${esc(c)}</code>`:fmt(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  el.innerHTML=`<h2>Understanding the code</h2>`+U.blocks.map((b,i)=>`<div class="pn ub"><h3><b>${i+1}</b>${fmt(b.h)}</h3>${(b.p||[]).map(x=>`<p>${fmt(x)}</p>`).join("")}${b.code?`<pre class="code ucode">${esc(b.code)}</pre>`:""}${b.table?tb(b.table):""}${b.bullets?`<ul>${b.bullets.map(x=>`<li>${fmt(x)}</li>`).join("")}</ul>`:""}</div>`).join("")+(U.takeaway?`<div class="pn utake"><b>Interview takeaway</b> ${fmt(U.takeaway)}</div>`:"");
}
function copyCode(){
  const txt=V().code, b=$("#copy"), done=()=>{ b.textContent="Copied ✓"; b.classList.add("ok"); setTimeout(()=>{b.textContent="Copy all"; b.classList.remove("ok");},1600); };
  const fallback=()=>{ const t=document.createElement("textarea"); t.value=txt; t.style.cssText="position:fixed;opacity:0"; document.body.appendChild(t); t.select(); try{document.execCommand("copy");}catch(e){} t.remove(); done(); };
  if(navigator.clipboard&&navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(done,fallback); else fallback();
}
function chooseVariant(i){
  stop(); vi=i; renderTabs(); renderStatic();
  const noF=!V().frames.length; setMode(noF ? "trace" : (mode==="trace" && !V().trace ? "guided" : mode));
}
function renderStatic(){
  $("#code").innerHTML = V().code.split("\n").map((l,i)=>`<span class="ln" data-n="${i+1}"><i>${i+1}</i>${hl(l)||" "}</span>`).join("");
  $("#meta").innerHTML = `${V().tag||(vi==0?"Optimal":"")?`<span class="vt ${vi==0?"best":""}">${esc(V().tag||"Optimal")}</span>`:""}<span>Time <b>${esc(V().time)}</b></span><span>Space <b>${esc(V().space)}</b></span><span>${esc(V().explain)}</span>`;
  $("#flow").innerHTML = V().frames.map((f,i)=>`<span class="st" data-i="${i}">${esc(f.title)}</span>`).join('<span class="ar">→</span>');
  $("#flow").querySelectorAll(".st").forEach(s=>s.onclick=()=>{stop();idx=firstOf(+s.dataset.i);render();});
}

/* Diagram renderer: keeps elements between steps so CSS transitions animate (cells recolour, values pop, pointers glide). */
const stage = $("#stage"), rowEls = new Map();
function popEl(el){ el.classList.remove("pop"); void el.offsetWidth; el.classList.add("pop"); }
function setCell(cw, v, hot){
  const el = cw.firstChild, t = String(v), sp = t===" ", nul = t==="·", txt = sp?"␣":t;
  if(el.textContent !== txt){ const had = el.textContent !== ""; el.textContent = txt; if(had) popEl(el); }
  el.classList.toggle("hot", !!hot); el.classList.toggle("sp", sp||nul); el.classList.toggle("nul", nul);
}
function mkCw(){ const cw=document.createElement("span"); cw.className="cw new"; const c=document.createElement("span"); c.className="cell"; cw.appendChild(c); return cw; }
const cwsOf = box => [...box.children].filter(c=>c.classList.contains("cw"));
function syncCells(box, vals, hotFn){
  let cws = cwsOf(box);
  while(cws.length < vals.length){ const c=mkCw(), pt=box.querySelector(".ptr"); box.insertBefore(c, pt); cws.push(c); }
  while(cws.length > vals.length) cws.pop().remove();
  vals.forEach((v,i)=>setCell(cws[i], v, hotFn(i)));
}
/* Binary trees: levels[i][j] is the node at depth i, slot j (children of slot j are 2j and 2j+1); null / "·" = no node. */
const absent = v => v===null || v===undefined || v==="·";
function treeSvg(levels, hot, labels){
  if(!levels.length || absent((levels[0]||[])[0])) return '<span class="tnone">empty tree</span>';
  const pos = new Map(); let nx = 0, maxD = 0;
  const walk = (i,j) => {
    if(i>=levels.length || absent((levels[i]||[])[j]) || i>60) return;
    walk(i+1,2*j); pos.set(i+","+j,{x:nx++,y:i}); maxD = Math.max(maxD,i); walk(i+1,2*j+1);
  };
  walk(0,0);
  const DX=46, DY=54, R=18, W=nx*DX+16, H=(maxD+1)*DY+10, X=k=>8+pos.get(k).x*DX+DX/2-8, Y=k=>R+4+pos.get(k).y*DY;
  let ed="", nd="";
  pos.forEach((_,k)=>{ const [i,j]=k.split(",").map(Number);
    [2*j,2*j+1].forEach(c=>{ const ck=(i+1)+","+c; if(pos.has(ck)) ed += `<line x1="${X(k)}" y1="${Y(k)}" x2="${X(ck)}" y2="${Y(ck)}"/>`; });
    const t=String(levels[i][j]), lb=labels&&labels[k];
    nd += `<g class="tn${hot&&hot.has(k)?" hot":""}"><circle cx="${X(k)}" cy="${Y(k)}" r="${R}"/><text x="${X(k)}" y="${Y(k)+5}" text-anchor="middle">${esc(t.length>4?t.slice(0,3)+"…":t)}</text>${lb?`<text class="tl" x="${X(k)}" y="${Y(k)+R+13}" text-anchor="middle">${esc(lb)}</text>`:""}</g>`; });
  return `<svg class="tsvg" viewBox="0 0 ${W} ${H+14}" width="${W}" height="${H+14}" role="img" aria-label="binary tree">${ed}${nd}</svg>`;
}
/* Guided frames describe a tree as rows named "level 0", "level 1", ...: fold them into one tree row. */
function groupTree(rows){
  const lv = rows.filter(r=>/^level \d+$/i.test(r.name)); if(!lv.length) return rows;
  const levels=[], hot=[], marks={};
  lv.forEach(r=>{ const i=+r.name.split(" ")[1]; levels[i]=r.cells.map(c=>absent(c)?null:c); (r.hot||[]).forEach(j=>hot.push(i+","+j)); Object.entries(r.marks||{}).forEach(([j,l])=>marks[i+","+j]=l); });
  for(let i=0;i<levels.length;i++) if(!levels[i]) levels[i]=[];
  const out=[]; let put=false;
  rows.forEach(r=>{ if(/^level \d+$/i.test(r.name)){ if(!put){ put=true; out.push({name:"tree",kind:"tree",levels,cells:[],hot,marks}); } } else out.push(r); });
  return out;
}
function makeRow(r){
  const el=document.createElement("div"); el.className="row rnew";
  const nm=document.createElement("span"); nm.className="nm"; nm.textContent=r.name; el.appendChild(nm);
  const body=document.createElement("div"); body.className = r.kind==="grid" ? "grid2" : r.kind==="tree" ? "treebox" : "cells"+(r.kind==="list"?" listrow":""); el.appendChild(body);
  return {el, body, kind:r.kind||"", ptrs:new Map()};
}
function placePtrs(st, marks){
  const want = new Map();
  Object.entries(marks||{}).forEach(([i,labels])=>String(labels).split(",").forEach((lb,k)=>want.set(lb,{i:+i,k})));
  st.ptrs.forEach((el,lb)=>{ if(!want.has(lb)){ el.classList.remove("on"); st.ptrs.delete(lb); setTimeout(()=>el.remove(),350); } });
  let maxk=-1;
  want.forEach((w,lb)=>{
    const cw=cwsOf(st.body)[w.i]; if(!cw) return; maxk=Math.max(maxk,w.k);
    let el=st.ptrs.get(lb);
    const left=cw.offsetLeft+cw.offsetWidth/2, top=cw.offsetTop+cw.offsetHeight+3+w.k*15;
    if(!el){ el=document.createElement("span"); el.className="ptr"; el.textContent=lb; el.style.left=left+"px"; el.style.top=top+"px"; st.body.appendChild(el); st.ptrs.set(lb,el); void el.offsetWidth; el.classList.add("on"); }
    else { el.style.left=left+"px"; el.style.top=top+"px"; el.classList.add("on"); }
  });
  st.body.style.paddingBottom = (maxk>=0 ? 18+maxk*15 : 0)+"px";
}
function renderStage(rows, facts){
  rows = groupTree(rows);
  const seen=new Set(), order=[];
  rows.forEach(r=>{
    let st=rowEls.get(r.name);
    if(!st || st.kind!==(r.kind||"")){ if(st) st.el.remove(); st=makeRow(r); rowEls.set(r.name,st); }
    seen.add(r.name); order.push(st.el);
    if(r.kind==="tree"){
      st.body.innerHTML = treeSvg(r.levels, new Set(r.hot), r.marks);
    } else if(r.kind==="grid"){
      while(st.body.children.length < r.cells.length){ const g=document.createElement("div"); g.className="cells"; st.body.appendChild(g); }
      while(st.body.children.length > r.cells.length) st.body.lastChild.remove();
      r.cells.forEach((row,ri)=>syncCells(st.body.children[ri], row, ci=>r.hot.includes(ri+","+ci)));
    } else {
      syncCells(st.body, r.cells, i=>r.hot.includes(i));
      st.body.querySelectorAll(":scope > .cw");
    }
    st.pending = r;
  });
  [...rowEls.keys()].forEach(k=>{ if(!seen.has(k)){ rowEls.get(k).el.remove(); rowEls.delete(k); } });
  // facts row
  let fr = rowEls.get("\u0000facts");
  const entries = facts ? Object.entries(facts) : [];
  if(entries.length){
    if(!fr){ const el=document.createElement("div"); el.className="row rnew"; el.innerHTML='<span class="nm"></span><div class="facts"></div>'; fr={el,body:el.lastChild,kind:"f",ptrs:new Map()}; rowEls.set("\u0000facts",fr); }
    fr.body.innerHTML = entries.map(([k,v])=>`<span class="fc">${esc(k)} = ${esc(v)}</span>`).join(""); order.push(fr.el);
  } else if(fr){ fr.el.remove(); rowEls.delete("\u0000facts"); }
  order.forEach((el,i)=>{ if(stage.children[i]!==el) stage.insertBefore(el, stage.children[i]||null); });
  rows.forEach(r=>{ const st=rowEls.get(r.name); if(st.kind!=="grid" && st.kind!=="tree") placePtrs(st, r.marks); });
}

/* ---------- Every-line mode: the real code was run; each executed line is one step ---------- */
const PTR = new Set(["i","j","k","l","r","lo","hi","mid","left","right","slow","fast","read","write","start","end","low","high","p","q","idx","pos","ptr","cur_end","far","reach"]);
const prim = e => e===null || typeof e!=="object";
function cs(e){
  if(e===null) return "None"; if(typeof e==="boolean") return e?"True":"False"; if(typeof e!=="object") return String(e);
  switch(e[0]){
    case "s": return "'"+e[1]+"'"; case "x": return e[1];
    case "l": return (e[2]?"(":"[")+e[1].map(cs).join(", ")+(e[2]?")":"]");
    case "S": return "{"+e[1].map(cs).join(", ")+"}";
    case "d": return "{"+e[1].map(([k,v])=>cs(k)+": "+cs(v)).join(", ")+"}";
    case "L": return e[1].map(cs).join(" → ")+(e[2]>=0?" ↺":"");
    case "T": return "tree"; default: return e[1];
  }
}
const cell = e => prim(e)||e[0]==="x" ? (e===null?"None":e===true?"True":e===false?"False":prim(e)?String(e):e[1]) : e[0]==="s" ? e[1] : cs(e);
function toRows(vars){
  const rows=[], facts={};
  for(const [name,e] of Object.entries(vars)){
    if(prim(e)||e[0]==="x"||e[0]==="o"){ facts[name]=cs(e); continue; }
    if(e[0]==="s"){ if(e[1].length<=30 && e[1].length>0) rows.push({name,cells:[...e[1]],hot:[],marks:{}}); else facts[name]=cs(e); continue; }
    if(e[0]==="l"){
      const it=e[1]; if(!it.length){ facts[name]="[]"; continue; }
      if(it.every(x=>!prim(x)&&x[0]==="l"&&x[1].every(prim)||(!prim(x)&&x[0]==="l"&&x[1].length===0)) && it.some(x=>x[1].length)) { rows.push({name,cells:it.map(r=>r[1].map(cell)),hot:[],marks:{},kind:"grid"}); continue; }
      rows.push({name,cells:it.map(cell),hot:[],marks:{}}); continue;
    }
    if(e[0]==="S"){ if(!e[1].length){ facts[name]="set()"; continue; } rows.push({name,cells:e[1].map(cell),hot:[],marks:{}}); continue; }
    if(e[0]==="d"){ if(!e[1].length){ facts[name]="{}"; continue; } rows.push({name,cells:e[1].map(([k,v])=>cs(k)+"→"+cs(v)),hot:[],marks:{}}); continue; }
    if(e[0]==="L"){ rows.push({name,cells:e[1].map(cell).concat(e[2]>=0?["↺"+e[2]]:[]),hot:[],marks:{},kind:"list"}); continue; }
    if(e[0]==="T"){ rows.push({name,kind:"tree",levels:e[1].map(lv=>lv.map(x=>x===null?null:cell(x))),cells:[],hot:[],marks:{}}); continue; }
  }
  return {rows,facts};
}
function traceCaption(T,i){
  const s=T.steps[i], prev=i>0?T.steps[i-1]:null, src=(V().code.split("\n")[s.l-1]||"").trim(), pre=s.d>1?"(inside a call, depth "+s.d+") ":"";
  if("ret" in s){
    const ch=changes(prev,s); return pre+(ch?ch+". ":"")+"Return → "+cs(s.ret);
  }
  if(!prev||prev.f!==s.f) return pre+(prev?"A new call starts. ":"Start. ")+"Next: "+src;
  const ch=changes(prev,s); return pre+(ch?"Previous line: "+ch+". ":"")+"Next: "+src;
}
function changes(prev,s){
  if(!prev||prev.f!==s.f) return "";
  const out=[];
  for(const [k,v] of Object.entries(s.v)){ const pv=prev.v[k]; const a=JSON.stringify(pv), b=JSON.stringify(v);
    if(pv===undefined) out.push(k+" = "+cs(v)); else if(a!==b) out.push(k+": "+cs(pv).slice(0,40)+" → "+cs(v).slice(0,40)); }
  return out.slice(0,4).join("; ")+(out.length>4?" …":"");
}
const curTrace = () => (ex===2 && V().trace2) ? V().trace2 : V().trace;
function renderTrace(){
  const T=curTrace(), s=T.steps[tidx], prev=tidx>0?T.steps[tidx-1]:null, n=T.steps.length;
  const {rows,facts}=toRows(s.v);
  const pr=prev&&prev.f===s.f?toRows(prev.v):null;
  rows.forEach(r=>{ const o=pr&&pr.rows.find(x=>x.name===r.name); if(!o) return;
    if(r.kind==="tree"){ r.levels.forEach((lv,i)=>lv.forEach((c,j)=>{ if(c!==null && (!o.levels[i]||o.levels[i][j]!==c)) r.hot.push(i+","+j); })); }
    else if(r.kind==="grid"){ r.cells.forEach((row,ri)=>row.forEach((c,ci)=>{ if(!o.cells[ri]||o.cells[ri][ci]!==c) r.hot.push(ri+","+ci); })); }
    else r.cells.forEach((c,i)=>{ if(o.cells[i]!==c) r.hot.push(i); }); });
  const prim0=rows.find(r=>r.kind!=="grid"&&r.kind!=="tree"&&r.cells.length>0);
  if(prim0) for(const [k,e] of Object.entries(s.v)){ if(PTR.has(k)&&typeof e==="number"&&e>=0&&e<prim0.cells.length){ prim0.marks[e]=prim0.marks[e]?prim0.marks[e]+","+k:k; } }
  document.querySelectorAll(".ln").forEach(el=>el.classList.toggle("on", +el.dataset.n===s.l));
  const first=document.querySelector(".ln.on"); if(first){const box=$("#code"); const t=first.offsetTop-box.clientHeight/3; if(box.scrollHeight>box.clientHeight) box.scrollTo({top:t,behavior:"smooth"});}
  renderStage(rows,facts);
  const cap=$("#cap"), txt=traceCaption(T,tidx)+(T.trunc&&tidx===n-1?" (Trace shortened — this case repeats the same pattern for many more steps.)":""); if(cap.textContent!==txt){ cap.textContent=txt; cap.classList.remove("swap"); void cap.offsetWidth; cap.classList.add("swap"); }
  $("#pg").style.width=((tidx+1)/n*100)+"%"; $("#ct").textContent=(tidx+1)+" / "+n; $("#dct").textContent=(tidx+1)+"/"+n;
  $("#prev").disabled=$("#fprev").disabled=$("#dprev").disabled=tidx===0; $("#next").disabled=$("#fnext").disabled=$("#dnext").disabled=tidx===n-1;
  if(tidx===n-1 && !Progress.has(P.id)) Progress.set(P.id,true);
  updDone();
  $("#play").textContent = timer ? "❚❚ Pause" : (tidx===n-1 ? "↺ Replay" : "▶ Play");
}
function setMode(m){
  stop(); if(m==="guided") ex=1; mode=m; tidx=0; idx=0; stage.innerHTML=""; rowEls.clear();
  document.querySelectorAll("#modes button").forEach(b=>b.classList.toggle("on",b.dataset.mode===m));
  $("#flowSec").style.display = m==="trace" ? "none" : "";
  const gb=document.querySelector('#modes [data-mode="guided"]'); gb.disabled=!V().frames.length; gb.title=gb.disabled?"No curated walkthrough for this approach — use Every line":"Curated steps with explanations";
  const tb=document.querySelector('#modes [data-mode="trace"]'); tb.disabled=!V().trace;
  document.querySelectorAll('#exs button').forEach(b=>b.classList.toggle('on',+b.dataset.ex===ex)); $('#exs').style.display = (P.ex2 && V().trace2) ? '' : 'none';
  $("#prev").textContent = m==="trace" ? "◀ Step" : "◀ Flow"; $("#next").textContent = m==="trace" ? "Step ▶" : "Flow ▶";
  render();
}
function render(){
  if(mode==="trace") return renderTrace();
  const X = M(), f = X.f, m = X.m, fi = X.fi, nf = V().frames.length, mm = micro(), last = mm.length-1;
  const lines = m.codeLines || f.codeLines, rows = m.rows || f.rows, facts = m.facts !== undefined ? m.facts : f.facts;
  document.querySelectorAll(".ln").forEach(el=>el.classList.toggle("on", lines.includes(+el.dataset.n)));
  const first = document.querySelector(".ln.on"); if(first){const box=$("#code"); const t=first.offsetTop-box.clientHeight/3; if(box.scrollHeight>box.clientHeight) box.scrollTo({top:t,behavior:"smooth"});}
  document.querySelectorAll(".st").forEach((s,i)=>{s.classList.toggle("on",i==fi);s.classList.toggle("done",i<fi);});
  renderStage(rows, facts);
  const cap=$("#cap"); if(cap.textContent!==m.description){ cap.textContent = m.description; cap.classList.remove("swap"); void cap.offsetWidth; cap.classList.add("swap"); }
  $("#pg").style.width = ((idx+1)/mm.length*100)+"%"; $("#ct").textContent = `${fi+1} / ${nf}`; $("#dct").textContent = `${idx+1}/${mm.length}`;
  const atStart = idx===0, atEnd = fi===nf-1;
  $("#prev").disabled = $("#fprev").disabled = atStart; $("#next").disabled = $("#fnext").disabled = atEnd;
  $("#dprev").disabled = atStart; $("#dnext").disabled = idx===last;
  if(atEnd && !Progress.has(P.id)) Progress.set(P.id,true);
  updDone();
  $("#play").textContent = timer ? "❚❚ Pause" : (idx===last ? "↺ Replay" : "▶ Play");
}
function updDone(){ const d=Progress.has(P.id), b=$("#done"); b.classList.toggle("on",d); b.textContent=d?"✓ Read":"☐ Read"; }
$("#done").onclick=()=>{Progress.set(P.id,!Progress.has(P.id));updDone();};
function updLater(){ const l=Progress.hasL(P.id), b=$("#later"); b.classList.toggle("on",l); b.textContent=l?"⏰ Saved for later":"⏰ Learn later"; b.title=l?"Click to remove from your learn-later list":"Skip this problem for now and come back to it later"; }
$("#later").onclick=()=>{ const on=!Progress.hasL(P.id); Progress.setL(P.id,on); updLater(); const n=document.querySelector("a[data-next]"); if(on&&n) setTimeout(()=>{location.href=n.href;},350); };
updLater();
function stop(){ if(timer){clearInterval(timer);timer=null;} }
function micro1(d){ if(mode==="trace"){ const n=curTrace().steps.length; tidx=Math.min(n-1,Math.max(0,tidx+d)); render(); return; } const n=micro().length; idx=Math.min(n-1,Math.max(0,idx+d)); render(); }
function flow(d){ if(mode==="trace") return micro1(d); const X=M(); if(d>0){ if(X.fi<V().frames.length-1) idx=firstOf(X.fi+1); } else { idx = X.si>0 ? firstOf(X.fi) : firstOf(Math.max(0,X.fi-1)); } render(); }
function play(){
  const tr = mode==="trace", n = tr ? curTrace().steps.length : micro().length, at = () => tr ? tidx : idx;
  if(timer){stop();render();return;}
  if(at()===n-1){ if(tr) tidx=0; else idx=0; }
  render(); timer=setInterval(()=>{ if(at()>=n-1){stop();render();return;} micro1(1); if(at()>=n-1){stop();render();} }, (tr?900:1500)*speed);
  render();
}
$("#prev").onclick=$("#fprev").onclick=()=>{stop();flow(-1);}; $("#next").onclick=$("#fnext").onclick=()=>{stop();flow(1);};
$("#dprev").onclick=()=>{stop();micro1(-1);}; $("#dnext").onclick=()=>{stop();micro1(1);}; $("#play").onclick=play;
$("#spd").onchange=e=>{speed=+e.target.value; if(timer){stop();play();}};
document.addEventListener("keydown",e=>{ if(e.key=="ArrowRight"){stop();e.shiftKey?micro1(1):flow(1);} else if(e.key=="ArrowLeft"){stop();e.shiftKey?micro1(-1):flow(-1);} else if(e.key==" "){e.preventDefault();play();} });
document.title = `${P.id}. ${P.title}`;
$("#copy").onclick=copyCode;
document.querySelectorAll("#modes button").forEach(b=>b.onclick=()=>setMode(b.dataset.mode));
document.querySelectorAll("#exs button").forEach(b=>b.onclick=()=>{ stop(); ex=+b.dataset.ex; if(mode!=="trace"){ mode="trace"; } tidx=0; idx=0; stage.innerHTML=""; rowEls.clear(); setMode("trace"); });
if(!P.variants.some(v=>v.trace)) $("#modes").style.display="none";
renderSummary();renderUnderstand();
renderTabs(); renderStatic(); if(!V().frames.length && V().trace) setMode("trace"); else render();
})();

/* Notepad: a floating icon opens a blank white pad for typing your own answer. Saved per problem in this browser. */
(function(){
  const Q = window.PROBLEM; if(!Q) return;
  const key = "lc.pad." + Q.id, get = () => { try { return localStorage.getItem(key) || ""; } catch(e){ return ""; } }, put = v => { try { v ? localStorage.setItem(key, v) : localStorage.removeItem(key); } catch(e){} };
  const fab = document.createElement("button"); fab.type = "button"; fab.className = "padfab"; fab.title = "Notepad: type your own answer"; fab.setAttribute("aria-label", "Open notepad");
  fab.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4L19 9l-4-4L4 16v4z"/><path d="M13.5 6.5l4 4"/></svg>';
  const ov = document.createElement("div"); ov.className = "padov"; ov.hidden = true;
  ov.innerHTML = '<div class="padbox" role="dialog" aria-label="Notepad"><div class="padhd"><b>Your answer</b><span class="padsub"></span><span class="padbt"><button type="button" data-a="copy">Copy</button><button type="button" data-a="clear">Clear</button><button type="button" data-a="close" aria-label="Close">✕</button></span></div><textarea class="padta" spellcheck="false" autocapitalize="off" autocomplete="off" placeholder="Type your code here. Tab indents. Saved in this browser."></textarea></div>';
  document.body.append(fab, ov);
  const ta = ov.querySelector("textarea"), sub = ov.querySelector(".padsub");
  const open = () => { ta.value = get(); ov.hidden = false; sub.textContent = Q.id + ". " + Q.title; setTimeout(() => ta.focus(), 30); };
  const close = () => { put(ta.value); ov.hidden = true; fab.classList.toggle("has", !!get()); fab.focus(); };
  fab.onclick = open; fab.classList.toggle("has", !!get());
  ta.addEventListener("input", () => put(ta.value));
  ta.addEventListener("keydown", e => {
    if(e.key === "Tab"){ e.preventDefault(); const s = ta.selectionStart, t = ta.selectionEnd; ta.setRangeText("    ", s, t, "end"); put(ta.value); }
    if(e.key === "Escape"){ e.stopPropagation(); close(); }
    e.stopPropagation();   /* keep the lesson's arrow-key and space shortcuts out of the pad */
  });
  ["keyup", "keypress"].forEach(ev => ta.addEventListener(ev, e => e.stopPropagation()));
  ov.addEventListener("click", e => { if(e.target === ov) close(); const a = e.target.dataset && e.target.dataset.a;
    if(a === "close") close();
    if(a === "clear" && (!ta.value || confirm("Clear everything you typed for this problem?"))){ ta.value = ""; put(""); ta.focus(); }
    if(a === "copy"){ const b = e.target; const done = () => { b.textContent = "Copied ✓"; setTimeout(() => b.textContent = "Copy", 1400); }; if(navigator.clipboard) navigator.clipboard.writeText(ta.value).then(done, () => { ta.select(); document.execCommand("copy"); done(); }); else { ta.select(); document.execCommand("copy"); done(); } } });
})();

/* Link to the exact LeetCode page: slugs (the URL names) are loaded separately. */
(function(){ const Q = window.PROBLEM; if(!Q) return; const t = document.createElement("script"); t.src = "../assets/lcslugs.js";
  t.onload = () => { const sl = window.LCSLUG && window.LCSLUG[Q.id], a = document.getElementById("lclink"); if(sl && a) a.href = "https://leetcode.com/problems/" + sl + "/"; };
  document.head.appendChild(t); })();
