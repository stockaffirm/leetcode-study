window.PROBLEM = {
 "id": "48",
 "title": "Rotate Image",
 "level": "Medium",
 "topic": "Matrix",
 "question": "Given a square grid (n rows and n columns) of numbers, rotate it 90 degrees clockwise by changing the grid itself (don't make a second grid). Example: [[1,2,3],[4,5,6],[7,8,9]] → [[7,4,1],[8,5,2],[9,6,3]].",
 "why": "[[1,2,3],[4,5,6],[7,8,9]] → [[7,4,1],[8,5,2],[9,6,3]].",
 "idea": "Transpose (swap rows and columns), then reverse each row.",
 "input": "[[1,2,3],[4,5,6],[7,8,9]]",
 "output": "[[7,4,1],[8,5,2],[9,6,3]]",
 "notes": [],
 "best": "Transpose (swap rows and columns), then reverse each row.",
 "variants": [
  {
   "name": "Transpose + reverse rows",
   "code": "class Solution:\n    def rotate(self, m):\n        n = len(m)\n        for i in range(n):\n            for j in range(i + 1, n):\n                m[i][j], m[j][i] = m[j][i], m[i][j]\n        for row in m: row.reverse()",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Transpose (swap rows and columns), then reverse each row.",
   "frames": [
    {
     "title": "Start",
     "description": "3×3 grid.",
     "codeLines": [
      3
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
       "hot": [],
       "marks": {},
       "kind": "grid"
      }
     ]
    },
    {
     "title": "Transpose",
     "description": "Swap m[i][j] with m[j][i].",
     "codeLines": [
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "m",
       "cells": [
        [
         "1",
         "4",
         "7"
        ],
        [
         "2",
         "5",
         "8"
        ],
        [
         "3",
         "6",
         "9"
        ]
       ],
       "hot": [
        "0,1",
        "1,0",
        "0,2",
        "2,0",
        "1,2",
        "2,1"
       ],
       "marks": {},
       "kind": "grid"
      }
     ],
     "sub": [
      {
       "description": "m[0][1] = 4",
       "codeLines": [
        6
       ],
       "facts": {},
       "rows": [
        {
         "name": "m",
         "cells": [
          [
           "1",
           "4",
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
          "0,1"
         ],
         "marks": {},
         "kind": "grid"
        }
       ]
      },
      {
       "description": "m[0][2] = 7",
       "codeLines": [
        6
       ],
       "facts": {},
       "rows": [
        {
         "name": "m",
         "cells": [
          [
           "1",
           "4",
           "7"
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
          "0,2"
         ],
         "marks": {},
         "kind": "grid"
        }
       ]
      },
      {
       "description": "m[1][0] = 2",
       "codeLines": [
        6
       ],
       "facts": {},
       "rows": [
        {
         "name": "m",
         "cells": [
          [
           "1",
           "4",
           "7"
          ],
          [
           "2",
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
          "1,0"
         ],
         "marks": {},
         "kind": "grid"
        }
       ]
      },
      {
       "description": "m[1][2] = 8",
       "codeLines": [
        6
       ],
       "facts": {},
       "rows": [
        {
         "name": "m",
         "cells": [
          [
           "1",
           "4",
           "7"
          ],
          [
           "2",
           "5",
           "8"
          ],
          [
           "7",
           "8",
           "9"
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
       "description": "m[2][0] = 3",
       "codeLines": [
        6
       ],
       "facts": {},
       "rows": [
        {
         "name": "m",
         "cells": [
          [
           "1",
           "4",
           "7"
          ],
          [
           "2",
           "5",
           "8"
          ],
          [
           "3",
           "8",
           "9"
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
       "description": "m[2][1] = 6. Swap m[i][j] with m[j][i].",
       "codeLines": [
        6
       ],
       "facts": {},
       "rows": [
        {
         "name": "m",
         "cells": [
          [
           "1",
           "4",
           "7"
          ],
          [
           "2",
           "5",
           "8"
          ],
          [
           "3",
           "6",
           "9"
          ]
         ],
         "hot": [
          "2,1"
         ],
         "marks": {},
         "kind": "grid"
        }
       ]
      }
     ]
    },
    {
     "title": "Reverse each row",
     "description": "Flip every row left↔right.",
     "codeLines": [
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "m",
       "cells": [
        [
         "7",
         "4",
         "1"
        ],
        [
         "8",
         "5",
         "2"
        ],
        [
         "9",
         "6",
         "3"
        ]
       ],
       "hot": [
        "0,0",
        "1,0",
        "2,0"
       ],
       "marks": {},
       "kind": "grid"
      }
     ],
     "sub": [
      {
       "description": "reverse row 0 (flip it left ↔ right)",
       "codeLines": [
        7
       ],
       "facts": {},
       "rows": [
        {
         "name": "m",
         "cells": [
          [
           "7",
           "4",
           "1"
          ],
          [
           "2",
           "5",
           "8"
          ],
          [
           "3",
           "6",
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
        }
       ]
      },
      {
       "description": "reverse row 1 (flip it left ↔ right)",
       "codeLines": [
        7
       ],
       "facts": {},
       "rows": [
        {
         "name": "m",
         "cells": [
          [
           "7",
           "4",
           "1"
          ],
          [
           "8",
           "5",
           "2"
          ],
          [
           "3",
           "6",
           "9"
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
       ]
      },
      {
       "description": "reverse row 2 (flip it left ↔ right)",
       "codeLines": [
        7
       ],
       "facts": {},
       "rows": [
        {
         "name": "m",
         "cells": [
          [
           "7",
           "4",
           "1"
          ],
          [
           "8",
           "5",
           "2"
          ],
          [
           "9",
           "6",
           "3"
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
       ]
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "Rotate four cells at a time",
   "tag": "Alternative",
   "code": "class Solution:\n    def rotate(self, m):\n        n = len(m)\n        for i in range(n // 2):\n            for j in range(i, n - 1 - i):\n                tmp = m[i][j]\n                m[i][j] = m[n-1-j][i]; m[n-1-j][i] = m[n-1-i][n-1-j]\n                m[n-1-i][n-1-j] = m[j][n-1-i]; m[j][n-1-i] = tmp",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Cycle each group of four symmetric cells one step.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Copy into a new matrix",
   "tag": "Brute force",
   "code": "class Solution:\n    def rotate(self, m):\n        n = len(m); res = [[0] * n for _ in range(n)]\n        for i in range(n):\n            for j in range(n): res[j][n - 1 - i] = m[i][j]\n        m[:] = res",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "Cell (i, j) moves to (j, n−1−i); write the result back.",
   "frames": [],
   "alt": true
  }
 ]
};
