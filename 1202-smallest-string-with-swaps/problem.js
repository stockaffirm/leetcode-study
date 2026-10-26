window.PROBLEM = {
 "id": "1202",
 "title": "Smallest String With Swaps",
 "level": "Medium",
 "topic": "Union Find / Segment Tree",
 "question": "",
 "why": "'dcab' with pairs [0,3],[1,2]: positions {0,3} sort to 'b','d'; {1,2} to 'a','c' → 'bacd'.",
 "idea": "Indices connected by swap pairs (directly or through others) can be permuted freely. Union the pairs; for each group sort its letters and put them back into the group's sorted index positions.",
 "input": "s = \"dcab\", pairs = [[0,3],[1,2]]",
 "output": "\"bacd\"",
 "notes": [],
 "best": "Indices connected by swap pairs (directly or through others) can be permuted freely. Union the pairs; for each group sort its letters and put them back into the group's sorted index positions.",
 "variants": [
  {
   "name": "Union-Find groups, sort letters inside each group",
   "code": "class Solution:\n    def smallestStringWithSwaps(self, s, pairs):\n        p = list(range(len(s)))\n        def find(x):\n            while p[x] != x:\n                p[x] = p[p[x]]\n                x = p[x]\n            return x\n        for a, b in pairs:\n            p[find(a)] = find(b)\n        groups = defaultdict(list)\n        for i in range(len(s)):\n            groups[find(i)].append(i)\n        res = list(s)\n        for idx in groups.values():\n            letters = sorted(s[i] for i in idx)\n            for i, ch in zip(idx, letters):\n                res[i] = ch\n        return ''.join(res)",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Indices connected by swap pairs (directly or through others) can be permuted freely. Union the pairs; for each group sort its letters and put them back into the group's sorted index positions.",
   "frames": []
  }
 ]
};
