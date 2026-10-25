window.PROBLEM = {
 "id": "150",
 "title": "Evaluate Reverse Polish Notation",
 "level": "Medium",
 "topic": "Stack",
 "question": "Evaluate an arithmetic expression written in Reverse Polish Notation: each operator (+ − × ÷) comes AFTER the two numbers it applies to. Given a list of tokens, return the result. Division rounds toward zero. Example: ['2','1','+','3','*'] means (2 + 1) × 3 = 9.",
 "why": "['2','1','+','3','*'] = (2 + 1) × 3 = 9.",
 "idea": "Push numbers; at an operator pop two, compute, push the result.",
 "input": "[\"2\",\"1\",\"+\",\"3\",\"*\"]",
 "output": "9",
 "notes": [],
 "best": "Push numbers; at an operator pop two, compute, push the result.",
 "variants": [
  {
   "name": "Stack of numbers",
   "code": "class Solution:\n    def evalRPN(self, tokens):\n        st = []\n        for t in tokens:\n            if t in '+-*/':\n                b, a = st.pop(), st.pop()\n                st.append(int(a + b if t == '+' else a - b if t == '-' else a * b if t == '*' else a / b))\n            else: st.append(int(t))\n        return st[0]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Push numbers; at an operator pop two, compute, push the result.",
   "frames": [
    {
     "title": "Start",
     "description": "Empty stack.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "tokens",
       "cells": [
        "2",
        "1",
        "+",
        "3",
        "*"
       ],
       "hot": [],
       "marks": {}
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
     "title": "'2'",
     "description": "Number → push.",
     "codeLines": [
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "tokens",
       "cells": [
        "2",
        "1",
        "+",
        "3",
        "*"
       ],
       "hot": [
        0
       ],
       "marks": {}
      },
      {
       "name": "stack",
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
     "title": "'1'",
     "description": "Number → push.",
     "codeLines": [
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "tokens",
       "cells": [
        "2",
        "1",
        "+",
        "3",
        "*"
       ],
       "hot": [
        1
       ],
       "marks": {}
      },
      {
       "name": "stack",
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
     "title": "'+'",
     "description": "2 + 1 = 3",
     "codeLines": [
      6,
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "tokens",
       "cells": [
        "2",
        "1",
        "+",
        "3",
        "*"
       ],
       "hot": [
        2
       ],
       "marks": {}
      },
      {
       "name": "stack",
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
     "title": "'3'",
     "description": "Number → push.",
     "codeLines": [
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "tokens",
       "cells": [
        "2",
        "1",
        "+",
        "3",
        "*"
       ],
       "hot": [
        3
       ],
       "marks": {}
      },
      {
       "name": "stack",
       "cells": [
        "3",
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
     "title": "'*'",
     "description": "3 * 3 = 9",
     "codeLines": [
      6,
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "tokens",
       "cells": [
        "2",
        "1",
        "+",
        "3",
        "*"
       ],
       "hot": [
        4
       ],
       "marks": {}
      },
      {
       "name": "stack",
       "cells": [
        "9"
       ],
       "hot": [
        0
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Return",
     "description": "9",
     "codeLines": [
      9
     ],
     "facts": {},
     "rows": [
      {
       "name": "answer",
       "cells": [
        "9"
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
   "name": "Operator table",
   "tag": "Alternative",
   "code": "class Solution:\n    def evalRPN(self, tokens):\n        ops = {'+': lambda a, b: a + b, '-': lambda a, b: a - b, '*': lambda a, b: a * b, '/': lambda a, b: int(a / b)}\n        st = []\n        for t in tokens:\n            if t in ops:\n                b = st.pop(); a = st.pop(); st.append(ops[t](a, b))\n            else: st.append(int(t))\n        return st[0]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Look operators up in a dictionary of functions.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Reduce the token list in place",
   "tag": "Brute force",
   "code": "class Solution:\n    def evalRPN(self, tokens):\n        tokens = list(tokens)\n        while len(tokens) > 1:\n            for i, t in enumerate(tokens):\n                if t in ('+', '-', '*', '/'):\n                    a, b = int(tokens[i - 2]), int(tokens[i - 1])\n                    r = a + b if t == '+' else a - b if t == '-' else a * b if t == '*' else int(a / b)\n                    tokens[i - 2:i + 1] = [str(r)]\n                    break\n        return int(tokens[0])",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Find the first operator, replace it and its two operands by the result.",
   "frames": [],
   "alt": true
  }
 ]
};
