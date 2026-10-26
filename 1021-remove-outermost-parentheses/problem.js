window.PROBLEM = {
 "id": "1021",
 "title": "Remove Outermost Parentheses",
 "level": "Easy",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "'(()())(())' has two primitive pieces; removing each one's outer pair gives '()()' + '()' = '()()()'.",
 "idea": "Track the depth. A '(' that starts at depth 0 and a ')' that returns to depth 0 are outer brackets — skip those, keep the others.",
 "input": "s = \"(()())(())\"",
 "output": "\"()()()\"",
 "notes": [],
 "best": "Track the depth. A '(' that starts at depth 0 and a ')' that returns to depth 0 are outer brackets — skip those, keep the others.",
 "variants": [
  {
   "name": "Depth counter",
   "code": "class Solution:\n    def removeOuterParentheses(self, s):\n        res = []\n        depth = 0\n        for ch in s:\n            if ch == \"(\":\n                if depth > 0:\n                    res.append(ch)\n                depth += 1\n            else:\n                depth -= 1\n                if depth > 0:\n                    res.append(ch)\n        return \"\".join(res)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Track the depth. A '(' that starts at depth 0 and a ')' that returns to depth 0 are outer brackets — skip those, keep the others.",
   "frames": []
  }
 ]
};
