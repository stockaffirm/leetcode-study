window.PROBLEM = {
 "id": "2574",
 "title": "Left and Right Sum Differences",
 "level": "Easy",
 "topic": "Prefix Sum",
 "question": "Return an array answer where answer[i] = |sum of elements to the left of i − sum of elements to the right of i|. Example: [10,4,8,3] → [15,1,11,22].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Prefix and suffix arrays",
   "tag": "Alternative",
   "code": "class Solution:\n    def leftRightDifference(self, nums):\n        left = [0] + list(accumulate(nums))[:-1]\n        right = list(accumulate(reversed(nums)))[::-1]\n        right = right[1:] + [0]\n        return [abs(a - b) for a, b in zip(left, right)]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Build left and right sums explicitly.",
   "frames": [],
   "alt": true
  }
 ]
};
