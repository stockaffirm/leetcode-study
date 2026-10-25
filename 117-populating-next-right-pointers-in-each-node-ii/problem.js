window.PROBLEM = {
 "id": "117",
 "title": "Populating Next Right Pointers in Each Node II",
 "level": "Medium",
 "topic": "Binary Tree - General",
 "question": "Every node of a binary tree has an extra pointer called next. Fill it so each node's next points to the node immediately to its RIGHT on the same level, or to nothing if it is the last one on its level. Example: [1,2,3,4,5,null,7] → 1→nothing; 2→3→nothing; 4→5→7→nothing. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "why": "Tree [1,2,3,4,5,null,7]: 2→3, 4→5→7, others end.",
 "idea": "Go level by level; link neighbours in each level.",
 "input": "[1,2,3,4,5,null,7]",
 "output": "1→∅, 2→3→∅, 4→5→7→∅",
 "notes": [],
 "best": "Go level by level; link neighbours in each level.",
 "variants": [
  {
   "name": "Level by level with a list",
   "code": "class Solution:\n    def connect(self, root):\n        level = [root] if root else []\n        while level:\n            for a, b in zip(level, level[1:]): a.next = b\n            level = [c for n in level for c in (n.left, n.right) if c]\n        return root",
   "time": "O(n)",
   "space": "O(w)",
   "explain": "Go level by level; link neighbours in each level.",
   "frames": [
    {
     "title": "Tree",
     "description": "Link neighbours on each level.",
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
        "·",
        "7"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Level 0",
     "description": "Just 1 → nothing to link.",
     "codeLines": [
      3
     ],
     "facts": {},
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
        "·",
        "7"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Level 1",
     "description": "2 → 3",
     "codeLines": [
      5
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
       "hot": [
        0,
        1
       ],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "4",
        "5",
        "·",
        "7"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Level 2",
     "description": "4 → 5 → 7",
     "codeLines": [
      5
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
        "·",
        "7"
       ],
       "hot": [
        0,
        1,
        3
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Return",
     "description": "All levels linked.",
     "codeLines": [
      7
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
        "·",
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
   "name": "Walk the previous level's next pointers",
   "tag": "Optimal space",
   "code": "class Solution:\n    def connect(self, root):\n        head = root\n        while head:\n            dummy = TreeNode(); tail = dummy; cur = head\n            while cur:\n                if cur.left: tail.next = cur.left; tail = tail.next\n                if cur.right: tail.next = cur.right; tail = tail.next\n                cur = cur.next\n            head = dummy.next\n        return root",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Use the already-built next links of one level to connect the level below.",
   "frames": [],
   "alt": true
  },
  {
   "name": "BFS with a queue",
   "tag": "Alternative",
   "code": "class Solution:\n    def connect(self, root):\n        if not root: return root\n        q = deque([root])\n        while q:\n            prev = None\n            for _ in range(len(q)):\n                n = q.popleft()\n                if prev: prev.next = n\n                prev = n\n                if n.left: q.append(n.left)\n                if n.right: q.append(n.right)\n        return root",
   "time": "O(n)",
   "space": "O(w)",
   "explain": "Link each node to the previous one dequeued on its level.",
   "frames": [],
   "alt": true
  }
 ]
};
