window.PROBLEM = {
 "id": "256",
 "title": "Paint House",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
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
   "frames": []
  }
 ]
};
