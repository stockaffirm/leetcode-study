window.PROBLEM = {
 "id": "1453",
 "title": "Maximum Number of Darts Inside of a Circular Dartboard",
 "level": "Hard",
 "topic": "Math / Bit Manipulation",
 "question": "Darts are thrown on a wall at given (x, y) points. A circular dartboard of radius r can be placed anywhere. Return the maximum number of darts that can lie on or inside the board. Example: darts [[-2,0],[2,0],[0,2],[0,-2]], r=2 → 4.",
 "why": "Four darts lie on a circle of radius 2 around the origin, so one board of radius 2 covers all of them → 4.",
 "idea": "An optimal board can be moved until two darts lie on its edge. So for every pair of darts at most 2r apart compute the two circle centres of radius r through both and count the darts inside each circle (with a tiny tolerance). The best count is the answer (at least 1).",
 "input": "darts = [[-2,0],[2,0],[0,2],[0,-2]], r = 2",
 "output": "4",
 "notes": [],
 "best": "An optimal board can be moved until two darts lie on its edge. So for every pair of darts at most 2r apart compute the two circle centres of radius r through both and count the darts inside each circle (with a tiny tolerance). The best count is the answer (at least 1).",
 "variants": [
  {
   "name": "Circles through two points",
   "code": "class Solution:\n    def numPoints(self, darts, r):\n        n = len(darts)\n        best = 1\n        for i in range(n):\n            for j in range(i + 1, n):\n                x1, y1 = darts[i]\n                x2, y2 = darts[j]\n                dx, dy = x2 - x1, y2 - y1\n                d2 = dx * dx + dy * dy\n                if d2 > 4 * r * r:\n                    continue\n                h = sqrt(r * r - d2 / 4)\n                d = sqrt(d2)\n                mx, my = (x1 + x2) / 2, (y1 + y2) / 2\n                for sgn in (1, -1):\n                    cx = mx + sgn * h * (-dy) / d\n                    cy = my + sgn * h * dx / d\n                    cnt = sum((x - cx) ** 2 + (y - cy) ** 2 <= r * r + 1e-7 for x, y in darts)\n                    best = max(best, cnt)\n        return best",
   "time": "O(n³)",
   "space": "O(1)",
   "explain": "An optimal board can be moved until two darts lie on its edge. So for every pair of darts at most 2r apart compute the two circle centres of radius r through both and count the darts inside each circle (with a tiny tolerance). The best count is the answer (at least 1).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Angular sweep around every dart",
   "tag": "Alternative",
   "code": "class Solution:\n    def numPoints(self, darts, r):\n        n = len(darts)\n        best = 1\n        eps = 1e-9\n        for i in range(n):\n            xi, yi = darts[i]\n            events = []\n            for j in range(n):\n                if i == j:\n                    continue\n                dx, dy = darts[j][0] - xi, darts[j][1] - yi\n                d = hypot(dx, dy)\n                if d > 2 * r:\n                    continue\n                a = atan2(dy, dx)\n                b = acos(min(1.0, d / (2 * r)))\n                s = (a - b) % (2 * pi)\n                e = s + 2 * b\n                events += [(s - eps, 0), (e + eps, 1), (s + 2 * pi - eps, 0), (e + 2 * pi + eps, 1)]\n            events.sort()\n            cur = 1\n            for _, t in events:\n                if t == 0:\n                    cur += 1\n                    best = max(best, cur)\n                else:\n                    cur -= 1\n        return best",
   "time": "O(n² log n)",
   "space": "O(n)",
   "explain": "For each dart on the edge, every other dart within 2r is inside the board for a range of rotation angles. Sweep the angles and take the largest overlap.",
   "frames": [],
   "alt": true
  }
 ]
};
