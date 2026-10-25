window.PROBLEM = {
 "id": "109",
 "title": "Convert Sorted List to Binary Search Tree",
 "level": "Medium",
 "topic": "Linked List",
 "question": "Given the head of a linked list whose values are sorted ascending, build a height-balanced binary search tree (the heights of the two subtrees of every node differ by at most 1) and return its root. Example: [−10,−3,0,5,9] → a tree with root 0 (this solution picks the upper middle: [0,−3,9,−10,null,5]). (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "why": "Turn a sorted linked list into a height-balanced binary search tree.",
 "idea": "The middle node is the root; the part before it builds the left subtree and the part after builds the right. Find the middle with slow/fast pointers and cut the list there.",
 "input": "[-10,-3,0,5,9]",
 "output": "[0,-3,9,-10,null,5]",
 "notes": [],
 "best": "The middle node is the root; the part before it builds the left subtree and the part after builds the right. Find the middle with slow/fast pointers and cut the list there.",
 "variants": [
  {
   "name": "Middle node becomes the root",
   "code": "class Solution:\n    def sortedListToBST(self, head):\n        if not head: return None\n        if not head.next: return TreeNode(head.val)\n        prev, slow, fast = None, head, head\n        while fast and fast.next:\n            prev = slow\n            slow = slow.next\n            fast = fast.next.next\n        prev.next = None\n        root = TreeNode(slow.val)\n        root.left = self.sortedListToBST(head)\n        root.right = self.sortedListToBST(slow.next)\n        return root",
   "time": "O(n log n)",
   "space": "O(log n)",
   "explain": "The middle node is the root; the part before it builds the left subtree and the part after builds the right. Find the middle with slow/fast pointers and cut the list there.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Copy to an array",
   "tag": "Alternative",
   "code": "class Solution:\n    def sortedListToBST(self, head):\n        vals = []\n        while head:\n            vals.append(head.val)\n            head = head.next\n        def build(l, r):\n            if l > r: return None\n            mid = l + (r - l + 1) // 2\n            node = TreeNode(vals[mid])\n            node.left = build(l, mid - 1)\n            node.right = build(mid + 1, r)\n            return node\n        return build(0, len(vals) - 1)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Put the values in a list and build the tree from the middle of each range.",
   "frames": [],
   "alt": true
  }
 ]
};
