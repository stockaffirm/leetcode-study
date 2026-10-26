window.PROBLEM = {
 "id": "874",
 "title": "Walking Robot Simulation",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
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
   "frames": []
  }
 ]
};
