window.PROBLEM = {
 "id": "1696",
 "title": "Jump Game VI",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "[1,-1,-2,4,-7,3], k=2 → path 1, -1, 4, 3 gives 7.",
 "idea": "dp[i] = nums[i] + max(dp[i−k..i−1]). The sliding-window maximum is kept with a decreasing deque of indices: drop indices that left the window and any with values ≤ the new dp.",
 "input": "nums = [1,-1,-2,4,-7,3], k = 2",
 "output": "7",
 "notes": [],
 "best": "dp[i] = nums[i] + max(dp[i−k..i−1]). The sliding-window maximum is kept with a decreasing deque of indices: drop indices that left the window and any with values ≤ the new dp.",
 "variants": [
  {
   "name": "DP with a monotonic deque of the best last k",
   "code": "class Solution:\n    def maxResult(self, nums, k):\n        dp = [0] * len(nums)\n        dp[0] = nums[0]\n        dq = deque([0])\n        for i in range(1, len(nums)):\n            while dq[0] < i - k:\n                dq.popleft()\n            dp[i] = nums[i] + dp[dq[0]]\n            while dq and dp[dq[-1]] <= dp[i]:\n                dq.pop()\n            dq.append(i)\n        return dp[-1]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "dp[i] = nums[i] + max(dp[i−k..i−1]). The sliding-window maximum is kept with a decreasing deque of indices: drop indices that left the window and any with values ≤ the new dp.",
   "frames": []
  }
 ]
};
