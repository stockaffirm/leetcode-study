window.PROBLEM = {
 "id": "1254",
 "title": "Number of Closed Islands",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
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
   "frames": []
  }
 ]
};
