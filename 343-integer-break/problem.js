window.PROBLEM = {
 "id": "343",
 "title": "Integer Break",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "10 = 3 + 3 + 4 → 3 · 3 · 4 = 36, the biggest product.",
 "idea": "Splitting into 3s gives the best product (a 4 is as good as 2 + 2). So peel off 3s while the rest is more than 4, then multiply by what is left. Small n (2 and 3) must be split in at least two parts.",
 "input": "n = 10",
 "output": "36",
 "notes": [],
 "best": "Splitting into 3s gives the best product (a 4 is as good as 2 + 2). So peel off 3s while the rest is more than 4, then multiply by what is left. Small n (2 and 3) must be split in at least two parts.",
 "variants": [
  {
   "name": "Use as many 3s as possible",
   "code": "class Solution:\n    def integerBreak(self, n):\n        if n <= 3:\n            return n - 1\n        res = 1\n        while n > 4:\n            res *= 3\n            n -= 3\n        return res * n",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Splitting into 3s gives the best product (a 4 is as good as 2 + 2). So peel off 3s while the rest is more than 4, then multiply by what is left. Small n (2 and 3) must be split in at least two parts.",
   "frames": []
  }
 ]
};
