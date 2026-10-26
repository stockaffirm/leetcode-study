window.PROBLEM = {
 "id": "2977",
 "title": "Minimum Cost to Convert String II",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "Like part I, but you change whole SUBSTRINGS (of various lengths) at once with given costs. Cheapest conversion of source into target?",
 "idea": "Treat each distinct substring in the rules as a node and run Floyd–Warshall for chain costs. Then dp[i] = cheapest cost to fix the first i characters: either they already match, or a substring starting at i is converted by a rule chain.",
 "input": "source abcdefgh → acdeeghh with rules bcd→cde (1), fgh→thh (3), thh→ghh (5)",
 "output": "9",
 "notes": [],
 "best": "Treat each distinct substring in the rules as a node and run Floyd–Warshall for chain costs. Then dp[i] = cheapest cost to fix the first i characters: either they already match, or a substring starting at i is converted by a rule chain.",
 "variants": [
  {
   "name": "Floyd–Warshall on strings + DP over positions",
   "code": "class Solution:\n    def minimumCost(self, source, target, original, changed, cost):\n        ids = {}\n        for s in original + changed: ids.setdefault(s, len(ids))\n        k = len(ids)\n        INF = float('inf')\n        d = [[INF] * k for _ in range(k)]\n        for i in range(k): d[i][i] = 0\n        for a, b, c in zip(original, changed, cost): d[ids[a]][ids[b]] = min(d[ids[a]][ids[b]], c)\n        for m in range(k):\n            for i in range(k):\n                for j in range(k):\n                    if d[i][m] + d[m][j] < d[i][j]: d[i][j] = d[i][m] + d[m][j]\n        lengths = sorted({len(s) for s in ids})\n        n = len(source)\n        dp = [INF] * (n + 1)\n        dp[0] = 0\n        for i in range(n):\n            if dp[i] == INF: continue\n            if source[i] == target[i]: dp[i + 1] = min(dp[i + 1], dp[i])\n            for L in lengths:\n                if i + L > n: break\n                a, b = source[i:i + L], target[i:i + L]\n                if a in ids and b in ids and d[ids[a]][ids[b]] < INF:\n                    dp[i + L] = min(dp[i + L], dp[i] + d[ids[a]][ids[b]])\n        return dp[n] if dp[n] < INF else -1",
   "time": "O(k³ + n·L)",
   "space": "O(k²)",
   "explain": "Treat each distinct substring in the rules as a node and run Floyd–Warshall for chain costs. Then dp[i] = cheapest cost to fix the first i characters: either they already match, or a substring starting at i is converted by a rule chain.",
   "frames": []
  }
 ]
};
