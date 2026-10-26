window.PROBLEM = {
 "id": "1438",
 "title": "Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "",
 "why": "Longest stretch of the list in which the biggest and smallest numbers differ by at most `limit`.",
 "idea": "Slide a window. Keep two deques that always know the window's maximum and minimum in O(1). While max − min > limit, shrink from the left.",
 "input": "[8, 2, 4, 7], limit=4",
 "output": "2",
 "notes": [],
 "best": "Slide a window. Keep two deques that always know the window's maximum and minimum in O(1). While max − min > limit, shrink from the left.",
 "variants": [
  {
   "name": "Window with a max-deque and a min-deque",
   "code": "class Solution:\n    def longestSubarray(self, nums, limit):\n        mx, mn = deque(), deque()\n        left = best = 0\n        for right, x in enumerate(nums):\n            while mx and mx[-1] < x: mx.pop()\n            mx.append(x)\n            while mn and mn[-1] > x: mn.pop()\n            mn.append(x)\n            while mx[0] - mn[0] > limit:\n                if mx[0] == nums[left]: mx.popleft()\n                if mn[0] == nums[left]: mn.popleft()\n                left += 1\n            best = max(best, right - left + 1)\n        return best",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Slide a window. Keep two deques that always know the window's maximum and minimum in O(1). While max − min > limit, shrink from the left.",
   "frames": []
  }
 ]
};
