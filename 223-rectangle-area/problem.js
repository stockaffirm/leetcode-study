window.PROBLEM = {
 "id": "223",
 "title": "Rectangle Area",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "Two rectangles are drawn on a flat grid with their sides parallel to the axes. Each is given by its bottom-left corner (x1, y1) and its top-right corner (x2, y2). Return the TOTAL area covered by the two rectangles together; if they overlap, the overlapping part counts only once. Example: A from (0,0) to (3,2) (area 6) and B from (1,1) to (4,3) (area 6) overlap in a 2 × 1 piece (area 2) → 6 + 6 − 2 = 10.",
 "why": "Two rectangles may overlap. What total area do they cover together? Count the shared part only once.",
 "idea": "Total = area A + area B − overlap. The overlap is a rectangle too: its width is min of right edges − max of left edges (same for height); if either is not positive, there is no overlap.",
 "input": "A=(0,0)–(3,2), B=(1,1)–(4,3)",
 "output": "10",
 "notes": [],
 "best": "Total = area A + area B − overlap. The overlap is a rectangle too: its width is min of right edges − max of left edges (same for height); if either is not positive, there is no overlap.",
 "variants": [
  {
   "name": "Sum of areas minus the overlap",
   "code": "class Solution:\n    def computeArea(self, ax1, ay1, ax2, ay2, bx1, by1, bx2, by2):\n        a = (ax2 - ax1) * (ay2 - ay1)\n        b = (bx2 - bx1) * (by2 - by1)\n        w = min(ax2, bx2) - max(ax1, bx1)\n        h = min(ay2, by2) - max(ay1, by1)\n        overlap = w * h if w > 0 and h > 0 else 0\n        return a + b - overlap",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Total = area A + area B − overlap. The overlap is a rectangle too: its width is min of right edges − max of left edges (same for height); if either is not positive, there is no overlap.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Mark every unit square",
   "tag": "Brute force",
   "code": "class Solution:\n    def computeArea(self, ax1, ay1, ax2, ay2, bx1, by1, bx2, by2):\n        cells = set()\n        for x in range(ax1, ax2):\n            for y in range(ay1, ay2): cells.add((x, y))\n        for x in range(bx1, bx2):\n            for y in range(by1, by2): cells.add((x, y))\n        return len(cells)",
   "time": "O(area)",
   "space": "O(area)",
   "explain": "Put every 1×1 square of both rectangles in a set and count it (only for small coordinates).",
   "frames": [],
   "alt": true
  }
 ]
};
