window.PROBLEM = {
 "id": "525",
 "title": "Contiguous Array",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "[0,1] has one 0 and one 1 → length 2.",
 "idea": "Count 1 as +1 and 0 as −1. A subarray has equal 0s and 1s exactly when the running balance is the same at both ends. Remember the first index of each balance and measure the distance when it repeats.",
 "input": "nums = [0,1]",
 "output": "2",
 "notes": [],
 "best": "Count 1 as +1 and 0 as −1. A subarray has equal 0s and 1s exactly when the running balance is the same at both ends. Remember the first index of each balance and measure the distance when it repeats.",
 "variants": [
  {
   "name": "Running balance, first-seen index",
   "code": "class Solution:\n    def findMaxLength(self, nums):\n        first = {0: -1}\n        bal = best = 0\n        for i, x in enumerate(nums):\n            bal += 1 if x else -1\n            if bal in first:\n                best = max(best, i - first[bal])\n            else:\n                first[bal] = i\n        return best",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Count 1 as +1 and 0 as −1. A subarray has equal 0s and 1s exactly when the running balance is the same at both ends. Remember the first index of each balance and measure the distance when it repeats.",
   "frames": []
  }
 ]
};
