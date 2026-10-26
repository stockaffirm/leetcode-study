window.PROBLEM = {
 "id": "688",
 "title": "Knight Probability in Chessboard",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
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
   "frames": []
  }
 ]
};
