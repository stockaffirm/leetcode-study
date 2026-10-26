window.PROBLEM = {
 "id": "237",
 "title": "Delete Node in a Linked List",
 "level": "Medium",
 "topic": "Linked List",
 "question": "",
 "why": "You get only a pointer to a node (not the last) in a singly linked list and must delete that node.",
 "idea": "You cannot reach the previous node, so overwrite this node's value with the next node's value and skip the next node.",
 "input": "[4,5,1,9], node = 5",
 "output": "[4,1,9]",
 "notes": [],
 "best": "You cannot reach the previous node, so overwrite this node's value with the next node's value and skip the next node.",
 "variants": [
  {
   "name": "Copy the next node over this one",
   "code": "class Solution:\n    def deleteNode(self, node):\n        node.val = node.next.val\n        node.next = node.next.next",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "You cannot reach the previous node, so overwrite this node's value with the next node's value and skip the next node.",
   "frames": []
  }
 ]
};
