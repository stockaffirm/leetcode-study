window.PROBLEM = {
 "id": "2856",
 "title": "Minimum Array Length After Pair Removals",
 "level": "Medium",
 "topic": "Greedy",
 "question": "You are given a list nums sorted from smallest to largest. In one operation you pick two positions i < j with nums[i] < nums[j] and remove both numbers (the rest keep their order). You may repeat this any number of times, including zero. Return the smallest possible length of the list afterwards. Example: [1,3,4,9] → remove (1,3) and (4,9) → 0. [1000000000,1000000000] → nothing can be removed → 2.",
 "why": "In a sorted list, repeatedly delete two numbers where the left one is strictly smaller than the right one. How short can the list get?",
 "idea": "If one value takes more than half of the list, it can only be paired with other values, leaving 2·maxCount − n of it behind. Otherwise everything pairs off and 0 or 1 remains (n odd).",
 "input": "[1, 3, 4, 9]",
 "output": "0",
 "notes": [],
 "best": "If one value takes more than half of the list, it can only be paired with other values, leaving 2·maxCount − n of it behind. Otherwise everything pairs off and 0 or 1 remains (n odd).",
 "variants": [
  {
   "name": "Most frequent value decides",
   "code": "class Solution:\n    def minLengthAfterRemovals(self, nums):\n        n = len(nums)\n        mf = max(Counter(nums).values())\n        return 2 * mf - n if 2 * mf > n else n % 2",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "If one value takes more than half of the list, it can only be paired with other values, leaving 2·maxCount − n of it behind. Otherwise everything pairs off and 0 or 1 remains (n odd).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Two pointers: first half vs second half",
   "tag": "Alternative",
   "code": "class Solution:\n    def minLengthAfterRemovals(self, nums):\n        n = len(nums)\n        i, j, removed = 0, (n + 1) // 2, 0\n        while i < n // 2 and j < n:\n            if nums[i] < nums[j]:\n                removed += 2\n                i += 1\n            j += 1\n        return n - removed",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Pair each of the smallest n/2 numbers with a larger number from the upper half.",
   "frames": [],
   "alt": true
  }
 ]
};
