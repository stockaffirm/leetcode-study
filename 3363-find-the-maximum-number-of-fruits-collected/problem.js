window.PROBLEM = {
 "id": "3363",
 "title": "Find the Maximum Number of Fruits Collected",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "The 4×4 sample: the diagonal gives 34 and the other two children add 66 → 100.",
 "idea": "Three children cross an n×n grid and each reaches (n−1, n−1) in n−1 moves. The child from (0,0) must follow the main diagonal. The child from (0, n−1) stays above the diagonal and the child from (n−1, 0) below it, so they never collide. Each triangle is a simple DP (Dynamic Programming) over rows; the third child is handled by transposing the grid. Total = diagonal + both triangles.",
 "input": "fruits = [[1,2,3,4],[5,6,8,7],[9,10,11,12],[13,14,15,16]]",
 "output": "100",
 "notes": [],
 "best": "Three children cross an n×n grid and each reaches (n−1, n−1) in n−1 moves. The child from (0,0) must follow the main diagonal. The child from (0, n−1) stays above the diagonal and the child from (n−1, 0) below it, so they never collide. Each triangle is a simple DP (Dynamic Programming) over rows; the third child is handled by transposing the grid. Total = diagonal + both triangles.",
 "variants": [
  {
   "name": "Child 1 takes the diagonal; two triangle DPs for the others",
   "code": "class Solution:\n    def maxCollectedFruits(self, fruits):\n        n = len(fruits)\n        NEG = float('-inf')\n        def upper(g):\n            dp = [[NEG] * n for _ in range(n)]\n            dp[0][n - 1] = g[0][n - 1]\n            for i in range(1, n - 1):\n                for j in range(i + 1, n):\n                    best = dp[i - 1][j]\n                    if j - 1 > i - 1:\n                        best = max(best, dp[i - 1][j - 1])\n                    if j + 1 < n:\n                        best = max(best, dp[i - 1][j + 1])\n                    if best > NEG:\n                        dp[i][j] = best + g[i][j]\n            return dp[n - 2][n - 1]\n        diag = sum(fruits[i][i] for i in range(n))\n        t = [list(r) for r in zip(*fruits)]\n        return diag + upper(fruits) + upper(t)",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "Three children cross an n×n grid and each reaches (n−1, n−1) in n−1 moves. The child from (0,0) must follow the main diagonal. The child from (0, n−1) stays above the diagonal and the child from (n−1, 0) below it, so they never collide. Each triangle is a simple DP (Dynamic Programming) over rows; the third child is handled by transposing the grid. Total = diagonal + both triangles.",
   "frames": []
  }
 ]
};
