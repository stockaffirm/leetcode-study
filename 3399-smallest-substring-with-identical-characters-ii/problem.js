window.PROBLEM = {
 "id": "3399",
 "title": "Smallest Substring With Identical Characters II",
 "level": "Hard",
 "topic": "Binary Search",
 "question": "",
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
   "frames": []
  }
 ]
};
