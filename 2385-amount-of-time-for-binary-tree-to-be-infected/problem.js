window.PROBLEM = {
 "id": "2385",
 "title": "Amount of Time for Binary Tree to Be Infected",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
 "why": "An infection starts at one node and spreads to each neighbour (children and parent) every minute. How many minutes until the whole tree is infected?",
 "idea": "Turn the tree into an undirected graph by adding parent links, then BFS from the start node; the number of BFS levels (minus one) is the time.",
 "input": "tree [1,5,3,null,4,10,6,9,2], start 3",
 "output": "4",
 "notes": [],
 "best": "Turn the tree into an undirected graph by adding parent links, then BFS from the start node; the number of BFS levels (minus one) is the time.",
 "variants": [
  {
   "name": "Tree to graph, BFS from the start",
   "code": "class Solution:\n    def amountOfTime(self, root, start):\n        graph = defaultdict(list)\n        def build(node, parent):\n            if not node: return\n            if parent:\n                graph[node.val].append(parent.val)\n                graph[parent.val].append(node.val)\n            build(node.left, node)\n            build(node.right, node)\n        build(root, None)\n        q, seen, minutes = deque([start]), {start}, -1\n        while q:\n            minutes += 1\n            for _ in range(len(q)):\n                u = q.popleft()\n                for v in graph[u]:\n                    if v not in seen:\n                        seen.add(v)\n                        q.append(v)\n        return minutes",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Turn the tree into an undirected graph by adding parent links, then BFS from the start node; the number of BFS levels (minus one) is the time.",
   "frames": []
  }
 ]
};
