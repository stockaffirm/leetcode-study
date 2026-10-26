window.PROBLEM = {
 "id": "1448",
 "title": "Count Good Nodes in Binary Tree",
 "level": "Medium",
 "topic": "Binary Tree - DFS",
 "question": "In a binary tree (boxes called nodes, each with up to two children), call a node 'good' if, on the path from the top node (root) down to it, no earlier node has a value GREATER than it. The root itself is always good. Given the root, return how many good nodes there are. Example: [3,1,4,3,null,1,5] → the good nodes are 3 (root), 4, 3 (below the 1, nothing on its path is bigger) and 5 → 4. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "input": "[3, 1, 4, 3, null, 1, 5]",
 "output": "4",
 "notes": [
  "Equal to the max counts as good (>=).",
  "Root is always good."
 ],
 "best": "DFS passing the max-so-far down the path.",
 "variants": [
  {
   "name": "DFS carrying the max",
   "code": "class Solution:\n    def goodNodes(self, root):\n        def dfs(node, mx):\n            if not node: return 0\n            good = 1 if node.val >= mx else 0\n            mx = max(mx, node.val)\n            return good + dfs(node.left, mx) + dfs(node.right, mx)\n        return dfs(root, root.val)",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Carry the path maximum down.",
   "frames": [
    {
     "title": "Tree",
     "description": "Carry the maximum seen on the path.",
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
        "1",
        "4"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "3",
        "·",
        "1",
        "5"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Visit 3",
     "description": "3 ≥ 3 → good",
     "codeLines": [
      5,
      6
     ],
     "facts": {
      "max so far": 3,
      "count": 1
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
        "1",
        "4"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "3",
        "·",
        "1",
        "5"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Visit 1",
     "description": "1 < 3 → not good",
     "codeLines": [
      5,
      6
     ],
     "facts": {
      "max so far": 3,
      "count": 1
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
        "1",
        "4"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "3",
        "·",
        "1",
        "5"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Visit 3",
     "description": "3 ≥ 3 → good",
     "codeLines": [
      5,
      6
     ],
     "facts": {
      "max so far": 3,
      "count": 2
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
        "1",
        "4"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "3",
        "·",
        "1",
        "5"
       ],
       "hot": [
        0
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Visit 4",
     "description": "4 ≥ 3 → good",
     "codeLines": [
      5,
      6
     ],
     "facts": {
      "max so far": 3,
      "count": 3
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
        "1",
        "4"
       ],
       "hot": [
        1
       ],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "3",
        "·",
        "1",
        "5"
       ],
       "hot": [
        0
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Visit 1",
     "description": "1 < 4 → not good",
     "codeLines": [
      5,
      6
     ],
     "facts": {
      "max so far": 4,
      "count": 3
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
        "1",
        "4"
       ],
       "hot": [
        1
       ],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "3",
        "·",
        "1",
        "5"
       ],
       "hot": [
        0
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Visit 5",
     "description": "5 ≥ 4 → good",
     "codeLines": [
      5,
      6
     ],
     "facts": {
      "max so far": 4,
      "count": 4
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
        "1",
        "4"
       ],
       "hot": [
        1
       ],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "3",
        "·",
        "1",
        "5"
       ],
       "hot": [
        0,
        3
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Return",
     "description": "4 good nodes.",
     "codeLines": [
      8
     ],
     "facts": {
      "count": 4
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
        "1",
        "4"
       ],
       "hot": [
        1
       ],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "3",
        "·",
        "1",
        "5"
       ],
       "hot": [
        0,
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
   "name": "Iterative DFS",
   "tag": "Alternative",
   "code": "class Solution:\n    def goodNodes(self, root):\n        st, count = [(root, root.val)], 0\n        while st:\n            n, mx = st.pop()\n            if n.val >= mx: count += 1\n            mx = max(mx, n.val)\n            if n.left: st.append((n.left, mx))\n            if n.right: st.append((n.right, mx))\n        return count",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "A stack of (node, max so far).",
   "frames": [],
   "alt": true
  },
  {
   "name": "BFS",
   "tag": "Alternative",
   "code": "class Solution:\n    def goodNodes(self, root):\n        q, count = deque([(root, root.val)]), 0\n        while q:\n            n, mx = q.popleft()\n            if n.val >= mx: count += 1\n            mx = max(mx, n.val)\n            if n.left: q.append((n.left, mx))\n            if n.right: q.append((n.right, mx))\n        return count",
   "time": "O(n)",
   "space": "O(w)",
   "explain": "Level by level, each queue entry remembers the max on its path.",
   "frames": [],
   "alt": true
  }
 ],
 "why": "3 (root) good. 1 isn't (3 is bigger). The next 3 is good (3 ≥ 3). 4 is good. 1 isn't (4 is bigger). 5 is good → 4.",
 "idea": "Pass the biggest value seen so far down the path."
};
