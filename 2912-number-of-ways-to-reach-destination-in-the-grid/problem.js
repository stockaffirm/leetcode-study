window.PROBLEM = {
 "id": "2912",
 "title": "Number of Ways to Reach Destination in the Grid",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "A grid has n rows and m columns (1-indexed). In one move you go from a cell to any OTHER cell of the same row or the same column. Return the number of ways to get from source to dest in exactly k moves, modulo 1,000,000,007. Example: n=3, m=2, k=2, source [1,1], dest [2,2] → 2.",
 "why": "On an n×m grid you move to any other cell in your row or column. Count the ways to go from the source to the destination in exactly k moves (modulo 10⁹+7).",
 "idea": "Only four kinds of cell matter relative to the destination: the destination itself, same row, same column, and others. Keep how many ways end in each kind and update them k times with the move counts between kinds.",
 "input": "n=3, m=2, k=2, source [1,1], dest [2,2]",
 "output": "2",
 "notes": [],
 "best": "Only four kinds of cell matter relative to the destination: the destination itself, same row, same column, and others. Keep how many ways end in each kind and update them k times with the move counts between kinds.",
 "variants": [
  {
   "name": "Four kinds of cells",
   "code": "class Solution:\n    def numberOfWays(self, n, m, k, source, dest):\n        MOD = 10 ** 9 + 7\n        D = R = C = O = 0\n        if source == dest: D = 1\n        elif source[0] == dest[0]: R = 1\n        elif source[1] == dest[1]: C = 1\n        else: O = 1\n        for _ in range(k):\n            D, R, C, O = ((R + C) % MOD, (D * (m - 1) + R * (m - 2) + O) % MOD, (D * (n - 1) + C * (n - 2) + O) % MOD, (R * (n - 1) + C * (m - 1) + O * (m + n - 4)) % MOD)\n        return D",
   "time": "O(k)",
   "space": "O(1)",
   "explain": "Only four kinds of cell matter relative to the destination: the destination itself, same row, same column, and others. Keep how many ways end in each kind and update them k times with the move counts between kinds.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DP over the real grid",
   "tag": "Brute force",
   "code": "class Solution:\n    def numberOfWays(self, n, m, k, source, dest):\n        MOD = 10 ** 9 + 7\n        dp = [[0] * (m + 1) for _ in range(n + 1)]\n        dp[source[0]][source[1]] = 1\n        for _ in range(k):\n            new = [[0] * (m + 1) for _ in range(n + 1)]\n            for x in range(1, n + 1):\n                for y in range(1, m + 1):\n                    if dp[x][y]:\n                        for y2 in range(1, m + 1):\n                            if y2 != y: new[x][y2] = (new[x][y2] + dp[x][y]) % MOD\n                        for x2 in range(1, n + 1):\n                            if x2 != x: new[x2][y] = (new[x2][y] + dp[x][y]) % MOD\n            dp = new\n        return dp[dest[0]][dest[1]]",
   "time": "O(k·n·m·(n+m))",
   "space": "O(n·m)",
   "explain": "Count ways to be at every cell after each move.",
   "frames": [],
   "alt": true
  }
 ]
};
