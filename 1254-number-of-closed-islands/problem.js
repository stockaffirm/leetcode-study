window.PROBLEM = {
 "id": "1254",
 "title": "Number of Closed Islands",
 "level": "Medium",
 "topic": "Graph",
 "question": "A grid has 0 for land and 1 for water. A closed island is a group of connected land cells (4-directional) completely surrounded by water, i.e. not touching the grid border. Return the number of closed islands. Example: the 5×8 sample grid → 2.",
 "why": "Land (0) groups not touching the edge count; the sample grid has 2 such islands.",
 "idea": "An island is closed if none of its land cells touches the border. First flood-fill (turn into water) every land cell reachable from the border. Then each remaining land region is closed: count them with another flood fill.",
 "input": "grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]",
 "output": "2",
 "notes": [],
 "best": "An island is closed if none of its land cells touches the border. First flood-fill (turn into water) every land cell reachable from the border. Then each remaining land region is closed: count them with another flood fill.",
 "variants": [
  {
   "name": "Flood the border land first",
   "code": "class Solution:\n    def closedIsland(self, grid):\n        m, n = len(grid), len(grid[0])\n        def fill(i, j):\n            st = [(i, j)]\n            while st:\n                a, b = st.pop()\n                if 0 <= a < m and 0 <= b < n and grid[a][b] == 0:\n                    grid[a][b] = 1\n                    st += [(a + 1, b), (a - 1, b), (a, b + 1), (a, b - 1)]\n        for i in range(m):\n            for j in range(n):\n                if (i in (0, m - 1) or j in (0, n - 1)) and grid[i][j] == 0:\n                    fill(i, j)\n        res = 0\n        for i in range(m):\n            for j in range(n):\n                if grid[i][j] == 0:\n                    res += 1\n                    fill(i, j)\n        return res",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "An island is closed if none of its land cells touches the border. First flood-fill (turn into water) every land cell reachable from the border. Then each remaining land region is closed: count them with another flood fill.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DFS tracking the border",
   "tag": "Alternative",
   "code": "class Solution:\n    def closedIsland(self, grid):\n        m, n = len(grid), len(grid[0])\n        seen = set()\n        res = 0\n        for i in range(m):\n            for j in range(n):\n                if grid[i][j] == 0 and (i, j) not in seen:\n                    closed = True\n                    st = [(i, j)]\n                    seen.add((i, j))\n                    while st:\n                        a, b = st.pop()\n                        if a in (0, m - 1) or b in (0, n - 1):\n                            closed = False\n                        for x, y in ((a + 1, b), (a - 1, b), (a, b + 1), (a, b - 1)):\n                            if 0 <= x < m and 0 <= y < n and grid[x][y] == 0 and (x, y) not in seen:\n                                seen.add((x, y))\n                                st.append((x, y))\n                    res += closed\n        return res",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Flood each land region and remember whether it ever touched the border.",
   "frames": [],
   "alt": true
  }
 ]
};
