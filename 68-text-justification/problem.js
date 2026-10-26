window.PROBLEM = {
 "id": "68",
 "title": "Text Justification",
 "level": "Hard",
 "topic": "Array / String",
 "question": "Fit a list of words into lines that are exactly maxWidth characters wide. Put as many words on a line as possible; fill the leftover width with spaces, spread as evenly as possible between the words on that line (extra spaces go to the left gaps first). The LAST line and any line with a single word is left-aligned, with spaces only at the end. Return the list of lines. Example: ['This','is','an','example',…], maxWidth=16 → ['This    is    an', 'example  of text', 'justification.  '].",
 "why": "Words This, is, an | example, of, text | justification. with width 16.",
 "idea": "Fit as many words as possible per line; then share leftover spaces across the gaps (extras go to the left gaps).",
 "input": "[\"This\",\"is\",\"an\",\"example\",\"of\",\"text\",\"justification.\"], maxWidth=16",
 "output": "[\"This    is    an\",\"example  of text\",\"justification.  \"]",
 "notes": [],
 "best": "Fit as many words as possible per line; then share leftover spaces across the gaps (extras go to the left gaps).",
 "variants": [
  {
   "name": "Greedy line packing",
   "code": "class Solution:\n    def fullJustify(self, words, maxWidth):\n        res, line, length = [], [], 0\n        for w in words:\n            if length + len(w) + len(line) > maxWidth:\n                gaps = len(line) - 1 or 1\n                for i in range(maxWidth - length):\n                    line[i % gaps] += ' '\n                res.append(''.join(line)); line, length = [], 0\n            line.append(w); length += len(w)\n        res.append(' '.join(line).ljust(maxWidth))\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Fit as many words as possible per line; then share leftover spaces across the gaps (extras go to the left gaps).",
   "frames": [
    {
     "title": "Fill line 1",
     "description": "'This', 'is', 'an' fit (8 letters). Adding 'example' would overflow.",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "line",
       "cells": [
        "This",
        "is",
        "an"
       ],
       "hot": [
        0,
        1,
        2
       ],
       "marks": {}
      },
      {
       "name": "letters",
       "cells": [
        "8"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Spread spaces",
     "description": "16 − 8 = 8 spaces over 2 gaps → 4 each.",
     "codeLines": [
      6,
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "result",
       "cells": [
        "This    is    an"
       ],
       "hot": [
        0
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Fill line 2",
     "description": "'example','of','text' = 13 letters + 2 gaps = 15. 'justification.' won't fit.",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "line",
       "cells": [
        "example",
        "of",
        "text"
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
       "description": "line[0] = example",
       "codeLines": [
        5
       ],
       "facts": {},
       "rows": [
        {
         "name": "line",
         "cells": [
          "example",
          "·",
          "·"
         ],
         "hot": [
          0
         ],
         "marks": {}
        }
       ]
      },
      {
       "description": "line[1] = of",
       "codeLines": [
        5
       ],
       "facts": {},
       "rows": [
        {
         "name": "line",
         "cells": [
          "example",
          "of",
          "·"
         ],
         "hot": [
          1
         ],
         "marks": {}
        }
       ]
      },
      {
       "description": "line[2] = text. 'example','of','text' = 13 letters + 2 gaps = 15. 'justification.' won't fit.",
       "codeLines": [
        5
       ],
       "facts": {},
       "rows": [
        {
         "name": "line",
         "cells": [
          "example",
          "of",
          "text"
         ],
         "hot": [
          2
         ],
         "marks": {}
        }
       ]
      }
     ]
    },
    {
     "title": "Spread spaces",
     "description": "3 spaces over 2 gaps → extras go left: 2 then 1.",
     "codeLines": [
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "result",
       "cells": [
        "This    is    an",
        "example  of text"
       ],
       "hot": [
        1
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Last line",
     "description": "Left-align, pad the right.",
     "codeLines": [
      11
     ],
     "facts": {},
     "rows": [
      {
       "name": "result",
       "cells": [
        "This    is    an",
        "example  of text",
        "justification.  "
       ],
       "hot": [
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
   "name": "Pack then pad",
   "tag": "Alternative",
   "code": "class Solution:\n    def fullJustify(self, words, maxWidth):\n        res, i = [], 0\n        while i < len(words):\n            j, length = i, 0\n            while j < len(words) and length + len(words[j]) + (j - i) <= maxWidth:\n                length += len(words[j]); j += 1\n            gaps = j - i - 1\n            if j == len(words) or gaps == 0:\n                line = ' '.join(words[i:j]); line += ' ' * (maxWidth - len(line))\n            else:\n                spaces, extra = divmod(maxWidth - length, gaps); line = ''\n                for k in range(i, j - 1): line += words[k] + ' ' * (spaces + (1 if k - i < extra else 0))\n                line += words[j - 1]\n            res.append(line); i = j\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Find how many words fit, then compute even spacing with divmod.",
   "frames": [],
   "alt": true
  }
 ]
};
