window.PROBLEM = {
 "id": "54",
 "title": "Spiral Matrix",
 "level": "Medium",
 "topic": "Matrix",
 "question": "Given a grid (matrix) of numbers, return all its numbers in spiral order: go right along the top row, down the right column, left along the bottom row, up the left column, then repeat on the inner layer. Example: [[1,2,3],[4,5,6],[7,8,9]] → [1,2,3,6,9,8,7,4,5].",
 "why": "[[1,2,3],[4,5,6],[7,8,9]] → 1,2,3,6,9,8,7,4,5.",
 "idea": "Peel off the top row, then rotate what's left so the next side becomes the top.",
 "input": "[[1,2,3],[4,5,6],[7,8,9]]",
 "output": "[1,2,3,6,9,8,7,4,5]",
 "notes": [],
 "best": "Peel off the top row, then rotate what's left so the next side becomes the top.",
 "variants": [
  {
   "name": "Peel and rotate",
   "code": "class Solution:\n    def spiralOrder(self, m):\n        res = []\n        while m:\n            res += m.pop(0)\n            m = [list(r) for r in zip(*m)][::-1]\n        return res",
   "time": "O(n·m)",
   "space": "O(n·m)",
   "explain": "Peel off the top row, then rotate what's left so the next side becomes the top.",
   "frames": [
    {
     "title": "Start",
     "description": "Take the first row.",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "m",
       "cells": [
        [
         "1",
         "2",
         "3"
        ],
        [
         "4",
         "5",
         "6"
        ],
        [
         "7",
         "8",
         "9"
        ]
       ],
       "hot": [
        "0,0",
        "0,1",
        "0,2"
       ],
       "marks": {},
       "kind": "grid"
      },
      {
       "name": "res",
       "cells": [
        "·"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Rotate",
     "description": "Left over: [[4,5,6],[7,8,9]] rotated so the right side is now the top.",
     "codeLines": [
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "m",
       "cells": [
        [
         "6",
         "9"
        ],
        [
         "5",
         "8"
        ],
        [
         "4",
         "7"
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
       "name": "res",
       "cells": [
        "1",
        "2",
        "3"
       ],
       "hot": [
        0,
        1,
        2
       ],
       "marks": {}
      }
     ],
     "sub": [
      {
       "description": "m[0][0] = 6",
       "codeLines": [
        6
       ],
       "facts": {},
       "rows": [
        {
         "name": "m",
         "cells": [
          [
           "6",
           "2"
          ],
          [
           "4",
           "5"
          ],
          [
           "7",
           "8"
          ]
         ],
         "hot": [
          "0,0"
         ],
         "marks": {},
         "kind": "grid"
        },
        {
         "name": "res",
         "cells": [
          "1",
          "2",
          "3"
         ],
         "hot": [
          0,
          1,
          2
         ],
         "marks": {}
        }
       ]
      },
      {
       "description": "m[0][1] = 9",
       "codeLines": [
        6
       ],
       "facts": {},
       "rows": [
        {
         "name": "m",
         "cells": [
          [
           "6",
           "9"
          ],
          [
           "4",
           "5"
          ],
          [
           "7",
           "8"
          ]
         ],
         "hot": [
          "0,1"
         ],
         "marks": {},
         "kind": "grid"
        },
        {
         "name": "res",
         "cells": [
          "1",
          "2",
          "3"
         ],
         "hot": [
          0,
          1,
          2
         ],
         "marks": {}
        }
       ]
      },
      {
       "description": "m[1][0] = 5",
       "codeLines": [
        6
       ],
       "facts": {},
       "rows": [
        {
         "name": "m",
         "cells": [
          [
           "6",
           "9"
          ],
          [
           "5",
           "5"
          ],
          [
           "7",
           "8"
          ]
         ],
         "hot": [
          "1,0"
         ],
         "marks": {},
         "kind": "grid"
        },
        {
         "name": "res",
         "cells": [
          "1",
          "2",
          "3"
         ],
         "hot": [
          0,
          1,
          2
         ],
         "marks": {}
        }
       ]
      },
      {
       "description": "m[1][1] = 8",
       "codeLines": [
        6
       ],
       "facts": {},
       "rows": [
        {
         "name": "m",
         "cells": [
          [
           "6",
           "9"
          ],
          [
           "5",
           "8"
          ],
          [
           "7",
           "8"
          ]
         ],
         "hot": [
          "1,1"
         ],
         "marks": {},
         "kind": "grid"
        },
        {
         "name": "res",
         "cells": [
          "1",
          "2",
          "3"
         ],
         "hot": [
          0,
          1,
          2
         ],
         "marks": {}
        }
       ]
      },
      {
       "description": "m[2][0] = 4",
       "codeLines": [
        6
       ],
       "facts": {},
       "rows": [
        {
         "name": "m",
         "cells": [
          [
           "6",
           "9"
          ],
          [
           "5",
           "8"
          ],
          [
           "4",
           "8"
          ]
         ],
         "hot": [
          "2,0"
         ],
         "marks": {},
         "kind": "grid"
        },
        {
         "name": "res",
         "cells": [
          "1",
          "2",
          "3"
         ],
         "hot": [
          0,
          1,
          2
         ],
         "marks": {}
        }
       ]
      },
      {
       "description": "m[2][1] = 7. Left over: [[4,5,6],[7,8,9]] rotated so the right side is now the top.",
       "codeLines": [
        6
       ],
       "facts": {},
       "rows": [
        {
         "name": "m",
         "cells": [
          [
           "6",
           "9"
          ],
          [
           "5",
           "8"
          ],
          [
           "4",
           "7"
          ]
         ],
         "hot": [
          "2,1"
         ],
         "marks": {},
         "kind": "grid"
        },
        {
         "name": "res",
         "cells": [
          "1",
          "2",
          "3"
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
     ]
    },
    {
     "title": "Take 6, 9",
     "description": "Peel the top row.",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "m",
       "cells": [
        [
         "5",
         "8"
        ],
        [
         "4",
         "7"
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
       "name": "res",
       "cells": [
        "1",
        "2",
        "3",
        "6",
        "9"
       ],
       "hot": [
        3,
        4
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Rotate, take 8, 7",
     "description": "Rotate again; the top row is 8, 7.",
     "codeLines": [
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "m",
       "cells": [
        [
         "5",
         "4"
        ]
       ],
       "hot": [],
       "marks": {},
       "kind": "grid"
      },
      {
       "name": "res",
       "cells": [
        "1",
        "2",
        "3",
        "6",
        "9",
        "8",
        "7"
       ],
       "hot": [
        5,
        6
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Take 4, then 5",
     "description": "The last pieces.",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "res",
       "cells": [
        "1",
        "2",
        "3",
        "6",
        "9",
        "8",
        "7",
        "4",
        "5"
       ],
       "hot": [
        7,
        8
       ],
       "marks": {}
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "Layer by layer (four boundaries)",
   "tag": "Alternative",
   "code": "class Solution:\n    def spiralOrder(self, m):\n        res = []; top, bottom, left, right = 0, len(m) - 1, 0, len(m[0]) - 1\n        while top <= bottom and left <= right:\n            for j in range(left, right + 1): res.append(m[top][j])\n            for i in range(top + 1, bottom + 1): res.append(m[i][right])\n            if top < bottom and left < right:\n                for j in range(right - 1, left - 1, -1): res.append(m[bottom][j])\n                for i in range(bottom - 1, top, -1): res.append(m[i][left])\n            top += 1; bottom -= 1; left += 1; right -= 1\n        return res",
   "time": "O(m·n)",
   "space": "O(1)",
   "explain": "Walk the top, right, bottom and left edges, then shrink the boundaries.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Direction vectors + visited",
   "tag": "Alternative",
   "code": "class Solution:\n    def spiralOrder(self, m):\n        rows, cols = len(m), len(m[0]); seen = [[False] * cols for _ in range(rows)]\n        dr = [0, 1, 0, -1]; dc = [1, 0, -1, 0]; r = c = di = 0; res = []\n        for _ in range(rows * cols):\n            res.append(m[r][c]); seen[r][c] = True\n            nr, nc = r + dr[di], c + dc[di]\n            if 0 <= nr < rows and 0 <= nc < cols and not seen[nr][nc]: r, c = nr, nc\n            else:\n                di = (di + 1) % 4; r, c = r + dr[di], c + dc[di]\n        return res",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Keep moving; turn right whenever the next cell is out of range or seen.",
   "frames": [],
   "alt": true
  }
 ]
};
