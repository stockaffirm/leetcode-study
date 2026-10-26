window.PROBLEM = {
 "id": "3046",
 "title": "Split the Array",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
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
   "frames": []
  }
 ]
};
