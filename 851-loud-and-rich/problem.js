window.PROBLEM = {
 "id": "851",
 "title": "Loud and Rich",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
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
   "frames": []
  }
 ]
};
