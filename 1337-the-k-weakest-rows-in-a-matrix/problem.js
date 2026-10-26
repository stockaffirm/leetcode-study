window.PROBLEM = {
 "id": "1337",
 "title": "The K Weakest Rows in a Matrix",
 "level": "Easy",
 "topic": "Sorting",
 "question": "",
 "why": "rows with 2,4,1,2,5 soldiers, k=3 → rows [2, 0, 3].",
 "idea": "Soldiers (1s) come before civilians (0s) in each row, so the count of soldiers is the row's sum. Sort the row indices by (sum, index) and take the first k.",
 "input": "mat = [[1,1,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0],[1,1,1,1,1]], k = 3",
 "output": "[2, 0, 3]",
 "notes": [],
 "best": "Soldiers (1s) come before civilians (0s) in each row, so the count of soldiers is the row's sum. Sort the row indices by (sum, index) and take the first k.",
 "variants": [
  {
   "name": "Sort rows by (soldiers, index)",
   "code": "class Solution:\n    def kWeakestRows(self, mat, k):\n        order = sorted(range(len(mat)), key=lambda i: (sum(mat[i]), i))\n        return order[:k]",
   "time": "O(m log m)",
   "space": "O(m)",
   "explain": "Soldiers (1s) come before civilians (0s) in each row, so the count of soldiers is the row's sum. Sort the row indices by (sum, index) and take the first k.",
   "frames": []
  }
 ]
};
