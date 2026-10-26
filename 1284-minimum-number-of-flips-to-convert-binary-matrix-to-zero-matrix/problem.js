window.PROBLEM = {
 "id": "1284",
 "title": "Minimum Number of Flips to Convert Binary Matrix to Zero Matrix",
 "level": "Hard",
 "topic": "Graph",
 "question": "You are given an m × n board of 0s and 1s (m, n ≤ 3). In one move you choose a cell and flip it AND its 4 neighbours (up, down, left, right, where they exist; 0 ↔ 1). Return the minimum number of moves to make every cell 0, or -1 if it is impossible. Example: [[0,0],[0,1]] → 3 moves.",
 "why": "Flipping a cell also flips its 4 neighbours. Fewest flips to make the whole 0/1 board zeros?",
 "idea": "The board fits in an integer bitmask (at most 9 cells). Each flip is an XOR with a precomputed mask; BFS from the start board finds the fewest flips to reach 0.",
 "input": "[[0,0],[0,1]]",
 "output": "3",
 "notes": [],
 "best": "The board fits in an integer bitmask (at most 9 cells). Each flip is an XOR with a precomputed mask; BFS from the start board finds the fewest flips to reach 0.",
 "variants": [
  {
   "name": "BFS over bitmask boards",
   "code": "class Solution:\n    def minFlips(self, mat):\n        m, n = len(mat), len(mat[0])\n        start = sum(mat[i][j] << (i * n + j) for i in range(m) for j in range(n))\n        masks = []\n        for i in range(m):\n            for j in range(n):\n                mask = 1 << (i * n + j)\n                for di, dj in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                    a, b = i + di, j + dj\n                    if 0 <= a < m and 0 <= b < n: mask |= 1 << (a * n + b)\n                masks.append(mask)\n        q, seen = deque([(start, 0)]), {start}\n        while q:\n            s, d = q.popleft()\n            if s == 0: return d\n            for mk in masks:\n                t = s ^ mk\n                if t not in seen:\n                    seen.add(t)\n                    q.append((t, d + 1))\n        return -1",
   "time": "O(2^(m·n) · m·n)",
   "space": "O(2^(m·n))",
   "explain": "The board fits in an integer bitmask (at most 9 cells). Each flip is an XOR with a precomputed mask; BFS from the start board finds the fewest flips to reach 0.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Every subset of cells to flip",
   "tag": "Brute force",
   "code": "class Solution:\n    def minFlips(self, mat):\n        m, n = len(mat), len(mat[0])\n        best = -1\n        for mask in range(1 << (m * n)):\n            g = [row[:] for row in mat]\n            cnt = 0\n            for k in range(m * n):\n                if mask >> k & 1:\n                    cnt += 1\n                    i, j = divmod(k, n)\n                    for a, b in ((i, j), (i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)):\n                        if 0 <= a < m and 0 <= b < n: g[a][b] ^= 1\n            if not any(map(any, g)) and (best == -1 or cnt < best): best = cnt\n        return best",
   "time": "O(2^(m·n))",
   "space": "O(m·n)",
   "explain": "Flipping a cell twice is pointless, so try every subset of cells to flip once.",
   "frames": [],
   "alt": true
  }
 ]
};
