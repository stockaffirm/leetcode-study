window.PROBLEM = {
 "id": "3349",
 "title": "Adjacent Increasing Subarrays Detection I",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "[2,5,7,8,9,2,3,4,3,1], k=3 → [7,8,9] and [2,3,4] are adjacent increasing → true.",
 "idea": "Compute inc[i] = length of the strictly increasing run starting at i. Two adjacent increasing subarrays of length k start at a and a+k, so we need inc[a] ≥ k and inc[a+k] ≥ k.",
 "input": "nums = [2,5,7,8,9,2,3,4,3,1], k = 3",
 "output": "true",
 "notes": [],
 "best": "Compute inc[i] = length of the strictly increasing run starting at i. Two adjacent increasing subarrays of length k start at a and a+k, so we need inc[a] ≥ k and inc[a+k] ≥ k.",
 "variants": [
  {
   "name": "Strictly increasing run lengths",
   "code": "class Solution:\n    def hasIncreasingSubarrays(self, nums, k):\n        n = len(nums)\n        inc = [1] * n\n        for i in range(n - 2, -1, -1):\n            if nums[i] < nums[i + 1]:\n                inc[i] = inc[i + 1] + 1\n        return any(inc[a] >= k and inc[a + k] >= k for a in range(n - k))",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Compute inc[i] = length of the strictly increasing run starting at i. Two adjacent increasing subarrays of length k start at a and a+k, so we need inc[a] ≥ k and inc[a+k] ≥ k.",
   "frames": []
  }
 ]
};
