window.PROBLEM = {
 "id": "2529",
 "title": "Maximum Count of Positive Integer and Negative Integer",
 "level": "Easy",
 "topic": "Binary Search",
 "question": "",
 "why": "[-2,-1,-1,1,2,3] → 3 negatives and 3 positives → 3.",
 "idea": "The array is sorted. The number of negatives is the index of the first non-negative; the number of positives is n minus the index of the first positive. Return the larger.",
 "input": "nums = [-2,-1,-1,1,2,3]",
 "output": "3",
 "notes": [],
 "best": "The array is sorted. The number of negatives is the index of the first non-negative; the number of positives is n minus the index of the first positive. Return the larger.",
 "variants": [
  {
   "name": "Binary search the boundaries around zero",
   "code": "class Solution:\n    def maximumCount(self, nums):\n        neg = bisect_left(nums, 0)\n        pos = len(nums) - bisect_right(nums, 0)\n        return max(neg, pos)",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "The array is sorted. The number of negatives is the index of the first non-negative; the number of positives is n minus the index of the first positive. Return the larger.",
   "frames": []
  }
 ]
};
