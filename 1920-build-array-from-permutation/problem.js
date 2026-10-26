window.PROBLEM = {
 "id": "1920",
 "title": "Build Array from Permutation",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "For each i the answer is nums[nums[i]]: nums[nums[0]] = nums[0] = 0, nums[nums[1]] = nums[2] = 1 …",
 "idea": "Build the new array with ans[i] = nums[nums[i]].",
 "input": "nums = [0,2,1,5,3,4]",
 "output": "[0,1,2,4,5,3]",
 "notes": [],
 "best": "Build the new array with ans[i] = nums[nums[i]].",
 "variants": [
  {
   "name": "Direct lookup",
   "code": "class Solution:\n    def buildArray(self, nums):\n        return [nums[nums[i]] for i in range(len(nums))]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Build the new array with ans[i] = nums[nums[i]].",
   "frames": []
  }
 ]
};
