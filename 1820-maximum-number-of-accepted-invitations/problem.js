window.PROBLEM = {
 "id": "1820",
 "title": "Maximum Number of Accepted Invitations",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "grid [[1,1,1],[1,0,1],[0,0,1]]: every boy can get a different girl → 3 invitations.",
 "idea": "This is maximum bipartite matching between boys (rows) and girls (columns). For each boy try to find an augmenting path with DFS (Depth-First Search): take a free girl, or re-route the boy who currently holds her to another girl.",
 "input": "grid = [[1,1,1],[1,0,1],[0,0,1]]",
 "output": "3",
 "notes": [],
 "best": "This is maximum bipartite matching between boys (rows) and girls (columns). For each boy try to find an augmenting path with DFS (Depth-First Search): take a free girl, or re-route the boy who currently holds her to another girl.",
 "variants": [
  {
   "name": "Bipartite matching (augmenting paths)",
   "code": "class Solution:\n    def maximumInvitations(self, grid):\n        m, n = len(grid), len(grid[0])\n        match = [-1] * n\n        def try_boy(b, seen):\n            for g in range(n):\n                if grid[b][g] and g not in seen:\n                    seen.add(g)\n                    if match[g] == -1 or try_boy(match[g], seen):\n                        match[g] = b\n                        return True\n            return False\n        return sum(try_boy(b, set()) for b in range(m))",
   "time": "O(V·E)",
   "space": "O(V)",
   "explain": "This is maximum bipartite matching between boys (rows) and girls (columns). For each boy try to find an augmenting path with DFS (Depth-First Search): take a free girl, or re-route the boy who currently holds her to another girl.",
   "frames": []
  }
 ]
};
