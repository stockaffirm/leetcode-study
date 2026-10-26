window.PROBLEM = {
 "id": "509",
 "title": "Fibonacci Number",
 "level": "Easy",
 "topic": "Dynamic Programming",
 "question": "The Fibonacci numbers start F(0) = 0 and F(1) = 1, and every later number is the sum of the two before it: F(n) = F(n−1) + F(n−2). Given n, return F(n). Example: the sequence is 0, 1, 1, 2, 3, 5, 8, … so F(6) = 8.",
 "why": "F(0)=0, F(1)=1 and every next number is the sum of the previous two: 0, 1, 1, 2, 3, 5, 8 … F(6) = 8.",
 "idea": "You only ever need the last two values, so keep two variables and step forward n times.",
 "input": "n = 6",
 "output": "8",
 "notes": [],
 "best": "You only ever need the last two values, so keep two variables and step forward n times.",
 "variants": [
  {
   "name": "Iterate with two variables",
   "code": "class Solution:\n    def fib(self, n):\n        a, b = 0, 1\n        for _ in range(n):\n            a, b = b, a + b\n        return a",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "You only ever need the last two values, so keep two variables and step forward n times.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursion + memo",
   "tag": "Alternative",
   "code": "class Solution:\n    def fib(self, n):\n        @lru_cache(None)\n        def go(k):\n            return k if k < 2 else go(k - 1) + go(k - 2)\n        return go(n)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "F(n) = F(n−1) + F(n−2), remembering each result.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Fast doubling",
   "tag": "Alternative",
   "code": "class Solution:\n    def fib(self, n):\n        def fd(k):\n            if k == 0: return (0, 1)\n            a, b = fd(k // 2)\n            c = a * (2 * b - a)\n            d = a * a + b * b\n            return (d, c + d) if k % 2 else (c, d)\n        return fd(n)[0]",
   "time": "O(log n)",
   "space": "O(log n)",
   "explain": "Jump from F(k) to F(2k) with two formulas instead of stepping one at a time.",
   "frames": [],
   "alt": true
  }
 ]
};
