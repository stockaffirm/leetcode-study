window.PROBLEM = {
 "id": "343",
 "title": "Integer Break",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "Break the integer n into at least two positive integers that add up to n so that their product is as large as possible, and return that product. Example: n=10 → 36 (3 × 3 × 4).",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DP over splits",
   "tag": "Brute force",
   "code": "class Solution:\n    def integerBreak(self, n):\n        dp = [0] * (n + 1)\n        dp[1] = 1\n        for i in range(2, n + 1):\n            for j in range(1, i):\n                dp[i] = max(dp[i], max(j, dp[j]) * max(i - j, dp[i - j]))\n        return dp[n]",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "The best product for i is the best over all first cuts j, where each part is either kept whole or split further.",
   "frames": [],
   "alt": true
  }
 ]
};
