window.PROBLEM = {
 "id": "2076",
 "title": "Process Restricted Friend Requests",
 "level": "Hard",
 "topic": "Union Find / Segment Tree",
 "question": "",
 "why": "Request 0–2 is fine. Request 2–1 would put 0 and 1 in the same friend group, which is forbidden, so it is rejected.",
 "idea": "Keep friend groups with Union Find. For a request, look at the two groups; if any restricted pair would end up with one person in each group, reject it. Otherwise merge.",
 "input": "n=3, restrictions=[[0,1]], requests=[[0,2],[2,1]]",
 "output": "[true, false]",
 "notes": [],
 "best": "Keep friend groups with Union Find. For a request, look at the two groups; if any restricted pair would end up with one person in each group, reject it. Otherwise merge.",
 "variants": [
  {
   "name": "Union Find with restriction check",
   "code": "class Solution:\n    def friendRequests(self, n, restrictions, requests):\n        parent = list(range(n))\n        def find(x):\n            while parent[x] != x:\n                parent[x] = parent[parent[x]]\n                x = parent[x]\n            return x\n        res = []\n        for u, v in requests:\n            pu, pv = find(u), find(v)\n            ok = True\n            if pu != pv:\n                for x, y in restrictions:\n                    px, py = find(x), find(y)\n                    if (px, py) in ((pu, pv), (pv, pu)):\n                        ok = False\n                        break\n            if ok:\n                parent[pu] = pv\n            res.append(ok)\n        return res",
   "time": "O(R · Q)",
   "space": "O(n)",
   "explain": "Keep friend groups with Union Find. For a request, look at the two groups; if any restricted pair would end up with one person in each group, reject it. Otherwise merge.",
   "frames": []
  }
 ]
};
