window.PROBLEM = {
 "id": "3073",
 "title": "Maximum Increasing Triplet Value",
 "level": "Medium",
 "topic": "Sorting",
 "question": "Find three positions i < j < k with nums[i] < nums[j] < nums[k] that give the largest value nums[i] − nums[j] + nums[k], and return that value (such a triplet is guaranteed to exist). Example: [5,6,9] → 8.",
 "why": "Find i < j < k with nums[i] < nums[j] < nums[k] maximising nums[i] − nums[j] + nums[k].",
 "idea": "For each middle j the best k is the biggest number to its right (suffix maximum, it must exceed nums[j]); the best i is the largest earlier number below nums[j] (bisect in a sorted list of earlier numbers).",
 "input": "[5,6,9]",
 "output": "8",
 "notes": [],
 "best": "For each middle j the best k is the biggest number to its right (suffix maximum, it must exceed nums[j]); the best i is the largest earlier number below nums[j] (bisect in a sorted list of earlier numbers).",
 "variants": [
  {
   "name": "Sorted left values + suffix maximum",
   "code": "class Solution:\n    def maximumTripletValue(self, nums):\n        n = len(nums)\n        sufmax = [0] * (n + 1)\n        for i in range(n - 1, -1, -1): sufmax[i] = max(sufmax[i + 1], nums[i])\n        seen, ans = [], float('-inf')\n        for j in range(n):\n            idx = bisect_left(seen, nums[j])\n            if idx > 0 and sufmax[j + 1] > nums[j]: ans = max(ans, seen[idx - 1] - nums[j] + sufmax[j + 1])\n            insort(seen, nums[j])\n        return ans",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "For each middle j the best k is the biggest number to its right (suffix maximum, it must exceed nums[j]); the best i is the largest earlier number below nums[j] (bisect in a sorted list of earlier numbers).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every triplet",
   "tag": "Brute force",
   "code": "class Solution:\n    def maximumTripletValue(self, nums):\n        best = float('-inf')\n        for i, j, k in combinations(range(len(nums)), 3):\n            if nums[i] < nums[j] < nums[k]: best = max(best, nums[i] - nums[j] + nums[k])\n        return best",
   "time": "O(n³)",
   "space": "O(1)",
   "explain": "Test all i<j<k.",
   "frames": [],
   "alt": true
  }
 ]
};
