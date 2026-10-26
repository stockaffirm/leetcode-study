window.PROBLEM = {
 "id": "1791",
 "title": "Find Center of Star Graph",
 "level": "Easy",
 "topic": "Graph",
 "question": "",
 "why": "Edges [1,2],[2,3],[4,2]: node 2 is in both of the first two edges → 2.",
 "idea": "The centre of a star appears in every edge. Look at the first two edges: the one node they share is the centre.",
 "input": "edges = [[1,2],[2,3],[4,2]]",
 "output": "2",
 "notes": [],
 "best": "The centre of a star appears in every edge. Look at the first two edges: the one node they share is the centre.",
 "variants": [
  {
   "name": "The common node of any two edges",
   "code": "class Solution:\n    def findCenter(self, edges):\n        return (set(edges[0]) & set(edges[1])).pop()",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "The centre of a star appears in every edge. Look at the first two edges: the one node they share is the centre.",
   "frames": []
  }
 ]
};
