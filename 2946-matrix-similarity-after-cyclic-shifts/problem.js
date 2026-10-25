window.PROBLEM = {
 "id": "2946",
 "title": "Matrix Similarity After Cyclic Shifts",
 "level": "Easy",
 "topic": "Matrix",
 "question": "Even-indexed rows of the matrix are shifted LEFT by k places (cyclically) and odd-indexed rows RIGHT by k. Return true if the resulting matrix equals the original. Example: [[1,2,3],[4,5,6],[7,8,9]], k=4 → false.",
 "why": "[[1,2,3],[4,5,6],[7,8,9]], k=4: shifting by 4 ≡ 1 place changes the row [1,2,3] → false.",
 "idea": "Even rows shift left and odd rows shift right, but a row equals its shifted self in either direction exactly when row[j] == row[(j + k) mod n] for every j. Check that for every row.",
 "input": "mat = [[1,2,3],[4,5,6],[7,8,9]], k = 4",
 "output": "false",
 "notes": [],
 "best": "Even rows shift left and odd rows shift right, but a row equals its shifted self in either direction exactly when row[j] == row[(j + k) mod n] for every j. Check that for every row.",
 "variants": [
  {
   "name": "A row is unchanged if it repeats every k",
   "code": "class Solution:\n    def areSimilar(self, mat, k):\n        n = len(mat[0])\n        return all(row[j] == row[(j + k) % n] for row in mat for j in range(n))",
   "time": "O(m·n)",
   "space": "O(1)",
   "explain": "Even rows shift left and odd rows shift right, but a row equals its shifted self in either direction exactly when row[j] == row[(j + k) mod n] for every j. Check that for every row.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Build the shifted matrix",
   "tag": "Brute force",
   "code": "class Solution:\n    def areSimilar(self, mat, k):\n        n = len(mat[0])\n        k %= n\n        for i, row in enumerate(mat):\n            shifted = row[k:] + row[:k] if i % 2 == 0 else row[n - k:] + row[:n - k]\n            if shifted != row:\n                return False\n        return True",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Actually shift even rows left and odd rows right by k and compare with the original.",
   "frames": [],
   "alt": true
  }
 ]
};
