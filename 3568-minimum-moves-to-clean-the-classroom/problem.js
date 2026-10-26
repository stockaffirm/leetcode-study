window.PROBLEM = {
 "id": "3568",
 "title": "Minimum Moves to Clean the Classroom",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "A 2×2 room 'S.' / 'XL' with energy 2: right then down collects the litter in 2 moves.",
 "idea": "Number the litter cells (at most 10) and search with BFS (Breadth-First Search) over states (row, column, bitmask of collected litter, current energy). A move costs 1 energy, stepping on 'R' refills to the maximum, stepping on 'L' sets its bit. The first state with all bits set gives the minimum moves; a move with 0 energy left is not allowed.",
 "input": "classroom = [\"S.\",\"XL\"], energy = 2",
 "output": "2",
 "notes": [],
 "best": "Number the litter cells (at most 10) and search with BFS (Breadth-First Search) over states (row, column, bitmask of collected litter, current energy). A move costs 1 energy, stepping on 'R' refills to the maximum, stepping on 'L' sets its bit. The first state with all bits set gives the minimum moves; a move with 0 energy left is not allowed.",
 "variants": [
  {
   "name": "BFS over (position, litter collected, energy)",
   "code": "class Solution:\n    def minMoves(self, classroom, energy):\n        m, n = len(classroom), len(classroom[0])\n        lit = {}\n        start = None\n        for i in range(m):\n            for j in range(n):\n                if classroom[i][j] == 'L':\n                    lit[(i, j)] = len(lit)\n                elif classroom[i][j] == 'S':\n                    start = (i, j)\n        full = (1 << len(lit)) - 1\n        if full == 0:\n            return 0\n        seen = {(start[0], start[1], 0, energy)}\n        q = deque([(start[0], start[1], 0, energy, 0)])\n        while q:\n            r, c, mask, e, d = q.popleft()\n            if e == 0:\n                continue\n            for a, b in ((r + 1, c), (r - 1, c), (r, c + 1), (r, c - 1)):\n                if 0 <= a < m and 0 <= b < n and classroom[a][b] != 'X':\n                    ne = e - 1\n                    nm = mask\n                    if classroom[a][b] == 'R':\n                        ne = energy\n                    elif (a, b) in lit:\n                        nm |= 1 << lit[(a, b)]\n                    if nm == full:\n                        return d + 1\n                    key = (a, b, nm, ne)\n                    if key not in seen:\n                        seen.add(key)\n                        q.append((a, b, nm, ne, d + 1))\n        return -1",
   "time": "O(m·n·2^L·E)",
   "space": "O(m·n·2^L·E)",
   "explain": "Number the litter cells (at most 10) and search with BFS (Breadth-First Search) over states (row, column, bitmask of collected litter, current energy). A move costs 1 energy, stepping on 'R' refills to the maximum, stepping on 'L' sets its bit. The first state with all bits set gives the minimum moves; a move with 0 energy left is not allowed.",
   "frames": []
  }
 ]
};
