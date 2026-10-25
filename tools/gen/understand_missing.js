// lists problems on the site that have no "Understanding the code" entry yet (reads every gen/understand*.json)
const fs=require("fs"),path=require("path");const und={};
fs.readdirSync(__dirname).filter(f=>/^understand.*\.json$/.test(f)).forEach(f=>Object.assign(und,JSON.parse(fs.readFileSync(path.join(__dirname,f),"utf8"))));
const root=path.join(process.env.HOME,"Claude","leetcode-study"),miss=[];let total=0;
for(const d of fs.readdirSync(root)){const p=path.join(root,d,"problem.js");if(!fs.existsSync(p))continue;total++;const id=d.split("-")[0];if(!und[id])miss.push(d)}
console.log(total+" problems, "+(total-miss.length)+" have understanding, "+miss.length+" missing");if(process.argv[2]==="-l")console.log(miss.join("\n"));
