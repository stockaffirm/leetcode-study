window.PROBLEM = {
 "id": "909",
 "title": "Snakes and Ladders",
 "level": "Medium",
 "topic": "Graph - BFS",
 "question": "A square board has n × n squares numbered 1 to n². Numbering starts at the bottom-left; the bottom row runs left to right, the next row up runs right to left, and so on (a zig-zag). From square x you roll a die and move to any square from x+1 to x+6. If that square holds a ladder or snake (the board shows its destination number instead of −1), you are carried to that destination. Return the FEWEST rolls needed to reach square n², or −1 if impossible. Example: a 3×3 board whose only ladder is on square 2 (leading to 8): roll 1 to land on 2 → ladder to 8, then roll 1 to reach 9 → 2 rolls.",
 "why": "3×3 board with a ladder from 2 to 8: roll 1 (→2 → ladder to 8), then roll 1 → 9. That's 2 moves.",
 "idea": "BFS over squares: each square connects to the next 6 squares; the first time you reach the end is the minimum.",
 "input": "3×3 board with a ladder 2 → 8",
 "output": "2",
 "notes": [],
 "best": "BFS over squares: each square connects to the next 6 squares; the first time you reach the end is the minimum.",
 "variants": [
  {
   "name": "BFS over squares",
   "code": "class Solution:\n    def snakesAndLadders(self, board):\n        n = len(board)\n        def cell(s):\n            r, c = divmod(s - 1, n)\n            row = n - 1 - r\n            col = c if r % 2 == 0 else n - 1 - c\n            return row, col\n        seen, q = {1}, deque([(1, 0)])\n        while q:\n            s, d = q.popleft()\n            for nxt in range(s + 1, min(s + 6, n * n) + 1):\n                r, c = cell(nxt)\n                if board[r][c] != -1: nxt = board[r][c]\n                if nxt == n * n: return d + 1\n                if nxt not in seen: seen.add(nxt); q.append((nxt, d + 1))\n        return -1",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "BFS over squares: each square connects to the next 6 squares; the first time you reach the end is the minimum.",
   "frames": [
    {
     "title": "Board",
     "description": "Squares 1–9 in a zigzag. Landing on 2 takes a ladder up to 8.",
     "codeLines": [
      4
     ],
     "facts": {},
     "rows": [
      {
       "name": "board (top → bottom)",
       "cells": [
        [
         "7",
         "8",
         "9"
        ],
        [
         "6",
         "5",
         "4"
        ],
        [
         "1",
         "2→8",
         "3"
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
     "title": "Start",
     "description": "Square 1 after 0 moves.",
     "codeLines": [
      9
     ],
     "facts": {},
     "rows": [
      {
       "name": "reachable in 0",
       "cells": [
        "1"
       ],
       "hot": [
        0
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Moves = 1",
     "description": "Roll 1 → square 2 → ladder to 8. Rolls 2–6 → squares 3,4,5,6,7.",
     "codeLines": [
      14,
      16
     ],
     "facts": {},
     "rows": [
      {
       "name": "reachable in 1",
       "cells": [
        "8",
        "3",
        "4",
        "5",
        "6",
        "7"
       ],
       "hot": [
        0
       ],
       "marks": {}
      }
     ],
     "sub": [
      {
       "description": "reachable in 1[0] = 8",
       "codeLines": [
        14,
        16
       ],
       "facts": {},
       "rows": [
        {
         "name": "reachable in 1",
         "cells": [
          "8",
          "·",
          "·",
          "·",
          "·",
          "·"
         ],
         "hot": [
          0
         ],
         "marks": {}
        }
       ]
      },
      {
       "description": "reachable in 1[1] = 3",
       "codeLines": [
        14,
        16
       ],
       "facts": {},
       "rows": [
        {
         "name": "reachable in 1",
         "cells": [
          "8",
          "3",
          "·",
          "·",
          "·",
          "·"
         ],
         "hot": [
          1
         ],
         "marks": {}
        }
       ]
      },
      {
       "description": "reachable in 1[2] = 4",
       "codeLines": [
        14,
        16
       ],
       "facts": {},
       "rows": [
        {
         "name": "reachable in 1",
         "cells": [
          "8",
          "3",
          "4",
          "·",
          "·",
          "·"
         ],
         "hot": [
          2
         ],
         "marks": {}
        }
       ]
      },
      {
       "description": "reachable in 1[3] = 5",
       "codeLines": [
        14,
        16
       ],
       "facts": {},
       "rows": [
        {
         "name": "reachable in 1",
         "cells": [
          "8",
          "3",
          "4",
          "5",
          "·",
          "·"
         ],
         "hot": [
          3
         ],
         "marks": {}
        }
       ]
      },
      {
       "description": "reachable in 1[4] = 6",
       "codeLines": [
        14,
        16
       ],
       "facts": {},
       "rows": [
        {
         "name": "reachable in 1",
         "cells": [
          "8",
          "3",
          "4",
          "5",
          "6",
          "·"
         ],
         "hot": [
          4
         ],
         "marks": {}
        }
       ]
      },
      {
       "description": "reachable in 1[5] = 7. Roll 1 → square 2 → ladder to 8. Rolls 2–6 → squares 3,4,5,6,7.",
       "codeLines": [
        14,
        16
       ],
       "facts": {},
       "rows": [
        {
         "name": "reachable in 1",
         "cells": [
          "8",
          "3",
          "4",
          "5",
          "6",
          "7"
         ],
         "hot": [
          5
         ],
         "marks": {}
        }
       ]
      }
     ]
    },
    {
     "title": "Moves = 2",
     "description": "From 8 roll 1 → square 9 = the end.",
     "codeLines": [
      15
     ],
     "facts": {},
     "rows": [
      {
       "name": "reachable in 2",
       "cells": [
        "9"
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
     "description": "Minimum 2 moves.",
     "codeLines": [
      15
     ],
     "facts": {},
     "rows": [
      {
       "name": "answer",
       "cells": [
        "2"
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
   "name": "Flatten the board first",
   "tag": "Alternative",
   "code": "class Solution:\n    def snakesAndLadders(self, board):\n        n = len(board); cells = [None]; ltr = True\n        for row in range(n - 1, -1, -1):\n            cols = range(n) if ltr else range(n - 1, -1, -1)\n            for col in cols: cells.append(board[row][col])\n            ltr = not ltr\n        dist = {1: 0}; q = deque([1])\n        while q:\n            s = q.popleft()\n            for nxt in range(s + 1, min(s + 6, n * n) + 1):\n                dest = cells[nxt] if cells[nxt] != -1 else nxt\n                if dest == n * n: return dist[s] + 1\n                if dest not in dist: dist[dest] = dist[s] + 1; q.append(dest)\n        return -1",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "Turn the zig-zag board into a 1-D list of destinations, then BFS.",
   "frames": [],
   "alt": true
  }
 ]
};
