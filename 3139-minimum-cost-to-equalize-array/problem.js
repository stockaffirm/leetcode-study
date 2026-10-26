window.PROBLEM = {
 "id": "3139",
 "title": "Minimum Cost to Equalize Array",
 "level": "Hard",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "nums [4,1], cost1 5, cost2 2 → only the 1 needs raising, a single +1 costs 5 each → 15.",
 "idea": "Pick the final value t (the maximum, or a little above it). Each element needs t − nums[i] increments. Pair increments on two different elements when cost2 < 2·cost1; the largest need cannot be paired with itself, so if one element needs more than all the others together, the surplus uses single increments. Otherwise pair as much as possible. Take the cheapest t.",
 "input": "nums = [4,1], cost1 = 5, cost2 = 2",
 "output": "15",
 "notes": [],
 "best": "Pick the final value t (the maximum, or a little above it). Each element needs t − nums[i] increments. Pair increments on two different elements when cost2 < 2·cost1; the largest need cannot be paired with itself, so if one element needs more than all the others together, the surplus uses single increments. Otherwise pair as much as possible. Take the cheapest t.",
 "variants": [
  {
   "name": "Try every final value; pair increments when it pays off",
   "code": "class Solution:\n    def minCostToEqualizeArray(self, nums, cost1, cost2):\n        MOD = 10**9 + 7\n        n = len(nums)\n        if n == 1:\n            return 0\n        mx, mn, total_sum = max(nums), min(nums), sum(nums)\n        cost2 = min(cost2, 2 * cost1)\n        best = float('inf')\n        for t in range(mx, 2 * mx + 2):\n            total = n * t - total_sum\n            biggest = t - mn\n            if biggest * 2 <= total:\n                cost = (total // 2) * cost2 + (total % 2) * cost1\n            else:\n                others = total - biggest\n                cost = others * cost2 + (biggest - others) * cost1\n            best = min(best, cost)\n        return best % MOD",
   "time": "O(max)",
   "space": "O(1)",
   "explain": "Pick the final value t (the maximum, or a little above it). Each element needs t − nums[i] increments. Pair increments on two different elements when cost2 < 2·cost1; the largest need cannot be paired with itself, so if one element needs more than all the others together, the surplus uses single increments. Otherwise pair as much as possible. Take the cheapest t.",
   "frames": []
  }
 ]
};
