window.PROBLEM = {
 "id": "2226",
 "title": "Maximum Candies Allocated to K Children",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "",
 "why": "Piles [5,8,6] and 3 children: with 5 candies each, the piles give 1 + 1 + 1 = 3 children. With 6 they only give 0 + 1 + 1 = 2. So the answer is 5.",
 "idea": "If each child gets x candies, pile c serves c // x children. The number of children served drops as x grows, so binary search the largest x that still serves at least k children.",
 "input": "candies = [5,8,6], k = 3",
 "output": "5",
 "notes": [],
 "best": "If each child gets x candies, pile c serves c // x children. The number of children served drops as x grows, so binary search the largest x that still serves at least k children.",
 "variants": [
  {
   "name": "Binary search the candies per child",
   "code": "class Solution:\n    def maximumCandies(self, candies, k):\n        lo, hi = 0, max(candies)\n        while lo < hi:\n            mid = (lo + hi + 1) // 2\n            if sum(c // mid for c in candies) >= k:\n                lo = mid\n            else:\n                hi = mid - 1\n        return lo",
   "time": "O(n log max)",
   "space": "O(1)",
   "explain": "If each child gets x candies, pile c serves c // x children. The number of children served drops as x grows, so binary search the largest x that still serves at least k children.",
   "frames": []
  }
 ]
};
