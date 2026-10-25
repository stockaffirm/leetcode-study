window.PROBLEM = {
 "id": "756",
 "title": "Pyramid Transition Matrix",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "You stack blocks in a pyramid. Each block is a letter; the bottom row is the string bottom. A block can sit on two neighbouring blocks only if their three letters form an allowed triple 'XYZ' (X and Y below, Z on top). Return true if you can build the pyramid up to a single block at the top. Example: bottom 'BCD', allowed [BCC, CDE, CEA, FFF] → 'BC' → C, 'CD' → E, then 'CE' → A → true.",
 "why": "Stack blocks in a pyramid: each block rests on two blocks below and the three colours must form an allowed triple. Can the pyramid be completed from the bottom row?",
 "idea": "Build the next row one block at a time using the allowed triples (a dictionary from the pair below to the possible tops); recurse on the finished row. Memoise rows that already failed.",
 "input": "bottom \"BCD\", allowed [BCC, CDE, CEA, FFF]",
 "output": "True",
 "notes": [],
 "best": "Build the next row one block at a time using the allowed triples (a dictionary from the pair below to the possible tops); recurse on the finished row. Memoise rows that already failed.",
 "variants": [
  {
   "name": "Backtracking row by row",
   "code": "class Solution:\n    def pyramidTransition(self, bottom, allowed):\n        top = defaultdict(list)\n        for a in allowed: top[a[:2]].append(a[2])\n        @lru_cache(None)\n        def build(row):\n            if len(row) == 1: return True\n            def fill(i, cur):\n                if i == len(row) - 1: return build(cur)\n                for ch in top[row[i:i + 2]]:\n                    if fill(i + 1, cur + ch): return True\n                return False\n            return fill(0, '')\n        return build(bottom)",
   "time": "exponential worst case",
   "space": "O(n²)",
   "explain": "Build the next row one block at a time using the allowed triples (a dictionary from the pair below to the possible tops); recurse on the finished row. Memoise rows that already failed.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Level by level with product",
   "tag": "Alternative",
   "code": "class Solution:\n    def pyramidTransition(self, bottom, allowed):\n        top = defaultdict(list)\n        for a in allowed: top[a[:2]].append(a[2])\n        level = {bottom}\n        while level and len(next(iter(level))) > 1:\n            nxt = set()\n            for row in level:\n                opts = [top[row[i:i + 2]] for i in range(len(row) - 1)]\n                if all(opts): nxt |= {''.join(p) for p in product(*opts)}\n            level = nxt\n        return bool(level)",
   "time": "exponential worst case",
   "space": "O(rows)",
   "explain": "Build every possible next row at once from the options at each position.",
   "frames": [],
   "alt": true
  }
 ]
};
