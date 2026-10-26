window.PROBLEM = {
 "id": "1878",
 "title": "Get Biggest Three Rhombus Sums in a Grid",
 "level": "Medium",
 "topic": "Matrix",
 "question": "",
 "why": "The sample grid's three biggest distinct rhombus-border sums are 228, 216, 211.",
 "idea": "A rhombus is defined by a centre and a radius k (k = 0 is a single cell). Its border is the four diagonal edges. For every centre and every radius that stays inside the grid, add up the 4k border cells (the corners belong to two edges, so walk each edge excluding its far end) and collect distinct sums; return the three largest.",
 "input": "grid = [[3,4,5,1,3],[3,3,4,2,3],[20,30,200,40,10],[1,5,5,4,1],[4,3,2,2,5]]",
 "output": "[228, 216, 211]",
 "notes": [],
 "best": "A rhombus is defined by a centre and a radius k (k = 0 is a single cell). Its border is the four diagonal edges. For every centre and every radius that stays inside the grid, add up the 4k border cells (the corners belong to two edges, so walk each edge excluding its far end) and collect distinct sums; return the three largest.",
 "variants": [
  {
   "name": "Walk every rhombus border",
   "code": "class Solution:\n    def getBiggestThree(self, grid):\n        m, n = len(grid), len(grid[0])\n        sums = set()\n        for i in range(m):\n            for j in range(n):\n                sums.add(grid[i][j])\n                k = 1\n                while i - k >= 0 and i + k < m and j - k >= 0 and j + k < n:\n                    s = 0\n                    for t in range(k):\n                        s += grid[i - k + t][j + t]\n                        s += grid[i + t][j + k - t]\n                        s += grid[i + k - t][j - t]\n                        s += grid[i - t][j - k + t]\n                    sums.add(s)\n                    k += 1\n        return sorted(sums, reverse=True)[:3]",
   "time": "O(m·n·min(m,n)²)",
   "space": "O(m·n)",
   "explain": "A rhombus is defined by a centre and a radius k (k = 0 is a single cell). Its border is the four diagonal edges. For every centre and every radius that stays inside the grid, add up the 4k border cells (the corners belong to two edges, so walk each edge excluding its far end) and collect distinct sums; return the three largest.",
   "frames": []
  }
 ]
};
