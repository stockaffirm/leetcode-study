window.PROBLEM = {
 "id": "3398",
 "title": "Smallest Substring With Identical Characters I",
 "level": "Hard",
 "topic": "Binary Search",
 "question": "You have a binary string and may flip at most numOps characters. Return the smallest possible length of the longest block of identical characters. Example: '000001', numOps=1 → 2.",
 "why": "'000001', 1 flip: flipping the middle zero breaks 00000 into runs of at most 2 → 2.",
 "idea": "Guess the answer L (the longest run we allow) and count the flips needed. For L = 1 the string must alternate: flips = min(mismatches with 0101…, with 1010…). For L ≥ 2 a run of length r needs r // (L + 1) flips (flip every (L+1)-th character). A bigger L never needs more flips, so binary search the smallest L that fits in numOps.",
 "input": "s = \"000001\", numOps = 1",
 "output": "2",
 "notes": [],
 "best": "Guess the answer L (the longest run we allow) and count the flips needed. For L = 1 the string must alternate: flips = min(mismatches with 0101…, with 1010…). For L ≥ 2 a run of length r needs r // (L + 1) flips (flip every (L+1)-th character). A bigger L never needs more flips, so binary search the smallest L that fits in numOps.",
 "variants": [
  {
   "name": "Binary search the longest allowed run",
   "code": "class Solution:\n    def minLength(self, s, numOps):\n        n = len(s)\n        def ok(L):\n            if L == 1:\n                bad = sum(c != str(i % 2) for i, c in enumerate(s))\n                return min(bad, n - bad) <= numOps\n            ops = 0\n            for _, g in groupby(s):\n                ops += len(list(g)) // (L + 1)\n            return ops <= numOps\n        lo, hi = 1, n\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if ok(mid):\n                hi = mid\n            else:\n                lo = mid + 1\n        return lo",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "Guess the answer L (the longest run we allow) and count the flips needed. For L = 1 the string must alternate: flips = min(mismatches with 0101…, with 1010…). For L ≥ 2 a run of length r needs r // (L + 1) flips (flip every (L+1)-th character). A bigger L never needs more flips, so binary search the smallest L that fits in numOps.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try each length from 1 upwards",
   "tag": "Brute force",
   "code": "class Solution:\n    def minLength(self, s, numOps):\n        n = len(s)\n        for L in range(1, n + 1):\n            if L == 1:\n                bad = sum(c != str(i % 2) for i, c in enumerate(s))\n                if min(bad, n - bad) <= numOps:\n                    return 1\n            else:\n                ops = 0\n                for _, g in groupby(s):\n                    ops += len(list(g)) // (L + 1)\n                if ops <= numOps:\n                    return L\n        return n",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Test L = 1, 2, 3 … with the same flip count and return the first that fits.",
   "frames": [],
   "alt": true
  }
 ]
};
