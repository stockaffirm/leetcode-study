window.PROBLEM = {
 "id": "1462",
 "title": "Course Schedule IV",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
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
   "frames": []
  }
 ]
};
