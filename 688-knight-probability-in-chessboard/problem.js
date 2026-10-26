window.PROBLEM = {
 "id": "688",
 "title": "Knight Probability in Chessboard",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "A knight starts on an n×n chessboard at (row, column) and makes exactly k moves. Each move picks one of its 8 possible moves at random (it may jump off the board). Return the probability it is still on the board after the k moves. Example: n=3, k=2, start (0,0) → 0.0625.",
 "why": "A knight on an n×n board makes k random moves (each of the 8 moves equally likely, even off the board). What is the probability it is still on the board after k moves?",
 "idea": "Keep a grid of probabilities of being on each cell. For each move, send 1/8 of every cell's probability to each of its 8 target cells that are on the board. The answer is the total left.",
 "input": "n=3, k=2, start (0,0)",
 "output": "0.0625",
 "notes": [],
 "best": "Keep a grid of probabilities of being on each cell. For each move, send 1/8 of every cell's probability to each of its 8 target cells that are on the board. The answer is the total left.",
 "variants": [
  {
   "name": "Spread probability move by move",
   "code": "class Solution:\n    def knightProbability(self, n, k, row, column):\n        moves = ((1, 2), (2, 1), (-1, 2), (-2, 1), (1, -2), (2, -1), (-1, -2), (-2, -1))\n        dp = [[0.0] * n for _ in range(n)]\n        dp[row][column] = 1.0\n        for _ in range(k):\n            new = [[0.0] * n for _ in range(n)]\n            for r in range(n):\n                for c in range(n):\n                    if dp[r][c]:\n                        for dr, dc in moves:\n                            a, b = r + dr, c + dc\n                            if 0 <= a < n and 0 <= b < n: new[a][b] += dp[r][c] / 8\n            dp = new\n        return sum(map(sum, dp))",
   "time": "O(k·n²)",
   "space": "O(n²)",
   "explain": "Keep a grid of probabilities of being on each cell. For each move, send 1/8 of every cell's probability to each of its 8 target cells that are on the board. The answer is the total left.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursion with memo",
   "tag": "Alternative",
   "code": "class Solution:\n    def knightProbability(self, n, k, row, column):\n        moves = ((1, 2), (2, 1), (-1, 2), (-2, 1), (1, -2), (2, -1), (-1, -2), (-2, -1))\n        @lru_cache(None)\n        def f(k, r, c):\n            if not (0 <= r < n and 0 <= c < n): return 0.0\n            if k == 0: return 1.0\n            return sum(f(k - 1, r + dr, c + dc) for dr, dc in moves) / 8\n        return f(k, row, column)",
   "time": "O(k·n²)",
   "space": "O(k·n²)",
   "explain": "f(k, r, c) = probability of staying on the board for k more moves.",
   "frames": [],
   "alt": true
  }
 ]
};
