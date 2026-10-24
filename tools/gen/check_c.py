# Print main + edge results (variant 0) for company-set drivers, to compare against known answers.
import sys, json, re, glob, importlib
sys.argv=[sys.argv[0]]+sys.argv[1:]
import trace as T
ids=[int(x) for x in sys.argv[1:]]
probs=json.load(open("problems.json"))
mods=[importlib.import_module(f[:-3]) for f in sorted(glob.glob('drivers_c*.py'))]
D={};D2={}
for m in mods: D.update(m.D); D2.update(m.D2)
for i in ids:
    codes=probs[str(i)]
    for vi,c in enumerate(codes):
        try:
            _,_,r=T.run(c,D[i]); _,_,r2=T.run(c,D2[i][0])
            print(i,"v%d"%vi,"main=",T.fmt(r)[:70],"| edge=",T.fmt(r2)[:70])
        except Exception as e: print(i,"v%d"%vi,"ERR",repr(e)[:100])
