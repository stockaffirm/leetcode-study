window.PROBLEM = {
 "id": "2302",
 "title": "Count Subarrays With Score Less Than K",
 "level": "Hard",
 "topic": "Sliding Window",
 "question": "The score of an array is its sum multiplied by its length. Return the number of non-empty subarrays of nums whose score is strictly less than k. Example: [2,1,4,3,5], k=10 → 6.",
 "why": "[2,1,4,3,5], k=10: subarrays with sum·length < 10 number 6.",
 "idea": "The score of a window is sum × length, which only grows as the window grows. For each right end move the left end forward until the score is below k; then all windows ending at right and starting between left and right are valid: add right − left + 1.",
 "input": "nums = [2,1,4,3,5], k = 10",
 "output": "6",
 "notes": [],
 "best": "The score of a window is sum × length, which only grows as the window grows. For each right end move the left end forward until the score is below k; then all windows ending at right and starting between left and right are valid: add right − left + 1.",
 "variants": [
  {
   "name": "Sliding window on sum × length",
   "code": "class Solution:\n    def countSubarrays(self, nums, k):\n        total = left = res = 0\n        for r, x in enumerate(nums):\n            total += x\n            while total * (r - left + 1) >= k:\n                total -= nums[left]\n                left += 1\n            res += r - left + 1\n        return res",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The score of a window is sum × length, which only grows as the window grows. For each right end move the left end forward until the score is below k; then all windows ending at right and starting between left and right are valid: add right − left + 1.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Prefix sums and binary search",
   "tag": "Alternative",
   "code": "class Solution:\n    def countSubarrays(self, nums, k):\n        n = len(nums)\n        pre = [0]\n        for x in nums:\n            pre.append(pre[-1] + x)\n        res = 0\n        for i in range(n):\n            lo, hi = i, n\n            while lo < hi:\n                mid = (lo + hi + 1) // 2\n                if (pre[mid] - pre[i]) * (mid - i) < k:\n                    lo = mid\n                else:\n                    hi = mid - 1\n            res += lo - i\n        return res",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "For each start binary search the longest window whose score is below k.",
   "frames": [],
   "alt": true
  }
 ]
};
