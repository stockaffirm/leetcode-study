window.PROBLEM = {
 "id": "2439",
 "title": "Minimize Maximum of Array",
 "level": "Medium",
 "topic": "Greedy",
 "question": "In one operation pick an index i > 0 with nums[i] > 0, decrease nums[i] by 1 and increase nums[i−1] by 1. Return the smallest possible maximum value of the array. Example: [3,7,1,6] → 5.",
 "why": "[3,7,1,6]: prefix averages 3, 5, 3.67→4, 4.25→5 → answer 5.",
 "idea": "An operation moves one unit from nums[i] to the element on its left, so the values can only be pushed toward the front. The best possible maximum is therefore the largest ceiling of any prefix average.",
 "input": "nums = [3,7,1,6]",
 "output": "5",
 "notes": [],
 "best": "An operation moves one unit from nums[i] to the element on its left, so the values can only be pushed toward the front. The best possible maximum is therefore the largest ceiling of any prefix average.",
 "variants": [
  {
   "name": "Maximum of the rounded-up prefix averages",
   "code": "class Solution:\n    def minimizeArrayValue(self, nums):\n        res = total = 0\n        for i, x in enumerate(nums):\n            total += x\n            res = max(res, (total + i) // (i + 1))\n        return res",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "An operation moves one unit from nums[i] to the element on its left, so the values can only be pushed toward the front. The best possible maximum is therefore the largest ceiling of any prefix average.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Binary search the answer",
   "tag": "Alternative",
   "code": "class Solution:\n    def minimizeArrayValue(self, nums):\n        def ok(m):\n            carry = 0\n            for x in reversed(nums[1:]):\n                carry = max(0, x + carry - m)\n            return nums[0] + carry <= m\n        lo, hi = 0, max(nums)\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if ok(mid):\n                hi = mid\n            else:\n                lo = mid + 1\n        return lo",
   "time": "O(n log max)",
   "space": "O(1)",
   "explain": "Guess the maximum m and push the excess of each element leftwards; m works if nothing is left over at the front.",
   "frames": [],
   "alt": true
  }
 ]
};
