window.PROBLEM = {
 "id": "628",
 "title": "Maximum Product of Three Numbers",
 "level": "Easy",
 "topic": "Sorting",
 "question": "",
 "why": "Pick three numbers with the biggest product. Two big negatives multiply to a positive, so [-10,-10,5,2] → 500.",
 "idea": "After sorting, the best triple is either the three largest numbers, or the two smallest (possibly very negative) times the largest.",
 "input": "[-10, -10, 5, 2]",
 "output": "500",
 "notes": [],
 "best": "After sorting, the best triple is either the three largest numbers, or the two smallest (possibly very negative) times the largest.",
 "variants": [
  {
   "name": "Sort, compare two candidates",
   "code": "class Solution:\n    def maximumProduct(self, nums):\n        nums = sorted(nums)\n        return max(nums[-1] * nums[-2] * nums[-3], nums[0] * nums[1] * nums[-1])",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "After sorting, the best triple is either the three largest numbers, or the two smallest (possibly very negative) times the largest.",
   "frames": []
  }
 ]
};
