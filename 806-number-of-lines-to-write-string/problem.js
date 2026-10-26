window.PROBLEM = {
 "id": "806",
 "title": "Number of Lines To Write String",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
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
   "frames": []
  }
 ]
};
