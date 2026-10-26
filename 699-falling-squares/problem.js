window.PROBLEM = {
 "id": "699",
 "title": "Falling Squares",
 "level": "Hard",
 "topic": "Intervals",
 "question": "",
 "why": "Squares fall one at a time onto a number line (given left position and side length) and stick on whatever is below. After each drop report the height of the tallest stack so far.",
 "idea": "A new square lands on top of the highest earlier square that overlaps it horizontally. Keep each square's top height; the new top is that maximum plus its side.",
 "input": "[[1,2],[2,3],[6,1]]",
 "output": "[2,5,5]",
 "notes": [],
 "best": "A new square lands on top of the highest earlier square that overlaps it horizontally. Keep each square's top height; the new top is that maximum plus its side.",
 "variants": [
  {
   "name": "Compare with every earlier square",
   "code": "class Solution:\n    def fallingSquares(self, positions):\n        tops, res, best = [], [], 0\n        for left, side in positions:\n            right = left + side\n            base = 0\n            for (l, r, h) in tops:\n                if l < right and left < r: base = max(base, h)\n            h = base + side\n            tops.append((left, right, h))\n            best = max(best, h)\n            res.append(best)\n        return res",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "A new square lands on top of the highest earlier square that overlaps it horizontally. Keep each square's top height; the new top is that maximum plus its side.",
   "frames": []
  }
 ]
};
