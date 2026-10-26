window.PROBLEM = {
 "id": "3418",
 "title": "Maximum Amount of Money Robot Can Earn",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "[[0,1,-1],[1,-2,3],[2,-3,4]] → neutralise two robbers, end with 8.",
 "idea": "The robot moves right or down. A negative cell is a robber that steals that amount unless the robot neutralises it, which can be done at most twice. dp[i][j][t] = best total at (i, j) having neutralised t robbers: from the top or left cell add coins (or, for a robber with t > 0 left, skip the loss and use one neutralisation).",
 "input": "coins = [[0,1,-1],[1,-2,3],[2,-3,4]]",
 "output": "8",
 "notes": [],
 "best": "The robot moves right or down. A negative cell is a robber that steals that amount unless the robot neutralises it, which can be done at most twice. dp[i][j][t] = best total at (i, j) having neutralised t robbers: from the top or left cell add coins (or, for a robber with t > 0 left, skip the loss and use one neutralisation).",
 "variants": [
  {
   "name": "DP over cell and neutralisations used",
   "code": "class Solution:\n    def maximumAmount(self, coins):\n        m, n = len(coins), len(coins[0])\n        NEG = float('-inf')\n        dp = [[[NEG] * 3 for _ in range(n)] for _ in range(m)]\n        for i in range(m):\n            for j in range(n):\n                v = coins[i][j]\n                for t in range(3):\n                    prev = NEG\n                    if i == 0 and j == 0:\n                        prev = 0\n                    else:\n                        if i:\n                            prev = max(prev, dp[i - 1][j][t])\n                        if j:\n                            prev = max(prev, dp[i][j - 1][t])\n                    cand = prev + v\n                    if v < 0 and t > 0:\n                        before = 0 if (i == 0 and j == 0) else max(dp[i - 1][j][t - 1] if i else NEG, dp[i][j - 1][t - 1] if j else NEG)\n                        cand = max(cand, before)\n                    dp[i][j][t] = cand\n        return max(dp[m - 1][n - 1])",
   "time": "O(m·n·3)",
   "space": "O(m·n·3)",
   "explain": "The robot moves right or down. A negative cell is a robber that steals that amount unless the robot neutralises it, which can be done at most twice. dp[i][j][t] = best total at (i, j) having neutralised t robbers: from the top or left cell add coins (or, for a robber with t > 0 left, skip the loss and use one neutralisation).",
   "frames": []
  }
 ]
};
