window.PROBLEM = {
 "id": "1136",
 "title": "Parallel Courses",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "Courses have prerequisites; you can take any number of available courses per semester. Fewest semesters to finish all (−1 if there is a loop)?",
 "idea": "Repeatedly take every course with no remaining prerequisites (one semester per round) using a queue of zero-indegree courses. If not all courses get taken, there is a cycle.",
 "input": "n=3, relations [[1,3],[2,3]]",
 "output": "2",
 "notes": [],
 "best": "Repeatedly take every course with no remaining prerequisites (one semester per round) using a queue of zero-indegree courses. If not all courses get taken, there is a cycle.",
 "variants": [
  {
   "name": "Topological order by semester (Kahn)",
   "code": "class Solution:\n    def minimumSemesters(self, n, relations):\n        g = defaultdict(list)\n        indeg = [0] * (n + 1)\n        for a, b in relations:\n            g[a].append(b)\n            indeg[b] += 1\n        q = deque(i for i in range(1, n + 1) if indeg[i] == 0)\n        sem = taken = 0\n        while q:\n            sem += 1\n            for _ in range(len(q)):\n                u = q.popleft()\n                taken += 1\n                for v in g[u]:\n                    indeg[v] -= 1\n                    if indeg[v] == 0: q.append(v)\n        return sem if taken == n else -1",
   "time": "O(n + E)",
   "space": "O(n + E)",
   "explain": "Repeatedly take every course with no remaining prerequisites (one semester per round) using a queue of zero-indegree courses. If not all courses get taken, there is a cycle.",
   "frames": []
  }
 ]
};
