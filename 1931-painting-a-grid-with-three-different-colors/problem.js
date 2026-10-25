window.PROBLEM = {
 "id": "1931",
 "title": "Painting a Grid With Three Different Colors",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "An m × n grid is coloured with 3 colours so that no two neighbouring cells (up, down, left, right) have the same colour. Return the number of ways, modulo 1,000,000,007 (m ≤ 5, n up to 1000). Example: m=2, n=2 → 18.",
 "why": "A 2×2 grid with 3 colours and no two touching cells equal: 18 ways.",
 "idea": "Because m ≤ 5, list every valid colouring of one column (no equal neighbours inside it). Two columns can sit side by side if no row matches. Then count column by column.",
 "input": "m = 2, n = 2",
 "output": "18",
 "notes": [],
 "best": "Because m ≤ 5, list every valid colouring of one column (no equal neighbours inside it). Two columns can sit side by side if no row matches. Then count column by column.",
 "variants": [
  {
   "name": "DP over column colourings",
   "code": "class Solution:\n    def colorTheGrid(self, m, n):\n        MOD = 10 ** 9 + 7\n        cols = [c for c in product(range(3), repeat=m)\n                if all(c[i] != c[i + 1] for i in range(m - 1))]\n        ok = {a: [b for b in cols if all(x != y for x, y in zip(a, b))] for a in cols}\n        dp = {c: 1 for c in cols}\n        for _ in range(n - 1):\n            dp = {c: sum(dp[p] for p in ok[c]) % MOD for c in cols}\n        return sum(dp.values()) % MOD",
   "time": "O(n · P²)",
   "space": "O(P²)",
   "explain": "Because m ≤ 5, list every valid colouring of one column (no equal neighbours inside it). Two columns can sit side by side if no row matches. Then count column by column.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Paint cell by cell with backtracking",
   "tag": "Brute force",
   "code": "class Solution:\n    def colorTheGrid(self, m, n):\n        grid = [[-1] * n for _ in range(m)]\n        def go(pos):\n            if pos == m * n:\n                return 1\n            i, j = divmod(pos, n)\n            total = 0\n            for c in range(3):\n                if (i and grid[i - 1][j] == c) or (j and grid[i][j - 1] == c):\n                    continue\n                grid[i][j] = c\n                total += go(pos + 1)\n                grid[i][j] = -1\n            return total\n        return go(0) % (10 ** 9 + 7)",
   "time": "O(3^(m·n))",
   "space": "O(m·n)",
   "explain": "Try each of the 3 colours in every cell, skipping the ones that match the cell above or to the left.",
   "frames": [],
   "alt": true
  }
 ]
};
