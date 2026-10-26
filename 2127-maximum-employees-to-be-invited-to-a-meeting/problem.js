window.PROBLEM = {
 "id": "2127",
 "title": "Maximum Employees to Be Invited to a Meeting",
 "level": "Hard",
 "topic": "Graph",
 "question": "",
 "why": "favorite [2,2,1,2] → the cycle 1 ↔ 2 with the chain 0 → 2 and 3 → 2 gives 3.",
 "idea": "Each employee points to a favourite, so the graph is made of cycles with trees hanging off them. A table around a cycle of length ≥ 3 seats exactly the cycle. For a 2-cycle (a ↔ b) the table also seats the longest chain leading into a and the longest into b. Answer = max(longest cycle, sum over all 2-cycles of (2 + chain lengths)). Chain depths come from a topological peel of nodes with in-degree 0.",
 "input": "favorite = [2,2,1,2]",
 "output": "3",
 "notes": [],
 "best": "Each employee points to a favourite, so the graph is made of cycles with trees hanging off them. A table around a cycle of length ≥ 3 seats exactly the cycle. For a 2-cycle (a ↔ b) the table also seats the longest chain leading into a and the longest into b. Answer = max(longest cycle, sum over all 2-cycles of (2 + chain lengths)). Chain depths come from a topological peel of nodes with in-degree 0.",
 "variants": [
  {
   "name": "Functional graph: longest cycle vs 2-cycles with their chains",
   "code": "class Solution:\n    def maximumInvitations(self, favorite):\n        n = len(favorite)\n        indeg = [0] * n\n        for f in favorite:\n            indeg[f] += 1\n        depth = [1] * n\n        q = deque(i for i in range(n) if indeg[i] == 0)\n        while q:\n            u = q.popleft()\n            v = favorite[u]\n            depth[v] = max(depth[v], depth[u] + 1)\n            indeg[v] -= 1\n            if indeg[v] == 0:\n                q.append(v)\n        longest_cycle = pairs = 0\n        seen = [False] * n\n        for i in range(n):\n            if indeg[i] == 0 or seen[i]:\n                continue\n            cycle = []\n            j = i\n            while not seen[j]:\n                seen[j] = True\n                cycle.append(j)\n                j = favorite[j]\n            if len(cycle) == 2:\n                a, b = cycle\n                pairs += depth[a] + depth[b]\n            else:\n                longest_cycle = max(longest_cycle, len(cycle))\n        return max(longest_cycle, pairs)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Each employee points to a favourite, so the graph is made of cycles with trees hanging off them. A table around a cycle of length ≥ 3 seats exactly the cycle. For a 2-cycle (a ↔ b) the table also seats the longest chain leading into a and the longest into b. Answer = max(longest cycle, sum over all 2-cycles of (2 + chain lengths)). Chain depths come from a topological peel of nodes with in-degree 0.",
   "frames": []
  }
 ]
};
