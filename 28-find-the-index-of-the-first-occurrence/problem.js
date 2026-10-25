window.PROBLEM = {
 "id": "28",
 "title": "Find the Index of the First Occurrence in a String",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Given two strings, haystack and needle, return the position (counting from 0) where needle FIRST appears inside haystack, or -1 if it doesn't appear. Example: haystack='hello', needle='ll' → 'll' starts at position 2.",
 "why": "haystack 'hello', needle 'll' → starts at index 2.",
 "idea": "Slide a window the size of the needle along the haystack and compare.",
 "input": "haystack=\"hello\", needle=\"ll\"",
 "output": "2",
 "notes": [],
 "best": "Slide a window the size of the needle along the haystack and compare.",
 "variants": [
  {
   "name": "Slide a window",
   "code": "class Solution:\n    def strStr(self, haystack, needle):\n        for i in range(len(haystack) - len(needle) + 1):\n            if haystack[i:i+len(needle)] == needle:\n                return i\n        return -1",
   "time": "O(n·m)",
   "space": "O(1)",
   "explain": "Slide a window the size of the needle along the haystack and compare.",
   "frames": [
    {
     "title": "Start",
     "description": "Compare each 2-letter window with 'll'.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "haystack",
       "cells": [
        "h",
        "e",
        "l",
        "l",
        "o"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "i = 0",
     "description": "'he' ≠ 'll'.",
     "codeLines": [
      4
     ],
     "facts": {},
     "rows": [
      {
       "name": "haystack",
       "cells": [
        "h",
        "e",
        "l",
        "l",
        "o"
       ],
       "hot": [
        0,
        1
       ],
       "marks": {
        "0": "i"
       }
      }
     ]
    },
    {
     "title": "i = 1",
     "description": "'el' ≠ 'll'.",
     "codeLines": [
      4
     ],
     "facts": {},
     "rows": [
      {
       "name": "haystack",
       "cells": [
        "h",
        "e",
        "l",
        "l",
        "o"
       ],
       "hot": [
        1,
        2
       ],
       "marks": {
        "1": "i"
       }
      }
     ]
    },
    {
     "title": "i = 2",
     "description": "'ll' == 'll' → found!",
     "codeLines": [
      4,
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "haystack",
       "cells": [
        "h",
        "e",
        "l",
        "l",
        "o"
       ],
       "hot": [
        2,
        3
       ],
       "marks": {
        "2": "i"
       }
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "Built-in find",
   "tag": "Pythonic",
   "code": "class Solution:\n    def strStr(self, haystack, needle):\n        return haystack.find(needle)",
   "time": "O(n·m)",
   "space": "O(1)",
   "explain": "Let the language search for you.",
   "frames": [],
   "alt": true
  },
  {
   "name": "KMP",
   "tag": "Optimal",
   "code": "class Solution:\n    def strStr(self, haystack, needle):\n        if not needle: return 0\n        lps = [0] * len(needle); k = 0\n        for i in range(1, len(needle)):\n            while k and needle[i] != needle[k]: k = lps[k - 1]\n            if needle[i] == needle[k]: k += 1\n            lps[i] = k\n        k = 0\n        for i, c in enumerate(haystack):\n            while k and c != needle[k]: k = lps[k - 1]\n            if c == needle[k]: k += 1\n            if k == len(needle): return i - k + 1\n        return -1",
   "time": "O(n+m)",
   "space": "O(m)",
   "explain": "Precompute how far to fall back on a mismatch so the haystack is scanned once.",
   "frames": [],
   "alt": true
  }
 ]
};
