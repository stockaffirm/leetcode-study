window.PROBLEM = {
 "id": "1781",
 "title": "Sum of Beauty of All Substrings",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
 "why": "'aabcb': the substrings with beauty > 0 are aab, aabc, aabcb, abcb, bcb (1 each) → 5.",
 "idea": "The beauty of a substring is (highest letter count) − (lowest non-zero letter count). Fix the start, extend the end one letter at a time with a 26-slot count array, and add the beauty each time.",
 "input": "s = \"aabcb\"",
 "output": "5",
 "notes": [],
 "best": "The beauty of a substring is (highest letter count) − (lowest non-zero letter count). Fix the start, extend the end one letter at a time with a 26-slot count array, and add the beauty each time.",
 "variants": [
  {
   "name": "Extend each start, track letter counts",
   "code": "class Solution:\n    def beautySum(self, s):\n        n = len(s)\n        res = 0\n        for i in range(n):\n            cnt = [0] * 26\n            for j in range(i, n):\n                cnt[ord(s[j]) - 97] += 1\n                nz = [c for c in cnt if c]\n                res += max(nz) - min(nz)\n        return res",
   "time": "O(26·n²)",
   "space": "O(26)",
   "explain": "The beauty of a substring is (highest letter count) − (lowest non-zero letter count). Fix the start, extend the end one letter at a time with a 26-slot count array, and add the beauty each time.",
   "frames": []
  }
 ]
};
