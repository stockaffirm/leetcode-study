window.PROBLEM = {
 "id": "426",
 "title": "Convert Binary Search Tree to Sorted Doubly Linked List",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
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
   "frames": []
  }
 ]
};
