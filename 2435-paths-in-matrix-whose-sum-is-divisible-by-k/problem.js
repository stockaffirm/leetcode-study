window.PROBLEM = {
 "id": "2435",
 "title": "Paths in Matrix Whose Sum Is Divisible by K",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "A grid of non-negative integers is given. Starting at the top-left cell, move only right or down to the bottom-right cell. Count the paths where the sum of all cell values on the path is divisible by k; return the count modulo 1,000,000,007. Example: [[5,2,4],[3,0,5],[0,7,2]], k=3 → 2.",
 "why": "Walk from the top-left to the bottom-right of a grid moving only right or down. Count the paths whose sum of cell values is divisible by k (modulo 10⁹+7).",
 "idea": "For every cell keep an array ways[r] = number of paths reaching it with sum ≡ r (mod k). Each cell merges the arrays from above and from the left, shifted by its own value.",
 "input": "[[5,2,4],[3,0,5],[0,7,2]], k=3",
 "output": "2",
 "notes": [],
 "best": "For every cell keep an array ways[r] = number of paths reaching it with sum ≡ r (mod k). Each cell merges the arrays from above and from the left, shifted by its own value.",
 "variants": [
  {
   "name": "DP over (cell, remainder)",
   "code": "class Solution:\n    def numberOfPaths(self, grid, k):\n        MOD = 10 ** 9 + 7\n        m, n = len(grid), len(grid[0])\n        dp = [[0] * k for _ in range(n)]\n        for i in range(m):\n            new = [[0] * k for _ in range(n)]\n            for j in range(n):\n                v = grid[i][j] % k\n                if i == 0 and j == 0:\n                    new[0][v] = 1\n                    continue\n                for r in range(k):\n                    ways = (dp[j][r] if i else 0) + (new[j - 1][r] if j else 0)\n                    if ways: new[j][(r + v) % k] = (new[j][(r + v) % k] + ways) % MOD\n            dp = new\n        return dp[n - 1][0]",
   "time": "O(m·n·k)",
   "space": "O(n·k)",
   "explain": "For every cell keep an array ways[r] = number of paths reaching it with sum ≡ r (mod k). Each cell merges the arrays from above and from the left, shifted by its own value.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Top-down recursion",
   "tag": "Alternative",
   "code": "class Solution:\n    def numberOfPaths(self, grid, k):\n        MOD = 10 ** 9 + 7\n        m, n = len(grid), len(grid[0])\n        @lru_cache(None)\n        def f(i, j, r):\n            r = (r + grid[i][j]) % k\n            if i == m - 1 and j == n - 1: return 1 if r == 0 else 0\n            total = 0\n            if i + 1 < m: total += f(i + 1, j, r)\n            if j + 1 < n: total += f(i, j + 1, r)\n            return total % MOD\n        return f(0, 0, 0)",
   "time": "O(m·n·k)",
   "space": "O(m·n·k)",
   "explain": "f(i, j, r) = number of ways to finish from (i, j) when the sum so far is ≡ r.",
   "frames": [],
   "alt": true
  }
 ]
};
