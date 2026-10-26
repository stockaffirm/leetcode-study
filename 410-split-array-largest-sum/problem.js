window.PROBLEM = {
 "id": "410",
 "title": "Split Array Largest Sum",
 "level": "Hard",
 "topic": "Binary Search",
 "question": "",
 "why": "Split a list into k non-empty consecutive parts so that the largest part-sum is as small as possible.",
 "idea": "Guess the limit L for a part-sum and greedily cut whenever adding the next number would exceed L. If at most k parts are needed, L is feasible; binary search the smallest feasible L.",
 "input": "[7,2,5,10,8], k=2",
 "output": "18",
 "notes": [],
 "best": "Guess the limit L for a part-sum and greedily cut whenever adding the next number would exceed L. If at most k parts are needed, L is feasible; binary search the smallest feasible L.",
 "variants": [
  {
   "name": "Binary search on the answer",
   "code": "class Solution:\n    def splitArray(self, nums, k):\n        def parts(limit):\n            c, cur = 1, 0\n            for x in nums:\n                if cur + x > limit:\n                    c += 1\n                    cur = 0\n                cur += x\n            return c\n        lo, hi = max(nums), sum(nums)\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if parts(mid) <= k: hi = mid\n            else: lo = mid + 1\n        return lo",
   "time": "O(n log S)",
   "space": "O(1)",
   "explain": "Guess the limit L for a part-sum and greedily cut whenever adding the next number would exceed L. If at most k parts are needed, L is feasible; binary search the smallest feasible L.",
   "frames": []
  }
 ]
};
