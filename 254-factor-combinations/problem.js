window.PROBLEM = {
 "id": "254",
 "title": "Factor Combinations",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "Return all ways to write n as a product of factors, each between 2 and n−1 (the order inside a product does not matter, so list each product once, in increasing order). Example: n=12 → [[2,6],[2,2,3],[3,4]].",
 "why": "List all ways to write n as a product of numbers between 2 and n−1 (order inside a product does not matter).",
 "idea": "Pick a smallest factor f ≥ the previous one, with f ≤ √(remaining). Record [path, f, remaining/f] and then keep factoring the remainder with factors ≥ f.",
 "input": "n = 12",
 "output": "[[2,6],[2,2,3],[3,4]]",
 "notes": [],
 "best": "Pick a smallest factor f ≥ the previous one, with f ≤ √(remaining). Record [path, f, remaining/f] and then keep factoring the remainder with factors ≥ f.",
 "variants": [
  {
   "name": "Backtracking over increasing factors",
   "code": "class Solution:\n    def getFactors(self, n):\n        res = []\n        def go(n, start, path):\n            for f in range(start, isqrt(n) + 1):\n                if n % f == 0:\n                    res.append(path + [f, n // f])\n                    go(n // f, f, path + [f])\n        go(n, 2, [])\n        return res",
   "time": "output-sensitive",
   "space": "O(log n)",
   "explain": "Pick a smallest factor f ≥ the previous one, with f ≤ √(remaining). Record [path, f, remaining/f] and then keep factoring the remainder with factors ≥ f.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Return combos from recursion",
   "tag": "Alternative",
   "code": "class Solution:\n    def getFactors(self, n):\n        def f(n, start):\n            out = []\n            for d in range(start, isqrt(n) + 1):\n                if n % d == 0:\n                    out.append([d, n // d])\n                    for rest in f(n // d, d): out.append([d] + rest)\n            return out\n        return f(n, 2)",
   "time": "output-sensitive",
   "space": "O(log n)",
   "explain": "The same search expressed as a function that returns all factorisations of the remainder.",
   "frames": [],
   "alt": true
  }
 ]
};
