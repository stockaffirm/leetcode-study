window.PROBLEM = {
 "id": "1802",
 "title": "Maximum Value at a Given Index in a Bounded Array",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "",
 "why": "n=4, index 2, maxSum 6: [1,2,2,1] gives 2 at index 2 → 2.",
 "idea": "Positions are positive and neighbours differ by at most 1, so the best shape is a pyramid peaking at index. Binary search the peak v and compute the minimum sum: each side is an arithmetic descent from v down to 1, then 1s. Accept v if the sum fits in maxSum.",
 "input": "n = 4, index = 2, maxSum = 6",
 "output": "2",
 "notes": [],
 "best": "Positions are positive and neighbours differ by at most 1, so the best shape is a pyramid peaking at index. Binary search the peak v and compute the minimum sum: each side is an arithmetic descent from v down to 1, then 1s. Accept v if the sum fits in maxSum.",
 "variants": [
  {
   "name": "Binary search the peak value",
   "code": "class Solution:\n    def maxValue(self, n, index, maxSum):\n        def side(length, peak):\n            if peak > length:\n                return (peak + peak - length + 1) * length // 2\n            return peak * (peak + 1) // 2 + (length - peak)\n        def total(v):\n            return side(index + 1, v) + side(n - index, v) - v\n        lo, hi = 1, maxSum\n        while lo < hi:\n            mid = (lo + hi + 1) // 2\n            if total(mid) <= maxSum:\n                lo = mid\n            else:\n                hi = mid - 1\n        return lo",
   "time": "O(log maxSum)",
   "space": "O(1)",
   "explain": "Positions are positive and neighbours differ by at most 1, so the best shape is a pyramid peaking at index. Binary search the peak v and compute the minimum sum: each side is an arithmetic descent from v down to 1, then 1s. Accept v if the sum fits in maxSum.",
   "frames": []
  }
 ]
};
