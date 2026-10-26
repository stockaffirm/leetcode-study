window.PROBLEM = {
 "id": "325",
 "title": "Maximum Size Subarray Sum Equals k",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "",
 "why": "[1,-1,5,-2,3] and k=3: the subarray [1,-1,5,-2] adds to 3 and has length 4 (the longest).",
 "idea": "A subarray sums to k when two prefix sums differ by k. Store the first index of every prefix sum; at each position look up (prefix − k) and measure the distance.",
 "input": "nums = [1,-1,5,-2,3], k = 3",
 "output": "4",
 "notes": [],
 "best": "A subarray sums to k when two prefix sums differ by k. Store the first index of every prefix sum; at each position look up (prefix − k) and measure the distance.",
 "variants": [
  {
   "name": "Prefix sums + first-seen index",
   "code": "class Solution:\n    def maxSubArrayLen(self, nums, k):\n        first = {0: -1}\n        s = best = 0\n        for i, x in enumerate(nums):\n            s += x\n            if s - k in first:\n                best = max(best, i - first[s - k])\n            first.setdefault(s, i)\n        return best",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A subarray sums to k when two prefix sums differ by k. Store the first index of every prefix sum; at each position look up (prefix − k) and measure the distance.",
   "frames": []
  }
 ]
};
