window.PROBLEM = {
 "id": "806",
 "title": "Number of Lines To Write String",
 "level": "Easy",
 "topic": "Array / String",
 "question": "You write a string of lowercase letters on lines that are each 100 pixels wide. widths[0] is the width in pixels of 'a', widths[1] of 'b', and so on. Letters are written in order, and a letter that would not fit on the current line goes to the start of a new line (a letter is never split). Return [number of lines used, width in pixels of the last line]. Example: 'a' is 4 wide, all other letters 10 wide, text 'bbbcccdddaaa' → the first line holds 9 letters plus one a (94 px), the next a (98 px); the third a does not fit, so it starts line 2 → [2, 4].",
 "why": "Write letters with given pixel widths on lines that are 100 pixels wide, never splitting a letter. How many lines, and how wide is the last one?",
 "idea": "Add letters to the current line; if the next letter would overflow 100, start a new line with it.",
 "input": "widths a=4, others 10; \"bbbcccdddaaa\"",
 "output": "[2, 4]",
 "notes": [],
 "best": "Add letters to the current line; if the next letter would overflow 100, start a new line with it.",
 "variants": [
  {
   "name": "Greedy line fill",
   "code": "class Solution:\n    def numberOfLines(self, widths, s):\n        lines, cur = 1, 0\n        for ch in s:\n            w = widths[ord(ch) - ord('a')]\n            if cur + w > 100:\n                lines += 1\n                cur = 0\n            cur += w\n        return [lines, cur]",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Add letters to the current line; if the next letter would overflow 100, start a new line with it.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Running total",
   "tag": "Alternative",
   "code": "class Solution:\n    def numberOfLines(self, widths, s):\n        lines, cur = 1, 0\n        for w in (widths[ord(c) - 97] for c in s):\n            if cur + w <= 100: cur += w\n            else: lines, cur = lines + 1, w\n        return [lines, cur]",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Same greedy idea written with an if/else on the next width.",
   "frames": [],
   "alt": true
  }
 ]
};
