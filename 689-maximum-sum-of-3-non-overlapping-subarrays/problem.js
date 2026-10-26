window.PROBLEM = {
 "id": "689",
 "title": "Maximum Sum of 3 Non-Overlapping Subarrays",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "With windows of length 2 the best three non-overlapping ones start at 0 (sum 3), 3 (sum 8) and 5 (sum 12): total 23.",
 "idea": "Compute the sum w[i] of every window of length k. For each possible middle window j, take the best window to its left (start ≤ j − k) and the best to its right (start ≥ j + k), precomputed in two passes. Keep the best total, preferring the earliest starts.",
 "input": "nums = [1,2,1,2,6,7,5,1], k = 2",
 "output": "[0, 3, 5]",
 "notes": [],
 "best": "Compute the sum w[i] of every window of length k. For each possible middle window j, take the best window to its left (start ≤ j − k) and the best to its right (start ≥ j + k), precomputed in two passes. Keep the best total, preferring the earliest starts.",
 "variants": [
  {
   "name": "Window sums + best-left / best-right",
   "code": "class Solution:\n    def maxSumOfThreeSubarrays(self, nums, k):\n        n = len(nums)\n        w = [sum(nums[:k])]\n        for i in range(1, n - k + 1):\n            w.append(w[-1] + nums[i + k - 1] - nums[i - 1])\n        m = len(w)\n        left = [0] * m\n        best = 0\n        for i in range(m):\n            if w[i] > w[best]:\n                best = i\n            left[i] = best\n        right = [0] * m\n        best = m - 1\n        for i in range(m - 1, -1, -1):\n            if w[i] >= w[best]:\n                best = i\n            right[i] = best\n        res, top = None, 0\n        for j in range(k, m - k):\n            i, l = left[j - k], right[j + k]\n            total = w[i] + w[j] + w[l]\n            if total > top:\n                top = total\n                res = [i, j, l]\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Compute the sum w[i] of every window of length k. For each possible middle window j, take the best window to its left (start ≤ j − k) and the best to its right (start ≥ j + k), precomputed in two passes. Keep the best total, preferring the earliest starts.",
   "frames": []
  }
 ]
};
