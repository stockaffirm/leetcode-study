window.PROBLEM = {
 "id": "3",
 "title": "Longest Substring Without Repeating Characters",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "Given a string s, find the longest piece of it (letters that sit next to each other) in which no letter appears twice. Return the length of that piece. Example: 'abcabcbb' → the longest such piece is 'abc' → 3.",
 "why": "'abcabcbb': 'abc' has no repeats and length 3 → 3.",
 "idea": "Slide a window; when a letter repeats, jump the left edge past its previous spot.",
 "input": "\"abcabcbb\"",
 "output": "3",
 "notes": [],
 "best": "Slide a window; when a letter repeats, jump the left edge past its previous spot.",
 "variants": [
  {
   "name": "Sliding window with last-seen index",
   "code": "class Solution:\n    def lengthOfLongestSubstring(self, s):\n        seen, l, best = {}, 0, 0\n        for r, ch in enumerate(s):\n            if ch in seen and seen[ch] >= l: l = seen[ch] + 1\n            seen[ch] = r; best = max(best, r - l + 1)\n        return best",
   "time": "O(n)",
   "space": "O(k)",
   "explain": "Slide a window; when a letter repeats, jump the left edge past its previous spot.",
   "frames": [
    {
     "title": "Start",
     "description": "Window empty.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "s",
       "cells": [
        "a",
        "b",
        "c",
        "a",
        "b",
        "c",
        "b",
        "b"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "r = 0 'a'",
     "description": "New letter — extend.",
     "codeLines": [
      5,
      6
     ],
     "facts": {
      "best": 1
     },
     "rows": [
      {
       "name": "s",
       "cells": [
        "a",
        "b",
        "c",
        "a",
        "b",
        "c",
        "b",
        "b"
       ],
       "hot": [
        0
       ],
       "marks": {
        "0": "l,r"
       }
      }
     ]
    },
    {
     "title": "r = 1 'b'",
     "description": "New letter — extend.",
     "codeLines": [
      5,
      6
     ],
     "facts": {
      "best": 2
     },
     "rows": [
      {
       "name": "s",
       "cells": [
        "a",
        "b",
        "c",
        "a",
        "b",
        "c",
        "b",
        "b"
       ],
       "hot": [
        0,
        1
       ],
       "marks": {
        "0": "l",
        "1": "r"
       }
      }
     ]
    },
    {
     "title": "r = 2 'c'",
     "description": "New letter — extend.",
     "codeLines": [
      5,
      6
     ],
     "facts": {
      "best": 3
     },
     "rows": [
      {
       "name": "s",
       "cells": [
        "a",
        "b",
        "c",
        "a",
        "b",
        "c",
        "b",
        "b"
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
     "title": "r = 3 'a'",
     "description": "'a' repeats → move left past its old spot.",
     "codeLines": [
      5,
      6
     ],
     "facts": {
      "best": 3
     },
     "rows": [
      {
       "name": "s",
       "cells": [
        "a",
        "b",
        "c",
        "a",
        "b",
        "c",
        "b",
        "b"
       ],
       "hot": [
        1,
        2,
        3
       ],
       "marks": {
        "1": "l",
        "3": "r"
       }
      }
     ]
    },
    {
     "title": "r = 4 'b'",
     "description": "'b' repeats → move left past its old spot.",
     "codeLines": [
      5,
      6
     ],
     "facts": {
      "best": 3
     },
     "rows": [
      {
       "name": "s",
       "cells": [
        "a",
        "b",
        "c",
        "a",
        "b",
        "c",
        "b",
        "b"
       ],
       "hot": [
        2,
        3,
        4
       ],
       "marks": {
        "2": "l",
        "4": "r"
       }
      }
     ]
    },
    {
     "title": "r = 5 'c'",
     "description": "'c' repeats → move left past its old spot.",
     "codeLines": [
      5,
      6
     ],
     "facts": {
      "best": 3
     },
     "rows": [
      {
       "name": "s",
       "cells": [
        "a",
        "b",
        "c",
        "a",
        "b",
        "c",
        "b",
        "b"
       ],
       "hot": [
        3,
        4,
        5
       ],
       "marks": {
        "3": "l",
        "5": "r"
       }
      }
     ]
    },
    {
     "title": "r = 6 'b'",
     "description": "'b' repeats → move left past its old spot.",
     "codeLines": [
      5,
      6
     ],
     "facts": {
      "best": 3
     },
     "rows": [
      {
       "name": "s",
       "cells": [
        "a",
        "b",
        "c",
        "a",
        "b",
        "c",
        "b",
        "b"
       ],
       "hot": [
        5,
        6
       ],
       "marks": {
        "5": "l",
        "6": "r"
       }
      }
     ]
    },
    {
     "title": "r = 7 'b'",
     "description": "'b' repeats → move left past its old spot.",
     "codeLines": [
      5,
      6
     ],
     "facts": {
      "best": 3
     },
     "rows": [
      {
       "name": "s",
       "cells": [
        "a",
        "b",
        "c",
        "a",
        "b",
        "c",
        "b",
        "b"
       ],
       "hot": [
        7
       ],
       "marks": {
        "7": "l,r"
       }
      }
     ]
    },
    {
     "title": "Return",
     "description": "Longest = 3.",
     "codeLines": [
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "answer",
       "cells": [
        "3"
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
   "name": "Brute force",
   "tag": "Brute force",
   "code": "class Solution:\n    def lengthOfLongestSubstring(self, s):\n        best = 0\n        for i in range(len(s)):\n            seen = set()\n            for j in range(i, len(s)):\n                if s[j] in seen: break\n                seen.add(s[j]); best = max(best, j - i + 1)\n        return best",
   "time": "O(n²)",
   "space": "O(k)",
   "explain": "From each start extend until a letter repeats.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Sliding window with a set",
   "tag": "Alternative",
   "code": "class Solution:\n    def lengthOfLongestSubstring(self, s):\n        seen = set(); l = best = 0\n        for r, ch in enumerate(s):\n            while ch in seen:\n                seen.remove(s[l]); l += 1\n            seen.add(ch); best = max(best, r - l + 1)\n        return best",
   "time": "O(n)",
   "space": "O(k)",
   "explain": "Shrink from the left until the new letter is no longer a repeat.",
   "frames": [],
   "alt": true
  }
 ]
};
