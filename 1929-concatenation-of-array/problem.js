window.PROBLEM = {
 "id": "1929",
 "title": "Concatenation of Array",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
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
   "frames": []
  }
 ]
};
