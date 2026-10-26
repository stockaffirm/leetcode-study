window.PROBLEM = {
 "id": "1392",
 "title": "Longest Happy Prefix",
 "level": "Hard",
 "topic": "Array / String",
 "question": "",
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
   "frames": []
  }
 ]
};
