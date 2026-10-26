window.PROBLEM = {
 "id": "1240",
 "title": "Tiling a Rectangle with the Fewest Squares",
 "level": "Hard",
 "topic": "Backtracking",
 "question": "",
 "why": "2 × 3 rectangle → 3 squares (a 2×2 and two 1×1).",
 "idea": "Keep the filled heights of each column (the skyline). Always fill the lowest-leftmost gap: try every square size that fits there, from large to small, recurse, and prune when the count already exceeds the best.",
 "input": "n = 2, m = 3",
 "output": "3",
 "notes": [],
 "best": "Keep the filled heights of each column (the skyline). Always fill the lowest-leftmost gap: try every square size that fits there, from large to small, recurse, and prune when the count already exceeds the best.",
 "variants": [
  {
   "name": "Backtracking on the skyline",
   "code": "class Solution:\n    def tilingRectangle(self, n, m):\n        best = [n * m]\n        height = [0] * m\n        def go(count):\n            if count >= best[0]:\n                return\n            low = min(height)\n            if low == n:\n                best[0] = count\n                return\n            start = height.index(low)\n            end = start\n            while end < m and height[end] == low:\n                end += 1\n            for size in range(min(end - start, n - low), 0, -1):\n                for j in range(start, start + size):\n                    height[j] += size\n                go(count + 1)\n                for j in range(start, start + size):\n                    height[j] -= size\n        go(0)\n        return best[0]",
   "time": "exponential (tiny n, m ≤ 13)",
   "space": "O(m)",
   "explain": "Keep the filled heights of each column (the skyline). Always fill the lowest-leftmost gap: try every square size that fits there, from large to small, recurse, and prune when the count already exceeds the best.",
   "frames": []
  }
 ]
};
