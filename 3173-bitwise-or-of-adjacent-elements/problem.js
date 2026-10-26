window.PROBLEM = {
 "id": "3173",
 "title": "Bitwise OR of Adjacent Elements",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "[1,3,7,15] → 1|3=3, 3|7=7, 7|15=15 → [3,7,15].",
 "idea": "The answer has n−1 entries: entry i is nums[i] OR nums[i+1].",
 "input": "nums = [1,3,7,15]",
 "output": "[3, 7, 15]",
 "notes": [],
 "best": "The answer has n−1 entries: entry i is nums[i] OR nums[i+1].",
 "variants": [
  {
   "name": "OR each neighbour pair",
   "code": "class Solution:\n    def orArray(self, nums):\n        return [a | b for a, b in zip(nums, nums[1:])]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "The answer has n−1 entries: entry i is nums[i] OR nums[i+1].",
   "frames": []
  }
 ]
};
