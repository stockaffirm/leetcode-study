window.PROBLEM = {
 "id": "64",
 "title": "Minimum Path Sum",
 "level": "Medium",
 "topic": "Multidimensional DP",
 "question": "Given a grid of non-negative numbers, move from the top-left cell to the bottom-right cell, only RIGHT or DOWN, adding up the numbers of cells you pass. Return the smallest possible sum. Example: [[1,3,1],[1,5,1],[4,2,1]] → 1 → 3 → 1 → 1 → 1 = 7.",
 "why": "[[1,3,1],[1,5,1],[4,2,1]] → 1 → 3 → 1 → 1 → 1 = 7.",
 "idea": "Each cell = its value + the smaller of (cell above, cell to the left).",
 "input": "[[1,3,1],[1,5,1],[4,2,1]]",
 "output": "7",
 "notes": [],
 "best": "Each cell = its value + the smaller of (cell above, cell to the left).",
 "variants": [
  {
   "name": "In-place DP",
   "code": "class Solution:\n    def minPathSum(self, grid):\n        m, n = len(grid), len(grid[0])\n        for i in range(m):\n            for j in range(n):\n                if i == 0 and j == 0: continue\n                up = grid[i-1][j] if i else float('inf'); left = grid[i][j-1] if j else float('inf')\n                grid[i][j] += min(up, left)\n        return grid[-1][-1]",
   "time": "O(m·n)",
   "space": "O(1)",
   "explain": "Each cell = its value + the smaller of (cell above, cell to the left).",
   "frames": [
    {
     "title": "Grid",
     "description": "Cheapest way to reach each cell.",
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
         "3",
         "1"
        ],
        [
         "1",
         "5",
         "1"
        ],
        [
         "4",
         "2",
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
     "title": "Row 0",
     "description": "Only from the left: 1, 4, 5.",
     "codeLines": [
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "grid",
       "cells": [
        [
         "1",
         "4",
         "5"
        ],
        [
         "1",
         "5",
         "1"
        ],
        [
         "4",
         "2",
         "1"
        ]
       ],
       "hot": [
        "0,0",
        "0,1",
        "0,2"
       ],
       "marks": {},
       "kind": "grid"
      }
     ],
     "sub": [
      {
       "description": "cell (0,1): 3 + only from the left 1 = 4",
       "codeLines": [
        8
       ],
       "facts": {},
       "rows": [
        {
         "name": "grid",
         "cells": [
          [
           "1",
           "4",
           "1"
          ],
          [
           "1",
           "5",
           "1"
          ],
          [
           "4",
           "2",
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
       "description": "cell (0,2): 1 + only from the left 4 = 5",
       "codeLines": [
        8
       ],
       "facts": {},
       "rows": [
        {
         "name": "grid",
         "cells": [
          [
           "1",
           "4",
           "5"
          ],
          [
           "1",
           "5",
           "1"
          ],
          [
           "4",
           "2",
           "1"
          ]
         ],
         "hot": [
          "0,2"
         ],
         "marks": {},
         "kind": "grid"
        }
       ]
      }
     ]
    },
    {
     "title": "Row 1",
     "description": "1+1 = 2; 5+min(4,2) = 7; 1+min(5,7) = 6.",
     "codeLines": [
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "grid",
       "cells": [
        [
         "1",
         "4",
         "5"
        ],
        [
         "2",
         "7",
         "6"
        ],
        [
         "4",
         "2",
         "1"
        ]
       ],
       "hot": [
        "1,0",
        "1,1",
        "1,2"
       ],
       "marks": {},
       "kind": "grid"
      }
     ],
     "sub": [
      {
       "description": "cell (1,0): 1 + only from above 1 = 2",
       "codeLines": [
        8
       ],
       "facts": {},
       "rows": [
        {
         "name": "grid",
         "cells": [
          [
           "1",
           "4",
           "5"
          ],
          [
           "2",
           "5",
           "1"
          ],
          [
           "4",
           "2",
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
       "description": "cell (1,1): 5 + min(up 4, left 2) = 2 = 7",
       "codeLines": [
        8
       ],
       "facts": {},
       "rows": [
        {
         "name": "grid",
         "cells": [
          [
           "1",
           "4",
           "5"
          ],
          [
           "2",
           "7",
           "1"
          ],
          [
           "4",
           "2",
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
      },
      {
       "description": "cell (1,2): 1 + min(up 5, left 7) = 5 = 6",
       "codeLines": [
        8
       ],
       "facts": {},
       "rows": [
        {
         "name": "grid",
         "cells": [
          [
           "1",
           "4",
           "5"
          ],
          [
           "2",
           "7",
           "6"
          ],
          [
           "4",
           "2",
           "1"
          ]
         ],
         "hot": [
          "1,2"
         ],
         "marks": {},
         "kind": "grid"
        }
       ]
      }
     ]
    },
    {
     "title": "Row 2",
     "description": "4+2 = 6; 2+min(7,6) = 8; 1+min(6,8) = 7.",
     "codeLines": [
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "grid",
       "cells": [
        [
         "1",
         "4",
         "5"
        ],
        [
         "2",
         "7",
         "6"
        ],
        [
         "6",
         "8",
         "7"
        ]
       ],
       "hot": [
        "2,0",
        "2,1",
        "2,2"
       ],
       "marks": {},
       "kind": "grid"
      }
     ],
     "sub": [
      {
       "description": "cell (2,0): 4 + only from above 2 = 6",
       "codeLines": [
        8
       ],
       "facts": {},
       "rows": [
        {
         "name": "grid",
         "cells": [
          [
           "1",
           "4",
           "5"
          ],
          [
           "2",
           "7",
           "6"
          ],
          [
           "6",
           "2",
           "1"
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
       "description": "cell (2,1): 2 + min(up 7, left 6) = 6 = 8",
       "codeLines": [
        8
       ],
       "facts": {},
       "rows": [
        {
         "name": "grid",
         "cells": [
          [
           "1",
           "4",
           "5"
          ],
          [
           "2",
           "7",
           "6"
          ],
          [
           "6",
           "8",
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
       "description": "cell (2,2): 1 + min(up 6, left 8) = 6 = 7",
       "codeLines": [
        8
       ],
       "facts": {},
       "rows": [
        {
         "name": "grid",
         "cells": [
          [
           "1",
           "4",
           "5"
          ],
          [
           "2",
           "7",
           "6"
          ],
          [
           "6",
           "8",
           "7"
          ]
         ],
         "hot": [
          "2,2"
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
     "description": "Bottom-right = 7.",
     "codeLines": [
      9
     ],
     "facts": {},
     "rows": [
      {
       "name": "grid",
       "cells": [
        [
         "1",
         "4",
         "5"
        ],
        [
         "2",
         "7",
         "6"
        ],
        [
         "6",
         "8",
         "7"
        ]
       ],
       "hot": [
        "2,2"
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
   "name": "Rolling row",
   "tag": "Optimal space",
   "code": "class Solution:\n    def minPathSum(self, grid):\n        m, n = len(grid), len(grid[0]); dp = [float('inf')] * n; dp[0] = 0\n        for i in range(m):\n            for j in range(n):\n                if j > 0: dp[j] = min(dp[j], dp[j - 1])\n                dp[j] += grid[i][j]\n        return dp[-1]",
   "time": "O(m·n)",
   "space": "O(n)",
   "explain": "Keep only one row of costs.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Recursion + memo",
   "tag": "Alternative",
   "code": "class Solution:\n    def minPathSum(self, grid):\n        @lru_cache(None)\n        def go(i, j):\n            if i == len(grid) - 1 and j == len(grid[0]) - 1: return grid[i][j]\n            best = float('inf')\n            if i + 1 < len(grid): best = min(best, go(i + 1, j))\n            if j + 1 < len(grid[0]): best = min(best, go(i, j + 1))\n            return grid[i][j] + best\n        return go(0, 0)",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Cheapest path from (i, j) to the corner.",
   "frames": [],
   "alt": true
  }
 ]
};
