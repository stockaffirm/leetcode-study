window.PROBLEM = {
 "id": "1283",
 "title": "Find the Smallest Divisor Given a Threshold",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "",
 "why": "[1,2,5,9], threshold 6: divisor 5 gives 1 + 1 + 1 + 2 = 5 ≤ 6, divisor 4 gives 1 + 1 + 2 + 3 = 7 > 6 → 5.",
 "idea": "A bigger divisor makes the sum of rounded-up quotients smaller (or equal). Binary search the smallest divisor whose sum is at most the threshold.",
 "input": "nums = [1,2,5,9], threshold = 6",
 "output": "5",
 "notes": [],
 "best": "A bigger divisor makes the sum of rounded-up quotients smaller (or equal). Binary search the smallest divisor whose sum is at most the threshold.",
 "variants": [
  {
   "name": "Binary search the divisor",
   "code": "class Solution:\n    def smallestDivisor(self, nums, threshold):\n        lo, hi = 1, max(nums)\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if sum((x + mid - 1) // mid for x in nums) <= threshold:\n                hi = mid\n            else:\n                lo = mid + 1\n        return lo",
   "time": "O(n log max)",
   "space": "O(1)",
   "explain": "A bigger divisor makes the sum of rounded-up quotients smaller (or equal). Binary search the smallest divisor whose sum is at most the threshold.",
   "frames": []
  }
 ]
};
