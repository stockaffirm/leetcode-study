window.PROBLEM = {
 "id": "2401",
 "title": "Longest Nice Subarray",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "",
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
   "frames": []
  }
 ]
};
