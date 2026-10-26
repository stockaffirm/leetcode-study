window.PROBLEM = {
 "id": "976",
 "title": "Largest Perimeter Triangle",
 "level": "Easy",
 "topic": "Greedy",
 "question": "",
 "why": "[2,1,2] → 2 + 1 + 2 = 5.",
 "idea": "Sort descending. The first three consecutive sides a ≥ b ≥ c with b + c > a form the triangle with the largest perimeter. If none exists the answer is 0.",
 "input": "nums = [2,1,2]",
 "output": "5",
 "notes": [],
 "best": "Sort descending. The first three consecutive sides a ≥ b ≥ c with b + c > a form the triangle with the largest perimeter. If none exists the answer is 0.",
 "variants": [
  {
   "name": "Sort descending, first valid triple",
   "code": "class Solution:\n    def largestPerimeter(self, nums):\n        nums = sorted(nums, reverse=True)\n        for i in range(len(nums) - 2):\n            if nums[i + 1] + nums[i + 2] > nums[i]:\n                return nums[i] + nums[i + 1] + nums[i + 2]\n        return 0",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "Sort descending. The first three consecutive sides a ≥ b ≥ c with b + c > a form the triangle with the largest perimeter. If none exists the answer is 0.",
   "frames": []
  }
 ]
};
