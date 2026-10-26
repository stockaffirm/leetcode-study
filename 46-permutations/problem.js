window.PROBLEM = {
 "id": "46",
 "title": "Permutations",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "Given a list of different numbers, return every possible ordering (permutation) of them, in any order. Example: [1,2,3] → [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1].",
 "why": "[1,2,3] has 3 × 2 × 1 = 6 orderings.",
 "idea": "Backtracking: pick an unused number for each position, then undo and try the next.",
 "input": "[1,2,3]",
 "output": "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
 "notes": [],
 "best": "Backtracking: pick an unused number for each position, then undo and try the next.",
 "variants": [
  {
   "name": "Backtracking with a used set",
   "code": "class Solution:\n    def permute(self, nums):\n        res = []\n        def go(path, used):\n            if len(path) == len(nums): res.append(path[:]); return\n            for i, x in enumerate(nums):\n                if i not in used:\n                    used.add(i); path.append(x); go(path, used); path.pop(); used.remove(i)\n        go([], set())\n        return res",
   "time": "O(n·n!)",
   "space": "O(n)",
   "explain": "Backtracking: pick an unused number for each position, then undo and try the next.",
   "frames": [
    {
     "title": "Start",
     "description": "Fill each position with an unused number.",
     "codeLines": [
      9
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
     "title": "First = 1",
     "description": "Then 2,3 or 3,2.",
     "codeLines": [
      8
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
        "[1,2,3]",
        "[1,3,2]"
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
       "description": "choose 1 → path [1]",
       "codeLines": [
        8
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
       "description": "choose 2 → path [1,2]",
       "codeLines": [
        8
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
        }
       ]
      },
      {
       "description": "only 3 is unused → path [1,2,3] is full → save it",
       "codeLines": [
        5
       ],
       "facts": {},
       "rows": [
        {
         "name": "path",
         "cells": [
          "1",
          "2",
          "3"
         ],
         "hot": [
          2
         ],
         "marks": {}
        }
       ]
      },
      {
       "description": "undo 3 and 2 (pop) → back to [1]",
       "codeLines": [
        8
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
       "description": "choose 3 → path [1,3]",
       "codeLines": [
        8
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
        }
       ]
      },
      {
       "description": "only 2 is unused → path [1,3,2] is full → save it",
       "codeLines": [
        5
       ],
       "facts": {},
       "rows": [
        {
         "name": "path",
         "cells": [
          "1",
          "3",
          "2"
         ],
         "hot": [
          2
         ],
         "marks": {}
        }
       ]
      },
      {
       "description": "undo 2 and 3 (pop) → back to [1]",
       "codeLines": [
        8
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
     "title": "First = 2",
     "description": "Then 1,3 or 3,1.",
     "codeLines": [
      8
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
        "[2,1,3]",
        "[2,3,1]"
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
       "description": "choose 2 → path [2]",
       "codeLines": [
        8
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
       "description": "choose 1 → path [2,1]",
       "codeLines": [
        8
       ],
       "facts": {},
       "rows": [
        {
         "name": "path",
         "cells": [
          "2",
          "1"
         ],
         "hot": [
          1
         ],
         "marks": {}
        }
       ]
      },
      {
       "description": "only 3 is unused → path [2,1,3] is full → save it",
       "codeLines": [
        5
       ],
       "facts": {},
       "rows": [
        {
         "name": "path",
         "cells": [
          "2",
          "1",
          "3"
         ],
         "hot": [
          2
         ],
         "marks": {}
        }
       ]
      },
      {
       "description": "undo 3 and 1 (pop) → back to [2]",
       "codeLines": [
        8
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
       "description": "choose 3 → path [2,3]",
       "codeLines": [
        8
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
        }
       ]
      },
      {
       "description": "only 1 is unused → path [2,3,1] is full → save it",
       "codeLines": [
        5
       ],
       "facts": {},
       "rows": [
        {
         "name": "path",
         "cells": [
          "2",
          "3",
          "1"
         ],
         "hot": [
          2
         ],
         "marks": {}
        }
       ]
      },
      {
       "description": "undo 1 and 3 (pop) → back to [2]",
       "codeLines": [
        8
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
     "title": "First = 3",
     "description": "Then 1,2 or 2,1.",
     "codeLines": [
      8
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
        "[3,1,2]",
        "[3,2,1]"
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
       "description": "choose 3 → path [3]",
       "codeLines": [
        8
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
      },
      {
       "description": "choose 1 → path [3,1]",
       "codeLines": [
        8
       ],
       "facts": {},
       "rows": [
        {
         "name": "path",
         "cells": [
          "3",
          "1"
         ],
         "hot": [
          1
         ],
         "marks": {}
        }
       ]
      },
      {
       "description": "only 2 is unused → path [3,1,2] is full → save it",
       "codeLines": [
        5
       ],
       "facts": {},
       "rows": [
        {
         "name": "path",
         "cells": [
          "3",
          "1",
          "2"
         ],
         "hot": [
          2
         ],
         "marks": {}
        }
       ]
      },
      {
       "description": "undo 2 and 1 (pop) → back to [3]",
       "codeLines": [
        8
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
      },
      {
       "description": "choose 2 → path [3,2]",
       "codeLines": [
        8
       ],
       "facts": {},
       "rows": [
        {
         "name": "path",
         "cells": [
          "3",
          "2"
         ],
         "hot": [
          1
         ],
         "marks": {}
        }
       ]
      },
      {
       "description": "only 1 is unused → path [3,2,1] is full → save it",
       "codeLines": [
        5
       ],
       "facts": {},
       "rows": [
        {
         "name": "path",
         "cells": [
          "3",
          "2",
          "1"
         ],
         "hot": [
          2
         ],
         "marks": {}
        }
       ]
      },
      {
       "description": "undo 1 and 2 (pop) → back to [3]",
       "codeLines": [
        8
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
     "description": "6 permutations.",
     "codeLines": [
      10
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
   "name": "itertools.permutations",
   "tag": "Pythonic",
   "code": "class Solution:\n    def permute(self, nums):\n        return [list(p) for p in permutations(nums)]",
   "time": "O(n·n!)",
   "space": "O(n)",
   "explain": "Use the standard library.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Swap in place",
   "tag": "Alternative",
   "code": "class Solution:\n    def permute(self, nums):\n        res = []\n        def go(i):\n            if i == len(nums): res.append(nums[:]); return\n            for j in range(i, len(nums)):\n                nums[i], nums[j] = nums[j], nums[i]\n                go(i + 1)\n                nums[i], nums[j] = nums[j], nums[i]\n        go(0)\n        return res",
   "time": "O(n·n!)",
   "space": "O(n)",
   "explain": "Fix position i by swapping each remaining item into it, recurse, then swap back.",
   "frames": [],
   "alt": true
  }
 ]
};
