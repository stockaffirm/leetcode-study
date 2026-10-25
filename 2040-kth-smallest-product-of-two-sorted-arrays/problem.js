window.PROBLEM = {
 "id": "2040",
 "title": "Kth Smallest Product of Two Sorted Arrays",
 "level": "Hard",
 "topic": "Binary Search",
 "question": "Two sorted integer lists (they may contain negatives and zero) are given. Consider every product a·b with one number from each. Return the k-th smallest product (k starts at 1). Example: [2,5], [3,4], k=2 → 8 (products 6, 8, 15, 20).",
 "why": "Two sorted lists (negatives and zeros allowed). Look at all products a·b with a from the first list and b from the second; return the k-th smallest.",
 "idea": "Guess a value v and count how many products are ≤ v: for each a, the matching b's form a prefix or suffix of the second list (found with bisect, flipping the direction for negative a). Binary search the smallest v whose count reaches k.",
 "input": "[2,5], [3,4], k=2",
 "output": "8",
 "notes": [],
 "best": "Guess a value v and count how many products are ≤ v: for each a, the matching b's form a prefix or suffix of the second list (found with bisect, flipping the direction for negative a). Binary search the smallest v whose count reaches k.",
 "variants": [
  {
   "name": "Binary search on the product",
   "code": "class Solution:\n    def kthSmallestProduct(self, nums1, nums2, k):\n        m = len(nums2)\n        def count(v):\n            c = 0\n            for a in nums1:\n                if a > 0: c += bisect_right(nums2, v // a)\n                elif a < 0: c += m - bisect_left(nums2, -((-v) // a))\n                elif v >= 0: c += m\n            return c\n        lo, hi = -10 ** 10, 10 ** 10\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if count(mid) >= k: hi = mid\n            else: lo = mid + 1\n        return lo",
   "time": "O(n log m log V)",
   "space": "O(1)",
   "explain": "Guess a value v and count how many products are ≤ v: for each a, the matching b's form a prefix or suffix of the second list (found with bisect, flipping the direction for negative a). Binary search the smallest v whose count reaches k.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "All products, sorted",
   "tag": "Brute force",
   "code": "class Solution:\n    def kthSmallestProduct(self, nums1, nums2, k):\n        return sorted(a * b for a in nums1 for b in nums2)[k - 1]",
   "time": "O(n·m log(n·m))",
   "space": "O(n·m)",
   "explain": "Build every product, sort, take the k-th (too slow for big inputs).",
   "frames": [],
   "alt": true
  }
 ]
};
