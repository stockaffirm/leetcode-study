window.PROBLEM = {
 "id": "1891",
 "title": "Cutting Ribbons",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "Ribbons of given lengths can be cut into pieces of the same integer length. Return the maximum length L such that you get at least k pieces of length L (0 if impossible); leftover bits may be thrown away. Example: [9,7,5], k=3 → 5.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try lengths from the longest down",
   "tag": "Brute force",
   "code": "class Solution:\n    def maxLength(self, ribbons, k):\n        for L in range(max(ribbons), 0, -1):\n            if sum(r // L for r in ribbons) >= k:\n                return L\n        return 0",
   "time": "O(n · max)",
   "space": "O(1)",
   "explain": "Start at the longest ribbon and shorten the target length until k pieces fit.",
   "frames": [],
   "alt": true
  }
 ]
};
