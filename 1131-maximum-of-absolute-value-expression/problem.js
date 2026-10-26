window.PROBLEM = {
 "id": "1131",
 "title": "Maximum of Absolute Value Expression",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "arr1 [1,2,3,4], arr2 [-1,4,5,6] → 13.",
 "idea": "|a−b| + |c−d| + |i−j| is the maximum over sign choices of (±(a+... )). For each of the 4 sign pairs (s1, s2), the value s1·arr1[i] + s2·arr2[i] + i has maximum − minimum equal to the best difference for that sign pair. Take the largest over the four.",
 "input": "arr1 = [1,2,3,4], arr2 = [-1,4,5,6]",
 "output": "13",
 "notes": [],
 "best": "|a−b| + |c−d| + |i−j| is the maximum over sign choices of (±(a+... )). For each of the 4 sign pairs (s1, s2), the value s1·arr1[i] + s2·arr2[i] + i has maximum − minimum equal to the best difference for that sign pair. Take the largest over the four.",
 "variants": [
  {
   "name": "Four sign combinations, max − min of each",
   "code": "class Solution:\n    def maxAbsValExpr(self, arr1, arr2):\n        best = 0\n        for s1 in (1, -1):\n            for s2 in (1, -1):\n                vals = [s1 * a + s2 * b + i for i, (a, b) in enumerate(zip(arr1, arr2))]\n                best = max(best, max(vals) - min(vals))\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "|a−b| + |c−d| + |i−j| is the maximum over sign choices of (±(a+... )). For each of the 4 sign pairs (s1, s2), the value s1·arr1[i] + s2·arr2[i] + i has maximum − minimum equal to the best difference for that sign pair. Take the largest over the four.",
   "frames": []
  }
 ]
};
