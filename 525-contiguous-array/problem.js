window.PROBLEM = {
 "id": "525",
 "title": "Contiguous Array",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "A binary array is given. Return the length of the longest contiguous subarray that has the same number of 0s and 1s. Example: [0,1] → 2; [0,1,1,1,1,1,0,0,0] → 6.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every subarray",
   "tag": "Brute force",
   "code": "class Solution:\n    def findMaxLength(self, nums):\n        best = 0\n        for i in range(len(nums)):\n            bal = 0\n            for j in range(i, len(nums)):\n                bal += 1 if nums[j] else -1\n                if bal == 0:\n                    best = max(best, j - i + 1)\n        return best",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Extend each start and track the balance of 1s and 0s.",
   "frames": [],
   "alt": true
  }
 ]
};
