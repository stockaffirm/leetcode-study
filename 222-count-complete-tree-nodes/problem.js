window.PROBLEM = {
 "id": "222",
 "title": "Count Complete Tree Nodes",
 "level": "Easy",
 "topic": "Binary Tree - General",
 "question": "A complete binary tree has every level full except possibly the last, whose nodes are as far left as possible. Given its root, return the number of nodes — and do it faster than visiting every node (better than linear time). Example: [1,2,3,4,5,6] → 6.",
 "why": "[1,2,3,4,5,6] has 6 nodes.",
 "idea": "If the left depth equals the right depth the subtree is perfect: it has 2^depth − 1 nodes. Otherwise recurse.",
 "input": "[1,2,3,4,5,6]",
 "output": "6",
 "notes": [],
 "best": "If the left depth equals the right depth the subtree is perfect: it has 2^depth − 1 nodes. Otherwise recurse.",
 "variants": [
  {
   "name": "Compare left and right depth",
   "code": "class Solution:\n    def countNodes(self, root):\n        if not root: return 0\n        l, r, hl, hr = root, root, 0, 0\n        while l: l = l.left; hl += 1\n        while r: r = r.right; hr += 1\n        if hl == hr: return 2 ** hl - 1\n        return 1 + self.countNodes(root.left) + self.countNodes(root.right)",
   "time": "O(log² n)",
   "space": "O(log n)",
   "explain": "If the left depth equals the right depth the subtree is perfect: it has 2^depth − 1 nodes. Otherwise recurse.",
   "frames": [
    {
     "title": "Tree",
     "description": "Compare left depth and right depth.",
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
        "3"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "4",
        "5",
        "6",
        "·"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Root",
     "description": "Left depth 3, right depth 2 → not perfect → split.",
     "codeLines": [
      7,
      8
     ],
     "facts": {
      "left": 3,
      "right": 2
     },
     "rows": [
      {
       "name": "level 0",
       "cells": [
        "1"
       ],
       "hot": [
        0
       ],
       "marks": {}
      },
      {
       "name": "level 1",
       "cells": [
        "2",
        "3"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "4",
        "5",
        "6",
        "·"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Subtree 2",
     "description": "Left depth 2 = right depth 2 → perfect: 2² − 1 = 3 nodes.",
     "codeLines": [
      7
     ],
     "facts": {
      "count": 3
     },
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
        "3"
       ],
       "hot": [
        0
       ],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "4",
        "5",
        "6",
        "·"
       ],
       "hot": [
        0,
        1
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Subtree 3",
     "description": "Left depth 2, right depth 1 → split: 1 + 1 (node 6) + 0 = 2.",
     "codeLines": [
      8
     ],
     "facts": {
      "count": 2
     },
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
        "3"
       ],
       "hot": [
        1
       ],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "4",
        "5",
        "6",
        "·"
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
     "description": "1 + 3 + 2 = 6",
     "codeLines": [
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "answer",
       "cells": [
        "6"
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
   "name": "Plain DFS count",
   "tag": "Brute force",
   "code": "class Solution:\n    def countNodes(self, root):\n        if not root: return 0\n        return 1 + self.countNodes(root.left) + self.countNodes(root.right)",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Ignore the complete-tree property and count every node.",
   "frames": [],
   "alt": true
  },
  {
   "name": "BFS count",
   "tag": "Brute force",
   "code": "class Solution:\n    def countNodes(self, root):\n        if not root: return 0\n        q, count = deque([root]), 0\n        while q:\n            n = q.popleft(); count += 1\n            if n.left: q.append(n.left)\n            if n.right: q.append(n.right)\n        return count",
   "time": "O(n)",
   "space": "O(w)",
   "explain": "Count nodes level by level.",
   "frames": [],
   "alt": true
  }
 ]
};
