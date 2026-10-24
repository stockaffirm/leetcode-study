// Replace each problem's question with the precise, layman-readable statement from questions*.js
const fs=require("fs"),path=require("path");
const root=path.join(process.env.HOME,"Claude","leetcode-study");
const order=eval("(function(){var window={};"+fs.readFileSync(path.join(root,"assets/order.js"),"utf8")+";return window.ORDER})()");
const Q={};for(const f of fs.readdirSync(__dirname).filter(f=>/^questions\d+\.js$/.test(f)).sort())Object.assign(Q,require("./"+f));
let n=0,miss=[];
for(const d of order){const p=path.join(root,d,"problem.js");const src=fs.readFileSync(p,"utf8");
 const P=eval("(function(){var window={};"+src+";return window.PROBLEM})()");
 if(!Q[P.id]){miss.push(P.id);continue}
 let q=Q[P.id];
 const gloss=[["O(log(m+n))","O(log(m+n)) (very fast: the work shrinks to a tiny fraction of the input size)"],["O(log(m·n))","O(log(m·n)) (very fast: the work shrinks to a tiny fraction of the grid size)"],["O(n log n)","O(n log n) (a bit slower than just reading the input once)"],["O(log n)","O(log n) (very fast: the work is halved at every step)"],["O(n)","O(n) (time grows only in step with the input size)"],["O(1)","O(1) (fixed time or memory, however big the input)"]];
 for(const [k,v] of gloss){const i=q.indexOf(k);if(i>=0){q=q.slice(0,i)+v+q.slice(i+k.length);break}}
 if(/null/.test(q)&&!/level by level/.test(q))q+=" (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)";
 P.question=q;fs.writeFileSync(p,"window.PROBLEM = "+JSON.stringify(P,null,1)+";\n");n++}
console.log("questions applied:",n,"missing:",miss.join(",")||"none");
