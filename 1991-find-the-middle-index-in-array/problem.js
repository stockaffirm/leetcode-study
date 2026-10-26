window.PROBLEM = {
 "id": "1991",
 "title": "Find the Middle Index in Array",
 "level": "Easy",
 "topic": "Prefix Sum",
 "question": "",
 "why": "[2,3,-1,8,4]: index 3 has left sum 4 and right sum 4 → 3.",
 "idea": "Keep the total and a running left sum; index i is the middle if left == total − left − nums[i].",
 "input": "nums = [2,3,-1,8,4]",
 "output": "3",
 "notes": [],
 "best": "Keep the total and a running left sum; index i is the middle if left == total − left − nums[i].",
 "variants": [
  {
   "name": "Left sum equals right sum",
   "code": "class Solution:\n    def findMiddleIndex(self, nums):\n        total = sum(nums)\n        left = 0\n        for i, x in enumerate(nums):\n            if left == total - left - x:\n                return i\n            left += x\n        return -1",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Keep the total and a running left sum; index i is the middle if left == total − left − nums[i].",
   "frames": []
  }
 ]
};
