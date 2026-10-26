window.PROBLEM = {
 "id": "1763",
 "title": "Longest Nice Substring",
 "level": "Easy",
 "topic": "Sliding Window",
 "question": "",
 "why": "'YazaAay' → 'aAa'.",
 "idea": "A string is nice if every letter that appears also appears in the other case. If a letter's counterpart is missing, no nice substring can contain it: split there and solve both sides recursively. Return the longest nice piece (earliest on ties).",
 "input": "s = \"YazaAay\"",
 "output": "\"aAa\"",
 "notes": [],
 "best": "A string is nice if every letter that appears also appears in the other case. If a letter's counterpart is missing, no nice substring can contain it: split there and solve both sides recursively. Return the longest nice piece (earliest on ties).",
 "variants": [
  {
   "name": "Split on letters missing their other case",
   "code": "class Solution:\n    def longestNiceSubstring(self, s):\n        if len(s) < 2:\n            return \"\"\n        chars = set(s)\n        for i, c in enumerate(s):\n            if c.swapcase() not in chars:\n                left = self.longestNiceSubstring(s[:i])\n                right = self.longestNiceSubstring(s[i + 1:])\n                return left if len(left) >= len(right) else right\n        return s",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "A string is nice if every letter that appears also appears in the other case. If a letter's counterpart is missing, no nice substring can contain it: split there and solve both sides recursively. Return the longest nice piece (earliest on ties).",
   "frames": []
  }
 ]
};
