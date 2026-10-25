window.PROBLEM = {
 "id": "947",
 "title": "Most Stones Removed with Same Row or Column",
 "level": "Medium",
 "topic": "Graph",
 "question": "n stones are placed at distinct integer points of a grid. A stone can be removed if there is ANOTHER stone (not yet removed) in the same row or the same column. Return the largest number of stones that can be removed. Example: [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]] → all six stones are linked through shared rows and columns, so five can be removed (one must remain) → 5.",
 "why": "A stone can be removed if another stone shares its row or column. How many stones can be removed in total?",
 "idea": "Stones linked by a shared row or column form groups; in each group all but one stone can be removed. Answer = stones − number of groups. Union-find over 'row ids' and 'column ids' counts groups.",
 "input": "[[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]",
 "output": "5",
 "notes": [],
 "best": "Stones linked by a shared row or column form groups; in each group all but one stone can be removed. Answer = stones − number of groups. Union-find over 'row ids' and 'column ids' counts groups.",
 "variants": [
  {
   "name": "Union-find over rows and columns",
   "code": "class Solution:\n    def removeStones(self, stones):\n        parent = {}\n        def find(x):\n            parent.setdefault(x, x)\n            while parent[x] != x:\n                parent[x] = parent[parent[x]]\n                x = parent[x]\n            return x\n        for r, c in stones:\n            parent[find(r)] = find(~c)\n        return len(stones) - len({find(x) for x in parent})",
   "time": "O(n·α)",
   "space": "O(n)",
   "explain": "Stones linked by a shared row or column form groups; in each group all but one stone can be removed. Answer = stones − number of groups. Union-find over 'row ids' and 'column ids' counts groups.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DFS over stones",
   "tag": "Alternative",
   "code": "class Solution:\n    def removeStones(self, stones):\n        n = len(stones)\n        seen, comps = set(), 0\n        for i in range(n):\n            if i in seen: continue\n            comps += 1\n            st = [i]\n            seen.add(i)\n            while st:\n                u = st.pop()\n                for v in range(n):\n                    if v not in seen and (stones[v][0] == stones[u][0] or stones[v][1] == stones[u][1]):\n                        seen.add(v)\n                        st.append(v)\n        return n - comps",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Count connected groups of stones (sharing a row or column) directly; removable stones = n − groups.",
   "frames": [],
   "alt": true
  }
 ]
};
