window.PROBLEM = {
 "id": "399",
 "title": "Evaluate Division",
 "level": "Medium",
 "topic": "Graphs - DFS",
 "question": "You are given equations like a / b = 2.0 as pairs equations[i] = [a, b] with values[i]. Then you are given queries [c, d] and must return the value of c / d for each, using the known equations (multiply/divide along chains of equations). Return -1.0 if the answer can't be determined (an unknown variable or no chain connects them). Example: a/b=2, b/c=3 → a/c = 6, c/a = 1/6.",
 "input": "a/b=2, b/c=3 ; queries a/c, c/a",
 "output": "[6.0, 0.1667]",
 "notes": [
  "a/b = 2 means edge a→b weight 2, b→a weight 1/2.",
  "Unknown variable → -1."
 ],
 "best": "Graph with weight v and 1/v; DFS multiplies weights along the path.",
 "variants": [
  {
   "name": "DFS on a ratio graph",
   "code": "class Solution:\n    def calcEquation(self, equations, values, queries):\n        g = defaultdict(dict)\n        for (a, b), v in zip(equations, values):\n            g[a][b] = v; g[b][a] = 1 / v\n        def dfs(x, y, seen):\n            if x not in g or y not in g: return -1.0\n            if x == y: return 1.0\n            seen.add(x)\n            for nb, w in g[x].items():\n                if nb not in seen:\n                    r = dfs(nb, y, seen)\n                    if r != -1.0: return w * r\n            return -1.0\n        return [dfs(a, b, set()) for a, b in queries]",
   "time": "O(Q·(V+E))",
   "space": "O(V+E)",
   "explain": "Edge weights multiply along a path.",
   "frames": [
    {
     "title": "Build graph",
     "description": "a —2→ b, b —3→ c, plus reverse edges 1/2 and 1/3.",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "edges",
       "cells": [
        "a→b 2",
        "b→c 3",
        "b→a ½",
        "c→b ⅓"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Query a/c",
     "description": "Path a → b → c.",
     "codeLines": [
      10
     ],
     "facts": {},
     "rows": [
      {
       "name": "path",
       "cells": [
        "a",
        "b",
        "c"
       ],
       "hot": [
        0,
        1,
        2
       ],
       "marks": {},
       "kind": "list"
      }
     ]
    },
    {
     "title": "Multiply",
     "description": "2 × 3 = 6.",
     "codeLines": [
      13
     ],
     "facts": {},
     "rows": [
      {
       "name": "weights",
       "cells": [
        "2",
        "3"
       ],
       "hot": [
        0,
        1
       ],
       "marks": {}
      },
      {
       "name": "a/c",
       "cells": [
        "6"
       ],
       "hot": [
        0
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Query c/a",
     "description": "Path c → b → a: ⅓ × ½ = ⅙.",
     "codeLines": [
      13
     ],
     "facts": {},
     "rows": [
      {
       "name": "path",
       "cells": [
        "c",
        "b",
        "a"
       ],
       "hot": [
        0,
        1,
        2
       ],
       "marks": {},
       "kind": "list"
      },
      {
       "name": "c/a",
       "cells": [
        "0.1667"
       ],
       "hot": [
        0
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Return",
     "description": "[6.0, 0.1667]",
     "codeLines": [
      15
     ],
     "facts": {},
     "rows": [
      {
       "name": "answers",
       "cells": [
        "6.0",
        "0.1667"
       ],
       "hot": [
        0,
        1
       ],
       "marks": {}
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "BFS per query",
   "tag": "Alternative",
   "code": "class Solution:\n    def calcEquation(self, equations, values, queries):\n        g = defaultdict(dict)\n        for (a, b), v in zip(equations, values): g[a][b] = v; g[b][a] = 1 / v\n        def bfs(a, b):\n            if a not in g or b not in g: return -1.0\n            q, seen = deque([(a, 1.0)]), {a}\n            while q:\n                x, val = q.popleft()\n                if x == b: return val\n                for nb, w in g[x].items():\n                    if nb not in seen: seen.add(nb); q.append((nb, val * w))\n            return -1.0\n        return [bfs(a, b) for a, b in queries]",
   "time": "O(Q·(V+E))",
   "space": "O(V+E)",
   "explain": "Multiply ratios along the first path found by BFS.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Weighted union-find",
   "tag": "Optimal queries",
   "code": "class Solution:\n    def calcEquation(self, equations, values, queries):\n        parent, ratio = {}, {}\n        def find(x):\n            if parent[x] != x:\n                p = parent[x]; root = find(p)\n                ratio[x] *= ratio[p]; parent[x] = root\n            return parent[x]\n        def union(a, b, v):\n            for x in (a, b):\n                if x not in parent: parent[x] = x; ratio[x] = 1.0\n            ra, rb = find(a), find(b)\n            if ra != rb:\n                parent[ra] = rb; ratio[ra] = v * ratio[b] / ratio[a]\n        for (a, b), v in zip(equations, values): union(a, b, v)\n        res = []\n        for a, b in queries:\n            if a in parent and b in parent and find(a) == find(b): res.append(ratio[a] / ratio[b])\n            else: res.append(-1.0)\n        return res",
   "time": "O((E+Q)·α)",
   "space": "O(V)",
   "explain": "Store each variable's ratio to its group's root; a query is one division.",
   "frames": [],
   "alt": true
  }
 ],
 "why": "a/c = (a/b) × (b/c) = 2 × 3 = 6, and c/a = 1/6.",
 "idea": "Build a graph where each edge carries a ratio. Multiply the ratios along the path."
};
