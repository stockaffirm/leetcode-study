window.PROBLEM = {
 "id": "286",
 "title": "Walls and Gates",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "A grid has walls (−1), gates (0) and empty rooms (a huge number). Fill every empty room with its distance to the nearest gate (unchanged if no gate can be reached).",
 "idea": "Start a BFS from ALL gates at once. Each time you reach an empty room for the first time, its distance is the current step count.",
 "input": "4×4 grid with gates and walls",
 "output": "rooms filled with distances",
 "notes": [],
 "best": "Start a BFS from ALL gates at once. Each time you reach an empty room for the first time, its distance is the current step count.",
 "variants": [
  {
   "name": "Multi-source BFS from the gates",
   "code": "class Solution:\n    def wallsAndGates(self, rooms):\n        INF = 2147483647\n        m, n = len(rooms), len(rooms[0])\n        q = deque((i, j) for i in range(m) for j in range(n) if rooms[i][j] == 0)\n        while q:\n            r, c = q.popleft()\n            for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                a, b = r + dr, c + dc\n                if 0 <= a < m and 0 <= b < n and rooms[a][b] == INF:\n                    rooms[a][b] = rooms[r][c] + 1\n                    q.append((a, b))",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Start a BFS from ALL gates at once. Each time you reach an empty room for the first time, its distance is the current step count.",
   "frames": []
  }
 ]
};
