window.PROBLEM = {
 "id": "257",
 "title": "Binary Tree Paths",
 "level": "Easy",
 "topic": "Binary Tree",
 "question": "Given the root of a binary tree (boxes called nodes with up to two children), return all paths from the root down to a leaf (a node with no children), each written as text with the node values separated by '->'. Example: tree [1,2,3,null,5] → ['1->2->5', '1->3']. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Iterative stack",
   "tag": "Alternative",
   "code": "class Solution:\n    def binaryTreePaths(self, root):\n        res = []\n        st = [(root, '')]\n        while st:\n            node, path = st.pop()\n            if not node: continue\n            path += str(node.val)\n            if not node.left and not node.right:\n                res.append(path)\n            else:\n                st.append((node.right, path + '->'))\n                st.append((node.left, path + '->'))\n        return res",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Same walk with an explicit stack of (node, path so far).",
   "frames": [],
   "alt": true
  }
 ]
};
