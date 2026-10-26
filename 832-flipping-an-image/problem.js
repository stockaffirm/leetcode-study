window.PROBLEM = {
 "id": "832",
 "title": "Flipping an Image",
 "level": "Easy",
 "topic": "Matrix",
 "question": "",
 "why": "[[1,1,0],[1,0,1],[0,0,0]] → flip rows → [[0,1,1],[1,0,1],[0,0,0]] → invert → [[1,0,0],[0,1,0],[1,1,1]].",
 "idea": "Flipping a row reverses it, inverting turns 0 into 1 and 1 into 0. Doing both: output cell j of a row is 1 − input cell (n−1−j).",
 "input": "image = [[1,1,0],[1,0,1],[0,0,0]]",
 "output": "[[1, 0, 0], [0, 1, 0], [1, 1, 1]]",
 "notes": [],
 "best": "Flipping a row reverses it, inverting turns 0 into 1 and 1 into 0. Doing both: output cell j of a row is 1 − input cell (n−1−j).",
 "variants": [
  {
   "name": "Reverse each row and invert in one pass",
   "code": "class Solution:\n    def flipAndInvertImage(self, image):\n        return [[1 - v for v in reversed(row)] for row in image]",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "Flipping a row reverses it, inverting turns 0 into 1 and 1 into 0. Doing both: output cell j of a row is 1 − input cell (n−1−j).",
   "frames": []
  }
 ]
};
