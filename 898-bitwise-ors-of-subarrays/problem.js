window.PROBLEM = {
 "id": "898",
 "title": "Bitwise ORs of Subarrays",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "[1,1,2] → ORs 1, 1, 2, 1, 3, 3 → distinct {1,2,3} → 3.",
 "idea": "For subarrays ending at i keep the set of their OR values; it has at most ~30 elements because OR only adds bits. Extend each by arr[i] and add arr[i] itself. Collect all values in a global set.",
 "input": "arr = [1,1,2]",
 "output": "3",
 "notes": [],
 "best": "For subarrays ending at i keep the set of their OR values; it has at most ~30 elements because OR only adds bits. Extend each by arr[i] and add arr[i] itself. Collect all values in a global set.",
 "variants": [
  {
   "name": "Few distinct ORs end at each index",
   "code": "class Solution:\n    def subarrayBitwiseORs(self, arr):\n        res = set()\n        cur = set()\n        for x in arr:\n            cur = {x | y for y in cur} | {x}\n            res |= cur\n        return len(res)",
   "time": "O(n log max)",
   "space": "O(n log max)",
   "explain": "For subarrays ending at i keep the set of their OR values; it has at most ~30 elements because OR only adds bits. Extend each by arr[i] and add arr[i] itself. Collect all values in a global set.",
   "frames": []
  }
 ]
};
