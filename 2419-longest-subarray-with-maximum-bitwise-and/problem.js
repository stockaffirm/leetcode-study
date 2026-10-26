window.PROBLEM = {
 "id": "2419",
 "title": "Longest Subarray With Maximum Bitwise AND",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "[1,2,3,3,2,2] → the maximum 3 appears twice in a row → 2.",
 "idea": "The AND of a subarray is at most its minimum, and the largest possible AND equals the array maximum (achieved by subarrays of maximum values). So the answer is the longest run of consecutive copies of the maximum.",
 "input": "nums = [1,2,3,3,2,2]",
 "output": "2",
 "notes": [],
 "best": "The AND of a subarray is at most its minimum, and the largest possible AND equals the array maximum (achieved by subarrays of maximum values). So the answer is the longest run of consecutive copies of the maximum.",
 "variants": [
  {
   "name": "Longest run of the maximum value",
   "code": "class Solution:\n    def longestSubarray(self, nums):\n        m = max(nums)\n        best = run = 0\n        for x in nums:\n            run = run + 1 if x == m else 0\n            best = max(best, run)\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The AND of a subarray is at most its minimum, and the largest possible AND equals the array maximum (achieved by subarrays of maximum values). So the answer is the longest run of consecutive copies of the maximum.",
   "frames": []
  }
 ]
};
