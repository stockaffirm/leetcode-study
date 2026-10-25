window.PROBLEM = {
 "id": "742",
 "title": "Closest Leaf in a Binary Tree",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "You are given a binary tree (boxes called nodes, each with up to two children; all values are different) and a value k that belongs to one of its nodes. A leaf is a node with no children. Return the value of the leaf that is NEAREST to the node with value k, where distance counts the steps (edges) along the tree, going up or down. Example tree [1,2,3,4,null,null,null,5,null,6] with k=2: leaf 3 is 2 steps away (2 → 1 → 3), leaf 6 is 3 steps away (2 → 4 → 5 → 6) → 3. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Distance to a leaf from every ancestor",
   "tag": "Alternative",
   "code": "class Solution:\n    def findClosestLeaf(self, root, k):\n        def down(node):\n            if not node.left and not node.right: return (0, node.val)\n            c = []\n            if node.left: c.append(down(node.left))\n            if node.right: c.append(down(node.right))\n            d, v = min(c)\n            return (d + 1, v)\n        path = []\n        def find(node):\n            if not node: return False\n            path.append(node)\n            if node.val == k or find(node.left) or find(node.right): return True\n            path.pop()\n            return False\n        find(root)\n        best = (float('inf'), None)\n        for up, node in enumerate(reversed(path)):\n            d, v = down(node)\n            best = min(best, (d + up, v))\n        return best[1]",
   "time": "O(n²) worst case",
   "space": "O(h)",
   "explain": "Find the path root → k. For each node on it, compute the nearest leaf below it; add the number of steps up. Smallest wins.",
   "frames": [],
   "alt": true
  }
 ]
};
