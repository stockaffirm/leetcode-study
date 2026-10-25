window.PROBLEM = {
 "id": "317",
 "title": "Shortest Distance from All Buildings",
 "level": "Hard",
 "topic": "Graph",
 "question": "You are given a grid: 0 is empty land, 1 is a building and 2 is an obstacle (you can walk only over empty land, moving up, down, left or right). You want to build a house on an EMPTY cell so that the total walking distance from the house to ALL buildings is as small as possible. Return that smallest total distance, or -1 if no empty cell can reach every building. Example: [[1,0,2,0,1],[0,0,0,0,0],[0,0,1,0,0]] → building the house in the middle of the second row gives a total of 3 + 3 + 1 = 7 → 7.",
 "why": "Build a house on an empty spot so the total walking distance to ALL buildings is smallest (obstacles block the way).",
 "idea": "BFS from each building across empty cells, adding the distance into a 'total' grid and counting how many buildings reached each cell. The answer is the smallest total among cells every building reached.",
 "input": "[[1,0,2,0,1],[0,0,0,0,0],[0,0,1,0,0]]",
 "output": "7",
 "notes": [],
 "best": "BFS from each building across empty cells, adding the distance into a 'total' grid and counting how many buildings reached each cell. The answer is the smallest total among cells every building reached.",
 "variants": [
  {
   "name": "BFS from every building, add up distances",
   "code": "class Solution:\n    def shortestDistance(self, grid):\n        m, n = len(grid), len(grid[0])\n        total = [[0] * n for _ in range(m)]\n        reach = [[0] * n for _ in range(m)]\n        buildings = 0\n        for i in range(m):\n            for j in range(n):\n                if grid[i][j] == 1:\n                    buildings += 1\n                    q, seen, d = deque([(i, j)]), {(i, j)}, 0\n                    while q:\n                        d += 1\n                        for _ in range(len(q)):\n                            r, c = q.popleft()\n                            for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                                a, b = r + dr, c + dc\n                                if 0 <= a < m and 0 <= b < n and (a, b) not in seen and grid[a][b] == 0:\n                                    seen.add((a, b))\n                                    total[a][b] += d\n                                    reach[a][b] += 1\n                                    q.append((a, b))\n        best = [total[i][j] for i in range(m) for j in range(n) if grid[i][j] == 0 and reach[i][j] == buildings]\n        return min(best) if best else -1",
   "time": "O(buildings · m·n)",
   "space": "O(m·n)",
   "explain": "BFS from each building across empty cells, adding the distance into a 'total' grid and counting how many buildings reached each cell. The answer is the smallest total among cells every building reached.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "BFS from every empty cell",
   "tag": "Brute force",
   "code": "class Solution:\n    def shortestDistance(self, grid):\n        m, n = len(grid), len(grid[0])\n        buildings = sum(row.count(1) for row in grid)\n        best = float('inf')\n        for i in range(m):\n            for j in range(n):\n                if grid[i][j] != 0: continue\n                q, seen, d, found, tot = deque([(i, j)]), {(i, j)}, 0, 0, 0\n                while q:\n                    d += 1\n                    for _ in range(len(q)):\n                        r, c = q.popleft()\n                        for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                            a, b = r + dr, c + dc\n                            if 0 <= a < m and 0 <= b < n and (a, b) not in seen and grid[a][b] != 2:\n                                seen.add((a, b))\n                                if grid[a][b] == 1:\n                                    found += 1\n                                    tot += d\n                                else:\n                                    q.append((a, b))\n                if found == buildings: best = min(best, tot)\n        return best if best != float('inf') else -1",
   "time": "O((m·n)²)",
   "space": "O(m·n)",
   "explain": "From each empty cell search for all buildings and add their distances.",
   "frames": [],
   "alt": true
  }
 ]
};
