window.PROBLEM = {
 "id": "2009",
 "title": "Minimum Number of Operations to Make Array Continuous",
 "level": "Hard",
 "topic": "Sliding Window",
 "question": "",
 "why": "One operation replaces any element with any integer. The array is 'continuous' if its numbers are all different and max − min = n − 1. Find the minimum operations.",
 "idea": "Keep as many original (distinct) numbers as possible: those that already fit inside some value window of width n−1. Sort the distinct values and slide a window; the answer is n minus the biggest count.",
 "input": "[1,2,3,5,6]",
 "output": "1",
 "notes": [],
 "best": "Keep as many original (distinct) numbers as possible: those that already fit inside some value window of width n−1. Sort the distinct values and slide a window; the answer is n minus the biggest count.",
 "variants": [
  {
   "name": "Longest window of distinct values within n−1",
   "code": "class Solution:\n    def minOperations(self, nums):\n        n = len(nums)\n        u = sorted(set(nums))\n        best, j = 0, 0\n        for i in range(len(u)):\n            while j < len(u) and u[j] <= u[i] + n - 1: j += 1\n            best = max(best, j - i)\n        return n - best",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Keep as many original (distinct) numbers as possible: those that already fit inside some value window of width n−1. Sort the distinct values and slide a window; the answer is n minus the biggest count.",
   "frames": []
  }
 ]
};
