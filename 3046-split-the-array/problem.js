window.PROBLEM = {
 "id": "3046",
 "title": "Split the Array",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "nums has even length. Split it into two parts of equal length so that each part contains only distinct elements. Return true if that is possible. Example: [1,1,2,2,3,4] → true.",
 "why": "[1,1,2,2,3,4] can be split into [1,2,3] and [1,2,4] → true.",
 "idea": "Both halves need distinct values, so each value can appear at most twice (once in each half). With an even length, that condition is also enough.",
 "input": "nums = [1,1,2,2,3,4]",
 "output": "true",
 "notes": [],
 "best": "Both halves need distinct values, so each value can appear at most twice (once in each half). With an even length, that condition is also enough.",
 "variants": [
  {
   "name": "No value may appear more than twice",
   "code": "class Solution:\n    def isPossibleToSplit(self, nums):\n        return max(Counter(nums).values()) <= 2",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Both halves need distinct values, so each value can appear at most twice (once in each half). With an even length, that condition is also enough.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sort and compare i and i+2",
   "tag": "Alternative",
   "code": "class Solution:\n    def isPossibleToSplit(self, nums):\n        nums = sorted(nums)\n        return all(nums[i] != nums[i + 2] for i in range(len(nums) - 2))",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "After sorting, a value appearing three times shows up as nums[i] == nums[i+2].",
   "frames": [],
   "alt": true
  }
 ]
};
