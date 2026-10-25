window.PROBLEM = {
 "id": "1456",
 "title": "Maximum Vowels in a Substring of Given Length",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "Given a string s and an integer k, look at every substring (consecutive letters) of length exactly k. Return the largest number of vowels (a, e, i, o, u) found in any such substring. Example: s='abciiidef', k=3 → 'iii' contains 3 vowels, the maximum possible.",
 "input": "\"abciiidef\", k=3",
 "output": "3",
 "notes": [
  "Booleans add as 0/1 in Python.",
  "Same shape as every fixed-size window problem."
 ],
 "best": "Fixed window: adjust the count by what enters and leaves.",
 "variants": [
  {
   "name": "Sliding window",
   "code": "class Solution:\n    def maxVowels(self, s, k):\n        vowels = set('aeiou')\n        cnt = sum(c in vowels for c in s[:k])\n        best = cnt\n        for i in range(k, len(s)):\n            cnt += (s[i] in vowels) - (s[i-k] in vowels)\n            best = max(best, cnt)\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Fixed-size window; only the entering and leaving letters matter.",
   "frames": [
    {
     "title": "First window",
     "description": "'abc' has 1 vowel.",
     "codeLines": [
      4
     ],
     "facts": {
      "cnt": 1,
      "best": 1
     },
     "rows": [
      {
       "name": "s",
       "cells": [
        "a",
        "b",
        "c",
        "i",
        "i",
        "i",
        "d",
        "e",
        "f"
       ],
       "hot": [
        0,
        1,
        2
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Slide to i=3",
     "description": "In: 'i', out: 'a'.",
     "codeLines": [
      7,
      8
     ],
     "facts": {
      "cnt": 1,
      "best": 1
     },
     "rows": [
      {
       "name": "s",
       "cells": [
        "a",
        "b",
        "c",
        "i",
        "i",
        "i",
        "d",
        "e",
        "f"
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
     "title": "Slide to i=4",
     "description": "In: 'i', out: 'b'.",
     "codeLines": [
      7,
      8
     ],
     "facts": {
      "cnt": 2,
      "best": 2
     },
     "rows": [
      {
       "name": "s",
       "cells": [
        "a",
        "b",
        "c",
        "i",
        "i",
        "i",
        "d",
        "e",
        "f"
       ],
       "hot": [
        2,
        3,
        4
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Slide to i=5",
     "description": "In: 'i', out: 'c'.",
     "codeLines": [
      7,
      8
     ],
     "facts": {
      "cnt": 3,
      "best": 3
     },
     "rows": [
      {
       "name": "s",
       "cells": [
        "a",
        "b",
        "c",
        "i",
        "i",
        "i",
        "d",
        "e",
        "f"
       ],
       "hot": [
        3,
        4,
        5
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Slide to i=6",
     "description": "In: 'd', out: 'i'.",
     "codeLines": [
      7,
      8
     ],
     "facts": {
      "cnt": 2,
      "best": 3
     },
     "rows": [
      {
       "name": "s",
       "cells": [
        "a",
        "b",
        "c",
        "i",
        "i",
        "i",
        "d",
        "e",
        "f"
       ],
       "hot": [
        4,
        5,
        6
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Slide to i=7",
     "description": "In: 'e', out: 'i'.",
     "codeLines": [
      7,
      8
     ],
     "facts": {
      "cnt": 2,
      "best": 3
     },
     "rows": [
      {
       "name": "s",
       "cells": [
        "a",
        "b",
        "c",
        "i",
        "i",
        "i",
        "d",
        "e",
        "f"
       ],
       "hot": [
        5,
        6,
        7
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Slide to i=8",
     "description": "In: 'f', out: 'i'.",
     "codeLines": [
      7,
      8
     ],
     "facts": {
      "cnt": 1,
      "best": 3
     },
     "rows": [
      {
       "name": "s",
       "cells": [
        "a",
        "b",
        "c",
        "i",
        "i",
        "i",
        "d",
        "e",
        "f"
       ],
       "hot": [
        6,
        7,
        8
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Return",
     "description": "Best window had 3 vowels.",
     "codeLines": [
      9
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
        "i",
        "i",
        "i",
        "d",
        "e",
        "f"
       ],
       "hot": [
        3,
        4,
        5
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
   "code": "class Solution:\n    def maxVowels(self, s, k):\n        vowels = set('aeiou'); best = 0\n        for i in range(len(s) - k + 1):\n            best = max(best, sum(c in vowels for c in s[i:i+k]))\n        return best",
   "time": "O(n·k)",
   "space": "O(1)",
   "explain": "Count vowels in every window from scratch.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Prefix counts",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxVowels(self, s, k):\n        vowels = set('aeiou'); prefix = [0]\n        for c in s: prefix.append(prefix[-1] + (c in vowels))\n        return max(prefix[i + k] - prefix[i] for i in range(len(s) - k + 1))",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "prefix[i] = vowels in the first i letters; a window is a subtraction.",
   "frames": [],
   "alt": true
  }
 ],
 "why": "k=3: the stretch 'iii' has 3 vowels, which is the most.",
 "idea": "Slide a window. Add 1 if the new letter is a vowel, subtract 1 if the leaving letter was."
};
