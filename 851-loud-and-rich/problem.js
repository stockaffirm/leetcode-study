window.PROBLEM = {
 "id": "851",
 "title": "Loud and Rich",
 "level": "Medium",
 "topic": "Graph",
 "question": "richer[i] = [a, b] means person a has more money than person b; quiet[i] is how quiet person i is (smaller is quieter). For each person x return the quietest person among all people who have at least as much money as x. Example: the 8-person sample → [5,5,2,5,4,5,6,7].",
 "why": "richer pairs [1,0],[2,1],[3,1],[3,7],[4,3],[5,3],[6,3] with the quiet values: person 0's answer is 5 (the quietest among everyone at least as rich).",
 "idea": "richer[a] = [x, y] means x has more money than y. For each person, the answer is the quietest person among those who have at least as much money, i.e. themselves and everyone reachable by walking up the 'richer' edges. DFS (Depth-First Search) with memoisation from each person.",
 "input": "richer = [[1,0],[2,1],[3,1],[3,7],[4,3],[5,3],[6,3]], quiet = [3,2,5,4,6,1,7,0]",
 "output": "[5, 5, 2, 5, 4, 5, 6, 7]",
 "notes": [],
 "best": "richer[a] = [x, y] means x has more money than y. For each person, the answer is the quietest person among those who have at least as much money, i.e. themselves and everyone reachable by walking up the 'richer' edges. DFS (Depth-First Search) with memoisation from each person.",
 "variants": [
  {
   "name": "DFS over 'richer than' edges",
   "code": "class Solution:\n    def loudAndRich(self, richer, quiet):\n        n = len(quiet)\n        above = [[] for _ in range(n)]\n        for a, b in richer:\n            above[b].append(a)\n        ans = [-1] * n\n        def dfs(x):\n            if ans[x] >= 0:\n                return ans[x]\n            ans[x] = x\n            for y in above[x]:\n                cand = dfs(y)\n                if quiet[cand] < quiet[ans[x]]:\n                    ans[x] = cand\n            return ans[x]\n        return [dfs(x) for x in range(n)]",
   "time": "O(n + e)",
   "space": "O(n + e)",
   "explain": "richer[a] = [x, y] means x has more money than y. For each person, the answer is the quietest person among those who have at least as much money, i.e. themselves and everyone reachable by walking up the 'richer' edges. DFS (Depth-First Search) with memoisation from each person.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Topological order from the richest",
   "tag": "Alternative",
   "code": "class Solution:\n    def loudAndRich(self, richer, quiet):\n        n = len(quiet)\n        g = [[] for _ in range(n)]\n        indeg = [0] * n\n        for a, b in richer:\n            g[a].append(b)\n            indeg[b] += 1\n        ans = list(range(n))\n        q = deque(i for i in range(n) if indeg[i] == 0)\n        while q:\n            u = q.popleft()\n            for v in g[u]:\n                if quiet[ans[u]] < quiet[ans[v]]:\n                    ans[v] = ans[u]\n                indeg[v] -= 1\n                if indeg[v] == 0:\n                    q.append(v)\n        return ans",
   "time": "O(n + e)",
   "space": "O(n + e)",
   "explain": "Process people from richest to poorest (Kahn's algorithm) and let each richer person offer their quietest candidate.",
   "frames": [],
   "alt": true
  }
 ]
};
