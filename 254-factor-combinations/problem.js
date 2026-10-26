window.PROBLEM = {
 "id": "254",
 "title": "Factor Combinations",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "",
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
   "frames": []
  }
 ]
};
