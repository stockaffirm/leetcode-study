window.PROBLEM = {
 "id": "2503",
 "title": "Maximum Number of Points From Grid Queries",
 "level": "Hard",
 "topic": "Heap",
 "question": "",
 "why": "For each query q start at the top-left: if the cell's value is < q you score a point and may move to its neighbours; otherwise you stop. Return the points for each query.",
 "idea": "Sort the queries. Grow one reachable region with a min-heap of frontier cells: for each query, keep absorbing the smallest frontier cell while it is smaller than the query; the region size is the answer.",
 "input": "[[1,2,3],[2,5,7],[3,5,1]], queries [5,6,2]",
 "output": "[5,8,1]",
 "notes": [],
 "best": "Sort the queries. Grow one reachable region with a min-heap of frontier cells: for each query, keep absorbing the smallest frontier cell while it is smaller than the query; the region size is the answer.",
 "variants": [
  {
   "name": "Offline queries with a min-heap frontier",
   "code": "class Solution:\n    def maxPoints(self, grid, queries):\n        m, n = len(grid), len(grid[0])\n        res = [0] * len(queries)\n        heap = [(grid[0][0], 0, 0)]\n        seen = {(0, 0)}\n        count = 0\n        for qi in sorted(range(len(queries)), key=lambda i: queries[i]):\n            q = queries[qi]\n            while heap and heap[0][0] < q:\n                _, i, j = heappop(heap)\n                count += 1\n                for di, dj in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                    a, b = i + di, j + dj\n                    if 0 <= a < m and 0 <= b < n and (a, b) not in seen:\n                        seen.add((a, b))\n                        heappush(heap, (grid[a][b], a, b))\n            res[qi] = count\n        return res",
   "time": "O(mn log mn + q log q)",
   "space": "O(mn)",
   "explain": "Sort the queries. Grow one reachable region with a min-heap of frontier cells: for each query, keep absorbing the smallest frontier cell while it is smaller than the query; the region size is the answer.",
   "frames": []
  }
 ]
};
