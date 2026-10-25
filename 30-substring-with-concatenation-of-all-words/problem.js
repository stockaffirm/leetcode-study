window.PROBLEM = {
 "id": "30",
 "title": "Substring with Concatenation of All Words",
 "level": "Hard",
 "topic": "Sliding Window",
 "question": "You have a string s and a list of words that all have the SAME length. A 'concatenated' string is all the words joined together in some order, with nothing in between and each word used exactly once. Return every starting position in s where such a concatenated string begins (any order of results). Example: s='barfoothefoobarman', words=['foo','bar'] → 'barfoo' starts at 0 and 'foobar' starts at 9 → [0,9].",
 "why": "s = 'barfoothefoobarman', words foo + bar: 'barfoo' starts at 0, 'foobar' starts at 9 → [0, 9].",
 "idea": "Slice the text into word-sized chunks from each start and compare their counts with the word counts.",
 "input": "s=\"barfoothefoobarman\", words=[\"foo\",\"bar\"]",
 "output": "[0, 9]",
 "notes": [],
 "best": "Slice the text into word-sized chunks from each start and compare their counts with the word counts.",
 "variants": [
  {
   "name": "Check each start",
   "code": "class Solution:\n    def findSubstring(self, s, words):\n        w, n = len(words[0]), len(words); need = Counter(words); res = []\n        for i in range(len(s) - w * n + 1):\n            seen = Counter(s[i + j*w : i + (j+1)*w] for j in range(n))\n            if seen == need: res.append(i)\n        return res",
   "time": "O(len·n·w)",
   "space": "O(n)",
   "explain": "Slice the text into word-sized chunks from each start and compare their counts with the word counts.",
   "frames": [
    {
     "title": "Setup",
     "description": "Words have length 3; the target window is 6 characters.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "s",
       "cells": [
        "b",
        "a",
        "r",
        "f",
        "o",
        "o",
        "t",
        "h",
        "e",
        "f",
        "o",
        "o",
        "b",
        "a",
        "r",
        "m",
        "a",
        "n"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "need",
       "cells": [
        "foo:1",
        "bar:1"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "i = 0",
     "description": "chunks: 'bar','foo' → same counts → save 0.",
     "codeLines": [
      5,
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "s",
       "cells": [
        "b",
        "a",
        "r",
        "f",
        "o",
        "o",
        "t",
        "h",
        "e",
        "f",
        "o",
        "o",
        "b",
        "a",
        "r",
        "m",
        "a",
        "n"
       ],
       "hot": [
        0,
        1,
        2,
        3,
        4,
        5
       ],
       "marks": {
        "0": "i"
       }
      },
      {
       "name": "chunks",
       "cells": [
        "bar",
        "foo"
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
     "title": "i = 1",
     "description": "chunks: 'arf','oot' → no match.",
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
        "r",
        "f",
        "o",
        "o",
        "t",
        "h",
        "e",
        "f",
        "o",
        "o",
        "b",
        "a",
        "r",
        "m",
        "a",
        "n"
       ],
       "hot": [
        1,
        2,
        3,
        4,
        5,
        6
       ],
       "marks": {
        "1": "i"
       }
      },
      {
       "name": "chunks",
       "cells": [
        "arf",
        "oot"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "i = 9",
     "description": "chunks: 'foo','bar' → same counts → save 9.",
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
        "r",
        "f",
        "o",
        "o",
        "t",
        "h",
        "e",
        "f",
        "o",
        "o",
        "b",
        "a",
        "r",
        "m",
        "a",
        "n"
       ],
       "hot": [
        9,
        10,
        11,
        12,
        13,
        14
       ],
       "marks": {
        "9": "i"
       }
      },
      {
       "name": "chunks",
       "cells": [
        "foo",
        "bar"
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
     "description": "[0, 9]",
     "codeLines": [
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "answer",
       "cells": [
        "0",
        "9"
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
   "name": "Sliding window per offset",
   "tag": "Optimal",
   "code": "class Solution:\n    def findSubstring(self, s, words):\n        w, n = len(words[0]), len(words); need = Counter(words); res = []\n        for off in range(w):\n            l = off; seen = Counter(); count = 0\n            for r in range(off, len(s) - w + 1, w):\n                word = s[r:r + w]\n                if word in need:\n                    seen[word] += 1; count += 1\n                    while seen[word] > need[word]:\n                        seen[s[l:l + w]] -= 1; l += w; count -= 1\n                    if count == n: res.append(l)\n                else:\n                    seen.clear(); count = 0; l = r + w\n        return res",
   "time": "O(len·w)",
   "space": "O(n)",
   "explain": "Slide word-by-word from each of the w offsets, keeping counts.",
   "frames": [],
   "alt": true
  }
 ]
};
