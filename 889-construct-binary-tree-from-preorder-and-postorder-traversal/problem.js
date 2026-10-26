window.PROBLEM = {
 "id": "889",
 "title": "Construct Binary Tree from Preorder and Postorder Traversal",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
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
   "frames": []
  }
 ]
};
