window.PROBLEM = {
 "id": "130",
 "title": "Surrounded Regions",
 "level": "Medium",
 "topic": "Graph - General",
 "question": "A board contains 'X' and 'O'. Capture every group of 'O's that is completely surrounded by 'X' on all four sides (up, down, left, right) by turning those O's into X's. An 'O' on the border of the board — or connected to a border 'O' — is NOT captured. Change the board itself. Example: XXXX / XOOX / XXOX / XOXX → the three O's in the middle are surrounded and become X, but the O in the bottom row sits on the border and stays → XXXX / XXXX / XXXX / XOXX.",
 "why": "The big O group is enclosed → becomes X. The bottom O touches the border → stays.",
 "idea": "Start from border 'O's and mark everything connected to them as safe. Flip the rest.",
 "input": "4×4 board of X and O",
 "output": "enclosed O's become X",
 "notes": [],
 "best": "Start from border 'O's and mark everything connected to them as safe. Flip the rest.",
 "variants": [
  {
   "name": "DFS from the border",
   "code": "class Solution:\n    def solve(self, board):\n        m, n = len(board), len(board[0])\n        def mark(r, c):\n            if 0 <= r < m and 0 <= c < n and board[r][c] == 'O':\n                board[r][c] = '#'\n                mark(r+1, c); mark(r-1, c); mark(r, c+1); mark(r, c-1)\n        for r in range(m): mark(r, 0); mark(r, n-1)\n        for c in range(n): mark(0, c); mark(m-1, c)\n        for r in range(m):\n            for c in range(n): board[r][c] = 'O' if board[r][c] == '#' else 'X'",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Start from border 'O's and mark everything connected to them as safe. Flip the rest.",
   "frames": [
    {
     "title": "Board",
     "description": "Which O's can escape to the border?",
     "codeLines": [
      2
     ],
     "facts": {},
     "rows": [
      {
       "name": "board",
       "cells": [
        [
         "X",
         "X",
         "X",
         "X"
        ],
        [
         "X",
         "O",
         "O",
         "X"
        ],
        [
         "X",
         "X",
         "O",
         "X"
        ],
        [
         "X",
         "O",
         "X",
         "X"
        ]
       ],
       "hot": [],
       "marks": {},
       "kind": "grid"
      }
     ]
    },
    {
     "title": "Mark safe",
     "description": "Border O at (3,1) is safe → mark #.",
     "codeLines": [
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "board",
       "cells": [
        [
         "X",
         "X",
         "X",
         "X"
        ],
        [
         "X",
         "O",
         "O",
         "X"
        ],
        [
         "X",
         "X",
         "O",
         "X"
        ],
        [
         "X",
         "#",
         "X",
         "X"
        ]
       ],
       "hot": [
        "3,1"
       ],
       "marks": {},
       "kind": "grid"
      }
     ]
    },
    {
     "title": "Flip",
     "description": "Unmarked O's become X; # goes back to O.",
     "codeLines": [
      11
     ],
     "facts": {},
     "rows": [
      {
       "name": "board",
       "cells": [
        [
         "X",
         "X",
         "X",
         "X"
        ],
        [
         "X",
         "X",
         "X",
         "X"
        ],
        [
         "X",
         "X",
         "X",
         "X"
        ],
        [
         "X",
         "O",
         "X",
         "X"
        ]
       ],
       "hot": [
        "1,1",
        "1,2",
        "2,2"
       ],
       "marks": {},
       "kind": "grid"
      }
     ],
     "sub": [
      {
       "description": "board[1][1] = X",
       "codeLines": [
        11
       ],
       "facts": {},
       "rows": [
        {
         "name": "board",
         "cells": [
          [
           "X",
           "X",
           "X",
           "X"
          ],
          [
           "X",
           "X",
           "O",
           "X"
          ],
          [
           "X",
           "X",
           "O",
           "X"
          ],
          [
           "X",
           "#",
           "X",
           "X"
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
       "description": "board[1][2] = X",
       "codeLines": [
        11
       ],
       "facts": {},
       "rows": [
        {
         "name": "board",
         "cells": [
          [
           "X",
           "X",
           "X",
           "X"
          ],
          [
           "X",
           "X",
           "X",
           "X"
          ],
          [
           "X",
           "X",
           "O",
           "X"
          ],
          [
           "X",
           "#",
           "X",
           "X"
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
       "description": "board[2][2] = X",
       "codeLines": [
        11
       ],
       "facts": {},
       "rows": [
        {
         "name": "board",
         "cells": [
          [
           "X",
           "X",
           "X",
           "X"
          ],
          [
           "X",
           "X",
           "X",
           "X"
          ],
          [
           "X",
           "X",
           "X",
           "X"
          ],
          [
           "X",
           "#",
           "X",
           "X"
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
       "description": "board[3][1] = O. Unmarked O's become X; # goes back to O.",
       "codeLines": [
        11
       ],
       "facts": {},
       "rows": [
        {
         "name": "board",
         "cells": [
          [
           "X",
           "X",
           "X",
           "X"
          ],
          [
           "X",
           "X",
           "X",
           "X"
          ],
          [
           "X",
           "X",
           "X",
           "X"
          ],
          [
           "X",
           "O",
           "X",
           "X"
          ]
         ],
         "hot": [
          "3,1"
         ],
         "marks": {},
         "kind": "grid"
        }
       ]
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "BFS from the border",
   "tag": "Alternative",
   "code": "class Solution:\n    def solve(self, board):\n        m, n = len(board), len(board[0]); q = deque()\n        for i in range(m):\n            for j in range(n):\n                if (i in (0, m - 1) or j in (0, n - 1)) and board[i][j] == 'O':\n                    board[i][j] = '#'; q.append((i, j))\n        while q:\n            r, c = q.popleft()\n            for dr, dc in ((1,0),(-1,0),(0,1),(0,-1)):\n                nr, nc = r + dr, c + dc\n                if 0 <= nr < m and 0 <= nc < n and board[nr][nc] == 'O':\n                    board[nr][nc] = '#'; q.append((nr, nc))\n        for i in range(m):\n            for j in range(n): board[i][j] = 'O' if board[i][j] == '#' else 'X'",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Queue every border 'O' and spread to connected 'O's.",
   "frames": [],
   "alt": true
  }
 ]
};
