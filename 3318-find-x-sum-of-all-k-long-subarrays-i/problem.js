window.PROBLEM = {
 "id": "3318",
 "title": "Find X-Sum of All K-Long Subarrays I",
 "level": "Easy",
 "topic": "Sliding Window",
 "question": "",
 "why": "[1,1,2,2,3,4,2,3], k=6, x=2: keep the two most frequent values (ties: larger value) and sum their occurrences.",
 "idea": "For every window of size k count frequencies, sort the values by (frequency, value) descending, keep the top x values, and add up value × frequency over them.",
 "input": "nums = [1,1,2,2,3,4,2,3], k = 6, x = 2",
 "output": "[6, 10, 12]",
 "notes": [],
 "best": "For every window of size k count frequencies, sort the values by (frequency, value) descending, keep the top x values, and add up value × frequency over them.",
 "variants": [
  {
   "name": "Top-x frequent elements of each window",
   "code": "class Solution:\n    def findXSum(self, nums, k, x):\n        res = []\n        for i in range(len(nums) - k + 1):\n            cnt = Counter(nums[i:i + k])\n            top = sorted(cnt.items(), key=lambda p: (p[1], p[0]), reverse=True)[:x]\n            res.append(sum(v * c for v, c in top))\n        return res",
   "time": "O(n·k log k)",
   "space": "O(k)",
   "explain": "For every window of size k count frequencies, sort the values by (frequency, value) descending, keep the top x values, and add up value × frequency over them.",
   "frames": []
  }
 ]
};
