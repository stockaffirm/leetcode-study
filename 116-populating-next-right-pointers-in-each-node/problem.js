window.PROBLEM = {
 "id": "116",
 "title": "Populating Next Right Pointers in Each Node",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
 "why": "In a perfect binary tree, make every node's next pointer point to the node on its right on the same level (the last one points to nothing).",
 "idea": "Once a level is linked, you can walk along it and use it to link the level below: left.next = right, and right.next = the next node's left child. No queue needed.",
 "input": "tree [1,2,3,4,5,6,7]",
 "output": "1→∅; 2→3→∅; 4→5→6→7→∅",
 "notes": [],
 "best": "Once a level is linked, you can walk along it and use it to link the level below: left.next = right, and right.next = the next node's left child. No queue needed.",
 "variants": [
  {
   "name": "Walk each level using next pointers",
   "code": "class Solution:\n    def connect(self, root):\n        leftmost = root\n        while leftmost and leftmost.left:\n            node = leftmost\n            while node:\n                node.left.next = node.right\n                if node.next: node.right.next = node.next.left\n                node = node.next\n            leftmost = leftmost.left\n        return root",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Once a level is linked, you can walk along it and use it to link the level below: left.next = right, and right.next = the next node's left child. No queue needed.",
   "frames": []
  }
 ]
};
