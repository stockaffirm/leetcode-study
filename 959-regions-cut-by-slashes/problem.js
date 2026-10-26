window.PROBLEM = {
 "id": "959",
 "title": "Regions Cut By Slashes",
 "level": "Medium",
 "topic": "Union Find / Segment Tree",
 "question": "",
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
   "frames": []
  }
 ]
};
