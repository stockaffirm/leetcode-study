window.PROBLEM = {
 "id": "428",
 "title": "Serialize and Deserialize N-ary Tree",
 "level": "Hard",
 "topic": "Binary Tree",
 "question": "",
 "why": "Turn a tree where a node can have ANY number of children into a string and back into the same tree.",
 "idea": "Write each node as its value followed by how many children it has, then its children in order. When reading, the count tells you exactly how many subtrees to read next.",
 "input": "1 has children 3 (children 5, 6), 2 and 4",
 "output": "the same tree comes back",
 "notes": [],
 "best": "Write each node as its value followed by how many children it has, then its children in order. When reading, the count tells you exactly how many subtrees to read next.",
 "variants": [
  {
   "name": "Value + child-count, preorder",
   "code": "class Node:\n    def __init__(self, val=None, children=None):\n        self.val = val\n        self.children = children if children is not None else []\n\nclass Codec:\n    def serialize(self, root):\n        out = []\n        def go(node):\n            if not node: return\n            out.append(str(node.val))\n            out.append(str(len(node.children)))\n            for ch in node.children: go(ch)\n        go(root)\n        return ' '.join(out)\n    def deserialize(self, data):\n        if not data: return None\n        it = iter(data.split())\n        def build():\n            val = int(next(it))\n            k = int(next(it))\n            return Node(val, [build() for _ in range(k)])\n        return build()",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Write each node as its value followed by how many children it has, then its children in order. When reading, the count tells you exactly how many subtrees to read next.",
   "frames": []
  }
 ]
};
