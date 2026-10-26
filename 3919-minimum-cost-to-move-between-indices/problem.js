window.PROBLEM = {
 "id": "3919",
 "title": "Minimum Cost to Move Between Indices",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "",
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
   "frames": []
  }
 ]
};
