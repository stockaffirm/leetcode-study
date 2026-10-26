window.PROBLEM = {
 "id": "2962",
 "title": "Count Subarrays Where Max Element Appears at Least K Times",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "",
 "why": "[1,3,2,3,3], k=2: subarrays with at least two 3s: 6.",
 "idea": "Let M be the array's maximum. Move the right end; once the window holds k copies of M, move the left end forward until it holds only k−1. Every start before the new left gives a valid subarray ending here, so add l.",
 "input": "nums = [1,3,2,3,3], k = 2",
 "output": "6",
 "notes": [],
 "best": "Let M be the array's maximum. Move the right end; once the window holds k copies of M, move the left end forward until it holds only k−1. Every start before the new left gives a valid subarray ending here, so add l.",
 "variants": [
  {
   "name": "Window shrinks while it still has k maxima",
   "code": "class Solution:\n    def countSubarrays(self, nums, k):\n        M = max(nums)\n        l = cnt = res = 0\n        for x in nums:\n            if x == M:\n                cnt += 1\n            while cnt >= k:\n                if nums[l] == M:\n                    cnt -= 1\n                l += 1\n            res += l\n        return res",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Let M be the array's maximum. Move the right end; once the window holds k copies of M, move the left end forward until it holds only k−1. Every start before the new left gives a valid subarray ending here, so add l.",
   "frames": []
  }
 ]
};
