window.PROBLEM = {
 "id": "297",
 "title": "Serialize and Deserialize Binary Tree",
 "level": "Hard",
 "topic": "Binary Tree",
 "question": "",
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
   "frames": []
  }
 ]
};
