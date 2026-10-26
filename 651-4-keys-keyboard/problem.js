window.PROBLEM = {
 "id": "651",
 "title": "4 Keys Keyboard",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "n=7 → A A A, Ctrl-A, Ctrl-C, Ctrl-V, Ctrl-V → 9.",
 "idea": "With i presses left, either press A (+1) or choose a point j < i − 2 where you select-all, copy, then paste i − j − 2 times: dp[i] = max(dp[i−1] + 1, dp[j] · (i − j − 1)).",
 "input": "n = 7",
 "output": "9",
 "notes": [],
 "best": "With i presses left, either press A (+1) or choose a point j < i − 2 where you select-all, copy, then paste i − j − 2 times: dp[i] = max(dp[i−1] + 1, dp[j] · (i − j − 1)).",
 "variants": [
  {
   "name": "dp[i] = best count after i key presses",
   "code": "class Solution:\n    def maxA(self, n):\n        dp = list(range(n + 1))\n        for i in range(3, n + 1):\n            for j in range(1, i - 2):\n                dp[i] = max(dp[i], dp[j] * (i - j - 1))\n        return dp[n]",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "With i presses left, either press A (+1) or choose a point j < i − 2 where you select-all, copy, then paste i − j − 2 times: dp[i] = max(dp[i−1] + 1, dp[j] · (i − j − 1)).",
   "frames": []
  }
 ]
};
