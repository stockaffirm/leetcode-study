window.PROBLEM = {
 "id": "269",
 "title": "Alien Dictionary",
 "level": "Hard",
 "topic": "Graph",
 "question": "",
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
   "frames": []
  }
 ]
};
