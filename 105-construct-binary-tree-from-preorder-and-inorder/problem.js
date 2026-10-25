window.PROBLEM = {
 "id": "105",
 "title": "Construct Binary Tree from Preorder and Inorder Traversal",
 "level": "Medium",
 "topic": "Binary Tree - General",
 "question": "You are given two lists describing the same binary tree whose values are all different: preorder (visit a node first, then its whole left side, then its whole right side) and inorder (left side, then the node, then the right side). Rebuild the tree and return its root. Example: preorder=[3,9,20,15,7], inorder=[9,3,15,20,7] → root 3 with left child 9 and right child 20 (which has children 15 and 7).",
 "why": "preorder [3,9,20,15,7], inorder [9,3,15,20,7] → root 3, left 9, right 20 with children 15 and 7.",
 "idea": "The next preorder value is always a root. Find it in the inorder list: everything to its left is the left subtree.",
 "input": "preorder=[3,9,20,15,7], inorder=[9,3,15,20,7]",
 "output": "[3,9,20,null,null,15,7]",
 "notes": [],
 "best": "The next preorder value is always a root. Find it in the inorder list: everything to its left is the left subtree.",
 "variants": [
  {
   "name": "Index map recursion",
   "code": "class Solution:\n    def buildTree(self, preorder, inorder):\n        pos = {v: i for i, v in enumerate(inorder)}\n        it = iter(preorder)\n        def build(lo, hi):\n            if lo > hi: return None\n            v = next(it); node = TreeNode(v)\n            m = pos[v]\n            node.left = build(lo, m - 1); node.right = build(m + 1, hi)\n            return node\n        return build(0, len(inorder) - 1)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "The next preorder value is always a root. Find it in the inorder list: everything to its left is the left subtree.",
   "frames": [
    {
     "title": "Inputs",
     "description": "Preorder starts with the root.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "preorder",
       "cells": [
        "3",
        "9",
        "20",
        "15",
        "7"
       ],
       "hot": [
        0
       ],
       "marks": {}
      },
      {
       "name": "inorder",
       "cells": [
        "9",
        "3",
        "15",
        "20",
        "7"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Root = 3",
     "description": "In the inorder list, 9 is left of 3 and 15,20,7 are right of it.",
     "codeLines": [
      7,
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "preorder",
       "cells": [
        "3",
        "9",
        "20",
        "15",
        "7"
       ],
       "hot": [
        0
       ],
       "marks": {}
      },
      {
       "name": "inorder",
       "cells": [
        "9",
        "3",
        "15",
        "20",
        "7"
       ],
       "hot": [
        1
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Left: 9",
     "description": "Next preorder value 9 — left subtree [9] is a single node.",
     "codeLines": [
      9
     ],
     "facts": {},
     "rows": [
      {
       "name": "preorder",
       "cells": [
        "3",
        "9",
        "20",
        "15",
        "7"
       ],
       "hot": [
        1
       ],
       "marks": {}
      },
      {
       "name": "inorder",
       "cells": [
        "9",
        "3",
        "15",
        "20",
        "7"
       ],
       "hot": [
        0
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Right: 20",
     "description": "Next is 20; in inorder, 15 is left of 20 and 7 is right.",
     "codeLines": [
      9
     ],
     "facts": {},
     "rows": [
      {
       "name": "preorder",
       "cells": [
        "3",
        "9",
        "20",
        "15",
        "7"
       ],
       "hot": [
        2
       ],
       "marks": {}
      },
      {
       "name": "inorder",
       "cells": [
        "9",
        "3",
        "15",
        "20",
        "7"
       ],
       "hot": [
        3
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Leaves 15, 7",
     "description": "Remaining preorder values become 20's children.",
     "codeLines": [
      9
     ],
     "facts": {},
     "rows": [
      {
       "name": "level 0",
       "cells": [
        "3"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 1",
       "cells": [
        "9",
        "20"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "·",
        "·",
        "15",
        "7"
       ],
       "hot": [
        2,
        3
       ],
       "marks": {}
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "Recursion with slicing",
   "tag": "Alternative",
   "code": "class Solution:\n    def buildTree(self, preorder, inorder):\n        if not preorder: return None\n        root = TreeNode(preorder[0]); m = inorder.index(preorder[0])\n        root.left = self.buildTree(preorder[1:m + 1], inorder[:m])\n        root.right = self.buildTree(preorder[m + 1:], inorder[m + 1:])\n        return root",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "Split both lists around the root with slices.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Iterative with a stack",
   "tag": "Alternative",
   "code": "class Solution:\n    def buildTree(self, preorder, inorder):\n        if not preorder: return None\n        root = TreeNode(preorder[0]); st = [root]; j = 0\n        for v in preorder[1:]:\n            node = TreeNode(v)\n            if st[-1].val != inorder[j]:\n                st[-1].left = node\n            else:\n                parent = None\n                while st and st[-1].val == inorder[j]:\n                    parent = st.pop(); j += 1\n                parent.right = node\n            st.append(node)\n        return root",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Walk the preorder; go left until the inorder pointer says the branch ended.",
   "frames": [],
   "alt": true
  }
 ]
};
