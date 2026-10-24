// Generate sets.json (company sets) from companies.json + the topics of the problems in b*.js.
// Each set lists ids that are built (old or new); index.js shows only ids not in an earlier section.
const fs=require("fs"),path=require("path");const lib=require("./lib");
fs.readdirSync(__dirname).filter(f=>/^b\d+\.js$/.test(f)).sort().forEach(b=>require("./"+b));
const src=fs.readFileSync(path.join(__dirname,"build.js"),"utf8");
const g1=eval(src.match(/const groups=(\[\[.*?\]\]);/s)[1]),g2=eval(src.match(/const groups150=(\[\[.*?\]\]);/s)[1]);
const have=new Set([...g1,...g2].flatMap(g=>g[1]));const topic={};for(const p of lib.probs){have.add(+p.id);topic[+p.id]=p.topic}
const comps=JSON.parse(fs.readFileSync(path.join(__dirname,"companies.json"),"utf8"));
const TOP=["Array / String","Two Pointers","Sliding Window","Hash Map / Set","Prefix Sum","Sorting","Stack / Monotonic Stack","Queue","Linked List","Binary Tree","Binary Search Tree","Graph","Heap","Binary Search","Backtracking","Dynamic Programming","Greedy","Math / Bit Manipulation","Intervals","Trie","Matrix","Design","Union Find / Segment Tree","Other"];
const sets=[];let miss=0;
for(const[key,c]of Object.entries(comps)){const by={};let n=0;
 for(const id of c.ids){if(!have.has(id)){miss++;continue}const t=topic[id]||"Already on the site";(by[t]=by[t]||[]).push(id);n++}
 const names=Object.keys(by).sort((a,b)=>(TOP.indexOf(a)<0?99:TOP.indexOf(a))-(TOP.indexOf(b)<0?99:TOP.indexOf(b)));
 sets.push({key,title:c.title,note:"not in the lists above",groups:names.map(t=>[t,by[t]])})}
fs.writeFileSync(path.join(__dirname,"sets.json"),JSON.stringify(sets));
console.log("sets:",sets.map(s=>s.key+":"+s.groups.reduce((a,g)=>a+g[1].length,0)).join(" "),"| not built yet:",miss);
