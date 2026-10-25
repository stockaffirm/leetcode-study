window.PROBLEM = {
 "id": "2444",
 "title": "Count Subarrays With Fixed Bounds",
 "level": "Hard",
 "topic": "Sliding Window",
 "question": "Count the subarrays (consecutive runs) of nums whose smallest value is exactly minK and whose largest value is exactly maxK. Example: [1,3,5,2,7,5], minK=1, maxK=5 → 2 ([1,3,5] and [1,3,5,2]).",
 "why": "Count the subarrays whose smallest value is exactly minK and largest value is exactly maxK.",
 "idea": "Scan once remembering the last index of minK, the last index of maxK and the last 'bad' index (a value outside [minK, maxK]). Subarrays ending here start between the bad index and the smaller of the two last indices.",
 "input": "[1,3,5,2,7,5], minK=1, maxK=5",
 "output": "2",
 "notes": [],
 "best": "Scan once remembering the last index of minK, the last index of maxK and the last 'bad' index (a value outside [minK, maxK]). Subarrays ending here start between the bad index and the smaller of the two last indices.",
 "variants": [
  {
   "name": "Track the last minK, maxK and bad positions",
   "code": "class Solution:\n    def countSubarrays(self, nums, minK, maxK):\n        bad = lo = hi = -1\n        ans = 0\n        for i, x in enumerate(nums):\n            if x < minK or x > maxK: bad = i\n            if x == minK: lo = i\n            if x == maxK: hi = i\n            ans += max(0, min(lo, hi) - bad)\n        return ans",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Scan once remembering the last index of minK, the last index of maxK and the last 'bad' index (a value outside [minK, maxK]). Subarrays ending here start between the bad index and the smaller of the two last indices.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every subarray",
   "tag": "Brute force",
   "code": "class Solution:\n    def countSubarrays(self, nums, minK, maxK):\n        count = 0\n        for i in range(len(nums)):\n            mn, mx = float('inf'), float('-inf')\n            for j in range(i, len(nums)):\n                if nums[j] < minK or nums[j] > maxK: break\n                mn, mx = min(mn, nums[j]), max(mx, nums[j])\n                if mn == minK and mx == maxK: count += 1\n        return count",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Extend from each start while values stay in range and compare the running min and max.",
   "frames": [],
   "alt": true
  }
 ]
};
