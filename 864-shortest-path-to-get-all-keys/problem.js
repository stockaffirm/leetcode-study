window.PROBLEM = {
 "id": "864",
 "title": "Shortest Path to Get All Keys",
 "level": "Hard",
 "topic": "Graph",
 "question": "You are given a grid: '@' is the start, '.' an empty cell, '#' a wall, lowercase letters a, b, … are keys and the matching capital letters A, B, … are locks. You can walk up, down, left or right; you pick up a key when you step on it, and you can step on a lock only if you hold its key. Return the fewest steps needed to collect ALL the keys (there are k keys, using the first k letters), or -1 if impossible. Example: ['@.a..','###.#','b.A.B'] → 8.",
 "why": "A grid has walls, locks (A, B…) and keys (a, b…). Fewest steps from the start to collect all keys?",
 "idea": "Where you stand is not the whole state — which keys you hold matters. BFS over (row, column, set of keys as a bitmask); a lock cell is passable only if you hold its key.",
 "input": "[\"@.a..\",\"###.#\",\"b.A.B\"]",
 "output": "8",
 "notes": [],
 "best": "Where you stand is not the whole state — which keys you hold matters. BFS over (row, column, set of keys as a bitmask); a lock cell is passable only if you hold its key.",
 "variants": [
  {
   "name": "BFS over (cell, keys held)",
   "code": "class Solution:\n    def shortestPathAllKeys(self, grid):\n        m, n = len(grid), len(grid[0])\n        nkeys = 0\n        for i in range(m):\n            for j in range(n):\n                ch = grid[i][j]\n                if ch == '@': si, sj = i, j\n                elif ch.islower(): nkeys += 1\n        full = (1 << nkeys) - 1\n        q, seen, steps = deque([(si, sj, 0)]), {(si, sj, 0)}, 0\n        while q:\n            for _ in range(len(q)):\n                r, c, keys = q.popleft()\n                if keys == full: return steps\n                for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                    a, b = r + dr, c + dc\n                    if not (0 <= a < m and 0 <= b < n): continue\n                    ch = grid[a][b]\n                    if ch == '#': continue\n                    nk = keys\n                    if ch.islower(): nk |= 1 << (ord(ch) - 97)\n                    elif ch.isupper() and not keys >> (ord(ch) - 65) & 1: continue\n                    if (a, b, nk) not in seen:\n                        seen.add((a, b, nk))\n                        q.append((a, b, nk))\n            steps += 1\n        return -1",
   "time": "O(m·n·2^k)",
   "space": "O(m·n·2^k)",
   "explain": "Where you stand is not the whole state — which keys you hold matters. BFS over (row, column, set of keys as a bitmask); a lock cell is passable only if you hold its key.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "BFS with a distance table",
   "tag": "Alternative",
   "code": "class Solution:\n    def shortestPathAllKeys(self, grid):\n        m, n = len(grid), len(grid[0])\n        nkeys = 0\n        for i in range(m):\n            for j in range(n):\n                ch = grid[i][j]\n                if ch == '@': si, sj = i, j\n                elif ch.islower(): nkeys += 1\n        full = (1 << nkeys) - 1\n        dist = {(si, sj, 0): 0}\n        q = deque([(si, sj, 0)])\n        while q:\n            r, c, keys = q.popleft()\n            d = dist[(r, c, keys)]\n            if keys == full: return d\n            for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                a, b = r + dr, c + dc\n                if not (0 <= a < m and 0 <= b < n): continue\n                ch = grid[a][b]\n                if ch == '#': continue\n                nk = keys\n                if ch.islower(): nk |= 1 << (ord(ch) - 97)\n                elif ch.isupper() and not keys >> (ord(ch) - 65) & 1: continue\n                if (a, b, nk) not in dist:\n                    dist[(a, b, nk)] = d + 1\n                    q.append((a, b, nk))\n        return -1",
   "time": "O(m·n·2^k)",
   "space": "O(m·n·2^k)",
   "explain": "Same search but each state's distance is stored in a dictionary instead of counting levels.",
   "frames": [],
   "alt": true
  }
 ]
};
