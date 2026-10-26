window.PROBLEM = {
 "id": "1760",
 "title": "Minimum Limit of Balls in a Bag",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "",
 "why": "[9] with 2 splits: 9 → 3+3+3 → penalty 3.",
 "idea": "Guess the maximum bag size p. A bag of x balls needs ceil(x / p) − 1 splits. If the total splits needed is ≤ maxOperations, p works. Binary search the smallest p.",
 "input": "nums = [9], maxOperations = 2",
 "output": "3",
 "notes": [],
 "best": "Guess the maximum bag size p. A bag of x balls needs ceil(x / p) − 1 splits. If the total splits needed is ≤ maxOperations, p works. Binary search the smallest p.",
 "variants": [
  {
   "name": "Binary search the penalty",
   "code": "class Solution:\n    def minimumSize(self, nums, maxOperations):\n        lo, hi = 1, max(nums)\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if sum((x - 1) // mid for x in nums) <= maxOperations:\n                hi = mid\n            else:\n                lo = mid + 1\n        return lo",
   "time": "O(n log max)",
   "space": "O(1)",
   "explain": "Guess the maximum bag size p. A bag of x balls needs ceil(x / p) − 1 splits. If the total splits needed is ≤ maxOperations, p works. Binary search the smallest p.",
   "frames": []
  }
 ]
};
