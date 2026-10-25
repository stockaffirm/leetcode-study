window.PROBLEM = {
 "id": "115",
 "title": "Distinct Subsequences",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "Count in how many different ways the string t can be obtained as a subsequence of s (taking letters in order, not necessarily next to each other; different positions count as different ways). Example: s 'rabbbit', t 'rabbit' → 3.",
 "why": "'rabbbit' contains 'rabbit' as a subsequence in 3 different ways (choose which two of the three b's to use).",
 "idea": "dp[j] is the number of ways to form the first j letters of t from the part of s read so far. For each letter of s that equals t[j−1], we can use it: dp[j] += dp[j−1]. Update j from high to low so each letter is used once.",
 "input": "s = \"rabbbit\", t = \"rabbit\"",
 "output": "3",
 "notes": [],
 "best": "dp[j] is the number of ways to form the first j letters of t from the part of s read so far. For each letter of s that equals t[j−1], we can use it: dp[j] += dp[j−1]. Update j from high to low so each letter is used once.",
 "variants": [
  {
   "name": "1D DP over t",
   "code": "class Solution:\n    def numDistinct(self, s, t):\n        dp = [1] + [0] * len(t)\n        for ch in s:\n            for j in range(len(t), 0, -1):\n                if t[j - 1] == ch:\n                    dp[j] += dp[j - 1]\n        return dp[len(t)]",
   "time": "O(|s|·|t|)",
   "space": "O(|t|)",
   "explain": "dp[j] is the number of ways to form the first j letters of t from the part of s read so far. For each letter of s that equals t[j−1], we can use it: dp[j] += dp[j−1]. Update j from high to low so each letter is used once.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Memoized recursion",
   "tag": "Alternative",
   "code": "class Solution:\n    def numDistinct(self, s, t):\n        @lru_cache(None)\n        def go(i, j):\n            if j == len(t):\n                return 1\n            if i == len(s):\n                return 0\n            res = go(i + 1, j)\n            if s[i] == t[j]:\n                res += go(i + 1, j + 1)\n            return res\n        return go(0, 0)",
   "time": "O(|s|·|t|)",
   "space": "O(|s|·|t|)",
   "explain": "go(i, j) counts the ways to form t[j:] from s[i:].",
   "frames": [],
   "alt": true
  }
 ]
};
