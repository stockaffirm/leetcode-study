window.PROBLEM = {
 "id": "275",
 "title": "H-Index II",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "",
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
   "frames": []
  }
 ]
};
