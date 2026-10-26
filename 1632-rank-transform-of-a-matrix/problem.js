window.PROBLEM = {
 "id": "1632",
 "title": "Rank Transform of a Matrix",
 "level": "Hard",
 "topic": "Union Find / Segment Tree",
 "question": "",
 "why": "[[1,2],[3,4]] → ranks [[1,2],[2,3]].",
 "idea": "The rank of a cell is one more than the largest rank among smaller cells in its row and column. Process distinct values from small to large. Cells with the same value that share a row or column must get the same rank, so union them (rows and columns as nodes). For each connected group the rank is 1 + the largest current rank in any of its rows or columns; then update the row/column maxima.",
 "input": "matrix = [[1,2],[3,4]]",
 "output": "[[1, 2], [2, 3]]",
 "notes": [],
 "best": "The rank of a cell is one more than the largest rank among smaller cells in its row and column. Process distinct values from small to large. Cells with the same value that share a row or column must get the same rank, so union them (rows and columns as nodes). For each connected group the rank is 1 + the largest current rank in any of its rows or columns; then update the row/column maxima.",
 "variants": [
  {
   "name": "Process values in order; Union-Find equal cells in the same row/column",
   "code": "class Solution:\n    def matrixRankTransform(self, matrix):\n        m, n = len(matrix), len(matrix[0])\n        groups = defaultdict(list)\n        for i in range(m):\n            for j in range(n):\n                groups[matrix[i][j]].append((i, j))\n        row_max = [0] * m\n        col_max = [0] * n\n        ans = [[0] * n for _ in range(m)]\n        for v in sorted(groups):\n            p = {}\n            def find(x):\n                p.setdefault(x, x)\n                while p[x] != x:\n                    p[x] = p[p[x]]\n                    x = p[x]\n                return x\n            for i, j in groups[v]:\n                p[find(i)] = find(m + j)\n            best = defaultdict(int)\n            for i, j in groups[v]:\n                r = find(i)\n                best[r] = max(best[r], row_max[i], col_max[j])\n            for i, j in groups[v]:\n                rank = best[find(i)] + 1\n                ans[i][j] = rank\n            for i, j in groups[v]:\n                row_max[i] = col_max[j] = ans[i][j]\n        return ans",
   "time": "O(m·n log(m·n))",
   "space": "O(m·n)",
   "explain": "The rank of a cell is one more than the largest rank among smaller cells in its row and column. Process distinct values from small to large. Cells with the same value that share a row or column must get the same rank, so union them (rows and columns as nodes). For each connected group the rank is 1 + the largest current rank in any of its rows or columns; then update the row/column maxima.",
   "frames": []
  }
 ]
};
