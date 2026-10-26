window.PROBLEM = {
 "id": "2414",
 "title": "Length of the Longest Alphabetical Continuous Substring",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "Return the length of the longest substring in which each letter is the next letter of the alphabet after the previous one. Example: 'abacaba' → 2.",
 "why": "'abacaba': 'ab' has length 2 and no longer run exists → 2.",
 "idea": "A continuous substring has each letter exactly one after the previous (abc, not ace). Scan and extend the current run when the code is previous + 1, else restart at 1.",
 "input": "s = \"abacaba\"",
 "output": "2",
 "notes": [],
 "best": "A continuous substring has each letter exactly one after the previous (abc, not ace). Scan and extend the current run when the code is previous + 1, else restart at 1.",
 "variants": [
  {
   "name": "Longest run where each letter is the next one",
   "code": "class Solution:\n    def longestContinuousSubstring(self, s):\n        best = run = 1\n        for a, b in zip(s, s[1:]):\n            run = run + 1 if ord(b) == ord(a) + 1 else 1\n            best = max(best, run)\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "A continuous substring has each letter exactly one after the previous (abc, not ace). Scan and extend the current run when the code is previous + 1, else restart at 1.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Group by (letter − position)",
   "tag": "Alternative",
   "code": "class Solution:\n    def longestContinuousSubstring(self, s):\n        return max(len(list(g)) for _, g in groupby(enumerate(s), key=lambda p: ord(p[1]) - p[0]))",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Letters of an alphabetical run share the same value ord(c) − index.",
   "frames": [],
   "alt": true
  }
 ]
};
