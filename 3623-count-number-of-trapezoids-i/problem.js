window.PROBLEM = {
 "id": "3623",
 "title": "Count Number of Trapezoids I",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "[[1,0],[2,0],[3,0],[2,2],[3,2]] → 3 trapezoids.",
 "idea": "A horizontal trapezoid has two horizontal sides on two different heights. For a height with c points there are c(c−1)/2 possible horizontal segments. Choose two segments from two different heights: sum over height pairs of seg(a)·seg(b), computed with a running sum, modulo 1e9+7.",
 "input": "points = [[1,0],[2,0],[3,0],[2,2],[3,2]]",
 "output": "3",
 "notes": [],
 "best": "A horizontal trapezoid has two horizontal sides on two different heights. For a height with c points there are c(c−1)/2 possible horizontal segments. Choose two segments from two different heights: sum over height pairs of seg(a)·seg(b), computed with a running sum, modulo 1e9+7.",
 "variants": [
  {
   "name": "Pairs of same-height segments, then pairs of rows",
   "code": "class Solution:\n    def countTrapezoids(self, points):\n        MOD = 10**9 + 7\n        rows = Counter(y for _, y in points)\n        total = 0\n        res = 0\n        for c in rows.values():\n            seg = c * (c - 1) // 2\n            res = (res + seg * total) % MOD\n            total += seg\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A horizontal trapezoid has two horizontal sides on two different heights. For a height with c points there are c(c−1)/2 possible horizontal segments. Choose two segments from two different heights: sum over height pairs of seg(a)·seg(b), computed with a running sum, modulo 1e9+7.",
   "frames": []
  }
 ]
};
