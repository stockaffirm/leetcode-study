window.PROBLEM = {
 "id": "257",
 "title": "Binary Tree Paths",
 "level": "Easy",
 "topic": "Binary Tree",
 "question": "",
 "why": "List every root-to-leaf path of a binary tree as text like '1->2->5'.",
 "idea": "Walk down with DFS, adding each node to the path string. When you reach a leaf (no children), the path is complete — save it.",
 "input": "tree [1,2,3,null,5]",
 "output": "[\"1->2->5\", \"1->3\"]",
 "notes": [],
 "best": "Walk down with DFS, adding each node to the path string. When you reach a leaf (no children), the path is complete — save it.",
 "variants": [
  {
   "name": "DFS building the path text",
   "code": "class Solution:\n    def binaryTreePaths(self, root):\n        res = []\n        def go(node, path):\n            if not node: return\n            path += str(node.val)\n            if not node.left and not node.right:\n                res.append(path)\n                return\n            go(node.left, path + '->')\n            go(node.right, path + '->')\n        go(root, '')\n        return res",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Walk down with DFS, adding each node to the path string. When you reach a leaf (no children), the path is complete — save it.",
   "frames": []
  }
 ]
};
