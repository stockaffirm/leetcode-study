window.PROBLEM = {
 "id": "1498",
 "title": "Number of Subsequences That Satisfy the Given Sum Condition",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "",
 "why": "[3,5,6,7], target 9: valid subsequences are [3], [3,5], [3,6], [3,5,6] → 4.",
 "idea": "The order of picks does not matter, so sort. With min = nums[l] and max = nums[r] and min + max ≤ target, every subset of the numbers strictly between them (2^(r−l) choices) works together with those two ends. Move the pointers: if the sum fits count 2^(r−l) and advance l, else shrink r.",
 "input": "nums = [3,5,6,7], target = 9",
 "output": "4",
 "notes": [],
 "best": "The order of picks does not matter, so sort. With min = nums[l] and max = nums[r] and min + max ≤ target, every subset of the numbers strictly between them (2^(r−l) choices) works together with those two ends. Move the pointers: if the sum fits count 2^(r−l) and advance l, else shrink r.",
 "variants": [
  {
   "name": "Sort + two pointers + powers of 2",
   "code": "class Solution:\n    def numSubseq(self, nums, target):\n        MOD = 10 ** 9 + 7\n        nums.sort()\n        n = len(nums)\n        pow2 = [1] * n\n        for i in range(1, n):\n            pow2[i] = pow2[i - 1] * 2 % MOD\n        l, r = 0, n - 1\n        res = 0\n        while l <= r:\n            if nums[l] + nums[r] <= target:\n                res = (res + pow2[r - l]) % MOD\n                l += 1\n            else:\n                r -= 1\n        return res",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "The order of picks does not matter, so sort. With min = nums[l] and max = nums[r] and min + max ≤ target, every subset of the numbers strictly between them (2^(r−l) choices) works together with those two ends. Move the pointers: if the sum fits count 2^(r−l) and advance l, else shrink r.",
   "frames": []
  }
 ]
};
