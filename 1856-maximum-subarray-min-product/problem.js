window.PROBLEM = {
 "id": "1856",
 "title": "Maximum Subarray Min-Product",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "",
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
   "frames": []
  }
 ]
};
