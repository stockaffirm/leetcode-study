window.PROBLEM = {
 "id": "741",
 "title": "Cherry Pickup",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "A grid has 0 (free), 1 (a cherry) and −1 (a thorn). Walk from the top-left to the bottom-right moving only right or down, then back to the top-left moving only left or up, picking up cherries on the way (a picked cell becomes 0). Return the maximum number of cherries, or 0 if there is no valid path. Example: [[0,1,−1],[1,0,−1],[1,1,1]] → 5.",
 "why": "Walk from the top-left to the bottom-right (right/down), then back to the top-left (left/up), picking cherries (each can be taken once) and avoiding thorns (−1). Maximise cherries.",
 "idea": "Going back is the same as a second walker going down. Move both walkers one step at a time: state = (step, row of walker 1, row of walker 2). Count a shared cell once.",
 "input": "[[0,1,-1],[1,0,-1],[1,1,1]]",
 "output": "5",
 "notes": [],
 "best": "Going back is the same as a second walker going down. Move both walkers one step at a time: state = (step, row of walker 1, row of walker 2). Count a shared cell once.",
 "variants": [
  {
   "name": "Two walkers at once",
   "code": "class Solution:\n    def cherryPickup(self, grid):\n        n = len(grid)\n        NEG = float('-inf')\n        dp = [[NEG] * n for _ in range(n)]\n        dp[0][0] = grid[0][0]\n        for k in range(1, 2 * n - 1):\n            new = [[NEG] * n for _ in range(n)]\n            for i in range(max(0, k - n + 1), min(n, k + 1)):\n                for j in range(max(0, k - n + 1), min(n, k + 1)):\n                    if grid[i][k - i] == -1 or grid[j][k - j] == -1: continue\n                    best = max(dp[i][j], dp[i - 1][j] if i else NEG, dp[i][j - 1] if j else NEG, dp[i - 1][j - 1] if i and j else NEG)\n                    if best == NEG: continue\n                    gain = grid[i][k - i] + (grid[j][k - j] if i != j else 0)\n                    new[i][j] = best + gain\n            dp = new\n        return max(0, dp[n - 1][n - 1])",
   "time": "O(n³)",
   "space": "O(n²)",
   "explain": "Going back is the same as a second walker going down. Move both walkers one step at a time: state = (step, row of walker 1, row of walker 2). Count a shared cell once.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursion with memo",
   "tag": "Alternative",
   "code": "class Solution:\n    def cherryPickup(self, grid):\n        n = len(grid)\n        NEG = float('-inf')\n        @lru_cache(None)\n        def f(k, i, j):\n            ci, cj = k - i, k - j\n            if min(ci, cj) < 0 or max(i, j, ci, cj) >= n or grid[i][ci] == -1 or grid[j][cj] == -1: return NEG\n            if k == 2 * n - 2: return grid[i][ci]\n            gain = grid[i][ci] + (grid[j][cj] if i != j else 0)\n            return gain + max(f(k + 1, i, j), f(k + 1, i + 1, j), f(k + 1, i, j + 1), f(k + 1, i + 1, j + 1))\n        return max(0, f(0, 0, 0))",
   "time": "O(n³)",
   "space": "O(n³)",
   "explain": "f(step, row1, row2) = best total from this step on for two walkers.",
   "frames": [],
   "alt": true
  }
 ]
};
