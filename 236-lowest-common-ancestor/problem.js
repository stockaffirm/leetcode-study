window.PROBLEM = {
 "id": "236",
 "title": "Lowest Common Ancestor of a Binary Tree",
 "level": "Medium",
 "topic": "Binary Tree - DFS",
 "question": "In a binary tree (boxes called nodes, each with up to two children), the lowest common ancestor of two nodes p and q is the deepest node that has BOTH of them somewhere below it (a node counts as being below itself). Return it. Example tree [3,5,1,6,2,0,8,null,null,7,4], p=6 and q=4: 6 and 4 both hang under node 5, and nothing deeper has both → 5. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "input": "p = 6, q = 4",
 "output": "5",
 "notes": [
  "A node can be its own ancestor.",
  "Returning p or q bubbles the find upward."
 ],
 "best": "Post-order: if both sides found something, this node is the LCA.",
 "variants": [
  {
   "name": "Post-order recursion",
   "code": "class Solution:\n    def lowestCommonAncestor(self, root, p, q):\n        if not root or root == p or root == q: return root\n        left = self.lowestCommonAncestor(root.left, p, q)\n        right = self.lowestCommonAncestor(root.right, p, q)\n        return root if left and right else left or right",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Each call returns what it found below.",
   "frames": [
    {
     "title": "Tree",
     "description": "Find the meeting point of 6 and 4.",
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
        "0",
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
     "title": "Found 6",
     "description": "Subtree under 5-left returns 6.",
     "codeLines": [
      3
     ],
     "facts": {
      "returns": 6
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
        "0",
        "8"
       ],
       "hot": [
        0
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
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Found 4",
     "description": "Under 2, the right child is 4 → 2 returns 4.",
     "codeLines": [
      3
     ],
     "facts": {
      "2 returns": 4
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
        "0",
        "8"
       ],
       "hot": [
        1
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
        3
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Node 5",
     "description": "left = 6, right = 4 → both found → return 5.",
     "codeLines": [
      6
     ],
     "facts": {
      "left": 6,
      "right": 4,
      "returns": 5
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
        "5",
        "1"
       ],
       "hot": [
        0
       ],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "6",
        "2",
        "0",
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
     "title": "Node 3",
     "description": "left = 5, right = None → return left.",
     "codeLines": [
      6
     ],
     "facts": {
      "returns": 5
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
        "0",
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
     "title": "Answer",
     "description": "LCA is 5.",
     "codeLines": [
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
       "hot": [
        0
       ],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "6",
        "2",
        "0",
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
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "Parent pointers + ancestor set",
   "tag": "Alternative",
   "code": "class Solution:\n    def lowestCommonAncestor(self, root, p, q):\n        parent = {root: None}; st = [root]\n        while p not in parent or q not in parent:\n            n = st.pop()\n            if n.left: parent[n.left] = n; st.append(n.left)\n            if n.right: parent[n.right] = n; st.append(n.right)\n        anc = set()\n        while p: anc.add(p); p = parent[p]\n        while q not in anc: q = parent[q]\n        return q",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Record every node's parent, then walk p's ancestors and look for the first one q also reaches.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Root-to-node paths",
   "tag": "Alternative",
   "code": "class Solution:\n    def lowestCommonAncestor(self, root, p, q):\n        def path(n, target):\n            if not n: return None\n            if n is target: return [n]\n            for child in (n.left, n.right):\n                r = path(child, target)\n                if r: return [n] + r\n            return None\n        a, b = path(root, p), path(root, q)\n        ans = root\n        for x, y in zip(a, b):\n            if x is y: ans = x\n            else: break\n        return ans",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Find the path to p and the path to q; the last shared node is the answer.",
   "frames": [],
   "alt": true
  }
 ],
 "why": "p = 6 and q = 4 both sit under node 5, and no lower node has both → 5.",
 "idea": "Each node reports what it found below. If both sides found something, this node is the answer."
};
