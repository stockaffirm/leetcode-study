window.PROBLEM = {
 "id": "1466",
 "title": "Reorder Routes to Make All Paths Lead to the City Zero",
 "level": "Medium",
 "topic": "Graphs - DFS",
 "question": "There are n cities (0 to n−1) joined by n−1 one-way roads so that, ignoring direction, there is exactly one route between any two cities. connections[i] = [a, b] means a road goes from a to b. Every city must be able to reach city 0. Return the minimum number of roads whose direction you must reverse to make that true. Example: n=6, roads [[0,1],[1,3],[2,3],[4,0],[4,5]] → roads 0→1, 1→3 and 4→5 point away from 0, so 3 reversals.",
 "input": "n=6, [[0,1],[1,3],[2,3],[4,0],[4,5]]",
 "output": "3",
 "notes": [
  "n cities, n-1 roads → a tree.",
  "Edge a→b seen from a pointing outward must flip."
 ],
 "best": "Treat it as an undirected tree; count edges that point away from 0.",
 "variants": [
  {
   "name": "DFS from city 0",
   "code": "class Solution:\n    def minReorder(self, n, connections):\n        adj = defaultdict(list)\n        for a, b in connections:\n            adj[a].append((b, 1)); adj[b].append((a, 0))\n        seen, changes, stack = {0}, 0, [0]\n        while stack:\n            city = stack.pop()\n            for nxt, cost in adj[city]:\n                if nxt not in seen:\n                    seen.add(nxt); changes += cost; stack.append(nxt)\n        return changes",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Walk away from 0; an edge pointing away costs 1 to flip.",
   "frames": [
    {
     "title": "Roads",
     "description": "0→1, 1→3, 2→3, 4→0, 4→5",
     "codeLines": [
      2
     ],
     "facts": {},
     "rows": [
      {
       "name": "roads",
       "cells": [
        "0→1",
        "1→3",
        "2→3",
        "4→0",
        "4→5"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "City 0",
     "description": "0→1 points away: flip; 0→4 already toward 0",
     "codeLines": [
      8,
      11
     ],
     "facts": {
      "changes": 1
     },
     "rows": [
      {
       "name": "visited",
       "cells": [
        "0",
        "1",
        "4"
       ],
       "hot": [
        2
       ],
       "marks": {}
      },
      {
       "name": "stack",
       "cells": [
        "1",
        "4"
       ],
       "hot": [],
       "marks": {}
      }
     ],
     "sub": [
      {
       "description": "visited[0] = 0",
       "codeLines": [
        8,
        11
       ],
       "facts": {},
       "rows": [
        {
         "name": "visited",
         "cells": [
          "0",
          "·",
          "·"
         ],
         "hot": [
          0
         ],
         "marks": {}
        },
        {
         "name": "stack",
         "cells": [
          "1",
          "4"
         ],
         "hot": [],
         "marks": {}
        }
       ]
      },
      {
       "description": "visited[1] = 1",
       "codeLines": [
        8,
        11
       ],
       "facts": {},
       "rows": [
        {
         "name": "visited",
         "cells": [
          "0",
          "1",
          "·"
         ],
         "hot": [
          1
         ],
         "marks": {}
        },
        {
         "name": "stack",
         "cells": [
          "1",
          "4"
         ],
         "hot": [],
         "marks": {}
        }
       ]
      },
      {
       "description": "visited[2] = 4. 0→1 points away: flip; 0→4 already toward 0",
       "codeLines": [
        8,
        11
       ],
       "facts": {
        "changes": 1
       },
       "rows": [
        {
         "name": "visited",
         "cells": [
          "0",
          "1",
          "4"
         ],
         "hot": [
          2
         ],
         "marks": {}
        },
        {
         "name": "stack",
         "cells": [
          "1",
          "4"
         ],
         "hot": [],
         "marks": {}
        }
       ]
      }
     ]
    },
    {
     "title": "City 4",
     "description": "4→5 points away: flip",
     "codeLines": [
      8,
      11
     ],
     "facts": {
      "changes": 2
     },
     "rows": [
      {
       "name": "visited",
       "cells": [
        "0",
        "1",
        "4",
        "5"
       ],
       "hot": [
        3
       ],
       "marks": {}
      },
      {
       "name": "stack",
       "cells": [
        "1",
        "5"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "City 5",
     "description": "Nothing new.",
     "codeLines": [
      8,
      11
     ],
     "facts": {
      "changes": 2
     },
     "rows": [
      {
       "name": "visited",
       "cells": [
        "0",
        "1",
        "4",
        "5"
       ],
       "hot": [
        3
       ],
       "marks": {}
      },
      {
       "name": "stack",
       "cells": [
        "1"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "City 1",
     "description": "1→3 points away: flip",
     "codeLines": [
      8,
      11
     ],
     "facts": {
      "changes": 3
     },
     "rows": [
      {
       "name": "visited",
       "cells": [
        "0",
        "1",
        "4",
        "5",
        "3"
       ],
       "hot": [
        4
       ],
       "marks": {}
      },
      {
       "name": "stack",
       "cells": [
        "3"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "City 3",
     "description": "3→2 already toward 3",
     "codeLines": [
      8,
      11
     ],
     "facts": {
      "changes": 3
     },
     "rows": [
      {
       "name": "visited",
       "cells": [
        "0",
        "1",
        "4",
        "5",
        "3",
        "2"
       ],
       "hot": [
        5
       ],
       "marks": {}
      },
      {
       "name": "stack",
       "cells": [
        "2"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "City 2",
     "description": "Nothing new.",
     "codeLines": [
      8,
      11
     ],
     "facts": {
      "changes": 3
     },
     "rows": [
      {
       "name": "visited",
       "cells": [
        "0",
        "1",
        "4",
        "5",
        "3",
        "2"
       ],
       "hot": [
        5
       ],
       "marks": {}
      },
      {
       "name": "stack",
       "cells": [
        "·"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Return",
     "description": "3 flips: 0→1, 1→3, 4→5.",
     "codeLines": [
      12
     ],
     "facts": {
      "changes": 3
     },
     "rows": [
      {
       "name": "flips",
       "cells": [
        "0→1",
        "1→3",
        "4→5"
       ],
       "hot": [
        0,
        1,
        2
       ],
       "marks": {}
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "BFS with the original edge set",
   "tag": "Alternative",
   "code": "class Solution:\n    def minReorder(self, n, connections):\n        edges = {(a, b) for a, b in connections}\n        adj = defaultdict(list)\n        for a, b in connections: adj[a].append(b); adj[b].append(a)\n        seen, q, changes = {0}, deque([0]), 0\n        while q:\n            c = q.popleft()\n            for nxt in adj[c]:\n                if nxt not in seen:\n                    if (c, nxt) in edges: changes += 1\n                    seen.add(nxt); q.append(nxt)\n        return changes",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Treat roads as undirected; count roads whose original direction points away from 0.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Recursive DFS",
   "tag": "Alternative",
   "code": "class Solution:\n    def minReorder(self, n, connections):\n        adj = defaultdict(list)\n        for a, b in connections: adj[a].append((b, 1)); adj[b].append((a, 0))\n        def go(city, parent):\n            total = 0\n            for nxt, cost in adj[city]:\n                if nxt != parent: total += cost + go(nxt, city)\n            return total\n        return go(0, -1)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Return the flips needed in each subtree.",
   "frames": [],
   "alt": true
  }
 ],
 "why": "Three roads point away from 0 and must be flipped: 0→1, 1→3, 4→5 → 3.",
 "idea": "Walk out from 0. Count the roads that point away from 0."
};
