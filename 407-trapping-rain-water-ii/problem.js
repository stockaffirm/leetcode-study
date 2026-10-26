window.PROBLEM = {
 "id": "407",
 "title": "Trapping Rain Water II",
 "level": "Hard",
 "topic": "Heap",
 "question": "",
 "why": "The terrain holds 4 units of water in its low spots.",
 "idea": "Water can only escape over the border. Put all border cells in a min-heap and always process the lowest one. Each unvisited neighbour holds max(0, current wall − its height) water, and then joins the heap with height max(wall, own height).",
 "input": "heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]",
 "output": "4",
 "notes": [],
 "best": "Water can only escape over the border. Put all border cells in a min-heap and always process the lowest one. Each unvisited neighbour holds max(0, current wall − its height) water, and then joins the heap with height max(wall, own height).",
 "variants": [
  {
   "name": "Min-heap flood from the border",
   "code": "class Solution:\n    def trapRainWater(self, heightMap):\n        m, n = len(heightMap), len(heightMap[0])\n        if m < 3 or n < 3:\n            return 0\n        h = []\n        seen = [[False] * n for _ in range(m)]\n        for i in range(m):\n            for j in range(n):\n                if i in (0, m - 1) or j in (0, n - 1):\n                    heappush(h, (heightMap[i][j], i, j))\n                    seen[i][j] = True\n        water = 0\n        while h:\n            height, i, j = heappop(h)\n            for a, b in ((i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)):\n                if 0 <= a < m and 0 <= b < n and not seen[a][b]:\n                    seen[a][b] = True\n                    water += max(0, height - heightMap[a][b])\n                    heappush(h, (max(height, heightMap[a][b]), a, b))\n        return water",
   "time": "O(m·n log(m·n))",
   "space": "O(m·n)",
   "explain": "Water can only escape over the border. Put all border cells in a min-heap and always process the lowest one. Each unvisited neighbour holds max(0, current wall − its height) water, and then joins the heap with height max(wall, own height).",
   "frames": []
  }
 ]
};
