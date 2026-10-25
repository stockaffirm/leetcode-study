window.PROBLEM = {
 "id": "278",
 "title": "First Bad Version",
 "level": "Easy",
 "topic": "Binary Search",
 "question": "Versions 1…n of a product exist; from some version on, all versions are bad. You can call isBadVersion(v). Find the first bad version using as few calls as possible. Example: n=5, versions 4 and 5 are bad → 4.",
 "why": "Versions 1..n: once a version is bad, all later ones are bad. Using isBadVersion(v), find the first bad one with as few calls as possible.",
 "idea": "Binary search: if the middle version is bad the answer is at or before it, otherwise after it.",
 "input": "n=5, first bad = 4",
 "output": "4",
 "notes": [],
 "best": "Binary search: if the middle version is bad the answer is at or before it, otherwise after it.",
 "variants": [
  {
   "name": "Binary search",
   "code": "class Solution:\n    def firstBadVersion(self, n):\n        lo, hi = 1, n\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if isBadVersion(mid): hi = mid\n            else: lo = mid + 1\n        return lo",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "Binary search: if the middle version is bad the answer is at or before it, otherwise after it.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Linear scan",
   "tag": "Brute force",
   "code": "class Solution:\n    def firstBadVersion(self, n):\n        for v in range(1, n + 1):\n            if isBadVersion(v): return v",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Ask about versions 1, 2, 3, … until one is bad.",
   "frames": [],
   "alt": true
  }
 ]
};
