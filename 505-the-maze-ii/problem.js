window.PROBLEM = {
 "id": "505",
 "title": "The Maze II",
 "level": "Medium",
 "topic": "Graph",
 "question": "A ball rolls in a maze (0 = open, 1 = wall); once it starts rolling in a direction it keeps going until it hits a wall. Given the start and the destination, return the shortest distance (the number of cells passed, not counting the start) for the ball to STOP at the destination, or −1. Example: the 5×5 maze, start [0,4], destination [4,4] → 12.",
 "why": "A ball in a maze rolls in one direction until it hits a wall. Find the shortest distance (number of cells travelled) from the start to the destination where the ball stops there, or −1.",
 "idea": "Each node is a stopping position. From it, roll in each of four directions counting cells until the wall; run Dijkstra on these roll lengths.",
 "input": "5×5 maze, start [0,4], destination [4,4]",
 "output": "12",
 "notes": [],
 "best": "Each node is a stopping position. From it, roll in each of four directions counting cells until the wall; run Dijkstra on these roll lengths.",
 "variants": [
  {
   "name": "Dijkstra with rolling balls",
   "code": "class Solution:\n    def shortestDistance(self, maze, start, destination):\n        m, n = len(maze), len(maze[0])\n        dist = {tuple(start): 0}\n        heap = [(0, start[0], start[1])]\n        while heap:\n            d, i, j = heappop(heap)\n            if [i, j] == destination: return d\n            if d > dist[(i, j)]: continue\n            for di, dj in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                a, b, steps = i, j, 0\n                while 0 <= a + di < m and 0 <= b + dj < n and maze[a + di][b + dj] == 0:\n                    a, b = a + di, b + dj\n                    steps += 1\n                if d + steps < dist.get((a, b), float('inf')):\n                    dist[(a, b)] = d + steps\n                    heappush(heap, (d + steps, a, b))\n        return -1",
   "time": "O(mn log mn)",
   "space": "O(mn)",
   "explain": "Each node is a stopping position. From it, roll in each of four directions counting cells until the wall; run Dijkstra on these roll lengths.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Relax with a queue",
   "tag": "Alternative",
   "code": "class Solution:\n    def shortestDistance(self, maze, start, destination):\n        m, n = len(maze), len(maze[0])\n        dist = {tuple(start): 0}\n        q = deque([tuple(start)])\n        while q:\n            i, j = q.popleft()\n            for di, dj in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                a, b, steps = i, j, 0\n                while 0 <= a + di < m and 0 <= b + dj < n and maze[a + di][b + dj] == 0:\n                    a, b = a + di, b + dj\n                    steps += 1\n                if dist[(i, j)] + steps < dist.get((a, b), float('inf')):\n                    dist[(a, b)] = dist[(i, j)] + steps\n                    q.append((a, b))\n        return dist.get(tuple(destination), -1)",
   "time": "O(mn·k)",
   "space": "O(mn)",
   "explain": "Bellman-Ford style: re-queue a stopping place whenever a shorter distance is found.",
   "frames": [],
   "alt": true
  }
 ]
};
