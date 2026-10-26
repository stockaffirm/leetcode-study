window.PROBLEM = {
 "id": "2856",
 "title": "Minimum Array Length After Pair Removals",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
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
   "frames": []
  }
 ]
};
