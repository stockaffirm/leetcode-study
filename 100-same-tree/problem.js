window.PROBLEM = {
 "id": "100",
 "title": "Same Tree",
 "level": "Easy",
 "topic": "Binary Tree - General",
 "question": "A binary tree is a structure where each box (node) holds a number and has at most two children, a left one and a right one. Given the tops (roots) of two binary trees, return true if they are exactly the same: same shape and the same number in every matching box. Example: [1,2,3] and [1,2,3] → true; [1,2] and [1,null,2] → false (the 2 is on a different side). (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "why": "Both trees are 1 with children 2 and 3 → True.",
 "idea": "Compare the roots, then compare the left subtrees and the right subtrees the same way.",
 "input": "[1,2,3] and [1,2,3]",
 "output": "True",
 "notes": [],
 "best": "Compare the roots, then compare the left subtrees and the right subtrees the same way.",
 "variants": [
  {
   "name": "Recursion",
   "code": "class Solution:\n    def isSameTree(self, p, q):\n        if not p and not q: return True\n        if not p or not q or p.val != q.val: return False\n        return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Compare the roots, then compare the left subtrees and the right subtrees the same way.",
   "frames": [
    {
     "title": "Two trees",
     "description": "Compare node by node.",
     "codeLines": [
      2
     ],
     "facts": {},
     "rows": [
      {
       "name": "p",
       "cells": [
        "1",
        "2",
        "3"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "q",
       "cells": [
        "1",
        "2",
        "3"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Roots",
     "description": "1 = 1 ✓",
     "codeLines": [
      4
     ],
     "facts": {},
     "rows": [
      {
       "name": "p",
       "cells": [
        "1",
        "2",
        "3"
       ],
       "hot": [
        0
       ],
       "marks": {}
      },
      {
       "name": "q",
       "cells": [
        "1",
        "2",
        "3"
       ],
       "hot": [
        0
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Left children",
     "description": "2 = 2 ✓",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "p",
       "cells": [
        "1",
        "2",
        "3"
       ],
       "hot": [
        1
       ],
       "marks": {}
      },
      {
       "name": "q",
       "cells": [
        "1",
        "2",
        "3"
       ],
       "hot": [
        1
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Right children",
     "description": "3 = 3 ✓",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "p",
       "cells": [
        "1",
        "2",
        "3"
       ],
       "hot": [
        2
       ],
       "marks": {}
      },
      {
       "name": "q",
       "cells": [
        "1",
        "2",
        "3"
       ],
       "hot": [
        2
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Return",
     "description": "Nothing differed → True.",
     "codeLines": [
      3
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
   "name": "Iterative with a stack",
   "tag": "Alternative",
   "code": "class Solution:\n    def isSameTree(self, p, q):\n        st = [(p, q)]\n        while st:\n            a, b = st.pop()\n            if not a and not b: continue\n            if not a or not b or a.val != b.val: return False\n            st.append((a.left, b.left)); st.append((a.right, b.right))\n        return True",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Compare pairs of nodes taken from a stack.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Serialize and compare",
   "tag": "Alternative",
   "code": "class Solution:\n    def isSameTree(self, p, q):\n        def ser(n): return [None] if not n else [n.val] + ser(n.left) + ser(n.right)\n        return ser(p) == ser(q)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Turn each tree into a preorder list with None markers and compare.",
   "frames": [],
   "alt": true
  }
 ]
};
