window.PROBLEM = {
 "id": "265",
 "title": "Paint House II",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
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
   "frames": []
  }
 ]
};
