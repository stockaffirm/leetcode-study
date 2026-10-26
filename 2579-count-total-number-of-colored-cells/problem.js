window.PROBLEM = {
 "id": "2579",
 "title": "Count Total Number of Colored Cells",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "n=3 → 13 cells (a diamond).",
 "idea": "After n minutes the coloured area is a diamond made of two nested squares: n² + (n−1)² cells.",
 "input": "n = 3",
 "output": "13",
 "notes": [],
 "best": "After n minutes the coloured area is a diamond made of two nested squares: n² + (n−1)² cells.",
 "variants": [
  {
   "name": "Two squares: n² + (n−1)²",
   "code": "class Solution:\n    def coloredCells(self, n):\n        return n * n + (n - 1) * (n - 1)",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "After n minutes the coloured area is a diamond made of two nested squares: n² + (n−1)² cells.",
   "frames": []
  }
 ]
};
