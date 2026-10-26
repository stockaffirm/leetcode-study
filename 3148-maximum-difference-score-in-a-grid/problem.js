window.PROBLEM = {
 "id": "3148",
 "title": "Maximum Difference Score in a Grid",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "Grid [[9,5,7,3],[8,9,6,1],[6,7,14,3],[2,5,3,1]]: go from 2 to 14 and on → total score 9.",
 "idea": "Moving from a cell to any cell to its right or below scores (destination − source), and a path's total telescopes to (last − first). So for each cell the best path ending there starts at the smallest cell reachable going up/left. Keep the running minimum of each prefix rectangle and take the best of cell − min(top, left).",
 "input": "grid = [[9,5,7,3],[8,9,6,1],[6,7,14,3],[2,5,3,1]]",
 "output": "9",
 "notes": [],
 "best": "Moving from a cell to any cell to its right or below scores (destination − source), and a path's total telescopes to (last − first). So for each cell the best path ending there starts at the smallest cell reachable going up/left. Keep the running minimum of each prefix rectangle and take the best of cell − min(top, left).",
 "variants": [
  {
   "name": "Best score = cell − smallest cell above-left",
   "code": "class Solution:\n    def maxScore(self, grid):\n        m, n = len(grid), len(grid[0])\n        INF = float('inf')\n        mn = [[INF] * n for _ in range(m)]\n        best = -INF\n        for i in range(m):\n            for j in range(n):\n                prev = min(mn[i - 1][j] if i else INF, mn[i][j - 1] if j else INF)\n                best = max(best, grid[i][j] - prev)\n                mn[i][j] = min(grid[i][j], prev)\n        return best",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Moving from a cell to any cell to its right or below scores (destination − source), and a path's total telescopes to (last − first). So for each cell the best path ending there starts at the smallest cell reachable going up/left. Keep the running minimum of each prefix rectangle and take the best of cell − min(top, left).",
   "frames": []
  }
 ]
};
