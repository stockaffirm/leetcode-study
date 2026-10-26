window.PROBLEM = {
 "id": "2144",
 "title": "Minimum Cost of Buying Candies With Discount",
 "level": "Easy",
 "topic": "Greedy",
 "question": "",
 "why": "[6,5,7,9,2,2] → pay 9 + 7 + 5 + 2? → every third from the top is free: total 23.",
 "idea": "When you buy two candies you get the cheapest of the next ones free (not more expensive than either). Sort the costs descending and skip every third.",
 "input": "cost = [6,5,7,9,2,2]",
 "output": "23",
 "notes": [],
 "best": "When you buy two candies you get the cheapest of the next ones free (not more expensive than either). Sort the costs descending and skip every third.",
 "variants": [
  {
   "name": "Sort descending; every third candy is free",
   "code": "class Solution:\n    def minimumCost(self, cost):\n        cost = sorted(cost, reverse=True)\n        return sum(c for i, c in enumerate(cost) if i % 3 != 2)",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "When you buy two candies you get the cheapest of the next ones free (not more expensive than either). Sort the costs descending and skip every third.",
   "frames": []
  }
 ]
};
