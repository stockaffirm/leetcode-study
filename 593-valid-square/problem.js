window.PROBLEM = {
 "id": "593",
 "title": "Valid Square",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "(0,0), (1,1), (1,0), (0,1) form a unit square → true.",
 "idea": "Compute the six squared distances between the four points. In a square four of them are equal and positive (the sides) and the two largest are equal (the diagonals, twice the side squared). So sort them: the first four equal, the last two equal and bigger, and the smallest is non-zero.",
 "input": "p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]",
 "output": "true",
 "notes": [],
 "best": "Compute the six squared distances between the four points. In a square four of them are equal and positive (the sides) and the two largest are equal (the diagonals, twice the side squared). So sort them: the first four equal, the last two equal and bigger, and the smallest is non-zero.",
 "variants": [
  {
   "name": "Six distances: four equal sides, two equal diagonals",
   "code": "class Solution:\n    def validSquare(self, p1, p2, p3, p4):\n        pts = [p1, p2, p3, p4]\n        d = sorted((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 for a, b in combinations(pts, 2))\n        return d[0] > 0 and d[0] == d[1] == d[2] == d[3] and d[4] == d[5] and d[4] == 2 * d[0]",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Compute the six squared distances between the four points. In a square four of them are equal and positive (the sides) and the two largest are equal (the diagonals, twice the side squared). So sort them: the first four equal, the last two equal and bigger, and the smallest is non-zero.",
   "frames": []
  }
 ]
};
