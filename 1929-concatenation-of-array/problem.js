window.PROBLEM = {
 "id": "1929",
 "title": "Concatenation of Array",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Return an array that is the given array written twice, one copy after the other. Example: [1,2,1] → [1,2,1,1,2,1].",
 "why": "[1,2,1] followed by [1,2,1] is [1,2,1,1,2,1].",
 "idea": "The answer is the array joined with itself.",
 "input": "nums = [1,2,1]",
 "output": "[1,2,1,1,2,1]",
 "notes": [],
 "best": "The answer is the array joined with itself.",
 "variants": [
  {
   "name": "Write the array twice",
   "code": "class Solution:\n    def getConcatenation(self, nums):\n        return nums + nums",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "The answer is the array joined with itself.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Index with modulo",
   "tag": "Alternative",
   "code": "class Solution:\n    def getConcatenation(self, nums):\n        n = len(nums)\n        return [nums[i % n] for i in range(2 * n)]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Build 2n entries by reading the array with i % n.",
   "frames": [],
   "alt": true
  }
 ]
};
