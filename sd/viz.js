/* Generic interactive visuals for System Design Prep. Content comes from the database; this file only renders it. */
(function(){
  const NS = "http://www.w3.org/2000/svg";
  const h = (tag, attrs, kids) => { const e = document.createElement(tag); for(const k in attrs || {}){ if(k === "class") e.className = attrs[k]; else if(k === "text") e.textContent = attrs[k]; else e.setAttribute(k, attrs[k]); } (kids || []).forEach(c => c && e.appendChild(c)); return e; };
  const s = (tag, attrs, kids) => { const e = document.createElementNS(NS, tag); for(const k in attrs || {}){ if(k === "text") e.textContent = attrs[k]; else e.setAttribute(k, attrs[k]); } (kids || []).forEach(c => c && e.appendChild(c)); return e; };
  const KC = { user: "#2f6fdb", agent: "#7a4fd6", tool: "#1f9d6b", data: "#7a8794", human: "#d9822b", policy: "#c0392b" };
  const KL = { user: "Actor / channel", agent: "Agent / model", tool: "Tool / service", data: "Data store", human: "Human", policy: "Policy / guardrail" };

  const css = `.vz{margin:10px 0}.vz-title{font-weight:700;margin:0 0 6px}
.vz-scroll{overflow-x:auto;border:1px solid var(--line);border-radius:12px;background:var(--card);padding:6px}
.vz-svg{display:block;min-width:780px;width:100%;height:auto;color:var(--ink)}
.vz-node{cursor:pointer;outline:none;transition:opacity .2s}.vz-node rect{fill:var(--card);stroke-width:2;transition:all .2s}
.vz-node:hover rect,.vz-node:focus rect{stroke-width:3.5}.vz-node.act rect{fill:var(--accent-soft);stroke-width:4}.vz-node.sel rect{stroke-width:4;stroke-dasharray:6 3}
.vz-node text{fill:currentColor;font:600 14px -apple-system,BlinkMacSystemFont,sans-serif;pointer-events:none}
.vz-node.dim,.vz-edge.dim,.vz-elab.dim{opacity:.22}.vz-edge{fill:none;stroke:#8a95a1;stroke-width:2;transition:all .2s}.vz-edge.act{stroke:var(--accent);stroke-width:3.5;stroke-dasharray:8 5;animation:vzd 1s linear infinite}
@keyframes vzd{to{stroke-dashoffset:-26}}.vz-elab{fill:currentColor;font:12px -apple-system,sans-serif;paint-order:stroke;stroke:var(--card);stroke-width:4px}
.vz-legend{display:flex;flex-wrap:wrap;gap:10px;margin:6px 2px;font-size:12px;color:var(--mute)}.vz-legend i{display:inline-block;width:11px;height:11px;border-radius:3px;margin-right:4px;vertical-align:-1px}
.vz-ctl{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:8px 0}.vz-btn{padding:6px 12px;border-radius:9px;border:1px solid var(--line);background:var(--card);color:var(--ink);font:600 13px -apple-system,sans-serif;cursor:pointer}.vz-btn.pri{background:var(--accent);border-color:var(--accent);color:#fff}.vz-btn:disabled{opacity:.45;cursor:default}
.vz-info{margin:6px 0;padding:10px 12px;border-radius:10px;background:var(--accent-soft);min-height:40px;font-size:14px;line-height:1.5}
.vz-opt{display:block;width:100%;text-align:left;margin:6px 0;padding:10px 12px;border-radius:10px;border:1.5px solid var(--line);background:var(--card);color:var(--ink);font:14px -apple-system,sans-serif;cursor:pointer}.vz-opt:hover{border-color:var(--accent)}.vz-opt.ok{border-color:#1f9d6b;background:rgba(31,157,107,.14)}.vz-opt.bad{border-color:#c0392b;background:rgba(192,57,43,.12)}
.vz-why{margin:4px 0 8px;padding:8px 10px;border-left:3px solid var(--line);font-size:13px;line-height:1.5}
.vz-card{border:1px solid var(--line);border-radius:12px;background:var(--card);padding:12px 14px}
.vz-row{display:grid;grid-template-columns:minmax(120px,1fr) minmax(120px,2fr) 90px;gap:10px;align-items:center;margin:6px 0;font-size:14px}.vz-row input[type=range]{width:100%}.vz-val{text-align:right;font-weight:700}
.vz-out{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;margin-top:10px}.vz-out div{padding:10px;border-radius:10px;background:var(--accent-soft)}.vz-out b{display:block;font-size:20px}.vz-out span{font-size:12px;color:var(--mute)}
.vz-chips{display:flex;flex-wrap:wrap;gap:8px;margin:6px 0}.vz-chip{padding:6px 12px;border-radius:99px;border:1.5px solid var(--line);background:var(--card);color:var(--ink);font:600 13px -apple-system,sans-serif;cursor:pointer}.vz-chip.on{background:var(--accent);border-color:var(--accent);color:#fff}
@media(max-width:560px){.vz-row{grid-template-columns:1fr 70px}.vz-row input{grid-column:1/3}}`;
  const st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  const lines = (txt, max) => { const w = String(txt).split(/\s+/), out = []; let cur = ""; w.forEach(x => { if((cur + " " + x).trim().length > max && cur){ out.push(cur); cur = x; } else cur = (cur + " " + x).trim(); }); if(cur) out.push(cur); return out.slice(0, 3); };
  const infoFill = (box, html) => { box.innerHTML = html; };

  function flow(el, sp, ctx){
    const W = 176, H = 58, GX = 50, GY = 36, PX = 14, PY = 14, nodes = sp.nodes || [], by = {};
    nodes.forEach(n => { by[n.id] = n; n.x = PX + n.col * (W + GX); n.y = PY + n.row * (H + GY); });
    const cols = Math.max(...nodes.map(n => n.col)) + 1, rows = Math.max(...nodes.map(n => n.row)) + 1;
    const vw = PX * 2 + cols * W + (cols - 1) * GX, vh = PY * 2 + rows * H + (rows - 1) * GY;
    const svg = s("svg", { viewBox: `0 0 ${vw} ${vh}`, class: "vz-svg", role: "img", "aria-label": sp.title || "diagram" });
    svg.appendChild(s("defs", {}, [s("marker", { id: "vza", viewBox: "0 0 10 10", refX: "9", refY: "5", markerWidth: "7", markerHeight: "7", orient: "auto-start-reverse" }, [s("path", { d: "M0 0 L10 5 L0 10 z", fill: "#8a95a1" })])]));
    const edgeEls = [], labEls = [];
    (sp.edges || []).forEach(([a, b, label], idx) => {
      const A = by[a], B = by[b]; if(!A || !B) return; let d, mx, my;
      if(B.col > A.col){ const x1 = A.x + W, y1 = A.y + H / 2, x2 = B.x, y2 = B.y + H / 2, dx = (x2 - x1) / 2; d = `M${x1} ${y1} C${x1 + dx} ${y1} ${x2 - dx} ${y2} ${x2} ${y2}`; mx = (x1 + x2) / 2; my = (y1 + y2) / 2; }
      else if(B.col < A.col){ const x1 = A.x, y1 = A.y + H / 2, x2 = B.x + W, y2 = B.y + H / 2, dx = (x1 - x2) / 2; d = `M${x1} ${y1} C${x1 - dx} ${y1} ${x2 + dx} ${y2} ${x2} ${y2}`; mx = (x1 + x2) / 2; my = (y1 + y2) / 2; }
      else if(B.row > A.row){ const x = A.x + W / 2; d = `M${x} ${A.y + H} L${x} ${B.y}`; mx = x; my = (A.y + H + B.y) / 2; }
      else { const x = A.x + W / 2; d = `M${x} ${A.y} L${x} ${B.y + H}`; mx = x; my = (A.y + B.y + H) / 2; }
      const p = s("path", { d, class: "vz-edge", "marker-end": "url(#vza)" }); svg.appendChild(p); edgeEls[idx] = { p, a, b };
      if(label){ const t = s("text", { x: mx, y: my - 4, "text-anchor": "middle", class: "vz-elab", text: label }); svg.appendChild(t); labEls[idx] = t; }
    });
    const nodeEls = {};
    nodes.forEach(n => {
      const g = s("g", { class: "vz-node", tabindex: "0", role: "button", "aria-label": n.label }, [s("rect", { x: n.x, y: n.y, width: W, height: H, rx: 11, stroke: KC[n.kind] || "#7a8794" })]);
      const ls = lines(n.label, 22), y0 = n.y + H / 2 - (ls.length - 1) * 8 + 4;
      ls.forEach((l, i) => g.appendChild(s("text", { x: n.x + W / 2, y: y0 + i * 16, "text-anchor": "middle", text: l })));
      const pick = () => { sel = sel === n.id ? null : n.id; paint(); };
      g.addEventListener("click", pick); g.addEventListener("keydown", e => { if(e.key === "Enter" || e.key === " "){ e.preventDefault(); pick(); } });
      svg.appendChild(g); nodeEls[n.id] = g;
    });
    let sel = null, step = -1, timer = null; const steps = sp.steps || [];
    const info = h("div", { class: "vz-info" }), lab = h("span", { class: "vz-legend" });
    const btn = (t, f, c) => { const b = h("button", { class: "vz-btn" + (c ? " " + c : ""), type: "button", text: t }); b.onclick = f; return b; };
    const prev = btn("‹ Back", () => go(step - 1)), next = btn("Next ›", () => go(step + 1), "pri"), play = btn("▶ Play", () => { if(timer){ stop(); } else { if(step >= steps.length - 1) step = -1; timer = setInterval(() => { if(step >= steps.length - 1){ stop(); } else go(step + 1); }, 2600); go(step + 1); play.textContent = "❚❚ Pause"; } }), reset = btn("Reset", () => { stop(); step = -1; sel = null; paint(); });
    const stop = () => { if(timer){ clearInterval(timer); timer = null; } play.textContent = "▶ Play"; };
    const cnt = h("span", { class: "vz-legend" });
    function go(i){ step = Math.max(0, Math.min(steps.length - 1, i)); sel = null; paint(); }
    function paint(){
      const S = step >= 0 ? steps[step] : null, on = S ? new Set(S.n || []) : null;
      nodes.forEach(n => { const g = nodeEls[n.id]; g.classList.toggle("act", !!(on && on.has(n.id))); g.classList.toggle("dim", !!(on && !on.has(n.id))); g.classList.toggle("sel", sel === n.id); });
      edgeEls.forEach((e, idx) => { if(!e) return; const hit = S ? (S.e ? S.e.includes(idx) : (on.has(e.a) && on.has(e.b))) : false; e.p.classList.toggle("act", hit); e.p.classList.toggle("dim", !!S && !hit); if(labEls[idx]) labEls[idx].classList.toggle("dim", !!S && !hit); });
      prev.disabled = step <= 0; next.disabled = step >= steps.length - 1; cnt.textContent = steps.length ? (step >= 0 ? `Step ${step + 1} of ${steps.length}` : `${steps.length}-step walkthrough`) : "";
      if(sel){ const n = by[sel]; infoFill(info, ""); info.appendChild(h("b", { text: n.label })); info.appendChild(h("div", { text: n.info || "" })); if(n.links && ctx.chips){ const d = h("div"); d.innerHTML = ctx.chips(n.links); info.appendChild(d); } }
      else if(S){ infoFill(info, ""); info.appendChild(h("b", { text: S.h || ("Step " + (step + 1)) })); info.appendChild(h("div", { text: S.t })); }
      else infoFill(info, "Click any box for what it does and which tracker topics it maps to." + (steps.length ? " Or press Play to walk through a request step by step." : ""));
    }
    const used = [...new Set(nodes.map(n => n.kind).filter(Boolean))];
    used.forEach(k => { const sp2 = h("span"); const i = h("i"); i.style.background = KC[k]; sp2.appendChild(i); sp2.appendChild(document.createTextNode(KL[k] || k)); lab.appendChild(sp2); });
    el.appendChild(h("div", { class: "vz" }, [sp.title ? h("div", { class: "vz-title", text: sp.title }) : null, h("div", { class: "vz-scroll" }, [svg]), lab, steps.length ? h("div", { class: "vz-ctl" }, [prev, play, next, reset, cnt]) : null, info]));
    paint();
  }

  function choice(el, sp){
    const box = h("div", { class: "vz vz-card" }); box.appendChild(h("div", { class: "vz-title", text: sp.q }));
    const res = h("div"); const opts = sp.o || [];
    const draw = pick => { res.textContent = ""; opts.forEach((o, i) => { const b = h("button", { class: "vz-opt" + (pick != null ? (o.ok ? " ok" : (i === pick ? " bad" : "")) : ""), type: "button", text: o.t }); b.onclick = () => draw(i); res.appendChild(b); if(pick != null && (i === pick || o.ok)) res.appendChild(h("div", { class: "vz-why", text: (o.ok ? "Right: " : "Not quite: ") + o.why })); }); };
    box.appendChild(h("div", { class: "vz-legend", text: "Pick an answer, then read why." })); box.appendChild(res); el.appendChild(box); draw(null);
  }

  function picker(el, sp, ctx){
    const box = h("div", { class: "vz vz-card" }); box.appendChild(h("div", { class: "vz-title", text: sp.q }));
    const chips = h("div", { class: "vz-chips" }), out = h("div", { class: "vz-info", text: sp.hint || "Pick one." });
    (sp.i || []).forEach((it, i) => { const c = h("button", { class: "vz-chip", type: "button", text: it.t }); c.onclick = () => { [...chips.children].forEach(x => x.classList.remove("on")); c.classList.add("on"); out.textContent = ""; out.appendChild(h("div", { text: it.r })); if(it.links && ctx.chips){ const d = h("div"); d.innerHTML = ctx.chips(it.links); out.appendChild(d); } }; chips.appendChild(c); });
    box.appendChild(chips); box.appendChild(out); el.appendChild(box);
  }

  const FN = { ceil: Math.ceil, floor: Math.floor, round: Math.round, min: Math.min, max: Math.max };
  function calcExpr(src, vars){
    const tk = String(src).match(/\d+\.?\d*|[A-Za-z_][A-Za-z0-9_]*|[-+*/(),]/g) || []; let p = 0;
    const peek = () => tk[p], nxt = () => tk[p++];
    function expr(){ let v = term(); while(peek() === "+" || peek() === "-"){ const o = nxt(), r = term(); v = o === "+" ? v + r : v - r; } return v; }
    function term(){ let v = fac(); while(peek() === "*" || peek() === "/"){ const o = nxt(), r = fac(); v = o === "*" ? v * r : (r === 0 ? 0 : v / r); } return v; }
    function fac(){ const t = nxt(); if(t === undefined) return 0; if(t === "-") return -fac(); if(t === "("){ const v = expr(); nxt(); return v; } if(/^\d/.test(t)) return parseFloat(t);
      if(peek() === "("){ nxt(); const a = []; if(peek() !== ")"){ a.push(expr()); while(peek() === ","){ nxt(); a.push(expr()); } } nxt(); const f = FN[t]; return f ? f(...a) : 0; }
      return Number(vars[t]) || 0; }
    return expr();
  }
  const fmtv = (v, f) => { if(!isFinite(v)) return "n/a"; if(f === "usd") return "$" + (Math.abs(v) >= 1000 ? Math.round(v).toLocaleString() : v.toFixed(2)); if(f === "pct") return v.toFixed(1) + "%"; if(f === "dec1") return v.toFixed(1); return Math.round(v).toLocaleString(); };
  function calc(el, sp){
    const box = h("div", { class: "vz vz-card" }); box.appendChild(h("div", { class: "vz-title", text: sp.title })); if(sp.note) box.appendChild(h("div", { class: "vz-legend", text: sp.note }));
    const vars = {}, vals = {}, outEls = [];
    (sp.inputs || []).forEach(inp => { vars[inp.id] = inp.v; const sl = h("input", { type: "range", min: inp.min, max: inp.max, step: inp.step || 1, value: inp.v, "aria-label": inp.l }); const val = h("div", { class: "vz-val" }); vals[inp.id] = val;
      sl.oninput = () => { vars[inp.id] = Number(sl.value); update(); }; box.appendChild(h("div", { class: "vz-row" }, [h("div", { text: inp.l }), sl, val])); });
    const outBox = h("div", { class: "vz-out" }); box.appendChild(outBox);
    (sp.outputs || []).forEach(o => { const b = h("b"), sp2 = h("span", { text: o.l }), d = h("div", {}, [b, sp2]); outBox.appendChild(d); outEls.push({ o, b }); });
    function update(){ (sp.inputs || []).forEach(inp => { vals[inp.id].textContent = fmtv(vars[inp.id], inp.f || "int") + (inp.u ? " " + inp.u : ""); });
      outEls.forEach(({ o, b }) => { const v = calcExpr(o.f, vars); if(o.id) vars[o.id] = v; b.textContent = fmtv(v, o.fmt) + (o.u ? " " + o.u : ""); }); }
    el.appendChild(box); update();
  }

  window.SDViz = { mount(el, sp, ctx){ ctx = ctx || {}; try{ if(sp.type === "flow") flow(el, sp, ctx); else if(sp.type === "choice") choice(el, sp); else if(sp.type === "picker") picker(el, sp, ctx); else if(sp.type === "calc") calc(el, sp); }catch(e){ el.textContent = "Visual could not be drawn."; } } };
})();
