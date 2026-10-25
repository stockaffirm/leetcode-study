window.PROBLEM = {
 "id": "1758",
 "title": "Minimum Changes To Make Alternating Binary String",
 "level": "Easy",
 "topic": "Array / String",
 "question": "You are given a string s of '0's and '1's. In one operation you may change any character. The string is alternating if no two neighbouring characters are equal (like '0101' or '1010'). Return the minimum number of operations to make it alternating. Example: '0100' → change the last 0 to 1 → '0101' → 1.",
 "why": "Make a 0/1 string alternate (0101… or 1010…) with the fewest flips.",
 "idea": "Count how many characters differ from the pattern 0101…. The other pattern 1010… differs in all the remaining positions, so the answer is min(diff, n − diff).",
 "input": "\"0100\"",
 "output": "1",
 "notes": [],
 "best": "Count how many characters differ from the pattern 0101…. The other pattern 1010… differs in all the remaining positions, so the answer is min(diff, n − diff).",
 "variants": [
  {
   "name": "Compare with 0101… and use the complement",
   "code": "class Solution:\n    def minOperations(self, s):\n        diff = sum(1 for i, ch in enumerate(s) if int(ch) != i % 2)\n        return min(diff, len(s) - diff)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Count how many characters differ from the pattern 0101…. The other pattern 1010… differs in all the remaining positions, so the answer is min(diff, n − diff).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try both patterns",
   "tag": "Alternative",
   "code": "class Solution:\n    def minOperations(self, s):\n        a = sum(s[i] != '01'[i % 2] for i in range(len(s)))\n        b = sum(s[i] != '10'[i % 2] for i in range(len(s)))\n        return min(a, b)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Count flips for 0101… and for 1010… separately and take the smaller.",
   "frames": [],
   "alt": true
  }
 ]
};
