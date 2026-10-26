window.PROBLEM = {
 "id": "265",
 "title": "Paint House II",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "There are n houses in a row and k paint colours; costs[i][j] is the cost of painting house i with colour j. Neighbouring houses must not have the same colour. Return the minimum total cost. Example: [[1,5,3],[2,9,4]] → 5 (house 0 in colour 0 costs 1, house 1 in colour 2 costs 4).",
 "why": "Paint a row of houses with one of k colours (a different cost for each house and colour); neighbouring houses must differ. Find the minimum total cost.",
 "idea": "For each house you only need the cheapest and second cheapest total from the previous house: use the cheapest unless it has the same colour, then use the second.",
 "input": "[[1,5,3],[2,9,4]]",
 "output": "5",
 "notes": [],
 "best": "For each house you only need the cheapest and second cheapest total from the previous house: use the cheapest unless it has the same colour, then use the second.",
 "variants": [
  {
   "name": "Keep the two cheapest previous costs",
   "code": "class Solution:\n    def minCostII(self, costs):\n        min1 = min2 = 0\n        idx = -1\n        for row in costs:\n            n1 = n2 = float('inf')\n            n_idx = -1\n            for j, c in enumerate(row):\n                total = c + (min2 if j == idx else min1)\n                if total < n1: n1, n2, n_idx = total, n1, j\n                elif total < n2: n2 = total\n            min1, min2, idx = n1, n2, n_idx\n        return min1",
   "time": "O(n·k)",
   "space": "O(1)",
   "explain": "For each house you only need the cheapest and second cheapest total from the previous house: use the cheapest unless it has the same colour, then use the second.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every previous colour",
   "tag": "Alternative",
   "code": "class Solution:\n    def minCostII(self, costs):\n        prev = [0] * len(costs[0])\n        for row in costs:\n            prev = [row[j] + min((prev[x] for x in range(len(row)) if x != j), default=0) for j in range(len(row))]\n        return min(prev)",
   "time": "O(n·k²)",
   "space": "O(k)",
   "explain": "For each colour take the cheapest previous total among all other colours.",
   "frames": [],
   "alt": true
  }
 ]
};
