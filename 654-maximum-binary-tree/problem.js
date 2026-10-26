window.PROBLEM = {
 "id": "654",
 "title": "Maximum Binary Tree",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "[3,2,1,6,0,5] → root 6, left [3,2,1], right [0,5].",
 "idea": "The root is the maximum; the left subtree is built from the elements before it and the right from those after it. Scan left to right with a stack of decreasing values: a new value pops smaller ones (the last popped becomes its left child), and then becomes the right child of the new stack top.",
 "input": "nums = [3,2,1,6,0,5]",
 "output": "[6, 3, 5, None, 2, 0, None, None, 1]",
 "notes": [],
 "best": "The root is the maximum; the left subtree is built from the elements before it and the right from those after it. Scan left to right with a stack of decreasing values: a new value pops smaller ones (the last popped becomes its left child), and then becomes the right child of the new stack top.",
 "variants": [
  {
   "name": "Monotonic stack builds the tree in one pass",
   "code": "class Solution:\n    def constructMaximumBinaryTree(self, nums):\n        stack = []\n        for x in nums:\n            node = TreeNode(x)\n            last = None\n            while stack and stack[-1].val < x:\n                last = stack.pop()\n            node.left = last\n            if stack:\n                stack[-1].right = node\n            stack.append(node)\n        return stack[0]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "The root is the maximum; the left subtree is built from the elements before it and the right from those after it. Scan left to right with a stack of decreasing values: a new value pops smaller ones (the last popped becomes its left child), and then becomes the right child of the new stack top.",
   "frames": []
  }
 ]
};
