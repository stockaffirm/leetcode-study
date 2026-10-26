window.PROBLEM = {
 "id": "2161",
 "title": "Partition Array According to Given Pivot",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
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
   "frames": []
  }
 ]
};
