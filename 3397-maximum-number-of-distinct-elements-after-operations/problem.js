window.PROBLEM = {
 "id": "3397",
 "title": "Maximum Number of Distinct Elements After Operations",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "[1,2,2,3,3,4], k=2 → 6 distinct values.",
 "idea": "Every element may change by at most k, i.e. take any value in [x−k, x+k]. Sort the numbers. Keep the last value used (cur); for the next number pick max(cur+1, x−k); if that is within x+k count it as a new distinct value.",
 "input": "nums = [1,2,2,3,3,4], k = 2",
 "output": "6",
 "notes": [],
 "best": "Every element may change by at most k, i.e. take any value in [x−k, x+k]. Sort the numbers. Keep the last value used (cur); for the next number pick max(cur+1, x−k); if that is within x+k count it as a new distinct value.",
 "variants": [
  {
   "name": "Sort, give each the smallest unused value in its range",
   "code": "class Solution:\n    def maxDistinctElements(self, nums, k):\n        nums.sort()\n        cur = float('-inf')\n        count = 0\n        for x in nums:\n            pick = max(cur + 1, x - k)\n            if pick <= x + k:\n                count += 1\n                cur = pick\n        return count",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "Every element may change by at most k, i.e. take any value in [x−k, x+k]. Sort the numbers. Keep the last value used (cur); for the next number pick max(cur+1, x−k); if that is within x+k count it as a new distinct value.",
   "frames": []
  }
 ]
};
