window.PROBLEM = {
 "id": "2718",
 "title": "Sum of Matrix After Queries",
 "level": "Medium",
 "topic": "Matrix",
 "question": "",
 "why": "n=3 with queries row0=1, col2=2, row2=3, col0=4 → final matrix sums to 23.",
 "idea": "A later query overwrites an earlier one on the same row or column, so go backwards: the first time a row (or column) is seen it is final. A row set to v contributes v for every cell not already covered by a final column, i.e. v × (n − columns already fixed); a column symmetrically.",
 "input": "n = 3, queries = [[0,0,1],[1,2,2],[0,2,3],[1,0,4]]",
 "output": "23",
 "notes": [],
 "best": "A later query overwrites an earlier one on the same row or column, so go backwards: the first time a row (or column) is seen it is final. A row set to v contributes v for every cell not already covered by a final column, i.e. v × (n − columns already fixed); a column symmetrically.",
 "variants": [
  {
   "name": "Process the queries backwards",
   "code": "class Solution:\n    def matrixSumQueries(self, n, queries):\n        rows, cols = set(), set()\n        total = 0\n        for t, idx, val in reversed(queries):\n            if t == 0:\n                if idx not in rows:\n                    rows.add(idx)\n                    total += val * (n - len(cols))\n            else:\n                if idx not in cols:\n                    cols.add(idx)\n                    total += val * (n - len(rows))\n        return total",
   "time": "O(q)",
   "space": "O(n)",
   "explain": "A later query overwrites an earlier one on the same row or column, so go backwards: the first time a row (or column) is seen it is final. A row set to v contributes v for every cell not already covered by a final column, i.e. v × (n − columns already fixed); a column symmetrically.",
   "frames": []
  }
 ]
};
