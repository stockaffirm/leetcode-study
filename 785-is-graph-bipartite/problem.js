window.PROBLEM = {
 "id": "785",
 "title": "Is Graph Bipartite?",
 "level": "Medium",
 "topic": "Graph",
 "question": "An undirected graph is given as adjacency lists. Can its nodes be split into two groups such that every edge joins a node of one group with a node of the other? Example: [[1,2,3],[0,2],[0,1,3],[0,2]] → False (nodes 0, 1, 2 form a triangle).",
 "why": "Can the nodes of an undirected graph be split into two groups so that every edge joins the two groups?",
 "idea": "Colour a start node 0, its neighbours 1, their neighbours 0, … If an edge ever joins two nodes of the same colour, it is impossible. Do this for every component.",
 "input": "[[1,2,3],[0,2],[0,1,3],[0,2]]",
 "output": "False",
 "notes": [],
 "best": "Colour a start node 0, its neighbours 1, their neighbours 0, … If an edge ever joins two nodes of the same colour, it is impossible. Do this for every component.",
 "variants": [
  {
   "name": "BFS two-colouring",
   "code": "class Solution:\n    def isBipartite(self, graph):\n        color = {}\n        for s in range(len(graph)):\n            if s in color: continue\n            color[s] = 0\n            q = deque([s])\n            while q:\n                u = q.popleft()\n                for v in graph[u]:\n                    if v not in color:\n                        color[v] = 1 - color[u]\n                        q.append(v)\n                    elif color[v] == color[u]: return False\n        return True",
   "time": "O(V + E)",
   "space": "O(V)",
   "explain": "Colour a start node 0, its neighbours 1, their neighbours 0, … If an edge ever joins two nodes of the same colour, it is impossible. Do this for every component.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DFS colouring",
   "tag": "Alternative",
   "code": "class Solution:\n    def isBipartite(self, graph):\n        color = {}\n        for s in range(len(graph)):\n            if s in color: continue\n            color[s] = 0\n            st = [s]\n            while st:\n                u = st.pop()\n                for v in graph[u]:\n                    if v not in color:\n                        color[v] = 1 - color[u]\n                        st.append(v)\n                    elif color[v] == color[u]: return False\n        return True",
   "time": "O(V + E)",
   "space": "O(V)",
   "explain": "The same two-colouring with an explicit stack.",
   "frames": [],
   "alt": true
  }
 ]
};
