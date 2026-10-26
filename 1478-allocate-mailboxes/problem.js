window.PROBLEM = {
 "id": "1478",
 "title": "Allocate Mailboxes",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "houses [1,4,8,10,20], 3 mailboxes → groups (1,4),(8,10),(20): 3 + 2 + 0 = 5.",
 "idea": "Sort the houses and split them into k contiguous groups, each with one mailbox at the group's median (the cheapest spot). cost(i, j) is the total distance to the median of houses i..j. dp[g][j] = min over split points of dp[g−1][i] + cost(i, j−1).",
 "input": "houses = [1,4,8,10,20], k = 3",
 "output": "5",
 "notes": [],
 "best": "Sort the houses and split them into k contiguous groups, each with one mailbox at the group's median (the cheapest spot). cost(i, j) is the total distance to the median of houses i..j. dp[g][j] = min over split points of dp[g−1][i] + cost(i, j−1).",
 "variants": [
  {
   "name": "Partition sorted houses; each group uses its median",
   "code": "class Solution:\n    def minDistance(self, houses, k):\n        houses.sort()\n        n = len(houses)\n        cost = [[0] * n for _ in range(n)]\n        for i in range(n):\n            for j in range(i, n):\n                mid = houses[(i + j) // 2]\n                cost[i][j] = sum(abs(houses[t] - mid) for t in range(i, j + 1))\n        INF = float('inf')\n        dp = [[INF] * (n + 1) for _ in range(k + 1)]\n        dp[0][0] = 0\n        for g in range(1, k + 1):\n            for j in range(1, n + 1):\n                for i in range(g - 1, j):\n                    dp[g][j] = min(dp[g][j], dp[g - 1][i] + cost[i][j - 1])\n        return dp[k][n]",
   "time": "O(k·n²)",
   "space": "O(n²)",
   "explain": "Sort the houses and split them into k contiguous groups, each with one mailbox at the group's median (the cheapest spot). cost(i, j) is the total distance to the median of houses i..j. dp[g][j] = min over split points of dp[g−1][i] + cost(i, j−1).",
   "frames": []
  }
 ]
};
