window.PROBLEM = {
 "id": "3393",
 "title": "Count Paths With the Given XOR Value",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "grid [[2,1,5],[7,10,0],[12,6,4]], k=11 → 3 paths.",
 "idea": "Values are below 16, so a path's xor is also below 16. dp[i][j][x] = number of paths from the start to (i, j) with xor x. A cell takes counts from above and from the left, shifting their xor values by the cell's number. The answer is dp at the end cell with xor k, modulo 1e9+7.",
 "input": "grid = [[2,1,5],[7,10,0],[12,6,4]], k = 11",
 "output": "3",
 "notes": [],
 "best": "Values are below 16, so a path's xor is also below 16. dp[i][j][x] = number of paths from the start to (i, j) with xor x. A cell takes counts from above and from the left, shifting their xor values by the cell's number. The answer is dp at the end cell with xor k, modulo 1e9+7.",
 "variants": [
  {
   "name": "dp over cells and xor value (< 16)",
   "code": "class Solution:\n    def countPathsWithXorValue(self, grid, k):\n        MOD = 10**9 + 7\n        m, n = len(grid), len(grid[0])\n        dp = [[[0] * 16 for _ in range(n)] for _ in range(m)]\n        dp[0][0][grid[0][0]] = 1\n        for i in range(m):\n            for j in range(n):\n                if i == 0 and j == 0:\n                    continue\n                for x in range(16):\n                    ways = 0\n                    if i:\n                        ways += dp[i - 1][j][x ^ grid[i][j]]\n                    if j:\n                        ways += dp[i][j - 1][x ^ grid[i][j]]\n                    dp[i][j][x] = ways % MOD\n        return dp[m - 1][n - 1][k] if k < 16 else 0",
   "time": "O(m·n·16)",
   "space": "O(m·n·16)",
   "explain": "Values are below 16, so a path's xor is also below 16. dp[i][j][x] = number of paths from the start to (i, j) with xor x. A cell takes counts from above and from the left, shifting their xor values by the cell's number. The answer is dp at the end cell with xor k, modulo 1e9+7.",
   "frames": []
  }
 ]
};
