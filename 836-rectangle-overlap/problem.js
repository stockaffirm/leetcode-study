window.PROBLEM = {
 "id": "836",
 "title": "Rectangle Overlap",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "[0,0,2,2] and [1,1,3,3] overlap in a 1×1 square → true; touching edges do not count.",
 "idea": "Two axis-aligned rectangles overlap with positive area exactly when their x-intervals overlap and their y-intervals overlap (strictly): min(x2) > max(x1) and min(y2) > max(y1).",
 "input": "rec1 = [0,0,2,2], rec2 = [1,1,3,3]",
 "output": "true",
 "notes": [],
 "best": "Two axis-aligned rectangles overlap with positive area exactly when their x-intervals overlap and their y-intervals overlap (strictly): min(x2) > max(x1) and min(y2) > max(y1).",
 "variants": [
  {
   "name": "The projections must overlap on both axes",
   "code": "class Solution:\n    def isRectangleOverlap(self, rec1, rec2):\n        return min(rec1[2], rec2[2]) > max(rec1[0], rec2[0]) and min(rec1[3], rec2[3]) > max(rec1[1], rec2[1])",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Two axis-aligned rectangles overlap with positive area exactly when their x-intervals overlap and their y-intervals overlap (strictly): min(x2) > max(x1) and min(y2) > max(y1).",
   "frames": []
  }
 ]
};
