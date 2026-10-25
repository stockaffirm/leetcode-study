window.PROBLEM = {
 "id": "200",
 "title": "Number of Islands",
 "level": "Medium",
 "topic": "Graph - General",
 "question": "The grid has '1' for land and '0' for water. An island is a group of land cells connected sideways or up/down (not diagonally) and surrounded by water or the edge of the grid. Return how many islands there are. Example: a 4×5 grid with a big block top-left, one cell in the middle, and two cells bottom-right → 3 islands.",
 "why": "The sample grid has three separate groups of 1s → 3.",
 "idea": "Scan the grid; when you hit unvisited land, count an island and 'sink' all connected land with DFS.",
 "input": "[[1,1,0,0,0],[1,1,0,0,0],[0,0,1,0,0],[0,0,0,1,1]]",
 "output": "3",
 "notes": [],
 "best": "Scan the grid; when you hit unvisited land, count an island and 'sink' all connected land with DFS.",
 "variants": [
  {
   "name": "DFS: sink each island",
   "code": "class Solution:\n    def numIslands(self, grid):\n        def sink(r, c):\n            if not (0 <= r < len(grid) and 0 <= c < len(grid[0])) or grid[r][c] != '1': return\n            grid[r][c] = '0'\n            sink(r+1, c); sink(r-1, c); sink(r, c+1); sink(r, c-1)\n        count = 0\n        for r in range(len(grid)):\n            for c in range(len(grid[0])):\n                if grid[r][c] == '1': sink(r, c); count += 1\n        return count",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Scan the grid; when you hit unvisited land, count an island and 'sink' all connected land with DFS.",
   "frames": [
    {
     "title": "Grid",
     "description": "1 = land, 0 = water.",
     "codeLines": [
      2
     ],
     "facts": {},
     "rows": [
      {
       "name": "grid",
       "cells": [
        [
         "1",
         "1",
         "0",
         "0",
         "0"
        ],
        [
         "1",
         "1",
         "0",
         "0",
         "0"
        ],
        [
         "0",
         "0",
         "1",
         "0",
         "0"
        ],
        [
         "0",
         "0",
         "0",
         "1",
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
     "title": "Island 1",
     "description": "Found land at (0,0): sink the whole 2×2 block (mark A).",
     "codeLines": [
      10,
      6
     ],
     "facts": {
      "count": 1
     },
     "rows": [
      {
       "name": "grid",
       "cells": [
        [
         "A",
         "A",
         "0",
         "0",
         "0"
        ],
        [
         "A",
         "A",
         "0",
         "0",
         "0"
        ],
        [
         "0",
         "0",
         "1",
         "0",
         "0"
        ],
        [
         "0",
         "0",
         "0",
         "1",
         "1"
        ]
       ],
       "hot": [
        "0,0",
        "0,1",
        "1,0",
        "1,1"
       ],
       "marks": {},
       "kind": "grid"
      }
     ],
     "sub": [
      {
       "description": "grid[0][0] = A",
       "codeLines": [
        10,
        6
       ],
       "facts": {},
       "rows": [
        {
         "name": "grid",
         "cells": [
          [
           "A",
           "1",
           "0",
           "0",
           "0"
          ],
          [
           "1",
           "1",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "1",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "1",
           "1"
          ]
         ],
         "hot": [
          "0,0"
         ],
         "marks": {},
         "kind": "grid"
        }
       ]
      },
      {
       "description": "grid[0][1] = A",
       "codeLines": [
        10,
        6
       ],
       "facts": {},
       "rows": [
        {
         "name": "grid",
         "cells": [
          [
           "A",
           "A",
           "0",
           "0",
           "0"
          ],
          [
           "1",
           "1",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "1",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "1",
           "1"
          ]
         ],
         "hot": [
          "0,1"
         ],
         "marks": {},
         "kind": "grid"
        }
       ]
      },
      {
       "description": "grid[1][0] = A",
       "codeLines": [
        10,
        6
       ],
       "facts": {},
       "rows": [
        {
         "name": "grid",
         "cells": [
          [
           "A",
           "A",
           "0",
           "0",
           "0"
          ],
          [
           "A",
           "1",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "1",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "1",
           "1"
          ]
         ],
         "hot": [
          "1,0"
         ],
         "marks": {},
         "kind": "grid"
        }
       ]
      },
      {
       "description": "grid[1][1] = A. Found land at (0,0): sink the whole 2×2 block (mark A).",
       "codeLines": [
        10,
        6
       ],
       "facts": {
        "count": 1
       },
       "rows": [
        {
         "name": "grid",
         "cells": [
          [
           "A",
           "A",
           "0",
           "0",
           "0"
          ],
          [
           "A",
           "A",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "1",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "1",
           "1"
          ]
         ],
         "hot": [
          "1,1"
         ],
         "marks": {},
         "kind": "grid"
        }
       ]
      }
     ]
    },
    {
     "title": "Island 2",
     "description": "Land at (2,2): sink it (B).",
     "codeLines": [
      10
     ],
     "facts": {
      "count": 2
     },
     "rows": [
      {
       "name": "grid",
       "cells": [
        [
         "A",
         "A",
         "0",
         "0",
         "0"
        ],
        [
         "A",
         "A",
         "0",
         "0",
         "0"
        ],
        [
         "0",
         "0",
         "B",
         "0",
         "0"
        ],
        [
         "0",
         "0",
         "0",
         "1",
         "1"
        ]
       ],
       "hot": [
        "2,2"
       ],
       "marks": {},
       "kind": "grid"
      }
     ]
    },
    {
     "title": "Island 3",
     "description": "Land at (3,3) and (3,4): sink both (C).",
     "codeLines": [
      10
     ],
     "facts": {
      "count": 3
     },
     "rows": [
      {
       "name": "grid",
       "cells": [
        [
         "A",
         "A",
         "0",
         "0",
         "0"
        ],
        [
         "A",
         "A",
         "0",
         "0",
         "0"
        ],
        [
         "0",
         "0",
         "B",
         "0",
         "0"
        ],
        [
         "0",
         "0",
         "0",
         "C",
         "C"
        ]
       ],
       "hot": [
        "3,3",
        "3,4"
       ],
       "marks": {},
       "kind": "grid"
      }
     ]
    },
    {
     "title": "Return",
     "description": "3 islands.",
     "codeLines": [
      11
     ],
     "facts": {},
     "rows": [
      {
       "name": "answer",
       "cells": [
        "3"
       ],
       "hot": [
        0
       ],
       "marks": {}
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "BFS",
   "tag": "Alternative",
   "code": "class Solution:\n    def numIslands(self, grid):\n        m, n, count = len(grid), len(grid[0]), 0\n        for i in range(m):\n            for j in range(n):\n                if grid[i][j] == '1':\n                    count += 1; grid[i][j] = '0'; q = deque([(i, j)])\n                    while q:\n                        r, c = q.popleft()\n                        for dr, dc in ((1,0),(-1,0),(0,1),(0,-1)):\n                            nr, nc = r + dr, c + dc\n                            if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == '1':\n                                grid[nr][nc] = '0'; q.append((nr, nc))\n        return count",
   "time": "O(m·n)",
   "space": "O(min(m,n))",
   "explain": "Flood each island with a queue.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Union-find",
   "tag": "Alternative",
   "code": "class Solution:\n    def numIslands(self, grid):\n        m, n = len(grid), len(grid[0]); parent = {}\n        def find(x):\n            while parent[x] != x:\n                parent[x] = parent[parent[x]]; x = parent[x]\n            return x\n        for i in range(m):\n            for j in range(n):\n                if grid[i][j] == '1': parent[(i, j)] = (i, j)\n        count = len(parent)\n        for (i, j) in list(parent):\n            for di, dj in ((1, 0), (0, 1)):\n                nb = (i + di, j + dj)\n                if nb in parent:\n                    a, b = find((i, j)), find(nb)\n                    if a != b: parent[a] = b; count -= 1\n        return count",
   "time": "O(m·n·α)",
   "space": "O(m·n)",
   "explain": "Start with one component per land cell; merge neighbours and count merges.",
   "frames": [],
   "alt": true
  }
 ]
};
