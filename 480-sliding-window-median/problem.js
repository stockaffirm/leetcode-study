window.PROBLEM = {
 "id": "480",
 "title": "Sliding Window Median",
 "level": "Hard",
 "topic": "Sliding Window",
 "question": "",
 "why": "The median of every window of k numbers.",
 "idea": "Keep the current window in a sorted list. Slide: remove the number leaving (binary search for its place) and insert the new one (insort); the median is read from the middle.",
 "input": "[1,3,-1,-3,5,3,6,7], k=3",
 "output": "[1, -1, -1, 3, 5, 6]",
 "notes": [],
 "best": "Keep the current window in a sorted list. Slide: remove the number leaving (binary search for its place) and insert the new one (insort); the median is read from the middle.",
 "variants": [
  {
   "name": "Keep the window sorted with bisect",
   "code": "class Solution:\n    def medianSlidingWindow(self, nums, k):\n        window = sorted(nums[:k])\n        res = []\n        for i in range(k, len(nums) + 1):\n            res.append((window[k // 2] + window[(k - 1) // 2]) / 2)\n            if i == len(nums): break\n            window.pop(bisect_left(window, nums[i - k]))\n            insort(window, nums[i])\n        return res",
   "time": "O(n·k)",
   "space": "O(k)",
   "explain": "Keep the current window in a sorted list. Slide: remove the number leaving (binary search for its place) and insert the new one (insort); the median is read from the middle.",
   "frames": []
  }
 ]
};
