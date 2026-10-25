window.PROBLEM = {
 "id": "1926",
 "title": "Nearest Exit from Entrance in Maze",
 "level": "Medium",
 "topic": "Graphs - BFS",
 "question": "The maze is a grid where '.' is an open cell and '+' is a wall. You start at the cell entrance = [row, col]. Each step moves to an open cell up, down, left or right. An exit is an open cell on the BORDER (edge) of the grid, other than the entrance itself. Return the number of steps on the shortest route to an exit, or −1 if none is reachable. Example maze: row0 ++++, row1 ...+, row2 ++.+, row3 ++.+ with entrance [1,0]: go right 2 steps to column 2, then down 2 steps to the bottom border → 4.",
 "input": "4×4 maze, entrance (1,0)",
 "output": "4",
 "notes": [
  "The entrance itself doesn't count as an exit.",
  "Mark cells visited by turning them into walls."
 ],
 "best": "BFS: the first border cell reached is the shortest path.",
 "variants": [
  {
   "name": "BFS",
   "code": "class Solution:\n    def nearestExit(self, maze, entrance):\n        m, n = len(maze), len(maze[0])\n        q = deque([(entrance[0], entrance[1], 0)])\n        maze[entrance[0]][entrance[1]] = '+'\n        while q:\n            r, c, d = q.popleft()\n            for dr, dc in ((1,0),(-1,0),(0,1),(0,-1)):\n                nr, nc = r + dr, c + dc\n                if 0 <= nr < m and 0 <= nc < n and maze[nr][nc] == '.':\n                    if nr in (0, m-1) or nc in (0, n-1): return d + 1\n                    maze[nr][nc] = '+'\n                    q.append((nr, nc, d + 1))\n        return -1",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "BFS expands one step at a time, so the first exit found is nearest.",
   "frames": [
    {
     "title": "Maze",
     "description": "Start S at (1,0). '+' is a wall; the border '.' cell is the exit.",
     "codeLines": [
      2
     ],
     "facts": {},
     "rows": [
      {
       "name": "maze",
       "cells": [
        [
         "+",
         "+",
         "+",
         "+"
        ],
        [
         "S",
         ".",
         ".",
         "+"
        ],
        [
         "+",
         "+",
         ".",
         "+"
        ],
        [
         "+",
         "+",
         ".",
         "+"
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
     "title": "Step 1",
     "description": "Expand to (1,1). Not on the border.",
     "codeLines": [
      7,
      13
     ],
     "facts": {
      "d": 1
     },
     "rows": [
      {
       "name": "maze",
       "cells": [
        [
         "+",
         "+",
         "+",
         "+"
        ],
        [
         "S",
         "1",
         ".",
         "+"
        ],
        [
         "+",
         "+",
         ".",
         "+"
        ],
        [
         "+",
         "+",
         ".",
         "+"
        ]
       ],
       "hot": [
        "1,1"
       ],
       "marks": {},
       "kind": "grid"
      }
     ]
    },
    {
     "title": "Step 2",
     "description": "Expand to (1,2).",
     "codeLines": [
      13
     ],
     "facts": {
      "d": 2
     },
     "rows": [
      {
       "name": "maze",
       "cells": [
        [
         "+",
         "+",
         "+",
         "+"
        ],
        [
         "S",
         "1",
         "2",
         "+"
        ],
        [
         "+",
         "+",
         ".",
         "+"
        ],
        [
         "+",
         "+",
         ".",
         "+"
        ]
       ],
       "hot": [
        "1,2"
       ],
       "marks": {},
       "kind": "grid"
      }
     ]
    },
    {
     "title": "Step 3",
     "description": "Expand down to (2,2).",
     "codeLines": [
      13
     ],
     "facts": {
      "d": 3
     },
     "rows": [
      {
       "name": "maze",
       "cells": [
        [
         "+",
         "+",
         "+",
         "+"
        ],
        [
         "S",
         "1",
         "2",
         "+"
        ],
        [
         "+",
         "+",
         "3",
         "+"
        ],
        [
         "+",
         "+",
         ".",
         "+"
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
     "title": "Exit found",
     "description": "(3,2) is on the border → d + 1 = 4.",
     "codeLines": [
      11
     ],
     "facts": {
      "answer": 4
     },
     "rows": [
      {
       "name": "maze",
       "cells": [
        [
         "+",
         "+",
         "+",
         "+"
        ],
        [
         "S",
         "1",
         "2",
         "+"
        ],
        [
         "+",
         "+",
         "3",
         "+"
        ],
        [
         "+",
         "+",
         "E",
         "+"
        ]
       ],
       "hot": [
        "3,2"
       ],
       "marks": {},
       "kind": "grid"
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "BFS with a distance map",
   "tag": "Alternative",
   "code": "class Solution:\n    def nearestExit(self, maze, entrance):\n        m, n = len(maze), len(maze[0])\n        dist = {tuple(entrance): 0}; q = deque([tuple(entrance)])\n        while q:\n            r, c = q.popleft()\n            for dr, dc in ((1,0),(-1,0),(0,1),(0,-1)):\n                nr, nc = r + dr, c + dc\n                if 0 <= nr < m and 0 <= nc < n and maze[nr][nc] == '.' and (nr, nc) not in dist:\n                    dist[(nr, nc)] = dist[(r, c)] + 1\n                    if nr in (0, m - 1) or nc in (0, n - 1): return dist[(nr, nc)]\n                    q.append((nr, nc))\n        return -1",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Store each cell's distance instead of carrying it in the queue.",
   "frames": [],
   "alt": true
  },
  {
   "name": "BFS level by level",
   "tag": "Alternative",
   "code": "class Solution:\n    def nearestExit(self, maze, entrance):\n        m, n = len(maze), len(maze[0])\n        q = deque([(entrance[0], entrance[1])]); seen = {tuple(entrance)}; steps = 0\n        while q:\n            steps += 1\n            for _ in range(len(q)):\n                r, c = q.popleft()\n                for dr, dc in ((1,0),(-1,0),(0,1),(0,-1)):\n                    nr, nc = r + dr, c + dc\n                    if 0 <= nr < m and 0 <= nc < n and maze[nr][nc] == '.' and (nr, nc) not in seen:\n                        if nr in (0, m - 1) or nc in (0, n - 1): return steps\n                        seen.add((nr, nc)); q.append((nr, nc))\n        return -1",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Process the queue one whole level (= one step) at a time.",
   "frames": [],
   "alt": true
  }
 ],
 "why": "(1,0) → (1,1) → (1,2) → (2,2) → (3,2) is on the border: 4 steps.",
 "idea": "BFS: the first exit it reaches is the closest."
};
