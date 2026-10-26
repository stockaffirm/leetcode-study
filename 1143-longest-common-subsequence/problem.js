window.PROBLEM = {
 "id": "1143",
 "title": "Longest Common Subsequence",
 "level": "Medium",
 "topic": "DP - Multidimensional",
 "question": "Given two strings text1 and text2, return the length of their longest common subsequence — the longest string that can be formed from BOTH by deleting some characters (possibly none) without reordering the rest. Return 0 if there is none. Example: 'abcde' and 'ace' share 'ace' → 3.",
 "input": "\"abcde\", \"ace\"",
 "output": "3",
 "notes": [
  "Row/col 0 mean the empty prefix → 0.",
  "Match: diagonal + 1. Else: max(up, left)."
 ],
 "best": "2-D DP: match extends the diagonal, otherwise take the better of up/left.",
 "variants": [
  {
   "name": "2-D DP table",
   "code": "class Solution:\n    def longestCommonSubsequence(self, a, b):\n        dp = [[0] * (len(b) + 1) for _ in range(len(a) + 1)]\n        for i in range(1, len(a) + 1):\n            for j in range(1, len(b) + 1):\n                if a[i-1] == b[j-1]: dp[i][j] = dp[i-1][j-1] + 1\n                else: dp[i][j] = max(dp[i-1][j], dp[i][j-1])\n        return dp[-1][-1]",
   "time": "O(n·m)",
   "space": "O(n·m)",
   "explain": "dp[i][j] = LCS of a[:i] and b[:j].",
   "frames": [
    {
     "title": "Table",
     "description": "Rows = prefixes of 'abcde', columns = prefixes of 'ace'. Edges are 0.",
     "codeLines": [
      3
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
         "0"
        ],
        [
         "0",
         "0",
         "0",
         "0"
        ],
        [
         "0",
         "0",
         "0",
         "0"
        ],
        [
         "0",
         "0",
         "0",
         "0"
        ],
        [
         "0",
         "0",
         "0",
         "0"
        ],
        [
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
     ]
    },
    {
     "title": "Row 'a'",
     "description": "Match at 1 cell: diagonal + 1.",
     "codeLines": [
      6,
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
         "0"
        ],
        [
         "0",
         "1",
         "1",
         "1"
        ],
        [
         "0",
         "0",
         "0",
         "0"
        ],
        [
         "0",
         "0",
         "0",
         "0"
        ],
        [
         "0",
         "0",
         "0",
         "0"
        ],
        [
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
     ],
     "sub": [
      {
       "description": "'a' = 'a' → diagonal 0 + 1 = 1",
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
           "0"
          ],
          [
           "0",
           "1",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0"
          ],
          [
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
       "description": "'a' ≠ 'c' → max(up 0, left 1) = 1",
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
           "0"
          ],
          [
           "0",
           "1",
           "1",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0"
          ],
          [
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
       "description": "'a' ≠ 'e' → max(up 0, left 1) = 1",
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
           "0"
          ],
          [
           "0",
           "1",
           "1",
           "1"
          ],
          [
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0"
          ],
          [
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
      }
     ]
    },
    {
     "title": "Row 'b'",
     "description": "No match: take the larger of up / left.",
     "codeLines": [
      6,
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
         "0"
        ],
        [
         "0",
         "1",
         "1",
         "1"
        ],
        [
         "0",
         "1",
         "1",
         "1"
        ],
        [
         "0",
         "0",
         "0",
         "0"
        ],
        [
         "0",
         "0",
         "0",
         "0"
        ],
        [
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
       "description": "'b' ≠ 'a' → max(up 1, left 0) = 1",
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
           "0"
          ],
          [
           "0",
           "1",
           "1",
           "1"
          ],
          [
           "0",
           "1",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0"
          ],
          [
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
       "description": "'b' ≠ 'c' → max(up 1, left 1) = 1",
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
           "0"
          ],
          [
           "0",
           "1",
           "1",
           "1"
          ],
          [
           "0",
           "1",
           "1",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0"
          ],
          [
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
       "description": "'b' ≠ 'e' → max(up 1, left 1) = 1",
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
           "0"
          ],
          [
           "0",
           "1",
           "1",
           "1"
          ],
          [
           "0",
           "1",
           "1",
           "1"
          ],
          [
           "0",
           "0",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0"
          ],
          [
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
      }
     ]
    },
    {
     "title": "Row 'c'",
     "description": "Match at 1 cell: diagonal + 1.",
     "codeLines": [
      6,
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
         "0"
        ],
        [
         "0",
         "1",
         "1",
         "1"
        ],
        [
         "0",
         "1",
         "1",
         "1"
        ],
        [
         "0",
         "1",
         "2",
         "2"
        ],
        [
         "0",
         "0",
         "0",
         "0"
        ],
        [
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
     ],
     "sub": [
      {
       "description": "'c' ≠ 'a' → max(up 1, left 0) = 1",
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
           "0"
          ],
          [
           "0",
           "1",
           "1",
           "1"
          ],
          [
           "0",
           "1",
           "1",
           "1"
          ],
          [
           "0",
           "1",
           "0",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0"
          ],
          [
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
       "description": "'c' = 'c' → diagonal 1 + 1 = 2",
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
           "0"
          ],
          [
           "0",
           "1",
           "1",
           "1"
          ],
          [
           "0",
           "1",
           "1",
           "1"
          ],
          [
           "0",
           "1",
           "2",
           "0"
          ],
          [
           "0",
           "0",
           "0",
           "0"
          ],
          [
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
       "description": "'c' ≠ 'e' → max(up 1, left 2) = 2",
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
           "0"
          ],
          [
           "0",
           "1",
           "1",
           "1"
          ],
          [
           "0",
           "1",
           "1",
           "1"
          ],
          [
           "0",
           "1",
           "2",
           "2"
          ],
          [
           "0",
           "0",
           "0",
           "0"
          ],
          [
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
      }
     ]
    },
    {
     "title": "Row 'd'",
     "description": "No match: take the larger of up / left.",
     "codeLines": [
      6,
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
         "0"
        ],
        [
         "0",
         "1",
         "1",
         "1"
        ],
        [
         "0",
         "1",
         "1",
         "1"
        ],
        [
         "0",
         "1",
         "2",
         "2"
        ],
        [
         "0",
         "1",
         "2",
         "2"
        ],
        [
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
       "description": "'d' ≠ 'a' → max(up 1, left 0) = 1",
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
           "0"
          ],
          [
           "0",
           "1",
           "1",
           "1"
          ],
          [
           "0",
           "1",
           "1",
           "1"
          ],
          [
           "0",
           "1",
           "2",
           "2"
          ],
          [
           "0",
           "1",
           "0",
           "0"
          ],
          [
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
       "description": "'d' ≠ 'c' → max(up 2, left 1) = 2",
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
           "0"
          ],
          [
           "0",
           "1",
           "1",
           "1"
          ],
          [
           "0",
           "1",
           "1",
           "1"
          ],
          [
           "0",
           "1",
           "2",
           "2"
          ],
          [
           "0",
           "1",
           "2",
           "0"
          ],
          [
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
       "description": "'d' ≠ 'e' → max(up 2, left 2) = 2",
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
           "0"
          ],
          [
           "0",
           "1",
           "1",
           "1"
          ],
          [
           "0",
           "1",
           "1",
           "1"
          ],
          [
           "0",
           "1",
           "2",
           "2"
          ],
          [
           "0",
           "1",
           "2",
           "2"
          ],
          [
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
      }
     ]
    },
    {
     "title": "Row 'e'",
     "description": "Match at 1 cell: diagonal + 1.",
     "codeLines": [
      6,
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
         "0"
        ],
        [
         "0",
         "1",
         "1",
         "1"
        ],
        [
         "0",
         "1",
         "1",
         "1"
        ],
        [
         "0",
         "1",
         "2",
         "2"
        ],
        [
         "0",
         "1",
         "2",
         "2"
        ],
        [
         "0",
         "1",
         "2",
         "3"
        ]
       ],
       "hot": [
        "5,3"
       ],
       "marks": {},
       "kind": "grid"
      }
     ],
     "sub": [
      {
       "description": "'e' ≠ 'a' → max(up 1, left 0) = 1",
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
           "0"
          ],
          [
           "0",
           "1",
           "1",
           "1"
          ],
          [
           "0",
           "1",
           "1",
           "1"
          ],
          [
           "0",
           "1",
           "2",
           "2"
          ],
          [
           "0",
           "1",
           "2",
           "2"
          ],
          [
           "0",
           "1",
           "0",
           "0"
          ]
         ],
         "hot": [
          "5,1"
         ],
         "marks": {},
         "kind": "grid"
        }
       ]
      },
      {
       "description": "'e' ≠ 'c' → max(up 2, left 1) = 2",
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
           "0"
          ],
          [
           "0",
           "1",
           "1",
           "1"
          ],
          [
           "0",
           "1",
           "1",
           "1"
          ],
          [
           "0",
           "1",
           "2",
           "2"
          ],
          [
           "0",
           "1",
           "2",
           "2"
          ],
          [
           "0",
           "1",
           "2",
           "0"
          ]
         ],
         "hot": [
          "5,2"
         ],
         "marks": {},
         "kind": "grid"
        }
       ]
      },
      {
       "description": "'e' = 'e' → diagonal 2 + 1 = 3",
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
           "0"
          ],
          [
           "0",
           "1",
           "1",
           "1"
          ],
          [
           "0",
           "1",
           "1",
           "1"
          ],
          [
           "0",
           "1",
           "2",
           "2"
          ],
          [
           "0",
           "1",
           "2",
           "2"
          ],
          [
           "0",
           "1",
           "2",
           "3"
          ]
         ],
         "hot": [
          "5,3"
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
     "description": "dp[5][3] = 3 ('ace').",
     "codeLines": [
      8
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
         "0"
        ],
        [
         "0",
         "1",
         "1",
         "1"
        ],
        [
         "0",
         "1",
         "1",
         "1"
        ],
        [
         "0",
         "1",
         "2",
         "2"
        ],
        [
         "0",
         "1",
         "2",
         "2"
        ],
        [
         "0",
         "1",
         "2",
         "3"
        ]
       ],
       "hot": [
        "5,3"
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
   "name": "Recursion + memo",
   "tag": "Alternative",
   "code": "class Solution:\n    def longestCommonSubsequence(self, a, b):\n        @lru_cache(None)\n        def go(i, j):\n            if i == len(a) or j == len(b): return 0\n            if a[i] == b[j]: return 1 + go(i + 1, j + 1)\n            return max(go(i + 1, j), go(i, j + 1))\n        return go(0, 0)",
   "time": "O(n·m)",
   "space": "O(n·m)",
   "explain": "Compare the first characters and recurse on the rest.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Rolling row DP",
   "tag": "Optimal space",
   "code": "class Solution:\n    def longestCommonSubsequence(self, a, b):\n        prev = [0] * (len(b) + 1)\n        for i in range(1, len(a) + 1):\n            cur = [0] * (len(b) + 1)\n            for j in range(1, len(b) + 1):\n                cur[j] = prev[j-1] + 1 if a[i-1] == b[j-1] else max(prev[j], cur[j-1])\n            prev = cur\n        return prev[-1]",
   "time": "O(n·m)",
   "space": "O(m)",
   "explain": "Only the previous row of the table is ever needed.",
   "frames": [],
   "alt": true
  }
 ],
 "why": "'abcde' and 'ace': a, c, e appear in both in order → 3.",
 "idea": "Fill a table over prefixes. A match = diagonal + 1. Otherwise take the better of up and left."
};
