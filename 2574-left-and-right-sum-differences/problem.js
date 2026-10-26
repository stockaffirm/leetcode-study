window.PROBLEM = {
 "id": "2574",
 "title": "Left and Right Sum Differences",
 "level": "Easy",
 "topic": "Prefix Sum",
 "question": "",
 "why": "[10,4,8,3] → [15,1,11,22].",
 "idea": "Keep a running left sum; the right sum is total − left − nums[i]. The answer at i is their absolute difference.",
 "input": "nums = [10,4,8,3]",
 "output": "[15, 1, 11, 22]",
 "notes": [],
 "best": "Keep a running left sum; the right sum is total − left − nums[i]. The answer at i is their absolute difference.",
 "variants": [
  {
   "name": "|left sum − right sum| at each index",
   "code": "class Solution:\n    def leftRightDifference(self, nums):\n        total = sum(nums)\n        left = 0\n        res = []\n        for x in nums:\n            res.append(abs(left - (total - left - x)))\n            left += x\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Keep a running left sum; the right sum is total − left − nums[i]. The answer at i is their absolute difference.",
   "frames": []
  }
 ]
};
