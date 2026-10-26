window.PROBLEM = {
 "id": "109",
 "title": "Convert Sorted List to Binary Search Tree",
 "level": "Medium",
 "topic": "Linked List",
 "question": "",
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
   "frames": []
  }
 ]
};
