window.PROBLEM = {
 "id": "756",
 "title": "Pyramid Transition Matrix",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "",
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
   "frames": []
  }
 ]
};
