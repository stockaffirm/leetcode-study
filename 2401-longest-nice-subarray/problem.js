window.PROBLEM = {
 "id": "2401",
 "title": "Longest Nice Subarray",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "A subarray is nice if the bitwise AND of every pair of elements at different positions is 0. Return the length of the longest nice subarray. Example: [1,3,8,48,10] → 3.",
 "why": "[1,3,8,48,10]: 3, 8, 48 have pairwise AND 0 → length 3.",
 "idea": "A nice subarray has pairwise AND = 0, i.e. no bit appears in two elements. Keep the OR of the window; when the new number overlaps with it, remove elements from the left (XOR (exclusive OR) them out) until it does not.",
 "input": "nums = [1,3,8,48,10]",
 "output": "3",
 "notes": [],
 "best": "A nice subarray has pairwise AND = 0, i.e. no bit appears in two elements. Keep the OR of the window; when the new number overlaps with it, remove elements from the left (XOR (exclusive OR) them out) until it does not.",
 "variants": [
  {
   "name": "Window whose elements have disjoint bits",
   "code": "class Solution:\n    def longestNiceSubarray(self, nums):\n        used = left = best = 0\n        for r, x in enumerate(nums):\n            while used & x:\n                used ^= nums[left]\n                left += 1\n            used |= x\n            best = max(best, r - left + 1)\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "A nice subarray has pairwise AND = 0, i.e. no bit appears in two elements. Keep the OR of the window; when the new number overlaps with it, remove elements from the left (XOR (exclusive OR) them out) until it does not.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every start with expansion",
   "tag": "Brute force",
   "code": "class Solution:\n    def longestNiceSubarray(self, nums):\n        best = 1\n        for i in range(len(nums)):\n            used = 0\n            for j in range(i, len(nums)):\n                if used & nums[j]:\n                    break\n                used |= nums[j]\n                best = max(best, j - i + 1)\n        return best",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Expand from each start while the OR and sum agree (disjoint bits).",
   "frames": [],
   "alt": true
  }
 ]
};
