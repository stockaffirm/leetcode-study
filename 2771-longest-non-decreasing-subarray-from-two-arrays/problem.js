window.PROBLEM = {
 "id": "2771",
 "title": "Longest Non-decreasing Subarray From Two Arrays",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "nums1 [2,3,1], nums2 [1,2,1]: choose 2,3,... → best subarray length 2.",
 "idea": "At each index build nums3[i] from nums1 or nums2. Keep a1 = longest non-decreasing subarray ending here if we pick nums1[i], and a2 for nums2[i]. Each extends the previous a1 or a2 when the earlier value is ≤ the current one; otherwise restart at 1.",
 "input": "nums1 = [2,3,1], nums2 = [1,2,1]",
 "output": "2",
 "notes": [],
 "best": "At each index build nums3[i] from nums1 or nums2. Keep a1 = longest non-decreasing subarray ending here if we pick nums1[i], and a2 for nums2[i]. Each extends the previous a1 or a2 when the earlier value is ≤ the current one; otherwise restart at 1.",
 "variants": [
  {
   "name": "Two states per index: took nums1 or nums2",
   "code": "class Solution:\n    def maxNonDecreasingLength(self, nums1, nums2):\n        a1 = a2 = best = 1\n        for i in range(1, len(nums1)):\n            b1 = b2 = 1\n            if nums1[i - 1] <= nums1[i]:\n                b1 = max(b1, a1 + 1)\n            if nums2[i - 1] <= nums1[i]:\n                b1 = max(b1, a2 + 1)\n            if nums1[i - 1] <= nums2[i]:\n                b2 = max(b2, a1 + 1)\n            if nums2[i - 1] <= nums2[i]:\n                b2 = max(b2, a2 + 1)\n            a1, a2 = b1, b2\n            best = max(best, a1, a2)\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "At each index build nums3[i] from nums1 or nums2. Keep a1 = longest non-decreasing subarray ending here if we pick nums1[i], and a2 for nums2[i]. Each extends the previous a1 or a2 when the earlier value is ≤ the current one; otherwise restart at 1.",
   "frames": []
  }
 ]
};
