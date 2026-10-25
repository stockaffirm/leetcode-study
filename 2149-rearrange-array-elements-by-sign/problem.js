window.PROBLEM = {
 "id": "2149",
 "title": "Rearrange Array Elements by Sign",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "An array has an equal number of positive and negative numbers. Rearrange it so that every consecutive pair has opposite signs, the first number is positive, and the numbers of the same sign keep their original order. Example: [3,1,-2,-5,2,-4] → [3,-2,1,-5,2,-4].",
 "why": "[3,1,-2,-5,2,-4]: positives go to positions 0, 2, 4 in order (3,1,2) and negatives to 1, 3, 5 (−2,−5,−4) → [3,−2,1,−5,2,−4].",
 "idea": "Equal numbers of positives and negatives must alternate, starting with a positive. Keep two write positions (even slots for positives, odd slots for negatives) and drop each number into its slot.",
 "input": "nums = [3,1,-2,-5,2,-4]",
 "output": "[3,-2,1,-5,2,-4]",
 "notes": [],
 "best": "Equal numbers of positives and negatives must alternate, starting with a positive. Keep two write positions (even slots for positives, odd slots for negatives) and drop each number into its slot.",
 "variants": [
  {
   "name": "Two write positions",
   "code": "class Solution:\n    def rearrangeArray(self, nums):\n        res = [0] * len(nums)\n        p, n = 0, 1\n        for x in nums:\n            if x > 0:\n                res[p] = x\n                p += 2\n            else:\n                res[n] = x\n                n += 2\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Equal numbers of positives and negatives must alternate, starting with a positive. Keep two write positions (even slots for positives, odd slots for negatives) and drop each number into its slot.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Split, then interleave",
   "tag": "Alternative",
   "code": "class Solution:\n    def rearrangeArray(self, nums):\n        pos = [x for x in nums if x > 0]\n        neg = [x for x in nums if x < 0]\n        res = []\n        for a, b in zip(pos, neg):\n            res += [a, b]\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Collect positives and negatives separately and alternate them.",
   "frames": [],
   "alt": true
  }
 ]
};
