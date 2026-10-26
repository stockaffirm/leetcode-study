window.PROBLEM = {
 "id": "1696",
 "title": "Jump Game VI",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "You start at index 0 and each jump moves forward by at most k positions. Your score is the sum of the values of the indices you visit, ending at the last index. Return the maximum score. Example: [1,-1,-2,4,-7,3], k=2 → 7.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Max-heap with lazy removal",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxResult(self, nums, k):\n        heap = [(-nums[0], 0)]\n        dp = nums[0]\n        for i in range(1, len(nums)):\n            while heap[0][1] < i - k:\n                heappop(heap)\n            dp = nums[i] - heap[0][0]\n            heappush(heap, (-dp, i))\n        return dp",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Keep (−dp, index) in a heap and discard entries that are more than k behind.",
   "frames": [],
   "alt": true
  }
 ]
};
