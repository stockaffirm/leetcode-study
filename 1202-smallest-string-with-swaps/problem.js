window.PROBLEM = {
 "id": "1202",
 "title": "Smallest String With Swaps",
 "level": "Medium",
 "topic": "Union Find / Segment Tree",
 "question": "You may swap the characters at the index pairs given in pairs any number of times. Return the lexicographically smallest string you can obtain. Example: 'dcab', [[0,3],[1,2]] → 'bacd'.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DFS components",
   "tag": "Alternative",
   "code": "class Solution:\n    def smallestStringWithSwaps(self, s, pairs):\n        g = defaultdict(list)\n        for a, b in pairs:\n            g[a].append(b)\n            g[b].append(a)\n        res = list(s)\n        seen = set()\n        for i in range(len(s)):\n            if i in seen:\n                continue\n            comp = []\n            st = [i]\n            seen.add(i)\n            while st:\n                u = st.pop()\n                comp.append(u)\n                for v in g[u]:\n                    if v not in seen:\n                        seen.add(v)\n                        st.append(v)\n            comp.sort()\n            for idx, ch in zip(comp, sorted(s[u] for u in comp)):\n                res[idx] = ch\n        return ''.join(res)",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Build a graph from the pairs and sort the letters of each connected component.",
   "frames": [],
   "alt": true
  }
 ]
};
