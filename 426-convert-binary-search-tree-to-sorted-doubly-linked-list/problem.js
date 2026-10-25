window.PROBLEM = {
 "id": "426",
 "title": "Convert Binary Search Tree to Sorted Doubly Linked List",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "Turn a binary search tree into a sorted circular doubly linked list IN PLACE: each node's left pointer becomes 'previous' and right pointer 'next', the smallest node's previous is the largest node and the other way round. Return the smallest node. Example: [4,2,5,1,3] → 1 ⇄ 2 ⇄ 3 ⇄ 4 ⇄ 5 (circular).",
 "why": "The in-order walk of [4,2,5,1,3] is 1,2,3,4,5. We link each node to the previous one (left = previous, right = next) and close the ring.",
 "idea": "An in-order traversal visits a BST in sorted order. Remember the previous visited node: link prev.right = node and node.left = prev. At the end connect the first and the last node to make it circular.",
 "input": "root = [4,2,5,1,3]",
 "output": "1 ⇄ 2 ⇄ 3 ⇄ 4 ⇄ 5 (circular)",
 "notes": [],
 "best": "An in-order traversal visits a BST in sorted order. Remember the previous visited node: link prev.right = node and node.left = prev. At the end connect the first and the last node to make it circular.",
 "variants": [
  {
   "name": "In-order walk linking neighbours",
   "code": "class Solution:\n    def treeToDoublyList(self, root):\n        if not root:\n            return None\n        first = last = None\n        def dfs(node):\n            nonlocal first, last\n            if not node:\n                return\n            dfs(node.left)\n            if last:\n                last.right = node\n                node.left = last\n            else:\n                first = node\n            last = node\n            dfs(node.right)\n        dfs(root)\n        first.left = last\n        last.right = first\n        return first",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "An in-order traversal visits a BST in sorted order. Remember the previous visited node: link prev.right = node and node.left = prev. At the end connect the first and the last node to make it circular.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Iterative in-order with a stack",
   "tag": "Alternative",
   "code": "class Solution:\n    def treeToDoublyList(self, root):\n        if not root:\n            return None\n        stack = []\n        cur = root\n        first = prev = None\n        while stack or cur:\n            while cur:\n                stack.append(cur)\n                cur = cur.left\n            cur = stack.pop()\n            if prev:\n                prev.right = cur\n                cur.left = prev\n            else:\n                first = cur\n            prev = cur\n            cur = cur.right\n        first.left = prev\n        prev.right = first\n        return first",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "The same linking with an explicit stack.",
   "frames": [],
   "alt": true
  }
 ]
};
