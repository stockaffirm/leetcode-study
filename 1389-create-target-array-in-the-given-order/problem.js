window.PROBLEM = {
 "id": "1389",
 "title": "Create Target Array in the Given Order",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "nums [0,1,2,3,4], index [0,1,2,2,1] → [0,4,1,3,2].",
 "idea": "Start with an empty list and for each position i insert nums[i] at position index[i] (this shifts later elements right).",
 "input": "nums = [0,1,2,3,4], index = [0,1,2,2,1]",
 "output": "[0, 4, 1, 3, 2]",
 "notes": [],
 "best": "Start with an empty list and for each position i insert nums[i] at position index[i] (this shifts later elements right).",
 "variants": [
  {
   "name": "Insert each value at its index",
   "code": "class Solution:\n    def createTargetArray(self, nums, index):\n        res = []\n        for v, i in zip(nums, index):\n            res.insert(i, v)\n        return res",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Start with an empty list and for each position i insert nums[i] at position index[i] (this shifts later elements right).",
   "frames": []
  }
 ]
};
