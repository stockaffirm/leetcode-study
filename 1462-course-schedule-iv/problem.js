window.PROBLEM = {
 "id": "1462",
 "title": "Course Schedule IV",
 "level": "Medium",
 "topic": "Graph",
 "question": "There are numCourses courses and prerequisite pairs [a, b] meaning you must take a before b (prerequisites may be indirect: a before b before c means a is a prerequisite of c). For each query [u, v] answer whether u is a prerequisite of v. Example: 2 courses, [[1,0]], queries [[0,1],[1,0]] → [False, True].",
 "why": "Prerequisites form a directed graph. Answer queries 'is course u a (direct or indirect) prerequisite of course v?'",
 "idea": "Compute reachability between all pairs once (Floyd–Warshall on booleans) and answer each query by lookup.",
 "input": "n=2, prerequisites [[1,0]], queries [[0,1],[1,0]]",
 "output": "[False, True]",
 "notes": [],
 "best": "Compute reachability between all pairs once (Floyd–Warshall on booleans) and answer each query by lookup.",
 "variants": [
  {
   "name": "Transitive closure",
   "code": "class Solution:\n    def checkIfPrerequisite(self, numCourses, prerequisites, queries):\n        n = numCourses\n        reach = [[False] * n for _ in range(n)]\n        for a, b in prerequisites: reach[a][b] = True\n        for k in range(n):\n            for i in range(n):\n                if reach[i][k]:\n                    for j in range(n):\n                        if reach[k][j]: reach[i][j] = True\n        return [reach[u][v] for u, v in queries]",
   "time": "O(n³)",
   "space": "O(n²)",
   "explain": "Compute reachability between all pairs once (Floyd–Warshall on booleans) and answer each query by lookup.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DFS from every course",
   "tag": "Alternative",
   "code": "class Solution:\n    def checkIfPrerequisite(self, numCourses, prerequisites, queries):\n        g = defaultdict(list)\n        for a, b in prerequisites: g[a].append(b)\n        reach = []\n        for s in range(numCourses):\n            seen, st = set(), [s]\n            while st:\n                u = st.pop()\n                for v in g[u]:\n                    if v not in seen:\n                        seen.add(v)\n                        st.append(v)\n            reach.append(seen)\n        return [v in reach[u] for u, v in queries]",
   "time": "O(n·(n+E))",
   "space": "O(n²)",
   "explain": "Find all courses reachable from each course by DFS.",
   "frames": [],
   "alt": true
  }
 ]
};
