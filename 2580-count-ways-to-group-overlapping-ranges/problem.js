window.PROBLEM = {
 "id": "2580",
 "title": "Count Ways to Group Overlapping Ranges",
 "level": "Medium",
 "topic": "Intervals",
 "question": "Each range [start, end] must go into one of two groups, and any two ranges that overlap must be in the same group. Return the number of ways to assign the ranges, modulo 1 000 000 007. Example: [[6,10],[5,15]] → 2.",
 "why": "[[6,10],[5,15]] overlap → one component → 2 ways (all in group 1 or all in group 2).",
 "idea": "Ranges that overlap must share a group, so they form connected blocks. Sort the ranges and merge overlapping ones to count the blocks c; each block independently picks one of two groups, giving 2^c ways.",
 "input": "ranges = [[6,10],[5,15]]",
 "output": "2",
 "notes": [],
 "best": "Ranges that overlap must share a group, so they form connected blocks. Sort the ranges and merge overlapping ones to count the blocks c; each block independently picks one of two groups, giving 2^c ways.",
 "variants": [
  {
   "name": "2 to the number of merged groups",
   "code": "class Solution:\n    def countWays(self, ranges):\n        comps = 0\n        end = -1\n        for s, e in sorted(ranges):\n            if s > end:\n                comps += 1\n            end = max(end, e)\n        return pow(2, comps, 10**9 + 7)",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "Ranges that overlap must share a group, so they form connected blocks. Sort the ranges and merge overlapping ones to count the blocks c; each block independently picks one of two groups, giving 2^c ways.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every assignment",
   "tag": "Brute force",
   "code": "class Solution:\n    def countWays(self, ranges):\n        n = len(ranges)\n        res = 0\n        for mask in range(1 << n):\n            ok = True\n            for i in range(n):\n                for j in range(i + 1, n):\n                    a, b = ranges[i], ranges[j]\n                    if max(a[0], b[0]) <= min(a[1], b[1]) and (mask >> i & 1) != (mask >> j & 1):\n                        ok = False\n            res += ok\n        return res % (10**9 + 7)",
   "time": "O(2ⁿ·n²)",
   "space": "O(n)",
   "explain": "Only for tiny inputs: assign each range to group 1 or 2 and keep assignments where overlapping ranges share a group.",
   "frames": [],
   "alt": true
  }
 ]
};
