window.PROBLEM = {
 "id": "835",
 "title": "Image Overlap",
 "level": "Medium",
 "topic": "Matrix",
 "question": "",
 "why": "Sliding the first image one step right and one down overlaps three 1s → 3.",
 "idea": "Slide one image over the other by every possible shift. For two 1-cells (one from each image) the shift that aligns them is their coordinate difference; count how many pairs give each shift and take the largest count.",
 "input": "img1 = [[1,1,0],[0,1,0],[0,1,0]], img2 = [[0,0,0],[0,1,1],[0,0,1]]",
 "output": "3",
 "notes": [],
 "best": "Slide one image over the other by every possible shift. For two 1-cells (one from each image) the shift that aligns them is their coordinate difference; count how many pairs give each shift and take the largest count.",
 "variants": [
  {
   "name": "Count translation vectors between the 1-cells",
   "code": "class Solution:\n    def largestOverlap(self, img1, img2):\n        a = [(i, j) for i, r in enumerate(img1) for j, v in enumerate(r) if v]\n        b = [(i, j) for i, r in enumerate(img2) for j, v in enumerate(r) if v]\n        cnt = Counter((x2 - x1, y2 - y1) for x1, y1 in a for x2, y2 in b)\n        return max(cnt.values(), default=0)",
   "time": "O(k1·k2)",
   "space": "O(k1·k2)",
   "explain": "Slide one image over the other by every possible shift. For two 1-cells (one from each image) the shift that aligns them is their coordinate difference; count how many pairs give each shift and take the largest count.",
   "frames": []
  }
 ]
};
