window.PROBLEM = {
 "id": "2360",
 "title": "Longest Cycle in a Graph",
 "level": "Hard",
 "topic": "Graph",
 "question": "",
 "why": "Every node points to at most one other node. What is the length of the longest cycle (−1 if none)?",
 "idea": "Follow pointers from each unvisited node, stamping each node with a step number. If you reach a node stamped during THIS walk, the difference of stamps is the cycle length.",
 "input": "edges [3, 3, 4, 2, 3]",
 "output": "3",
 "notes": [],
 "best": "Follow pointers from each unvisited node, stamping each node with a step number. If you reach a node stamped during THIS walk, the difference of stamps is the cycle length.",
 "variants": [
  {
   "name": "Walk each path once, stamping steps",
   "code": "class Solution:\n    def longestCycle(self, edges):\n        n, best = len(edges), -1\n        seen = [0] * n\n        step = 1\n        for s in range(n):\n            if seen[s]: continue\n            start, u = step, s\n            while u != -1 and not seen[u]:\n                seen[u] = step\n                step += 1\n                u = edges[u]\n            if u != -1 and seen[u] >= start:\n                best = max(best, step - seen[u])\n        return best",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Follow pointers from each unvisited node, stamping each node with a step number. If you reach a node stamped during THIS walk, the difference of stamps is the cycle length.",
   "frames": []
  }
 ]
};
