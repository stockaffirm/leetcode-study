window.PROBLEM = {
 "id": "1207",
 "title": "Unique Number of Occurrences",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "Given a list arr, count how many times each distinct value occurs. Return true if all of those counts are different from one another, otherwise false. Example: [1,2,2,1,1,3] → 1 occurs 3 times, 2 occurs 2 times, 3 occurs once → counts 3,2,1 are all different → true.",
 "input": "[1,2,2,1,1,3]",
 "output": "True",
 "notes": [
  "If counts are unique, the set keeps the same size.",
  "Counter is a dict of value → frequency."
 ],
 "best": "Counter + set of counts; compare sizes.",
 "variants": [
  {
   "name": "Counter + set",
   "code": "class Solution:\n    def uniqueOccurrences(self, arr):\n        count = Counter(arr)\n        return len(set(count.values())) == len(count)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Count, then check the counts are all distinct.",
   "frames": [
    {
     "title": "Input",
     "description": "Count each value.",
     "codeLines": [
      2
     ],
     "facts": {},
     "rows": [
      {
       "name": "arr",
       "cells": [
        "1",
        "2",
        "2",
        "1",
        "1",
        "3"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Counter",
     "description": "1→3, 2→2, 3→1",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "value",
       "cells": [
        "1",
        "2",
        "3"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "count",
       "cells": [
        "3",
        "2",
        "1"
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
       "description": "see 1 → count of 1 is now 1",
       "codeLines": [
        3
       ],
       "facts": {},
       "rows": [
        {
         "name": "arr",
         "cells": [
          "1",
          "2",
          "2",
          "1",
          "1",
          "3"
         ],
         "hot": [
          0
         ],
         "marks": {}
        },
        {
         "name": "counts",
         "cells": [
          "1→1"
         ],
         "hot": [
          0
         ],
         "marks": {}
        }
       ]
      },
      {
       "description": "see 2 → count of 2 is now 1",
       "codeLines": [
        3
       ],
       "facts": {},
       "rows": [
        {
         "name": "arr",
         "cells": [
          "1",
          "2",
          "2",
          "1",
          "1",
          "3"
         ],
         "hot": [
          1
         ],
         "marks": {}
        },
        {
         "name": "counts",
         "cells": [
          "1→1",
          "2→1"
         ],
         "hot": [
          1
         ],
         "marks": {}
        }
       ]
      },
      {
       "description": "see 2 → count of 2 is now 2",
       "codeLines": [
        3
       ],
       "facts": {},
       "rows": [
        {
         "name": "arr",
         "cells": [
          "1",
          "2",
          "2",
          "1",
          "1",
          "3"
         ],
         "hot": [
          2
         ],
         "marks": {}
        },
        {
         "name": "counts",
         "cells": [
          "1→1",
          "2→2"
         ],
         "hot": [
          1
         ],
         "marks": {}
        }
       ]
      },
      {
       "description": "see 1 → count of 1 is now 2",
       "codeLines": [
        3
       ],
       "facts": {},
       "rows": [
        {
         "name": "arr",
         "cells": [
          "1",
          "2",
          "2",
          "1",
          "1",
          "3"
         ],
         "hot": [
          3
         ],
         "marks": {}
        },
        {
         "name": "counts",
         "cells": [
          "1→2",
          "2→2"
         ],
         "hot": [
          0
         ],
         "marks": {}
        }
       ]
      },
      {
       "description": "see 1 → count of 1 is now 3",
       "codeLines": [
        3
       ],
       "facts": {},
       "rows": [
        {
         "name": "arr",
         "cells": [
          "1",
          "2",
          "2",
          "1",
          "1",
          "3"
         ],
         "hot": [
          4
         ],
         "marks": {}
        },
        {
         "name": "counts",
         "cells": [
          "1→3",
          "2→2"
         ],
         "hot": [
          0
         ],
         "marks": {}
        }
       ]
      },
      {
       "description": "see 3 → count of 3 is now 1",
       "codeLines": [
        3
       ],
       "facts": {},
       "rows": [
        {
         "name": "arr",
         "cells": [
          "1",
          "2",
          "2",
          "1",
          "1",
          "3"
         ],
         "hot": [
          5
         ],
         "marks": {}
        },
        {
         "name": "counts",
         "cells": [
          "1→3",
          "2→2",
          "3→1"
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
     "title": "Set of counts",
     "description": "{3,2,1} has 3 items, same as the 3 values.",
     "codeLines": [
      4
     ],
     "facts": {},
     "rows": [
      {
       "name": "counts",
       "cells": [
        "3",
        "2",
        "1"
       ],
       "hot": [
        0,
        1,
        2
       ],
       "marks": {}
      },
      {
       "name": "set",
       "cells": [
        "3",
        "2",
        "1"
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
     "title": "Return",
     "description": "All counts are different.",
     "codeLines": [
      4
     ],
     "facts": {},
     "rows": [
      {
       "name": "answer",
       "cells": [
        "True"
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
   "name": "Dictionary + seen set",
   "tag": "Alternative",
   "code": "class Solution:\n    def uniqueOccurrences(self, arr):\n        counts = {}\n        for x in arr: counts[x] = counts.get(x, 0) + 1\n        seen = set()\n        for c in counts.values():\n            if c in seen: return False\n            seen.add(c)\n        return True",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Count, then reject the first repeated count.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Sort and count runs",
   "tag": "Alternative",
   "code": "class Solution:\n    def uniqueOccurrences(self, arr):\n        arr = sorted(arr); runs = []; i = 0\n        while i < len(arr):\n            j = i\n            while j < len(arr) and arr[j] == arr[i]: j += 1\n            runs.append(j - i); i = j\n        return len(runs) == len(set(runs))",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "After sorting, equal numbers sit together, so run lengths are the counts.",
   "frames": [],
   "alt": true
  }
 ],
 "why": "1 appears 3 times, 2 appears 2 times, 3 appears once. The counts 3, 2, 1 are all different → True.",
 "idea": "Use a Counter, then check that the counts contain no duplicates."
};
