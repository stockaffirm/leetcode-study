window.PROBLEM = {
 "id": "2815",
 "title": "Max Pair Sum in an Array",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "[112,131,411] → no two numbers share their largest digit → -1.",
 "idea": "Group the numbers by their largest digit. For each group the answer is the sum of its two biggest members. Keep the maximum over the groups, or −1 if no group has two numbers.",
 "input": "nums = [51,71,17,24,42]",
 "output": "88",
 "notes": [],
 "best": "Group the numbers by their largest digit. For each group the answer is the sum of its two biggest members. Keep the maximum over the groups, or −1 if no group has two numbers.",
 "variants": [
  {
   "name": "Keep the best number per largest digit",
   "code": "class Solution:\n    def maxSum(self, nums):\n        best = {}\n        res = -1\n        for x in nums:\n            d = max(str(x))\n            if d in best:\n                res = max(res, best[d] + x)\n            best[d] = max(best.get(d, 0), x)\n        return res",
   "time": "O(n log V)",
   "space": "O(1)",
   "explain": "Group the numbers by their largest digit. For each group the answer is the sum of its two biggest members. Keep the maximum over the groups, or −1 if no group has two numbers.",
   "frames": []
  }
 ]
};
