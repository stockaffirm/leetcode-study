window.PROBLEM = {
 "id": "208",
 "title": "Implement Trie (Prefix Tree)",
 "level": "Medium",
 "topic": "Trie",
 "question": "Implement a Trie (prefix tree) class with three methods: insert(word) stores a word; search(word) returns true only if exactly that word was inserted before; startsWith(prefix) returns true if any inserted word begins with the prefix. Example: insert('apple'); search('apple') → true; search('app') → false; startsWith('app') → true; insert('app'); search('app') → true.",
 "input": "insert(apple), search(apple), search(app), startsWith(app), insert(app), search(app)",
 "output": "T, F, T, T",
 "notes": [
  "search needs the '$' end marker; startsWith doesn't.",
  "Shared prefixes share nodes."
 ],
 "best": "Dict-of-dicts trie; '$' separates 'is a prefix' from 'is a word'.",
 "variants": [
  {
   "name": "Dict-of-dicts trie",
   "code": "class Trie:\n    def __init__(self): self.root = {}\n    def insert(self, word):\n        node = self.root\n        for ch in word: node = node.setdefault(ch, {})\n        node['$'] = True\n    def search(self, word):\n        node = self._walk(word)\n        return bool(node and '$' in node)\n    def startsWith(self, prefix):\n        return self._walk(prefix) is not None\n    def _walk(self, s):\n        node = self.root\n        for ch in s:\n            if ch not in node: return None\n            node = node[ch]\n        return node",
   "time": "O(len) per op",
   "space": "O(total letters)",
   "explain": "Nested dicts, one level per letter; '$' marks a word end.",
   "frames": [
    {
     "title": "insert('apple')",
     "description": "One node per letter, then an end marker.",
     "codeLines": [
      5,
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "trie",
       "cells": [
        "a",
        "p",
        "p",
        "l",
        "e",
        "$"
       ],
       "hot": [
        0,
        1,
        2,
        3,
        4,
        5
       ],
       "marks": {},
       "kind": "list"
      }
     ]
    },
    {
     "title": "search('apple')",
     "description": "Path exists and ends with $ → True.",
     "codeLines": [
      9
     ],
     "facts": {
      "result": "True"
     },
     "rows": [
      {
       "name": "walk",
       "cells": [
        "a",
        "p",
        "p",
        "l",
        "e",
        "$"
       ],
       "hot": [
        0,
        1,
        2,
        3,
        4,
        5
       ],
       "marks": {},
       "kind": "list"
      }
     ]
    },
    {
     "title": "search('app')",
     "description": "Path exists, but no $ after the 2nd p → False.",
     "codeLines": [
      9
     ],
     "facts": {
      "result": "False"
     },
     "rows": [
      {
       "name": "walk",
       "cells": [
        "a",
        "p",
        "p"
       ],
       "hot": [
        0,
        1,
        2
       ],
       "marks": {},
       "kind": "list"
      },
      {
       "name": "after p",
       "cells": [
        "l",
        "(no $)"
       ],
       "hot": [
        1
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "startsWith('app')",
     "description": "Path exists → True.",
     "codeLines": [
      11
     ],
     "facts": {
      "result": "True"
     },
     "rows": [
      {
       "name": "walk",
       "cells": [
        "a",
        "p",
        "p"
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
     "title": "insert('app')",
     "description": "Reuse a-p-p, add $ after the 2nd p.",
     "codeLines": [
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "trie",
       "cells": [
        "a",
        "p",
        "p",
        "$"
       ],
       "hot": [
        3
       ],
       "marks": {},
       "kind": "list"
      }
     ]
    },
    {
     "title": "search('app')",
     "description": "Now $ exists → True.",
     "codeLines": [
      9
     ],
     "facts": {
      "result": "True"
     },
     "rows": [
      {
       "name": "walk",
       "cells": [
        "a",
        "p",
        "p",
        "$"
       ],
       "hot": [
        0,
        1,
        2,
        3
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
   "name": "26-slot node class",
   "tag": "Alternative",
   "code": "class Trie:\n    def __init__(self): self.children = [None] * 26; self.end = False\n    def insert(self, word):\n        node = self\n        for ch in word:\n            i = ord(ch) - 97\n            if not node.children[i]: node.children[i] = Trie()\n            node = node.children[i]\n        node.end = True\n    def _find(self, s):\n        node = self\n        for ch in s:\n            node = node.children[ord(ch) - 97]\n            if not node: return None\n        return node\n    def search(self, word):\n        node = self._find(word); return node is not None and node.end\n    def startsWith(self, prefix): return self._find(prefix) is not None",
   "time": "O(len) per op",
   "space": "O(26·nodes)",
   "explain": "Each node stores an array of 26 children.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Sets of words and prefixes",
   "tag": "Brute force",
   "code": "class Trie:\n    def __init__(self): self.words = set(); self.prefixes = set()\n    def insert(self, word):\n        self.words.add(word)\n        for i in range(1, len(word) + 1): self.prefixes.add(word[:i])\n    def search(self, word): return word in self.words\n    def startsWith(self, prefix): return prefix in self.prefixes",
   "time": "O(len) per op",
   "space": "O(total²)",
   "explain": "Store every word and every prefix in a set.",
   "frames": [],
   "alt": true
  }
 ],
 "why": "After insert('apple'): search('app') is False (it isn't a word) but startsWith('app') is True.",
 "idea": "Nested dictionaries, one level per letter. A '$' marks the end of a word."
};
