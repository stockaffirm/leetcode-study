window.PROBLEM = {
 "id": "2161",
 "title": "Partition Array According to Given Pivot",
 "level": "Medium",
 "topic": "Array / String",
 "question": "Rearrange nums so that every number smaller than pivot comes first, then numbers equal to pivot, then larger ones, keeping the relative order inside each group. Example: [9,12,5,10,14,3,10], pivot 10 → [9,5,3,10,10,12,14].",
 "why": "[9,12,5,10,14,3,10], pivot 10 → [9,5,3,10,10,12,14].",
 "idea": "Collect the numbers smaller than the pivot, equal to it and larger, each in original order, and concatenate.",
 "input": "nums = [9,12,5,10,14,3,10], pivot = 10",
 "output": "[9, 5, 3, 10, 10, 12, 14]",
 "notes": [],
 "best": "Collect the numbers smaller than the pivot, equal to it and larger, each in original order, and concatenate.",
 "variants": [
  {
   "name": "Three stable buckets",
   "code": "class Solution:\n    def pivotArray(self, nums, pivot):\n        return ([x for x in nums if x < pivot]\n                + [x for x in nums if x == pivot]\n                + [x for x in nums if x > pivot])",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Collect the numbers smaller than the pivot, equal to it and larger, each in original order, and concatenate.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Single pass with three lists",
   "tag": "Alternative",
   "code": "class Solution:\n    def pivotArray(self, nums, pivot):\n        lo, eq, hi = [], [], []\n        for x in nums:\n            (lo if x < pivot else eq if x == pivot else hi).append(x)\n        return lo + eq + hi",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Append to the right list while scanning once.",
   "frames": [],
   "alt": true
  }
 ]
};
