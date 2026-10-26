window.PROBLEM = {
 "id": "239",
 "title": "Sliding Window Maximum",
 "level": "Hard",
 "topic": "Sliding Window",
 "question": "",
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
   "frames": []
  }
 ]
};
