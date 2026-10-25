window.PROBLEM = {
 "id": "2405",
 "title": "Optimal Partition of String",
 "level": "Medium",
 "topic": "Greedy",
 "question": "Split s into the fewest substrings such that each substring has no repeated character. Return that number. Example: 'abacaba' → 4.",
 "why": "'abacaba': ab | ac | ab | a → 4 pieces.",
 "idea": "Each piece must have all-distinct letters. Extend the current piece while letters are new; when a letter repeats, start a new piece with it. Greedy is optimal.",
 "input": "s = \"abacaba\"",
 "output": "4",
 "notes": [],
 "best": "Each piece must have all-distinct letters. Extend the current piece while letters are new; when a letter repeats, start a new piece with it. Greedy is optimal.",
 "variants": [
  {
   "name": "Cut just before a repeated letter",
   "code": "class Solution:\n    def partitionString(self, s):\n        seen = set()\n        parts = 1\n        for c in s:\n            if c in seen:\n                parts += 1\n                seen = set()\n            seen.add(c)\n        return parts",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Each piece must have all-distinct letters. Extend the current piece while letters are new; when a letter repeats, start a new piece with it. Greedy is optimal.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Bitmask of used letters",
   "tag": "Alternative",
   "code": "class Solution:\n    def partitionString(self, s):\n        mask = 0\n        parts = 1\n        for c in s:\n            bit = 1 << (ord(c) - 97)\n            if mask & bit:\n                parts += 1\n                mask = 0\n            mask |= bit\n        return parts",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Track used letters in an integer mask.",
   "frames": [],
   "alt": true
  }
 ]
};
