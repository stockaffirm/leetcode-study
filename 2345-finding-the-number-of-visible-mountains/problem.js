window.PROBLEM = {
 "id": "2345",
 "title": "Finding the Number of Visible Mountains",
 "level": "Medium",
 "topic": "Intervals",
 "question": "Each mountain is a right-angled isosceles triangle with its base on the x-axis and its peak at (x, y). A mountain is visible if its peak is not inside (or on the border of) another mountain; two identical mountains hide each other. Return the number of visible mountains. Example: [[2,2],[6,3],[5,4]] → 2.",
 "why": "[[2,2],[6,3],[5,4]]: mountain [6,3] lies inside [5,4]'s base → hidden, so 2 are visible.",
 "idea": "A mountain with peak (x, y) covers the base interval [x−y, x+y]; it is hidden exactly when another interval contains it. Identical mountains hide each other. Sort the distinct intervals by left end (right end descending), sweep keeping the largest right end seen, and count intervals that extend past it and are not duplicated.",
 "input": "peaks = [[2,2],[6,3],[5,4]]",
 "output": "2",
 "notes": [],
 "best": "A mountain with peak (x, y) covers the base interval [x−y, x+y]; it is hidden exactly when another interval contains it. Identical mountains hide each other. Sort the distinct intervals by left end (right end descending), sweep keeping the largest right end seen, and count intervals that extend past it and are not duplicated.",
 "variants": [
  {
   "name": "A mountain is an interval [x−y, x+y]",
   "code": "class Solution:\n    def visibleMountains(self, peaks):\n        cnt = Counter(map(tuple, peaks))\n        spans = sorted({(x - y, x + y) for x, y in peaks}, key=lambda t: (t[0], -t[1]))\n        res = 0\n        far = float('-inf')\n        for l, r in spans:\n            if r > far:\n                far = r\n                if cnt[((l + r) // 2, (r - l) // 2)] == 1:\n                    res += 1\n        return res",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "A mountain with peak (x, y) covers the base interval [x−y, x+y]; it is hidden exactly when another interval contains it. Identical mountains hide each other. Sort the distinct intervals by left end (right end descending), sweep keeping the largest right end seen, and count intervals that extend past it and are not duplicated.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Compare every pair",
   "tag": "Brute force",
   "code": "class Solution:\n    def visibleMountains(self, peaks):\n        res = 0\n        for i, (x, y) in enumerate(peaks):\n            hidden = False\n            for j, (a, b) in enumerate(peaks):\n                if i != j and a - b <= x - y and a + b >= x + y:\n                    hidden = True\n                    break\n            if not hidden:\n                res += 1\n        return res",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "A mountain is hidden when some other mountain's base interval contains its own (identical ones hide each other).",
   "frames": [],
   "alt": true
  }
 ]
};
