window.PROBLEM = {
 "id": "212",
 "title": "Word Search II",
 "level": "Hard",
 "topic": "Trie",
 "question": "You get a grid of letters and a list of words. A word is in the grid if you can spell it by moving from letter to letter up, down, left or right, without using the same cell twice in that word. Return the words from the list that are in the grid. Example board: o a a n / e t a e / i h k r / i f l v with words ['oath','pea','eat','rain'] → 'oath' and 'eat' can be traced, 'pea' and 'rain' can't → ['oath','eat'].",
 "why": "On the sample board, 'oath' and 'eat' can be traced; 'pea' and 'rain' can't.",
 "idea": "Put the words in a trie, then DFS from every cell, following the trie so dead-end paths stop early.",
 "input": "board 4×4, words=[\"oath\",\"pea\",\"eat\",\"rain\"]",
 "output": "[\"oath\",\"eat\"]",
 "notes": [],
 "best": "Put the words in a trie, then DFS from every cell, following the trie so dead-end paths stop early.",
 "variants": [
  {
   "name": "Trie + DFS on the board",
   "code": "class Solution:\n    def findWords(self, board, words):\n        trie = {}\n        for w in words:\n            node = trie\n            for ch in w: node = node.setdefault(ch, {})\n            node['$'] = w\n        res, m, n = [], len(board), len(board[0])\n        def dfs(r, c, node):\n            ch = board[r][c]\n            if ch not in node: return\n            nxt = node[ch]\n            if '$' in nxt: res.append(nxt.pop('$'))\n            board[r][c] = '#'\n            for dr, dc in ((1,0),(-1,0),(0,1),(0,-1)):\n                nr, nc = r + dr, c + dc\n                if 0 <= nr < m and 0 <= nc < n and board[nr][nc] != '#': dfs(nr, nc, nxt)\n            board[r][c] = ch\n        for r in range(m):\n            for c in range(n): dfs(r, c, trie)\n        return res",
   "time": "O(m·n·4^L)",
   "space": "O(total letters)",
   "explain": "Put the words in a trie, then DFS from every cell, following the trie so dead-end paths stop early.",
   "frames": [
    {
     "title": "Board",
     "description": "Words: oath, pea, eat, rain (stored in a trie).",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "board",
       "cells": [
        [
         "o",
         "a",
         "a",
         "n"
        ],
        [
         "e",
         "t",
         "a",
         "e"
        ],
        [
         "i",
         "h",
         "k",
         "r"
        ],
        [
         "i",
         "f",
         "l",
         "v"
        ]
       ],
       "hot": [],
       "marks": {},
       "kind": "grid"
      }
     ]
    },
    {
     "title": "Trace 'oath'",
     "description": "o (0,0) → a (0,1) → t (1,1) → h (2,1): a full word!",
     "codeLines": [
      13
     ],
     "facts": {
      "found": "oath"
     },
     "rows": [
      {
       "name": "board",
       "cells": [
        [
         "o",
         "a",
         "a",
         "n"
        ],
        [
         "e",
         "t",
         "a",
         "e"
        ],
        [
         "i",
         "h",
         "k",
         "r"
        ],
        [
         "i",
         "f",
         "l",
         "v"
        ]
       ],
       "hot": [
        "0,0",
        "0,1",
        "1,1",
        "2,1"
       ],
       "marks": {},
       "kind": "grid"
      }
     ],
     "sub": [
      {
       "description": "cell (0,0) = 'o' → follows the trie branch of 'o'",
       "codeLines": [
        11
       ],
       "facts": {},
       "rows": [
        {
         "name": "board",
         "cells": [
          [
           "o",
           "a",
           "a",
           "n"
          ],
          [
           "e",
           "t",
           "a",
           "e"
          ],
          [
           "i",
           "h",
           "k",
           "r"
          ],
          [
           "i",
           "f",
           "l",
           "v"
          ]
         ],
         "hot": [
          "0,0"
         ],
         "marks": {},
         "kind": "grid"
        },
        {
         "name": "letters so far",
         "cells": [
          "o"
         ],
         "hot": [],
         "marks": {}
        }
       ]
      },
      {
       "description": "cell (0,1) = 'a' → follows the trie branch of 'oa'",
       "codeLines": [
        11
       ],
       "facts": {},
       "rows": [
        {
         "name": "board",
         "cells": [
          [
           "o",
           "a",
           "a",
           "n"
          ],
          [
           "e",
           "t",
           "a",
           "e"
          ],
          [
           "i",
           "h",
           "k",
           "r"
          ],
          [
           "i",
           "f",
           "l",
           "v"
          ]
         ],
         "hot": [
          "0,0",
          "0,1"
         ],
         "marks": {},
         "kind": "grid"
        },
        {
         "name": "letters so far",
         "cells": [
          "o",
          "a"
         ],
         "hot": [],
         "marks": {}
        }
       ]
      },
      {
       "description": "cell (1,1) = 't' → follows the trie branch of 'oat'",
       "codeLines": [
        11
       ],
       "facts": {},
       "rows": [
        {
         "name": "board",
         "cells": [
          [
           "o",
           "a",
           "a",
           "n"
          ],
          [
           "e",
           "t",
           "a",
           "e"
          ],
          [
           "i",
           "h",
           "k",
           "r"
          ],
          [
           "i",
           "f",
           "l",
           "v"
          ]
         ],
         "hot": [
          "0,0",
          "0,1",
          "1,1"
         ],
         "marks": {},
         "kind": "grid"
        },
        {
         "name": "letters so far",
         "cells": [
          "o",
          "a",
          "t"
         ],
         "hot": [],
         "marks": {}
        }
       ]
      },
      {
       "description": "cell (2,1) = 'h' → follows the trie branch of 'oath' → a full word: oath!",
       "codeLines": [
        13
       ],
       "facts": {},
       "rows": [
        {
         "name": "board",
         "cells": [
          [
           "o",
           "a",
           "a",
           "n"
          ],
          [
           "e",
           "t",
           "a",
           "e"
          ],
          [
           "i",
           "h",
           "k",
           "r"
          ],
          [
           "i",
           "f",
           "l",
           "v"
          ]
         ],
         "hot": [
          "0,0",
          "0,1",
          "1,1",
          "2,1"
         ],
         "marks": {},
         "kind": "grid"
        },
        {
         "name": "letters so far",
         "cells": [
          "o",
          "a",
          "t",
          "h"
         ],
         "hot": [],
         "marks": {}
        }
       ]
      }
     ]
    },
    {
     "title": "Trace 'eat'",
     "description": "e (1,3) → a (1,2) → t (1,1): another word!",
     "codeLines": [
      13
     ],
     "facts": {
      "found": "oath, eat"
     },
     "rows": [
      {
       "name": "board",
       "cells": [
        [
         "o",
         "a",
         "a",
         "n"
        ],
        [
         "e",
         "t",
         "a",
         "e"
        ],
        [
         "i",
         "h",
         "k",
         "r"
        ],
        [
         "i",
         "f",
         "l",
         "v"
        ]
       ],
       "hot": [
        "1,3",
        "1,2",
        "1,1"
       ],
       "marks": {},
       "kind": "grid"
      }
     ],
     "sub": [
      {
       "description": "cell (1,3) = 'e' → follows the trie branch of 'e'",
       "codeLines": [
        11
       ],
       "facts": {},
       "rows": [
        {
         "name": "board",
         "cells": [
          [
           "o",
           "a",
           "a",
           "n"
          ],
          [
           "e",
           "t",
           "a",
           "e"
          ],
          [
           "i",
           "h",
           "k",
           "r"
          ],
          [
           "i",
           "f",
           "l",
           "v"
          ]
         ],
         "hot": [
          "1,3"
         ],
         "marks": {},
         "kind": "grid"
        },
        {
         "name": "letters so far",
         "cells": [
          "e"
         ],
         "hot": [],
         "marks": {}
        }
       ]
      },
      {
       "description": "cell (1,2) = 'a' → follows the trie branch of 'ea'",
       "codeLines": [
        11
       ],
       "facts": {},
       "rows": [
        {
         "name": "board",
         "cells": [
          [
           "o",
           "a",
           "a",
           "n"
          ],
          [
           "e",
           "t",
           "a",
           "e"
          ],
          [
           "i",
           "h",
           "k",
           "r"
          ],
          [
           "i",
           "f",
           "l",
           "v"
          ]
         ],
         "hot": [
          "1,3",
          "1,2"
         ],
         "marks": {},
         "kind": "grid"
        },
        {
         "name": "letters so far",
         "cells": [
          "e",
          "a"
         ],
         "hot": [],
         "marks": {}
        }
       ]
      },
      {
       "description": "cell (1,1) = 't' → follows the trie branch of 'eat' → a full word: eat!",
       "codeLines": [
        13
       ],
       "facts": {},
       "rows": [
        {
         "name": "board",
         "cells": [
          [
           "o",
           "a",
           "a",
           "n"
          ],
          [
           "e",
           "t",
           "a",
           "e"
          ],
          [
           "i",
           "h",
           "k",
           "r"
          ],
          [
           "i",
           "f",
           "l",
           "v"
          ]
         ],
         "hot": [
          "1,3",
          "1,2",
          "1,1"
         ],
         "marks": {},
         "kind": "grid"
        },
        {
         "name": "letters so far",
         "cells": [
          "e",
          "a",
          "t"
         ],
         "hot": [],
         "marks": {}
        }
       ]
      }
     ]
    },
    {
     "title": "Dead ends",
     "description": "No path spells 'pea' or 'rain' — the trie stops those searches early.",
     "codeLines": [
      11
     ],
     "facts": {},
     "rows": [
      {
       "name": "answer",
       "cells": [
        "oath",
        "eat"
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
   "name": "Word Search for each word",
   "tag": "Brute force",
   "code": "class Solution:\n    def findWords(self, board, words):\n        m, n = len(board), len(board[0])\n        def exist(word):\n            def dfs(r, c, i):\n                if i == len(word): return True\n                if not (0 <= r < m and 0 <= c < n) or board[r][c] != word[i]: return False\n                tmp = board[r][c]; board[r][c] = '#'\n                found = any(dfs(r + dr, c + dc, i + 1) for dr, dc in ((1,0),(-1,0),(0,1),(0,-1)))\n                board[r][c] = tmp; return found\n            return any(dfs(r, c, 0) for r in range(m) for c in range(n))\n        return [w for w in words if exist(w)]",
   "time": "O(W·m·n·4^L)",
   "space": "O(L)",
   "explain": "Run the Word Search DFS separately for every word.",
   "frames": [],
   "alt": true
  }
 ]
};
