window.PROBLEM = {
 "id": "21",
 "title": "Merge Two Sorted Lists",
 "level": "Easy",
 "topic": "Linked List",
 "question": "You are given two linked lists (chains of nodes) that are each sorted from smallest to largest. Join them into one sorted linked list by reusing their nodes, and return its first node. Example: 1→2→4 and 1→3→4 → 1→1→2→3→4→4.",
 "why": "[1,2,4] and [1,3,4] → 1,1,2,3,4,4.",
 "idea": "Keep a tail pointer; repeatedly attach the smaller front node.",
 "input": "1→2→4 and 1→3→4",
 "output": "1→1→2→3→4→4",
 "notes": [],
 "best": "Keep a tail pointer; repeatedly attach the smaller front node.",
 "variants": [
  {
   "name": "Dummy head + tail",
   "code": "class Solution:\n    def mergeTwoLists(self, a, b):\n        dummy = cur = ListNode()\n        while a and b:\n            if a.val <= b.val: cur.next, a = a, a.next\n            else: cur.next, b = b, b.next\n            cur = cur.next\n        cur.next = a or b\n        return dummy.next",
   "time": "O(n+m)",
   "space": "O(1)",
   "explain": "Keep a tail pointer; repeatedly attach the smaller front node.",
   "frames": [
    {
     "title": "Start",
     "description": "Compare the two fronts.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "a",
       "cells": [
        "1",
        "2",
        "4"
       ],
       "hot": [
        0
       ],
       "marks": {},
       "kind": "list"
      },
      {
       "name": "b",
       "cells": [
        "1",
        "3",
        "4"
       ],
       "hot": [
        0
       ],
       "marks": {},
       "kind": "list"
      },
      {
       "name": "merged",
       "cells": [
        "·"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Take 1 from a",
     "description": "a front 1 ≤ b front 1",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "a",
       "cells": [
        "1",
        "2",
        "4"
       ],
       "hot": [
        0
       ],
       "marks": {},
       "kind": "list"
      },
      {
       "name": "b",
       "cells": [
        "1",
        "3",
        "4"
       ],
       "hot": [
        0
       ],
       "marks": {},
       "kind": "list"
      },
      {
       "name": "merged",
       "cells": [
        "1"
       ],
       "hot": [
        0
       ],
       "marks": {},
       "kind": "list"
      }
     ]
    },
    {
     "title": "Take 1 from b",
     "description": "b front 1 < a front 2",
     "codeLines": [
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "a",
       "cells": [
        "1",
        "2",
        "4"
       ],
       "hot": [
        1
       ],
       "marks": {},
       "kind": "list"
      },
      {
       "name": "b",
       "cells": [
        "1",
        "3",
        "4"
       ],
       "hot": [
        0
       ],
       "marks": {},
       "kind": "list"
      },
      {
       "name": "merged",
       "cells": [
        "1",
        "1"
       ],
       "hot": [
        1
       ],
       "marks": {},
       "kind": "list"
      }
     ]
    },
    {
     "title": "Take 2 from a",
     "description": "a front 2 ≤ b front 3",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "a",
       "cells": [
        "1",
        "2",
        "4"
       ],
       "hot": [
        1
       ],
       "marks": {},
       "kind": "list"
      },
      {
       "name": "b",
       "cells": [
        "1",
        "3",
        "4"
       ],
       "hot": [
        1
       ],
       "marks": {},
       "kind": "list"
      },
      {
       "name": "merged",
       "cells": [
        "1",
        "1",
        "2"
       ],
       "hot": [
        2
       ],
       "marks": {},
       "kind": "list"
      }
     ]
    },
    {
     "title": "Take 3 from b",
     "description": "b front 3 < a front 4",
     "codeLines": [
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "a",
       "cells": [
        "1",
        "2",
        "4"
       ],
       "hot": [
        2
       ],
       "marks": {},
       "kind": "list"
      },
      {
       "name": "b",
       "cells": [
        "1",
        "3",
        "4"
       ],
       "hot": [
        1
       ],
       "marks": {},
       "kind": "list"
      },
      {
       "name": "merged",
       "cells": [
        "1",
        "1",
        "2",
        "3"
       ],
       "hot": [
        3
       ],
       "marks": {},
       "kind": "list"
      }
     ]
    },
    {
     "title": "Take 4 from a",
     "description": "a front 4 ≤ b front 4",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "a",
       "cells": [
        "1",
        "2",
        "4"
       ],
       "hot": [
        2
       ],
       "marks": {},
       "kind": "list"
      },
      {
       "name": "b",
       "cells": [
        "1",
        "3",
        "4"
       ],
       "hot": [
        2
       ],
       "marks": {},
       "kind": "list"
      },
      {
       "name": "merged",
       "cells": [
        "1",
        "1",
        "2",
        "3",
        "4"
       ],
       "hot": [
        4
       ],
       "marks": {},
       "kind": "list"
      }
     ]
    },
    {
     "title": "Attach the rest",
     "description": "One list is empty; append the other.",
     "codeLines": [
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "merged",
       "cells": [
        "1",
        "1",
        "2",
        "3",
        "4",
        "4"
       ],
       "hot": [
        5
       ],
       "marks": {},
       "kind": "list"
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "Recursion",
   "tag": "Alternative",
   "code": "class Solution:\n    def mergeTwoLists(self, a, b):\n        if not a or not b: return a or b\n        if a.val <= b.val:\n            a.next = self.mergeTwoLists(a.next, b); return a\n        b.next = self.mergeTwoLists(a, b.next); return b",
   "time": "O(n+m)",
   "space": "O(n+m)",
   "explain": "The smaller head points to the merge of the rest.",
   "frames": [],
   "alt": true
  }
 ]
};
