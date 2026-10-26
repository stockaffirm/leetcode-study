window.PROBLEM = {
 "id": "1829",
 "title": "Maximum XOR for Each Query",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "nums is a sorted list. For maximumBit = m, repeat n times: choose k with 0 ≤ k < 2^m that maximises (XOR of all numbers currently in nums) XOR k, record k, then delete the last number. Return the recorded values. Example: [0,1,1,3], m=2 → [0,3,2,3].",
 "why": "For maximumBit = m, repeatedly: choose k < 2^m maximising (XOR of all numbers) XOR k, record k, then remove the last number. Return all the k's.",
 "idea": "To maximise XOR with k, k should be the complement of the current XOR within m bits: k = xor ^ (2^m − 1). Maintain the XOR as numbers are removed (XOR again).",
 "input": "nums [0,1,1,3], maximumBit = 2",
 "output": "[0,3,2,3]",
 "notes": [],
 "best": "To maximise XOR with k, k should be the complement of the current XOR within m bits: k = xor ^ (2^m − 1). Maintain the XOR as numbers are removed (XOR again).",
 "variants": [
  {
   "name": "Running XOR and a bit mask",
   "code": "class Solution:\n    def getMaximumXor(self, nums, maximumBit):\n        x = 0\n        for v in nums: x ^= v\n        mask = (1 << maximumBit) - 1\n        res = []\n        for v in reversed(nums):\n            res.append(x ^ mask)\n            x ^= v\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "To maximise XOR with k, k should be the complement of the current XOR within m bits: k = xor ^ (2^m − 1). Maintain the XOR as numbers are removed (XOR again).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every k",
   "tag": "Brute force",
   "code": "class Solution:\n    def getMaximumXor(self, nums, maximumBit):\n        res = []\n        arr = list(nums)\n        while arr:\n            x = 0\n            for v in arr: x ^= v\n            res.append(max(range(1 << maximumBit), key=lambda k: (x ^ k, -k)))\n            arr.pop()\n        return res",
   "time": "O(n·2^m)",
   "space": "O(n)",
   "explain": "For each query test all k below 2^m and keep the best.",
   "frames": [],
   "alt": true
  }
 ]
};
