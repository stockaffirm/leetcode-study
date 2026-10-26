window.PROBLEM = {
 "id": "959",
 "title": "Regions Cut By Slashes",
 "level": "Medium",
 "topic": "Union Find / Segment Tree",
 "question": "An n×n grid is made of 1×1 squares, each containing '/', '\\' or a blank space; the slashes cut the big square into regions. Return the number of regions. Example: [' /', '/ '] → 2.",
 "why": "A grid whose cells contain '/', '\\' or a space cuts a square into regions. Count the regions.",
 "idea": "Split every cell into 4 triangles (top, right, bottom, left). A slash joins two pairs of triangles, a space joins all four; neighbouring cells join across shared sides. Count union-find groups.",
 "input": "[' /', '/ ']",
 "output": "2",
 "notes": [],
 "best": "Split every cell into 4 triangles (top, right, bottom, left). A slash joins two pairs of triangles, a space joins all four; neighbouring cells join across shared sides. Count union-find groups.",
 "variants": [
  {
   "name": "Union-Find on cell quarters",
   "code": "class Solution:\n    def regionsBySlashes(self, grid):\n        n = len(grid)\n        parent = list(range(4 * n * n))\n        def find(x):\n            while parent[x] != x:\n                parent[x] = parent[parent[x]]\n                x = parent[x]\n            return x\n        def union(a, b): parent[find(a)] = find(b)\n        for i in range(n):\n            for j in range(n):\n                base = 4 * (i * n + j)\n                c = grid[i][j]\n                if c == '/':\n                    union(base, base + 3)\n                    union(base + 1, base + 2)\n                elif c == '\\\\':\n                    union(base, base + 1)\n                    union(base + 2, base + 3)\n                else:\n                    for k in (1, 2, 3): union(base, base + k)\n                if i + 1 < n: union(base + 2, 4 * ((i + 1) * n + j))\n                if j + 1 < n: union(base + 1, 4 * (i * n + j + 1) + 3)\n        return len({find(x) for x in range(4 * n * n)})",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "Split every cell into 4 triangles (top, right, bottom, left). A slash joins two pairs of triangles, a space joins all four; neighbouring cells join across shared sides. Count union-find groups.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Flood fill on a 3× grid",
   "tag": "Alternative",
   "code": "class Solution:\n    def regionsBySlashes(self, grid):\n        n = len(grid)\n        g = [[0] * (3 * n) for _ in range(3 * n)]\n        for i in range(n):\n            for j in range(n):\n                if grid[i][j] == '/':\n                    for k in range(3): g[3 * i + k][3 * j + 2 - k] = 1\n                elif grid[i][j] == '\\\\':\n                    for k in range(3): g[3 * i + k][3 * j + k] = 1\n        regions = 0\n        for i in range(3 * n):\n            for j in range(3 * n):\n                if g[i][j] == 0:\n                    regions += 1\n                    st = [(i, j)]\n                    g[i][j] = 1\n                    while st:\n                        x, y = st.pop()\n                        for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                            a, b = x + dx, y + dy\n                            if 0 <= a < 3 * n and 0 <= b < 3 * n and g[a][b] == 0:\n                                g[a][b] = 1\n                                st.append((a, b))\n        return regions",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "Draw every slash as a diagonal of three cells in a 3n×3n grid and count the empty connected areas.",
   "frames": [],
   "alt": true
  }
 ]
};
