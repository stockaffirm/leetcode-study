window.PROBLEM = {
 "id": "3152",
 "title": "Special Array II",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "",
 "why": "[4,3,1,6], query [2,3] → 1 and 6 have different parity → true.",
 "idea": "A subarray is special if no two neighbours share the same parity. Prefix-sum the positions i where nums[i] and nums[i−1] have the same parity; a query [l, r] is true when there is no such position in (l, r].",
 "input": "nums = [4,3,1,6], queries = [[0,4],[2,3]]",
 "output": "[False, True]",
 "notes": [],
 "best": "A subarray is special if no two neighbours share the same parity. Prefix-sum the positions i where nums[i] and nums[i−1] have the same parity; a query [l, r] is true when there is no such position in (l, r].",
 "variants": [
  {
   "name": "Prefix count of same-parity neighbour pairs",
   "code": "class Solution:\n    def isArraySpecial(self, nums, queries):\n        bad = [0] * len(nums)\n        for i in range(1, len(nums)):\n            bad[i] = bad[i - 1] + (nums[i] % 2 == nums[i - 1] % 2)\n        return [bad[r] - bad[l] == 0 for l, r in queries]",
   "time": "O(n + q)",
   "space": "O(n)",
   "explain": "A subarray is special if no two neighbours share the same parity. Prefix-sum the positions i where nums[i] and nums[i−1] have the same parity; a query [l, r] is true when there is no such position in (l, r].",
   "frames": []
  }
 ]
};
