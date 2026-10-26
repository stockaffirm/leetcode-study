window.PROBLEM = {
 "id": "1289",
 "title": "Minimum Falling Path Sum II",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "[[1,2,3],[4,5,6],[7,8,9]] → 1 + 5 + 7 = 13.",
 "idea": "A falling path takes one element per row with no two in the same column as neighbours. For each cell the best previous cell is the smallest value in the previous row from a different column: keep the smallest and second smallest (with the column of the smallest) of the previous row.",
 "input": "grid = [[1,2,3],[4,5,6],[7,8,9]]",
 "output": "13",
 "notes": [],
 "best": "A falling path takes one element per row with no two in the same column as neighbours. For each cell the best previous cell is the smallest value in the previous row from a different column: keep the smallest and second smallest (with the column of the smallest) of the previous row.",
 "variants": [
  {
   "name": "Keep the two smallest values of the previous row",
   "code": "class Solution:\n    def minFallingPathSum(self, grid):\n        prev = grid[0][:]\n        for row in grid[1:]:\n            order = sorted(range(len(prev)), key=lambda j: prev[j])\n            m1, m2 = order[0], order[1] if len(order) > 1 else order[0]\n            cur = []\n            for j, v in enumerate(row):\n                cur.append(v + (prev[m2] if j == m1 else prev[m1]))\n            prev = cur\n        return min(prev)",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "A falling path takes one element per row with no two in the same column as neighbours. For each cell the best previous cell is the smallest value in the previous row from a different column: keep the smallest and second smallest (with the column of the smallest) of the previous row.",
   "frames": []
  }
 ]
};
