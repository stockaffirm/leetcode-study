window.PROBLEM = {
 "id": "749",
 "title": "Contain Virus",
 "level": "Hard",
 "topic": "Matrix",
 "question": "A grid has 1 for an infected cell and 0 for a healthy one. Every night the virus spreads from each infected region (4-directionally connected cells) to all healthy neighbouring cells, except that you may first build walls around exactly ONE region: the one that would infect the most healthy cells; walls go on every border between that region and healthy cells and the region then stays contained forever. Return the total number of walls used. Example: the 4×8 sample grid → 10.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Iterative DFS for each region",
   "tag": "Alternative",
   "code": "class Solution:\n    def containVirus(self, isInfected):\n        g = isInfected\n        m, n = len(g), len(g[0])\n        total = 0\n        while True:\n            visited = [[False] * n for _ in range(m)]\n            info = []\n            for i in range(m):\n                for j in range(n):\n                    if g[i][j] == 1 and not visited[i][j]:\n                        visited[i][j] = True\n                        st = [(i, j)]\n                        cells, front, walls = [], set(), 0\n                        while st:\n                            a, b = st.pop()\n                            cells.append((a, b))\n                            for x, y in ((a - 1, b), (a + 1, b), (a, b - 1), (a, b + 1)):\n                                if 0 <= x < m and 0 <= y < n:\n                                    if g[x][y] == 0:\n                                        walls += 1\n                                        front.add((x, y))\n                                    elif g[x][y] == 1 and not visited[x][y]:\n                                        visited[x][y] = True\n                                        st.append((x, y))\n                        info.append((len(front), walls, cells, front))\n            if not info:\n                break\n            best = max(range(len(info)), key=lambda t: info[t][0])\n            if info[best][0] == 0:\n                break\n            total += info[best][1]\n            for a, b in info[best][2]:\n                g[a][b] = -1\n            for t, item in enumerate(info):\n                if t != best:\n                    for a, b in item[3]:\n                        g[a][b] = 1\n        return total",
   "time": "O((m·n)²)",
   "space": "O(m·n)",
   "explain": "Same night-by-night simulation, with a stack to explore each region and a per-region wall counter.",
   "frames": [],
   "alt": true
  }
 ]
};
