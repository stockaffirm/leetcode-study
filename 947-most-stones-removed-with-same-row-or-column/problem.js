window.PROBLEM = {
 "id": "947",
 "title": "Most Stones Removed with Same Row or Column",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
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
   "frames": []
  }
 ]
};
