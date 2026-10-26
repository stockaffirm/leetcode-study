window.PROBLEM = {
 "id": "505",
 "title": "The Maze II",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
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
   "frames": []
  }
 ]
};
