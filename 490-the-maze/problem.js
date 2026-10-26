window.PROBLEM = {
 "id": "490",
 "title": "The Maze",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "A ball rolls in a direction until it hits a wall. Can it STOP exactly on the destination?",
 "idea": "The ball's decisions only happen where it stops. Treat each stopping square as a graph node; from it, roll in 4 directions to find the next stopping squares, and search (BFS) for the destination.",
 "input": "5×5 maze, start (0,4), destination (4,4)",
 "output": "True",
 "notes": [],
 "best": "The ball's decisions only happen where it stops. Treat each stopping square as a graph node; from it, roll in 4 directions to find the next stopping squares, and search (BFS) for the destination.",
 "variants": [
  {
   "name": "BFS over stopping points",
   "code": "class Solution:\n    def hasPath(self, maze, start, destination):\n        m, n = len(maze), len(maze[0])\n        q, seen = deque([tuple(start)]), {tuple(start)}\n        while q:\n            r, c = q.popleft()\n            if [r, c] == destination: return True\n            for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                a, b = r, c\n                while 0 <= a + dr < m and 0 <= b + dc < n and maze[a + dr][b + dc] == 0:\n                    a += dr\n                    b += dc\n                if (a, b) not in seen:\n                    seen.add((a, b))\n                    q.append((a, b))\n        return False",
   "time": "O(m·n·(m+n))",
   "space": "O(m·n)",
   "explain": "The ball's decisions only happen where it stops. Treat each stopping square as a graph node; from it, roll in 4 directions to find the next stopping squares, and search (BFS) for the destination.",
   "frames": []
  }
 ]
};
