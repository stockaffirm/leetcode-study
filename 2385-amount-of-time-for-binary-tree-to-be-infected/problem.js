window.PROBLEM = {
 "id": "2385",
 "title": "Amount of Time for Binary Tree to Be Infected",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "You are given the root of a binary tree (boxes called nodes, each with up to two children, all values different) and the value start of one node. At minute 0 only that node is infected. Every minute, each uninfected node that is next to an infected node (its parent or one of its children) becomes infected. Return the number of minutes until the whole tree is infected. Example: tree [1,5,3,null,4,10,6,9,2], start 3 → 4 minutes. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "One DFS with negative depths",
   "tag": "Alternative",
   "code": "class Solution:\n    def amountOfTime(self, root, start):\n        best = 0\n        def go(node):\n            nonlocal best\n            if not node: return 0\n            l, r = go(node.left), go(node.right)\n            if node.val == start:\n                best = max(l, r)\n                return -1\n            if l >= 0 and r >= 0: return 1 + max(l, r)\n            d = abs(l) if l < 0 else abs(r)\n            other = r if l < 0 else l\n            best = max(best, d + other)\n            return -(d + 1)\n        go(root)\n        return best",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Return a tree height normally, but a negative number once the start has been found below; combine at the meeting node.",
   "frames": [],
   "alt": true
  }
 ]
};
