window.PROBLEM = {
 "id": "5",
 "title": "Longest Palindromic Substring",
 "level": "Medium",
 "topic": "Multidimensional DP",
 "question": "Given a string s, return its longest palindromic substring: the longest piece of s (letters next to each other) that reads the same forwards and backwards. Example: 'babad' → 'bab' ('aba' is also accepted).",
 "why": "'babad' → 'bab' (or 'aba') → length 3.",
 "idea": "Treat every position (and every gap) as a center and expand outwards while the letters match.",
 "input": "\"babad\"",
 "output": "\"bab\"",
 "notes": [],
 "best": "Treat every position (and every gap) as a center and expand outwards while the letters match.",
 "variants": [
  {
   "name": "Expand around centers",
   "code": "class Solution:\n    def longestPalindrome(self, s):\n        best = ''\n        for c in range(len(s)):\n            for l, r in ((c, c), (c, c + 1)):\n                while l >= 0 and r < len(s) and s[l] == s[r]: l -= 1; r += 1\n                if r - l - 1 > len(best): best = s[l+1:r]\n        return best",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Treat every position (and every gap) as a center and expand outwards while the letters match.",
   "frames": [
    {
     "title": "Start",
     "description": "Try each letter as a center.",
     "codeLines": [
      4
     ],
     "facts": {},
     "rows": [
      {
       "name": "s",
       "cells": [
        "b",
        "a",
        "b",
        "a",
        "d"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Center 'b' (0)",
     "description": "Can't expand left → 'b'.",
     "codeLines": [
      6
     ],
     "facts": {
      "best": "b"
     },
     "rows": [
      {
       "name": "s",
       "cells": [
        "b",
        "a",
        "b",
        "a",
        "d"
       ],
       "hot": [
        0
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Center 'a' (1)",
     "description": "Expand: b = b → 'bab'.",
     "codeLines": [
      6,
      7
     ],
     "facts": {
      "best": "bab"
     },
     "rows": [
      {
       "name": "s",
       "cells": [
        "b",
        "a",
        "b",
        "a",
        "d"
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
       "description": "center at index 1 ('a'): l = r = 1 → 'a' is a palindrome of length 1",
       "codeLines": [
        5
       ],
       "facts": {
        "best": "b"
       },
       "rows": [
        {
         "name": "s",
         "cells": [
          "b",
          "a",
          "b",
          "a",
          "d"
         ],
         "hot": [
          1
         ],
         "marks": {
          "1": "l,r"
         }
        }
       ]
      },
      {
       "description": "expand: s[0] = 'b' equals s[2] = 'b' ✓ → l = 0, r = 2",
       "codeLines": [
        6
       ],
       "facts": {},
       "rows": [
        {
         "name": "s",
         "cells": [
          "b",
          "a",
          "b",
          "a",
          "d"
         ],
         "hot": [
          0,
          1,
          2
         ],
         "marks": {
          "0": "l",
          "2": "r"
         }
        }
       ]
      },
      {
       "description": "expand: l = -1 is outside → stop. Palindrome = 'bab' (length 3)",
       "codeLines": [
        7
       ],
       "facts": {
        "best": "bab"
       },
       "rows": [
        {
         "name": "s",
         "cells": [
          "b",
          "a",
          "b",
          "a",
          "d"
         ],
         "hot": [
          0,
          1,
          2
         ],
         "marks": {
          "3": "r"
         }
        }
       ]
      }
     ]
    },
    {
     "title": "Other centers",
     "description": "Centers at 2, 3, 4 give 'aba' (length 3, not longer), 'd', etc.",
     "codeLines": [
      7
     ],
     "facts": {
      "best": "bab"
     },
     "rows": [
      {
       "name": "s",
       "cells": [
        "b",
        "a",
        "b",
        "a",
        "d"
       ],
       "hot": [
        1,
        2,
        3
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Return",
     "description": "'bab'",
     "codeLines": [
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "answer",
       "cells": [
        "b",
        "a",
        "b"
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
   "name": "Brute force",
   "tag": "Brute force",
   "code": "class Solution:\n    def longestPalindrome(self, s):\n        best = ''\n        for i in range(len(s)):\n            for j in range(i, len(s)):\n                t = s[i:j + 1]\n                if t == t[::-1] and len(t) > len(best): best = t\n        return best",
   "time": "O(n³)",
   "space": "O(1)",
   "explain": "Check every substring.",
   "frames": [],
   "alt": true
  },
  {
   "name": "DP table",
   "tag": "Alternative",
   "code": "class Solution:\n    def longestPalindrome(self, s):\n        n = len(s); dp = [[False] * n for _ in range(n)]; start, best = 0, 1\n        for i in range(n): dp[i][i] = True\n        for length in range(2, n + 1):\n            for i in range(n - length + 1):\n                j = i + length - 1\n                if s[i] == s[j] and (length < 3 or dp[i + 1][j - 1]):\n                    dp[i][j] = True\n                    if length > best: best = length; start = i\n        return s[start:start + best]",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "dp[i][j] is true when s[i..j] is a palindrome.",
   "frames": [],
   "alt": true
  }
 ]
};
