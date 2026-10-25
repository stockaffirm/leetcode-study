import json,sys
key,title=sys.argv[1],sys.argv[2]
ids=[int(x) for x in sys.argv[3].replace('\n','').split(',') if x.strip()]
drop={int(x) for x in sys.argv[4].split(',')} if len(sys.argv)>4 else set()
ids=[i for i in ids if i not in drop]
d=json.load(open('companies.json'));d[key]={"title":title,"ids":ids};json.dump(d,open('companies.json','w'));print(key,len(ids))
