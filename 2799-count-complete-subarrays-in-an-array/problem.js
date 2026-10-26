window.PROBLEM = {
 "id": "2799",
 "title": "Count Complete Subarrays in an Array",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "",
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
   "frames": []
  }
 ]
};
