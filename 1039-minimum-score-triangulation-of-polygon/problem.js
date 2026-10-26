window.PROBLEM = {
 "id": "1039",
 "title": "Minimum Score Triangulation of Polygon",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "A convex polygon has values at its corners. Cut it into triangles; each triangle's score is the product of its three corner values. Minimise the total score.",
 "idea": "For the edge between corners i and j, pick the corner k between them that forms the triangle (i, k, j) over that edge; the two remaining parts are smaller polygons: dp[i][j] = min over k of dp[i][k] + dp[k][j] + v[i]·v[k]·v[j].",
 "input": "[3,7,4,5]",
 "output": "144",
 "notes": [],
 "best": "For the edge between corners i and j, pick the corner k between them that forms the triangle (i, k, j) over that edge; the two remaining parts are smaller polygons: dp[i][j] = min over k of dp[i][k] + dp[k][j] + v[i]·v[k]·v[j].",
 "variants": [
  {
   "name": "Interval DP over the chosen apex",
   "code": "class Solution:\n    def minScoreTriangulation(self, values):\n        n = len(values)\n        dp = [[0] * n for _ in range(n)]\n        for length in range(2, n):\n            for i in range(n - length):\n                j = i + length\n                dp[i][j] = min(dp[i][k] + dp[k][j] + values[i] * values[k] * values[j] for k in range(i + 1, j))\n        return dp[0][n - 1]",
   "time": "O(n³)",
   "space": "O(n²)",
   "explain": "For the edge between corners i and j, pick the corner k between them that forms the triangle (i, k, j) over that edge; the two remaining parts are smaller polygons: dp[i][j] = min over k of dp[i][k] + dp[k][j] + v[i]·v[k]·v[j].",
   "frames": []
  }
 ]
};
