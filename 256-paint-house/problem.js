window.PROBLEM = {
 "id": "256",
 "title": "Paint House",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "There is a row of n houses to paint, each in one of three colours. costs[i][c] is the price of painting house i with colour c. Two neighbouring houses must not have the same colour. Return the minimum total price. Example: [[17,2,17],[16,16,5],[14,3,19]] → paint colours 2, 3, 2 → 2 + 5 + 3 = 10.",
 "why": "Paint a row of houses red, blue or green with given prices, never painting neighbours the same colour. Cheapest total?",
 "idea": "For each house keep the cheapest total if it is red, blue or green: each is its own price plus the cheaper of the other two colours from the previous house.",
 "input": "[[17,2,17],[16,16,5],[14,3,19]]",
 "output": "10",
 "notes": [],
 "best": "For each house keep the cheapest total if it is red, blue or green: each is its own price plus the cheaper of the other two colours from the previous house.",
 "variants": [
  {
   "name": "DP over the last house's colour",
   "code": "class Solution:\n    def minCost(self, costs):\n        a, b, c = 0, 0, 0\n        for r, g, bl in costs:\n            a, b, c = r + min(b, c), g + min(a, c), bl + min(a, b)\n        return min(a, b, c)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "For each house keep the cheapest total if it is red, blue or green: each is its own price plus the cheaper of the other two colours from the previous house.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursion with memo",
   "tag": "Alternative",
   "code": "class Solution:\n    def minCost(self, costs):\n        n = len(costs)\n        @lru_cache(None)\n        def go(i, prev):\n            if i == n: return 0\n            return min(costs[i][c] + go(i + 1, c) for c in range(3) if c != prev)\n        return go(0, -1)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Cheapest cost from house i on, given the previous house's colour.",
   "frames": [],
   "alt": true
  }
 ]
};
