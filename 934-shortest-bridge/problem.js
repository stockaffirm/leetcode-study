window.PROBLEM = {
 "id": "934",
 "title": "Shortest Bridge",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "A grid has exactly two islands. What is the fewest water cells to flip so they become one island?",
 "idea": "DFS to find all cells of the first island and put them in a queue; then BFS outward through water, layer by layer. The layer where you first touch the second island is the answer.",
 "input": "[[0,1,0],[0,0,0],[0,0,1]]",
 "output": "2",
 "notes": [],
 "best": "DFS to find all cells of the first island and put them in a queue; then BFS outward through water, layer by layer. The layer where you first touch the second island is the answer.",
 "variants": [
  {
   "name": "DFS one island, BFS outward",
   "code": "class Solution:\n    def shortestBridge(self, grid):\n        n = len(grid)\n        q, seen = deque(), set()\n        def dfs(r, c):\n            if not (0 <= r < n and 0 <= c < n) or (r, c) in seen or grid[r][c] != 1: return\n            seen.add((r, c))\n            q.append((r, c, 0))\n            for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)): dfs(r + dr, c + dc)\n        found = False\n        for i in range(n):\n            for j in range(n):\n                if grid[i][j] == 1 and not found:\n                    dfs(i, j)\n                    found = True\n        while q:\n            r, c, d = q.popleft()\n            for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                a, b = r + dr, c + dc\n                if 0 <= a < n and 0 <= b < n and (a, b) not in seen:\n                    if grid[a][b] == 1: return d\n                    seen.add((a, b))\n                    q.append((a, b, d + 1))",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "DFS to find all cells of the first island and put them in a queue; then BFS outward through water, layer by layer. The layer where you first touch the second island is the answer.",
   "frames": []
  }
 ]
};
