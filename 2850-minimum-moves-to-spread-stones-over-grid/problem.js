window.PROBLEM = {
 "id": "2850",
 "title": "Minimum Moves to Spread Stones Over Grid",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "A 3×3 grid holds nine stones in total (cells may have several). In one move a stone moves to an adjacent cell. Return the minimum moves so that every cell has exactly one stone. Example: [[1,1,0],[1,1,1],[1,2,1]] → 3.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "BFS over grid states",
   "tag": "Brute force",
   "code": "class Solution:\n    def minimumMoves(self, grid):\n        start = tuple(tuple(r) for r in grid)\n        goal = tuple(tuple(1 for _ in range(3)) for _ in range(3))\n        seen = {start}\n        q = deque([(start, 0)])\n        while q:\n            st, d = q.popleft()\n            if st == goal:\n                return d\n            for i in range(3):\n                for j in range(3):\n                    if st[i][j] > 1:\n                        for a, b in ((i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)):\n                            if 0 <= a < 3 and 0 <= b < 3:\n                                g = [list(r) for r in st]\n                                g[i][j] -= 1\n                                g[a][b] += 1\n                                ns = tuple(tuple(r) for r in g)\n                                if ns not in seen:\n                                    seen.add(ns)\n                                    q.append((ns, d + 1))\n        return -1",
   "time": "exponential",
   "space": "O(states)",
   "explain": "Move one stone to a neighbour cell per step until every cell holds one stone.",
   "frames": [],
   "alt": true
  }
 ]
};
