window.PROBLEM = {
 "id": "2097",
 "title": "Valid Arrangement of Pairs",
 "level": "Hard",
 "topic": "Graph",
 "question": "pairs[i] = [start, end]. Rearrange the pairs so that the end of each pair equals the start of the next. A valid arrangement is guaranteed; return one. Example: [[5,1],[4,5],[11,9],[9,4]] → [[11,9],[9,4],[4,5],[5,1]].",
 "why": "Pairs [5,1],[4,5],[11,9],[9,4] chain as 11→9→4→5→1.",
 "idea": "Treat each pair as a directed edge start → end. A valid arrangement uses every edge once: an Eulerian path. Its start is the node with out − in = 1 (or any node if all balanced). Run Hierholzer's algorithm with a stack, appending edges when a node is exhausted, then reverse.",
 "input": "pairs = [[5,1],[4,5],[11,9],[9,4]]",
 "output": "[[11, 9], [9, 4], [4, 5], [5, 1]]",
 "notes": [],
 "best": "Treat each pair as a directed edge start → end. A valid arrangement uses every edge once: an Eulerian path. Its start is the node with out − in = 1 (or any node if all balanced). Run Hierholzer's algorithm with a stack, appending edges when a node is exhausted, then reverse.",
 "variants": [
  {
   "name": "Eulerian path (Hierholzer)",
   "code": "class Solution:\n    def validArrangement(self, pairs):\n        g = defaultdict(list)\n        deg = defaultdict(int)\n        for a, b in pairs:\n            g[a].append(b)\n            deg[a] += 1\n            deg[b] -= 1\n        start = next((u for u in deg if deg[u] == 1), pairs[0][0])\n        path = []\n        st = [start]\n        while st:\n            u = st[-1]\n            if g[u]:\n                st.append(g[u].pop())\n            else:\n                path.append(st.pop())\n        path.reverse()\n        return [[a, b] for a, b in zip(path, path[1:])]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Treat each pair as a directed edge start → end. A valid arrangement uses every edge once: an Eulerian path. Its start is the node with out − in = 1 (or any node if all balanced). Run Hierholzer's algorithm with a stack, appending edges when a node is exhausted, then reverse.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursive Hierholzer",
   "tag": "Alternative",
   "code": "class Solution:\n    def validArrangement(self, pairs):\n        g = defaultdict(list)\n        deg = defaultdict(int)\n        for a, b in pairs:\n            g[a].append(b)\n            deg[a] += 1\n            deg[b] -= 1\n        start = next((u for u in deg if deg[u] == 1), pairs[0][0])\n        path = []\n        def dfs(u):\n            while g[u]:\n                dfs(g[u].pop())\n            path.append(u)\n        dfs(start)\n        path.reverse()\n        return [[a, b] for a, b in zip(path, path[1:])]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Depth-first: walk edges until stuck, adding nodes to the path on the way back.",
   "frames": [],
   "alt": true
  }
 ]
};
