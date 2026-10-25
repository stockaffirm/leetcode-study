window.PROBLEM = {
 "id": "392",
 "title": "Is Subsequence",
 "level": "Easy",
 "topic": "Two Pointers",
 "question": "Given two strings s and t, return true if s is a subsequence of t — meaning you can get s by deleting zero or more letters from t WITHOUT changing the order of the remaining letters. Example: s='ace', t='abcde' → delete b and d and you are left with 'ace', so true. s='aec' would be false because e comes after c in t.",
 "input": "s=\"ace\", t=\"abcde\"",
 "output": "True",
 "notes": [
  "Never move backwards in either string.",
  "Match greedily: the earliest match is always safe."
 ],
 "best": "One scan of t with a pointer into s.",
 "variants": [
  {
   "name": "Two pointers",
   "code": "class Solution:\n    def isSubsequence(self, s, t):\n        i = 0\n        for ch in t:\n            if i < len(s) and ch == s[i]:\n                i += 1\n        return i == len(s)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Advance in s only when t's letter matches.",
   "frames": [
    {
     "title": "Input",
     "description": "Find a, c, e in order inside t.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "s",
       "cells": [
        "a",
        "c",
        "e"
       ],
       "hot": [],
       "marks": {
        "0": "i"
       }
      },
      {
       "name": "t",
       "cells": [
        "a",
        "b",
        "c",
        "d",
        "e"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "t[0] = a",
     "description": "Match! Move i to 1.",
     "codeLines": [
      5,
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "s",
       "cells": [
        "a",
        "c",
        "e"
       ],
       "hot": [
        0
       ],
       "marks": {
        "1": "i"
       }
      },
      {
       "name": "t",
       "cells": [
        "a",
        "b",
        "c",
        "d",
        "e"
       ],
       "hot": [
        0
       ],
       "marks": {
        "0": "ch"
       }
      }
     ]
    },
    {
     "title": "t[1] = b",
     "description": "No match, keep i.",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "s",
       "cells": [
        "a",
        "c",
        "e"
       ],
       "hot": [],
       "marks": {
        "1": "i"
       }
      },
      {
       "name": "t",
       "cells": [
        "a",
        "b",
        "c",
        "d",
        "e"
       ],
       "hot": [],
       "marks": {
        "1": "ch"
       }
      }
     ]
    },
    {
     "title": "t[2] = c",
     "description": "Match! Move i to 2.",
     "codeLines": [
      5,
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "s",
       "cells": [
        "a",
        "c",
        "e"
       ],
       "hot": [
        1
       ],
       "marks": {
        "2": "i"
       }
      },
      {
       "name": "t",
       "cells": [
        "a",
        "b",
        "c",
        "d",
        "e"
       ],
       "hot": [
        2
       ],
       "marks": {
        "2": "ch"
       }
      }
     ]
    },
    {
     "title": "t[3] = d",
     "description": "No match, keep i.",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "s",
       "cells": [
        "a",
        "c",
        "e"
       ],
       "hot": [],
       "marks": {
        "2": "i"
       }
      },
      {
       "name": "t",
       "cells": [
        "a",
        "b",
        "c",
        "d",
        "e"
       ],
       "hot": [],
       "marks": {
        "3": "ch"
       }
      }
     ]
    },
    {
     "title": "t[4] = e",
     "description": "Match! Move i to 3.",
     "codeLines": [
      5,
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "s",
       "cells": [
        "a",
        "c",
        "e"
       ],
       "hot": [
        2
       ],
       "marks": {
        "3": "i"
       }
      },
      {
       "name": "t",
       "cells": [
        "a",
        "b",
        "c",
        "d",
        "e"
       ],
       "hot": [
        4
       ],
       "marks": {
        "4": "ch"
       }
      }
     ]
    },
    {
     "title": "Return",
     "description": "i reached len(s) = 3.",
     "codeLines": [
      7
     ],
     "facts": {
      "result": "True"
     },
     "rows": [
      {
       "name": "s",
       "cells": [
        "a",
        "c",
        "e"
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
   ],
   "tag": "Optimal"
  },
  {
   "name": "Recursion",
   "tag": "Brute force",
   "code": "class Solution:\n    def isSubsequence(self, s, t):\n        def go(i, j):\n            if i == len(s): return True\n            if j == len(t): return False\n            return go(i + 1, j + 1) if s[i] == t[j] else go(i, j + 1)\n        return go(0, 0)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Match one letter at a time, recursing on the rest.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Binary search on positions",
   "tag": "Follow-up (many queries)",
   "code": "class Solution:\n    def isSubsequence(self, s, t):\n        pos = defaultdict(list)\n        for i, c in enumerate(t): pos[c].append(i)\n        prev = -1\n        for c in s:\n            idxs = pos[c]; k = bisect_right(idxs, prev)\n            if k == len(idxs): return False\n            prev = idxs[k]\n        return True",
   "time": "O(n + m log n)",
   "space": "O(n)",
   "explain": "Index every letter of t once, then binary-search the next position for each letter of s.",
   "frames": [],
   "alt": true
  }
 ],
 "why": "t = abcde. Delete b and d and you get ace → True.",
 "idea": "Scan t once. Move forward in s each time the letters match."
};
