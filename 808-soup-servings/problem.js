window.PROBLEM = {
 "id": "808",
 "title": "Soup Servings",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "n=50: the probability that A empties first (plus half that both empty together) is 0.625.",
 "idea": "Four equally likely servings take (100,0), (75,25), (50,50), (25,75) ml from (A, B). Work in units of 25 ml: p(a, b) = ¼ Σ p(a − x, b − y). A is empty first → 1, both empty → 0.5, B empty first → 0. For large n the answer is within 1e-5 of 1, so return 1 when n ≥ 4800.",
 "input": "n = 50",
 "output": "0.625",
 "notes": [],
 "best": "Four equally likely servings take (100,0), (75,25), (50,50), (25,75) ml from (A, B). Work in units of 25 ml: p(a, b) = ¼ Σ p(a − x, b − y). A is empty first → 1, both empty → 0.5, B empty first → 0. For large n the answer is within 1e-5 of 1, so return 1 when n ≥ 4800.",
 "variants": [
  {
   "name": "Probability DP with a large-n shortcut",
   "code": "class Solution:\n    def soupServings(self, n):\n        if n >= 4800:\n            return 1.0\n        n = (n + 24) // 25\n        @lru_cache(None)\n        def p(a, b):\n            if a <= 0 and b <= 0:\n                return 0.5\n            if a <= 0:\n                return 1.0\n            if b <= 0:\n                return 0.0\n            return 0.25 * (p(a - 4, b) + p(a - 3, b - 1) + p(a - 2, b - 2) + p(a - 1, b - 3))\n        return p(n, n)",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Four equally likely servings take (100,0), (75,25), (50,50), (25,75) ml from (A, B). Work in units of 25 ml: p(a, b) = ¼ Σ p(a − x, b − y). A is empty first → 1, both empty → 0.5, B empty first → 0. For large n the answer is within 1e-5 of 1, so return 1 when n ≥ 4800.",
   "frames": []
  }
 ]
};
