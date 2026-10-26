window.PROBLEM = {
 "id": "3524",
 "title": "Find X Value of Array I",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "[1,2,3,4,5], k=3 → [9, 2, 4].",
 "idea": "The operation removes a prefix and a suffix, so what is left is any non-empty subarray. For each end index keep how many subarrays ending there have product ≡ r (mod k): extend every earlier subarray by multiplying its remainder by the new number, and add the new single-element subarray. Add these counts into the result.",
 "input": "nums = [1,2,3,4,5], k = 3",
 "output": "[9, 2, 4]",
 "notes": [],
 "best": "The operation removes a prefix and a suffix, so what is left is any non-empty subarray. For each end index keep how many subarrays ending there have product ≡ r (mod k): extend every earlier subarray by multiplying its remainder by the new number, and add the new single-element subarray. Add these counts into the result.",
 "variants": [
  {
   "name": "Count subarray products by remainder, ending at each index",
   "code": "class Solution:\n    def resultArray(self, nums, k):\n        res = [0] * k\n        cur = [0] * k\n        for x in nums:\n            new = [0] * k\n            new[x % k] += 1\n            for r in range(k):\n                new[r * x % k] += cur[r]\n            cur = new\n            for r in range(k):\n                res[r] += cur[r]\n        return res",
   "time": "O(n·k)",
   "space": "O(k)",
   "explain": "The operation removes a prefix and a suffix, so what is left is any non-empty subarray. For each end index keep how many subarrays ending there have product ≡ r (mod k): extend every earlier subarray by multiplying its remainder by the new number, and add the new single-element subarray. Add these counts into the result.",
   "frames": []
  }
 ]
};
