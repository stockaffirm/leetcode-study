window.PROBLEM = {
 "id": "210",
 "title": "Course Schedule II",
 "level": "Medium",
 "topic": "Graph - General",
 "question": "Same setting as Course Schedule: prerequisites[i] = [a, b] means take course b before course a. Return ONE order in which you can take all numCourses courses, or an empty list if it's impossible. Example: 4 courses, [[1,0],[2,0],[3,1],[3,2]] → [0,1,2,3] (or [0,2,1,3]).",
 "why": "4 courses: one valid order is 0, 1, 2, 3.",
 "idea": "Topological sort: record each course as you take it.",
 "input": "4 courses, prerequisites [[1,0],[2,0],[3,1],[3,2]]",
 "output": "[0, 1, 2, 3]",
 "notes": [],
 "best": "Topological sort: record each course as you take it.",
 "variants": [
  {
   "name": "Topological sort (Kahn)",
   "code": "class Solution:\n    def findOrder(self, n, prereq):\n        adj, indeg = defaultdict(list), [0] * n\n        for a, b in prereq: adj[b].append(a); indeg[a] += 1\n        q = deque(i for i in range(n) if indeg[i] == 0); order = []\n        while q:\n            c = q.popleft(); order.append(c)\n            for nxt in adj[c]:\n                indeg[nxt] -= 1\n                if indeg[nxt] == 0: q.append(nxt)\n        return order if len(order) == n else []",
   "time": "O(V+E)",
   "space": "O(V+E)",
   "explain": "Topological sort: record each course as you take it.",
   "frames": [
    {
     "title": "Start",
     "description": "Queue starts with courses that need nothing: [0].",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "queue",
       "cells": [
        "0"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "order",
       "cells": [
        "·"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Take 0",
     "description": "order [0]; courses 1 and 2 become free.",
     "codeLines": [
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "queue",
       "cells": [
        "1",
        "2"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "order",
       "cells": [
        "0"
       ],
       "hot": [
        0
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Take 1, 2",
     "description": "order [0,1,2]; course 3 becomes free.",
     "codeLines": [
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "queue",
       "cells": [
        "3"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "order",
       "cells": [
        "0",
        "1",
        "2"
       ],
       "hot": [
        1,
        2
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Take 3",
     "description": "order [0,1,2,3]",
     "codeLines": [
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "order",
       "cells": [
        "0",
        "1",
        "2",
        "3"
       ],
       "hot": [
        3
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Return",
     "description": "All 4 taken → return the order.",
     "codeLines": [
      11
     ],
     "facts": {},
     "rows": [
      {
       "name": "answer",
       "cells": [
        "0",
        "1",
        "2",
        "3"
       ],
       "hot": [
        0,
        1,
        2,
        3
       ],
       "marks": {}
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "DFS post-order, reversed",
   "tag": "Alternative",
   "code": "class Solution:\n    def findOrder(self, n, prereq):\n        adj = defaultdict(list)\n        for a, b in prereq: adj[b].append(a)\n        state = [0] * n; order = []\n        def dfs(c):\n            if state[c] == 1: return False\n            if state[c] == 2: return True\n            state[c] = 1\n            for nxt in adj[c]:\n                if not dfs(nxt): return False\n            state[c] = 2; order.append(c); return True\n        for i in range(n):\n            if not dfs(i): return []\n        return order[::-1]",
   "time": "O(V+E)",
   "space": "O(V+E)",
   "explain": "A course is added after everything that depends on it; reverse at the end.",
   "frames": [],
   "alt": true
  }
 ]
};
