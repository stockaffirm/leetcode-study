window.PROBLEM = {
 "id": "1765",
 "title": "Map of Highest Peak",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "isWater [[0,1],[0,0]] → heights [[1,0],[2,1]].",
 "idea": "Water cells have height 0 and neighbouring cells differ by at most 1, so the best height of a land cell is its distance to the nearest water. Start a BFS (Breadth-First Search) from all water cells at once.",
 "input": "isWater = [[0,1],[0,0]]",
 "output": "[[1, 0], [2, 1]]",
 "notes": [],
 "best": "Water cells have height 0 and neighbouring cells differ by at most 1, so the best height of a land cell is its distance to the nearest water. Start a BFS (Breadth-First Search) from all water cells at once.",
 "variants": [
  {
   "name": "Multi-source BFS from the water cells",
   "code": "class Solution:\n    def highestPeak(self, isWater):\n        m, n = len(isWater), len(isWater[0])\n        h = [[-1] * n for _ in range(m)]\n        q = deque()\n        for i in range(m):\n            for j in range(n):\n                if isWater[i][j]:\n                    h[i][j] = 0\n                    q.append((i, j))\n        while q:\n            i, j = q.popleft()\n            for a, b in ((i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)):\n                if 0 <= a < m and 0 <= b < n and h[a][b] < 0:\n                    h[a][b] = h[i][j] + 1\n                    q.append((a, b))\n        return h",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Water cells have height 0 and neighbouring cells differ by at most 1, so the best height of a land cell is its distance to the nearest water. Start a BFS (Breadth-First Search) from all water cells at once.",
   "frames": []
  }
 ]
};
