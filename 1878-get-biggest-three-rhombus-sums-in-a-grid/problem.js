window.PROBLEM = {
 "id": "1878",
 "title": "Get Biggest Three Rhombus Sums in a Grid",
 "level": "Medium",
 "topic": "Matrix",
 "question": "A rhombus sum is the sum of the cells on the border of a diamond-shaped region (a single cell counts as a rhombus). Return the three biggest distinct rhombus sums in descending order (fewer if there are not three). Example: the 5×5 sample grid → [228,216,211].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Keep a size-3 heap",
   "tag": "Alternative",
   "code": "class Solution:\n    def getBiggestThree(self, grid):\n        m, n = len(grid), len(grid[0])\n        top = []\n        def offer(v):\n            if v in top:\n                return\n            top.append(v)\n            top.sort(reverse=True)\n            del top[3:]\n        for i in range(m):\n            for j in range(n):\n                offer(grid[i][j])\n                k = 1\n                while i - k >= 0 and i + k < m and j - k >= 0 and j + k < n:\n                    s = 0\n                    for t in range(k):\n                        s += grid[i - k + t][j + t] + grid[i + t][j + k - t] + grid[i + k - t][j - t] + grid[i - t][j - k + t]\n                    offer(s)\n                    k += 1\n        return top",
   "time": "O(m·n·min²)",
   "space": "O(1)",
   "explain": "Instead of a set of all sums keep the three best distinct sums in a small list.",
   "frames": [],
   "alt": true
  }
 ]
};
