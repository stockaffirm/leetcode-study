window.PROBLEM = {
 "id": "2448",
 "title": "Minimum Cost to Make Array Equal",
 "level": "Hard",
 "topic": "Sorting",
 "question": "",
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
   "frames": []
  }
 ]
};
