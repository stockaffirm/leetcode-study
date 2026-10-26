window.PROBLEM = {
 "id": "2405",
 "title": "Optimal Partition of String",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
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
   "frames": []
  }
 ]
};
