window.PROBLEM = {
 "id": "1672",
 "title": "Richest Customer Wealth",
 "level": "Easy",
 "topic": "Array / String",
 "question": "accounts[i][j] is the money customer i has in bank j. Return the wealth of the richest customer (the largest total over a row). Example: [[1,2,3],[3,2,1]] → 6.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Loop with a running maximum",
   "tag": "Alternative",
   "code": "class Solution:\n    def maximumWealth(self, accounts):\n        best = 0\n        for row in accounts:\n            total = 0\n            for x in row:\n                total += x\n            best = max(best, total)\n        return best",
   "time": "O(m·n)",
   "space": "O(1)",
   "explain": "Add up each customer's accounts and remember the biggest total.",
   "frames": [],
   "alt": true
  }
 ]
};
