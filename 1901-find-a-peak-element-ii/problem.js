window.PROBLEM = {
 "id": "1901",
 "title": "Find a Peak Element II",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "",
 "why": "30 in the middle is bigger than its neighbours 21, 14 and 16 (and 20 above it), so [1,1] is a peak. Any valid peak is accepted.",
 "idea": "Look at the middle row and take its maximum. If the cell below is bigger, a peak must exist in the lower half; otherwise it exists in this row or above. Halve the rows each time.",
 "input": "mat = [[10,20,15],[21,30,14],[7,16,32]]",
 "output": "a peak such as [1,1]",
 "notes": [],
 "best": "Look at the middle row and take its maximum. If the cell below is bigger, a peak must exist in the lower half; otherwise it exists in this row or above. Halve the rows each time.",
 "variants": [
  {
   "name": "Binary search on rows",
   "code": "class Solution:\n    def findPeakGrid(self, mat):\n        lo, hi = 0, len(mat) - 1\n        while lo < hi:\n            mid = (lo + hi) // 2\n            c = mat[mid].index(max(mat[mid]))\n            if mat[mid][c] < mat[mid + 1][c]:\n                lo = mid + 1\n            else:\n                hi = mid\n        return [lo, mat[lo].index(max(mat[lo]))]",
   "time": "O(n log m)",
   "space": "O(1)",
   "explain": "Look at the middle row and take its maximum. If the cell below is bigger, a peak must exist in the lower half; otherwise it exists in this row or above. Halve the rows each time.",
   "frames": []
  }
 ]
};
