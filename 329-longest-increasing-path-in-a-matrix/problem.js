window.PROBLEM = {
 "id": "329",
 "title": "Longest Increasing Path in a Matrix",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "A grid of numbers is given. From any cell you may step up, down, left or right, but only onto a strictly bigger number. Return the length (number of cells) of the longest such path, starting anywhere. Example: [[9,9,4],[6,6,8],[2,1,1]] → 4 (the path 1 → 2 → 6 → 9).",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Topological layers",
   "tag": "Alternative",
   "code": "class Solution:\n    def longestIncreasingPath(self, matrix):\n        m, n = len(matrix), len(matrix[0])\n        indeg = [[0] * n for _ in range(m)]\n        for i in range(m):\n            for j in range(n):\n                for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                    a, b = i + dr, j + dc\n                    if 0 <= a < m and 0 <= b < n and matrix[a][b] < matrix[i][j]: indeg[i][j] += 1\n        q = deque((i, j) for i in range(m) for j in range(n) if indeg[i][j] == 0)\n        layers = 0\n        while q:\n            layers += 1\n            for _ in range(len(q)):\n                r, c = q.popleft()\n                for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                    a, b = r + dr, c + dc\n                    if 0 <= a < m and 0 <= b < n and matrix[a][b] > matrix[r][c]:\n                        indeg[a][b] -= 1\n                        if indeg[a][b] == 0: q.append((a, b))\n        return layers",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Peel the cells that have no smaller neighbour layer by layer (like Kahn's algorithm); the number of layers is the path length.",
   "frames": [],
   "alt": true
  }
 ]
};
