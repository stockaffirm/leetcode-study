window.PROBLEM = {
 "id": "2093",
 "title": "Minimum Cost to Reach City With Discounts",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "Going 0→1→4 costs 4 + 11 = 15. Use the one discount on the 11 toll (now 5): 4 + 5 = 9, the best.",
 "idea": "Run Dijkstra where a state is (city, discounts used so far). From each road you may pay the full toll or, if discounts remain, half of it (rounded down) and move to the next discount level.",
 "input": "n=5, highways=[[0,1,4],[2,1,3],[1,4,11],[3,2,3],[3,4,2]], discounts=1",
 "output": "9",
 "notes": [],
 "best": "Run Dijkstra where a state is (city, discounts used so far). From each road you may pay the full toll or, if discounts remain, half of it (rounded down) and move to the next discount level.",
 "variants": [
  {
   "name": "Dijkstra on (city, discounts used)",
   "code": "class Solution:\n    def minimumCost(self, n, highways, discounts):\n        g = defaultdict(list)\n        for a, b, t in highways:\n            g[a].append((b, t))\n            g[b].append((a, t))\n        dist = {(0, 0): 0}\n        h = [(0, 0, 0)]\n        while h:\n            d, u, k = heappop(h)\n            if u == n - 1:\n                return d\n            if d > dist.get((u, k), inf):\n                continue\n            for v, t in g[u]:\n                for nk, nd in ((k, d + t), (k + 1, d + t // 2)):\n                    if nk <= discounts and nd < dist.get((v, nk), inf):\n                        dist[(v, nk)] = nd\n                        heappush(h, (nd, v, nk))\n        return -1",
   "time": "O(E·D log(E·D))",
   "space": "O(n·D)",
   "explain": "Run Dijkstra where a state is (city, discounts used so far). From each road you may pay the full toll or, if discounts remain, half of it (rounded down) and move to the next discount level.",
   "frames": []
  }
 ]
};
