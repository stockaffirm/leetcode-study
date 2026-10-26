window.PROBLEM = {
 "id": "889",
 "title": "Construct Binary Tree from Preorder and Postorder Traversal",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "Two lists describe the same binary tree with all different values: its preorder traversal (node, left, right) and its postorder traversal (left, right, node). Rebuild and return the tree (if several trees fit, any is fine; this solution puts a lone child on the left). Example: preorder [1,2,4,5,3,6,7], postorder [4,5,2,6,7,3,1] → [1,2,3,4,5,6,7].",
 "why": "Rebuild a binary tree (distinct values) from its preorder and postorder lists.",
 "idea": "The first preorder value is the root; the second is the root of the left subtree. Find that value in postorder to learn how many nodes the left subtree has, then split both lists and recurse.",
 "input": "pre [1,2,4,5,3,6,7], post [4,5,2,6,7,3,1]",
 "output": "[1,2,3,4,5,6,7]",
 "notes": [],
 "best": "The first preorder value is the root; the second is the root of the left subtree. Find that value in postorder to learn how many nodes the left subtree has, then split both lists and recurse.",
 "variants": [
  {
   "name": "Split by the left child's position in postorder",
   "code": "class Solution:\n    def constructFromPrePost(self, preorder, postorder):\n        idx = {v: i for i, v in enumerate(postorder)}\n        def build(i, j, n):\n            if n == 0: return None\n            root = TreeNode(preorder[i])\n            if n == 1: return root\n            L = idx[preorder[i + 1]] - j + 1\n            root.left = build(i + 1, j, L)\n            root.right = build(i + 1 + L, j + L, n - 1 - L)\n            return root\n        return build(0, 0, len(preorder))",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "The first preorder value is the root; the second is the root of the left subtree. Find that value in postorder to learn how many nodes the left subtree has, then split both lists and recurse.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Stack",
   "tag": "Alternative",
   "code": "class Solution:\n    def constructFromPrePost(self, preorder, postorder):\n        stack = [TreeNode(preorder[0])]\n        j = 0\n        for v in preorder[1:]:\n            node = TreeNode(v)\n            while stack[-1].val == postorder[j]:\n                stack.pop()\n                j += 1\n            if not stack[-1].left: stack[-1].left = node\n            else: stack[-1].right = node\n            stack.append(node)\n        return stack[0]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Add nodes in preorder; a node is finished when it equals the next postorder value.",
   "frames": [],
   "alt": true
  }
 ]
};
