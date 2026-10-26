window.PROBLEM = {
 "id": "657",
 "title": "Robot Return to Origin",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "A robot follows moves U, D, L, R. Does it end up where it started?",
 "idea": "Keep x and y: up/down change y, left/right change x. It is back at the origin exactly when both are 0.",
 "input": "\"UD\"",
 "output": "True",
 "notes": [],
 "best": "Keep x and y: up/down change y, left/right change x. It is back at the origin exactly when both are 0.",
 "variants": [
  {
   "name": "Track x and y",
   "code": "class Solution:\n    def judgeCircle(self, moves):\n        x = y = 0\n        for m in moves:\n            if m == 'U': y += 1\n            elif m == 'D': y -= 1\n            elif m == 'L': x -= 1\n            else: x += 1\n        return x == 0 and y == 0",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Keep x and y: up/down change y, left/right change x. It is back at the origin exactly when both are 0.",
   "frames": []
  }
 ]
};
