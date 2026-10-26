window.PROBLEM = {
 "id": "742",
 "title": "Closest Leaf in a Binary Tree",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
 "why": "Starting at the node with value k, which leaf (a node with no children) is the fewest steps away — going up, down, any direction?",
 "idea": "A tree only lets you walk down, but the answer may be up and over. Turn the tree into an undirected graph (add parent links) and run a BFS from k until you hit a leaf.",
 "input": "tree [1,2,3,4,null,null,null,5,null,6], k=2",
 "output": "3",
 "notes": [],
 "best": "A tree only lets you walk down, but the answer may be up and over. Turn the tree into an undirected graph (add parent links) and run a BFS from k until you hit a leaf.",
 "variants": [
  {
   "name": "Tree to graph, then BFS",
   "code": "class Solution:\n    def findClosestLeaf(self, root, k):\n        graph = defaultdict(list)\n        leaves = set()\n        def build(node, parent):\n            if not node: return\n            if parent:\n                graph[node.val].append(parent.val)\n                graph[parent.val].append(node.val)\n            if not node.left and not node.right: leaves.add(node.val)\n            build(node.left, node)\n            build(node.right, node)\n        build(root, None)\n        q, seen = deque([k]), {k}\n        while q:\n            cur = q.popleft()\n            if cur in leaves: return cur\n            for nb in graph[cur]:\n                if nb not in seen:\n                    seen.add(nb)\n                    q.append(nb)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A tree only lets you walk down, but the answer may be up and over. Turn the tree into an undirected graph (add parent links) and run a BFS from k until you hit a leaf.",
   "frames": []
  }
 ]
};
