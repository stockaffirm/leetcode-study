window.PROBLEM = {
 "id": "2460",
 "title": "Apply Operations to an Array",
 "level": "Easy",
 "topic": "Two Pointers",
 "question": "",
 "why": "[1,2,2,1,1,0] → merge → [1,4,0,2,0,0] → shift zeros → [1,4,2,0,0,0].",
 "idea": "For i from 0: if nums[i] == nums[i+1], double nums[i] and set nums[i+1] = 0. Afterwards move all zeros to the end keeping the order of non-zero numbers.",
 "input": "nums = [1,2,2,1,1,0]",
 "output": "[1, 4, 2, 0, 0, 0]",
 "notes": [],
 "best": "For i from 0: if nums[i] == nums[i+1], double nums[i] and set nums[i+1] = 0. Afterwards move all zeros to the end keeping the order of non-zero numbers.",
 "variants": [
  {
   "name": "Merge equal neighbours, then move zeros to the end",
   "code": "class Solution:\n    def applyOperations(self, nums):\n        for i in range(len(nums) - 1):\n            if nums[i] == nums[i + 1]:\n                nums[i] *= 2\n                nums[i + 1] = 0\n        nonzero = [x for x in nums if x]\n        return nonzero + [0] * (len(nums) - len(nonzero))",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "For i from 0: if nums[i] == nums[i+1], double nums[i] and set nums[i+1] = 0. Afterwards move all zeros to the end keeping the order of non-zero numbers.",
   "frames": []
  }
 ]
};
