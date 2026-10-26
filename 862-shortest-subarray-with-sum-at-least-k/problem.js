window.PROBLEM = {
 "id": "862",
 "title": "Shortest Subarray with Sum at Least K",
 "level": "Hard",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "[2,-1,2] with k=3: the whole array adds up to 3 → length 3.",
 "idea": "With prefix sums, a subarray (i, j] has sum pre[j] − pre[i]. Keep a deque of candidate start indices with INCREASING prefix sums. For each j pop from the front while the sum is at least k (record the length), and pop from the back every start whose prefix sum is not smaller than pre[j] (it can never be a better start).",
 "input": "nums = [2,-1,2], k = 3",
 "output": "3",
 "notes": [],
 "best": "With prefix sums, a subarray (i, j] has sum pre[j] − pre[i]. Keep a deque of candidate start indices with INCREASING prefix sums. For each j pop from the front while the sum is at least k (record the length), and pop from the back every start whose prefix sum is not smaller than pre[j] (it can never be a better start).",
 "variants": [
  {
   "name": "Monotonic deque on prefix sums",
   "code": "class Solution:\n    def shortestSubarray(self, nums, k):\n        pre = [0]\n        for x in nums:\n            pre.append(pre[-1] + x)\n        dq = deque()\n        best = inf\n        for i, p in enumerate(pre):\n            while dq and p - pre[dq[0]] >= k:\n                best = min(best, i - dq.popleft())\n            while dq and pre[dq[-1]] >= p:\n                dq.pop()\n            dq.append(i)\n        return best if best < inf else -1",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "With prefix sums, a subarray (i, j] has sum pre[j] − pre[i]. Keep a deque of candidate start indices with INCREASING prefix sums. For each j pop from the front while the sum is at least k (record the length), and pop from the back every start whose prefix sum is not smaller than pre[j] (it can never be a better start).",
   "frames": []
  }
 ]
};
