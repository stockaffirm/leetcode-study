window.PROBLEM = {
 "id": "3019",
 "title": "Number of Changing Keys",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
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
   "frames": []
  }
 ]
};
