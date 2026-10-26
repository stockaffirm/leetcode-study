window.PROBLEM = {
 "id": "448",
 "title": "Find All Numbers Disappeared in an Array",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "[4,3,2,7,8,2,3,1]: 5 and 6 never appear.",
 "idea": "Values are between 1 and n, so a value can mark its own position: make nums[value − 1] negative. In the end the positions that are still positive belong to missing numbers.",
 "input": "nums = [4,3,2,7,8,2,3,1]",
 "output": "[5, 6]",
 "notes": [],
 "best": "Values are between 1 and n, so a value can mark its own position: make nums[value − 1] negative. In the end the positions that are still positive belong to missing numbers.",
 "variants": [
  {
   "name": "Mark seen positions by negating",
   "code": "class Solution:\n    def findDisappearedNumbers(self, nums):\n        for x in nums:\n            i = abs(x) - 1\n            nums[i] = -abs(nums[i])\n        return [i + 1 for i, x in enumerate(nums) if x > 0]",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Values are between 1 and n, so a value can mark its own position: make nums[value − 1] negative. In the end the positions that are still positive belong to missing numbers.",
   "frames": []
  }
 ]
};
