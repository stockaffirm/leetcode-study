window.PROBLEM = {
 "id": "3105",
 "title": "Longest Strictly Increasing or Strictly Decreasing Subarray",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "[1,4,3,3,2]: longest run is 1,4 (2) or 4,3 (2) → 2.",
 "idea": "Walk through the array keeping the length of the current strictly increasing run and the current strictly decreasing run; reset the one that breaks. The answer is the longest run seen.",
 "input": "nums = [1,4,3,3,2]",
 "output": "2",
 "notes": [],
 "best": "Walk through the array keeping the length of the current strictly increasing run and the current strictly decreasing run; reset the one that breaks. The answer is the longest run seen.",
 "variants": [
  {
   "name": "Track the current increasing and decreasing runs",
   "code": "class Solution:\n    def longestMonotonicSubarray(self, nums):\n        inc = dec = best = 1\n        for a, b in zip(nums, nums[1:]):\n            inc = inc + 1 if b > a else 1\n            dec = dec + 1 if b < a else 1\n            best = max(best, inc, dec)\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Walk through the array keeping the length of the current strictly increasing run and the current strictly decreasing run; reset the one that breaks. The answer is the longest run seen.",
   "frames": []
  }
 ]
};
