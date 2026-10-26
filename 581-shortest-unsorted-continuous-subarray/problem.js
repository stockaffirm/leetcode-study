window.PROBLEM = {
 "id": "581",
 "title": "Shortest Unsorted Continuous Subarray",
 "level": "Medium",
 "topic": "Sorting",
 "question": "Find the shortest continuous subarray which, if sorted in ascending order, makes the whole array sorted. Return its length. Example: [2,6,4,8,10,9,15] → 5.",
 "why": "[2,6,4,8,10,9,15]: sorting positions 1…5 puts everything in order → 5.",
 "idea": "Sort a copy. The first and last positions where the arrays differ bound the subarray that must be sorted. Return the length between them (0 if equal).",
 "input": "nums = [2,6,4,8,10,9,15]",
 "output": "5",
 "notes": [],
 "best": "Sort a copy. The first and last positions where the arrays differ bound the subarray that must be sorted. Return the length between them (0 if equal).",
 "variants": [
  {
   "name": "Compare with the sorted array",
   "code": "class Solution:\n    def findUnsortedSubarray(self, nums):\n        diff = [i for i, (a, b) in enumerate(zip(nums, sorted(nums))) if a != b]\n        return diff[-1] - diff[0] + 1 if diff else 0",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Sort a copy. The first and last positions where the arrays differ bound the subarray that must be sorted. Return the length between them (0 if equal).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Scan from both ends",
   "tag": "Optimal",
   "code": "class Solution:\n    def findUnsortedSubarray(self, nums):\n        n = len(nums)\n        end, start = -1, 0\n        mx, mn = nums[0], nums[-1]\n        for i in range(n):\n            mx = max(mx, nums[i])\n            if nums[i] < mx:\n                end = i\n        for i in range(n - 1, -1, -1):\n            mn = min(mn, nums[i])\n            if nums[i] > mn:\n                start = i\n        return end - start + 1 if end >= 0 else 0",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The right end is the last position smaller than the running maximum; the left end is the last position larger than the running minimum from the right.",
   "frames": [],
   "alt": true
  }
 ]
};
