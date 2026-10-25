window.PROBLEM = {
 "id": "1395",
 "title": "Count Number of Teams",
 "level": "Medium",
 "topic": "Array / String",
 "question": "A team is three soldiers i<j<k whose ratings are strictly increasing or strictly decreasing. Return the number of teams. Example: [2,5,3,4,1] → 3.",
 "why": "[2,5,3,4,1]: teams (2,3,4), (5,4,1), (5,3,1) → 3.",
 "idea": "A team is an increasing or decreasing triple i<j<k. Fix the middle j: the increasing teams are (smaller on the left) × (larger on the right), the decreasing teams are (larger on the left) × (smaller on the right).",
 "input": "rating = [2,5,3,4,1]",
 "output": "3",
 "notes": [],
 "best": "A team is an increasing or decreasing triple i<j<k. Fix the middle j: the increasing teams are (smaller on the left) × (larger on the right), the decreasing teams are (larger on the left) × (smaller on the right).",
 "variants": [
  {
   "name": "For each middle soldier, smaller/larger on both sides",
   "code": "class Solution:\n    def numTeams(self, rating):\n        n = len(rating)\n        res = 0\n        for j in range(n):\n            ls = sum(rating[i] < rating[j] for i in range(j))\n            lg = j - ls\n            rs = sum(rating[k] < rating[j] for k in range(j + 1, n))\n            rg = n - j - 1 - rs\n            res += ls * rg + lg * rs\n        return res",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "A team is an increasing or decreasing triple i<j<k. Fix the middle j: the increasing teams are (smaller on the left) × (larger on the right), the decreasing teams are (larger on the left) × (smaller on the right).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every triple",
   "tag": "Brute force",
   "code": "class Solution:\n    def numTeams(self, rating):\n        n = len(rating)\n        res = 0\n        for i in range(n):\n            for j in range(i + 1, n):\n                for k in range(j + 1, n):\n                    a, b, c = rating[i], rating[j], rating[k]\n                    if a < b < c or a > b > c:\n                        res += 1\n        return res",
   "time": "O(n³)",
   "space": "O(1)",
   "explain": "Try all index triples.",
   "frames": [],
   "alt": true
  }
 ]
};
