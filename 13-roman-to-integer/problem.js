window.PROBLEM = {
 "id": "13",
 "title": "Roman to Integer",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Roman numerals use the letters I=1, V=5, X=10, L=50, C=100, D=500, M=1000. Normally they are added from left to right (VIII = 8), but a smaller letter placed BEFORE a larger one is subtracted (IV = 4, IX = 9, XL = 40, XC = 90, CD = 400, CM = 900). Given a Roman numeral string s, return its value as an ordinary number. Example: 'MCMXCIV' = 1000 + (1000−100) + (100−10) + (5−1) = 1994.",
 "why": "MCMXCIV = 1000 + (1000−100) + (100−10) + (5−1) = 1994.",
 "idea": "If a symbol is smaller than the next one, subtract it; otherwise add it.",
 "input": "\"MCMXCIV\"",
 "output": "1994",
 "notes": [],
 "best": "If a symbol is smaller than the next one, subtract it; otherwise add it.",
 "variants": [
  {
   "name": "Subtract if smaller than next",
   "code": "class Solution:\n    def romanToInt(self, s):\n        v = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}\n        total = 0\n        for i, ch in enumerate(s):\n            if i + 1 < len(s) and v[ch] < v[s[i+1]]: total -= v[ch]\n            else: total += v[ch]\n        return total",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "If a symbol is smaller than the next one, subtract it; otherwise add it.",
   "frames": [
    {
     "title": "Start",
     "description": "Read left to right.",
     "codeLines": [
      4
     ],
     "facts": {},
     "rows": [
      {
       "name": "s",
       "cells": [
        "M",
        "C",
        "M",
        "X",
        "C",
        "I",
        "V"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "M (1000)",
     "description": "Add.",
     "codeLines": [
      6,
      7
     ],
     "facts": {
      "total": 1000
     },
     "rows": [
      {
       "name": "s",
       "cells": [
        "M",
        "C",
        "M",
        "X",
        "C",
        "I",
        "V"
       ],
       "hot": [
        0
       ],
       "marks": {
        "0": "i"
       }
      }
     ]
    },
    {
     "title": "C (100)",
     "description": "C is smaller than M → subtract.",
     "codeLines": [
      6,
      6
     ],
     "facts": {
      "total": 900
     },
     "rows": [
      {
       "name": "s",
       "cells": [
        "M",
        "C",
        "M",
        "X",
        "C",
        "I",
        "V"
       ],
       "hot": [
        1
       ],
       "marks": {
        "1": "i"
       }
      }
     ]
    },
    {
     "title": "M (1000)",
     "description": "Add.",
     "codeLines": [
      6,
      7
     ],
     "facts": {
      "total": 1900
     },
     "rows": [
      {
       "name": "s",
       "cells": [
        "M",
        "C",
        "M",
        "X",
        "C",
        "I",
        "V"
       ],
       "hot": [
        2
       ],
       "marks": {
        "2": "i"
       }
      }
     ]
    },
    {
     "title": "X (10)",
     "description": "X is smaller than C → subtract.",
     "codeLines": [
      6,
      6
     ],
     "facts": {
      "total": 1890
     },
     "rows": [
      {
       "name": "s",
       "cells": [
        "M",
        "C",
        "M",
        "X",
        "C",
        "I",
        "V"
       ],
       "hot": [
        3
       ],
       "marks": {
        "3": "i"
       }
      }
     ]
    },
    {
     "title": "C (100)",
     "description": "Add.",
     "codeLines": [
      6,
      7
     ],
     "facts": {
      "total": 1990
     },
     "rows": [
      {
       "name": "s",
       "cells": [
        "M",
        "C",
        "M",
        "X",
        "C",
        "I",
        "V"
       ],
       "hot": [
        4
       ],
       "marks": {
        "4": "i"
       }
      }
     ]
    },
    {
     "title": "I (1)",
     "description": "I is smaller than V → subtract.",
     "codeLines": [
      6,
      6
     ],
     "facts": {
      "total": 1989
     },
     "rows": [
      {
       "name": "s",
       "cells": [
        "M",
        "C",
        "M",
        "X",
        "C",
        "I",
        "V"
       ],
       "hot": [
        5
       ],
       "marks": {
        "5": "i"
       }
      }
     ]
    },
    {
     "title": "V (5)",
     "description": "Add.",
     "codeLines": [
      6,
      7
     ],
     "facts": {
      "total": 1994
     },
     "rows": [
      {
       "name": "s",
       "cells": [
        "M",
        "C",
        "M",
        "X",
        "C",
        "I",
        "V"
       ],
       "hot": [
        6
       ],
       "marks": {
        "6": "i"
       }
      }
     ]
    },
    {
     "title": "Return",
     "description": "1994",
     "codeLines": [
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "answer",
       "cells": [
        "1994"
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
   "name": "Right to left",
   "tag": "Alternative",
   "code": "class Solution:\n    def romanToInt(self, s):\n        v = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}\n        total = prev = 0\n        for ch in reversed(s):\n            cur = v[ch]\n            total += cur if cur >= prev else -cur\n            prev = cur\n        return total",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Walk backwards; subtract a symbol smaller than the one after it.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Replace subtractive pairs",
   "tag": "Alternative",
   "code": "class Solution:\n    def romanToInt(self, s):\n        v = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}\n        s = s.replace('IV','IIII').replace('IX','VIIII').replace('XL','XXXX').replace('XC','LXXXX').replace('CD','CCCC').replace('CM','DCCCC')\n        return sum(v[c] for c in s)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Rewrite IV, IX, … as plain additive forms, then sum the symbols.",
   "frames": [],
   "alt": true
  }
 ]
};
