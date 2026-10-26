window.PROBLEM = {
 "id": "801",
 "title": "Minimum Swaps To Make Sequences Increasing",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "[1,3,5,4] and [1,2,3,7]: swapping position 3 gives [1,3,5,7] and [1,2,3,4] — both increasing with 1 swap.",
 "idea": "At each index we either keep or swap the pair. keep / swap hold the fewest swaps so far for each choice at the previous index. A choice is allowed if both rows still increase (same decision as before) or cross-increase (opposite decision).",
 "input": "nums1 = [1,3,5,4], nums2 = [1,2,3,7]",
 "output": "1",
 "notes": [],
 "best": "At each index we either keep or swap the pair. keep / swap hold the fewest swaps so far for each choice at the previous index. A choice is allowed if both rows still increase (same decision as before) or cross-increase (opposite decision).",
 "variants": [
  {
   "name": "Two-state DP: keep or swap",
   "code": "class Solution:\n    def minSwap(self, nums1, nums2):\n        keep, swap = 0, 1\n        for i in range(1, len(nums1)):\n            nkeep = nswap = inf\n            if nums1[i] > nums1[i - 1] and nums2[i] > nums2[i - 1]:\n                nkeep = keep\n                nswap = swap + 1\n            if nums1[i] > nums2[i - 1] and nums2[i] > nums1[i - 1]:\n                nkeep = min(nkeep, swap)\n                nswap = min(nswap, keep + 1)\n            keep, swap = nkeep, nswap\n        return min(keep, swap)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "At each index we either keep or swap the pair. keep / swap hold the fewest swaps so far for each choice at the previous index. A choice is allowed if both rows still increase (same decision as before) or cross-increase (opposite decision).",
   "frames": []
  }
 ]
};
