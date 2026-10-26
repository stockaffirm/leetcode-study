window.PROBLEM = {
 "id": "1284",
 "title": "Minimum Number of Flips to Convert Binary Matrix to Zero Matrix",
 "level": "Hard",
 "topic": "Graph",
 "question": "",
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
   "frames": []
  }
 ]
};
