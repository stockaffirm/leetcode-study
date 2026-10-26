window.PROBLEM = {
 "id": "3019",
 "title": "Number of Changing Keys",
 "level": "Easy",
 "topic": "Array / String",
 "question": "You type a string s. Using a different key from the last character you typed counts as a key change; capital and small versions of the same letter are the same key (so 'a' then 'A' is NOT a change). Return the number of key changes. Example: 'aAbBcC' → a→b and b→c are changes → 2.",
 "why": "Typing a string: a 'key change' happens when the next key is a different letter (capital and small letters are the same key). Count the changes.",
 "idea": "Lowercase every letter and count neighbouring pairs that differ.",
 "input": "\"aAbBcC\"",
 "output": "2",
 "notes": [],
 "best": "Lowercase every letter and count neighbouring pairs that differ.",
 "variants": [
  {
   "name": "Compare neighbours ignoring case",
   "code": "class Solution:\n    def countKeyChanges(self, s):\n        changes = 0\n        for i in range(1, len(s)):\n            if s[i].lower() != s[i - 1].lower(): changes += 1\n        return changes",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Lowercase every letter and count neighbouring pairs that differ.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Pairs of lowercase letters",
   "tag": "Pythonic",
   "code": "class Solution:\n    def countKeyChanges(self, s):\n        t = s.lower()\n        return sum(1 for a, b in zip(t, t[1:]) if a != b)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Lowercase the string and count neighbouring pairs that differ.",
   "frames": [],
   "alt": true
  }
 ]
};
