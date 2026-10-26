window.PROBLEM = {
 "id": "3173",
 "title": "Bitwise OR of Adjacent Elements",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Return an array of length n−1 whose i-th value is nums[i] OR nums[i+1]. Example: [1,3,7,15] → [3,7,15].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Index loop",
   "tag": "Alternative",
   "code": "class Solution:\n    def orArray(self, nums):\n        res = []\n        for i in range(len(nums) - 1):\n            res.append(nums[i] | nums[i + 1])\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Plain loop over i from 0 to n−2.",
   "frames": [],
   "alt": true
  }
 ]
};
