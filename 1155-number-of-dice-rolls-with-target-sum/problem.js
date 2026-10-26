window.PROBLEM = {
 "id": "1155",
 "title": "Number of Dice Rolls With Target Sum",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "2 dice with 6 faces, target 7 → 6 ways.",
 "idea": "ways[d][s] = number of ways to reach sum s with d dice = sum of ways[d−1][s−f] over faces f = 1…k. Build up the table die by die; answer ways[n][target] modulo 1e9+7.",
 "input": "n = 2, k = 6, target = 7",
 "output": "6",
 "notes": [],
 "best": "ways[d][s] = number of ways to reach sum s with d dice = sum of ways[d−1][s−f] over faces f = 1…k. Build up the table die by die; answer ways[n][target] modulo 1e9+7.",
 "variants": [
  {
   "name": "DP over dice and running sum",
   "code": "class Solution:\n    def numRollsToTarget(self, n, k, target):\n        MOD = 10**9 + 7\n        dp = [0] * (target + 1)\n        dp[0] = 1\n        for _ in range(n):\n            new = [0] * (target + 1)\n            for s in range(1, target + 1):\n                for f in range(1, min(k, s) + 1):\n                    new[s] = (new[s] + dp[s - f]) % MOD\n            dp = new\n        return dp[target]",
   "time": "O(n·target·k)",
   "space": "O(target)",
   "explain": "ways[d][s] = number of ways to reach sum s with d dice = sum of ways[d−1][s−f] over faces f = 1…k. Build up the table die by die; answer ways[n][target] modulo 1e9+7.",
   "frames": []
  }
 ]
};
