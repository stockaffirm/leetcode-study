window.PROBLEM = {
 "id": "1197",
 "title": "Minimum Knight Moves",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
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
   "frames": []
  }
 ]
};
