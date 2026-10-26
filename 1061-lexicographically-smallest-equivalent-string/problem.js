window.PROBLEM = {
 "id": "1061",
 "title": "Lexicographically Smallest Equivalent String",
 "level": "Medium",
 "topic": "Union Find / Segment Tree",
 "question": "",
 "why": "s1 'parker', s2 'morris', base 'parser' → 'makkek'.",
 "idea": "Letters s1[i] and s2[i] are equivalent. Merge them with union-find, always making the smaller letter the root. Replace every letter of baseStr with the root of its group.",
 "input": "s1 = \"parker\", s2 = \"morris\", baseStr = \"parser\"",
 "output": "\"makkek\"",
 "notes": [],
 "best": "Letters s1[i] and s2[i] are equivalent. Merge them with union-find, always making the smaller letter the root. Replace every letter of baseStr with the root of its group.",
 "variants": [
  {
   "name": "Union-find keeping the smallest letter as root",
   "code": "class Solution:\n    def smallestEquivalentString(self, s1, s2, baseStr):\n        parent = {c: c for c in map(chr, range(97, 123))}\n        def find(x):\n            while parent[x] != x:\n                parent[x] = parent[parent[x]]\n                x = parent[x]\n            return x\n        for a, b in zip(s1, s2):\n            ra, rb = find(a), find(b)\n            if ra != rb:\n                parent[max(ra, rb)] = min(ra, rb)\n        return ''.join(find(c) for c in baseStr)",
   "time": "O(n α)",
   "space": "O(26)",
   "explain": "Letters s1[i] and s2[i] are equivalent. Merge them with union-find, always making the smaller letter the root. Replace every letter of baseStr with the root of its group.",
   "frames": []
  }
 ]
};
