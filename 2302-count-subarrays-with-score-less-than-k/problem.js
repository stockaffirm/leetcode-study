window.PROBLEM = {
 "id": "2302",
 "title": "Count Subarrays With Score Less Than K",
 "level": "Hard",
 "topic": "Sliding Window",
 "question": "",
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
   "frames": []
  }
 ]
};
