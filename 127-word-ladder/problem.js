window.PROBLEM = {
 "id": "127",
 "title": "Word Ladder",
 "level": "Hard",
 "topic": "Graph - BFS",
 "question": "You turn beginWord into endWord one step at a time, changing exactly ONE letter per step, and every word you create (except the first) must be in wordList. Return the number of WORDS in the shortest such sequence (counting both ends), or 0 if none exists. Example: hit → hot → dot → dog → cog is 5 words → 5.",
 "why": "hit → hot → dot → dog → cog is 5 words.",
 "idea": "BFS: from each word, try replacing each letter with a–z and keep words from the list.",
 "input": "begin=\"hit\", end=\"cog\", words=[hot,dot,dog,lot,log,cog]",
 "output": "5",
 "notes": [],
 "best": "BFS: from each word, try replacing each letter with a–z and keep words from the list.",
 "variants": [
  {
   "name": "BFS over words",
   "code": "class Solution:\n    def ladderLength(self, begin, end, words):\n        letters = sorted(set(''.join(words) + begin))\n        words, q = set(words), deque([(begin, 1)])\n        while q:\n            w, d = q.popleft()\n            if w == end: return d\n            for i in range(len(w)):\n                for ch in letters:\n                    nxt = w[:i] + ch + w[i+1:]\n                    if nxt in words:\n                        words.remove(nxt); q.append((nxt, d + 1))\n        return 0",
   "time": "O(n·L·26)",
   "space": "O(n)",
   "explain": "BFS: from each word, try replacing each letter with a–z and keep words from the list.",
   "frames": [
    {
     "title": "Start",
     "description": "hit (length 1).",
     "codeLines": [
      4
     ],
     "facts": {},
     "rows": [
      {
       "name": "level 1",
       "cells": [
        "hit"
       ],
       "hot": [
        0
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Level 2",
     "description": "hit → hot",
     "codeLines": [
      11
     ],
     "facts": {},
     "rows": [
      {
       "name": "level 1",
       "cells": [
        "hit"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "hot"
       ],
       "hot": [
        0
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Level 3",
     "description": "hot → dot, lot",
     "codeLines": [
      12
     ],
     "facts": {},
     "rows": [
      {
       "name": "level 3",
       "cells": [
        "dot",
        "lot"
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
     "title": "Level 4",
     "description": "dot → dog; lot → log",
     "codeLines": [
      12
     ],
     "facts": {},
     "rows": [
      {
       "name": "level 4",
       "cells": [
        "dog",
        "log"
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
     "title": "Level 5",
     "description": "dog → cog = end.",
     "codeLines": [
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "level 5",
       "cells": [
        "cog"
       ],
       "hot": [
        0
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Return",
     "description": "5 words in the shortest ladder.",
     "codeLines": [
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "path",
       "cells": [
        "hit",
        "hot",
        "dot",
        "dog",
        "cog"
       ],
       "hot": [
        0,
        1,
        2,
        3,
        4
       ],
       "marks": {},
       "kind": "list"
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "BFS with wildcard buckets",
   "tag": "Optimal",
   "code": "class Solution:\n    def ladderLength(self, begin, end, words):\n        if end not in words: return 0\n        L = len(begin); groups = defaultdict(list)\n        for w in set(words) | {begin}:\n            for i in range(L): groups[w[:i] + '*' + w[i + 1:]].append(w)\n        q = deque([(begin, 1)]); seen = {begin}\n        while q:\n            w, d = q.popleft()\n            if w == end: return d\n            for i in range(L):\n                for nb in groups[w[:i] + '*' + w[i + 1:]]:\n                    if nb not in seen: seen.add(nb); q.append((nb, d + 1))\n        return 0",
   "time": "O(n·L²)",
   "space": "O(n·L²)",
   "explain": "Group words by patterns like h*t so neighbours are found without trying 26 letters.",
   "frames": [],
   "alt": true
  }
 ]
};
