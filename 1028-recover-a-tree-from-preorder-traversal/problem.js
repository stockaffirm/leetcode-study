window.PROBLEM = {
 "id": "1028",
 "title": "Recover a Tree From Preorder Traversal",
 "level": "Hard",
 "topic": "Binary Tree",
 "question": "",
 "why": "'1-2--3--4-5--6--7' rebuilds the full binary tree [1,2,5,3,4,6,7].",
 "idea": "Each node is written as dashes (its depth) followed by its value. Scan the string: read the dashes and the number; pop the stack until its size equals the depth; the node is the left child of the stack top if that has no left child, otherwise its right child. Push the node.",
 "input": "traversal = \"1-2--3--4-5--6--7\"",
 "output": "[1, 2, 5, 3, 4, 6, 7]",
 "notes": [],
 "best": "Each node is written as dashes (its depth) followed by its value. Scan the string: read the dashes and the number; pop the stack until its size equals the depth; the node is the left child of the stack top if that has no left child, otherwise its right child. Push the node.",
 "variants": [
  {
   "name": "Stack of the current path, depth = number of dashes",
   "code": "class Solution:\n    def recoverFromPreorder(self, traversal):\n        stack = []\n        i = 0\n        n = len(traversal)\n        while i < n:\n            depth = 0\n            while i < n and traversal[i] == '-':\n                depth += 1\n                i += 1\n            j = i\n            while j < n and traversal[j].isdigit():\n                j += 1\n            node = TreeNode(int(traversal[i:j]))\n            i = j\n            while len(stack) > depth:\n                stack.pop()\n            if stack:\n                if stack[-1].left is None:\n                    stack[-1].left = node\n                else:\n                    stack[-1].right = node\n            stack.append(node)\n        return stack[0]",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Each node is written as dashes (its depth) followed by its value. Scan the string: read the dashes and the number; pop the stack until its size equals the depth; the node is the left child of the stack top if that has no left child, otherwise its right child. Push the node.",
   "frames": []
  }
 ]
};
