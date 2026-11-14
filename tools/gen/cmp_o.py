import re,sys,subprocess
bfile,dfile=sys.argv[1],sys.argv[2]
src=open(bfile).read()
os_={}
for m in re.finditer(r'lite\(\{id:(\d+),.*?\bo:"((?:[^"\\]|\\.)*)",time:',src,re.S): os_[int(m.group(1))]=m.group(2).replace('\\"','"')
ns={}; exec(open(dfile).read(),ns)
out=subprocess.run(['python3','check_c.py']+[str(i) for i in ns['D']],capture_output=True,text=True).stdout
for line in out.splitlines():
    m=re.match(r'(\d+) v0 main= (.*?) \| edge=',line)
    if not m: continue
    i=int(m.group(1)); got=m.group(2).strip(); want=os_.get(i,'?')
    n=lambda x:x.replace("'",'"').replace('True','true').replace('False','false').replace('None','null').replace(' ','')
    if n(got)!=n(want): print(i,'o=',want,'| main=',got)
