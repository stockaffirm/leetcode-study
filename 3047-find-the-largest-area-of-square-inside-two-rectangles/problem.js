window.PROBLEM = {
 "id": "3047",
 "title": "Find the Largest Area of Square Inside Two Rectangles",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
 "why": "Rectangles overlapping in a 1×1 region → largest square has area 1.",
 "idea": "A square inside the overlap of two rectangles is limited by the overlap's width and height. For each pair compute width = min(right) − max(left) and height = min(top) − max(bottom); if both are positive the biggest square has side min(width, height). Take the largest side over all pairs and return its square.",
 "input": "bottomLeft = [[1,1],[2,2],[3,1]], topRight = [[3,3],[4,4],[6,6]]",
 "output": "1",
 "notes": [],
 "best": "A square inside the overlap of two rectangles is limited by the overlap's width and height. For each pair compute width = min(right) − max(left) and height = min(top) − max(bottom); if both are positive the biggest square has side min(width, height). Take the largest side over all pairs and return its square.",
 "variants": [
  {
   "name": "Intersect every pair of rectangles",
   "code": "class Solution:\n    def largestSquareArea(self, bottomLeft, topRight):\n        n = len(bottomLeft)\n        side = 0\n        for i in range(n):\n            for j in range(i + 1, n):\n                w = min(topRight[i][0], topRight[j][0]) - max(bottomLeft[i][0], bottomLeft[j][0])\n                h = min(topRight[i][1], topRight[j][1]) - max(bottomLeft[i][1], bottomLeft[j][1])\n                side = max(side, min(w, h))\n        return side * side if side > 0 else 0",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "A square inside the overlap of two rectangles is limited by the overlap's width and height. For each pair compute width = min(right) − max(left) and height = min(top) − max(bottom); if both are positive the biggest square has side min(width, height). Take the largest side over all pairs and return its square.",
   "frames": []
  }
 ]
};
