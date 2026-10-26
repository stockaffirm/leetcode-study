window.PROBLEM = {
 "id": "1572",
 "title": "Matrix Diagonal Sum",
 "level": "Easy",
 "topic": "Matrix",
 "question": "",
 "why": "[[1,2,3],[4,5,6],[7,8,9]] → 1 + 5 + 9 + 3 + 7 = 25.",
 "idea": "Add mat[i][i] and mat[i][n−1−i] for every row; for odd n the centre cell is counted twice, so subtract it once.",
 "input": "mat = [[1,2,3],[4,5,6],[7,8,9]]",
 "output": "25",
 "notes": [],
 "best": "Add mat[i][i] and mat[i][n−1−i] for every row; for odd n the centre cell is counted twice, so subtract it once.",
 "variants": [
  {
   "name": "Both diagonals, centre counted once",
   "code": "class Solution:\n    def diagonalSum(self, mat):\n        n = len(mat)\n        total = sum(mat[i][i] + mat[i][n - 1 - i] for i in range(n))\n        return total - (mat[n // 2][n // 2] if n % 2 else 0)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Add mat[i][i] and mat[i][n−1−i] for every row; for odd n the centre cell is counted twice, so subtract it once.",
   "frames": []
  }
 ]
};
