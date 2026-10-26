window.PROBLEM = {
 "id": "2466",
 "title": "Count Ways To Build Good Strings",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "low=high=3, zero=one=1: every binary string of length 3 works → 8.",
 "idea": "dp[len] is the number of strings of exactly that length: you reach len by appending a block of `zero` zeros to length len−zero or a block of `one` ones to length len−one. Add up dp[low..high].",
 "input": "low = 3, high = 3, zero = 1, one = 1",
 "output": "8",
 "notes": [],
 "best": "dp[len] is the number of strings of exactly that length: you reach len by appending a block of `zero` zeros to length len−zero or a block of `one` ones to length len−one. Add up dp[low..high].",
 "variants": [
  {
   "name": "Length DP: append zero or one block",
   "code": "class Solution:\n    def countGoodStrings(self, low, high, zero, one):\n        MOD = 10**9 + 7\n        dp = [0] * (high + 1)\n        dp[0] = 1\n        for n in range(1, high + 1):\n            if n >= zero:\n                dp[n] += dp[n - zero]\n            if n >= one:\n                dp[n] += dp[n - one]\n            dp[n] %= MOD\n        return sum(dp[low:high + 1]) % MOD",
   "time": "O(high)",
   "space": "O(high)",
   "explain": "dp[len] is the number of strings of exactly that length: you reach len by appending a block of `zero` zeros to length len−zero or a block of `one` ones to length len−one. Add up dp[low..high].",
   "frames": []
  }
 ]
};
