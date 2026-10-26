window.PROBLEM = {
 "id": "3702",
 "title": "Longest Subsequence With Non-Zero Bitwise XOR",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "[1,2,3] → total XOR (exclusive OR) is 0, so drop one element → 2.",
 "idea": "If the XOR of the whole array is non-zero, take everything. If it is zero, removing any one non-zero element makes the XOR non-zero (it becomes that element), giving n − 1. If every element is zero no subsequence works: 0.",
 "input": "nums = [1,2,3]",
 "output": "2",
 "notes": [],
 "best": "If the XOR of the whole array is non-zero, take everything. If it is zero, removing any one non-zero element makes the XOR non-zero (it becomes that element), giving n − 1. If every element is zero no subsequence works: 0.",
 "variants": [
  {
   "name": "Whole array, or drop one non-zero element",
   "code": "class Solution:\n    def longestSubsequence(self, nums):\n        total = 0\n        for x in nums:\n            total ^= x\n        if total != 0:\n            return len(nums)\n        return len(nums) - 1 if any(nums) else 0",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "If the XOR of the whole array is non-zero, take everything. If it is zero, removing any one non-zero element makes the XOR non-zero (it becomes that element), giving n − 1. If every element is zero no subsequence works: 0.",
   "frames": []
  }
 ]
};
