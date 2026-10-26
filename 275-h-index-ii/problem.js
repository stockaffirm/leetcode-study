window.PROBLEM = {
 "id": "275",
 "title": "H-Index II",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "citations (sorted ascending) lists how often each of a researcher's papers is cited. The h-index is the largest h such that h papers have at least h citations each. Return it in O(log n) (very fast: the work is halved at every step). Example: [0,1,3,5,6] → 3.",
 "why": "Citations [0,1,3,5,6]: 3 papers (3, 5, 6) have at least 3 citations → h = 3.",
 "idea": "With the citations sorted ascending, the paper at index i has n − i papers at or above it. Find the first i where citations[i] ≥ n − i; then h = n − i. Binary search does it in O(log n).",
 "input": "citations = [0,1,3,5,6]",
 "output": "3",
 "notes": [],
 "best": "With the citations sorted ascending, the paper at index i has n − i papers at or above it. Find the first i where citations[i] ≥ n − i; then h = n − i. Binary search does it in O(log n).",
 "variants": [
  {
   "name": "Binary search on the sorted citations",
   "code": "class Solution:\n    def hIndex(self, citations):\n        n = len(citations)\n        lo, hi = 0, n\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if citations[mid] >= n - mid:\n                hi = mid\n            else:\n                lo = mid + 1\n        return n - lo",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "With the citations sorted ascending, the paper at index i has n − i papers at or above it. Find the first i where citations[i] ≥ n − i; then h = n − i. Binary search does it in O(log n).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Linear scan",
   "tag": "Brute force",
   "code": "class Solution:\n    def hIndex(self, citations):\n        n = len(citations)\n        for i, c in enumerate(citations):\n            if c >= n - i:\n                return n - i\n        return 0",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Go through the sorted citations and stop at the first paper with enough citations.",
   "frames": [],
   "alt": true
  }
 ]
};
