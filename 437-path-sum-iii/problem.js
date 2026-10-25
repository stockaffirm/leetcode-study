window.PROBLEM = {
 "id": "437",
 "title": "Path Sum III",
 "level": "Medium",
 "topic": "Binary Tree - DFS",
 "question": "Given the root of a binary tree and an integer targetSum, return how many paths have values that add up to targetSum. A path must go downward (from a parent to a child) but may start and end at ANY node — it doesn't have to touch the root or a leaf. Example: [10,5,-3,3,2,null,11], target=8 → paths 5→3 and -3→11 each sum to 8, so the answer is 2. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "input": "[10, 5, -3, 3, 2, null, 11], target=8",
 "output": "2",
 "notes": [
  "A path sums to target if prefix[now] - target was seen earlier on the path.",
  "Undo the count when backtracking."
 ],
 "best": "Prefix-sum hash map along the path turns it into O(n).",
 "variants": [
  {
   "name": "Prefix sums + hash map",
   "code": "class Solution:\n    def pathSum(self, root, target):\n        count = Counter({0: 1})\n        def dfs(node, cur):\n            if not node: return 0\n            cur += node.val\n            res = count[cur - target]\n            count[cur] += 1\n            res += dfs(node.left, cur) + dfs(node.right, cur)\n            count[cur] -= 1\n            return res\n        return dfs(root, 0)",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Prefix sums on the path + a hash map of counts.",
   "frames": [
    {
     "title": "Tree",
     "description": "target = 8. Track running sums down the path.",
     "codeLines": [
      3
     ],
     "facts": {
      "target": 8
     },
     "rows": [
      {
       "name": "level 0",
       "cells": [
        "10"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 1",
       "cells": [
        "5",
        "-3"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "3",
        "2",
        "·",
        "11"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Visit 10",
     "description": "cur = 10; need earlier prefix 2 → none",
     "codeLines": [
      6,
      7
     ],
     "facts": {
      "cur": 10,
      "need": 2,
      "total": 0
     },
     "rows": [
      {
       "name": "level 0",
       "cells": [
        "10"
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
        "-3"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "3",
        "2",
        "·",
        "11"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Visit 5",
     "description": "cur = 15; need earlier prefix 7 → found! +1",
     "codeLines": [
      6,
      7
     ],
     "facts": {
      "cur": 15,
      "need": 7,
      "total": 1
     },
     "rows": [
      {
       "name": "level 0",
       "cells": [
        "10"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 1",
       "cells": [
        "5",
        "-3"
       ],
       "hot": [
        0
       ],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "3",
        "2",
        "·",
        "11"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Visit 3",
     "description": "cur = 18; need earlier prefix 10 → none",
     "codeLines": [
      6,
      7
     ],
     "facts": {
      "cur": 18,
      "need": 10,
      "total": 1
     },
     "rows": [
      {
       "name": "level 0",
       "cells": [
        "10"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 1",
       "cells": [
        "5",
        "-3"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "3",
        "2",
        "·",
        "11"
       ],
       "hot": [
        0
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Visit 2",
     "description": "cur = 17; need earlier prefix 9 → none",
     "codeLines": [
      6,
      7
     ],
     "facts": {
      "cur": 17,
      "need": 9,
      "total": 1
     },
     "rows": [
      {
       "name": "level 0",
       "cells": [
        "10"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 1",
       "cells": [
        "5",
        "-3"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "3",
        "2",
        "·",
        "11"
       ],
       "hot": [
        1
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Visit -3",
     "description": "cur = 7; need earlier prefix -1 → none",
     "codeLines": [
      6,
      7
     ],
     "facts": {
      "cur": 7,
      "need": -1,
      "total": 1
     },
     "rows": [
      {
       "name": "level 0",
       "cells": [
        "10"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 1",
       "cells": [
        "5",
        "-3"
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
        "2",
        "·",
        "11"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Visit 11",
     "description": "cur = 18; need earlier prefix 10 → found! +1",
     "codeLines": [
      6,
      7
     ],
     "facts": {
      "cur": 18,
      "need": 10,
      "total": 2
     },
     "rows": [
      {
       "name": "level 0",
       "cells": [
        "10"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 1",
       "cells": [
        "5",
        "-3"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "3",
        "2",
        "·",
        "11"
       ],
       "hot": [
        3
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Return",
     "description": "Paths: 5→3 and -3→11.",
     "codeLines": [
      12
     ],
     "facts": {
      "total": 2
     },
     "rows": [
      {
       "name": "level 0",
       "cells": [
        "10"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 1",
       "cells": [
        "5",
        "-3"
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
        "3",
        "2",
        "·",
        "11"
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
   "name": "Brute force (DFS from every node)",
   "tag": "Brute force",
   "code": "class Solution:\n    def pathSum(self, root, target):\n        def from_node(n, remaining):\n            if not n: return 0\n            remaining -= n.val\n            return (remaining == 0) + from_node(n.left, remaining) + from_node(n.right, remaining)\n        if not root: return 0\n        return from_node(root, target) + self.pathSum(root.left, target) + self.pathSum(root.right, target)",
   "time": "O(n²)",
   "space": "O(h)",
   "explain": "Count paths starting at each node separately.",
   "frames": [],
   "alt": true
  }
 ],
 "why": "target = 8: the path 5→3 sums to 8, and −3→11 sums to 8 → 2 paths.",
 "idea": "Keep running sums along the path and a dictionary of earlier sums."
};
