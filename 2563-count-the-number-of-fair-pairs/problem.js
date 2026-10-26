window.PROBLEM = {
 "id": "2563",
 "title": "Count the Number of Fair Pairs",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "",
 "why": "[0,1,7,4,4,5], 3..6: pairs (0,4)(0,4)(0,5)(1,4)(1,4)(1,5) → 6.",
 "idea": "Order does not matter for pair sums, so sort. Count pairs with sum ≤ v using two pointers (when nums[i] + nums[j] ≤ v every index between i and j also works with j). The answer is count(upper) − count(lower − 1).",
 "input": "nums = [0,1,7,4,4,5], lower = 3, upper = 6",
 "output": "6",
 "notes": [],
 "best": "Order does not matter for pair sums, so sort. Count pairs with sum ≤ v using two pointers (when nums[i] + nums[j] ≤ v every index between i and j also works with j). The answer is count(upper) − count(lower − 1).",
 "variants": [
  {
   "name": "Sort, then count sums ≤ upper minus sums < lower",
   "code": "class Solution:\n    def countFairPairs(self, nums, lower, upper):\n        nums.sort()\n        def count(v):\n            i, j, r = 0, len(nums) - 1, 0\n            while i < j:\n                if nums[i] + nums[j] <= v:\n                    r += j - i\n                    i += 1\n                else:\n                    j -= 1\n            return r\n        return count(upper) - count(lower - 1)",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "Order does not matter for pair sums, so sort. Count pairs with sum ≤ v using two pointers (when nums[i] + nums[j] ≤ v every index between i and j also works with j). The answer is count(upper) − count(lower − 1).",
   "frames": []
  }
 ]
};
