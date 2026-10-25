window.PROBLEM = {
 "id": "1768",
 "title": "Merge Strings Alternately",
 "level": "Easy",
 "topic": "Array / String",
 "question": "You are given two strings, word1 and word2. Build a new string by taking letters alternately: first letter of word1, first letter of word2, second letter of word1, second of word2, and so on. If one string runs out, append all the remaining letters of the other string. Return the merged string. Example: 'abc' and 'pq' give a, p, b, q, then the leftover c → 'apbqc'.",
 "input": "\"abc\", \"pq\"",
 "output": "\"apbqc\"",
 "notes": [
  "Loop to max(len1, len2); guard each append with i < len.",
  "Building a list and joining once beats repeated string +=."
 ],
 "best": "One pass with index guards handles unequal lengths with no special case.",
 "variants": [
  {
   "name": "One index, two guards",
   "code": "class Solution:\n    def mergeAlternately(self, word1, word2):\n        res = []\n        for i in range(max(len(word1), len(word2))):\n            if i < len(word1): res.append(word1[i])\n            if i < len(word2): res.append(word2[i])\n        return ''.join(res)",
   "time": "O(n+m)",
   "space": "O(n+m)",
   "explain": "One loop up to the longer length, guarding each side.",
   "frames": [
    {
     "title": "Input",
     "description": "Two words, different lengths.",
     "codeLines": [
      2
     ],
     "facts": {},
     "rows": [
      {
       "name": "word1",
       "cells": [
        "a",
        "b",
        "c"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "word2",
       "cells": [
        "p",
        "q"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "i = 0",
     "description": "Append word1[0] then word2[0].",
     "codeLines": [
      4,
      5,
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "word1",
       "cells": [
        "a",
        "b",
        "c"
       ],
       "hot": [
        0
       ],
       "marks": {
        "0": "i"
       }
      },
      {
       "name": "word2",
       "cells": [
        "p",
        "q"
       ],
       "hot": [
        0
       ],
       "marks": {
        "0": "i"
       }
      },
      {
       "name": "res",
       "cells": [
        "a",
        "p"
       ],
       "hot": [
        1
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "i = 1",
     "description": "Append word1[1] then word2[1].",
     "codeLines": [
      4,
      5,
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "word1",
       "cells": [
        "a",
        "b",
        "c"
       ],
       "hot": [
        1
       ],
       "marks": {
        "1": "i"
       }
      },
      {
       "name": "word2",
       "cells": [
        "p",
        "q"
       ],
       "hot": [
        1
       ],
       "marks": {
        "1": "i"
       }
      },
      {
       "name": "res",
       "cells": [
        "a",
        "p",
        "b",
        "q"
       ],
       "hot": [
        3
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "i = 2",
     "description": "Append word1[2].",
     "codeLines": [
      4,
      5,
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "word1",
       "cells": [
        "a",
        "b",
        "c"
       ],
       "hot": [
        2
       ],
       "marks": {
        "2": "i"
       }
      },
      {
       "name": "word2",
       "cells": [
        "p",
        "q"
       ],
       "hot": [],
       "marks": {
        "2": "i"
       }
      },
      {
       "name": "res",
       "cells": [
        "a",
        "p",
        "b",
        "q",
        "c"
       ],
       "hot": [
        4
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Join",
     "description": "Join the list into the answer.",
     "codeLines": [
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "answer",
       "cells": [
        "a",
        "p",
        "b",
        "q",
        "c"
       ],
       "hot": [
        3,
        4
       ],
       "marks": {}
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "Two pointers",
   "tag": "Alternative",
   "code": "class Solution:\n    def mergeAlternately(self, word1, word2):\n        res, i, j = [], 0, 0\n        while i < len(word1) and j < len(word2):\n            res.append(word1[i]); res.append(word2[j])\n            i += 1; j += 1\n        res.append(word1[i:]); res.append(word2[j:])\n        return ''.join(res)",
   "time": "O(n+m)",
   "space": "O(n+m)",
   "explain": "Walk both words together, then append whatever is left.",
   "frames": [],
   "alt": true
  },
  {
   "name": "zip_longest",
   "tag": "Pythonic",
   "code": "class Solution:\n    def mergeAlternately(self, word1, word2):\n        return ''.join(a + b for a, b in zip_longest(word1, word2, fillvalue=''))",
   "time": "O(n+m)",
   "space": "O(n+m)",
   "explain": "zip_longest pairs the letters and fills the shorter word with ''.",
   "frames": [],
   "alt": true
  }
 ],
 "why": "'abc' and 'pq': take a, p, b, q. Only 'c' is left, so add it → apbqc.",
 "idea": "Use one index i. Take word1[i], then word2[i], if each still exists."
};
