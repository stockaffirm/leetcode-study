window.PROBLEM = {
 "id": "2438",
 "title": "Range Product Queries of Powers",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "Write n as a sum of the fewest powers of two, sorted ascending (that list is `powers`). For each query [l, r] return the product of powers[l..r] modulo 1 000 000 007. Example: n=15, queries [[0,1],[2,2],[0,3]] → [2,4,64].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Prefix products with modular inverse",
   "tag": "Alternative",
   "code": "class Solution:\n    def productQueries(self, n, queries):\n        MOD = 10**9 + 7\n        exps = [b for b in range(31) if (n >> b) & 1]\n        pre = [0]\n        for e in exps:\n            pre.append(pre[-1] + e)\n        return [pow(2, pre[r + 1] - pre[l], MOD) for l, r in queries]",
   "time": "O(q·log)",
   "space": "O(log n)",
   "explain": "Powers of two multiply to a power of two, so use exponent prefix sums: the product of powers l..r is 2^(e[l] + … + e[r]).",
   "frames": [],
   "alt": true
  }
 ]
};
