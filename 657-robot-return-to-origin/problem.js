window.PROBLEM = {
 "id": "657",
 "title": "Robot Return to Origin",
 "level": "Easy",
 "topic": "Array / String",
 "question": "A robot starts at the point (0, 0) and follows a string of moves: 'U' (up), 'D' (down), 'L' (left), 'R' (right), each moving 1 step. Return true if after all the moves it is back at (0, 0). Example: 'UD' → up then down → true; 'LL' → false.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Count each letter",
   "tag": "Pythonic",
   "code": "class Solution:\n    def judgeCircle(self, moves):\n        return moves.count('U') == moves.count('D') and moves.count('L') == moves.count('R')",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Back at the start exactly when ups = downs and lefts = rights.",
   "frames": [],
   "alt": true
  }
 ]
};
