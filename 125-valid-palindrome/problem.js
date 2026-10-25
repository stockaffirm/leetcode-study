window.PROBLEM = {
 "id": "125",
 "title": "Valid Palindrome",
 "level": "Easy",
 "topic": "Two Pointers",
 "question": "A phrase is a palindrome if it reads the same forwards and backwards after you (1) ignore everything that is not a letter or digit and (2) treat capital and small letters as the same. Given a string s, return true if it is a palindrome. Example: 'A man, a plan, a canal: Panama' becomes 'amanaplanacanalpanama', which is the same both ways → true.",
 "why": "'A man, a plan, a canal: Panama' becomes amanaplanacanalpanama, which is a palindrome → True.",
 "idea": "Two pointers from the ends moving inward; every pair must match.",
 "input": "\"A man, a plan, a canal: Panama\"",
 "output": "True",
 "notes": [],
 "best": "Two pointers from the ends moving inward; every pair must match.",
 "variants": [
  {
   "name": "Two pointers on the cleaned text",
   "code": "class Solution:\n    def isPalindrome(self, s):\n        t = [c.lower() for c in s if c.isalnum()]\n        l, r = 0, len(t) - 1\n        while l < r:\n            if t[l] != t[r]: return False\n            l += 1; r -= 1\n        return True",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Two pointers from the ends moving inward; every pair must match.",
   "frames": [
    {
     "title": "Clean",
     "description": "Keep only letters/digits, lower-case.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "t",
       "cells": [
        "a",
        "m",
        "a",
        "n",
        "a",
        "p",
        "l",
        "a",
        "n",
        "a",
        "c",
        "a",
        "n",
        "a",
        "l",
        "p",
        "a",
        "n",
        "a",
        "m",
        "a"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Compare ends",
     "description": "'a' = 'a' ✓",
     "codeLines": [
      6,
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "t",
       "cells": [
        "a",
        "m",
        "a",
        "n",
        "a",
        "p",
        "l",
        "a",
        "n",
        "a",
        "c",
        "a",
        "n",
        "a",
        "l",
        "p",
        "a",
        "n",
        "a",
        "m",
        "a"
       ],
       "hot": [
        0,
        20
       ],
       "marks": {
        "0": "l",
        "20": "r"
       }
      }
     ]
    },
    {
     "title": "Compare ends",
     "description": "'m' = 'm' ✓",
     "codeLines": [
      6,
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "t",
       "cells": [
        "a",
        "m",
        "a",
        "n",
        "a",
        "p",
        "l",
        "a",
        "n",
        "a",
        "c",
        "a",
        "n",
        "a",
        "l",
        "p",
        "a",
        "n",
        "a",
        "m",
        "a"
       ],
       "hot": [
        1,
        19
       ],
       "marks": {
        "1": "l",
        "19": "r"
       }
      }
     ]
    },
    {
     "title": "Compare ends",
     "description": "'a' = 'a' ✓",
     "codeLines": [
      6,
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "t",
       "cells": [
        "a",
        "m",
        "a",
        "n",
        "a",
        "p",
        "l",
        "a",
        "n",
        "a",
        "c",
        "a",
        "n",
        "a",
        "l",
        "p",
        "a",
        "n",
        "a",
        "m",
        "a"
       ],
       "hot": [
        2,
        18
       ],
       "marks": {
        "2": "l",
        "18": "r"
       }
      }
     ]
    },
    {
     "title": "Keep going",
     "description": "Every remaining pair matches until the pointers meet.",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "t",
       "cells": [
        "a",
        "m",
        "a",
        "n",
        "a",
        "p",
        "l",
        "a",
        "n",
        "a",
        "c",
        "a",
        "n",
        "a",
        "l",
        "p",
        "a",
        "n",
        "a",
        "m",
        "a"
       ],
       "hot": [
        10
       ],
       "marks": {
        "10": "l,r"
       }
      }
     ],
     "sub": [
      {
       "description": "compare t[3] = 'n' with t[17] = 'n' ✓ → move both inward",
       "codeLines": [
        6,
        7
       ],
       "facts": {},
       "rows": [
        {
         "name": "t",
         "cells": [
          "a",
          "m",
          "a",
          "n",
          "a",
          "p",
          "l",
          "a",
          "n",
          "a",
          "c",
          "a",
          "n",
          "a",
          "l",
          "p",
          "a",
          "n",
          "a",
          "m",
          "a"
         ],
         "hot": [
          3,
          17
         ],
         "marks": {
          "3": "l",
          "17": "r"
         }
        }
       ]
      },
      {
       "description": "compare t[4] = 'a' with t[16] = 'a' ✓ → move both inward",
       "codeLines": [
        6,
        7
       ],
       "facts": {},
       "rows": [
        {
         "name": "t",
         "cells": [
          "a",
          "m",
          "a",
          "n",
          "a",
          "p",
          "l",
          "a",
          "n",
          "a",
          "c",
          "a",
          "n",
          "a",
          "l",
          "p",
          "a",
          "n",
          "a",
          "m",
          "a"
         ],
         "hot": [
          4,
          16
         ],
         "marks": {
          "4": "l",
          "16": "r"
         }
        }
       ]
      },
      {
       "description": "compare t[5] = 'p' with t[15] = 'p' ✓ → move both inward",
       "codeLines": [
        6,
        7
       ],
       "facts": {},
       "rows": [
        {
         "name": "t",
         "cells": [
          "a",
          "m",
          "a",
          "n",
          "a",
          "p",
          "l",
          "a",
          "n",
          "a",
          "c",
          "a",
          "n",
          "a",
          "l",
          "p",
          "a",
          "n",
          "a",
          "m",
          "a"
         ],
         "hot": [
          5,
          15
         ],
         "marks": {
          "5": "l",
          "15": "r"
         }
        }
       ]
      },
      {
       "description": "compare t[6] = 'l' with t[14] = 'l' ✓ → move both inward",
       "codeLines": [
        6,
        7
       ],
       "facts": {},
       "rows": [
        {
         "name": "t",
         "cells": [
          "a",
          "m",
          "a",
          "n",
          "a",
          "p",
          "l",
          "a",
          "n",
          "a",
          "c",
          "a",
          "n",
          "a",
          "l",
          "p",
          "a",
          "n",
          "a",
          "m",
          "a"
         ],
         "hot": [
          6,
          14
         ],
         "marks": {
          "6": "l",
          "14": "r"
         }
        }
       ]
      },
      {
       "description": "compare t[7] = 'a' with t[13] = 'a' ✓ → move both inward",
       "codeLines": [
        6,
        7
       ],
       "facts": {},
       "rows": [
        {
         "name": "t",
         "cells": [
          "a",
          "m",
          "a",
          "n",
          "a",
          "p",
          "l",
          "a",
          "n",
          "a",
          "c",
          "a",
          "n",
          "a",
          "l",
          "p",
          "a",
          "n",
          "a",
          "m",
          "a"
         ],
         "hot": [
          7,
          13
         ],
         "marks": {
          "7": "l",
          "13": "r"
         }
        }
       ]
      },
      {
       "description": "compare t[8] = 'n' with t[12] = 'n' ✓ → move both inward",
       "codeLines": [
        6,
        7
       ],
       "facts": {},
       "rows": [
        {
         "name": "t",
         "cells": [
          "a",
          "m",
          "a",
          "n",
          "a",
          "p",
          "l",
          "a",
          "n",
          "a",
          "c",
          "a",
          "n",
          "a",
          "l",
          "p",
          "a",
          "n",
          "a",
          "m",
          "a"
         ],
         "hot": [
          8,
          12
         ],
         "marks": {
          "8": "l",
          "12": "r"
         }
        }
       ]
      },
      {
       "description": "compare t[9] = 'a' with t[11] = 'a' ✓ → move both inward",
       "codeLines": [
        6,
        7
       ],
       "facts": {},
       "rows": [
        {
         "name": "t",
         "cells": [
          "a",
          "m",
          "a",
          "n",
          "a",
          "p",
          "l",
          "a",
          "n",
          "a",
          "c",
          "a",
          "n",
          "a",
          "l",
          "p",
          "a",
          "n",
          "a",
          "m",
          "a"
         ],
         "hot": [
          9,
          11
         ],
         "marks": {
          "9": "l",
          "11": "r"
         }
        }
       ]
      },
      {
       "description": "l and r meet in the middle — every pair matched",
       "codeLines": [
        5
       ],
       "facts": {},
       "rows": [
        {
         "name": "t",
         "cells": [
          "a",
          "m",
          "a",
          "n",
          "a",
          "p",
          "l",
          "a",
          "n",
          "a",
          "c",
          "a",
          "n",
          "a",
          "l",
          "p",
          "a",
          "n",
          "a",
          "m",
          "a"
         ],
         "hot": [
          10
         ],
         "marks": {
          "10": "l,r"
         }
        }
       ]
      }
     ]
    },
    {
     "title": "Return",
     "description": "Palindrome.",
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
   "name": "Filter, then compare with the reverse",
   "tag": "Alternative",
   "code": "class Solution:\n    def isPalindrome(self, s):\n        t = [c.lower() for c in s if c.isalnum()]\n        return t == t[::-1]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Clean the text once and check it equals its reverse.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Two pointers on the original",
   "tag": "Optimal space",
   "code": "class Solution:\n    def isPalindrome(self, s):\n        l, r = 0, len(s) - 1\n        while l < r:\n            while l < r and not s[l].isalnum(): l += 1\n            while l < r and not s[r].isalnum(): r -= 1\n            if s[l].lower() != s[r].lower(): return False\n            l += 1; r -= 1\n        return True",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Skip non-alphanumeric characters on the fly — no copy needed.",
   "frames": [],
   "alt": true
  }
 ]
};
