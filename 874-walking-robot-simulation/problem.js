window.PROBLEM = {
 "id": "874",
 "title": "Walking Robot Simulation",
 "level": "Medium",
 "topic": "Array / String",
 "question": "A robot starts at (0, 0) facing north (positive y) on an infinite grid. Each command is: −2 turn left 90°, −1 turn right 90°, or a number 1–9 meaning move forward that many steps one at a time. Some grid points are obstacles: if the next step would enter an obstacle the robot stays and continues with the next command. Return the largest squared distance from the origin (x² + y²) the robot ever reaches. Example: commands [4,-1,3], no obstacles → ends at (3,4) → 25.",
 "why": "A robot starts at (0,0) facing north and follows commands (turn left/right or walk k steps), stopping early if an obstacle is in front. Largest squared distance from the origin ever reached?",
 "idea": "Track position and a direction vector (dx, dy); turning rotates the vector. Move one step at a time, checking an obstacle set.",
 "input": "commands [4,-1,3], no obstacles",
 "output": "25",
 "notes": [],
 "best": "Track position and a direction vector (dx, dy); turning rotates the vector. Move one step at a time, checking an obstacle set.",
 "variants": [
  {
   "name": "Simulate with a direction vector",
   "code": "class Solution:\n    def robotSim(self, commands, obstacles):\n        obs = set(map(tuple, obstacles))\n        x = y = 0\n        dx, dy = 0, 1\n        best = 0\n        for c in commands:\n            if c == -2: dx, dy = -dy, dx\n            elif c == -1: dx, dy = dy, -dx\n            else:\n                for _ in range(c):\n                    if (x + dx, y + dy) in obs: break\n                    x += dx\n                    y += dy\n                    best = max(best, x * x + y * y)\n        return best",
   "time": "O(total steps)",
   "space": "O(obstacles)",
   "explain": "Track position and a direction vector (dx, dy); turning rotates the vector. Move one step at a time, checking an obstacle set.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Direction table",
   "tag": "Alternative",
   "code": "class Solution:\n    def robotSim(self, commands, obstacles):\n        obs = set(map(tuple, obstacles))\n        dirs = ((0, 1), (1, 0), (0, -1), (-1, 0))\n        x = y = d = best = 0\n        for c in commands:\n            if c == -1: d = (d + 1) % 4\n            elif c == -2: d = (d - 1) % 4\n            else:\n                for _ in range(c):\n                    nx, ny = x + dirs[d][0], y + dirs[d][1]\n                    if (nx, ny) in obs: break\n                    x, y = nx, ny\n                    best = max(best, x * x + y * y)\n        return best",
   "time": "O(total steps)",
   "space": "O(obstacles)",
   "explain": "Four fixed directions indexed 0–3; turning adds or subtracts 1.",
   "frames": [],
   "alt": true
  }
 ]
};
