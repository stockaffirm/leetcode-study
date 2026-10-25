window.PROBLEM = {
 "id": "1008",
 "title": "Construct Binary Search Tree from Preorder Traversal",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "Build the binary search tree whose preorder traversal is the given list of different numbers and return its root. Example: [8,5,1,7,10,12] → [8,5,10,1,7,null,12]. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "why": "Preorder 8, 5, 1, 7, 10, 12: 8 is the root; 5, 1, 7 are smaller (left), 10, 12 larger (right).",
 "idea": "Read the preorder list once with a shared index. build(bound) makes the next number the root as long as it is below the bound; its left child uses the root's value as bound, the right child uses the parent's bound.",
 "input": "preorder = [8,5,1,7,10,12]",
 "output": "[8,5,10,1,7,null,12]",
 "notes": [],
 "best": "Read the preorder list once with a shared index. build(bound) makes the next number the root as long as it is below the bound; its left child uses the root's value as bound, the right child uses the parent's bound.",
 "variants": [
  {
   "name": "Recursion with an upper bound",
   "code": "class Solution:\n    def bstFromPreorder(self, preorder):\n        i = 0\n        def build(bound):\n            nonlocal i\n            if i == len(preorder) or preorder[i] > bound:\n                return None\n            root = TreeNode(preorder[i])\n            i += 1\n            root.left = build(root.val)\n            root.right = build(bound)\n            return root\n        return build(inf)",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Read the preorder list once with a shared index. build(bound) makes the next number the root as long as it is below the bound; its left child uses the root's value as bound, the right child uses the parent's bound.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Insert one by one",
   "tag": "Alternative",
   "code": "class Solution:\n    def bstFromPreorder(self, preorder):\n        root = TreeNode(preorder[0])\n        for x in preorder[1:]:\n            cur = root\n            while True:\n                if x < cur.val:\n                    if cur.left is None:\n                        cur.left = TreeNode(x)\n                        break\n                    cur = cur.left\n                else:\n                    if cur.right is None:\n                        cur.right = TreeNode(x)\n                        break\n                    cur = cur.right\n        return root",
   "time": "O(n²)",
   "space": "O(h)",
   "explain": "Insert the numbers in preorder order into an ordinary BST.",
   "frames": [],
   "alt": true
  }
 ]
};
