window.PROBLEM = {
 "id": "1901",
 "title": "Find a Peak Element II",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "A grid has all different neighbouring values. A peak is a cell strictly greater than all of its 4 neighbours (outside the grid counts as −1). Return the position [row, column] of any peak. The intended answer takes O(n log m). Example: [[10,20,15],[21,30,14],[7,16,32]] → [1,1] (or [2,2]).",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every cell",
   "tag": "Brute force",
   "code": "class Solution:\n    def findPeakGrid(self, mat):\n        m, n = len(mat), len(mat[0])\n        for i in range(m):\n            for j in range(n):\n                if all(mat[i][j] > mat[a][b] for a, b in ((i - 1, j), (i + 1, j), (i, j - 1), (i, j + 1))\n                       if 0 <= a < m and 0 <= b < n):\n                    return [i, j]",
   "time": "O(m·n)",
   "space": "O(1)",
   "explain": "Look at all four neighbours of every cell and return the first one that is bigger than all of them.",
   "frames": [],
   "alt": true
  }
 ]
};
