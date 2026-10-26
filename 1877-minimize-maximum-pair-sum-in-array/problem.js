window.PROBLEM = {
 "id": "1877",
 "title": "Minimize Maximum Pair Sum in Array",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "",
 "why": "[3,5,2,3]: pairs (2,5) and (3,3) → max pair sum 7.",
 "idea": "To keep the biggest pair sum low, pair the smallest number with the largest, the second smallest with the second largest and so on. Return the maximum of those sums.",
 "input": "nums = [3,5,2,3]",
 "output": "7",
 "notes": [],
 "best": "To keep the biggest pair sum low, pair the smallest number with the largest, the second smallest with the second largest and so on. Return the maximum of those sums.",
 "variants": [
  {
   "name": "Pair the smallest with the largest",
   "code": "class Solution:\n    def minPairSum(self, nums):\n        nums.sort()\n        return max(nums[i] + nums[-1 - i] for i in range(len(nums) // 2))",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "To keep the biggest pair sum low, pair the smallest number with the largest, the second smallest with the second largest and so on. Return the maximum of those sums.",
   "frames": []
  }
 ]
};
