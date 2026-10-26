window.PROBLEM = {
 "id": "1446",
 "title": "Consecutive Characters",
 "level": "Easy",
 "topic": "Array / String",
 "question": "The power of a string is the length of the longest substring containing a single repeated character. Return it. Example: 'leetcode' → 2.",
 "why": "'leetcode' → 'ee' is the longest run → 2.",
 "idea": "Walk the string with a run counter that resets when the letter changes; keep the maximum.",
 "input": "s = \"leetcode\"",
 "output": "2",
 "notes": [],
 "best": "Walk the string with a run counter that resets when the letter changes; keep the maximum.",
 "variants": [
  {
   "name": "Longest run of one letter",
   "code": "class Solution:\n    def maxPower(self, s):\n        best = run = 1\n        for a, b in zip(s, s[1:]):\n            run = run + 1 if a == b else 1\n            best = max(best, run)\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Walk the string with a run counter that resets when the letter changes; keep the maximum.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "groupby runs",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxPower(self, s):\n        return max(len(list(g)) for _, g in groupby(s))",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The answer is the longest group of equal letters.",
   "frames": [],
   "alt": true
  }
 ]
};
