window.PROBLEM = {
 "id": "2050",
 "title": "Parallel Courses III",
 "level": "Hard",
 "topic": "Graph",
 "question": "There are n courses (1 to n). relations[i] = [a, b] means course a must be finished before course b starts. time[i] is how many months course i+1 takes. You can take any number of courses at once as long as their prerequisites are finished. Return the minimum number of months needed to finish all courses. Example: n=3, relations [[1,3],[2,3]], time [3,2,5] → courses 1 and 2 run together (3 months), then course 3 takes 5 → 8.",
 "why": "Each course takes some months; you can take any number in parallel but only after their prerequisites finish. Minimum months to finish everything?",
 "idea": "Process courses in topological order. A course finishes at (latest finish among its prerequisites) + its own duration. The answer is the largest finish time.",
 "input": "n=3, relations [[1,3],[2,3]], time [3,2,5]",
 "output": "8",
 "notes": [],
 "best": "Process courses in topological order. A course finishes at (latest finish among its prerequisites) + its own duration. The answer is the largest finish time.",
 "variants": [
  {
   "name": "Topological order with finish times",
   "code": "class Solution:\n    def minimumTime(self, n, relations, time):\n        g = defaultdict(list)\n        indeg = [0] * (n + 1)\n        for a, b in relations:\n            g[a].append(b)\n            indeg[b] += 1\n        finish = [0] * (n + 1)\n        q = deque()\n        for i in range(1, n + 1):\n            if indeg[i] == 0:\n                q.append(i)\n                finish[i] = time[i - 1]\n        while q:\n            u = q.popleft()\n            for v in g[u]:\n                finish[v] = max(finish[v], finish[u] + time[v - 1])\n                indeg[v] -= 1\n                if indeg[v] == 0: q.append(v)\n        return max(finish)",
   "time": "O(n + E)",
   "space": "O(n + E)",
   "explain": "Process courses in topological order. A course finishes at (latest finish among its prerequisites) + its own duration. The answer is the largest finish time.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Memoised longest path",
   "tag": "Alternative",
   "code": "class Solution:\n    def minimumTime(self, n, relations, time):\n        pre = defaultdict(list)\n        for a, b in relations: pre[b].append(a)\n        @lru_cache(None)\n        def done(u):\n            return time[u - 1] + max((done(p) for p in pre[u]), default=0)\n        return max(done(u) for u in range(1, n + 1))",
   "time": "O(n + E)",
   "space": "O(n)",
   "explain": "A course finishes at its own time plus the latest finish among its prerequisites (computed recursively).",
   "frames": [],
   "alt": true
  }
 ]
};
