window.PROBLEM = {
 "id": "239",
 "title": "Sliding Window Maximum",
 "level": "Hard",
 "topic": "Sliding Window",
 "question": "You are given a list of numbers nums and a window size k. The window starts over the first k numbers and slides one position to the right each step, until it reaches the end. Return the largest number inside the window at every position. Example: nums=[1,3,-1,-3,5,3,6,7], k=3 → windows [1,3,-1], [3,-1,-3], [-1,-3,5], [-3,5,3], [5,3,6], [3,6,7] → maxima [3,3,5,5,6,7].",
 "why": "For every window of k numbers, report the largest. [1,3,-1,-3,5,3,6,7], k=3 → 3,3,5,5,6,7.",
 "idea": "Keep a deque of indexes whose values are in decreasing order. The front is always the window's maximum; drop smaller values from the back when a bigger one arrives and drop the front when it leaves the window.",
 "input": "[1, 3, -1, -3, 5, 3, 6, 7], k=3",
 "output": "[3, 3, 5, 5, 6, 7]",
 "notes": [],
 "best": "Keep a deque of indexes whose values are in decreasing order. The front is always the window's maximum; drop smaller values from the back when a bigger one arrives and drop the front when it leaves the window.",
 "variants": [
  {
   "name": "Monotonic deque",
   "code": "class Solution:\n    def maxSlidingWindow(self, nums, k):\n        dq, ans = deque(), []\n        for i, x in enumerate(nums):\n            while dq and nums[dq[-1]] <= x: dq.pop()\n            dq.append(i)\n            if dq[0] <= i - k: dq.popleft()\n            if i >= k - 1: ans.append(nums[dq[0]])\n        return ans",
   "time": "O(n)",
   "space": "O(k)",
   "explain": "Keep a deque of indexes whose values are in decreasing order. The front is always the window's maximum; drop smaller values from the back when a bigger one arrives and drop the front when it leaves the window.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Max-heap with lazy deletion",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxSlidingWindow(self, nums, k):\n        h, ans = [], []\n        for i, x in enumerate(nums):\n            heappush(h, (-x, i))\n            if i >= k - 1:\n                while h[0][1] <= i - k: heappop(h)\n                ans.append(-h[0][0])\n        return ans",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Push (−value, index); before reading the top, pop entries that have slid out of the window.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Max of every window",
   "tag": "Brute force",
   "code": "class Solution:\n    def maxSlidingWindow(self, nums, k):\n        return [max(nums[i:i + k]) for i in range(len(nums) - k + 1)]",
   "time": "O(n·k)",
   "space": "O(1)",
   "explain": "Compute max(nums[i:i+k]) for each start.",
   "frames": [],
   "alt": true
  }
 ]
};
