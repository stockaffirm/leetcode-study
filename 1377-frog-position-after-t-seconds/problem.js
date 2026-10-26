window.PROBLEM = {
 "id": "1377",
 "title": "Frog Position After T Seconds",
 "level": "Hard",
 "topic": "Graph",
 "question": "",
 "why": "A tree where the frog starts at 1; after t seconds it is at the target with probability 1/3.",
 "idea": "The frog starts at node 1 and each second jumps to a random unvisited neighbour; it never goes back. DFS (Depth-First Search) from 1 carrying the probability: at a node, split the probability equally among its unvisited children. At the target the frog must either have exactly t seconds left or have no unvisited children left (it stays there forever); otherwise the probability is 0.",
 "input": "n = 7, edges = [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]], t = 2, target = 4",
 "output": "0.16667",
 "notes": [],
 "best": "The frog starts at node 1 and each second jumps to a random unvisited neighbour; it never goes back. DFS (Depth-First Search) from 1 carrying the probability: at a node, split the probability equally among its unvisited children. At the target the frog must either have exactly t seconds left or have no unvisited children left (it stays there forever); otherwise the probability is 0.",
 "variants": [
  {
   "name": "DFS with the probability split among unvisited children",
   "code": "class Solution:\n    def frogPosition(self, n, edges, t, target):\n        adj = defaultdict(list)\n        for a, b in edges:\n            adj[a].append(b)\n            adj[b].append(a)\n        def dfs(u, parent, time, prob):\n            children = [v for v in adj[u] if v != parent]\n            if u == target:\n                return prob if time == t or not children else 0\n            if time == t or not children:\n                return 0\n            for v in children:\n                r = dfs(v, u, time + 1, prob / len(children))\n                if r:\n                    return r\n            return 0\n        return dfs(1, 0, 0, 1.0)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "The frog starts at node 1 and each second jumps to a random unvisited neighbour; it never goes back. DFS (Depth-First Search) from 1 carrying the probability: at a node, split the probability equally among its unvisited children. At the target the frog must either have exactly t seconds left or have no unvisited children left (it stays there forever); otherwise the probability is 0.",
   "frames": []
  }
 ]
};
