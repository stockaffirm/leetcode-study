window.PROBLEM = {
 "id": "1389",
 "title": "Create Target Array in the Given Order",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Build a target array: for i = 0, 1, 2 … insert nums[i] at position index[i] of the array being built. Return the final array. Example: nums [0,1,2,3,4], index [0,1,2,2,1] → [0,4,1,3,2].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Shift by hand",
   "tag": "Brute force",
   "code": "class Solution:\n    def createTargetArray(self, nums, index):\n        res = []\n        for v, i in zip(nums, index):\n            res.append(None)\n            for j in range(len(res) - 1, i, -1):\n                res[j] = res[j - 1]\n            res[i] = v\n        return res",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Shift later elements to the right yourself, then place the value.",
   "frames": [],
   "alt": true
  }
 ]
};
