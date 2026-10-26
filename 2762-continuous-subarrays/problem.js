window.PROBLEM = {
 "id": "2762",
 "title": "Continuous Subarrays",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "",
 "why": "[5,4,2,4] has 8 continuous subarrays.",
 "idea": "A subarray is continuous when every two elements differ by at most 2, i.e. max − min ≤ 2. For each right end keep the leftmost start such that the window satisfies this (maintain the window's max and min with monotonic deques) and add the window length.",
 "input": "nums = [5,4,2,4]",
 "output": "8",
 "notes": [],
 "best": "A subarray is continuous when every two elements differ by at most 2, i.e. max − min ≤ 2. For each right end keep the leftmost start such that the window satisfies this (maintain the window's max and min with monotonic deques) and add the window length.",
 "variants": [
  {
   "name": "Window with max − min ≤ 2",
   "code": "class Solution:\n    def continuousSubarrays(self, nums):\n        mx, mn = deque(), deque()\n        left = res = 0\n        for r, x in enumerate(nums):\n            while mx and nums[mx[-1]] <= x:\n                mx.pop()\n            mx.append(r)\n            while mn and nums[mn[-1]] >= x:\n                mn.pop()\n            mn.append(r)\n            while nums[mx[0]] - nums[mn[0]] > 2:\n                left += 1\n                if mx[0] < left:\n                    mx.popleft()\n                if mn[0] < left:\n                    mn.popleft()\n            res += r - left + 1\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A subarray is continuous when every two elements differ by at most 2, i.e. max − min ≤ 2. For each right end keep the leftmost start such that the window satisfies this (maintain the window's max and min with monotonic deques) and add the window length.",
   "frames": []
  }
 ]
};
