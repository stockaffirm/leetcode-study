window.PROBLEM = {
 "id": "921",
 "title": "Minimum Add to Make Parentheses Valid",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "'())': the last ')' has no '(' to match, so we must add one '(' → 1.",
 "idea": "Count the currently open '('. A ')' closes one if possible; otherwise it is unmatched and needs one added '('. In the end every still-open '(' needs a ')'.",
 "input": "s = \"())\"",
 "output": "1",
 "notes": [],
 "best": "Count the currently open '('. A ')' closes one if possible; otherwise it is unmatched and needs one added '('. In the end every still-open '(' needs a ')'.",
 "variants": [
  {
   "name": "Open-bracket counter",
   "code": "class Solution:\n    def minAddToMakeValid(self, s):\n        open_, add = 0, 0\n        for ch in s:\n            if ch == \"(\":\n                open_ += 1\n            elif open_:\n                open_ -= 1\n            else:\n                add += 1\n        return add + open_",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Count the currently open '('. A ')' closes one if possible; otherwise it is unmatched and needs one added '('. In the end every still-open '(' needs a ')'.",
   "frames": []
  }
 ]
};
