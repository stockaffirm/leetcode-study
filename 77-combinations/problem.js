window.PROBLEM = {
 "id": "77",
 "title": "Combinations",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "Given two numbers n and k, return all possible ways to choose k different numbers from 1 to n. Order doesn't matter (so [1,2] and [2,1] count as the same choice). Example: n=4, k=2 → [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]].",
 "why": "n = 4, k = 2 → [1,2],[1,3],[1,4],[2,3],[2,4],[3,4].",
 "idea": "Backtracking: pick numbers in increasing order so you never repeat a set.",
 "input": "n = 4, k = 2",
 "output": "[[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]",
 "notes": [],
 "best": "Backtracking: pick numbers in increasing order so you never repeat a set.",
 "variants": [
  {
   "name": "Backtracking",
   "code": "class Solution:\n    def combine(self, n, k):\n        res = []\n        def go(start, path):\n            if len(path) == k: res.append(path[:]); return\n            for x in range(start, n + 1):\n                path.append(x); go(x + 1, path); path.pop()\n        go(1, [])\n        return res",
   "time": "O(C(n,k)·k)",
   "space": "O(k)",
   "explain": "Backtracking: pick numbers in increasing order so you never repeat a set.",
   "frames": [
    {
     "title": "Start",
     "description": "Choose 2 numbers from 1–4.",
     "codeLines": [
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "path",
       "cells": [
        "·"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Start with 1",
     "description": "Pair 1 with 2, 3, 4.",
     "codeLines": [
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "path",
       "cells": [
        "1"
       ],
       "hot": [
        0
       ],
       "marks": {}
      },
      {
       "name": "found",
       "cells": [
        "[1,2]",
        "[1,3]",
        "[1,4]"
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
       "description": "choose 1 → path [1]",
       "codeLines": [
        7
       ],
       "facts": {},
       "rows": [
        {
         "name": "path",
         "cells": [
          "1"
         ],
         "hot": [
          0
         ],
         "marks": {}
        },
        {
         "name": "saved",
         "cells": [
          "…"
         ],
         "hot": [],
         "marks": {}
        }
       ]
      },
      {
       "description": "choose 2 → path [1,2] has 2 numbers → save it",
       "codeLines": [
        5
       ],
       "facts": {},
       "rows": [
        {
         "name": "path",
         "cells": [
          "1",
          "2"
         ],
         "hot": [
          1
         ],
         "marks": {}
        },
        {
         "name": "saved",
         "cells": [
          "[1,2]"
         ],
         "hot": [],
         "marks": {}
        }
       ]
      },
      {
       "description": "undo 2 (pop) → path [1], try the next number",
       "codeLines": [
        7
       ],
       "facts": {},
       "rows": [
        {
         "name": "path",
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
       "description": "choose 3 → path [1,3] has 2 numbers → save it",
       "codeLines": [
        5
       ],
       "facts": {},
       "rows": [
        {
         "name": "path",
         "cells": [
          "1",
          "3"
         ],
         "hot": [
          1
         ],
         "marks": {}
        },
        {
         "name": "saved",
         "cells": [
          "[1,3]"
         ],
         "hot": [],
         "marks": {}
        }
       ]
      },
      {
       "description": "undo 3 (pop) → path [1], try the next number",
       "codeLines": [
        7
       ],
       "facts": {},
       "rows": [
        {
         "name": "path",
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
       "description": "choose 4 → path [1,4] has 2 numbers → save it",
       "codeLines": [
        5
       ],
       "facts": {},
       "rows": [
        {
         "name": "path",
         "cells": [
          "1",
          "4"
         ],
         "hot": [
          1
         ],
         "marks": {}
        },
        {
         "name": "saved",
         "cells": [
          "[1,4]"
         ],
         "hot": [],
         "marks": {}
        }
       ]
      },
      {
       "description": "undo 4 (pop) → path [1], try the next number",
       "codeLines": [
        7
       ],
       "facts": {},
       "rows": [
        {
         "name": "path",
         "cells": [
          "1"
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
     "title": "Start with 2",
     "description": "Pair 2 with 3, 4 (not 1 — avoids repeats).",
     "codeLines": [
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "path",
       "cells": [
        "2"
       ],
       "hot": [
        0
       ],
       "marks": {}
      },
      {
       "name": "found",
       "cells": [
        "[1,2]",
        "[1,3]",
        "[1,4]",
        "[2,3]",
        "[2,4]"
       ],
       "hot": [
        3,
        4
       ],
       "marks": {}
      }
     ],
     "sub": [
      {
       "description": "choose 2 → path [2]",
       "codeLines": [
        7
       ],
       "facts": {},
       "rows": [
        {
         "name": "path",
         "cells": [
          "2"
         ],
         "hot": [
          0
         ],
         "marks": {}
        },
        {
         "name": "saved",
         "cells": [
          "…"
         ],
         "hot": [],
         "marks": {}
        }
       ]
      },
      {
       "description": "choose 3 → path [2,3] has 2 numbers → save it",
       "codeLines": [
        5
       ],
       "facts": {},
       "rows": [
        {
         "name": "path",
         "cells": [
          "2",
          "3"
         ],
         "hot": [
          1
         ],
         "marks": {}
        },
        {
         "name": "saved",
         "cells": [
          "[2,3]"
         ],
         "hot": [],
         "marks": {}
        }
       ]
      },
      {
       "description": "undo 3 (pop) → path [2], try the next number",
       "codeLines": [
        7
       ],
       "facts": {},
       "rows": [
        {
         "name": "path",
         "cells": [
          "2"
         ],
         "hot": [
          0
         ],
         "marks": {}
        }
       ]
      },
      {
       "description": "choose 4 → path [2,4] has 2 numbers → save it",
       "codeLines": [
        5
       ],
       "facts": {},
       "rows": [
        {
         "name": "path",
         "cells": [
          "2",
          "4"
         ],
         "hot": [
          1
         ],
         "marks": {}
        },
        {
         "name": "saved",
         "cells": [
          "[2,4]"
         ],
         "hot": [],
         "marks": {}
        }
       ]
      },
      {
       "description": "undo 4 (pop) → path [2], try the next number",
       "codeLines": [
        7
       ],
       "facts": {},
       "rows": [
        {
         "name": "path",
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
     ]
    },
    {
     "title": "Start with 3",
     "description": "Pair 3 with 4.",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "path",
       "cells": [
        "3"
       ],
       "hot": [
        0
       ],
       "marks": {}
      },
      {
       "name": "found",
       "cells": [
        "…",
        "[3,4]"
       ],
       "hot": [
        1
       ],
       "marks": {}
      }
     ],
     "sub": [
      {
       "description": "choose 3 → path [3]",
       "codeLines": [
        7
       ],
       "facts": {},
       "rows": [
        {
         "name": "path",
         "cells": [
          "3"
         ],
         "hot": [
          0
         ],
         "marks": {}
        },
        {
         "name": "saved",
         "cells": [
          "…"
         ],
         "hot": [],
         "marks": {}
        }
       ]
      },
      {
       "description": "choose 4 → path [3,4] has 2 numbers → save it",
       "codeLines": [
        5
       ],
       "facts": {},
       "rows": [
        {
         "name": "path",
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
         "name": "saved",
         "cells": [
          "[3,4]"
         ],
         "hot": [],
         "marks": {}
        }
       ]
      },
      {
       "description": "undo 4 (pop) → path [3], try the next number",
       "codeLines": [
        7
       ],
       "facts": {},
       "rows": [
        {
         "name": "path",
         "cells": [
          "3"
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
     "description": "6 combinations.",
     "codeLines": [
      9
     ],
     "facts": {},
     "rows": [
      {
       "name": "count",
       "cells": [
        "6"
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
   "name": "itertools.combinations",
   "tag": "Pythonic",
   "code": "class Solution:\n    def combine(self, n, k):\n        return [list(c) for c in combinations(range(1, n + 1), k)]",
   "time": "O(C(n,k)·k)",
   "space": "O(k)",
   "explain": "Let the standard library generate them.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Lexicographic iteration",
   "tag": "Alternative",
   "code": "class Solution:\n    def combine(self, n, k):\n        nums = list(range(1, k + 1)) + [n + 1]; output, j = [], 0\n        while j < k:\n            output.append(nums[:k]); j = 0\n            while j < k and nums[j + 1] == nums[j] + 1:\n                nums[j] = j + 1; j += 1\n            nums[j] += 1\n        return output",
   "time": "O(C(n,k)·k)",
   "space": "O(k)",
   "explain": "Step through combinations in order without recursion.",
   "frames": [],
   "alt": true
  }
 ]
};
