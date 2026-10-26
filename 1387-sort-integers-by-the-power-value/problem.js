window.PROBLEM = {
 "id": "1387",
 "title": "Sort Integers by The Power Value",
 "level": "Medium",
 "topic": "Sorting",
 "question": "",
 "why": "Range 12–15, k=2: powers 9, 10, 17, 9 → sorted 12, 13, 15, 14 … the 2nd is 13.",
 "idea": "The power of x is the number of Collatz steps (x even → x/2, odd → 3x+1) to reach 1. Compute it with memoisation, sort the numbers in [lo, hi] by (power, value) and return the k-th.",
 "input": "lo = 12, hi = 15, k = 2",
 "output": "13",
 "notes": [],
 "best": "The power of x is the number of Collatz steps (x even → x/2, odd → 3x+1) to reach 1. Compute it with memoisation, sort the numbers in [lo, hi] by (power, value) and return the k-th.",
 "variants": [
  {
   "name": "Collatz steps, sort by (power, value)",
   "code": "class Solution:\n    def getKth(self, lo, hi, k):\n        @lru_cache(None)\n        def power(x):\n            if x == 1:\n                return 0\n            return 1 + power(x // 2 if x % 2 == 0 else 3 * x + 1)\n        return sorted(range(lo, hi + 1), key=lambda x: (power(x), x))[k - 1]",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "The power of x is the number of Collatz steps (x even → x/2, odd → 3x+1) to reach 1. Compute it with memoisation, sort the numbers in [lo, hi] by (power, value) and return the k-th.",
   "frames": []
  }
 ]
};
