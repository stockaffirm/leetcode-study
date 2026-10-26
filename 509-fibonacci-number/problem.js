window.PROBLEM = {
 "id": "509",
 "title": "Fibonacci Number",
 "level": "Easy",
 "topic": "Dynamic Programming",
 "question": "",
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
   "frames": []
  }
 ]
};
