window.PROBLEM = {
 "id": "3399",
 "title": "Smallest Substring With Identical Characters II",
 "level": "Hard",
 "topic": "Binary Search",
 "question": "You have a binary string (up to 100 000 long) and may flip at most numOps characters. Return the smallest possible length of the longest block of identical characters. Example: '000001', numOps=1 → 2.",
 "why": "'000001', 1 flip: one flip in the middle cuts the run of five 0s into pieces of at most 2 → 2.",
 "idea": "Same idea as part I with a much longer string: binary search the longest allowed run L. L = 1 means a fully alternating string; for L ≥ 2 a run of length r costs r // (L + 1) flips. Each check is linear, so the total is O(n log n).",
 "input": "s = \"000001\", numOps = 1",
 "output": "2",
 "notes": [],
 "best": "Same idea as part I with a much longer string: binary search the longest allowed run L. L = 1 means a fully alternating string; for L ≥ 2 a run of length r costs r // (L + 1) flips. Each check is linear, so the total is O(n log n).",
 "variants": [
  {
   "name": "Binary search the longest allowed run",
   "code": "class Solution:\n    def minLength(self, s, numOps):\n        n = len(s)\n        def ok(L):\n            if L == 1:\n                bad = sum(c != str(i % 2) for i, c in enumerate(s))\n                return min(bad, n - bad) <= numOps\n            ops = 0\n            for _, g in groupby(s):\n                ops += len(list(g)) // (L + 1)\n            return ops <= numOps\n        lo, hi = 1, n\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if ok(mid):\n                hi = mid\n            else:\n                lo = mid + 1\n        return lo",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "Same idea as part I with a much longer string: binary search the longest allowed run L. L = 1 means a fully alternating string; for L ≥ 2 a run of length r costs r // (L + 1) flips. Each check is linear, so the total is O(n log n).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try each length from 1 upwards",
   "tag": "Brute force",
   "code": "class Solution:\n    def minLength(self, s, numOps):\n        n = len(s)\n        for L in range(1, n + 1):\n            if L == 1:\n                bad = sum(c != str(i % 2) for i, c in enumerate(s))\n                if min(bad, n - bad) <= numOps:\n                    return 1\n            else:\n                ops = 0\n                for _, g in groupby(s):\n                    ops += len(list(g)) // (L + 1)\n                if ops <= numOps:\n                    return L\n        return n",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Test L = 1, 2, 3 … and return the first length that fits in the flip budget (too slow for the largest inputs).",
   "frames": [],
   "alt": true
  }
 ]
};
