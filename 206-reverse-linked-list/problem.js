window.PROBLEM = {
 "id": "206",
 "title": "Reverse Linked List",
 "level": "Easy",
 "topic": "Linked List",
 "question": "Given the head of a singly linked list, reverse the list (every node's next pointer is turned around) and return the new head. Example: 1→2→3→4→5 becomes 5→4→3→2→1.",
 "input": "1 → 2 → 3 → 4 → 5",
 "output": "5 → 4 → 3 → 2 → 1",
 "notes": [
  "Save next before overwriting curr.next.",
  "prev is the new head at the end."
 ],
 "best": "Iterative three-pointer reversal in O(1) space.",
 "variants": [
  {
   "name": "Iterative pointer flip",
   "code": "class Solution:\n    def reverseList(self, head):\n        prev, curr = None, head\n        while curr:\n            nxt = curr.next\n            curr.next = prev\n            prev, curr = curr, nxt\n        return prev",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Flip one pointer per step.",
   "frames": [
    {
     "title": "Start",
     "description": "prev = None, curr = 1.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "reversed",
       "cells": [
        "·"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "remaining",
       "cells": [
        "1",
        "2",
        "3",
        "4",
        "5"
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
     "title": "Flip 1",
     "description": "Point node 1 back at the reversed part.",
     "codeLines": [
      5,
      6,
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "reversed",
       "cells": [
        "1"
       ],
       "hot": [
        0
       ],
       "marks": {},
       "kind": "list"
      },
      {
       "name": "remaining",
       "cells": [
        "2",
        "3",
        "4",
        "5"
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
     "title": "Flip 2",
     "description": "Point node 2 back at the reversed part.",
     "codeLines": [
      5,
      6,
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "reversed",
       "cells": [
        "2",
        "1"
       ],
       "hot": [
        0
       ],
       "marks": {},
       "kind": "list"
      },
      {
       "name": "remaining",
       "cells": [
        "3",
        "4",
        "5"
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
     "title": "Flip 3",
     "description": "Point node 3 back at the reversed part.",
     "codeLines": [
      5,
      6,
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "reversed",
       "cells": [
        "3",
        "2",
        "1"
       ],
       "hot": [
        0
       ],
       "marks": {},
       "kind": "list"
      },
      {
       "name": "remaining",
       "cells": [
        "4",
        "5"
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
     "title": "Flip 4",
     "description": "Point node 4 back at the reversed part.",
     "codeLines": [
      5,
      6,
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "reversed",
       "cells": [
        "4",
        "3",
        "2",
        "1"
       ],
       "hot": [
        0
       ],
       "marks": {},
       "kind": "list"
      },
      {
       "name": "remaining",
       "cells": [
        "5"
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
     "title": "Flip 5",
     "description": "Point node 5 back at the reversed part.",
     "codeLines": [
      5,
      6,
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "reversed",
       "cells": [
        "5",
        "4",
        "3",
        "2",
        "1"
       ],
       "hot": [
        0
       ],
       "marks": {},
       "kind": "list"
      },
      {
       "name": "remaining",
       "cells": [
        "·"
       ],
       "hot": [],
       "marks": {},
       "kind": "list"
      }
     ]
    },
    {
     "title": "Return",
     "description": "prev is the new head.",
     "codeLines": [
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "result",
       "cells": [
        "5",
        "4",
        "3",
        "2",
        "1"
       ],
       "hot": [
        0
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
   "code": "class Solution:\n    def reverseList(self, head):\n        if not head or not head.next: return head\n        p = self.reverseList(head.next)\n        head.next.next = head; head.next = None\n        return p",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Reverse the rest, then hook the current node behind it.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Stack",
   "tag": "Alternative",
   "code": "class Solution:\n    def reverseList(self, head):\n        st, cur = [], head\n        while cur: st.append(cur); cur = cur.next\n        dummy = cur = ListNode()\n        while st:\n            node = st.pop(); cur.next = node; cur = node\n        cur.next = None\n        return dummy.next",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Push every node, then pop them to rebuild in reverse.",
   "frames": [],
   "alt": true
  }
 ],
 "why": "1→2→3→4→5 becomes 5→4→3→2→1.",
 "idea": "Walk along the list and flip each arrow to point backwards."
};
