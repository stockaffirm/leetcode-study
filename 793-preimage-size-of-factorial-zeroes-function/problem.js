window.PROBLEM = {
 "id": "793",
 "title": "Preimage Size of Factorial Zeroes Function",
 "level": "Hard",
 "topic": "Binary Search",
 "question": "",
 "why": "k=5: no factorial has exactly 5 trailing zeros (24! has 4, 25! has 6) → 0.",
 "idea": "f(x) = number of trailing zeros of x! = x//5 + x//25 + … and it never decreases. Binary search the smallest x with f(x) ≥ k. The answer is 5 if f(x) == k (x … x+4 all share it) and 0 otherwise.",
 "input": "k = 5",
 "output": "0",
 "notes": [],
 "best": "f(x) = number of trailing zeros of x! = x//5 + x//25 + … and it never decreases. Binary search the smallest x with f(x) ≥ k. The answer is 5 if f(x) == k (x … x+4 all share it) and 0 otherwise.",
 "variants": [
  {
   "name": "Binary search the first x with k zeros",
   "code": "class Solution:\n    def preimageSizeFZF(self, k):\n        def f(x):\n            r = 0\n            while x:\n                x //= 5\n                r += x\n            return r\n        lo, hi = 0, 5 * (k + 1)\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if f(mid) >= k:\n                hi = mid\n            else:\n                lo = mid + 1\n        return 5 if f(lo) == k else 0",
   "time": "O(log² k)",
   "space": "O(1)",
   "explain": "f(x) = number of trailing zeros of x! = x//5 + x//25 + … and it never decreases. Binary search the smallest x with f(x) ≥ k. The answer is 5 if f(x) == k (x … x+4 all share it) and 0 otherwise.",
   "frames": []
  }
 ]
};
