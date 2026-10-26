window.PROBLEM = {
 "id": "1664",
 "title": "Ways to Make a Fair Array",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "Given a list of numbers, you may remove exactly one. After removing, the numbers shift left. The list is 'fair' if the sum at even positions equals the sum at odd positions. Return how many choices of the removed number give a fair list. Example: [2,1,6,4] → 1 (remove the 1).",
 "why": "Remove one number; the rest shift left. In how many cases is the sum of the numbers at even positions equal to the sum at odd positions?",
 "idea": "After removing index i, everything to its right swaps parity. Track the running sums of even/odd positions on the left and the totals still on the right (with swapped roles) to test equality in O(1).",
 "input": "[2, 1, 6, 4]",
 "output": "1",
 "notes": [],
 "best": "After removing index i, everything to its right swaps parity. Track the running sums of even/odd positions on the left and the totals still on the right (with swapped roles) to test equality in O(1).",
 "variants": [
  {
   "name": "Prefix sums of even and odd positions",
   "code": "class Solution:\n    def waysToMakeFair(self, nums):\n        even_total = sum(nums[0::2])\n        odd_total = sum(nums[1::2])\n        left_even = left_odd = 0\n        count = 0\n        for i, x in enumerate(nums):\n            if i % 2 == 0: even_total -= x\n            else: odd_total -= x\n            if left_even + odd_total == left_odd + even_total: count += 1\n            if i % 2 == 0: left_even += x\n            else: left_odd += x\n        return count",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "After removing index i, everything to its right swaps parity. Track the running sums of even/odd positions on the left and the totals still on the right (with swapped roles) to test equality in O(1).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Remove each number and re-sum",
   "tag": "Brute force",
   "code": "class Solution:\n    def waysToMakeFair(self, nums):\n        count = 0\n        for i in range(len(nums)):\n            rest = nums[:i] + nums[i + 1:]\n            if sum(rest[0::2]) == sum(rest[1::2]): count += 1\n        return count",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Delete each index and compare the even-position and odd-position sums directly.",
   "frames": [],
   "alt": true
  }
 ]
};
