window.PROBLEM = {
 "id": "2101",
 "title": "Detonate the Maximum Bombs",
 "level": "Medium",
 "topic": "Graph",
 "question": "Each bomb is given as [x, y, radius]. When a bomb explodes it sets off every other bomb whose CENTRE lies within (or exactly on the edge of) its radius, and those bombs set off others, and so on. You may detonate exactly one bomb to start. Return the largest number of bombs that can explode. Example: [[2,1,3],[6,1,4]] → bomb 0 reaches bomb 1 (distance 4 > 3: no), but bomb 1 reaches bomb 0 (distance 4 ≤ 4) → starting with bomb 1 gives 2.",
 "why": "Each bomb has a position and blast radius; detonating one sets off every bomb inside its radius, and so on. Starting from the best bomb, how many explode?",
 "idea": "Make a directed graph: i → j if bomb j is within i's radius. DFS from every bomb and take the largest number of bombs reached.",
 "input": "[[2,1,3],[6,1,4]]",
 "output": "2",
 "notes": [],
 "best": "Make a directed graph: i → j if bomb j is within i's radius. DFS from every bomb and take the largest number of bombs reached.",
 "variants": [
  {
   "name": "Chain-reaction graph + DFS",
   "code": "class Solution:\n    def maximumDetonation(self, bombs):\n        n = len(bombs)\n        g = [[] for _ in range(n)]\n        for i, (x1, y1, r1) in enumerate(bombs):\n            for j, (x2, y2, r2) in enumerate(bombs):\n                if i != j and (x1 - x2) ** 2 + (y1 - y2) ** 2 <= r1 * r1: g[i].append(j)\n        best = 0\n        for s in range(n):\n            seen, st = {s}, [s]\n            while st:\n                u = st.pop()\n                for v in g[u]:\n                    if v not in seen:\n                        seen.add(v)\n                        st.append(v)\n            best = max(best, len(seen))\n        return best",
   "time": "O(n³)",
   "space": "O(n²)",
   "explain": "Make a directed graph: i → j if bomb j is within i's radius. DFS from every bomb and take the largest number of bombs reached.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "BFS from each bomb",
   "tag": "Alternative",
   "code": "class Solution:\n    def maximumDetonation(self, bombs):\n        n = len(bombs)\n        g = [[] for _ in range(n)]\n        for i, (x1, y1, r1) in enumerate(bombs):\n            for j, (x2, y2, r2) in enumerate(bombs):\n                if i != j and (x1 - x2) ** 2 + (y1 - y2) ** 2 <= r1 * r1: g[i].append(j)\n        best = 0\n        for s in range(n):\n            seen, q = {s}, deque([s])\n            while q:\n                u = q.popleft()\n                for v in g[u]:\n                    if v not in seen:\n                        seen.add(v)\n                        q.append(v)\n            best = max(best, len(seen))\n        return best",
   "time": "O(n³)",
   "space": "O(n²)",
   "explain": "The same chain-reaction graph explored with a queue.",
   "frames": [],
   "alt": true
  }
 ]
};
