window.PROBLEM = {
 "id": "3607",
 "title": "Power Grid Maintenance",
 "level": "Medium",
 "topic": "Union Find / Segment Tree",
 "question": "",
 "why": "Stations 1-5 in a line; station 3 asks → itself. Station 1 goes offline; asking 1 returns the smallest online in its grid → 2.",
 "idea": "Connected stations form a grid: union them once. Keep each grid's stations in a min-heap. For a query on an offline station, pop offline stations from the top of its grid's heap (lazy deletion) and answer with the top, or −1 if the heap empties.",
 "input": "c = 5, connections = [[1,2],[2,3],[3,4],[4,5]], queries = [[1,3],[2,1],[1,1],[2,2],[1,2]]",
 "output": "[3, 2, 3]",
 "notes": [],
 "best": "Connected stations form a grid: union them once. Keep each grid's stations in a min-heap. For a query on an offline station, pop offline stations from the top of its grid's heap (lazy deletion) and answer with the top, or −1 if the heap empties.",
 "variants": [
  {
   "name": "Union-Find plus a lazy-delete min-heap per grid",
   "code": "class Solution:\n    def processQueries(self, c, connections, queries):\n        p = list(range(c + 1))\n        def find(x):\n            while p[x] != x:\n                p[x] = p[p[x]]\n                x = p[x]\n            return x\n        for a, b in connections:\n            p[find(a)] = find(b)\n        heaps = defaultdict(list)\n        for i in range(1, c + 1):\n            heaps[find(i)].append(i)\n        off = [False] * (c + 1)\n        res = []\n        for t, x in queries:\n            if t == 2:\n                off[x] = True\n            elif not off[x]:\n                res.append(x)\n            else:\n                h = heaps[find(x)]\n                while h and off[h[0]]:\n                    heappop(h)\n                res.append(h[0] if h else -1)\n        return res",
   "time": "O((c + q) α + c log c)",
   "space": "O(c)",
   "explain": "Connected stations form a grid: union them once. Keep each grid's stations in a min-heap. For a query on an offline station, pop offline stations from the top of its grid's heap (lazy deletion) and answer with the top, or −1 if the heap empties.",
   "frames": []
  }
 ]
};
