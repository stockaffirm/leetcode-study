window.PROBLEM = {
 "id": "58",
 "title": "Length of Last Word",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Given a sentence s made of words separated by spaces (there may be extra spaces at the start or end), return the length of the LAST word. Example: '   fly me   to   the moon  ' → the last word is 'moon' → 4.",
 "why": "'   fly me   to   the moon  ' → last word is 'moon' → 4.",
 "idea": "split() throws away extra spaces; take the last piece.",
 "input": "\"   fly me   to   the moon  \"",
 "output": "4",
 "notes": [],
 "best": "split() throws away extra spaces; take the last piece.",
 "variants": [
  {
   "name": "split()",
   "code": "class Solution:\n    def lengthOfLastWord(self, s):\n        return len(s.split()[-1])",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "split() throws away extra spaces; take the last piece.",
   "frames": [
    {
     "title": "Input",
     "description": "Spaces at the start, between and at the end.",
     "codeLines": [
      2
     ],
     "facts": {},
     "rows": [
      {
       "name": "s",
       "cells": [
        " ",
        " ",
        " ",
        "f",
        "l",
        "y",
        " ",
        "m",
        "e",
        " ",
        " ",
        " ",
        "t",
        "o",
        " ",
        " ",
        " ",
        "t",
        "h",
        "e",
        " ",
        "m",
        "o",
        "o",
        "n",
        " ",
        " "
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "split()",
     "description": "Words only: fly, me, to, the, moon.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "words",
       "cells": [
        "fly",
        "me",
        "to",
        "the",
        "moon"
       ],
       "hot": [
        4
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Last word",
     "description": "[-1] = 'moon'.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "last",
       "cells": [
        "m",
        "o",
        "o",
        "n"
       ],
       "hot": [
        0,
        1,
        2,
        3
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Length",
     "description": "len('moon') = 4",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "answer",
       "cells": [
        "4"
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
   "name": "Scan from the end",
   "tag": "Alternative",
   "code": "class Solution:\n    def lengthOfLastWord(self, s):\n        i = len(s) - 1\n        while i >= 0 and s[i] == ' ': i -= 1\n        n = 0\n        while i >= 0 and s[i] != ' ':\n            n += 1; i -= 1\n        return n",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Skip trailing spaces, then count letters.",
   "frames": [],
   "alt": true
  },
  {
   "name": "rstrip + rfind",
   "tag": "Pythonic",
   "code": "class Solution:\n    def lengthOfLastWord(self, s):\n        s = s.rstrip()\n        return len(s) - s.rfind(' ') - 1",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Strip the end and measure from the last space.",
   "frames": [],
   "alt": true
  }
 ]
};
