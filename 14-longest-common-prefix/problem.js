window.PROBLEM = {
 "id": "14",
 "title": "Longest Common Prefix",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Given a list of words strs, return the longest beginning (prefix) that ALL the words share. If they share nothing, return an empty string. Example: ['flower','flow','flight'] all start with 'fl' → 'fl'.",
 "why": "flower, flow, flight all start with 'fl'.",
 "idea": "Start with the first word as the prefix and shorten it until each other word starts with it.",
 "input": "[\"flower\",\"flow\",\"flight\"]",
 "output": "\"fl\"",
 "notes": [],
 "best": "Start with the first word as the prefix and shorten it until each other word starts with it.",
 "variants": [
  {
   "name": "Shrink the prefix",
   "code": "class Solution:\n    def longestCommonPrefix(self, strs):\n        prefix = strs[0]\n        for s in strs[1:]:\n            while not s.startswith(prefix):\n                prefix = prefix[:-1]\n        return prefix",
   "time": "O(total chars)",
   "space": "O(1)",
   "explain": "Start with the first word as the prefix and shorten it until each other word starts with it.",
   "frames": [
    {
     "title": "Start",
     "description": "prefix = 'flower'.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "prefix",
       "cells": [
        "f",
        "l",
        "o",
        "w",
        "e",
        "r"
       ],
       "hot": [
        0,
        1,
        2,
        3,
        4,
        5
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Check 'flow'",
     "description": "'flow' doesn't start with 'flower' → trim to 'flowe', 'flow'.",
     "codeLines": [
      5,
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "prefix",
       "cells": [
        "f",
        "l",
        "o",
        "w"
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
     "title": "Check 'flight'",
     "description": "'flight' doesn't start with 'flow', 'flo' → trim to 'fl'.",
     "codeLines": [
      5,
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "prefix",
       "cells": [
        "f",
        "l"
       ],
       "hot": [
        0,
        1
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Return",
     "description": "'fl'",
     "codeLines": [
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "answer",
       "cells": [
        "f",
        "l"
       ],
       "hot": [
        0,
        1
       ],
       "marks": {}
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "Vertical scanning",
   "tag": "Alternative",
   "code": "class Solution:\n    def longestCommonPrefix(self, strs):\n        for i in range(len(strs[0])):\n            for s in strs[1:]:\n                if i == len(s) or s[i] != strs[0][i]: return strs[0][:i]\n        return strs[0]",
   "time": "O(S)",
   "space": "O(1)",
   "explain": "Compare column by column across all words.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Sort and compare first / last",
   "tag": "Alternative",
   "code": "class Solution:\n    def longestCommonPrefix(self, strs):\n        strs = sorted(strs); a, b = strs[0], strs[-1]; i = 0\n        while i < min(len(a), len(b)) and a[i] == b[i]: i += 1\n        return a[:i]",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "The prefix common to everyone is common to the smallest and largest word.",
   "frames": [],
   "alt": true
  }
 ]
};
