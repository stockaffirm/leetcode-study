window.PROBLEM = {
 "id": "1438",
 "title": "Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "Given a list nums and a number limit, return the length of the longest stretch of numbers sitting next to each other in which the difference between the largest and the smallest number is at most limit. Example: nums [8,2,4,7], limit 4 → [2,4] works (difference 2), but [8,2] does not (6) and [2,4,7] has difference 5 → length 2.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Two heaps with lazy deletion",
   "tag": "Alternative",
   "code": "class Solution:\n    def longestSubarray(self, nums, limit):\n        mx, mn = [], []\n        left = best = 0\n        for right, x in enumerate(nums):\n            heappush(mx, (-x, right))\n            heappush(mn, (x, right))\n            while -mx[0][0] - mn[0][0] > limit:\n                left = min(mx[0][1], mn[0][1]) + 1\n                while mx[0][1] < left: heappop(mx)\n                while mn[0][1] < left: heappop(mn)\n            best = max(best, right - left + 1)\n        return best",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "A max-heap and a min-heap give the window's extremes; entries that left the window are popped lazily.",
   "frames": [],
   "alt": true
  }
 ]
};
