window.PROBLEM = {
 "id": "3552",
 "title": "Grid Teleportation Traversal",
 "level": "Medium",
 "topic": "Graph",
 "question": "A grid has '.', '#' (wall) and capital letters (portals). Walk from the top-left to the bottom-right moving up/down/left/right (cost 1 each). The first time you step on a portal letter you may teleport free of charge to any other cell with the same letter; each letter can be used once. Return the fewest moves, or −1. Example: ['A..','.A.','...'] → 2.",
 "why": "['A..','.A.','...']: step onto an A, jump free to the other A and walk the rest → 2 moves.",
 "idea": "Moves cost 1 and teleports cost 0, so use a 0-1 BFS with a deque. The first time any cell of letter c is reached, that is the cheapest moment to use portal c: push all other cells of c at the same distance to the front of the queue and mark c as used. Walk the four directions otherwise.",
 "input": "matrix = [\"A..\",\".A.\",\"...\"]",
 "output": "2",
 "notes": [],
 "best": "Moves cost 1 and teleports cost 0, so use a 0-1 BFS with a deque. The first time any cell of letter c is reached, that is the cheapest moment to use portal c: push all other cells of c at the same distance to the front of the queue and mark c as used. Walk the four directions otherwise.",
 "variants": [
  {
   "name": "0-1 BFS: portals cost nothing, once per letter",
   "code": "class Solution:\n    def minMoves(self, matrix):\n        m, n = len(matrix), len(matrix[0])\n        pos = defaultdict(list)\n        for i in range(m):\n            for j in range(n):\n                if matrix[i][j].isalpha():\n                    pos[matrix[i][j]].append((i, j))\n        dist = [[-1] * n for _ in range(m)]\n        dist[0][0] = 0\n        q = deque([(0, 0)])\n        used = set()\n        while q:\n            i, j = q.popleft()\n            d = dist[i][j]\n            ch = matrix[i][j]\n            if ch.isalpha() and ch not in used:\n                used.add(ch)\n                for a, b in pos[ch]:\n                    if dist[a][b] < 0:\n                        dist[a][b] = d\n                        q.appendleft((a, b))\n            for a, b in ((i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)):\n                if 0 <= a < m and 0 <= b < n and matrix[a][b] != '#' and dist[a][b] < 0:\n                    dist[a][b] = d + 1\n                    q.append((a, b))\n        return dist[m - 1][n - 1]",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Moves cost 1 and teleports cost 0, so use a 0-1 BFS with a deque. The first time any cell of letter c is reached, that is the cheapest moment to use portal c: push all other cells of c at the same distance to the front of the queue and mark c as used. Walk the four directions otherwise.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Dijkstra with a heap",
   "tag": "Alternative",
   "code": "class Solution:\n    def minMoves(self, matrix):\n        m, n = len(matrix), len(matrix[0])\n        pos = defaultdict(list)\n        for i in range(m):\n            for j in range(n):\n                if matrix[i][j].isalpha():\n                    pos[matrix[i][j]].append((i, j))\n        INF = float('inf')\n        dist = [[INF] * n for _ in range(m)]\n        dist[0][0] = 0\n        pq = [(0, 0, 0)]\n        used = set()\n        while pq:\n            d, i, j = heappop(pq)\n            if d > dist[i][j]:\n                continue\n            ch = matrix[i][j]\n            if ch.isalpha() and ch not in used:\n                used.add(ch)\n                for a, b in pos[ch]:\n                    if d < dist[a][b]:\n                        dist[a][b] = d\n                        heappush(pq, (d, a, b))\n            for a, b in ((i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)):\n                if 0 <= a < m and 0 <= b < n and matrix[a][b] != '#' and d + 1 < dist[a][b]:\n                    dist[a][b] = d + 1\n                    heappush(pq, (d + 1, a, b))\n        return dist[m - 1][n - 1] if dist[m - 1][n - 1] < INF else -1",
   "time": "O(m·n log)",
   "space": "O(m·n)",
   "explain": "Treat teleports as zero-weight edges in a Dijkstra search; each portal letter is used the first time it is reached.",
   "frames": [],
   "alt": true
  }
 ]
};
