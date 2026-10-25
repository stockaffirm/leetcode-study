window.PROBLEM = {
 "id": "269",
 "title": "Alien Dictionary",
 "level": "Hard",
 "topic": "Graph",
 "question": "A new language uses the English letters but in an unknown alphabetical order. You are given a list of words that is sorted in that language's dictionary order. Return a string of the letters in the correct order (any valid order if several exist), or an empty string if the list is contradictory (no order exists). Example: ['wrt','wrf','er','ett','rftt'] → 'wertf'.",
 "why": "Words are sorted in an alien language. Work out the order of its letters.",
 "idea": "Compare each pair of neighbouring words: the first differing letters give a rule 'x comes before y'. Those rules form a graph; a topological order is the alphabet. A cycle (or a word followed by its own prefix) means it is impossible.",
 "input": "[wrt, wrf, er, ett, rftt]",
 "output": "\"wertf\"",
 "notes": [],
 "best": "Compare each pair of neighbouring words: the first differing letters give a rule 'x comes before y'. Those rules form a graph; a topological order is the alphabet. A cycle (or a word followed by its own prefix) means it is impossible.",
 "variants": [
  {
   "name": "Topological sort of letter order (Kahn)",
   "code": "class Solution:\n    def alienOrder(self, words):\n        g = {c: set() for w in words for c in w}\n        indeg = {c: 0 for c in g}\n        for a, b in zip(words, words[1:]):\n            for x, y in zip(a, b):\n                if x != y:\n                    if y not in g[x]:\n                        g[x].add(y)\n                        indeg[y] += 1\n                    break\n            else:\n                if len(a) > len(b): return ''\n        q = deque(c for c in indeg if indeg[c] == 0)\n        out = []\n        while q:\n            c = q.popleft()\n            out.append(c)\n            for d in g[c]:\n                indeg[d] -= 1\n                if indeg[d] == 0: q.append(d)\n        return ''.join(out) if len(out) == len(g) else ''",
   "time": "O(total letters)",
   "space": "O(1)",
   "explain": "Compare each pair of neighbouring words: the first differing letters give a rule 'x comes before y'. Those rules form a graph; a topological order is the alphabet. A cycle (or a word followed by its own prefix) means it is impossible.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DFS post-order",
   "tag": "Alternative",
   "code": "class Solution:\n    def alienOrder(self, words):\n        g = {c: set() for w in words for c in w}\n        for a, b in zip(words, words[1:]):\n            for x, y in zip(a, b):\n                if x != y:\n                    g[x].add(y)\n                    break\n            else:\n                if len(a) > len(b): return ''\n        state, out = {}, []\n        def dfs(c):\n            if c in state: return state[c] == 2\n            state[c] = 1\n            for d in g[c]:\n                if not dfs(d): return False\n            state[c] = 2\n            out.append(c)\n            return True\n        for c in g:\n            if not dfs(c): return ''\n        return ''.join(reversed(out))",
   "time": "O(total letters)",
   "space": "O(1)",
   "explain": "Depth-first search, listing letters after everything that must come after them; reverse at the end. A back edge means a cycle.",
   "frames": [],
   "alt": true
  }
 ]
};
