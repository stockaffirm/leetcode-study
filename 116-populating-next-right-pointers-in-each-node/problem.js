window.PROBLEM = {
 "id": "116",
 "title": "Populating Next Right Pointers in Each Node",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "You are given a PERFECT binary tree: every node has two children except the leaves, and all leaves are on the same level. Every node has an extra pointer called next. Fill each next pointer so it points to the node immediately to the RIGHT on the same level, or to nothing if the node is the last one on its level. Return the root. Example: tree [1,2,3,4,5,6,7] → 2's next is 3; 4's next is 5, 5's next is 6, 6's next is 7. (A tree written as a list reads level by level, top to bottom and left to right.)",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "BFS by level",
   "tag": "Alternative",
   "code": "class Solution:\n    def connect(self, root):\n        if not root: return root\n        q = deque([root])\n        while q:\n            size = len(q)\n            prev = None\n            for _ in range(size):\n                node = q.popleft()\n                if prev: prev.next = node\n                prev = node\n                if node.left:\n                    q.append(node.left)\n                    q.append(node.right)\n        return root",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Walk each level with a queue and link neighbours as you go.",
   "frames": [],
   "alt": true
  }
 ]
};
