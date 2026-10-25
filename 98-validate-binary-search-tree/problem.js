window.PROBLEM = {
 "id": "98",
 "title": "Validate Binary Search Tree",
 "level": "Medium",
 "topic": "Binary Search Tree",
 "question": "Given the root of a binary tree, return true if it is a valid binary search tree: for EVERY node, all values in its left side are smaller and all values in its right side are larger (not just its direct children). Example: [5,1,6,null,null,3,7] → false, because 3 is on the right of 5 but smaller than 5. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "why": "[5,1,6,null,null,3,7]: 3 sits in 5's right subtree but 3 < 5 → False.",
 "idea": "Pass down an allowed range (low, high) for each node.",
 "input": "[5,1,6,null,null,3,7]",
 "output": "False",
 "notes": [],
 "best": "Pass down an allowed range (low, high) for each node.",
 "variants": [
  {
   "name": "Recursion with (low, high)",
   "code": "class Solution:\n    def isValidBST(self, root, lo=float('-inf'), hi=float('inf')):\n        if not root: return True\n        if not lo < root.val < hi: return False\n        return self.isValidBST(root.left, lo, root.val) and self.isValidBST(root.right, root.val, hi)",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Pass down an allowed range (low, high) for each node.",
   "frames": [
    {
     "title": "Tree",
     "description": "Each node must stay inside (lo, hi).",
     "codeLines": [
      2
     ],
     "facts": {},
     "rows": [
      {
       "name": "level 0",
       "cells": [
        "5"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 1",
       "cells": [
        "1",
        "6"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "·",
        "·",
        "3",
        "7"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Root 5",
     "description": "Range (−∞, ∞) ✓",
     "codeLines": [
      4
     ],
     "facts": {
      "range": "(−∞, ∞)"
     },
     "rows": [
      {
       "name": "level 0",
       "cells": [
        "5"
       ],
       "hot": [
        0
       ],
       "marks": {}
      },
      {
       "name": "level 1",
       "cells": [
        "1",
        "6"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "·",
        "·",
        "3",
        "7"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Node 1",
     "description": "Range (−∞, 5) ✓",
     "codeLines": [
      5
     ],
     "facts": {
      "range": "(−∞, 5)"
     },
     "rows": [
      {
       "name": "level 0",
       "cells": [
        "5"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 1",
       "cells": [
        "1",
        "6"
       ],
       "hot": [
        0
       ],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "·",
        "·",
        "3",
        "7"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Node 6",
     "description": "Range (5, ∞) ✓",
     "codeLines": [
      5
     ],
     "facts": {
      "range": "(5, ∞)"
     },
     "rows": [
      {
       "name": "level 0",
       "cells": [
        "5"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 1",
       "cells": [
        "1",
        "6"
       ],
       "hot": [
        1
       ],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "·",
        "·",
        "3",
        "7"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Node 3",
     "description": "Range (5, 6) but 3 < 5 ✗ → False.",
     "codeLines": [
      4
     ],
     "facts": {
      "range": "(5, 6)"
     },
     "rows": [
      {
       "name": "level 0",
       "cells": [
        "5"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 1",
       "cells": [
        "1",
        "6"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "·",
        "·",
        "3",
        "7"
       ],
       "hot": [
        2
       ],
       "marks": {}
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "Inorder must be strictly increasing",
   "tag": "Alternative",
   "code": "class Solution:\n    def isValidBST(self, root):\n        prev = float('-inf')\n        def go(n):\n            nonlocal prev\n            if not n: return True\n            if not go(n.left): return False\n            if n.val <= prev: return False\n            prev = n.val\n            return go(n.right)\n        return go(root)",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Walk in order and make sure each value beats the previous one.",
   "frames": [],
   "alt": true
  }
 ]
};
