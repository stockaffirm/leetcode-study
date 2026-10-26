window.PROBLEM = {
 "id": "795",
 "title": "Number of Subarrays with Bounded Maximum",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "Count the subarrays (consecutive runs) whose largest element is at least left and at most right. Example: [2,1,4,3], left=2, right=3 → 3 ([2], [2,1], [3]).",
 "why": "Count the subarrays whose largest element is between left and right (inclusive).",
 "idea": "Scan once keeping the last position of a number > right (breaks everything) and the last position of a number in [left, right]. The subarrays ending here with a valid maximum start after the break and at or before that last valid number.",
 "input": "[2,1,4,3], left=2, right=3",
 "output": "3",
 "notes": [],
 "best": "Scan once keeping the last position of a number > right (breaks everything) and the last position of a number in [left, right]. The subarrays ending here with a valid maximum start after the break and at or before that last valid number.",
 "variants": [
  {
   "name": "Count subarrays by their last valid end",
   "code": "class Solution:\n    def numSubarrayBoundedMax(self, nums, left, right):\n        bad = good = -1\n        ans = 0\n        for i, x in enumerate(nums):\n            if x > right: bad = i\n            if x >= left: good = i\n            ans += good - bad\n        return ans",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Scan once keeping the last position of a number > right (breaks everything) and the last position of a number in [left, right]. The subarrays ending here with a valid maximum start after the break and at or before that last valid number.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Count(≤ right) − Count(≤ left−1)",
   "tag": "Alternative",
   "code": "class Solution:\n    def numSubarrayBoundedMax(self, nums, left, right):\n        def at_most(x):\n            run = total = 0\n            for v in nums:\n                run = run + 1 if v <= x else 0\n                total += run\n            return total\n        return at_most(right) - at_most(left - 1)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Subarrays with maximum ≤ x are counted by run lengths of numbers ≤ x.",
   "frames": [],
   "alt": true
  }
 ]
};
