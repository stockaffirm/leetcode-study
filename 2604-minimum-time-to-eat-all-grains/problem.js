window.PROBLEM = {
 "id": "2604",
 "title": "Minimum Time to Eat All Grains",
 "level": "Hard",
 "topic": "Binary Search",
 "question": "",
 "why": "Hens and grains sit on a line. Each second a hen moves 1 step. Fewest seconds until all grains are eaten?",
 "idea": "Binary-search the time T. To check T, sort hens and grains and let each hen (left to right) eat the leftmost uneaten grains it can reach: going left first then right, or right first then left, whichever reaches farther.",
 "input": "hens [3,6,7], grains [2,4,7,9]",
 "output": "2",
 "notes": [],
 "best": "Binary-search the time T. To check T, sort hens and grains and let each hen (left to right) eat the leftmost uneaten grains it can reach: going left first then right, or right first then left, whichever reaches farther.",
 "variants": [
  {
   "name": "Binary search on time + greedy hens",
   "code": "class Solution:\n    def minimumTime(self, hens, grains):\n        hens, grains = sorted(hens), sorted(grains)\n        def ok(t):\n            j = 0\n            for h in hens:\n                if j == len(grains): return True\n                if grains[j] < h:\n                    d = h - grains[j]\n                    if d > t: return False\n                    reach = h + max(t - 2 * d, (t - d) // 2)\n                else:\n                    reach = h + t\n                while j < len(grains) and grains[j] <= reach: j += 1\n            return j == len(grains)\n        lo, hi = 0, 2 * (max(hens + grains) - min(hens + grains))\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if ok(mid): hi = mid\n            else: lo = mid + 1\n        return lo",
   "time": "O((n+m) log range)",
   "space": "O(1)",
   "explain": "Binary-search the time T. To check T, sort hens and grains and let each hen (left to right) eat the leftmost uneaten grains it can reach: going left first then right, or right first then left, whichever reaches farther.",
   "frames": []
  }
 ]
};
