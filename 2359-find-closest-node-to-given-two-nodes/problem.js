window.PROBLEM = {
 "id": "2359",
 "title": "Find Closest Node to Given Two Nodes",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "edges [2,2,3,-1], node1 0, node2 1 → both reach node 2 → 2.",
 "idea": "Each node has at most one outgoing edge, so from a node you just follow the chain. Record the distance from node1 and node2 to every node they reach; among nodes reached by both, pick the one with the smallest larger distance (smallest index on ties).",
 "input": "edges = [2,2,3,-1], node1 = 0, node2 = 1",
 "output": "2",
 "notes": [],
 "best": "Each node has at most one outgoing edge, so from a node you just follow the chain. Record the distance from node1 and node2 to every node they reach; among nodes reached by both, pick the one with the smallest larger distance (smallest index on ties).",
 "variants": [
  {
   "name": "Walk the chain from both nodes",
   "code": "class Solution:\n    def closestMeetingNode(self, edges, node1, node2):\n        def dist(start):\n            d = {}\n            cur, steps = start, 0\n            while cur != -1 and cur not in d:\n                d[cur] = steps\n                cur = edges[cur]\n                steps += 1\n            return d\n        d1, d2 = dist(node1), dist(node2)\n        best, ans = float('inf'), -1\n        for v in sorted(set(d1) & set(d2)):\n            m = max(d1[v], d2[v])\n            if m < best:\n                best, ans = m, v\n        return ans",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Each node has at most one outgoing edge, so from a node you just follow the chain. Record the distance from node1 and node2 to every node they reach; among nodes reached by both, pick the one with the smallest larger distance (smallest index on ties).",
   "frames": []
  }
 ]
};
