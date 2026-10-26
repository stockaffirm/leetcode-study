window.PROBLEM = {
 "id": "459",
 "title": "Repeated Substring Pattern",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Return true if s can be built by repeating one of its substrings two or more times. Example: 'abab' → true.",
 "why": "'abab' = 'ab' twice → true.",
 "idea": "A string is a repetition of a block exactly when it appears inside (s + s) with the first and last character removed.",
 "input": "s = \"abab\"",
 "output": "true",
 "notes": [],
 "best": "A string is a repetition of a block exactly when it appears inside (s + s) with the first and last character removed.",
 "variants": [
  {
   "name": "Find s inside s + s without the ends",
   "code": "class Solution:\n    def repeatedSubstringPattern(self, s):\n        return s in (s + s)[1:-1]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A string is a repetition of a block exactly when it appears inside (s + s) with the first and last character removed.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every block length",
   "tag": "Brute force",
   "code": "class Solution:\n    def repeatedSubstringPattern(self, s):\n        n = len(s)\n        return any(n % k == 0 and s[:k] * (n // k) == s for k in range(1, n // 2 + 1))",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "For each divisor length repeat the prefix and compare.",
   "frames": [],
   "alt": true
  }
 ]
};
