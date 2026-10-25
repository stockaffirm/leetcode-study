window.PROBLEM = {
 "id": "2076",
 "title": "Process Restricted Friend Requests",
 "level": "Hard",
 "topic": "Union Find / Segment Tree",
 "question": "n people start as strangers. restrictions [x, y] say that x and y must never end up in the same friend group (directly or through friends). Process the friend requests in order: a request is approved if it does not break any restriction; approved requests make them friends. Return a list of true/false per request. Example: n=3, restrictions [[0,1]], requests [[0,2],[2,1]] → [true, false].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Add the friendship, then test every restriction",
   "tag": "Brute force",
   "code": "class Solution:\n    def friendRequests(self, n, restrictions, requests):\n        adj = [set() for _ in range(n)]\n        def connected(a, b):\n            seen = {a}\n            dq = deque([a])\n            while dq:\n                u = dq.popleft()\n                if u == b:\n                    return True\n                for v in adj[u]:\n                    if v not in seen:\n                        seen.add(v)\n                        dq.append(v)\n            return False\n        res = []\n        for u, v in requests:\n            if v in adj[u]:\n                res.append(True)\n                continue\n            adj[u].add(v)\n            adj[v].add(u)\n            bad = any(connected(x, y) for x, y in restrictions)\n            if bad:\n                adj[u].remove(v)\n                adj[v].remove(u)\n            res.append(not bad)\n        return res",
   "time": "O(Q · R · (n + E))",
   "space": "O(n + E)",
   "explain": "Tentatively add the edge, search the graph for each restricted pair, and undo it if one is connected.",
   "frames": [],
   "alt": true
  }
 ]
};
