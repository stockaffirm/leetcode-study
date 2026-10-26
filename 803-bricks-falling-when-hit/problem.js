window.PROBLEM = {
 "id": "803",
 "title": "Bricks Falling When Hit",
 "level": "Hard",
 "topic": "Union Find / Segment Tree",
 "question": "A grid of bricks (1) is stable if each brick is connected to the top row or to a stable neighbour (up/down/left/right). Apply hits one at a time: a hit removes a brick, and every brick that becomes unstable falls. For each hit return how many bricks fall. Example: [[1,0,0,0],[1,1,1,0]], hits [[1,0]] → [2].",
 "why": "grid [[1,0,0,0],[1,1,1,0]], hit (1,0): two bricks (the rest of the bottom row) lose their only support → 2.",
 "idea": "Deleting is hard, adding is easy: process the hits in reverse. First remove all hit bricks and union the remaining bricks, with a virtual 'roof' node connected to row 0. Then add the hits back in reverse order; when a brick is restored, the number of bricks attached to the roof grows by (new roof size − old roof size − 1), which is how many bricks that hit made fall.",
 "input": "grid = [[1,0,0,0],[1,1,1,0]], hits = [[1,0]]",
 "output": "[2]",
 "notes": [],
 "best": "Deleting is hard, adding is easy: process the hits in reverse. First remove all hit bricks and union the remaining bricks, with a virtual 'roof' node connected to row 0. Then add the hits back in reverse order; when a brick is restored, the number of bricks attached to the roof grows by (new roof size − old roof size − 1), which is how many bricks that hit made fall.",
 "variants": [
  {
   "name": "Reverse time with Union-Find",
   "code": "class Solution:\n    def hitBricks(self, grid, hits):\n        m, n = len(grid), len(grid[0])\n        g = [row[:] for row in grid]\n        for r, c in hits:\n            g[r][c] -= 1\n        roof = m * n\n        p = list(range(m * n + 1))\n        size = [1] * (m * n + 1)\n        def find(x):\n            while p[x] != x:\n                p[x] = p[p[x]]\n                x = p[x]\n            return x\n        def union(a, b):\n            a, b = find(a), find(b)\n            if a != b:\n                p[a] = b\n                size[b] += size[a]\n        def link(r, c):\n            if r == 0:\n                union(r * n + c, roof)\n            for a, b in ((r + 1, c), (r - 1, c), (r, c + 1), (r, c - 1)):\n                if 0 <= a < m and 0 <= b < n and g[a][b] == 1:\n                    union(r * n + c, a * n + b)\n        for r in range(m):\n            for c in range(n):\n                if g[r][c] == 1:\n                    link(r, c)\n        res = [0] * len(hits)\n        for i in range(len(hits) - 1, -1, -1):\n            r, c = hits[i]\n            if grid[r][c] == 0:\n                continue\n            before = size[find(roof)]\n            g[r][c] = 1\n            link(r, c)\n            after = size[find(roof)]\n            res[i] = max(0, after - before - 1)\n        return res",
   "time": "O((m·n + h) α)",
   "space": "O(m·n)",
   "explain": "Deleting is hard, adding is easy: process the hits in reverse. First remove all hit bricks and union the remaining bricks, with a virtual 'roof' node connected to row 0. Then add the hits back in reverse order; when a brick is restored, the number of bricks attached to the roof grows by (new roof size − old roof size − 1), which is how many bricks that hit made fall.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Simulate every hit",
   "tag": "Brute force",
   "code": "class Solution:\n    def hitBricks(self, grid, hits):\n        m, n = len(grid), len(grid[0])\n        g = [row[:] for row in grid]\n        def stable():\n            seen = set()\n            st = [(0, j) for j in range(n) if g[0][j] == 1]\n            seen.update(st)\n            while st:\n                a, b = st.pop()\n                for x, y in ((a + 1, b), (a - 1, b), (a, b + 1), (a, b - 1)):\n                    if 0 <= x < m and 0 <= y < n and g[x][y] == 1 and (x, y) not in seen:\n                        seen.add((x, y))\n                        st.append((x, y))\n            return seen\n        res = []\n        cur = len(stable())\n        for r, c in hits:\n            if g[r][c] == 0:\n                res.append(0)\n                continue\n            g[r][c] = 0\n            now = len(stable())\n            res.append(cur - now - 1)\n            cur = now\n        return res",
   "time": "O(h·m·n)",
   "space": "O(m·n)",
   "explain": "Apply each hit, then flood-fill from the top row to find the bricks still attached; the difference is how many fell.",
   "frames": [],
   "alt": true
  }
 ]
};
