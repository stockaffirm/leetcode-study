window.PROBLEM = {
 "id": "211",
 "title": "Design Add and Search Words Data Structure",
 "level": "Medium",
 "topic": "Trie",
 "question": "Design a word dictionary: addWord(word) stores a word, and search(word) returns true if some stored word matches it. In a search, a '.' can stand for ANY single letter. Example: add bad, dad, mad; search('pad') → false, search('bad') → true, search('.ad') → true, search('b..') → true.",
 "why": "After adding bad, dad, mad: search('pad') → False, search('bad') → True, search('.ad') → True, search('b..') → True.",
 "idea": "A trie. For a '.', try every child branch.",
 "input": "add(bad), add(dad), add(mad); search(pad), search(bad), search(.ad), search(b..)",
 "output": "False, True, True, True",
 "notes": [],
 "best": "A trie. For a '.', try every child branch.",
 "variants": [
  {
   "name": "Trie + DFS for '.'",
   "code": "class WordDictionary:\n    def __init__(self): self.root = {}\n    def addWord(self, word):\n        node = self.root\n        for ch in word: node = node.setdefault(ch, {})\n        node['$'] = True\n    def search(self, word):\n        def dfs(node, i):\n            if i == len(word): return '$' in node\n            ch = word[i]\n            if ch == '.': return any(dfs(nb, i + 1) for k, nb in node.items() if k != '$')\n            return ch in node and dfs(node[ch], i + 1)\n        return dfs(self.root, 0)",
   "time": "O(26^k) worst",
   "space": "O(total letters)",
   "explain": "A trie. For a '.', try every child branch.",
   "frames": [
    {
     "title": "Trie",
     "description": "b, d and m all lead to 'a' then 'd'.",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "first letters",
       "cells": [
        "b",
        "d",
        "m"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "then",
       "cells": [
        "a",
        "a",
        "a"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "end",
       "cells": [
        "d",
        "d",
        "d"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "search('pad')",
     "description": "No branch for 'p' → False.",
     "codeLines": [
      12
     ],
     "facts": {
      "result": "False"
     },
     "rows": [
      {
       "name": "first letters",
       "cells": [
        "b",
        "d",
        "m"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "'p'",
       "cells": [
        "✗"
       ],
       "hot": [
        0
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "search('bad')",
     "description": "b → a → d with end marker → True.",
     "codeLines": [
      9
     ],
     "facts": {
      "result": "True"
     },
     "rows": [
      {
       "name": "path",
       "cells": [
        "b",
        "a",
        "d"
       ],
       "hot": [
        0,
        1,
        2
       ],
       "marks": {},
       "kind": "list"
      }
     ]
    },
    {
     "title": "search('.ad')",
     "description": "'.' tries b, d and m; each then matches 'ad' → True.",
     "codeLines": [
      11
     ],
     "facts": {
      "result": "True"
     },
     "rows": [
      {
       "name": "tries",
       "cells": [
        "b-a-d ✓",
        "d-a-d",
        "m-a-d"
       ],
       "hot": [
        0
       ],
       "marks": {}
      }
     ],
     "sub": [
      {
       "description": "tries[0] = b-a-d ✓",
       "codeLines": [
        11
       ],
       "facts": {},
       "rows": [
        {
         "name": "tries",
         "cells": [
          "b-a-d ✓",
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
       "description": "tries[1] = d-a-d",
       "codeLines": [
        11
       ],
       "facts": {},
       "rows": [
        {
         "name": "tries",
         "cells": [
          "b-a-d ✓",
          "d-a-d",
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
       "description": "tries[2] = m-a-d. '.' tries b, d and m; each then matches 'ad' → True.",
       "codeLines": [
        11
       ],
       "facts": {
        "result": "True"
       },
       "rows": [
        {
         "name": "tries",
         "cells": [
          "b-a-d ✓",
          "d-a-d",
          "m-a-d"
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
     "title": "search('b..')",
     "description": "b, then any, any → 'bad' works → True.",
     "codeLines": [
      11
     ],
     "facts": {
      "result": "True"
     },
     "rows": [
      {
       "name": "path",
       "cells": [
        "b",
        ".",
        "."
       ],
       "hot": [
        0
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
   "name": "List of words",
   "tag": "Brute force",
   "code": "class WordDictionary:\n    def __init__(self): self.words = []\n    def addWord(self, word): self.words.append(word)\n    def search(self, word):\n        for w in self.words:\n            if len(w) == len(word) and all(a == b or b == '.' for a, b in zip(w, word)): return True\n        return False",
   "time": "O(n·L)",
   "space": "O(n·L)",
   "explain": "Compare the pattern with every stored word.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Group by length",
   "tag": "Alternative",
   "code": "class WordDictionary:\n    def __init__(self): self.by_len = defaultdict(list)\n    def addWord(self, word): self.by_len[len(word)].append(word)\n    def search(self, word):\n        return any(all(a == b or b == '.' for a, b in zip(w, word)) for w in self.by_len[len(word)])",
   "time": "O(n·L)",
   "space": "O(n·L)",
   "explain": "Only words of the same length can match, so bucket by length.",
   "frames": [],
   "alt": true
  }
 ]
};
