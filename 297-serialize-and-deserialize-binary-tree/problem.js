window.PROBLEM = {
 "id": "297",
 "title": "Serialize and Deserialize Binary Tree",
 "level": "Hard",
 "topic": "Binary Tree",
 "question": "Design two functions: serialize(root) turns a binary tree (boxes called nodes, each with up to two children) into a string, and deserialize(data) turns that string back into exactly the same tree (same shape and values). The string format is up to you. Example: serializing the tree [1,2,3,null,null,4,5] and then deserializing the result gives back the same tree. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "why": "Turn a tree into a string you can save, then rebuild exactly the same tree from that string.",
 "idea": "Write nodes in preorder (node, left, right) and write '#' for every missing child. Reading the same order back, each value or '#' tells you exactly where to attach the next node.",
 "input": "tree [1,2,3,null,null,4,5]",
 "output": "rebuilt tree [1,2,3,null,null,4,5]",
 "notes": [],
 "best": "Write nodes in preorder (node, left, right) and write '#' for every missing child. Reading the same order back, each value or '#' tells you exactly where to attach the next node.",
 "variants": [
  {
   "name": "Preorder with # for missing children",
   "code": "class Codec:\n    def serialize(self, root):\n        out = []\n        def go(node):\n            if not node:\n                out.append('#')\n                return\n            out.append(str(node.val))\n            go(node.left)\n            go(node.right)\n        go(root)\n        return ','.join(out)\n    def deserialize(self, data):\n        it = iter(data.split(','))\n        def build():\n            v = next(it)\n            if v == '#': return None\n            node = TreeNode(int(v))\n            node.left = build()\n            node.right = build()\n            return node\n        return build()",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Write nodes in preorder (node, left, right) and write '#' for every missing child. Reading the same order back, each value or '#' tells you exactly where to attach the next node.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Level order (BFS)",
   "tag": "Alternative",
   "code": "class Codec:\n    def serialize(self, root):\n        if not root: return ''\n        out, q = [], deque([root])\n        while q:\n            node = q.popleft()\n            if node:\n                out.append(str(node.val))\n                q.append(node.left)\n                q.append(node.right)\n            else:\n                out.append('#')\n        return ','.join(out)\n    def deserialize(self, data):\n        if not data: return None\n        vals = data.split(',')\n        root = TreeNode(int(vals[0]))\n        q, i = deque([root]), 1\n        while q:\n            node = q.popleft()\n            if vals[i] != '#':\n                node.left = TreeNode(int(vals[i]))\n                q.append(node.left)\n            i += 1\n            if vals[i] != '#':\n                node.right = TreeNode(int(vals[i]))\n                q.append(node.right)\n            i += 1\n        return root",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Write the tree level by level with '#' for missing children; rebuild with a queue of parents waiting for children.",
   "frames": [],
   "alt": true
  }
 ]
};
