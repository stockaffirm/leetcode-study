window.PROBLEM = {
 "id": "1931",
 "title": "Painting a Grid With Three Different Colors",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
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
   "frames": []
  }
 ]
};
