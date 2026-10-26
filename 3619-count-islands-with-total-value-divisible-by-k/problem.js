window.PROBLEM = {
 "id": "3619",
 "title": "Count Islands With Total Value Divisible by K",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "The sample grid has four islands; two have totals divisible by 5 → 2.",
 "idea": "Cells with positive values are land; neighbours (4 directions) belong to one island. Flood-fill each unvisited land cell, summing the values, and count the islands whose sum is divisible by k.",
 "input": "grid = [[0,2,1,0,0],[0,5,0,0,5],[0,0,1,0,0],[0,1,4,7,0],[0,2,0,0,8]], k = 5",
 "output": "2",
 "notes": [],
 "best": "Cells with positive values are land; neighbours (4 directions) belong to one island. Flood-fill each unvisited land cell, summing the values, and count the islands whose sum is divisible by k.",
 "variants": [
  {
   "name": "Flood-fill each island and add up its cells",
   "code": "class Solution:\n    def countIslands(self, grid, k):\n        m, n = len(grid), len(grid[0])\n        seen = [[False] * n for _ in range(m)]\n        res = 0\n        for i in range(m):\n            for j in range(n):\n                if grid[i][j] > 0 and not seen[i][j]:\n                    total = 0\n                    seen[i][j] = True\n                    st = [(i, j)]\n                    while st:\n                        a, b = st.pop()\n                        total += grid[a][b]\n                        for x, y in ((a + 1, b), (a - 1, b), (a, b + 1), (a, b - 1)):\n                            if 0 <= x < m and 0 <= y < n and grid[x][y] > 0 and not seen[x][y]:\n                                seen[x][y] = True\n                                st.append((x, y))\n                    if total % k == 0:\n                        res += 1\n        return res",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Cells with positive values are land; neighbours (4 directions) belong to one island. Flood-fill each unvisited land cell, summing the values, and count the islands whose sum is divisible by k.",
   "frames": []
  }
 ]
};
