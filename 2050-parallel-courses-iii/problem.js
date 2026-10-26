window.PROBLEM = {
 "id": "2050",
 "title": "Parallel Courses III",
 "level": "Hard",
 "topic": "Graph",
 "question": "",
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
   "frames": []
  }
 ]
};
