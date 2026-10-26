window.PROBLEM = {
 "id": "1301",
 "title": "Number of Paths with Max Score",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "['E23','2X2','12S'] → maximum score 7 reached in 1 way.",
 "idea": "Starting at the bottom-right 'S' you move up, left or diagonally up-left to the top-left 'E', collecting digits ('X' blocks). dp[i][j] = (best score, number of ways) from S: take the maximum over the three predecessor cells (those reachable) and add the cell's digit; ways add up when scores tie. Ways are modulo 1e9+7; answer [0, 0] if E is unreachable.",
 "input": "board = [\"E23\",\"2X2\",\"12S\"]",
 "output": "[7, 1]",
 "notes": [],
 "best": "Starting at the bottom-right 'S' you move up, left or diagonally up-left to the top-left 'E', collecting digits ('X' blocks). dp[i][j] = (best score, number of ways) from S: take the maximum over the three predecessor cells (those reachable) and add the cell's digit; ways add up when scores tie. Ways are modulo 1e9+7; answer [0, 0] if E is unreachable.",
 "variants": [
  {
   "name": "DP from S: best score and number of ways",
   "code": "class Solution:\n    def pathsWithMaxScore(self, board):\n        MOD = 10**9 + 7\n        n = len(board)\n        dp = [[(-1, 0)] * n for _ in range(n)]\n        dp[n - 1][n - 1] = (0, 1)\n        for i in range(n - 1, -1, -1):\n            for j in range(n - 1, -1, -1):\n                if board[i][j] == 'X' or (i == n - 1 and j == n - 1):\n                    continue\n                best, ways = -1, 0\n                for a, b in ((i + 1, j), (i, j + 1), (i + 1, j + 1)):\n                    if a < n and b < n and dp[a][b][0] >= 0:\n                        s, w = dp[a][b]\n                        if s > best:\n                            best, ways = s, w\n                        elif s == best:\n                            ways += w\n                if best >= 0:\n                    val = 0 if board[i][j] == 'E' else int(board[i][j])\n                    dp[i][j] = (best + val, ways % MOD)\n        return list(dp[0][0]) if dp[0][0][0] >= 0 else [0, 0]",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "Starting at the bottom-right 'S' you move up, left or diagonally up-left to the top-left 'E', collecting digits ('X' blocks). dp[i][j] = (best score, number of ways) from S: take the maximum over the three predecessor cells (those reachable) and add the cell's digit; ways add up when scores tie. Ways are modulo 1e9+7; answer [0, 0] if E is unreachable.",
   "frames": []
  }
 ]
};
