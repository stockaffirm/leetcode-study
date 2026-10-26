window.PROBLEM = {
 "id": "3148",
 "title": "Maximum Difference Score in a Grid",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "From a cell you may move to any cell to the right or below it (any distance, at least one move). A move scores (destination value − source value). Return the maximum total score of a path of one or more moves. Example: [[9,5,7,3],[8,9,6,1],[6,7,14,3],[2,5,3,1]] → 9.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every start and end",
   "tag": "Brute force",
   "code": "class Solution:\n    def maxScore(self, grid):\n        m, n = len(grid), len(grid[0])\n        best = float('-inf')\n        for i in range(m):\n            for j in range(n):\n                for a in range(i, m):\n                    for b in range(j, n):\n                        if (a, b) != (i, j):\n                            best = max(best, grid[a][b] - grid[i][j])\n        return best",
   "time": "O((mn)²)",
   "space": "O(1)",
   "explain": "Score of any move chain is end − start; test every pair where the end is right/below the start.",
   "frames": [],
   "alt": true
  }
 ]
};
