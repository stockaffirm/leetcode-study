window.PROBLEM = {
 "id": "433",
 "title": "Minimum Genetic Mutation",
 "level": "Medium",
 "topic": "Graph - BFS",
 "question": "A gene is a string of 8 letters, each A, C, G or T. One mutation changes exactly ONE letter, and the new gene must be in the allowed list bank. Given startGene, endGene and bank, return the fewest mutations needed to turn startGene into endGene, or −1 if it can't be done. Example: AACCGGTT → AAACGGTA needs 2 mutations, going through AACCGGTA.",
 "why": "AAAAACCC → AAAACCCC → AAACCCCC → AACCCCCC takes 3 mutations.",
 "idea": "BFS: try every single-letter change; keep the ones that are in the bank and unseen.",
 "input": "start=\"AAAAACCC\", end=\"AACCCCCC\", bank=[AAAACCCC, AAACCCCC, AACCCCCC]",
 "output": "3",
 "notes": [],
 "best": "BFS: try every single-letter change; keep the ones that are in the bank and unseen.",
 "variants": [
  {
   "name": "BFS over mutations",
   "code": "class Solution:\n    def minMutation(self, start, end, bank):\n        bank, q, seen = set(bank), deque([(start, 0)]), {start}\n        while q:\n            g, d = q.popleft()\n            if g == end: return d\n            for i in range(len(g)):\n                for ch in 'ACGT':\n                    nxt = g[:i] + ch + g[i+1:]\n                    if nxt in bank and nxt not in seen:\n                        seen.add(nxt); q.append((nxt, d + 1))\n        return -1",
   "time": "O(8·4·bank)",
   "space": "O(bank)",
   "explain": "BFS: try every single-letter change; keep the ones that are in the bank and unseen.",
   "frames": [
    {
     "title": "Start",
     "description": "AAAAACCC; the bank has 3 valid genes.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "gene",
       "cells": [
        "AAAAACCC"
       ],
       "hot": [
        0
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "1 mutation",
     "description": "Change the 5th letter → AAAACCCC (in the bank).",
     "codeLines": [
      9,
      10
     ],
     "facts": {
      "d": 1
     },
     "rows": [
      {
       "name": "path",
       "cells": [
        "AAAAACCC",
        "AAAACCCC"
       ],
       "hot": [
        1
       ],
       "marks": {},
       "kind": "list"
      }
     ]
    },
    {
     "title": "2 mutations",
     "description": "→ AAACCCCC",
     "codeLines": [
      11
     ],
     "facts": {
      "d": 2
     },
     "rows": [
      {
       "name": "path",
       "cells": [
        "AAAAACCC",
        "AAAACCCC",
        "AAACCCCC"
       ],
       "hot": [
        2
       ],
       "marks": {},
       "kind": "list"
      }
     ]
    },
    {
     "title": "3 mutations",
     "description": "→ AACCCCCC = end.",
     "codeLines": [
      6
     ],
     "facts": {
      "d": 3
     },
     "rows": [
      {
       "name": "path",
       "cells": [
        "AAAAACCC",
        "AAAACCCC",
        "AAACCCCC",
        "AACCCCCC"
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
     "title": "Return",
     "description": "3",
     "codeLines": [
      6
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
   "name": "BFS, removing from the bank",
   "tag": "Alternative",
   "code": "class Solution:\n    def minMutation(self, start, end, bank):\n        bank = set(bank); q = deque([(start, 0)])\n        while q:\n            g, d = q.popleft()\n            if g == end: return d\n            for i in range(len(g)):\n                for ch in 'ACGT':\n                    nxt = g[:i] + ch + g[i + 1:]\n                    if nxt in bank: bank.remove(nxt); q.append((nxt, d + 1))\n        return -1",
   "time": "O(8·4·bank)",
   "space": "O(bank)",
   "explain": "Use the bank itself as the 'unvisited' set.",
   "frames": [],
   "alt": true
  },
  {
   "name": "DFS trying every path",
   "tag": "Brute force",
   "code": "class Solution:\n    def minMutation(self, start, end, bank):\n        best = [float('inf')]; bankset = set(bank)\n        def dfs(g, d, seen):\n            if g == end: best[0] = min(best[0], d); return\n            for i in range(len(g)):\n                for ch in 'ACGT':\n                    nxt = g[:i] + ch + g[i + 1:]\n                    if nxt in bankset and nxt not in seen:\n                        seen.add(nxt); dfs(nxt, d + 1, seen); seen.remove(nxt)\n        dfs(start, 0, {start})\n        return -1 if best[0] == float('inf') else best[0]",
   "time": "exponential",
   "space": "O(bank)",
   "explain": "Explore all mutation paths and keep the shortest.",
   "frames": [],
   "alt": true
  }
 ]
};
