window.PROBLEM = {
 "id": "2488",
 "title": "Count Subarrays With Median K",
 "level": "Hard",
 "topic": "Prefix Sum",
 "question": "nums is a permutation of 1…n. The median of a subarray is its middle element after sorting (the LEFT middle when the length is even). Count the subarrays whose median is k. Example: [3,2,1,4,5], k=4 → 3.",
 "why": "[3,2,1,4,5], k=4: subarrays [4], [4,5], [1,4,5] have median 4 → 3.",
 "idea": "Replace each number by +1 (bigger than k), −1 (smaller) or 0 (k itself). A subarray containing k has median k exactly when its balance is 0 (odd length) or 1 (even length, the left middle is k). Count balances going left from k in a hash map, then for every balance going right add the matches for −bal and 1 − bal.",
 "input": "nums = [3,2,1,4,5], k = 4",
 "output": "3",
 "notes": [],
 "best": "Replace each number by +1 (bigger than k), −1 (smaller) or 0 (k itself). A subarray containing k has median k exactly when its balance is 0 (odd length) or 1 (even length, the left middle is k). Count balances going left from k in a hash map, then for every balance going right add the matches for −bal and 1 − bal.",
 "variants": [
  {
   "name": "Balance of bigger vs smaller around k",
   "code": "class Solution:\n    def countSubarrays(self, nums, k):\n        p = nums.index(k)\n        cnt = Counter({0: 1})\n        bal = 0\n        for i in range(p - 1, -1, -1):\n            bal += 1 if nums[i] > k else -1\n            cnt[bal] += 1\n        res = cnt[0] + cnt[1]\n        bal = 0\n        for i in range(p + 1, len(nums)):\n            bal += 1 if nums[i] > k else -1\n            res += cnt[-bal] + cnt[1 - bal]\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Replace each number by +1 (bigger than k), −1 (smaller) or 0 (k itself). A subarray containing k has median k exactly when its balance is 0 (odd length) or 1 (even length, the left middle is k). Count balances going left from k in a hash map, then for every balance going right add the matches for −bal and 1 − bal.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every subarray around k",
   "tag": "Brute force",
   "code": "class Solution:\n    def countSubarrays(self, nums, k):\n        p = nums.index(k)\n        res = 0\n        for i in range(p + 1):\n            for j in range(p, len(nums)):\n                big = sum(x > k for x in nums[i:j + 1])\n                small = sum(x < k for x in nums[i:j + 1])\n                if big - small in (0, 1):\n                    res += 1\n        return res",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Only subarrays containing k can have median k: count bigger and smaller numbers and accept when bigger − smaller is 0 or 1.",
   "frames": [],
   "alt": true
  }
 ]
};
