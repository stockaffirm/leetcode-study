window.PROBLEM = {
 "id": "120",
 "title": "Triangle",
 "level": "Medium",
 "topic": "Multidimensional DP",
 "question": "A triangle of numbers has 1 number in the first row, 2 in the second, and so on. Start at the top and go down one row at a time; from a number you may step to either of the two numbers directly beneath it (the one straight below, or the one just below to the right). Return the smallest possible sum of the numbers along such a path from top to bottom. Example: [[2],[3,4],[6,5,7],[4,1,8,3]] → 2 + 3 + 5 + 1 = 11.",
 "why": "[[2],[3,4],[6,5,7],[4,1,8,3]] → 2 + 3 + 5 + 1 = 11.",
 "idea": "Work from the bottom up: each cell = its value + the smaller of the two cells below it.",
 "input": "[[2],[3,4],[6,5,7],[4,1,8,3]]",
 "output": "11",
 "notes": [],
 "best": "Work from the bottom up: each cell = its value + the smaller of the two cells below it.",
 "variants": [
  {
   "name": "Bottom-up from the last row",
   "code": "class Solution:\n    def minimumTotal(self, triangle):\n        dp = triangle[-1][:]\n        for row in range(len(triangle) - 2, -1, -1):\n            for i in range(len(triangle[row])):\n                dp[i] = triangle[row][i] + min(dp[i], dp[i + 1])\n        return dp[0]",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Work from the bottom up: each cell = its value + the smaller of the two cells below it.",
   "frames": [
    {
     "title": "Bottom row",
     "description": "Start with the last row: [4,1,8,3].",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "dp",
       "cells": [
        "4",
        "1",
        "8",
        "3"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Row [6,5,7]",
     "description": "6+min(4,1)=7, 5+min(1,8)=6, 7+min(8,3)=10",
     "codeLines": [
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "dp",
       "cells": [
        "7",
        "6",
        "10"
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
       "description": "dp[0] = 6 + min(4, 1) = 7",
       "codeLines": [
        6
       ],
       "facts": {},
       "rows": [
        {
         "name": "row",
         "cells": [
          "6",
          "5",
          "7"
         ],
         "hot": [
          0
         ],
         "marks": {}
        },
        {
         "name": "dp",
         "cells": [
          "7",
          "1",
          "8"
         ],
         "hot": [
          0
         ],
         "marks": {}
        }
       ]
      },
      {
       "description": "dp[1] = 5 + min(1, 8) = 6",
       "codeLines": [
        6
       ],
       "facts": {},
       "rows": [
        {
         "name": "row",
         "cells": [
          "6",
          "5",
          "7"
         ],
         "hot": [
          1
         ],
         "marks": {}
        },
        {
         "name": "dp",
         "cells": [
          "7",
          "6",
          "8"
         ],
         "hot": [
          1
         ],
         "marks": {}
        }
       ]
      },
      {
       "description": "dp[2] = 7 + min(8, 3) = 10",
       "codeLines": [
        6
       ],
       "facts": {},
       "rows": [
        {
         "name": "row",
         "cells": [
          "6",
          "5",
          "7"
         ],
         "hot": [
          2
         ],
         "marks": {}
        },
        {
         "name": "dp",
         "cells": [
          "7",
          "6",
          "10"
         ],
         "hot": [
          2
         ],
         "marks": {}
        }
       ]
      }
     ]
    },
    {
     "title": "Row [3,4]",
     "description": "3+min(7,6)=9, 4+min(6,10)=10",
     "codeLines": [
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "dp",
       "cells": [
        "9",
        "10"
       ],
       "hot": [
        0,
        1
       ],
       "marks": {}
      }
     ],
     "sub": [
      {
       "description": "dp[0] = 3 + min(7, 6) = 9",
       "codeLines": [
        6
       ],
       "facts": {},
       "rows": [
        {
         "name": "row",
         "cells": [
          "3",
          "4"
         ],
         "hot": [
          0
         ],
         "marks": {}
        },
        {
         "name": "dp",
         "cells": [
          "9",
          "6"
         ],
         "hot": [
          0
         ],
         "marks": {}
        }
       ]
      },
      {
       "description": "dp[1] = 4 + min(6, 10) = 10",
       "codeLines": [
        6
       ],
       "facts": {},
       "rows": [
        {
         "name": "row",
         "cells": [
          "3",
          "4"
         ],
         "hot": [
          1
         ],
         "marks": {}
        },
        {
         "name": "dp",
         "cells": [
          "9",
          "10"
         ],
         "hot": [
          1
         ],
         "marks": {}
        }
       ]
      }
     ]
    },
    {
     "title": "Top",
     "description": "2 + min(9,10) = 11",
     "codeLines": [
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "dp",
       "cells": [
        "11"
       ],
       "hot": [
        0
       ],
       "marks": {}
      }
     ],
     "sub": [
      {
       "description": "dp[0] = 2 + min(9, 10) = 11",
       "codeLines": [
        6
       ],
       "facts": {},
       "rows": [
        {
         "name": "row",
         "cells": [
          "2"
         ],
         "hot": [
          0
         ],
         "marks": {}
        },
        {
         "name": "dp",
         "cells": [
          "11"
         ],
         "hot": [
          0
         ],
         "marks": {}
        }
       ]
      }
     ]
    },
    {
     "title": "Return",
     "description": "11",
     "codeLines": [
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "answer",
       "cells": [
        "11"
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
   "name": "Top-down recursion + memo",
   "tag": "Alternative",
   "code": "class Solution:\n    def minimumTotal(self, triangle):\n        @lru_cache(None)\n        def go(r, c):\n            if r == len(triangle): return 0\n            return triangle[r][c] + min(go(r + 1, c), go(r + 1, c + 1))\n        return go(0, 0)",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "Cost from (row, col) = value + the cheaper of the two cells below.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Modify the triangle in place",
   "tag": "Alternative",
   "code": "class Solution:\n    def minimumTotal(self, triangle):\n        for r in range(len(triangle) - 2, -1, -1):\n            for c in range(len(triangle[r])):\n                triangle[r][c] += min(triangle[r + 1][c], triangle[r + 1][c + 1])\n        return triangle[0][0]",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Fold each row into the one above it, bottom-up.",
   "frames": [],
   "alt": true
  }
 ]
};
