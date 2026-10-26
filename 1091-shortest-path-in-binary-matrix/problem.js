window.PROBLEM = {
 "id": "1091",
 "title": "Shortest Path in Binary Matrix",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "A grid of 0 (open) and 1 (blocked). Walk from the top-left to the bottom-right, moving in 8 directions through 0s. How many squares is the shortest path?",
 "idea": "Shortest path with equal step cost = BFS. Explore all 8 neighbours, mark squares as used the moment you queue them, and carry the path length with each square.",
 "input": "[[0,0,0],[1,1,0],[1,1,0]]",
 "output": "4",
 "notes": [],
 "best": "Shortest path with equal step cost = BFS. Explore all 8 neighbours, mark squares as used the moment you queue them, and carry the path length with each square.",
 "variants": [
  {
   "name": "BFS with 8 directions",
   "code": "class Solution:\n    def shortestPathBinaryMatrix(self, grid):\n        n = len(grid)\n        if grid[0][0] or grid[n - 1][n - 1]: return -1\n        q = deque([(0, 0, 1)])\n        grid[0][0] = 1\n        while q:\n            r, c, d = q.popleft()\n            if r == n - 1 and c == n - 1: return d\n            for dr in (-1, 0, 1):\n                for dc in (-1, 0, 1):\n                    a, b = r + dr, c + dc\n                    if 0 <= a < n and 0 <= b < n and grid[a][b] == 0:\n                        grid[a][b] = 1\n                        q.append((a, b, d + 1))\n        return -1",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "Shortest path with equal step cost = BFS. Explore all 8 neighbours, mark squares as used the moment you queue them, and carry the path length with each square.",
   "frames": []
  }
 ]
};
