window.PROBLEM = {
 "id": "778",
 "title": "Swim in Rising Water",
 "level": "Hard",
 "topic": "Graph",
 "question": "",
 "why": "The water level rises with time; you can swim to a neighbouring cell once the level reaches that cell's height. Earliest time to get from the top-left to the bottom-right?",
 "idea": "The cost of a route is the HIGHEST cell on it. Run Dijkstra with a min-heap keyed by 'highest cell so far'; the first time the goal is popped, that is the answer.",
 "input": "[[0,2],[1,3]]",
 "output": "3",
 "notes": [],
 "best": "The cost of a route is the HIGHEST cell on it. Run Dijkstra with a min-heap keyed by 'highest cell so far'; the first time the goal is popped, that is the answer.",
 "variants": [
  {
   "name": "Dijkstra on the highest cell passed",
   "code": "class Solution:\n    def swimInWater(self, grid):\n        n = len(grid)\n        pq = [(grid[0][0], 0, 0)]\n        seen = {(0, 0)}\n        while pq:\n            t, r, c = heappop(pq)\n            if (r, c) == (n - 1, n - 1): return t\n            for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                a, b = r + dr, c + dc\n                if 0 <= a < n and 0 <= b < n and (a, b) not in seen:\n                    seen.add((a, b))\n                    heappush(pq, (max(t, grid[a][b]), a, b))",
   "time": "O(n² log n)",
   "space": "O(n²)",
   "explain": "The cost of a route is the HIGHEST cell on it. Run Dijkstra with a min-heap keyed by 'highest cell so far'; the first time the goal is popped, that is the answer.",
   "frames": []
  }
 ]
};
