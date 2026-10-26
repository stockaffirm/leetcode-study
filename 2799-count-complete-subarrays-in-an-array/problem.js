window.PROBLEM = {
 "id": "2799",
 "title": "Count Complete Subarrays in an Array",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "A subarray is complete if it has the same number of distinct values as the whole array. Return how many complete subarrays there are. Example: [1,3,1,2,2] → 4.",
 "why": "[1,3,1,2,2] has 3 distinct values; subarrays containing 1, 2 and 3 number 4.",
 "idea": "A subarray is complete if it has as many distinct values as the whole array. For each right end, shrink the window from the left while it is still complete; the number of valid starts is then left (all earlier starts are also complete). Add up.",
 "input": "nums = [1,3,1,2,2]",
 "output": "4",
 "notes": [],
 "best": "A subarray is complete if it has as many distinct values as the whole array. For each right end, shrink the window from the left while it is still complete; the number of valid starts is then left (all earlier starts are also complete). Add up.",
 "variants": [
  {
   "name": "Window with all distinct values",
   "code": "class Solution:\n    def countCompleteSubarrays(self, nums):\n        total = len(set(nums))\n        cnt = Counter()\n        left = res = 0\n        for x in nums:\n            cnt[x] += 1\n            while len(cnt) == total:\n                cnt[nums[left]] -= 1\n                if cnt[nums[left]] == 0:\n                    del cnt[nums[left]]\n                left += 1\n            res += left\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A subarray is complete if it has as many distinct values as the whole array. For each right end, shrink the window from the left while it is still complete; the number of valid starts is then left (all earlier starts are also complete). Add up.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every subarray",
   "tag": "Brute force",
   "code": "class Solution:\n    def countCompleteSubarrays(self, nums):\n        total = len(set(nums))\n        res = 0\n        for i in range(len(nums)):\n            seen = set()\n            for j in range(i, len(nums)):\n                seen.add(nums[j])\n                if len(seen) == total:\n                    res += len(nums) - j\n                    break\n        return res",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Extend each start and stop counting once all distinct values were seen.",
   "frames": [],
   "alt": true
  }
 ]
};
