window.PROBLEM = {
 "id": "329",
 "title": "Longest Increasing Path in a Matrix",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "Move up/down/left/right to a strictly bigger number each step. How long can the path be?",
 "idea": "The longest path starting at a cell is 1 + the best among bigger neighbours. Cache it per cell, so every cell is solved once.",
 "input": "[[9,9,4],[6,6,8],[2,1,1]]",
 "output": "4",
 "notes": [],
 "best": "The longest path starting at a cell is 1 + the best among bigger neighbours. Cache it per cell, so every cell is solved once.",
 "variants": [
  {
   "name": "DFS with memoisation",
   "code": "class Solution:\n    def longestIncreasingPath(self, matrix):\n        m, n = len(matrix), len(matrix[0])\n        @lru_cache(None)\n        def go(r, c):\n            best = 1\n            for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                a, b = r + dr, c + dc\n                if 0 <= a < m and 0 <= b < n and matrix[a][b] > matrix[r][c]: best = max(best, 1 + go(a, b))\n            return best\n        return max(go(i, j) for i in range(m) for j in range(n))",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "The longest path starting at a cell is 1 + the best among bigger neighbours. Cache it per cell, so every cell is solved once.",
   "frames": []
  }
 ]
};
