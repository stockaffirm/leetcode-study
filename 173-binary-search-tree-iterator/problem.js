window.PROBLEM = {
 "id": "173",
 "title": "Binary Search Tree Iterator",
 "level": "Medium",
 "topic": "Binary Tree - General",
 "question": "A binary search tree (BST) is a tree where, for every node, everything on its left is smaller and everything on its right is larger. Build an iterator over a BST: next() returns the next number in increasing order, hasNext() says whether any are left. It should use little memory (not copy the whole tree). Example: BST [7,3,15,null,null,9,20] → next() gives 3, 7, 9, 15, 20. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "why": "BST [7,3,15,null,null,9,20] → next() returns 3, 7, 9, 15, 20.",
 "idea": "Keep a stack of the 'left spine'. Pop = next smallest; then push the left spine of its right child.",
 "input": "BST [7,3,15,∅,∅,9,20]",
 "output": "3, 7, 9, 15, 20",
 "notes": [],
 "best": "Keep a stack of the 'left spine'. Pop = next smallest; then push the left spine of its right child.",
 "variants": [
  {
   "name": "Stack of the left spine",
   "code": "class BSTIterator:\n    def __init__(self, root):\n        self.st = []; self._push_left(root)\n    def _push_left(self, n):\n        while n: self.st.append(n); n = n.left\n    def next(self):\n        n = self.st.pop(); self._push_left(n.right); return n.val\n    def hasNext(self):\n        return bool(self.st)",
   "time": "O(1) amortised",
   "space": "O(h)",
   "explain": "Keep a stack of the 'left spine'. Pop = next smallest; then push the left spine of its right child.",
   "frames": [
    {
     "title": "Init",
     "description": "Push the left spine: 7, then 3.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "stack (top = right)",
       "cells": [
        "7",
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
     "title": "next()",
     "description": "Pop 3 → return 3 (no right child).",
     "codeLines": [
      7
     ],
     "facts": {
      "returns": 3
     },
     "rows": [
      {
       "name": "stack",
       "cells": [
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
     "title": "next()",
     "description": "Pop 7 → return 7. Push left spine of 15: 15, then 9.",
     "codeLines": [
      7
     ],
     "facts": {
      "returns": 7
     },
     "rows": [
      {
       "name": "stack",
       "cells": [
        "15",
        "9"
       ],
       "hot": [
        1
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "next()",
     "description": "Pop 9 → return 9.",
     "codeLines": [
      7
     ],
     "facts": {
      "returns": 9
     },
     "rows": [
      {
       "name": "stack",
       "cells": [
        "15"
       ],
       "hot": [
        0
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "next(), next()",
     "description": "15, then 20.",
     "codeLines": [
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "returns",
       "cells": [
        "15",
        "20"
       ],
       "hot": [
        0,
        1
       ],
       "marks": {}
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "Flatten inorder into a list",
   "tag": "Alternative",
   "code": "class BSTIterator:\n    def __init__(self, root):\n        self.vals = []; self.i = 0\n        def inorder(n):\n            if n: inorder(n.left); self.vals.append(n.val); inorder(n.right)\n        inorder(root)\n    def next(self):\n        self.i += 1; return self.vals[self.i - 1]\n    def hasNext(self): return self.i < len(self.vals)",
   "time": "O(1) per call",
   "space": "O(n)",
   "explain": "Pre-compute the whole inorder sequence; next() just walks it.",
   "frames": [],
   "alt": true
  }
 ]
};
