# merge exact LeetCode slugs of all lite problems (b*.js) into the site's assets/lcslugs.js
import re,glob,json,os
p=os.path.expanduser('~/Claude/leetcode-study/assets/lcslugs.js')
t=open(p).read()
d=json.loads(re.search(r'window\.LCSLUG=(\{.*\})',t,re.S).group(1))
n=0
for f in glob.glob('b*.js'):
    for m in re.finditer(r'lite\(\{id:(\d+),slug:"([^"]+)"',open(f).read()):
        if m.group(1) not in d: d[m.group(1)]=m.group(2); n+=1
open(p,'w').write('window.LCSLUG='+json.dumps(d,separators=(',',':'))+';\n' if t.rstrip().endswith(';') else 'window.LCSLUG='+json.dumps(d,separators=(',',':')))
print('added',n,'total',len(d))
