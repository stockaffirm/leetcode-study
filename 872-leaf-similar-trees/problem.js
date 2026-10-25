window.PROBLEM = {
 "id": "872",
 "title": "Leaf-Similar Trees",
 "level": "Easy",
 "topic": "Binary Tree - DFS",
 "question": "The leaf value sequence of a binary tree is the list of its leaves (nodes with no children) read from left to right. Given two trees root1 and root2, return true if their leaf value sequences are identical, even if the trees have different shapes. Example: both trees have leaves 6, 7, 4, 9, 8 in that order → true.",
 "input": "two trees with leaves 6,7,4,9,8",
 "output": "True",
 "notes": [
  "A leaf has no left and no right child.",
  "DFS left-before-right gives the leaf order."
 ],
 "best": "DFS collects leaves left to right; compare the two lists.",
 "variants": [
  {
   "name": "Recursive leaf lists",
   "code": "class Solution:\n    def leafSimilar(self, root1, root2):\n        def leaves(n):\n            if not n: return []\n            if not n.left and not n.right: return [n.val]\n            return leaves(n.left) + leaves(n.right)\n        return leaves(root1) == leaves(root2)",
   "time": "O(n+m)",
   "space": "O(n+m)",
   "explain": "Collect leaves in order, compare lists.",
   "frames": [
    {
     "title": "Tree 1",
     "description": "Leaves are the nodes with no children.",
     "codeLines": [
      3
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
        "5",
        "1"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "6",
        "2",
        "9",
        "8"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 3",
       "cells": [
        "·",
        "·",
        "7",
        "4",
        "·",
        "·",
        "·",
        "·"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Leaves of tree 1",
     "description": "Left-to-right: 6, 7, 4, 9, 8.",
     "codeLines": [
      5,
      6
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
        "5",
        "1"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "6",
        "2",
        "9",
        "8"
       ],
       "hot": [
        0,
        2,
        3
       ],
       "marks": {}
      },
      {
       "name": "level 3",
       "cells": [
        "·",
        "·",
        "7",
        "4",
        "·",
        "·",
        "·",
        "·"
       ],
       "hot": [
        2,
        3
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Leaves of tree 2",
     "description": "Another shape, same leaves.",
     "codeLines": [
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "tree 1",
       "cells": [
        "6",
        "7",
        "4",
        "9",
        "8"
       ],
       "hot": [
        0,
        1,
        2,
        3,
        4
       ],
       "marks": {}
      },
      {
       "name": "tree 2",
       "cells": [
        "6",
        "7",
        "4",
        "9",
        "8"
       ],
       "hot": [
        0,
        1,
        2,
        3,
        4
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Return",
     "description": "Lists are equal.",
     "codeLines": [
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "answer",
       "cells": [
        "True"
       ],
       "hot": [
        0
       ],
       "marks": {}
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "Iterative DFS",
   "tag": "Alternative",
   "code": "class Solution:\n    def leafSimilar(self, root1, root2):\n        def leaves(root):\n            res, st = [], [root]\n            while st:\n                n = st.pop()\n                if not n.left and not n.right: res.append(n.val)\n                if n.right: st.append(n.right)\n                if n.left: st.append(n.left)\n            return res\n        return leaves(root1) == leaves(root2)",
   "time": "O(n+m)",
   "space": "O(h)",
   "explain": "A stack visits leaves in left-to-right order.",
   "frames": [],
   "alt": true
  }
 ],
 "why": "Both trees give 6, 7, 4, 9, 8 → True.",
 "idea": "Collect leaves with DFS, then compare the two lists."
};
