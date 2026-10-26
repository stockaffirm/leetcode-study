window.PROBLEM = {
 "id": "667",
 "title": "Beautiful Arrangement II",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
 "why": "n=3, k=2 → [1,3,2] (differences 2, 1).",
 "idea": "Alternate between the smallest and largest unused values of 1…k+1: 1, k+1, 2, k, … This produces differences k, k−1, …, 1 (k distinct values). Then append k+2, …, n in increasing order, which only adds the difference 1.",
 "input": "n = 3, k = 2",
 "output": "[1, 3, 2]",
 "notes": [],
 "best": "Alternate between the smallest and largest unused values of 1…k+1: 1, k+1, 2, k, … This produces differences k, k−1, …, 1 (k distinct values). Then append k+2, …, n in increasing order, which only adds the difference 1.",
 "variants": [
  {
   "name": "Zig-zag the first k+1 numbers, then count up",
   "code": "class Solution:\n    def constructArray(self, n, k):\n        res = []\n        lo, hi = 1, k + 1\n        while lo <= hi:\n            res.append(lo)\n            lo += 1\n            if lo <= hi:\n                res.append(hi)\n                hi -= 1\n        return res + list(range(k + 2, n + 1))",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Alternate between the smallest and largest unused values of 1…k+1: 1, k+1, 2, k, … This produces differences k, k−1, …, 1 (k distinct values). Then append k+2, …, n in increasing order, which only adds the difference 1.",
   "frames": []
  }
 ]
};
