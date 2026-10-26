window.PROBLEM = {
 "id": "1877",
 "title": "Minimize Maximum Pair Sum in Array",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "Split an even-length array into pairs so that the largest pair sum is as small as possible, and return that value. Example: [3,5,2,3] → 7.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Two pointers",
   "tag": "Alternative",
   "code": "class Solution:\n    def minPairSum(self, nums):\n        nums.sort()\n        i, j = 0, len(nums) - 1\n        best = 0\n        while i < j:\n            best = max(best, nums[i] + nums[j])\n            i += 1\n            j -= 1\n        return best",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "After sorting, move one pointer from each end and track the largest sum.",
   "frames": [],
   "alt": true
  }
 ]
};
