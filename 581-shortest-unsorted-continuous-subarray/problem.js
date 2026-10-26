window.PROBLEM = {
 "id": "581",
 "title": "Shortest Unsorted Continuous Subarray",
 "level": "Medium",
 "topic": "Sorting",
 "question": "",
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
   "frames": []
  }
 ]
};
