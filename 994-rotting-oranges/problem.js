window.PROBLEM = {
 "id": "994",
 "title": "Rotting Oranges",
 "level": "Medium",
 "topic": "Graphs - BFS",
 "question": "grid is an m × n grid where 0 = empty, 1 = fresh orange, 2 = rotten orange. Every minute, each fresh orange that is directly next to (up, down, left, right) a rotten one becomes rotten. Return the minimum number of minutes until no fresh orange remains, or -1 if that is impossible. Example: [[2,1,1],[1,1,0],[0,1,1]] → minute 1 rots 2 oranges, and so on until all rot after 4 minutes.",
 "input": "[[2,1,1],[1,1,0],[0,1,1]]",
 "output": "4",
 "notes": [
  "Start BFS from every rotten orange at once.",
  "Leftover fresh → -1."
 ],
 "best": "Multi-source BFS: all rotten oranges spread together each minute.",
 "variants": [
  {
   "name": "Multi-source BFS",
   "code": "class Solution:\n    def orangesRotting(self, grid):\n        q, fresh = deque(), 0\n        for r, row in enumerate(grid):\n            for c, v in enumerate(row):\n                if v == 2: q.append((r, c))\n                elif v == 1: fresh += 1\n        minutes = 0\n        while q and fresh:\n            for _ in range(len(q)):\n                r, c = q.popleft()\n                for dr, dc in ((1,0),(-1,0),(0,1),(0,-1)):\n                    nr, nc = r + dr, c + dc\n                    if 0 <= nr < len(grid) and 0 <= nc < len(grid[0]) and grid[nr][nc] == 1:\n                        grid[nr][nc] = 2; fresh -= 1; q.append((nr, nc))\n            minutes += 1\n        return minutes if fresh == 0 else -1",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Multi-source BFS, one minute per level.",
   "frames": [
    {
     "title": "Start",
     "description": "One rotten orange; 6 fresh.",
     "codeLines": [
      3,
      7
     ],
     "facts": {
      "fresh": 6,
      "minutes": 0
     },
     "rows": [
      {
       "name": "grid",
       "cells": [
        [
         "2",
         "1",
         "1"
        ],
        [
         "1",
         "1",
         "0"
        ],
        [
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
     "title": "Minute 1",
     "description": "Rot spreads to 2 oranges.",
     "codeLines": [
      16,
      15
     ],
     "facts": {
      "fresh": 4,
      "minutes": 1
     },
     "rows": [
      {
       "name": "grid",
       "cells": [
        [
         "2",
         "2",
         "1"
        ],
        [
         "2",
         "1",
         "0"
        ],
        [
         "0",
         "1",
         "1"
        ]
       ],
       "hot": [
        "1,0",
        "0,1"
       ],
       "marks": {},
       "kind": "grid"
      }
     ]
    },
    {
     "title": "Minute 2",
     "description": "Rot spreads to 2 oranges.",
     "codeLines": [
      16,
      15
     ],
     "facts": {
      "fresh": 2,
      "minutes": 2
     },
     "rows": [
      {
       "name": "grid",
       "cells": [
        [
         "2",
         "2",
         "2"
        ],
        [
         "2",
         "2",
         "0"
        ],
        [
         "0",
         "1",
         "1"
        ]
       ],
       "hot": [
        "1,1",
        "0,2"
       ],
       "marks": {},
       "kind": "grid"
      }
     ]
    },
    {
     "title": "Minute 3",
     "description": "Rot spreads to 1 orange.",
     "codeLines": [
      16,
      15
     ],
     "facts": {
      "fresh": 1,
      "minutes": 3
     },
     "rows": [
      {
       "name": "grid",
       "cells": [
        [
         "2",
         "2",
         "2"
        ],
        [
         "2",
         "2",
         "0"
        ],
        [
         "0",
         "2",
         "1"
        ]
       ],
       "hot": [
        "2,1"
       ],
       "marks": {},
       "kind": "grid"
      }
     ]
    },
    {
     "title": "Minute 4",
     "description": "Rot spreads to 1 orange.",
     "codeLines": [
      16,
      15
     ],
     "facts": {
      "fresh": 0,
      "minutes": 4
     },
     "rows": [
      {
       "name": "grid",
       "cells": [
        [
         "2",
         "2",
         "2"
        ],
        [
         "2",
         "2",
         "0"
        ],
        [
         "0",
         "2",
         "2"
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
     "title": "Return",
     "description": "No fresh left after 4 minutes.",
     "codeLines": [
      17
     ],
     "facts": {},
     "rows": [
      {
       "name": "answer",
       "cells": [
        "4"
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
   "name": "BFS with time in the queue",
   "tag": "Alternative",
   "code": "class Solution:\n    def orangesRotting(self, grid):\n        q, fresh = deque(), 0\n        for r, row in enumerate(grid):\n            for c, v in enumerate(row):\n                if v == 2: q.append((r, c, 0))\n                elif v == 1: fresh += 1\n        t = 0\n        while q:\n            r, c, t = q.popleft()\n            for dr, dc in ((1,0),(-1,0),(0,1),(0,-1)):\n                nr, nc = r + dr, c + dc\n                if 0 <= nr < len(grid) and 0 <= nc < len(grid[0]) and grid[nr][nc] == 1:\n                    grid[nr][nc] = 2; fresh -= 1; q.append((nr, nc, t + 1))\n        return t if fresh == 0 else -1",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Each queue entry remembers the minute it rotted.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Simulate minute by minute",
   "tag": "Brute force",
   "code": "class Solution:\n    def orangesRotting(self, grid):\n        m, n, minutes = len(grid), len(grid[0]), 0\n        while True:\n            rot = []\n            for r in range(m):\n                for c in range(n):\n                    if grid[r][c] == 1 and any(0 <= r+dr < m and 0 <= c+dc < n and grid[r+dr][c+dc] == 2 for dr, dc in ((1,0),(-1,0),(0,1),(0,-1))):\n                        rot.append((r, c))\n            if not rot: break\n            for r, c in rot: grid[r][c] = 2\n            minutes += 1\n        return -1 if any(1 in row for row in grid) else minutes",
   "time": "O((m·n)²)",
   "space": "O(m·n)",
   "explain": "Each minute scan the whole grid for fresh oranges next to a rotten one.",
   "frames": [],
   "alt": true
  }
 ],
 "why": "Rot spreads outward from the top-left corner and finishes after 4 minutes.",
 "idea": "BFS starting from all rotten oranges at once."
};
