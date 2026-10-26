window.PROBLEM = {
 "id": "1672",
 "title": "Richest Customer Wealth",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "Both customers have 1 + 2 + 3 = 6 → 6.",
 "idea": "A customer's wealth is the sum of their row. Return the largest row sum.",
 "input": "accounts = [[1,2,3],[3,2,1]]",
 "output": "6",
 "notes": [],
 "best": "A customer's wealth is the sum of their row. Return the largest row sum.",
 "variants": [
  {
   "name": "Row sums",
   "code": "class Solution:\n    def maximumWealth(self, accounts):\n        return max(sum(row) for row in accounts)",
   "time": "O(m·n)",
   "space": "O(1)",
   "explain": "A customer's wealth is the sum of their row. Return the largest row sum.",
   "frames": []
  }
 ]
};
