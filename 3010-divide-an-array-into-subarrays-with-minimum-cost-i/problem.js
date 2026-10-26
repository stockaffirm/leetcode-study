window.PROBLEM = {
 "id": "3010",
 "title": "Divide an Array into Subarrays With Minimum Cost I",
 "level": "Easy",
 "topic": "Sorting",
 "question": "",
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
   "frames": []
  }
 ]
};
