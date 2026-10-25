window.PROBLEM = {
 "id": "1155",
 "title": "Number of Dice Rolls With Target Sum",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "You roll n dice, each with faces 1…k. Return the number of ways the faces can add up to target, modulo 1 000 000 007. Example: n=2, k=6, target=7 → 6.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Top-down recursion",
   "tag": "Alternative",
   "code": "class Solution:\n    def numRollsToTarget(self, n, k, target):\n        MOD = 10**9 + 7\n        @lru_cache(None)\n        def go(dice, rem):\n            if dice == 0:\n                return 1 if rem == 0 else 0\n            if rem < dice or rem > dice * k:\n                return 0\n            return sum(go(dice - 1, rem - f) for f in range(1, k + 1)) % MOD\n        return go(n, target)",
   "time": "O(n·target·k)",
   "space": "O(n·target)",
   "explain": "ways(dice left, remaining target) with memoisation.",
   "frames": [],
   "alt": true
  }
 ]
};
