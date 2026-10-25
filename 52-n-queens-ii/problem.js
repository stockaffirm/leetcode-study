window.PROBLEM = {
 "id": "52",
 "title": "N-Queens II",
 "level": "Hard",
 "topic": "Backtracking",
 "question": "Place n queens on an n × n chessboard so that no two queens attack each other — no two share a row, a column, or a diagonal. Return how many different complete arrangements exist. Example: n=4 → 2 arrangements.",
 "why": "On a 4×4 board there are 2 solutions.",
 "idea": "Place one queen per row; skip columns and diagonals already used; undo when stuck.",
 "input": "n = 4",
 "output": "2",
 "notes": [],
 "best": "Place one queen per row; skip columns and diagonals already used; undo when stuck.",
 "variants": [
  {
   "name": "Backtracking with sets",
   "code": "class Solution:\n    def totalNQueens(self, n):\n        cols, d1, d2 = set(), set(), set()\n        def go(r):\n            if r == n: return 1\n            count = 0\n            for c in range(n):\n                if c in cols or r - c in d1 or r + c in d2: continue\n                cols.add(c); d1.add(r - c); d2.add(r + c)\n                count += go(r + 1)\n                cols.remove(c); d1.remove(r - c); d2.remove(r + c)\n            return count\n        return go(0)",
   "time": "O(n!)",
   "space": "O(n)",
   "explain": "Place one queen per row; skip columns and diagonals already used; undo when stuck.",
   "frames": [
    {
     "title": "Row by row",
     "description": "One queen per row, avoiding attacked squares.",
     "codeLines": [
      4
     ],
     "facts": {},
     "rows": [
      {
       "name": "board",
       "cells": [
        [
         "·",
         "·",
         "·",
         "·"
        ],
        [
         "·",
         "·",
         "·",
         "·"
        ],
        [
         "·",
         "·",
         "·",
         "·"
        ],
        [
         "·",
         "·",
         "·",
         "·"
        ]
       ],
       "hot": [],
       "marks": {},
       "kind": "grid"
      }
     ]
    },
    {
     "title": "Solution 1",
     "description": "Queens at columns 1, 3, 0, 2.",
     "codeLines": [
      5
     ],
     "facts": {
      "found": 1
     },
     "rows": [
      {
       "name": "board",
       "cells": [
        [
         "·",
         "Q",
         "·",
         "·"
        ],
        [
         "·",
         "·",
         "·",
         "Q"
        ],
        [
         "Q",
         "·",
         "·",
         "·"
        ],
        [
         "·",
         "·",
         "Q",
         "·"
        ]
       ],
       "hot": [
        "0,1",
        "1,3",
        "2,0",
        "3,2"
       ],
       "marks": {},
       "kind": "grid"
      }
     ],
     "sub": [
      {
       "description": "board[0][1] = Q",
       "codeLines": [
        5
       ],
       "facts": {},
       "rows": [
        {
         "name": "board",
         "cells": [
          [
           "·",
           "Q",
           "·",
           "·"
          ],
          [
           "·",
           "·",
           "·",
           "·"
          ],
          [
           "·",
           "·",
           "·",
           "·"
          ],
          [
           "·",
           "·",
           "·",
           "·"
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
       "description": "board[1][3] = Q",
       "codeLines": [
        5
       ],
       "facts": {},
       "rows": [
        {
         "name": "board",
         "cells": [
          [
           "·",
           "Q",
           "·",
           "·"
          ],
          [
           "·",
           "·",
           "·",
           "Q"
          ],
          [
           "·",
           "·",
           "·",
           "·"
          ],
          [
           "·",
           "·",
           "·",
           "·"
          ]
         ],
         "hot": [
          "1,3"
         ],
         "marks": {},
         "kind": "grid"
        }
       ]
      },
      {
       "description": "board[2][0] = Q",
       "codeLines": [
        5
       ],
       "facts": {},
       "rows": [
        {
         "name": "board",
         "cells": [
          [
           "·",
           "Q",
           "·",
           "·"
          ],
          [
           "·",
           "·",
           "·",
           "Q"
          ],
          [
           "Q",
           "·",
           "·",
           "·"
          ],
          [
           "·",
           "·",
           "·",
           "·"
          ]
         ],
         "hot": [
          "2,0"
         ],
         "marks": {},
         "kind": "grid"
        }
       ]
      },
      {
       "description": "board[3][2] = Q. Queens at columns 1, 3, 0, 2.",
       "codeLines": [
        5
       ],
       "facts": {
        "found": 1
       },
       "rows": [
        {
         "name": "board",
         "cells": [
          [
           "·",
           "Q",
           "·",
           "·"
          ],
          [
           "·",
           "·",
           "·",
           "Q"
          ],
          [
           "Q",
           "·",
           "·",
           "·"
          ],
          [
           "·",
           "·",
           "Q",
           "·"
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
     ]
    },
    {
     "title": "Solution 2",
     "description": "Queens at columns 2, 0, 3, 1 (the mirror image).",
     "codeLines": [
      5
     ],
     "facts": {
      "found": 2
     },
     "rows": [
      {
       "name": "board",
       "cells": [
        [
         "·",
         "·",
         "Q",
         "·"
        ],
        [
         "Q",
         "·",
         "·",
         "·"
        ],
        [
         "·",
         "·",
         "·",
         "Q"
        ],
        [
         "·",
         "Q",
         "·",
         "·"
        ]
       ],
       "hot": [
        "0,2",
        "1,0",
        "2,3",
        "3,1"
       ],
       "marks": {},
       "kind": "grid"
      }
     ],
     "sub": [
      {
       "description": "board[0][1] = ·",
       "codeLines": [
        5
       ],
       "facts": {},
       "rows": [
        {
         "name": "board",
         "cells": [
          [
           "·",
           "·",
           "·",
           "·"
          ],
          [
           "·",
           "·",
           "·",
           "Q"
          ],
          [
           "Q",
           "·",
           "·",
           "·"
          ],
          [
           "·",
           "·",
           "Q",
           "·"
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
       "description": "board[0][2] = Q",
       "codeLines": [
        5
       ],
       "facts": {},
       "rows": [
        {
         "name": "board",
         "cells": [
          [
           "·",
           "·",
           "Q",
           "·"
          ],
          [
           "·",
           "·",
           "·",
           "Q"
          ],
          [
           "Q",
           "·",
           "·",
           "·"
          ],
          [
           "·",
           "·",
           "Q",
           "·"
          ]
         ],
         "hot": [
          "0,2"
         ],
         "marks": {},
         "kind": "grid"
        }
       ]
      },
      {
       "description": "board[1][0] = Q",
       "codeLines": [
        5
       ],
       "facts": {},
       "rows": [
        {
         "name": "board",
         "cells": [
          [
           "·",
           "·",
           "Q",
           "·"
          ],
          [
           "Q",
           "·",
           "·",
           "Q"
          ],
          [
           "Q",
           "·",
           "·",
           "·"
          ],
          [
           "·",
           "·",
           "Q",
           "·"
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
       "description": "board[1][3] = ·",
       "codeLines": [
        5
       ],
       "facts": {},
       "rows": [
        {
         "name": "board",
         "cells": [
          [
           "·",
           "·",
           "Q",
           "·"
          ],
          [
           "Q",
           "·",
           "·",
           "·"
          ],
          [
           "Q",
           "·",
           "·",
           "·"
          ],
          [
           "·",
           "·",
           "Q",
           "·"
          ]
         ],
         "hot": [
          "1,3"
         ],
         "marks": {},
         "kind": "grid"
        }
       ]
      },
      {
       "description": "board[2][0] = ·",
       "codeLines": [
        5
       ],
       "facts": {},
       "rows": [
        {
         "name": "board",
         "cells": [
          [
           "·",
           "·",
           "Q",
           "·"
          ],
          [
           "Q",
           "·",
           "·",
           "·"
          ],
          [
           "·",
           "·",
           "·",
           "·"
          ],
          [
           "·",
           "·",
           "Q",
           "·"
          ]
         ],
         "hot": [
          "2,0"
         ],
         "marks": {},
         "kind": "grid"
        }
       ]
      },
      {
       "description": "board[2][3] = Q",
       "codeLines": [
        5
       ],
       "facts": {},
       "rows": [
        {
         "name": "board",
         "cells": [
          [
           "·",
           "·",
           "Q",
           "·"
          ],
          [
           "Q",
           "·",
           "·",
           "·"
          ],
          [
           "·",
           "·",
           "·",
           "Q"
          ],
          [
           "·",
           "·",
           "Q",
           "·"
          ]
         ],
         "hot": [
          "2,3"
         ],
         "marks": {},
         "kind": "grid"
        }
       ]
      },
      {
       "description": "board[3][1] = Q",
       "codeLines": [
        5
       ],
       "facts": {},
       "rows": [
        {
         "name": "board",
         "cells": [
          [
           "·",
           "·",
           "Q",
           "·"
          ],
          [
           "Q",
           "·",
           "·",
           "·"
          ],
          [
           "·",
           "·",
           "·",
           "Q"
          ],
          [
           "·",
           "Q",
           "Q",
           "·"
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
       "description": "board[3][2] = ·. Queens at columns 2, 0, 3, 1 (the mirror image).",
       "codeLines": [
        5
       ],
       "facts": {
        "found": 2
       },
       "rows": [
        {
         "name": "board",
         "cells": [
          [
           "·",
           "·",
           "Q",
           "·"
          ],
          [
           "Q",
           "·",
           "·",
           "·"
          ],
          [
           "·",
           "·",
           "·",
           "Q"
          ],
          [
           "·",
           "Q",
           "·",
           "·"
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
     ]
    },
    {
     "title": "Return",
     "description": "2 solutions.",
     "codeLines": [
      13
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
   "name": "Bitmask backtracking",
   "tag": "Optimal",
   "code": "class Solution:\n    def totalNQueens(self, n):\n        full = (1 << n) - 1\n        def go(cols, d1, d2):\n            if cols == full: return 1\n            count = 0; avail = full & ~(cols | d1 | d2)\n            while avail:\n                bit = avail & -avail; avail -= bit\n                count += go(cols | bit, ((d1 | bit) << 1) & full, (d2 | bit) >> 1)\n            return count\n        return go(0, 0, 0)",
   "time": "O(n!)",
   "space": "O(n)",
   "explain": "Columns and both diagonals are bit masks; free squares come from one AND.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Check every permutation",
   "tag": "Brute force",
   "code": "class Solution:\n    def totalNQueens(self, n):\n        count = 0\n        for p in permutations(range(n)):\n            if len({i + p[i] for i in range(n)}) == n and len({i - p[i] for i in range(n)}) == n: count += 1\n        return count",
   "time": "O(n·n!)",
   "space": "O(n)",
   "explain": "A permutation places one queen per row/column; reject those sharing a diagonal.",
   "frames": [],
   "alt": true
  }
 ]
};
