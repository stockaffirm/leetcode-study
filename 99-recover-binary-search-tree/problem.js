window.PROBLEM = {
 "id": "99",
 "title": "Recover Binary Search Tree",
 "level": "Medium",
 "topic": "Binary Search Tree",
 "question": "",
 "why": "[1,3,null,null,2] has 3 and 1 swapped → fixed tree [3,1,null,null,2].",
 "idea": "An in-order traversal of a BST (Binary Search Tree) is increasing. Two swapped nodes show up as one or two places where the order goes down. The first violation's larger node and the last violation's smaller node are the swapped pair — swap their values.",
 "input": "root = [1,3,null,null,2]",
 "output": "[3, 1, None, None, 2]",
 "notes": [],
 "best": "An in-order traversal of a BST (Binary Search Tree) is increasing. Two swapped nodes show up as one or two places where the order goes down. The first violation's larger node and the last violation's smaller node are the swapped pair — swap their values.",
 "variants": [
  {
   "name": "In-order walk, swap the two out-of-order nodes",
   "code": "class Solution:\n    def recoverTree(self, root):\n        first = second = prev = None\n        stack = []\n        node = root\n        while stack or node:\n            while node:\n                stack.append(node)\n                node = node.left\n            node = stack.pop()\n            if prev and prev.val > node.val:\n                if not first:\n                    first = prev\n                second = node\n            prev = node\n            node = node.right\n        first.val, second.val = second.val, first.val",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "An in-order traversal of a BST (Binary Search Tree) is increasing. Two swapped nodes show up as one or two places where the order goes down. The first violation's larger node and the last violation's smaller node are the swapped pair — swap their values.",
   "frames": []
  }
 ]
};
