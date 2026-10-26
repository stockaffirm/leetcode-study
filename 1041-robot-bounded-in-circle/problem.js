window.PROBLEM = {
 "id": "1041",
 "title": "Robot Bounded In Circle",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "A robot starts at (0, 0) facing north. It repeats the same list of instructions forever: 'G' go forward 1, 'L' turn left 90°, 'R' turn right 90°. Return true if there is a circle on the plane such that the robot never leaves it. Example: 'GGLLGG' → it ends back at the start → true; 'GG' → it walks away forever → false.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Run it four times",
   "tag": "Brute force",
   "code": "class Solution:\n    def isRobotBounded(self, instructions):\n        x = y = d = 0\n        dirs = ((0, 1), (1, 0), (0, -1), (-1, 0))\n        for _ in range(4):\n            for ch in instructions:\n                if ch == 'G':\n                    x += dirs[d][0]\n                    y += dirs[d][1]\n                elif ch == 'L': d = (d - 1) % 4\n                else: d = (d + 1) % 4\n        return x == 0 and y == 0",
   "time": "O(4n)",
   "space": "O(1)",
   "explain": "After four repetitions the robot has turned a full circle (or not): if it is back at the origin it is bounded.",
   "frames": [],
   "alt": true
  }
 ]
};
