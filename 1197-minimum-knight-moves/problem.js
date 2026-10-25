window.PROBLEM = {
 "id": "1197",
 "title": "Minimum Knight Moves",
 "level": "Medium",
 "topic": "Graph",
 "question": "A chess knight moves in an L shape: 2 squares one way and 1 square at a right angle (8 possible moves). The board is infinite in every direction, and the knight starts at (0, 0). Return the minimum number of moves needed to reach the square (x, y). Example: x=5, y=5 → 4 moves.",
 "why": "A chess knight starts at (0,0) on an endless board. How many moves to reach (x, y)?",
 "idea": "BFS over board squares, 8 knight moves each. By symmetry we may use |x| and |y|, and never need to stray more than 2 squares beyond the target.",
 "input": "x=5, y=5",
 "output": "4",
 "notes": [],
 "best": "BFS over board squares, 8 knight moves each. By symmetry we may use |x| and |y|, and never need to stray more than 2 squares beyond the target.",
 "variants": [
  {
   "name": "BFS on a bounded board",
   "code": "class Solution:\n    def minKnightMoves(self, x, y):\n        x, y = abs(x), abs(y)\n        q, seen, steps = deque([(0, 0)]), {(0, 0)}, 0\n        while q:\n            for _ in range(len(q)):\n                cx, cy = q.popleft()\n                if (cx, cy) == (x, y): return steps\n                for dx, dy in ((1, 2), (2, 1), (2, -1), (1, -2), (-1, -2), (-2, -1), (-2, 1), (-1, 2)):\n                    nx, ny = cx + dx, cy + dy\n                    if (nx, ny) not in seen and -2 <= nx <= x + 2 and -2 <= ny <= y + 2:\n                        seen.add((nx, ny))\n                        q.append((nx, ny))\n            steps += 1",
   "time": "O(x·y)",
   "space": "O(x·y)",
   "explain": "BFS over board squares, 8 knight moves each. By symmetry we may use |x| and |y|, and never need to stray more than 2 squares beyond the target.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursion + memo (symmetry)",
   "tag": "Alternative",
   "code": "class Solution:\n    def minKnightMoves(self, x, y):\n        @lru_cache(None)\n        def dfs(x, y):\n            if x + y == 0: return 0\n            if x + y == 2: return 2\n            return min(dfs(abs(x - 1), abs(y - 2)), dfs(abs(x - 2), abs(y - 1))) + 1\n        return dfs(abs(x), abs(y))",
   "time": "O(x·y)",
   "space": "O(x·y)",
   "explain": "By symmetry the cost of (x,y) depends on two smaller targets; memoise them.",
   "frames": [],
   "alt": true
  }
 ]
};
