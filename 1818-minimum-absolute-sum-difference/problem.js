window.PROBLEM = {
 "id": "1818",
 "title": "Minimum Absolute Sum Difference",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "nums1 and nums2 have the same length. Their absolute sum difference is Σ|nums1[i] − nums2[i]|. You may replace at most one element of nums1 by any other element of nums1. Return the minimum absolute sum difference after that, modulo 1,000,000,007. Example: nums1 [1,7,5], nums2 [2,3,5] → 3.",
 "why": "The absolute sum difference of two lists is Σ|nums1[i] − nums2[i]|. You may replace ONE element of nums1 by any other element of nums1. Return the minimum possible sum (mod 10⁹+7).",
 "idea": "For each position find, in a sorted copy of nums1, the value closest to nums2[i] (bisect); the gain is the old difference minus the new one. Subtract the best gain from the total.",
 "input": "[1,7,5], [2,3,5]",
 "output": "3",
 "notes": [],
 "best": "For each position find, in a sorted copy of nums1, the value closest to nums2[i] (bisect); the gain is the old difference minus the new one. Subtract the best gain from the total.",
 "variants": [
  {
   "name": "Sorted copy + bisect for the best replacement",
   "code": "class Solution:\n    def minAbsoluteSumDiff(self, nums1, nums2):\n        total = sum(abs(a - b) for a, b in zip(nums1, nums2))\n        srt = sorted(nums1)\n        best = 0\n        for a, b in zip(nums1, nums2):\n            old = abs(a - b)\n            i = bisect_left(srt, b)\n            new = old\n            if i < len(srt): new = min(new, abs(srt[i] - b))\n            if i > 0: new = min(new, abs(srt[i - 1] - b))\n            best = max(best, old - new)\n        return (total - best) % (10 ** 9 + 7)",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "For each position find, in a sorted copy of nums1, the value closest to nums2[i] (bisect); the gain is the old difference minus the new one. Subtract the best gain from the total.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every replacement",
   "tag": "Brute force",
   "code": "class Solution:\n    def minAbsoluteSumDiff(self, nums1, nums2):\n        total = sum(abs(a - b) for a, b in zip(nums1, nums2))\n        best = 0\n        for i, b in enumerate(nums2):\n            old = abs(nums1[i] - b)\n            best = max(best, old - min(abs(a - b) for a in nums1))\n        return (total - best) % (10 ** 9 + 7)",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "For each position test every value of nums1 as the replacement.",
   "frames": [],
   "alt": true
  }
 ]
};
