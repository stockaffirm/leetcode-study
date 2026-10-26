window.PROBLEM = {
 "id": "241",
 "title": "Different Ways to Add Parentheses",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "'2-1-1' → ((2−1)−1) = 0 and (2−(1−1)) = 2 → [0,2].",
 "idea": "For every operator split the expression into left and right parts, compute all results of each part recursively and combine them with the operator. A pure number returns itself. Memoise the sub-expressions.",
 "input": "expression = \"2-1-1\"",
 "output": "[2, 0]",
 "notes": [],
 "best": "For every operator split the expression into left and right parts, compute all results of each part recursively and combine them with the operator. A pure number returns itself. Memoise the sub-expressions.",
 "variants": [
  {
   "name": "Split at every operator and combine",
   "code": "class Solution:\n    def diffWaysToCompute(self, expression):\n        @lru_cache(None)\n        def go(e):\n            if e.isdigit():\n                return [int(e)]\n            res = []\n            for i, c in enumerate(e):\n                if c in '+-*':\n                    for a in go(e[:i]):\n                        for b in go(e[i + 1:]):\n                            res.append(a + b if c == '+' else a - b if c == '-' else a * b)\n            return res\n        return sorted(go(expression), reverse=True)",
   "time": "exponential (Catalan)",
   "space": "O(n · Catalan)",
   "explain": "For every operator split the expression into left and right parts, compute all results of each part recursively and combine them with the operator. A pure number returns itself. Memoise the sub-expressions.",
   "frames": []
  }
 ]
};
