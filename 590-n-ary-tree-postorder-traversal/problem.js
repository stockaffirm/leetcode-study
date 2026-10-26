window.PROBLEM = {
 "id": "590",
 "title": "N-ary Tree Postorder Traversal",
 "level": "Easy",
 "topic": "Binary Tree",
 "question": "",
 "why": "root 1 with children 3, 2, 4 and 3's children 5, 6 → [5,6,3,2,4,1].",
 "idea": "Visit all children (left to right) recursively, then the node itself. An iterative version reverses a root-then-children-reversed traversal.",
 "input": "root = 1 with children 3 (children 5, 6), 2, 4",
 "output": "[5, 6, 3, 2, 4, 1]",
 "notes": [],
 "best": "Visit all children (left to right) recursively, then the node itself. An iterative version reverses a root-then-children-reversed traversal.",
 "variants": [
  {
   "name": "Children first, then the node",
   "code": "class Solution:\n    def postorder(self, root):\n        res = []\n        def go(node):\n            if node:\n                for c in node.children:\n                    go(c)\n                res.append(node.val)\n        go(root)\n        return res",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Visit all children (left to right) recursively, then the node itself. An iterative version reverses a root-then-children-reversed traversal.",
   "frames": []
  }
 ]
};
