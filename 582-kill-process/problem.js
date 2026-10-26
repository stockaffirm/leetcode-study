window.PROBLEM = {
 "id": "582",
 "title": "Kill Process",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "pid [1,3,10,5], ppid [3,0,5,3], kill 5 → killing 5 also kills its child 10 → [5,10].",
 "idea": "ppid tells each process's parent. Build a map parent → children, then walk down from the killed process, collecting everything under it.",
 "input": "pid = [1,3,10,5], ppid = [3,0,5,3], kill = 5",
 "output": "[5, 10]",
 "notes": [],
 "best": "ppid tells each process's parent. Build a map parent → children, then walk down from the killed process, collecting everything under it.",
 "variants": [
  {
   "name": "Tree of children, BFS from the killed process",
   "code": "class Solution:\n    def killProcess(self, pid, ppid, kill):\n        kids = defaultdict(list)\n        for p, par in zip(pid, ppid):\n            kids[par].append(p)\n        res = []\n        q = deque([kill])\n        while q:\n            u = q.popleft()\n            res.append(u)\n            q.extend(kids[u])\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "ppid tells each process's parent. Build a map parent → children, then walk down from the killed process, collecting everything under it.",
   "frames": []
  }
 ]
};
