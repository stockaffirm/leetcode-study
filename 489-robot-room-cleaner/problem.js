window.PROBLEM = {
 "id": "489",
 "title": "Robot Room Cleaner",
 "level": "Hard",
 "topic": "Backtracking",
 "question": "",
 "why": "A robot in an unknown room can only move forward, turn and clean. Make it clean every reachable cell.",
 "idea": "DFS using coordinates you invent (start = (0,0)): clean, then try all four directions; if a move works and the cell is new, recurse, then turn around, step back and turn back so the robot is in the right place and direction.",
 "input": "a small room with a wall in the middle",
 "output": "every reachable cell cleaned",
 "notes": [],
 "best": "DFS using coordinates you invent (start = (0,0)): clean, then try all four directions; if a move works and the cell is new, recurse, then turn around, step back and turn back so the robot is in the right place and direction.",
 "variants": [
  {
   "name": "DFS with turning and backing up",
   "code": "class Solution:\n    def cleanRoom(self, robot):\n        seen = set()\n        dirs = ((-1, 0), (0, 1), (1, 0), (0, -1))\n        def back():\n            robot.turnRight()\n            robot.turnRight()\n            robot.move()\n            robot.turnRight()\n            robot.turnRight()\n        def dfs(r, c, d):\n            seen.add((r, c))\n            robot.clean()\n            for k in range(4):\n                nd = (d + k) % 4\n                nr, nc = r + dirs[nd][0], c + dirs[nd][1]\n                if (nr, nc) not in seen and robot.move():\n                    dfs(nr, nc, nd)\n                    back()\n                robot.turnRight()\n        dfs(0, 0, 0)",
   "time": "O(cells)",
   "space": "O(cells)",
   "explain": "DFS using coordinates you invent (start = (0,0)): clean, then try all four directions; if a move works and the cell is new, recurse, then turn around, step back and turn back so the robot is in the right place and direction.",
   "frames": []
  }
 ]
};
