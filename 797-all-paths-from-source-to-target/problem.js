window.PROBLEM = {
 "id": "797",
 "title": "All Paths From Source to Target",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "You are given a directed graph with n nodes labelled 0 to n−1 and NO cycles; graph[i] is the list of nodes you can go to from node i. Return all the paths from node 0 to node n−1, in any order. Example: [[1,2],[3],[3],[]] → 0→1→3 and 0→2→3 → [[0,1,3],[0,2,3]].",
 "why": "In a directed graph without cycles, list every path from node 0 to the last node.",
 "idea": "DFS from node 0, adding nodes to a current path; when you reach the last node save a copy; remove the node when you step back.",
 "input": "[[1,2],[3],[3],[]]",
 "output": "[[0,1,3],[0,2,3]]",
 "notes": [],
 "best": "DFS from node 0, adding nodes to a current path; when you reach the last node save a copy; remove the node when you step back.",
 "variants": [
  {
   "name": "DFS with a path list",
   "code": "class Solution:\n    def allPathsSourceTarget(self, graph):\n        n, res = len(graph), []\n        def go(u, path):\n            if u == n - 1:\n                res.append(path[:])\n                return\n            for v in graph[u]:\n                path.append(v)\n                go(v, path)\n                path.pop()\n        go(0, [0])\n        return res",
   "time": "O(2ⁿ·n)",
   "space": "O(n)",
   "explain": "DFS from node 0, adding nodes to a current path; when you reach the last node save a copy; remove the node when you step back.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "BFS over paths",
   "tag": "Alternative",
   "code": "class Solution:\n    def allPathsSourceTarget(self, graph):\n        n = len(graph)\n        q, res = deque([[0]]), []\n        while q:\n            path = q.popleft()\n            if path[-1] == n - 1:\n                res.append(path)\n                continue\n            for v in graph[path[-1]]: q.append(path + [v])\n        return res",
   "time": "O(2ⁿ·n)",
   "space": "O(paths)",
   "explain": "Grow all partial paths level by level.",
   "frames": [],
   "alt": true
  }
 ]
};
