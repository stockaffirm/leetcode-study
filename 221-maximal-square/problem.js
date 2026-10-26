window.PROBLEM = {
 "id": "221",
 "title": "Maximal Square",
 "level": "Medium",
 "topic": "Multidimensional DP",
 "question": "Given a grid of '0' and '1' characters, find the largest SQUARE made only of 1s and return its AREA (side × side). Example grid: 10100 / 10111 / 11111 / 10010 → the largest all-1 square is 2 × 2 (in the middle-right) → area 4.",
 "why": "The largest all-1 square in the sample is 2×2 → area 4.",
 "idea": "dp[i][j] = side of the biggest square ending at that cell = 1 + min(up, left, up-left).",
 "input": "4×5 grid of 1s and 0s",
 "output": "4",
 "notes": [],
 "best": "dp[i][j] = side of the biggest square ending at that cell = 1 + min(up, left, up-left).",
 "variants": [
  {
   "name": "2-D DP table",
   "code": "class Solution:\n    def maximalSquare(self, m):\n        rows, cols = len(m), len(m[0]); dp = [[0] * (cols + 1) for _ in range(rows + 1)]; best = 0\n        for i in range(1, rows + 1):\n            for j in range(1, cols + 1):\n                if m[i-1][j-1] == '1':\n                    dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]); best = max(best, dp[i][j])\n        return best * best",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "dp[i][j] = side of the biggest square ending at that cell = 1 + min(up, left, up-left).",
   "frames": [
    {
     "title": "Grid",
     "description": "1 = filled.",
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
         "0",
         "1",
         "0",
         "0"
        ],
        [
         "1",
         "0",
         "1",
         "1",
         "1"
        ],
        [
         "1",
         "1",
         "1",
         "1",
         "1"
        ],
        [
         "1",
         "0",
         "0",
         "1",
         "0"
        ]
       ],
       "hot": [],
       "marks": {},
       "kind": "grid"
      }
     ]
    },
    {
     "title": "Row 1",
     "description": "Square side ending at each cell.",
     "codeLines": [
      7
     ],
     "facts": {
      "best": 1
     },
     "rows": [
      {
       "name": "dp",
       "cells": [
        [
         "0",
         "0",
         "0",
         "0",
         "0",
         "0"
        ],
        [
         "0",
         "1",
         "0",
         "1",
         "0",
         "0"
        ],
        [
         "0",
         "0",
         "0",
         "0",
         "0",
         "0"
        ],
        [
         "0",
         "0",
         "0",
         "0",
         "0",
         "0"
        ],
        [
         "0",
         "0",
         "0",
         "0",
         "0",
         "0"
        ]
       ],
       "hot": [],
       "marks": {},
       "kind": "grid"
      }
     ],
     "sub": [
      {
       "description": "cell is 1 → 1 + min(up 0, left 0, diag 0) = 1",
       "codeLines": [
        7
       ],
       "facts": {},
       "rows": [
        {
         "name": "dp",
         "cells": [
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "1",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
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
       "description": "cell is 0 → square size 0",
       "codeLines": [
        6
       ],
       "facts": {},
       "rows": [
        {
         "name": "dp",
         "cells": [
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "1",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
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
       "description": "cell is 1 → 1 + min(up 0, left 0, diag 0) = 1",
       "codeLines": [
        7
       ],
       "facts": {},
       "rows": [
        {
         "name": "dp",
         "cells": [
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "1",
           "0",
           "1",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
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
       "description": "cell is 0 → square size 0",
       "codeLines": [
        6
       ],
       "facts": {},
       "rows": [
        {
         "name": "dp",
         "cells": [
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "1",
           "0",
           "1",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ]
         ],
         "hot": [
          "1,4"
         ],
         "marks": {},
         "kind": "grid"
        }
       ]
      },
      {
       "description": "cell is 0 → square size 0",
       "codeLines": [
        6
       ],
       "facts": {},
       "rows": [
        {
         "name": "dp",
         "cells": [
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "1",
           "0",
           "1",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ]
         ],
         "hot": [
          "1,5"
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
     "description": "Square side ending at each cell.",
     "codeLines": [
      7
     ],
     "facts": {
      "best": 1
     },
     "rows": [
      {
       "name": "dp",
       "cells": [
        [
         "0",
         "0",
         "0",
         "0",
         "0",
         "0"
        ],
        [
         "0",
         "1",
         "0",
         "1",
         "0",
         "0"
        ],
        [
         "0",
         "1",
         "0",
         "1",
         "1",
         "1"
        ],
        [
         "0",
         "0",
         "0",
         "0",
         "0",
         "0"
        ],
        [
         "0",
         "0",
         "0",
         "0",
         "0",
         "0"
        ]
       ],
       "hot": [],
       "marks": {},
       "kind": "grid"
      }
     ],
     "sub": [
      {
       "description": "cell is 1 → 1 + min(up 1, left 0, diag 0) = 1",
       "codeLines": [
        7
       ],
       "facts": {},
       "rows": [
        {
         "name": "dp",
         "cells": [
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "1",
           "0",
           "1",
           "0",
           "0"
          ],
          [
           "0",
           "1",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
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
       "description": "cell is 0 → square size 0",
       "codeLines": [
        6
       ],
       "facts": {},
       "rows": [
        {
         "name": "dp",
         "cells": [
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "1",
           "0",
           "1",
           "0",
           "0"
          ],
          [
           "0",
           "1",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
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
       "description": "cell is 1 → 1 + min(up 1, left 0, diag 0) = 1",
       "codeLines": [
        7
       ],
       "facts": {},
       "rows": [
        {
         "name": "dp",
         "cells": [
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "1",
           "0",
           "1",
           "0",
           "0"
          ],
          [
           "0",
           "1",
           "0",
           "1",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
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
       "description": "cell is 1 → 1 + min(up 0, left 1, diag 1) = 1",
       "codeLines": [
        7
       ],
       "facts": {},
       "rows": [
        {
         "name": "dp",
         "cells": [
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "1",
           "0",
           "1",
           "0",
           "0"
          ],
          [
           "0",
           "1",
           "0",
           "1",
           "1",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ]
         ],
         "hot": [
          "2,4"
         ],
         "marks": {},
         "kind": "grid"
        }
       ]
      },
      {
       "description": "cell is 1 → 1 + min(up 0, left 1, diag 0) = 1",
       "codeLines": [
        7
       ],
       "facts": {},
       "rows": [
        {
         "name": "dp",
         "cells": [
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "1",
           "0",
           "1",
           "0",
           "0"
          ],
          [
           "0",
           "1",
           "0",
           "1",
           "1",
           "1"
          ],
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ]
         ],
         "hot": [
          "2,5"
         ],
         "marks": {},
         "kind": "grid"
        }
       ]
      }
     ]
    },
    {
     "title": "Row 3",
     "description": "Square side ending at each cell.",
     "codeLines": [
      7
     ],
     "facts": {
      "best": 2
     },
     "rows": [
      {
       "name": "dp",
       "cells": [
        [
         "0",
         "0",
         "0",
         "0",
         "0",
         "0"
        ],
        [
         "0",
         "1",
         "0",
         "1",
         "0",
         "0"
        ],
        [
         "0",
         "1",
         "0",
         "1",
         "1",
         "1"
        ],
        [
         "0",
         "1",
         "1",
         "1",
         "2",
         "2"
        ],
        [
         "0",
         "0",
         "0",
         "0",
         "0",
         "0"
        ]
       ],
       "hot": [
        "3,4",
        "3,5"
       ],
       "marks": {},
       "kind": "grid"
      }
     ],
     "sub": [
      {
       "description": "cell is 1 → 1 + min(up 1, left 0, diag 0) = 1",
       "codeLines": [
        7
       ],
       "facts": {},
       "rows": [
        {
         "name": "dp",
         "cells": [
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "1",
           "0",
           "1",
           "0",
           "0"
          ],
          [
           "0",
           "1",
           "0",
           "1",
           "1",
           "1"
          ],
          [
           "0",
           "1",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
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
       "description": "cell is 1 → 1 + min(up 0, left 1, diag 1) = 1",
       "codeLines": [
        7
       ],
       "facts": {},
       "rows": [
        {
         "name": "dp",
         "cells": [
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "1",
           "0",
           "1",
           "0",
           "0"
          ],
          [
           "0",
           "1",
           "0",
           "1",
           "1",
           "1"
          ],
          [
           "0",
           "1",
           "1",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ]
         ],
         "hot": [
          "3,2"
         ],
         "marks": {},
         "kind": "grid"
        }
       ]
      },
      {
       "description": "cell is 1 → 1 + min(up 1, left 1, diag 0) = 1",
       "codeLines": [
        7
       ],
       "facts": {},
       "rows": [
        {
         "name": "dp",
         "cells": [
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "1",
           "0",
           "1",
           "0",
           "0"
          ],
          [
           "0",
           "1",
           "0",
           "1",
           "1",
           "1"
          ],
          [
           "0",
           "1",
           "1",
           "1",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ]
         ],
         "hot": [
          "3,3"
         ],
         "marks": {},
         "kind": "grid"
        }
       ]
      },
      {
       "description": "cell is 1 → 1 + min(up 1, left 1, diag 1) = 2",
       "codeLines": [
        7
       ],
       "facts": {},
       "rows": [
        {
         "name": "dp",
         "cells": [
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "1",
           "0",
           "1",
           "0",
           "0"
          ],
          [
           "0",
           "1",
           "0",
           "1",
           "1",
           "1"
          ],
          [
           "0",
           "1",
           "1",
           "1",
           "2",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ]
         ],
         "hot": [
          "3,4"
         ],
         "marks": {},
         "kind": "grid"
        }
       ]
      },
      {
       "description": "cell is 1 → 1 + min(up 1, left 2, diag 1) = 2",
       "codeLines": [
        7
       ],
       "facts": {},
       "rows": [
        {
         "name": "dp",
         "cells": [
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "1",
           "0",
           "1",
           "0",
           "0"
          ],
          [
           "0",
           "1",
           "0",
           "1",
           "1",
           "1"
          ],
          [
           "0",
           "1",
           "1",
           "1",
           "2",
           "2"
          ],
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ]
         ],
         "hot": [
          "3,5"
         ],
         "marks": {},
         "kind": "grid"
        }
       ]
      }
     ]
    },
    {
     "title": "Row 4",
     "description": "Square side ending at each cell.",
     "codeLines": [
      7
     ],
     "facts": {
      "best": 2
     },
     "rows": [
      {
       "name": "dp",
       "cells": [
        [
         "0",
         "0",
         "0",
         "0",
         "0",
         "0"
        ],
        [
         "0",
         "1",
         "0",
         "1",
         "0",
         "0"
        ],
        [
         "0",
         "1",
         "0",
         "1",
         "1",
         "1"
        ],
        [
         "0",
         "1",
         "1",
         "1",
         "2",
         "2"
        ],
        [
         "0",
         "1",
         "0",
         "0",
         "1",
         "0"
        ]
       ],
       "hot": [],
       "marks": {},
       "kind": "grid"
      }
     ],
     "sub": [
      {
       "description": "cell is 1 → 1 + min(up 1, left 0, diag 0) = 1",
       "codeLines": [
        7
       ],
       "facts": {},
       "rows": [
        {
         "name": "dp",
         "cells": [
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "1",
           "0",
           "1",
           "0",
           "0"
          ],
          [
           "0",
           "1",
           "0",
           "1",
           "1",
           "1"
          ],
          [
           "0",
           "1",
           "1",
           "1",
           "2",
           "2"
          ],
          [
           "0",
           "1",
           "0",
           "0",
           "0",
           "0"
          ]
         ],
         "hot": [
          "4,1"
         ],
         "marks": {},
         "kind": "grid"
        }
       ]
      },
      {
       "description": "cell is 0 → square size 0",
       "codeLines": [
        6
       ],
       "facts": {},
       "rows": [
        {
         "name": "dp",
         "cells": [
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "1",
           "0",
           "1",
           "0",
           "0"
          ],
          [
           "0",
           "1",
           "0",
           "1",
           "1",
           "1"
          ],
          [
           "0",
           "1",
           "1",
           "1",
           "2",
           "2"
          ],
          [
           "0",
           "1",
           "0",
           "0",
           "0",
           "0"
          ]
         ],
         "hot": [
          "4,2"
         ],
         "marks": {},
         "kind": "grid"
        }
       ]
      },
      {
       "description": "cell is 0 → square size 0",
       "codeLines": [
        6
       ],
       "facts": {},
       "rows": [
        {
         "name": "dp",
         "cells": [
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "1",
           "0",
           "1",
           "0",
           "0"
          ],
          [
           "0",
           "1",
           "0",
           "1",
           "1",
           "1"
          ],
          [
           "0",
           "1",
           "1",
           "1",
           "2",
           "2"
          ],
          [
           "0",
           "1",
           "0",
           "0",
           "0",
           "0"
          ]
         ],
         "hot": [
          "4,3"
         ],
         "marks": {},
         "kind": "grid"
        }
       ]
      },
      {
       "description": "cell is 1 → 1 + min(up 2, left 0, diag 1) = 1",
       "codeLines": [
        7
       ],
       "facts": {},
       "rows": [
        {
         "name": "dp",
         "cells": [
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "1",
           "0",
           "1",
           "0",
           "0"
          ],
          [
           "0",
           "1",
           "0",
           "1",
           "1",
           "1"
          ],
          [
           "0",
           "1",
           "1",
           "1",
           "2",
           "2"
          ],
          [
           "0",
           "1",
           "0",
           "0",
           "1",
           "0"
          ]
         ],
         "hot": [
          "4,4"
         ],
         "marks": {},
         "kind": "grid"
        }
       ]
      },
      {
       "description": "cell is 0 → square size 0",
       "codeLines": [
        6
       ],
       "facts": {},
       "rows": [
        {
         "name": "dp",
         "cells": [
          [
           "0",
           "0",
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "1",
           "0",
           "1",
           "0",
           "0"
          ],
          [
           "0",
           "1",
           "0",
           "1",
           "1",
           "1"
          ],
          [
           "0",
           "1",
           "1",
           "1",
           "2",
           "2"
          ],
          [
           "0",
           "1",
           "0",
           "0",
           "1",
           "0"
          ]
         ],
         "hot": [
          "4,5"
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
     "description": "Biggest side = 2 → area 4.",
     "codeLines": [
      8
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
   "name": "Brute force",
   "tag": "Brute force",
   "code": "class Solution:\n    def maximalSquare(self, m):\n        rows, cols = len(m), len(m[0]); best = 0\n        for i in range(rows):\n            for j in range(cols):\n                if m[i][j] == '1':\n                    size = 1\n                    while i + size < rows and j + size < cols and all(m[i + size][c] == '1' for c in range(j, j + size + 1)) and all(m[r][j + size] == '1' for r in range(i, i + size + 1)): size += 1\n                    best = max(best, size)\n        return best * best",
   "time": "O((m·n)²)",
   "space": "O(1)",
   "explain": "Grow a square from each 1 while it stays all 1s.",
   "frames": [],
   "alt": true
  },
  {
   "name": "1-row DP",
   "tag": "Optimal space",
   "code": "class Solution:\n    def maximalSquare(self, m):\n        cols = len(m[0]); dp = [0] * (cols + 1); best = 0\n        for i in range(len(m)):\n            prev = 0\n            for j in range(1, cols + 1):\n                tmp = dp[j]\n                if m[i][j - 1] == '1':\n                    dp[j] = 1 + min(dp[j], dp[j - 1], prev); best = max(best, dp[j])\n                else: dp[j] = 0\n                prev = tmp\n        return best * best",
   "time": "O(m·n)",
   "space": "O(n)",
   "explain": "Keep one row plus the diagonal value from the previous row.",
   "frames": [],
   "alt": true
  }
 ]
};
