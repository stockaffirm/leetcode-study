window.PROBLEM = {
 "id": "3495",
 "title": "Minimum Operations to Make Array Elements Zero",
 "level": "Hard",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "queries [[1,2],[2,4]]: totals of steps 2 and 4 → 1 + 2 = 3 operations.",
 "idea": "One operation divides two numbers by 4, so each number needs d(x) = number of base-4 digits of x steps. The minimum operations for a range is ceil(sum of d(x) / 2). Sum d(x) over [l, r] by splitting the range into blocks [4^k, 4^(k+1) − 1] where d = k + 1.",
 "input": "queries = [[1,2],[2,4]]",
 "output": "3",
 "notes": [],
 "best": "One operation divides two numbers by 4, so each number needs d(x) = number of base-4 digits of x steps. The minimum operations for a range is ceil(sum of d(x) / 2). Sum d(x) over [l, r] by splitting the range into blocks [4^k, 4^(k+1) − 1] where d = k + 1.",
 "variants": [
  {
   "name": "Sum the base-4 'depths', then halve",
   "code": "class Solution:\n    def minOperations(self, queries):\n        def steps(n):\n            total = 0\n            lo, d = 1, 1\n            while lo <= n:\n                hi = min(n, lo * 4 - 1)\n                total += (hi - lo + 1) * d\n                lo *= 4\n                d += 1\n            return total\n        res = 0\n        for l, r in queries:\n            s = steps(r) - steps(l - 1)\n            res += (s + 1) // 2\n        return res",
   "time": "O(q log r)",
   "space": "O(1)",
   "explain": "One operation divides two numbers by 4, so each number needs d(x) = number of base-4 digits of x steps. The minimum operations for a range is ceil(sum of d(x) / 2). Sum d(x) over [l, r] by splitting the range into blocks [4^k, 4^(k+1) − 1] where d = k + 1.",
   "frames": []
  }
 ]
};
