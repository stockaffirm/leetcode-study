window.PROBLEM = {
 "id": "2397",
 "title": "Maximum Rows Covered by Columns",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "A matrix of 0s and 1s is given. Choose numSelect columns. A row is 'covered' if every 1 in the row lies in one of the chosen columns (a row with no 1 is always covered). Return the maximum number of covered rows. Example: [[0,0,0],[1,0,1],[0,1,1],[0,0,1]], numSelect=2 → 3.",
 "why": "A grid of 0/1. Choose numSelect columns. A row is 'covered' if every 1 in it lies in a chosen column (a row of only zeros is always covered). Maximise the covered rows.",
 "idea": "Turn each row into a bitmask of its 1s. For every choice of numSelect columns (also a mask) a row is covered when rowMask & ~chosen == 0.",
 "input": "[[0,0,0],[1,0,1],[0,1,1],[0,0,1]], numSelect=2",
 "output": "3",
 "notes": [],
 "best": "Turn each row into a bitmask of its 1s. For every choice of numSelect columns (also a mask) a row is covered when rowMask & ~chosen == 0.",
 "variants": [
  {
   "name": "Try every set of columns as a bitmask",
   "code": "class Solution:\n    def maximumRows(self, matrix, numSelect):\n        n = len(matrix[0])\n        rows = [sum(1 << j for j, v in enumerate(r) if v) for r in matrix]\n        best = 0\n        for cols in combinations(range(n), numSelect):\n            chosen = sum(1 << j for j in cols)\n            best = max(best, sum(1 for r in rows if r & ~chosen == 0))\n        return best",
   "time": "O(C(n,k)·m)",
   "space": "O(m)",
   "explain": "Turn each row into a bitmask of its 1s. For every choice of numSelect columns (also a mask) a row is covered when rowMask & ~chosen == 0.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Loop over bitmasks with k ones",
   "tag": "Alternative",
   "code": "class Solution:\n    def maximumRows(self, matrix, numSelect):\n        n = len(matrix[0])\n        rows = [sum(1 << j for j, v in enumerate(r) if v) for r in matrix]\n        best = 0\n        for chosen in range(1 << n):\n            if bin(chosen).count('1') != numSelect: continue\n            best = max(best, sum(1 for r in rows if r & ~chosen == 0))\n        return best",
   "time": "O(2ⁿ·m)",
   "space": "O(m)",
   "explain": "Try every column mask and keep those with exactly numSelect bits set.",
   "frames": [],
   "alt": true
  }
 ]
};
