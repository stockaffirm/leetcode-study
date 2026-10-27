/* Landing page: collapsible topics + per-problem question preview. */
(function(){
  const setTopic = (t, open) => { t.classList.toggle("open", open); const b = t.querySelector(".th"); b.setAttribute("aria-expanded", open); b.querySelector(".chev").textContent = open ? "▾" : "▸"; };
  const setQ = (r, open) => { r.classList.toggle("qopen", open); const b = r.querySelector(".qt"); b.setAttribute("aria-expanded", open); b.textContent = open ? "▾" : "▸"; };
  document.querySelectorAll(".topic").forEach(t => t.querySelector(".th").onclick = () => setTopic(t, !t.classList.contains("open")));
  document.querySelectorAll(".rowx").forEach(r => r.querySelector(".qt").onclick = () => setQ(r, !r.classList.contains("qopen")));
  const setList = (l, open) => { l.classList.toggle("open", open); const b = l.querySelector(".ph"); b.setAttribute("aria-expanded", open); b.querySelector(".chev").textContent = open ? "▾" : "▸"; };
  document.querySelectorAll(".plist").forEach(l => l.querySelector(".ph").onclick = () => setList(l, !l.classList.contains("open")));
  document.getElementById("expAll").onclick = () => { document.querySelectorAll(".plist").forEach(l => setList(l, true)); document.querySelectorAll(".topic").forEach(t => setTopic(t, true)); document.querySelectorAll(".rowx").forEach(r => setQ(r, true)); };
  document.getElementById("colAll").onclick = () => { document.querySelectorAll(".plist").forEach(l => setList(l, false)); document.querySelectorAll(".rowx").forEach(r => setQ(r, false)); document.querySelectorAll(".topic").forEach(t => setTopic(t, false)); };
})();
/* Filter buttons: highlight every problem that belongs to LeetCode 75 / LeetCode 150. */
(function(){
  const btns = [...document.querySelectorAll(".flt")], rows = [...document.querySelectorAll(".rowx")];
  btns.forEach(b => b.onclick = () => {
    const on = b.getAttribute("aria-pressed") !== "true";
    btns.forEach(x => x.setAttribute("aria-pressed", "false"));
    b.setAttribute("aria-pressed", on);
    rows.forEach(r => r.classList.toggle("hl", on && (b.dataset.flt === "later" ? r.classList.contains("lt") : (r.dataset.s || "").split(" ").includes(b.dataset.flt))));
    document.dispatchEvent(new Event("lc-paint"));
  });
  document.addEventListener("lc-paint", () => { const b = btns.find(x => x.dataset.flt === "later" && x.getAttribute("aria-pressed") === "true"); if(b) rows.forEach(r => r.classList.toggle("hl", r.classList.contains("lt"))); });
})();

/* Section headers: total / read / wrote counts, and a highlight + match count when a filter (LeetCode 75, Meta, ...) is on,
   so a minimised section still shows what is inside it. */
(function(){
  const heads = [...document.querySelectorAll(".plist > .ph, .topic > .th")].map(h => {
    const sec = h.parentElement, bd = document.createElement("span"); bd.className = "bd"; h.appendChild(bd);
    return { sec, bd, rows: [...sec.querySelectorAll(".rowx")] };
  });
  const pill = (cls, txt) => `<span class="bp ${cls}">${txt}</span>`;
  function refresh(){
    heads.forEach(({ sec, bd, rows }) => {
      const read = rows.filter(r => r.classList.contains("done")).length, wrote = rows.filter(r => r.querySelector(".wk[aria-checked=true]")).length,
            hi = rows.filter(r => r.classList.contains("hl")).length;
      sec.classList.toggle("hl", hi > 0);
      bd.innerHTML = (hi ? pill("hi", "★ " + hi + " match" + (hi > 1 ? "es" : "")) : "") + pill("tot", rows.length + " total") + pill("rd", read + " read") + pill("wr", wrote + " wrote");
    });
  }
  document.addEventListener("lc-paint", refresh); refresh();
})();

/* Pattern note at the top of each topic: why the section exists, general logic, pseudo code, usual pattern. */
(function(){
  const T = window.TOPICS || {}, A = window.TOPIC_ALIAS || {}, e = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  document.querySelectorAll(".topic").forEach(t => {
    const n = t.querySelector(".tn").textContent.trim(), k = T[n] ? n : A[n], d = T[k], tb = t.querySelector(".tb"); if(!d || !tb) return;
    const x = document.createElement("details"); x.className = "about";
    x.innerHTML = `<summary>About this pattern</summary>
      <div class="tv"></div>
      <p><b>Why it is a section.</b> ${e(d.why)}</p><p><b>General logic.</b></p><ol>${d.logic.map(l => `<li>${e(l)}</li>`).join("")}</ol>
      <p><b>Pseudo code.</b></p><pre class="code ucode">${e(d.pseudo)}</pre><p><b>Usual pattern.</b> ${e(d.pattern)}</p>`;
    tb.insertBefore(x, tb.firstChild);
    const sc = window.TOPIC_VIS && window.TOPIC_VIS[k], box = x.querySelector(".tv"); let vis = null;
    if(!sc || !window.mountTopicVis){ box.remove(); return; }
    const calm = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    x.addEventListener("toggle", () => { if(x.open){ vis = vis || window.mountTopicVis(box, sc); if(!calm) vis.play(); } else if(vis) vis.stop(); });
  });
})();

/* Signed-in visitors do not need the "approval needed" hint on the System Design link. */
(function(){ try { if(localStorage.getItem("sb-mxdljkwconnaanpgvigz-auth-token")){ const s = document.querySelector(".sdnav small"); if(s) s.remove(); } } catch(e){} })();
