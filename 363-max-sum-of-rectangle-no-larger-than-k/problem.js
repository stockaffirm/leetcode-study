window.PROBLEM = {
 "id": "363",
 "title": "Max Sum of Rectangle No Larger Than K",
 "level": "Hard",
 "topic": "Binary Search",
 "question": "",
 "why": "[[1,0,1],[0,-2,3]], k=2: the rectangle [[0,1],[-2,3]] sums to 2 → 2.",
 "idea": "Fix a top and a bottom row and collapse the columns between them into one array of column sums. We now want the subarray of that array with the largest sum ≤ k: keep a sorted list of prefix sums; for each prefix p find the smallest earlier prefix ≥ p − k with bisect — the difference is the best sum ending here.",
 "input": "matrix = [[1,0,1],[0,-2,3]], k = 2",
 "output": "2",
 "notes": [],
 "best": "Fix a top and a bottom row and collapse the columns between them into one array of column sums. We now want the subarray of that array with the largest sum ≤ k: keep a sorted list of prefix sums; for each prefix p find the smallest earlier prefix ≥ p − k with bisect — the difference is the best sum ending here.",
 "variants": [
  {
   "name": "Fix two rows, sorted prefix sums with bisect",
   "code": "class Solution:\n    def maxSumSubmatrix(self, matrix, k):\n        m, n = len(matrix), len(matrix[0])\n        best = float('-inf')\n        for top in range(m):\n            cols = [0] * n\n            for bottom in range(top, m):\n                for j in range(n):\n                    cols[j] += matrix[bottom][j]\n                prefixes = [0]\n                run = 0\n                for v in cols:\n                    run += v\n                    idx = bisect_left(prefixes, run - k)\n                    if idx < len(prefixes):\n                        best = max(best, run - prefixes[idx])\n                    insort(prefixes, run)\n        return best",
   "time": "O(m²·n log n)",
   "space": "O(n)",
   "explain": "Fix a top and a bottom row and collapse the columns between them into one array of column sums. We now want the subarray of that array with the largest sum ≤ k: keep a sorted list of prefix sums; for each prefix p find the smallest earlier prefix ≥ p − k with bisect — the difference is the best sum ending here.",
   "frames": []
  }
 ]
};
