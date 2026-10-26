window.PROBLEM = {
 "id": "1856",
 "title": "Maximum Subarray Min-Product",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "The min-product of an array is (its smallest value) × (the sum of its values). Given a list of positive integers, return the largest min-product over all non-empty subarrays (consecutive runs), modulo 1,000,000,007 (compare before taking the modulo). Example: [1,2,3,2] → 14 (subarray [2,3,2]).",
 "why": "The min-product of a subarray is (its smallest number) × (its sum). Find the maximum over all subarrays (modulo 10⁹+7 at the end).",
 "idea": "For each number as the minimum, find how far it can extend left and right while staying the minimum (monotonic stack); the best sum is then a prefix-sum difference.",
 "input": "[1,2,3,2]",
 "output": "14",
 "notes": [],
 "best": "For each number as the minimum, find how far it can extend left and right while staying the minimum (monotonic stack); the best sum is then a prefix-sum difference.",
 "variants": [
  {
   "name": "Monotonic stack + prefix sums",
   "code": "class Solution:\n    def maxSumMinProduct(self, nums):\n        pre = [0] + list(accumulate(nums))\n        st, best = [], 0\n        for i, x in enumerate(nums + [0]):\n            while st and nums[st[-1]] >= x:\n                h = nums[st.pop()]\n                left = st[-1] + 1 if st else 0\n                best = max(best, h * (pre[i] - pre[left]))\n            st.append(i)\n        return best % (10 ** 9 + 7)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "For each number as the minimum, find how far it can extend left and right while staying the minimum (monotonic stack); the best sum is then a prefix-sum difference.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every subarray",
   "tag": "Brute force",
   "code": "class Solution:\n    def maxSumMinProduct(self, nums):\n        best = 0\n        for i in range(len(nums)):\n            lo = s = 0\n            lo = float('inf')\n            for j in range(i, len(nums)):\n                lo = min(lo, nums[j])\n                s += nums[j]\n                best = max(best, lo * s)\n        return best % (10 ** 9 + 7)",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Keep a running minimum and sum for every start.",
   "frames": [],
   "alt": true
  }
 ]
};
