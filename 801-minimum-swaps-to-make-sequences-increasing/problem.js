window.PROBLEM = {
 "id": "801",
 "title": "Minimum Swaps To Make Sequences Increasing",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "Two arrays of the same length are given. In one move you may swap nums1[i] with nums2[i] (same position). Return the minimum number of moves to make BOTH arrays strictly increasing (it is always possible). Example: [1,3,5,4] and [1,2,3,7] → 1.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Memoized recursion (index, swapped)",
   "tag": "Alternative",
   "code": "class Solution:\n    def minSwap(self, nums1, nums2):\n        n = len(nums1)\n        @lru_cache(None)\n        def go(i, sw):\n            if i == n:\n                return 0\n            pa = nums2[i - 1] if sw else nums1[i - 1]\n            pb = nums1[i - 1] if sw else nums2[i - 1]\n            best = inf\n            if nums1[i] > pa and nums2[i] > pb:\n                best = go(i + 1, 0)\n            if nums2[i] > pa and nums1[i] > pb:\n                best = min(best, 1 + go(i + 1, 1))\n            return best\n        return min(go(1, 0), 1 + go(1, 1))",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "go(i, sw) is the fewest swaps for positions i… when position i − 1 was (or was not) swapped.",
   "frames": [],
   "alt": true
  }
 ]
};
