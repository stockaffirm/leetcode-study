window.PROBLEM = {
 "id": "1557",
 "title": "Minimum Number of Vertices to Reach All Nodes",
 "level": "Medium",
 "topic": "Graph",
 "question": "A directed graph without cycles has n nodes (0 to n−1) and edges edges[i] = [from, to]. Find the SMALLEST set of nodes from which all nodes can be reached by following edges; the answer is unique. Example: n=6, edges [[0,1],[0,2],[2,5],[3,4],[4,2]] → starting from 0 and 3 you reach everything → [0,3].",
 "why": "In a directed acyclic graph, find the smallest set of nodes from which every node can be reached.",
 "idea": "A node with no incoming edge can't be reached from anywhere else, so it must be in the set; and those nodes together reach everything.",
 "input": "n=6, edges [[0,1],[0,2],[2,5],[3,4],[4,2]]",
 "output": "[0, 3]",
 "notes": [],
 "best": "A node with no incoming edge can't be reached from anywhere else, so it must be in the set; and those nodes together reach everything.",
 "variants": [
  {
   "name": "Nodes with no incoming edge",
   "code": "class Solution:\n    def findSmallestSetOfVertices(self, n, edges):\n        has_in = {v for u, v in edges}\n        return [i for i in range(n) if i not in has_in]",
   "time": "O(n + E)",
   "space": "O(n)",
   "explain": "A node with no incoming edge can't be reached from anywhere else, so it must be in the set; and those nodes together reach everything.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Count incoming edges",
   "tag": "Alternative",
   "code": "class Solution:\n    def findSmallestSetOfVertices(self, n, edges):\n        indeg = [0] * n\n        for u, v in edges: indeg[v] += 1\n        return [i for i in range(n) if indeg[i] == 0]",
   "time": "O(n + E)",
   "space": "O(n)",
   "explain": "Count in-degrees explicitly and return the nodes with zero.",
   "frames": [],
   "alt": true
  }
 ]
};
