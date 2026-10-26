window.PROBLEM = {
 "id": "749",
 "title": "Contain Virus",
 "level": "Hard",
 "topic": "Matrix",
 "question": "",
 "why": "Two infected columns in a 4×8 grid: quarantining each costs 5 walls, total 10.",
 "idea": "Simulate night by night. Find every connected infected region (4-directional) and, for each, the set of uninfected cells it could spread to (its frontier) and the number of walls needed (region cell – uninfected neighbour pairs). Wall off the region with the biggest frontier (mark it quarantined and add its walls); every other region spreads into its frontier. Stop when no region threatens any cell.",
 "input": "isInfected = [[0,1,0,0,0,0,0,1],[0,1,0,0,0,0,0,1],[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0]]",
 "output": "10",
 "notes": [],
 "best": "Simulate night by night. Find every connected infected region (4-directional) and, for each, the set of uninfected cells it could spread to (its frontier) and the number of walls needed (region cell – uninfected neighbour pairs). Wall off the region with the biggest frontier (mark it quarantined and add its walls); every other region spreads into its frontier. Stop when no region threatens any cell.",
 "variants": [
  {
   "name": "Each night wall off the region that threatens the most",
   "code": "class Solution:\n    def containVirus(self, isInfected):\n        g = isInfected\n        m, n = len(g), len(g[0])\n        walls = 0\n        while True:\n            seen = set()\n            regions = []\n            for i in range(m):\n                for j in range(n):\n                    if g[i][j] == 1 and (i, j) not in seen:\n                        cells, front, perim = [], set(), 0\n                        seen.add((i, j))\n                        q = deque([(i, j)])\n                        while q:\n                            a, b = q.popleft()\n                            cells.append((a, b))\n                            for x, y in ((a + 1, b), (a - 1, b), (a, b + 1), (a, b - 1)):\n                                if 0 <= x < m and 0 <= y < n:\n                                    if g[x][y] == 1 and (x, y) not in seen:\n                                        seen.add((x, y))\n                                        q.append((x, y))\n                                    elif g[x][y] == 0:\n                                        front.add((x, y))\n                                        perim += 1\n                        regions.append((cells, front, perim))\n            if not regions:\n                break\n            k = max(range(len(regions)), key=lambda t: len(regions[t][1]))\n            if not regions[k][1]:\n                break\n            walls += regions[k][2]\n            for a, b in regions[k][0]:\n                g[a][b] = -1\n            for t, (cells, front, perim) in enumerate(regions):\n                if t != k:\n                    for a, b in front:\n                        g[a][b] = 1\n        return walls",
   "time": "O((m·n)²)",
   "space": "O(m·n)",
   "explain": "Simulate night by night. Find every connected infected region (4-directional) and, for each, the set of uninfected cells it could spread to (its frontier) and the number of walls needed (region cell – uninfected neighbour pairs). Wall off the region with the biggest frontier (mark it quarantined and add its walls); every other region spreads into its frontier. Stop when no region threatens any cell.",
   "frames": []
  }
 ]
};
