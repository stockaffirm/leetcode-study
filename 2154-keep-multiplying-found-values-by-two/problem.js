window.PROBLEM = {
 "id": "2154",
 "title": "Keep Multiplying Found Values by Two",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "Start with original. While original is present in nums, double it. Return the final value. Example: nums [5,3,6,1,12], original 3 → 24.",
 "why": "[5,3,6,1,12], original 3 → 3, 6, 12, 24 → 24.",
 "idea": "Put the numbers in a set. While the current value is in the set, double it. Return the first value not found.",
 "input": "nums = [5,3,6,1,12], original = 3",
 "output": "24",
 "notes": [],
 "best": "Put the numbers in a set. While the current value is in the set, double it. Return the first value not found.",
 "variants": [
  {
   "name": "Double while present",
   "code": "class Solution:\n    def findFinalValue(self, nums, original):\n        s = set(nums)\n        while original in s:\n            original *= 2\n        return original",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Put the numbers in a set. While the current value is in the set, double it. Return the first value not found.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Scan repeatedly",
   "tag": "Brute force",
   "code": "class Solution:\n    def findFinalValue(self, nums, original):\n        while original in nums:\n            original *= 2\n        return original",
   "time": "O(n·log)",
   "space": "O(1)",
   "explain": "Use list membership instead of a set.",
   "frames": [],
   "alt": true
  }
 ]
};
