window.PROBLEM = {
 "id": "2817",
 "title": "Minimum Absolute Difference Between Elements With Constraint",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
 "why": "Find two numbers at least x positions apart whose values are as close as possible.",
 "idea": "Walk through the list; for position i, all elements at positions ≤ i − x are allowed partners. Keep them in a sorted list and use binary search to find the closest value to nums[i].",
 "input": "nums [4, 3, 2, 4], x=2",
 "output": "0",
 "notes": [],
 "best": "Walk through the list; for position i, all elements at positions ≤ i − x are allowed partners. Keep them in a sorted list and use binary search to find the closest value to nums[i].",
 "variants": [
  {
   "name": "Sorted list of far-enough elements",
   "code": "class Solution:\n    def minAbsoluteDifference(self, nums, x):\n        seen = []\n        best = float('inf')\n        for i in range(x, len(nums)):\n            insort(seen, nums[i - x])\n            j = bisect_left(seen, nums[i])\n            if j < len(seen): best = min(best, seen[j] - nums[i])\n            if j > 0: best = min(best, nums[i] - seen[j - 1])\n        return best",
   "time": "O(n²) worst, O(n log n) with a tree",
   "space": "O(n)",
   "explain": "Walk through the list; for position i, all elements at positions ≤ i − x are allowed partners. Keep them in a sorted list and use binary search to find the closest value to nums[i].",
   "frames": []
  }
 ]
};
