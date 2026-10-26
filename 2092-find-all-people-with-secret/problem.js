window.PROBLEM = {
 "id": "2092",
 "title": "Find All People with Secret",
 "level": "Hard",
 "topic": "Graph",
 "question": "People 0 and firstPerson know a secret at time 0. Meetings [x, y, time] happen at given times; at a meeting anyone who knows the secret tells the other immediately, and it can spread through several meetings at the SAME time. Return everyone who finally knows the secret. Example: n=6, meetings [[1,2,5],[2,3,8],[1,5,10]], firstPerson 1 → [0,1,2,3,5].",
 "why": "Person 0 tells person 1 at time 0. Meetings at time 5 spread it to 2, time 8 to 3, and time 10 to 5.",
 "idea": "Handle meetings in time order. Inside one time, build a small graph of that time's meetings and spread the secret by BFS from everyone who already knows it. People who met but never touched a secret-holder learn nothing.",
 "input": "n=6, meetings=[[1,2,5],[2,3,8],[1,5,10]], firstPerson=1",
 "output": "[0,1,2,3,5]",
 "notes": [],
 "best": "Handle meetings in time order. Inside one time, build a small graph of that time's meetings and spread the secret by BFS from everyone who already knows it. People who met but never touched a secret-holder learn nothing.",
 "variants": [
  {
   "name": "Process meetings time by time",
   "code": "class Solution:\n    def findAllPeople(self, n, meetings, firstPerson):\n        know = {0, firstPerson}\n        by_time = defaultdict(list)\n        for x, y, t in meetings:\n            by_time[t].append((x, y))\n        for t in sorted(by_time):\n            g = defaultdict(list)\n            for x, y in by_time[t]:\n                g[x].append(y)\n                g[y].append(x)\n            q = deque(p for p in g if p in know)\n            seen = set(q)\n            while q:\n                p = q.popleft()\n                for nb in g[p]:\n                    if nb not in seen:\n                        seen.add(nb)\n                        q.append(nb)\n            know |= seen\n        return sorted(know)",
   "time": "O(M log M)",
   "space": "O(M)",
   "explain": "Handle meetings in time order. Inside one time, build a small graph of that time's meetings and spread the secret by BFS from everyone who already knows it. People who met but never touched a secret-holder learn nothing.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Repeat spreading inside each time",
   "tag": "Alternative",
   "code": "class Solution:\n    def findAllPeople(self, n, meetings, firstPerson):\n        know = {0, firstPerson}\n        by_time = defaultdict(list)\n        for x, y, t in meetings:\n            by_time[t].append((x, y))\n        for t in sorted(by_time):\n            changed = True\n            while changed:\n                changed = False\n                for x, y in by_time[t]:\n                    if (x in know) != (y in know):\n                        know.add(x)\n                        know.add(y)\n                        changed = True\n        return sorted(know)",
   "time": "O(M²)",
   "space": "O(M)",
   "explain": "For one time keep scanning its meetings until nobody new learns the secret.",
   "frames": [],
   "alt": true
  }
 ]
};
