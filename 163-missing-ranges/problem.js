window.PROBLEM = {
 "id": "163",
 "title": "Missing Ranges",
 "level": "Easy",
 "topic": "Array / String",
 "question": "A sorted array has numbers all inside the range [lower, upper]. Return the shortest sorted list of ranges that cover every number of that range that is NOT in the array. Example: nums [0,1,3,50,75], lower 0, upper 99 → [[2,2],[4,49],[51,74],[76,99]].",
 "why": "Between 0 and 1 nothing is missing; between 1 and 3 the number 2; between 3 and 50 the numbers 4–49; and so on up to 99.",
 "idea": "Keep the previous number (start with lower − 1) and look at each next number (finally upper + 1). If the gap is at least 2 the numbers in between form one missing range.",
 "input": "nums = [0,1,3,50,75], lower = 0, upper = 99",
 "output": "[[2,2],[4,49],[51,74],[76,99]]",
 "notes": [],
 "best": "Keep the previous number (start with lower − 1) and look at each next number (finally upper + 1). If the gap is at least 2 the numbers in between form one missing range.",
 "variants": [
  {
   "name": "Gap between neighbours",
   "code": "class Solution:\n    def findMissingRanges(self, nums, lower, upper):\n        res = []\n        prev = lower - 1\n        for x in nums + [upper + 1]:\n            if x - prev >= 2:\n                res.append([prev + 1, x - 1])\n            prev = x\n        return res",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Keep the previous number (start with lower − 1) and look at each next number (finally upper + 1). If the gap is at least 2 the numbers in between form one missing range.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Keep the next expected number",
   "tag": "Alternative",
   "code": "class Solution:\n    def findMissingRanges(self, nums, lower, upper):\n        res = []\n        lo = lower\n        for x in nums:\n            if x > lo:\n                res.append([lo, x - 1])\n            lo = x + 1\n        if lo <= upper:\n            res.append([lo, upper])\n        return res",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "lo is the first number not yet seen; a number above it means a gap.",
   "frames": [],
   "alt": true
  }
 ]
};
