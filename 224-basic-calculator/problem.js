window.PROBLEM = {
 "id": "224",
 "title": "Basic Calculator",
 "level": "Hard",
 "topic": "Stack",
 "question": "Given a string s that is a math expression with whole numbers, '+', '-', parentheses and spaces (no multiplication or division), evaluate it and return the number. A '-' can also appear right before a parenthesis. Example: '1-(2+3)+4' → 1 − 5 + 4 = 0.",
 "why": "'1-(2+3)+4' = 1 − 5 + 4 = 0.",
 "idea": "Track a running total and the current sign. On '(' save them on a stack; on ')' combine.",
 "input": "\"1-(2+3)+4\"",
 "output": "0",
 "notes": [],
 "best": "Track a running total and the current sign. On '(' save them on a stack; on ')' combine.",
 "variants": [
  {
   "name": "Stack of (total, sign)",
   "code": "class Solution:\n    def calculate(self, s):\n        total, num, sign, stack = 0, 0, 1, []\n        for ch in s:\n            if ch.isdigit(): num = num * 10 + int(ch)\n            elif ch in '+-':\n                total += sign * num; num = 0; sign = 1 if ch == '+' else -1\n            elif ch == '(':\n                stack.append((total, sign)); total, sign = 0, 1\n            elif ch == ')':\n                total += sign * num; num = 0\n                prev, psign = stack.pop(); total = prev + psign * total\n        return total + sign * num",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Track a running total and the current sign. On '(' save them on a stack; on ')' combine.",
   "frames": [
    {
     "title": "Start",
     "description": "total 0, sign +.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "s",
       "cells": [
        "1",
        "-",
        "(",
        "2",
        "+",
        "3",
        ")",
        "+",
        "4"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "'1'",
     "description": "Digit → num = 1",
     "codeLines": [
      5
     ],
     "facts": {
      "total": 0,
      "sign": "+"
     },
     "rows": [
      {
       "name": "s",
       "cells": [
        "1",
        "-",
        "(",
        "2",
        "+",
        "3",
        ")",
        "+",
        "4"
       ],
       "hot": [
        0
       ],
       "marks": {
        "0": "i"
       }
      },
      {
       "name": "stack",
       "cells": [
        "·"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "'-'",
     "description": "Add pending number; sign is now −",
     "codeLines": [
      7
     ],
     "facts": {
      "total": 1,
      "sign": "−"
     },
     "rows": [
      {
       "name": "s",
       "cells": [
        "1",
        "-",
        "(",
        "2",
        "+",
        "3",
        ")",
        "+",
        "4"
       ],
       "hot": [
        1
       ],
       "marks": {
        "1": "i"
       }
      },
      {
       "name": "stack",
       "cells": [
        "·"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "'('",
     "description": "Save (total 1, sign −), start fresh",
     "codeLines": [
      9
     ],
     "facts": {
      "total": 0,
      "sign": "+"
     },
     "rows": [
      {
       "name": "s",
       "cells": [
        "1",
        "-",
        "(",
        "2",
        "+",
        "3",
        ")",
        "+",
        "4"
       ],
       "hot": [
        2
       ],
       "marks": {
        "2": "i"
       }
      },
      {
       "name": "stack",
       "cells": [
        "(1,-1)"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "'2'",
     "description": "Digit → num = 2",
     "codeLines": [
      5
     ],
     "facts": {
      "total": 0,
      "sign": "+"
     },
     "rows": [
      {
       "name": "s",
       "cells": [
        "1",
        "-",
        "(",
        "2",
        "+",
        "3",
        ")",
        "+",
        "4"
       ],
       "hot": [
        3
       ],
       "marks": {
        "3": "i"
       }
      },
      {
       "name": "stack",
       "cells": [
        "(1,-1)"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "'+'",
     "description": "Add pending number; sign is now +",
     "codeLines": [
      7
     ],
     "facts": {
      "total": 2,
      "sign": "+"
     },
     "rows": [
      {
       "name": "s",
       "cells": [
        "1",
        "-",
        "(",
        "2",
        "+",
        "3",
        ")",
        "+",
        "4"
       ],
       "hot": [
        4
       ],
       "marks": {
        "4": "i"
       }
      },
      {
       "name": "stack",
       "cells": [
        "(1,-1)"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "'3'",
     "description": "Digit → num = 3",
     "codeLines": [
      5
     ],
     "facts": {
      "total": 2,
      "sign": "+"
     },
     "rows": [
      {
       "name": "s",
       "cells": [
        "1",
        "-",
        "(",
        "2",
        "+",
        "3",
        ")",
        "+",
        "4"
       ],
       "hot": [
        5
       ],
       "marks": {
        "5": "i"
       }
      },
      {
       "name": "stack",
       "cells": [
        "(1,-1)"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "')'",
     "description": "Close group: total = -4",
     "codeLines": [
      12
     ],
     "facts": {
      "total": -4,
      "sign": "+"
     },
     "rows": [
      {
       "name": "s",
       "cells": [
        "1",
        "-",
        "(",
        "2",
        "+",
        "3",
        ")",
        "+",
        "4"
       ],
       "hot": [
        6
       ],
       "marks": {
        "6": "i"
       }
      },
      {
       "name": "stack",
       "cells": [
        "·"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "'+'",
     "description": "Add pending number; sign is now +",
     "codeLines": [
      7
     ],
     "facts": {
      "total": -4,
      "sign": "+"
     },
     "rows": [
      {
       "name": "s",
       "cells": [
        "1",
        "-",
        "(",
        "2",
        "+",
        "3",
        ")",
        "+",
        "4"
       ],
       "hot": [
        7
       ],
       "marks": {
        "7": "i"
       }
      },
      {
       "name": "stack",
       "cells": [
        "·"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "'4'",
     "description": "Digit → num = 4",
     "codeLines": [
      5
     ],
     "facts": {
      "total": -4,
      "sign": "+"
     },
     "rows": [
      {
       "name": "s",
       "cells": [
        "1",
        "-",
        "(",
        "2",
        "+",
        "3",
        ")",
        "+",
        "4"
       ],
       "hot": [
        8
       ],
       "marks": {
        "8": "i"
       }
      },
      {
       "name": "stack",
       "cells": [
        "·"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Return",
     "description": "Add the last number → 0.",
     "codeLines": [
      13
     ],
     "facts": {},
     "rows": [
      {
       "name": "answer",
       "cells": [
        "0"
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
   "name": "Stack of signs",
   "tag": "Alternative",
   "code": "class Solution:\n    def calculate(self, s):\n        stack = [1]; sign = 1; res = num = 0\n        for c in s:\n            if c.isdigit(): num = num * 10 + int(c)\n            elif c in '+-':\n                res += sign * num; num = 0\n                sign = stack[-1] * (1 if c == '+' else -1)\n            elif c == '(': stack.append(sign)\n            elif c == ')':\n                res += sign * num; num = 0; stack.pop()\n        return res + sign * num",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Keep the effective sign of the current parenthesis group on a stack.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Recursion on parentheses",
   "tag": "Alternative",
   "code": "class Solution:\n    def calculate(self, s):\n        s = s.replace(' ', ''); i = 0\n        def parse():\n            nonlocal i\n            total, num, sign = 0, 0, 1\n            while i < len(s):\n                c = s[i]\n                if c.isdigit(): num = num * 10 + int(c)\n                elif c in '+-':\n                    total += sign * num; num = 0; sign = 1 if c == '+' else -1\n                elif c == '(':\n                    i += 1; num = parse()\n                elif c == ')': break\n                i += 1\n            return total + sign * num\n        return parse()",
   "time": "O(n)",
   "space": "O(depth)",
   "explain": "Each '(' calls the parser again and uses the result as a number.",
   "frames": [],
   "alt": true
  }
 ]
};
