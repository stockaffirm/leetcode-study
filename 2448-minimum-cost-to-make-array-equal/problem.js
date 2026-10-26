window.PROBLEM = {
 "id": "2448",
 "title": "Minimum Cost to Make Array Equal",
 "level": "Hard",
 "topic": "Sorting",
 "question": "Changing nums[i] by 1 costs cost[i]. Return the minimum total cost to make all elements equal. Example: nums [1,3,5,2], cost [2,3,1,14] → 8.",
 "why": "nums [1,3,5,2], cost [2,3,1,14]: the weighted median is 2 → cost 1·2 + 1·3 + 3·1 + 0 = 8.",
 "idea": "Changing nums[i] to t costs cost[i] × |nums[i] − t|. The sum of such absolute values is minimised at the weighted median. Sort by value and pick the first value where the running cost reaches half of the total cost, then add up the cost.",
 "input": "nums = [1,3,5,2], cost = [2,3,1,14]",
 "output": "8",
 "notes": [],
 "best": "Changing nums[i] to t costs cost[i] × |nums[i] − t|. The sum of such absolute values is minimised at the weighted median. Sort by value and pick the first value where the running cost reaches half of the total cost, then add up the cost.",
 "variants": [
  {
   "name": "Weighted median",
   "code": "class Solution:\n    def minCost(self, nums, cost):\n        pairs = sorted(zip(nums, cost))\n        total = sum(cost)\n        run = 0\n        target = pairs[-1][0]\n        for v, c in pairs:\n            run += c\n            if run * 2 >= total:\n                target = v\n                break\n        return sum(c * abs(v - target) for v, c in pairs)",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Changing nums[i] to t costs cost[i] × |nums[i] − t|. The sum of such absolute values is minimised at the weighted median. Sort by value and pick the first value where the running cost reaches half of the total cost, then add up the cost.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Binary search on the target",
   "tag": "Alternative",
   "code": "class Solution:\n    def minCost(self, nums, cost):\n        def f(t):\n            return sum(c * abs(v - t) for v, c in zip(nums, cost))\n        lo, hi = min(nums), max(nums)\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if f(mid) <= f(mid + 1):\n                hi = mid\n            else:\n                lo = mid + 1\n        return f(lo)",
   "time": "O(n log max)",
   "space": "O(1)",
   "explain": "The total cost is convex in the target value; binary search where it stops decreasing.",
   "frames": [],
   "alt": true
  }
 ]
};
