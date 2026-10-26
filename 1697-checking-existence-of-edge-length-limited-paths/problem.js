window.PROBLEM = {
 "id": "1697",
 "title": "Checking Existence of Edge Length Limited Paths",
 "level": "Hard",
 "topic": "Union Find / Segment Tree",
 "question": "",
 "why": "Query (0,1,limit 2): the only 0–1 edge has length 2, which is not below 2 → false. Query (0,2,limit 5): 0–1 (2) and 1–2 (4) are both below 5 → true.",
 "idea": "Sort edges by length and queries by limit. Walk the queries in increasing limit order and union every edge shorter than that limit before answering — then 'is there a path' is just 'are they in the same group'.",
 "input": "n=3, edges=[[0,1,2],[1,2,4],[2,0,8],[1,0,16]], queries=[[0,1,2],[0,2,5]]",
 "output": "[false, true]",
 "notes": [],
 "best": "Sort edges by length and queries by limit. Walk the queries in increasing limit order and union every edge shorter than that limit before answering — then 'is there a path' is just 'are they in the same group'.",
 "variants": [
  {
   "name": "Offline queries + Union Find",
   "code": "class Solution:\n    def distanceLimitedPathsExist(self, n, edgeList, queries):\n        parent = list(range(n))\n        def find(x):\n            while parent[x] != x:\n                parent[x] = parent[parent[x]]\n                x = parent[x]\n            return x\n        edgeList.sort(key=lambda e: e[2])\n        res = [False] * len(queries)\n        j = 0\n        for qi in sorted(range(len(queries)), key=lambda i: queries[i][2]):\n            p, q, limit = queries[qi]\n            while j < len(edgeList) and edgeList[j][2] < limit:\n                parent[find(edgeList[j][0])] = find(edgeList[j][1])\n                j += 1\n            res[qi] = find(p) == find(q)\n        return res",
   "time": "O((E+Q) log(E+Q))",
   "space": "O(n + Q)",
   "explain": "Sort edges by length and queries by limit. Walk the queries in increasing limit order and union every edge shorter than that limit before answering — then 'is there a path' is just 'are they in the same group'.",
   "frames": []
  }
 ]
};
