window.PROBLEM = {
 "id": "1392",
 "title": "Longest Happy Prefix",
 "level": "Hard",
 "topic": "Array / String",
 "question": "Return the longest non-empty prefix of the string that is also a suffix, but is not the whole string (a 'happy prefix'); return an empty string if there is none. Example: 'level' → 'l'; 'ababab' → 'abab'.",
 "why": "Find the longest non-empty proper prefix of a string that is also a suffix (it may overlap).",
 "idea": "The KMP failure array lps[i] gives, for each position, the length of the longest proper prefix of s[:i+1] that is also a suffix; the last value is the answer.",
 "input": "'level'",
 "output": "'l'",
 "notes": [],
 "best": "The KMP failure array lps[i] gives, for each position, the length of the longest proper prefix of s[:i+1] that is also a suffix; the last value is the answer.",
 "variants": [
  {
   "name": "KMP prefix function",
   "code": "class Solution:\n    def longestPrefix(self, s):\n        n = len(s)\n        lps = [0] * n\n        k = 0\n        for i in range(1, n):\n            while k and s[i] != s[k]: k = lps[k - 1]\n            if s[i] == s[k]: k += 1\n            lps[i] = k\n        return s[:lps[-1]]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "The KMP failure array lps[i] gives, for each position, the length of the longest proper prefix of s[:i+1] that is also a suffix; the last value is the answer.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Compare prefix and suffix",
   "tag": "Brute force",
   "code": "class Solution:\n    def longestPrefix(self, s):\n        for L in range(len(s) - 1, 0, -1):\n            if s[:L] == s[-L:]: return s[:L]\n        return ''",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Try lengths from long to short.",
   "frames": [],
   "alt": true
  }
 ]
};
