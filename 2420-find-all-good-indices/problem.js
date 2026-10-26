window.PROBLEM = {
 "id": "2420",
 "title": "Find All Good Indices",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "Index i is good if the k elements just before it are in non-increasing order and the k elements just after it are in non-decreasing order. Return all good indices in increasing order. Example: [2,1,1,1,3,4,1], k=2 → [2,3].",
 "why": "[2,1,1,1,3,4,1], k=2: index 2 and 3 have two non-increasing before and two non-decreasing after → [2,3].",
 "idea": "Index i is good if the k elements before it are non-increasing and the k after it are non-decreasing. Precompute for every position the length of the non-increasing run ending there and of the non-decreasing run starting there; i is good if both are at least k (looking one step away from i).",
 "input": "nums = [2,1,1,1,3,4,1], k = 2",
 "output": "[2, 3]",
 "notes": [],
 "best": "Index i is good if the k elements before it are non-increasing and the k after it are non-decreasing. Precompute for every position the length of the non-increasing run ending there and of the non-decreasing run starting there; i is good if both are at least k (looking one step away from i).",
 "variants": [
  {
   "name": "Run lengths of non-increasing / non-decreasing",
   "code": "class Solution:\n    def goodIndices(self, nums, k):\n        n = len(nums)\n        dec = [1] * n\n        for i in range(1, n):\n            if nums[i] <= nums[i - 1]:\n                dec[i] = dec[i - 1] + 1\n        inc = [1] * n\n        for i in range(n - 2, -1, -1):\n            if nums[i] <= nums[i + 1]:\n                inc[i] = inc[i + 1] + 1\n        return [i for i in range(k, n - k) if dec[i - 1] >= k and inc[i + 1] >= k]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Index i is good if the k elements before it are non-increasing and the k after it are non-decreasing. Precompute for every position the length of the non-increasing run ending there and of the non-decreasing run starting there; i is good if both are at least k (looking one step away from i).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every index directly",
   "tag": "Brute force",
   "code": "class Solution:\n    def goodIndices(self, nums, k):\n        res = []\n        for i in range(k, len(nums) - k):\n            left = nums[i - k:i]\n            right = nums[i + 1:i + k + 1]\n            if all(left[t] >= left[t + 1] for t in range(k - 1)) and all(right[t] <= right[t + 1] for t in range(k - 1)):\n                res.append(i)\n        return res",
   "time": "O(n·k)",
   "space": "O(1)",
   "explain": "For every candidate index verify the k elements on each side.",
   "frames": [],
   "alt": true
  }
 ]
};
