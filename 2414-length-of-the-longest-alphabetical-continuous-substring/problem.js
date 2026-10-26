window.PROBLEM = {
 "id": "2414",
 "title": "Length of the Longest Alphabetical Continuous Substring",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "",
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
   "frames": []
  }
 ]
};
