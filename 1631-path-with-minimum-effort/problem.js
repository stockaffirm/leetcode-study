window.PROBLEM = {
 "id": "1631",
 "title": "Path With Minimum Effort",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "Walk from the top-left to the bottom-right of a height map. The 'effort' of a route is its biggest height jump between neighbouring cells. Find the route with the smallest effort.",
 "idea": "Like Dijkstra, but the cost of a route is the MAXIMUM jump so far, not the sum. Always expand the cell reachable with the smallest effort.",
 "input": "[[1,2,2],[3,8,2],[5,3,5]]",
 "output": "2",
 "notes": [],
 "best": "Like Dijkstra, but the cost of a route is the MAXIMUM jump so far, not the sum. Always expand the cell reachable with the smallest effort.",
 "variants": [
  {
   "name": "Dijkstra on the largest step",
   "code": "class Solution:\n    def minimumEffortPath(self, heights):\n        m, n = len(heights), len(heights[0])\n        best = [[float('inf')] * n for _ in range(m)]\n        best[0][0] = 0\n        pq = [(0, 0, 0)]\n        while pq:\n            e, r, c = heappop(pq)\n            if (r, c) == (m - 1, n - 1): return e\n            if e > best[r][c]: continue\n            for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                a, b = r + dr, c + dc\n                if 0 <= a < m and 0 <= b < n:\n                    ne = max(e, abs(heights[a][b] - heights[r][c]))\n                    if ne < best[a][b]:\n                        best[a][b] = ne\n                        heappush(pq, (ne, a, b))",
   "time": "O(m·n log(m·n))",
   "space": "O(m·n)",
   "explain": "Like Dijkstra, but the cost of a route is the MAXIMUM jump so far, not the sum. Always expand the cell reachable with the smallest effort.",
   "frames": []
  }
 ]
};
