window.PROBLEM = {
 "id": "19",
 "title": "Remove Nth Node From End of List",
 "level": "Medium",
 "topic": "Linked List",
 "question": "Given the head of a linked list and a number n, remove the n-th node counting from the END of the list, and return the head. Example: 1→2→3→4→5, n=2 → remove 4 (the second from the end) → 1→2→3→5.",
 "why": "1→2→3→4→5, n = 2 → remove 4 → 1→2→3→5.",
 "idea": "Send fast n steps ahead, then move both until fast is at the end; slow is just before the target.",
 "input": "1→2→3→4→5, n=2",
 "output": "1→2→3→5",
 "notes": [],
 "best": "Send fast n steps ahead, then move both until fast is at the end; slow is just before the target.",
 "variants": [
  {
   "name": "Fast pointer n ahead",
   "code": "class Solution:\n    def removeNthFromEnd(self, head, n):\n        dummy = ListNode(0, head); fast = slow = dummy\n        for _ in range(n): fast = fast.next\n        while fast.next:\n            fast, slow = fast.next, slow.next\n        slow.next = slow.next.next\n        return dummy.next",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Send fast n steps ahead, then move both until fast is at the end; slow is just before the target.",
   "frames": [
    {
     "title": "Start",
     "description": "dummy node D in front; both pointers at D.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "list",
       "cells": [
        "D",
        "1",
        "2",
        "3",
        "4",
        "5"
       ],
       "hot": [
        0
       ],
       "marks": {
        "0": "slow,fast"
       },
       "kind": "list"
      }
     ]
    },
    {
     "title": "Gap of n",
     "description": "fast moves 2 steps ahead.",
     "codeLines": [
      4
     ],
     "facts": {},
     "rows": [
      {
       "name": "list",
       "cells": [
        "D",
        "1",
        "2",
        "3",
        "4",
        "5"
       ],
       "hot": [
        0,
        2
       ],
       "marks": {
        "0": "slow",
        "2": "fast"
       },
       "kind": "list"
      }
     ],
     "sub": [
      {
       "description": "fast moves 1 step",
       "codeLines": [
        4
       ],
       "facts": {},
       "rows": [
        {
         "name": "list",
         "cells": [
          "D",
          "1",
          "2",
          "3",
          "4",
          "5"
         ],
         "hot": [
          0,
          1
         ],
         "marks": {
          "0": "slow",
          "1": "fast"
         },
         "kind": "list"
        }
       ]
      },
      {
       "description": "fast moves 2 steps — the gap is now n = 2",
       "codeLines": [
        4
       ],
       "facts": {},
       "rows": [
        {
         "name": "list",
         "cells": [
          "D",
          "1",
          "2",
          "3",
          "4",
          "5"
         ],
         "hot": [
          0,
          2
         ],
         "marks": {
          "0": "slow",
          "2": "fast"
         },
         "kind": "list"
        }
       ]
      }
     ]
    },
    {
     "title": "Move together",
     "description": "Both advance until fast reaches the last node.",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "list",
       "cells": [
        "D",
        "1",
        "2",
        "3",
        "4",
        "5"
       ],
       "hot": [
        3,
        5
       ],
       "marks": {
        "3": "slow",
        "5": "fast"
       },
       "kind": "list"
      }
     ],
     "sub": [
      {
       "description": "both move one step: slow → 1, fast → 3",
       "codeLines": [
        6
       ],
       "facts": {},
       "rows": [
        {
         "name": "list",
         "cells": [
          "D",
          "1",
          "2",
          "3",
          "4",
          "5"
         ],
         "hot": [
          1,
          3
         ],
         "marks": {
          "1": "slow",
          "3": "fast"
         },
         "kind": "list"
        }
       ]
      },
      {
       "description": "both move one step: slow → 2, fast → 4",
       "codeLines": [
        6
       ],
       "facts": {},
       "rows": [
        {
         "name": "list",
         "cells": [
          "D",
          "1",
          "2",
          "3",
          "4",
          "5"
         ],
         "hot": [
          2,
          4
         ],
         "marks": {
          "2": "slow",
          "4": "fast"
         },
         "kind": "list"
        }
       ]
      },
      {
       "description": "both move one step: slow → 3, fast → 5",
       "codeLines": [
        6
       ],
       "facts": {},
       "rows": [
        {
         "name": "list",
         "cells": [
          "D",
          "1",
          "2",
          "3",
          "4",
          "5"
         ],
         "hot": [
          3,
          5
         ],
         "marks": {
          "3": "slow",
          "5": "fast"
         },
         "kind": "list"
        }
       ]
      },
      {
       "description": "fast.next is None → stop. slow is right before the node to delete",
       "codeLines": [
        5
       ],
       "facts": {},
       "rows": [
        {
         "name": "list",
         "cells": [
          "D",
          "1",
          "2",
          "3",
          "4",
          "5"
         ],
         "hot": [
          3,
          5
         ],
         "marks": {
          "3": "slow",
          "5": "fast"
         },
         "kind": "list"
        }
       ]
      }
     ]
    },
    {
     "title": "Unlink",
     "description": "slow.next (4) is skipped.",
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
        "3",
        "5"
       ],
       "hot": [
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
   "name": "Two passes (count first)",
   "tag": "Alternative",
   "code": "class Solution:\n    def removeNthFromEnd(self, head, n):\n        dummy = ListNode(0, head); size = 0; cur = head\n        while cur: size += 1; cur = cur.next\n        cur = dummy\n        for _ in range(size - n): cur = cur.next\n        cur.next = cur.next.next\n        return dummy.next",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Measure the length, then walk length − n steps.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Stack",
   "tag": "Alternative",
   "code": "class Solution:\n    def removeNthFromEnd(self, head, n):\n        dummy = ListNode(0, head); st = []; cur = dummy\n        while cur: st.append(cur); cur = cur.next\n        for _ in range(n): st.pop()\n        prev = st[-1]\n        prev.next = prev.next.next\n        return dummy.next",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Push all nodes, pop n, and the stack's top is the node before the target.",
   "frames": [],
   "alt": true
  }
 ]
};
