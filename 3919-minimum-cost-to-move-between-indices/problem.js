window.PROBLEM = {
 "id": "3919",
 "title": "Minimum Cost to Move Between Indices",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "nums is strictly increasing. From index x you can move to any index y at cost |nums[x] − nums[y]|, or to the closest adjacent index (the neighbour with the smaller value difference, the left one on ties) at cost 1. For each query [l, r] return the minimum cost to go from l to r. Example: [-5,-2,3], queries [[0,2],[2,0],[1,2]] → [6,2,5].",
 "why": "nums [-5,-2,3]: 0→1 costs 1 (closest), 1→2 costs 5 → query [0,2] = 6.",
 "idea": "nums is strictly increasing, so a jump equals the sum of single steps and walking step by step is never worse. A right step from i costs 1 if i's closest neighbour is i+1, otherwise the gap; a left step from i costs 1 if the closest is i−1, otherwise the gap. Build prefix sums for right steps and for left steps and answer each query in O(1).",
 "input": "nums = [-5,-2,3], queries = [[0,2],[2,0],[1,2]]",
 "output": "[6, 2, 5]",
 "notes": [],
 "best": "nums is strictly increasing, so a jump equals the sum of single steps and walking step by step is never worse. A right step from i costs 1 if i's closest neighbour is i+1, otherwise the gap; a left step from i costs 1 if the closest is i−1, otherwise the gap. Build prefix sums for right steps and for left steps and answer each query in O(1).",
 "variants": [
  {
   "name": "Prefix sums of one-step costs, both directions",
   "code": "class Solution:\n    def minCost(self, nums, queries):\n        n = len(nums)\n        right = [0] * n\n        left = [0] * n\n        for i in range(n):\n            gl = nums[i] - nums[i - 1] if i else float('inf')\n            gr = nums[i + 1] - nums[i] if i + 1 < n else float('inf')\n            closest_right = gr < gl\n            if i + 1 < n:\n                right[i + 1] = right[i] + (1 if closest_right else gr)\n        for i in range(n - 1, -1, -1):\n            gl = nums[i] - nums[i - 1] if i else float('inf')\n            gr = nums[i + 1] - nums[i] if i + 1 < n else float('inf')\n            closest_right = gr < gl\n            if i:\n                left[i - 1] = left[i] + (1 if not closest_right else gl)\n        res = []\n        for l, r in queries:\n            res.append(right[r] - right[l] if l < r else left[r] - left[l])\n        return res",
   "time": "O(n + q)",
   "space": "O(n)",
   "explain": "nums is strictly increasing, so a jump equals the sum of single steps and walking step by step is never worse. A right step from i costs 1 if i's closest neighbour is i+1, otherwise the gap; a left step from i costs 1 if the closest is i−1, otherwise the gap. Build prefix sums for right steps and for left steps and answer each query in O(1).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Dijkstra per query",
   "tag": "Brute force",
   "code": "class Solution:\n    def minCost(self, nums, queries):\n        n = len(nums)\n        def closest(x):\n            best = None\n            for y in (x - 1, x + 1):\n                if 0 <= y < n and (best is None or abs(nums[x] - nums[y]) < abs(nums[x] - nums[best])):\n                    best = y\n            return best\n        res = []\n        for l, r in queries:\n            dist = [float('inf')] * n\n            dist[l] = 0\n            pq = [(0, l)]\n            while pq:\n                d, x = heappop(pq)\n                if d > dist[x]:\n                    continue\n                for y in range(n):\n                    w = 1 if y == closest(x) else abs(nums[x] - nums[y])\n                    w = min(w, abs(nums[x] - nums[y])) if y != x else 0\n                    if d + w < dist[y]:\n                        dist[y] = d + w\n                        heappush(pq, (d + w, y))\n            res.append(dist[r])\n        return res",
   "time": "O(q·n²)",
   "space": "O(n)",
   "explain": "Run Dijkstra from the source with all allowed moves (any jump or the closest move).",
   "frames": [],
   "alt": true
  }
 ]
};
