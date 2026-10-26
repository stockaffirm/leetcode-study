window.PROBLEM = {
 "id": "1631",
 "title": "Path With Minimum Effort",
 "level": "Medium",
 "topic": "Graph",
 "question": "You are given a grid of heights. You start at the top-left and want to reach the bottom-right, moving up, down, left or right. The effort of a route is the LARGEST absolute height difference between two consecutive cells on it. Return the smallest effort over all possible routes. Example: [[1,2,2],[3,8,2],[5,3,5]] → the route 1 → 3 → 5 → 3 → 5 has largest jump 2 → 2.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Binary search on the effort",
   "tag": "Alternative",
   "code": "class Solution:\n    def minimumEffortPath(self, heights):\n        m, n = len(heights), len(heights[0])\n        def ok(limit):\n            seen, st = {(0, 0)}, [(0, 0)]\n            while st:\n                r, c = st.pop()\n                if (r, c) == (m - 1, n - 1): return True\n                for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                    a, b = r + dr, c + dc\n                    if 0 <= a < m and 0 <= b < n and (a, b) not in seen and abs(heights[a][b] - heights[r][c]) <= limit:\n                        seen.add((a, b))\n                        st.append((a, b))\n            return False\n        lo, hi = 0, 10 ** 6\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if ok(mid): hi = mid\n            else: lo = mid + 1\n        return lo",
   "time": "O(m·n·log H)",
   "space": "O(m·n)",
   "explain": "Guess an effort limit and check whether the corner can be reached using only jumps ≤ limit; binary-search the smallest working limit.",
   "frames": [],
   "alt": true
  }
 ]
};
