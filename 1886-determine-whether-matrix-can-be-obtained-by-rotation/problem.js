window.PROBLEM = {
 "id": "1886",
 "title": "Determine Whether Matrix Can Be Obtained By Rotation",
 "level": "Easy",
 "topic": "Matrix",
 "question": "",
 "why": "mat [[0,1],[1,0]], target [[1,0],[0,1]] → rotate once → true.",
 "idea": "Rotate the matrix by 90° up to four times and compare with the target after each (zip the reversed rows).",
 "input": "mat = [[0,1],[1,0]], target = [[1,0],[0,1]]",
 "output": "true",
 "notes": [],
 "best": "Rotate the matrix by 90° up to four times and compare with the target after each (zip the reversed rows).",
 "variants": [
  {
   "name": "Try all four rotations",
   "code": "class Solution:\n    def findRotation(self, mat, target):\n        for _ in range(4):\n            if mat == target:\n                return True\n            mat = [list(row) for row in zip(*mat[::-1])]\n        return False",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "Rotate the matrix by 90° up to four times and compare with the target after each (zip the reversed rows).",
   "frames": []
  }
 ]
};
