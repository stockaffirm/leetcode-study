window.PROBLEM = {
 "id": "1637",
 "title": "Widest Vertical Area Between Two Points Containing No Points",
 "level": "Easy",
 "topic": "Sorting",
 "question": "",
 "why": "points [[8,7],[9,9],[7,4],[9,7]] → xs 7, 8, 9, 9 → widest gap 1.",
 "idea": "Only x matters. Sort the distinct x values; the answer is the maximum difference between neighbours.",
 "input": "points = [[8,7],[9,9],[7,4],[9,7]]",
 "output": "1",
 "notes": [],
 "best": "Only x matters. Sort the distinct x values; the answer is the maximum difference between neighbours.",
 "variants": [
  {
   "name": "Largest gap between sorted x-coordinates",
   "code": "class Solution:\n    def maxWidthOfVerticalArea(self, points):\n        xs = sorted(x for x, _ in points)\n        return max(b - a for a, b in zip(xs, xs[1:]))",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Only x matters. Sort the distinct x values; the answer is the maximum difference between neighbours.",
   "frames": []
  }
 ]
};
