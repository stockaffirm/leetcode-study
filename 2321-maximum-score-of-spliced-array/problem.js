window.PROBLEM = {
 "id": "2321",
 "title": "Maximum Score Of Spliced Array",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "nums1 [60,60,60], nums2 [10,90,10] → swap index 1 → 210.",
 "idea": "Swapping a subarray moves its difference between the arrays. The best score is max(sum1 + best gain, sum2 + best gain) where the gain is the maximum subarray sum of nums2 − nums1 (for improving nums1) or nums1 − nums2 (for improving nums2). Use Kadane's algorithm (empty gain allowed).",
 "input": "nums1 = [60,60,60], nums2 = [10,90,10]",
 "output": "210",
 "notes": [],
 "best": "Swapping a subarray moves its difference between the arrays. The best score is max(sum1 + best gain, sum2 + best gain) where the gain is the maximum subarray sum of nums2 − nums1 (for improving nums1) or nums1 − nums2 (for improving nums2). Use Kadane's algorithm (empty gain allowed).",
 "variants": [
  {
   "name": "Kadane on the difference, both directions",
   "code": "class Solution:\n    def maximumsSplicedArray(self, nums1, nums2):\n        def gain(a, b):\n            best = cur = 0\n            for x, y in zip(a, b):\n                cur = max(0, cur + y - x)\n                best = max(best, cur)\n            return best\n        return max(sum(nums1) + gain(nums1, nums2), sum(nums2) + gain(nums2, nums1))",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Swapping a subarray moves its difference between the arrays. The best score is max(sum1 + best gain, sum2 + best gain) where the gain is the maximum subarray sum of nums2 − nums1 (for improving nums1) or nums1 − nums2 (for improving nums2). Use Kadane's algorithm (empty gain allowed).",
   "frames": []
  }
 ]
};
