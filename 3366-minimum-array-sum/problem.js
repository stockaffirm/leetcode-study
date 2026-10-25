window.PROBLEM = {
 "id": "3366",
 "title": "Minimum Array Sum",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "You may halve (rounding up) a number at most op1 times in total, and subtract k from a number (only if it is at least k) at most op2 times in total; each operation may be used at most once per index, and both can be used on the same index. Return the minimum possible sum. Example: [2,8,3,19,3], k=3, op1=1, op2=1 → 23.",
 "why": "[2,8,3,19,3], k=3, one halving and one subtraction: apply both to 19 → 10 − 3 = 7 → sum 23.",
 "idea": "Each element can get nothing, op1 (halve, rounding up), op2 (subtract k, only if ≥ k), or both (in the better of the two orders). dp(i, a, b) = best sum of the suffix with a halvings and b subtractions left. Try every option per element.",
 "input": "nums = [2,8,3,19,3], k = 3, op1 = 1, op2 = 1",
 "output": "23",
 "notes": [],
 "best": "Each element can get nothing, op1 (halve, rounding up), op2 (subtract k, only if ≥ k), or both (in the better of the two orders). dp(i, a, b) = best sum of the suffix with a halvings and b subtractions left. Try every option per element.",
 "variants": [
  {
   "name": "DP over index and operations left",
   "code": "class Solution:\n    def minArraySum(self, nums, k, op1, op2):\n        n = len(nums)\n        @lru_cache(None)\n        def go(i, a, b):\n            if i == n:\n                return 0\n            x = nums[i]\n            best = x + go(i + 1, a, b)\n            if a:\n                best = min(best, (x + 1) // 2 + go(i + 1, a - 1, b))\n            if b and x >= k:\n                best = min(best, x - k + go(i + 1, a, b - 1))\n            if a and b:\n                both = []\n                if x >= k:\n                    both.append((x - k + 1) // 2)\n                half = (x + 1) // 2\n                if half >= k:\n                    both.append(half - k)\n                if both:\n                    best = min(best, min(both) + go(i + 1, a - 1, b - 1))\n            return best\n        return go(0, op1, op2)",
   "time": "O(n·op1·op2)",
   "space": "O(n·op1·op2)",
   "explain": "Each element can get nothing, op1 (halve, rounding up), op2 (subtract k, only if ≥ k), or both (in the better of the two orders). dp(i, a, b) = best sum of the suffix with a halvings and b subtractions left. Try every option per element.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Plain recursion over choices",
   "tag": "Brute force",
   "code": "class Solution:\n    def minArraySum(self, nums, k, op1, op2):\n        n = len(nums)\n        def go(i, a, b):\n            if i == n:\n                return 0\n            x = nums[i]\n            best = x + go(i + 1, a, b)\n            if a:\n                best = min(best, (x + 1) // 2 + go(i + 1, a - 1, b))\n            if b and x >= k:\n                best = min(best, x - k + go(i + 1, a, b - 1))\n            if a and b:\n                if x >= k:\n                    best = min(best, (x - k + 1) // 2 + go(i + 1, a - 1, b - 1))\n                if (x + 1) // 2 >= k:\n                    best = min(best, (x + 1) // 2 - k + go(i + 1, a - 1, b - 1))\n            return best\n        return go(0, op1, op2)",
   "time": "O(4ⁿ)",
   "space": "O(n)",
   "explain": "Same four choices per element, without caching (fine only for tiny arrays).",
   "frames": [],
   "alt": true
  }
 ]
};
