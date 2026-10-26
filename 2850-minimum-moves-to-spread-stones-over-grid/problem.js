window.PROBLEM = {
 "id": "2850",
 "title": "Minimum Moves to Spread Stones Over Grid",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "",
 "why": "The 3×3 sample has one cell with 2 stones and one empty cell: moving a stone there costs the distance → total 3.",
 "idea": "There are exactly nine stones. List the cells with extra stones (one entry per extra stone) and the empty cells; both lists have the same length. Every extra stone must go to a distinct empty cell at cost = Manhattan distance, so try all assignments (permutations) and take the cheapest.",
 "input": "grid = [[1,1,0],[1,1,1],[1,2,1]]",
 "output": "3",
 "notes": [],
 "best": "There are exactly nine stones. List the cells with extra stones (one entry per extra stone) and the empty cells; both lists have the same length. Every extra stone must go to a distinct empty cell at cost = Manhattan distance, so try all assignments (permutations) and take the cheapest.",
 "variants": [
  {
   "name": "Match surplus stones to empty cells",
   "code": "class Solution:\n    def minimumMoves(self, grid):\n        extra, empty = [], []\n        for i in range(3):\n            for j in range(3):\n                if grid[i][j] == 0:\n                    empty.append((i, j))\n                for _ in range(grid[i][j] - 1):\n                    extra.append((i, j))\n        best = float('inf')\n        for perm in permutations(empty):\n            total = sum(abs(a[0] - b[0]) + abs(a[1] - b[1]) for a, b in zip(extra, perm))\n            best = min(best, total)\n        return best",
   "time": "O(k!)",
   "space": "O(k)",
   "explain": "There are exactly nine stones. List the cells with extra stones (one entry per extra stone) and the empty cells; both lists have the same length. Every extra stone must go to a distinct empty cell at cost = Manhattan distance, so try all assignments (permutations) and take the cheapest.",
   "frames": []
  }
 ]
};
