window.PROBLEM = {
 "id": "2771",
 "title": "Longest Non-decreasing Subarray From Two Arrays",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "Build nums3 by choosing for each index i either nums1[i] or nums2[i]. Return the length of the longest non-decreasing contiguous subarray you can make in nums3. Example: [2,3,1] and [1,2,1] → 2.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Table over all indices",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxNonDecreasingLength(self, nums1, nums2):\n        n = len(nums1)\n        d1 = [1] * n\n        d2 = [1] * n\n        for i in range(1, n):\n            for cur, arr, d in ((nums1[i], nums1, d1), (nums2[i], nums2, d2)):\n                if nums1[i - 1] <= cur:\n                    d[i] = max(d[i], d1[i - 1] + 1)\n                if nums2[i - 1] <= cur:\n                    d[i] = max(d[i], d2[i - 1] + 1)\n        return max(max(d1), max(d2))",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Store the two states for every index in arrays.",
   "frames": [],
   "alt": true
  }
 ]
};
