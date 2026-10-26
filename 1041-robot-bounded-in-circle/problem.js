window.PROBLEM = {
 "id": "1041",
 "title": "Robot Bounded In Circle",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "A robot repeats a list of commands (G go, L/R turn) forever. Does it stay inside some circle?",
 "idea": "After one pass: if it is back at the start it is bounded; if it is NOT facing north any more, repeating will rotate it around and bring it back within 4 passes. Only 'moved away and still facing north' is unbounded.",
 "input": "\"GGLLGG\"",
 "output": "True",
 "notes": [],
 "best": "After one pass: if it is back at the start it is bounded; if it is NOT facing north any more, repeating will rotate it around and bring it back within 4 passes. Only 'moved away and still facing north' is unbounded.",
 "variants": [
  {
   "name": "One pass: position and heading",
   "code": "class Solution:\n    def isRobotBounded(self, instructions):\n        x = y = 0\n        dx, dy = 0, 1\n        for ch in instructions:\n            if ch == 'G':\n                x += dx\n                y += dy\n            elif ch == 'L': dx, dy = -dy, dx\n            else: dx, dy = dy, -dx\n        return (x, y) == (0, 0) or (dx, dy) != (0, 1)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "After one pass: if it is back at the start it is bounded; if it is NOT facing north any more, repeating will rotate it around and bring it back within 4 passes. Only 'moved away and still facing north' is unbounded.",
   "frames": []
  }
 ]
};
