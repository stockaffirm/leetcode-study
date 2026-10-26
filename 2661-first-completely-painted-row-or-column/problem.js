window.PROBLEM = {
 "id": "2661",
 "title": "First Completely Painted Row or Column",
 "level": "Medium",
 "topic": "Matrix",
 "question": "",
 "why": "arr [1,3,4,2], mat [[1,4],[2,3]]: after painting 1, 3, 4 the first row (1,4) is complete at index 2.",
 "idea": "Record where each number sits in the matrix. Paint numbers in the order of arr, counting how many cells of each row and each column are painted. The first index where some row or column reaches its full size is the answer.",
 "input": "arr = [1,3,4,2], mat = [[1,4],[2,3]]",
 "output": "2",
 "notes": [],
 "best": "Record where each number sits in the matrix. Paint numbers in the order of arr, counting how many cells of each row and each column are painted. The first index where some row or column reaches its full size is the answer.",
 "variants": [
  {
   "name": "Position map and row/column counters",
   "code": "class Solution:\n    def firstCompleteIndex(self, arr, mat):\n        m, n = len(mat), len(mat[0])\n        where = {}\n        for i in range(m):\n            for j in range(n):\n                where[mat[i][j]] = (i, j)\n        rows = [0] * m\n        cols = [0] * n\n        for k, v in enumerate(arr):\n            i, j = where[v]\n            rows[i] += 1\n            cols[j] += 1\n            if rows[i] == n or cols[j] == m:\n                return k",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Record where each number sits in the matrix. Paint numbers in the order of arr, counting how many cells of each row and each column are painted. The first index where some row or column reaches its full size is the answer.",
   "frames": []
  }
 ]
};
