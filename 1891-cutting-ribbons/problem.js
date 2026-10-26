window.PROBLEM = {
 "id": "1891",
 "title": "Cutting Ribbons",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "",
 "why": "Ribbons [9,7,5], k=3: cutting length 5 gives 1 + 1 + 1 = 3 pieces; length 6 would give only 1 + 1 + 0 = 2.",
 "idea": "For a length L, ribbon r gives r // L pieces. The count of pieces drops as L grows, so binary search the largest L that still gives at least k pieces (0 if none).",
 "input": "ribbons = [9,7,5], k = 3",
 "output": "5",
 "notes": [],
 "best": "For a length L, ribbon r gives r // L pieces. The count of pieces drops as L grows, so binary search the largest L that still gives at least k pieces (0 if none).",
 "variants": [
  {
   "name": "Binary search the ribbon length",
   "code": "class Solution:\n    def maxLength(self, ribbons, k):\n        lo, hi = 0, max(ribbons)\n        while lo < hi:\n            mid = (lo + hi + 1) // 2\n            if sum(r // mid for r in ribbons) >= k:\n                lo = mid\n            else:\n                hi = mid - 1\n        return lo",
   "time": "O(n log max)",
   "space": "O(1)",
   "explain": "For a length L, ribbon r gives r // L pieces. The count of pieces drops as L grows, so binary search the largest L that still gives at least k pieces (0 if none).",
   "frames": []
  }
 ]
};
