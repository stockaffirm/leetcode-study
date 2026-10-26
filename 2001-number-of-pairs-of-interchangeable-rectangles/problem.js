window.PROBLEM = {
 "id": "2001",
 "title": "Number of Pairs of Interchangeable Rectangles",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "[[4,8],[3,6],[10,20],[15,30]] → all have ratio 1:2 → 6 pairs.",
 "idea": "Two rectangles are interchangeable when width/height is the same. Reduce each (w, h) by their gcd to get a canonical ratio and count; a group of c rectangles gives c(c−1)/2 pairs.",
 "input": "rectangles = [[4,8],[3,6],[10,20],[15,30]]",
 "output": "6",
 "notes": [],
 "best": "Two rectangles are interchangeable when width/height is the same. Reduce each (w, h) by their gcd to get a canonical ratio and count; a group of c rectangles gives c(c−1)/2 pairs.",
 "variants": [
  {
   "name": "Group by reduced width / height ratio",
   "code": "class Solution:\n    def interchangeableRectangles(self, rectangles):\n        cnt = Counter((w // gcd(w, h), h // gcd(w, h)) for w, h in rectangles)\n        return sum(c * (c - 1) // 2 for c in cnt.values())",
   "time": "O(n log V)",
   "space": "O(n)",
   "explain": "Two rectangles are interchangeable when width/height is the same. Reduce each (w, h) by their gcd to get a canonical ratio and count; a group of c rectangles gives c(c−1)/2 pairs.",
   "frames": []
  }
 ]
};
