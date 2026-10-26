window.PROBLEM = {
 "id": "3878",
 "title": "Count Good Subarrays",
 "level": "Hard",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "[4,2,3] → good: [4], [2], [3], [2,3] → 4.",
 "idea": "The OR of a subarray is at least its maximum, so it equals some element only if it equals the maximum, i.e. every element is a bit-subset of the maximum. For each index i as the (leftmost) maximum, find the range where it is the maximum (monotonic stack) and shrink it to the nearest elements on each side that have a bit i's value lacks (tracked with the last position of each bit). The count is (i − lo + 1) · (hi − i + 1).",
 "input": "nums = [4,2,3]",
 "output": "4",
 "notes": [],
 "best": "The OR of a subarray is at least its maximum, so it equals some element only if it equals the maximum, i.e. every element is a bit-subset of the maximum. For each index i as the (leftmost) maximum, find the range where it is the maximum (monotonic stack) and shrink it to the nearest elements on each side that have a bit i's value lacks (tracked with the last position of each bit). The count is (i − lo + 1) · (hi − i + 1).",
 "variants": [
  {
   "name": "A subarray is good iff its OR equals its maximum",
   "code": "class Solution:\n    def countGoodSubarrays(self, nums):\n        n = len(nums)\n        left = [-1] * n\n        right = [n] * n\n        stack = []\n        for i in range(n):\n            while stack and nums[stack[-1]] < nums[i]:\n                stack.pop()\n            left[i] = stack[-1] if stack else -1\n            stack.append(i)\n        stack = []\n        for i in range(n - 1, -1, -1):\n            while stack and nums[stack[-1]] <= nums[i]:\n                stack.pop()\n            right[i] = stack[-1] if stack else n\n            stack.append(i)\n        last = [-1] * 31\n        prev_bad = [-1] * n\n        for i in range(n):\n            bad = -1\n            for b in range(31):\n                if not nums[i] >> b & 1:\n                    bad = max(bad, last[b])\n            prev_bad[i] = bad\n            for b in range(31):\n                if nums[i] >> b & 1:\n                    last[b] = i\n        last = [n] * 31\n        next_bad = [n] * n\n        for i in range(n - 1, -1, -1):\n            bad = n\n            for b in range(31):\n                if not nums[i] >> b & 1:\n                    bad = min(bad, last[b])\n            next_bad[i] = bad\n            for b in range(31):\n                if nums[i] >> b & 1:\n                    last[b] = i\n        total = 0\n        for i in range(n):\n            lo = max(left[i], prev_bad[i]) + 1\n            hi = min(right[i], next_bad[i]) - 1\n            total += (i - lo + 1) * (hi - i + 1)\n        return total",
   "time": "O(n·31)",
   "space": "O(n)",
   "explain": "The OR of a subarray is at least its maximum, so it equals some element only if it equals the maximum, i.e. every element is a bit-subset of the maximum. For each index i as the (leftmost) maximum, find the range where it is the maximum (monotonic stack) and shrink it to the nearest elements on each side that have a bit i's value lacks (tracked with the last position of each bit). The count is (i − lo + 1) · (hi − i + 1).",
   "frames": []
  }
 ]
};
