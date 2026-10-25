window.PROBLEM = {
 "id": "20",
 "title": "Valid Parentheses",
 "level": "Easy",
 "topic": "Stack",
 "question": "Given a string s made only of brackets ( ) [ ] { }, return true if it is valid: every opening bracket is closed by the SAME type of bracket, and brackets are closed in the right order (the most recently opened one must be closed first). Example: '([{}])' → true; '(]' → false; '([)]' → false.",
 "why": "'([{}])' is perfectly nested → True. '(]' would be False.",
 "idea": "Push opening brackets. On a closing bracket, the top of the stack must be its partner.",
 "input": "\"([{}])\"",
 "output": "True",
 "notes": [],
 "best": "Push opening brackets. On a closing bracket, the top of the stack must be its partner.",
 "variants": [
  {
   "name": "Stack of openers",
   "code": "class Solution:\n    def isValid(self, s):\n        stack, pairs = [], {')':'(', ']':'[', '}':'{'}\n        for ch in s:\n            if ch in pairs:\n                if not stack or stack.pop() != pairs[ch]: return False\n            else: stack.append(ch)\n        return not stack",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Push opening brackets. On a closing bracket, the top of the stack must be its partner.",
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
       "name": "s",
       "cells": [
        "(",
        "[",
        "{",
        "}",
        "]",
        ")"
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
     "title": "'('",
     "description": "Opening → push.",
     "codeLines": [
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "s",
       "cells": [
        "(",
        "[",
        "{",
        "}",
        "]",
        ")"
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
        "("
       ],
       "hot": [
        0
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "'['",
     "description": "Opening → push.",
     "codeLines": [
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "s",
       "cells": [
        "(",
        "[",
        "{",
        "}",
        "]",
        ")"
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
        "(",
        "["
       ],
       "hot": [
        1
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "'{'",
     "description": "Opening → push.",
     "codeLines": [
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "s",
       "cells": [
        "(",
        "[",
        "{",
        "}",
        "]",
        ")"
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
        "(",
        "[",
        "{"
       ],
       "hot": [
        2
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "'}'",
     "description": "Closing → pops '{' (its partner).",
     "codeLines": [
      5,
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "s",
       "cells": [
        "(",
        "[",
        "{",
        "}",
        "]",
        ")"
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
        "(",
        "["
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "']'",
     "description": "Closing → pops '[' (its partner).",
     "codeLines": [
      5,
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "s",
       "cells": [
        "(",
        "[",
        "{",
        "}",
        "]",
        ")"
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
        "("
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "')'",
     "description": "Closing → pops '(' (its partner).",
     "codeLines": [
      5,
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "s",
       "cells": [
        "(",
        "[",
        "{",
        "}",
        "]",
        ")"
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
        "·"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Return",
     "description": "Stack empty → True.",
     "codeLines": [
      8
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
   "name": "Repeated replace",
   "tag": "Brute force",
   "code": "class Solution:\n    def isValid(self, s):\n        while '()' in s or '[]' in s or '{}' in s:\n            s = s.replace('()', '').replace('[]', '').replace('{}', '')\n        return s == ''",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Delete matching pairs '()', '[]', '{}' until nothing changes.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Stack of expected closers",
   "tag": "Alternative",
   "code": "class Solution:\n    def isValid(self, s):\n        st = []; closer = {'(': ')', '[': ']', '{': '}'}\n        for ch in s:\n            if ch in closer: st.append(closer[ch])\n            elif not st or st.pop() != ch: return False\n        return not st",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Push the closer each opener needs; the next closer must match the top.",
   "frames": [],
   "alt": true
  }
 ]
};
