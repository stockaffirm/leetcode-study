window.PROBLEM = {
 "id": "161",
 "title": "One Edit Distance",
 "level": "Medium",
 "topic": "Array / String",
 "question": "Given two strings s and t, return true if they are exactly ONE edit apart: you can turn s into t by inserting one character, deleting one character, or replacing one character — and they are not already equal. Example: 'ab' and 'acb' → insert 'c' → true; 'ab' and 'ab' → false (zero edits).",
 "why": "Are two strings exactly one edit apart (insert, delete or replace ONE character)?",
 "idea": "Make s the shorter one. At the first position where they differ, the rest must match after replacing (same length) or after skipping one character of the longer string.",
 "input": "s=\"ab\", t=\"acb\"",
 "output": "True",
 "notes": [],
 "best": "Make s the shorter one. At the first position where they differ, the rest must match after replacing (same length) or after skipping one character of the longer string.",
 "variants": [
  {
   "name": "Find the first difference",
   "code": "class Solution:\n    def isOneEditDistance(self, s, t):\n        if abs(len(s) - len(t)) > 1 or s == t: return False\n        if len(s) > len(t): s, t = t, s\n        for i in range(len(s)):\n            if s[i] != t[i]:\n                return s[i + 1:] == t[i + 1:] if len(s) == len(t) else s[i:] == t[i + 1:]\n        return True",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Make s the shorter one. At the first position where they differ, the rest must match after replacing (same length) or after skipping one character of the longer string.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every single edit",
   "tag": "Brute force",
   "code": "class Solution:\n    def isOneEditDistance(self, s, t):\n        if s == t: return False\n        letters = set(s + t)\n        for i in range(len(s) + 1):\n            for ch in letters:\n                if s[:i] + ch + s[i:] == t: return True\n            if i < len(s):\n                if s[:i] + s[i + 1:] == t: return True\n                for ch in letters:\n                    if s[:i] + ch + s[i + 1:] == t: return True\n        return False",
   "time": "O(n²·26)",
   "space": "O(n)",
   "explain": "Build every string one insert, delete or replace away from s and see if t is among them.",
   "frames": [],
   "alt": true
  }
 ]
};
