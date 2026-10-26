window.PROBLEM = {
 "id": "3015",
 "title": "Count the Number of Houses at a Certain Distance I",
 "level": "Medium",
 "topic": "Graph",
 "question": "Houses 1…n lie on a street (house i is next to i+1), and there is an extra street between houses x and y. For every k from 1 to n return the number of ordered pairs of houses whose shortest distance is exactly k. Example: n=5, x=2, y=4 → [10,8,2,0,0].",
 "why": "n=5, shortcut 2–4: 10 ordered pairs at distance 1, 8 at distance 2, 2 at distance 3 → [10,8,2,0,0].",
 "idea": "Houses 1..n lie on a line plus one extra street between x and y. The distance between i < j is the smaller of the direct walk j − i and the two routes using the shortcut (i → x, cross, y → j or i → y, cross, x → j). Count each unordered pair twice.",
 "input": "n = 5, x = 2, y = 4",
 "output": "[10, 8, 2, 0, 0]",
 "notes": [],
 "best": "Houses 1..n lie on a line plus one extra street between x and y. The distance between i < j is the smaller of the direct walk j − i and the two routes using the shortcut (i → x, cross, y → j or i → y, cross, x → j). Count each unordered pair twice.",
 "variants": [
  {
   "name": "Shortest path of every pair with the shortcut",
   "code": "class Solution:\n    def countOfPairs(self, n, x, y):\n        res = [0] * n\n        for i in range(1, n + 1):\n            for j in range(i + 1, n + 1):\n                d = min(j - i, abs(x - i) + 1 + abs(y - j), abs(y - i) + 1 + abs(x - j))\n                res[d - 1] += 2\n        return res",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Houses 1..n lie on a line plus one extra street between x and y. The distance between i < j is the smaller of the direct walk j − i and the two routes using the shortcut (i → x, cross, y → j or i → y, cross, x → j). Count each unordered pair twice.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "BFS from every house",
   "tag": "Alternative",
   "code": "class Solution:\n    def countOfPairs(self, n, x, y):\n        g = [[] for _ in range(n + 1)]\n        for i in range(1, n):\n            g[i].append(i + 1)\n            g[i + 1].append(i)\n        g[x].append(y)\n        g[y].append(x)\n        res = [0] * n\n        for s in range(1, n + 1):\n            d = {s: 0}\n            q = deque([s])\n            while q:\n                u = q.popleft()\n                for v in g[u]:\n                    if v not in d:\n                        d[v] = d[u] + 1\n                        q.append(v)\n            for t, dist in d.items():\n                if t != s:\n                    res[dist - 1] += 1\n        return res",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Run a BFS (Breadth-First Search) on the graph (line plus shortcut) from each house and count the distances.",
   "frames": [],
   "alt": true
  }
 ]
};
