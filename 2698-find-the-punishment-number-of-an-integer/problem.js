window.PROBLEM = {
 "id": "2698",
 "title": "Find the Punishment Number of an Integer",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "The punishment number of n is the sum of i² over all i in 1…n for which the decimal digits of i² can be split into contiguous parts that add up to i. Return it. Example: n=10 → 182.",
 "why": "n=10: 1, 9 (9² = 81 → 8+1) and 10 (100 → 10+0) qualify → 1 + 81 + 100 = 182.",
 "idea": "For each i from 1 to n test whether the decimal digits of i² can be cut into contiguous pieces whose values add up to i (backtracking over cut positions). Add i² for each i that works.",
 "input": "n = 10",
 "output": "182",
 "notes": [],
 "best": "For each i from 1 to n test whether the decimal digits of i² can be cut into contiguous pieces whose values add up to i (backtracking over cut positions). Add i² for each i that works.",
 "variants": [
  {
   "name": "Check whether i² splits into parts summing to i",
   "code": "class Solution:\n    def punishmentNumber(self, n):\n        def can(s, target):\n            if not s:\n                return target == 0\n            for k in range(1, len(s) + 1):\n                v = int(s[:k])\n                if v > target:\n                    break\n                if can(s[k:], target - v):\n                    return True\n            return False\n        return sum(i * i for i in range(1, n + 1) if can(str(i * i), i))",
   "time": "O(n·2^digits)",
   "space": "O(digits)",
   "explain": "For each i from 1 to n test whether the decimal digits of i² can be cut into contiguous pieces whose values add up to i (backtracking over cut positions). Add i² for each i that works.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Digit DP check",
   "tag": "Alternative",
   "code": "class Solution:\n    def punishmentNumber(self, n):\n        def ok(i):\n            s = str(i * i)\n            @lru_cache(None)\n            def go(pos, rem):\n                if pos == len(s):\n                    return rem == 0\n                v = 0\n                for e in range(pos, len(s)):\n                    v = v * 10 + int(s[e])\n                    if v > rem:\n                        break\n                    if go(e + 1, rem - v):\n                        return True\n                return False\n            return go(0, i)\n        return sum(i * i for i in range(1, n + 1) if ok(i))",
   "time": "O(n·2^digits)",
   "space": "O(digits)",
   "explain": "Memoised check of whether the digits of i² can be split to sum to i.",
   "frames": [],
   "alt": true
  }
 ]
};
