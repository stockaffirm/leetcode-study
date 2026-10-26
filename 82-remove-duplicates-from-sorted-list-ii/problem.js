window.PROBLEM = {
 "id": "82",
 "title": "Remove Duplicates from Sorted List II",
 "level": "Medium",
 "topic": "Linked List",
 "question": "You have a sorted linked list. Delete EVERY value that appears more than once — not just the extra copies, but all of them — so only values that appeared exactly once remain. Return the list. Example: 1→2→3→3→4→4→5 → 1→2→5.",
 "why": "1→2→3→3→4→4→5 → 1→2→5.",
 "idea": "Use a previous pointer; when a value repeats, skip all its copies.",
 "input": "1→2→3→3→4→4→5",
 "output": "1→2→5",
 "notes": [],
 "best": "Use a previous pointer; when a value repeats, skip all its copies.",
 "variants": [
  {
   "name": "Dummy + skip duplicates",
   "code": "class Solution:\n    def deleteDuplicates(self, head):\n        dummy = prev = ListNode(0, head); cur = head\n        while cur:\n            if cur.next and cur.val == cur.next.val:\n                while cur.next and cur.val == cur.next.val: cur = cur.next\n                prev.next = cur.next\n            else: prev = prev.next\n            cur = cur.next\n        return dummy.next",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Use a previous pointer; when a value repeats, skip all its copies.",
   "frames": [
    {
     "title": "Start",
     "description": "Walk with prev and cur.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "list",
       "cells": [
        "1",
        "2",
        "3",
        "3",
        "4",
        "4",
        "5"
       ],
       "hot": [
        0
       ],
       "marks": {
        "0": "cur"
       },
       "kind": "list"
      }
     ]
    },
    {
     "title": "1, 2",
     "description": "Unique → prev moves along.",
     "codeLines": [
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "list",
       "cells": [
        "1",
        "2",
        "3",
        "3",
        "4",
        "4",
        "5"
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
     "title": "3, 3",
     "description": "Repeat → skip both 3s.",
     "codeLines": [
      6,
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "list",
       "cells": [
        "1",
        "2",
        "3",
        "3",
        "4",
        "4",
        "5"
       ],
       "hot": [
        2,
        3
       ],
       "marks": {},
       "kind": "list"
      }
     ],
     "sub": [
      {
       "description": "cur = 3 and the next node is also 3 → a duplicate!",
       "codeLines": [
        5
       ],
       "facts": {},
       "rows": [
        {
         "name": "list",
         "cells": [
          "1",
          "2",
          "3",
          "3",
          "4",
          "4",
          "5"
         ],
         "hot": [
          2,
          3
         ],
         "marks": {
          "1": "prev",
          "2": "cur"
         },
         "kind": "list"
        }
       ]
      },
      {
       "description": "move cur forward while the next value is the same → cur is the second 3",
       "codeLines": [
        6
       ],
       "facts": {},
       "rows": [
        {
         "name": "list",
         "cells": [
          "1",
          "2",
          "3",
          "3",
          "4",
          "4",
          "5"
         ],
         "hot": [
          2,
          3
         ],
         "marks": {
          "1": "prev",
          "3": "cur"
         },
         "kind": "list"
        }
       ]
      },
      {
       "description": "prev.next = cur.next → both 3s are skipped",
       "codeLines": [
        7
       ],
       "facts": {},
       "rows": [
        {
         "name": "list",
         "cells": [
          "1",
          "2",
          "4",
          "4",
          "5"
         ],
         "hot": [
          1
         ],
         "marks": {
          "1": "prev"
         },
         "kind": "list"
        }
       ]
      }
     ]
    },
    {
     "title": "4, 4",
     "description": "Repeat → skip both 4s.",
     "codeLines": [
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "list",
       "cells": [
        "1",
        "2",
        "4",
        "4",
        "5"
       ],
       "hot": [
        2,
        3
       ],
       "marks": {},
       "kind": "list"
      }
     ],
     "sub": [
      {
       "description": "cur = 4 and the next node is also 4 → duplicate",
       "codeLines": [
        5
       ],
       "facts": {},
       "rows": [
        {
         "name": "list",
         "cells": [
          "1",
          "2",
          "4",
          "4",
          "5"
         ],
         "hot": [
          2,
          3
         ],
         "marks": {
          "1": "prev",
          "2": "cur"
         },
         "kind": "list"
        }
       ]
      },
      {
       "description": "cur moves to the second 4",
       "codeLines": [
        6
       ],
       "facts": {},
       "rows": [
        {
         "name": "list",
         "cells": [
          "1",
          "2",
          "4",
          "4",
          "5"
         ],
         "hot": [
          2,
          3
         ],
         "marks": {
          "1": "prev",
          "3": "cur"
         },
         "kind": "list"
        }
       ]
      },
      {
       "description": "prev.next = cur.next → both 4s are skipped",
       "codeLines": [
        7
       ],
       "facts": {},
       "rows": [
        {
         "name": "list",
         "cells": [
          "1",
          "2",
          "5"
         ],
         "hot": [
          1
         ],
         "marks": {
          "1": "prev"
         },
         "kind": "list"
        }
       ]
      }
     ]
    },
    {
     "title": "Return",
     "description": "5 is unique and stays.",
     "codeLines": [
      10
     ],
     "facts": {},
     "rows": [
      {
       "name": "list",
       "cells": [
        "1",
        "2",
        "5"
       ],
       "hot": [
        0,
        1,
        2
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
   "name": "Count values, keep the unique ones",
   "tag": "Alternative",
   "code": "class Solution:\n    def deleteDuplicates(self, head):\n        cnt = Counter(); cur = head\n        while cur: cnt[cur.val] += 1; cur = cur.next\n        dummy = tail = ListNode(); cur = head\n        while cur:\n            if cnt[cur.val] == 1: tail.next = cur; tail = cur\n            cur = cur.next\n        tail.next = None\n        return dummy.next",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Count each value first, then relink only nodes whose count is 1.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Recursion",
   "tag": "Alternative",
   "code": "class Solution:\n    def deleteDuplicates(self, head):\n        if not head or not head.next: return head\n        if head.val != head.next.val:\n            head.next = self.deleteDuplicates(head.next); return head\n        while head.next and head.val == head.next.val: head = head.next\n        return self.deleteDuplicates(head.next)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "If the head repeats, skip the whole run; otherwise keep it and recurse.",
   "frames": [],
   "alt": true
  }
 ]
};
