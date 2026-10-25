window.PROBLEM = {
 "id": "114",
 "title": "Flatten Binary Tree to Linked List",
 "level": "Medium",
 "topic": "Binary Tree - General",
 "question": "Given the root of a binary tree, rearrange it, using the same nodes, into a straight chain where every node's left child is empty and its right child is the next node in preorder order (a node, then its left side, then its right side). Example: [1,2,5,3,4,null,6] → 1→2→3→4→5→6 going only to the right. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "why": "[1,2,5,3,4,null,6] → 1→2→3→4→5→6.",
 "idea": "For each node with a left child: attach its right subtree to the end of the left subtree, then move the left subtree to the right.",
 "input": "[1,2,5,3,4,null,6]",
 "output": "1→2→3→4→5→6",
 "notes": [],
 "best": "For each node with a left child: attach its right subtree to the end of the left subtree, then move the left subtree to the right.",
 "variants": [
  {
   "name": "Rewire with the left subtree's tail",
   "code": "class Solution:\n    def flatten(self, root):\n        cur = root\n        while cur:\n            if cur.left:\n                pre = cur.left\n                while pre.right: pre = pre.right\n                pre.right = cur.right; cur.right = cur.left; cur.left = None\n            cur = cur.right",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "For each node with a left child: attach its right subtree to the end of the left subtree, then move the left subtree to the right.",
   "frames": [
    {
     "title": "Tree",
     "description": "Preorder: 1, 2, 3, 4, 5, 6.",
     "codeLines": [
      2
     ],
     "facts": {},
     "rows": [
      {
       "name": "level 0",
       "cells": [
        "1"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 1",
       "cells": [
        "2",
        "5"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "3",
        "4",
        "·",
        "6"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "At 1",
     "description": "Rightmost of the left subtree is 4. Hang 5 off it, then move 2 to the right of 1.",
     "codeLines": [
      6,
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "chain",
       "cells": [
        "1",
        "2"
       ],
       "hot": [
        0,
        1
       ],
       "marks": {},
       "kind": "list"
      },
      {
       "name": "rest",
       "cells": [
        "2→3,4",
        "4→5→6"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "At 2",
     "description": "Rightmost of 2's left (3) is 3: hang 4 on it and move 3 right.",
     "codeLines": [
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "chain",
       "cells": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6"
       ],
       "hot": [
        0,
        1,
        2
       ],
       "marks": {},
       "kind": "list"
      }
     ]
    },
    {
     "title": "Done",
     "description": "Every node now only has a right pointer.",
     "codeLines": [
      9
     ],
     "facts": {},
     "rows": [
      {
       "name": "chain",
       "cells": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6"
       ],
       "hot": [
        0,
        1,
        2,
        3,
        4,
        5
       ],
       "marks": {},
       "kind": "list"
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "Reverse preorder (post-order)",
   "tag": "Alternative",
   "code": "class Solution:\n    def flatten(self, root):\n        prev = None\n        def go(n):\n            nonlocal prev\n            if not n: return\n            go(n.right); go(n.left)\n            n.right = prev; n.left = None; prev = n\n        go(root)",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Visit right, then left, then node, linking each node to the previous one visited.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Preorder list, then relink",
   "tag": "Brute force",
   "code": "class Solution:\n    def flatten(self, root):\n        nodes = []\n        def pre(n):\n            if n: nodes.append(n); pre(n.left); pre(n.right)\n        pre(root)\n        for a, b in zip(nodes, nodes[1:]):\n            a.left = None; a.right = b\n        if nodes: nodes[-1].left = None",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Collect nodes in preorder and chain them through right pointers.",
   "frames": [],
   "alt": true
  }
 ]
};
