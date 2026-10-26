window.PROBLEM = {
 "id": "104",
 "title": "Maximum Depth of Binary Tree",
 "level": "Easy",
 "topic": "Binary Tree - DFS",
 "question": "Given the root of a binary tree, return its maximum depth: the number of NODES along the longest path from the root down to the farthest leaf. An empty tree has depth 0. Example: [3,9,20,null,null,15,7] → the path 3 → 20 → 15 has 3 nodes, so the answer is 3. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "input": "[3, 9, 20, null, null, 15, 7]",
 "output": "3",
 "notes": [
  "Empty tree has depth 0.",
  "Space is the recursion depth h."
 ],
 "best": "Recursion: a node's depth is one more than its deeper subtree.",
 "variants": [
  {
   "name": "Recursion (DFS)",
   "code": "class Solution:\n    def maxDepth(self, root):\n        if not root: return 0\n        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Depth = 1 + deeper child.",
   "frames": [
    {
     "title": "Tree",
     "description": "Count levels top to bottom.",
     "codeLines": [
      2
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
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Leaf 9",
     "description": "Both children empty → depth 1.",
     "codeLines": [
      3,
      4
     ],
     "facts": {
      "depth(9)": 1
     },
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
        "15",
        "7"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Leaves 15 and 7",
     "description": "Each is a leaf → depth 1.",
     "codeLines": [
      4
     ],
     "facts": {
      "depth(15)": 1,
      "depth(7)": 1
     },
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
    },
    {
     "title": "Node 20",
     "description": "1 + max(1, 1) = 2.",
     "codeLines": [
      4
     ],
     "facts": {
      "depth(20)": 2
     },
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
        "15",
        "7"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Root 3",
     "description": "1 + max(1, 2) = 3.",
     "codeLines": [
      4
     ],
     "facts": {
      "depth(3)": 3
     },
     "rows": [
      {
       "name": "level 0",
       "cells": [
        "3"
       ],
       "hot": [
        0
       ],
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
       "hot": [],
       "marks": {}
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "BFS by level",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxDepth(self, root):\n        if not root: return 0\n        q, d = deque([root]), 0\n        while q:\n            d += 1\n            for _ in range(len(q)):\n                n = q.popleft()\n                if n.left: q.append(n.left)\n                if n.right: q.append(n.right)\n        return d",
   "time": "O(n)",
   "space": "O(w)",
   "explain": "Count how many levels the queue goes through.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Iterative DFS",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxDepth(self, root):\n        if not root: return 0\n        st, best = [(root, 1)], 0\n        while st:\n            n, d = st.pop(); best = max(best, d)\n            if n.left: st.append((n.left, d + 1))\n            if n.right: st.append((n.right, d + 1))\n        return best",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "A stack of (node, depth); track the deepest.",
   "frames": [],
   "alt": true
  }
 ],
 "why": "3 → 20 → 15 passes through 3 nodes → depth 3.",
 "idea": "depth = 1 + the deeper of the left and right subtrees."
};
