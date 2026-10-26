window.PROBLEM = {
 "id": "1778",
 "title": "Shortest Path in a Hidden Grid",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "A robot walks in an unknown 3×3 maze; after exploring we know the free cells and the target at the far corner, and the shortest path has 4 moves.",
 "idea": "You can only call master.canMove(d), master.move(d) and master.isTarget(). First explore with DFS (Depth-First Search): from each cell try the four directions, move into new free cells, record their coordinates (relative to the start) and move back afterwards. Then run a BFS (Breadth-First Search) on the recorded cells from the start to the target; return −1 if the target was never found.",
 "input": "hidden grid [[0,0,1],[1,0,0],[0,0,0]], start top-left, target bottom-right",
 "output": "4",
 "notes": [],
 "best": "You can only call master.canMove(d), master.move(d) and master.isTarget(). First explore with DFS (Depth-First Search): from each cell try the four directions, move into new free cells, record their coordinates (relative to the start) and move back afterwards. Then run a BFS (Breadth-First Search) on the recorded cells from the start to the target; return −1 if the target was never found.",
 "variants": [
  {
   "name": "DFS to map the grid through the robot, then BFS",
   "code": "class Solution:\n    def findShortestPath(self, master):\n        dirs = {'U': (-1, 0), 'D': (1, 0), 'L': (0, -1), 'R': (0, 1)}\n        back = {'U': 'D', 'D': 'U', 'L': 'R', 'R': 'L'}\n        free = {(0, 0)}\n        target = [None]\n        def dfs(x, y):\n            if master.isTarget():\n                target[0] = (x, y)\n            for d, (dx, dy) in dirs.items():\n                nx, ny = x + dx, y + dy\n                if (nx, ny) not in free and master.canMove(d):\n                    free.add((nx, ny))\n                    master.move(d)\n                    dfs(nx, ny)\n                    master.move(back[d])\n        dfs(0, 0)\n        if target[0] is None:\n            return -1\n        q = deque([((0, 0), 0)])\n        seen = {(0, 0)}\n        while q:\n            (x, y), dist = q.popleft()\n            if (x, y) == target[0]:\n                return dist\n            for dx, dy in dirs.values():\n                nxt = (x + dx, y + dy)\n                if nxt in free and nxt not in seen:\n                    seen.add(nxt)\n                    q.append((nxt, dist + 1))\n        return -1",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "You can only call master.canMove(d), master.move(d) and master.isTarget(). First explore with DFS (Depth-First Search): from each cell try the four directions, move into new free cells, record their coordinates (relative to the start) and move back afterwards. Then run a BFS (Breadth-First Search) on the recorded cells from the start to the target; return −1 if the target was never found.",
   "frames": []
  }
 ]
};
