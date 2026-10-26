window.PROBLEM = {
 "id": "3010",
 "title": "Divide an Array into Subarrays With Minimum Cost I",
 "level": "Easy",
 "topic": "Sorting",
 "question": "Split nums into 3 contiguous subarrays; the cost of a subarray is its first element. Return the minimum total cost. Example: [1,2,3,12] → 6.",
 "why": "[1,2,3,12]: split [1],[2],[3,12] → 1 + 2 + 3 = 6.",
 "idea": "The cost of a subarray is its first element. Three subarrays always include nums[0] as a first element; the other two first elements can be any two later elements, so take the two smallest of nums[1:].",
 "input": "nums = [1,2,3,12]",
 "output": "6",
 "notes": [],
 "best": "The cost of a subarray is its first element. Three subarrays always include nums[0] as a first element; the other two first elements can be any two later elements, so take the two smallest of nums[1:].",
 "variants": [
  {
   "name": "First element plus the two smallest others",
   "code": "class Solution:\n    def minimumCost(self, nums):\n        return nums[0] + sum(sorted(nums[1:])[:2])",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "The cost of a subarray is its first element. Three subarrays always include nums[0] as a first element; the other two first elements can be any two later elements, so take the two smallest of nums[1:].",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try all pairs of cut points",
   "tag": "Brute force",
   "code": "class Solution:\n    def minimumCost(self, nums):\n        n = len(nums)\n        return min(nums[0] + nums[i] + nums[j] for i in range(1, n) for j in range(i + 1, n))",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Cost = nums[0] + nums[i] + nums[j] for 0 < i < j.",
   "frames": [],
   "alt": true
  }
 ]
};
