window.PROBLEM = {
 "id": "1833",
 "title": "Maximum Ice Cream Bars",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "costs [1,3,2,4,1], 7 coins → 1,1,2,3 = 7 → 4 bars.",
 "idea": "To buy as many as possible, buy the cheapest first. Sort the costs and keep buying while the coins last.",
 "input": "costs = [1,3,2,4,1], coins = 7",
 "output": "4",
 "notes": [],
 "best": "To buy as many as possible, buy the cheapest first. Sort the costs and keep buying while the coins last.",
 "variants": [
  {
   "name": "Buy the cheapest first",
   "code": "class Solution:\n    def maxIceCream(self, costs, coins):\n        bars = 0\n        for c in sorted(costs):\n            if c > coins:\n                break\n            coins -= c\n            bars += 1\n        return bars",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "To buy as many as possible, buy the cheapest first. Sort the costs and keep buying while the coins last.",
   "frames": []
  }
 ]
};
