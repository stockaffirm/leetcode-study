window.PROBLEM = {
 "id": "1781",
 "title": "Sum of Beauty of All Substrings",
 "level": "Medium",
 "topic": "Array / String",
 "question": "The beauty of a string is the difference between the highest and the lowest NON-ZERO letter count in it. Return the sum of the beauty of all substrings. Example: 'aabcb' → 5.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Count every substring from scratch",
   "tag": "Brute force",
   "code": "class Solution:\n    def beautySum(self, s):\n        n = len(s)\n        res = 0\n        for i in range(n):\n            for j in range(i + 1, n + 1):\n                c = Counter(s[i:j]).values()\n                res += max(c) - min(c)\n        return res",
   "time": "O(n³)",
   "space": "O(26)",
   "explain": "Build a counter for each substring and read its beauty.",
   "frames": [],
   "alt": true
  }
 ]
};
