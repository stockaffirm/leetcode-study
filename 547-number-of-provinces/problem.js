window.PROBLEM = {
 "id": "547",
 "title": "Number of Provinces",
 "level": "Medium",
 "topic": "Graphs - DFS",
 "question": "isConnected is an n × n matrix: isConnected[i][j] = 1 means city i and city j are directly connected (and 0 means not). Cities can be connected indirectly through others. A province is a group of cities that are all connected, directly or indirectly, with no connection to cities outside the group. Return the number of provinces. Example: [[1,1,0],[1,1,0],[0,0,1]] → cities 0 and 1 form one province, city 2 another → 2.",
 "input": "[[1,1,0],[1,1,0],[0,0,1]]",
 "output": "2",
 "notes": [
  "Provinces = connected components.",
  "Matrix is symmetric."
 ],
 "best": "DFS flood-fill; count how many times you start one.",
 "variants": [
  {
   "name": "DFS flood fill",
   "code": "class Solution:\n    def findCircleNum(self, isConnected):\n        n, seen, count = len(isConnected), set(), 0\n        def dfs(i):\n            seen.add(i)\n            for j in range(n):\n                if isConnected[i][j] and j not in seen: dfs(j)\n        for i in range(n):\n            if i not in seen:\n                dfs(i); count += 1\n        return count",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Each unvisited city starts a new province.",
   "frames": [
    {
     "title": "Matrix",
     "description": "1 means directly connected.",
     "codeLines": [
      2
     ],
     "facts": {},
     "rows": [
      {
       "name": "isConnected",
       "cells": [
        [
         "1",
         "1",
         "0"
        ],
        [
         "1",
         "1",
         "0"
        ],
        [
         "0",
         "0",
         "1"
        ]
       ],
       "hot": [],
       "marks": {},
       "kind": "grid"
      }
     ]
    },
    {
     "title": "Start at city 0",
     "description": "Not seen → province 1. DFS reaches 1 too.",
     "codeLines": [
      9,
      4
     ],
     "facts": {
      "count": 1
     },
     "rows": [
      {
       "name": "isConnected",
       "cells": [
        [
         "1",
         "1",
         "0"
        ],
        [
         "1",
         "1",
         "0"
        ],
        [
         "0",
         "0",
         "1"
        ]
       ],
       "hot": [
        "0,0",
        "0,1"
       ],
       "marks": {},
       "kind": "grid"
      },
      {
       "name": "seen",
       "cells": [
        "0",
        "1"
       ],
       "hot": [
        0,
        1
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "City 1",
     "description": "Already seen → skip.",
     "codeLines": [
      9
     ],
     "facts": {
      "count": 1
     },
     "rows": [
      {
       "name": "seen",
       "cells": [
        "0",
        "1"
       ],
       "hot": [
        1
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "City 2",
     "description": "Not seen → province 2.",
     "codeLines": [
      4
     ],
     "facts": {
      "count": 2
     },
     "rows": [
      {
       "name": "isConnected",
       "cells": [
        [
         "1",
         "1",
         "0"
        ],
        [
         "1",
         "1",
         "0"
        ],
        [
         "0",
         "0",
         "1"
        ]
       ],
       "hot": [
        "2,2"
       ],
       "marks": {},
       "kind": "grid"
      },
      {
       "name": "seen",
       "cells": [
        "0",
        "1",
        "2"
       ],
       "hot": [
        2
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Return",
     "description": "2 provinces: {0,1} and {2}.",
     "codeLines": [
      11
     ],
     "facts": {},
     "rows": [
      {
       "name": "provinces",
       "cells": [
        "{0,1}",
        "{2}"
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
   "name": "Union-find",
   "tag": "Alternative",
   "code": "class Solution:\n    def findCircleNum(self, isConnected):\n        n = len(isConnected); parent = list(range(n))\n        def find(x):\n            while parent[x] != x:\n                parent[x] = parent[parent[x]]; x = parent[x]\n            return x\n        for i in range(n):\n            for j in range(i + 1, n):\n                if isConnected[i][j]: parent[find(i)] = find(j)\n        return len({find(i) for i in range(n)})",
   "time": "O(n²·α)",
   "space": "O(n)",
   "explain": "Merge connected cities into groups and count the distinct roots.",
   "frames": [],
   "alt": true
  },
  {
   "name": "BFS",
   "tag": "Alternative",
   "code": "class Solution:\n    def findCircleNum(self, isConnected):\n        n, seen, count = len(isConnected), set(), 0\n        for i in range(n):\n            if i in seen: continue\n            count += 1; q = deque([i]); seen.add(i)\n            while q:\n                c = q.popleft()\n                for j in range(n):\n                    if isConnected[c][j] and j not in seen: seen.add(j); q.append(j)\n        return count",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Flood each province with a queue.",
   "frames": [],
   "alt": true
  }
 ],
 "why": "Cities 0 and 1 are linked; city 2 is alone → 2 provinces.",
 "idea": "Every time you find an unvisited city, start a new DFS: that's a new province."
};
