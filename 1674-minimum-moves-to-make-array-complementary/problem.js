window.PROBLEM = {
 "id": "1674",
 "title": "Minimum Moves to Make Array Complementary",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "",
 "why": "[1,2,4,3], limit 4 → make every pair sum to 5 → 1 move.",
 "idea": "The pairs (a, b) = (nums[i], nums[n−1−i]) must all sum to one target T. For a pair, T = a + b costs 0, T in [min+1, max+limit] costs 1, otherwise 2. Record these ranges for every pair with a difference array over T ∈ [2, 2·limit] and take the minimum total.",
 "input": "nums = [1,2,4,3], limit = 4",
 "output": "1",
 "notes": [],
 "best": "The pairs (a, b) = (nums[i], nums[n−1−i]) must all sum to one target T. For a pair, T = a + b costs 0, T in [min+1, max+limit] costs 1, otherwise 2. Record these ranges for every pair with a difference array over T ∈ [2, 2·limit] and take the minimum total.",
 "variants": [
  {
   "name": "Difference array over every target sum",
   "code": "class Solution:\n    def minMoves(self, nums, limit):\n        n = len(nums)\n        diff = [0] * (2 * limit + 2)\n        for i in range(n // 2):\n            a, b = nums[i], nums[n - 1 - i]\n            lo, hi = min(a, b) + 1, max(a, b) + limit\n            diff[2] += 2\n            diff[lo] -= 1\n            diff[hi + 1] += 1\n            diff[a + b] -= 1\n            diff[a + b + 1] += 1\n        best = float('inf')\n        cur = 0\n        for t in range(2, 2 * limit + 1):\n            cur += diff[t]\n            best = min(best, cur)\n        return best",
   "time": "O(n + limit)",
   "space": "O(limit)",
   "explain": "The pairs (a, b) = (nums[i], nums[n−1−i]) must all sum to one target T. For a pair, T = a + b costs 0, T in [min+1, max+limit] costs 1, otherwise 2. Record these ranges for every pair with a difference array over T ∈ [2, 2·limit] and take the minimum total.",
   "frames": []
  }
 ]
};
