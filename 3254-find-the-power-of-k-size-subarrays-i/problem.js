window.PROBLEM = {
 "id": "3254",
 "title": "Find the Power of K-size Subarrays I",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "",
 "why": "[1,2,3,4,3,2,5], k=3 → [3,4,-1,-1,-1].",
 "idea": "A window's power is its maximum if its elements are consecutive and ascending (each = previous + 1), otherwise −1. Keep the length of the current run of +1 steps; a window ending at i is good when the run is at least k.",
 "input": "nums = [1,2,3,4,3,2,5], k = 3",
 "output": "[3, 4, -1, -1, -1]",
 "notes": [],
 "best": "A window's power is its maximum if its elements are consecutive and ascending (each = previous + 1), otherwise −1. Keep the length of the current run of +1 steps; a window ending at i is good when the run is at least k.",
 "variants": [
  {
   "name": "Track the length of the consecutive ascending run",
   "code": "class Solution:\n    def resultsArray(self, nums, k):\n        res = []\n        run = 0\n        for i, x in enumerate(nums):\n            run = run + 1 if i and x == nums[i - 1] + 1 else 1\n            if i >= k - 1:\n                res.append(x if run >= k else -1)\n        return res",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "A window's power is its maximum if its elements are consecutive and ascending (each = previous + 1), otherwise −1. Keep the length of the current run of +1 steps; a window ending at i is good when the run is at least k.",
   "frames": []
  }
 ]
};
