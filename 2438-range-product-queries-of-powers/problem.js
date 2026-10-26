window.PROBLEM = {
 "id": "2438",
 "title": "Range Product Queries of Powers",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "",
 "why": "n=15 = 1+2+4+8: queries [0,1]→2, [2,2]→4, [0,3]→64.",
 "idea": "powers is the sorted list of powers of two in n's binary form. For each query multiply the powers from l to r modulo 1e9+7 (at most ~30 numbers).",
 "input": "n = 15, queries = [[0,1],[2,2],[0,3]]",
 "output": "[2, 4, 64]",
 "notes": [],
 "best": "powers is the sorted list of powers of two in n's binary form. For each query multiply the powers from l to r modulo 1e9+7 (at most ~30 numbers).",
 "variants": [
  {
   "name": "Powers of two from the bits of n",
   "code": "class Solution:\n    def productQueries(self, n, queries):\n        MOD = 10**9 + 7\n        powers = [1 << b for b in range(31) if (n >> b) & 1]\n        res = []\n        for l, r in queries:\n            p = 1\n            for v in powers[l:r + 1]:\n                p = p * v % MOD\n            res.append(p)\n        return res",
   "time": "O(q·log n)",
   "space": "O(log n)",
   "explain": "powers is the sorted list of powers of two in n's binary form. For each query multiply the powers from l to r modulo 1e9+7 (at most ~30 numbers).",
   "frames": []
  }
 ]
};
