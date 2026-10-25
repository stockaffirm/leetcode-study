window.PROBLEM = {
 "id": "328",
 "title": "Odd Even Linked List",
 "level": "Medium",
 "topic": "Linked List",
 "question": "Given the head of a singly linked list, group all nodes at ODD positions (1st, 3rd, 5th … counting from 1) first, followed by all nodes at EVEN positions, keeping the original relative order inside each group. Do it in place with O(1) extra space and O(n) (time grows only in step with the input size) time, and return the head. Example: 1→2→3→4→5 → 1→3→5→2→4.",
 "input": "1 → 2 → 3 → 4 → 5",
 "output": "1 → 3 → 5 → 2 → 4",
 "notes": [
  "Keep evenHead to reattach later.",
  "Loop while even and even.next exist."
 ],
 "best": "Build the odd and even chains in one pass, then join them.",
 "variants": [
  {
   "name": "Odd and even chains",
   "code": "class Solution:\n    def oddEvenList(self, head):\n        if not head: return head\n        odd, even, evenHead = head, head.next, head.next\n        while even and even.next:\n            odd.next = even.next; odd = odd.next\n            even.next = odd.next; even = even.next\n        odd.next = evenHead\n        return head",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Weave two chains, then attach even after odd.",
   "frames": [
    {
     "title": "Input",
     "description": "Positions 1,3,5 are odd; 2,4 are even.",
     "codeLines": [
      2
     ],
     "facts": {},
     "rows": [
      {
       "name": "list",
       "cells": [
        "1",
        "2",
        "3",
        "4",
        "5"
       ],
       "hot": [
        0,
        2,
        4
       ],
       "marks": {},
       "kind": "list"
      }
     ]
    },
    {
     "title": "Two heads",
     "description": "odd = 1, even = evenHead = 2.",
     "codeLines": [
      4
     ],
     "facts": {},
     "rows": [
      {
       "name": "odd chain",
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
       "name": "even chain",
       "cells": [
        "2"
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
     "title": "Round 1",
     "description": "odd takes 3; even takes 4.",
     "codeLines": [
      6,
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "odd chain",
       "cells": [
        "1",
        "3"
       ],
       "hot": [
        1
       ],
       "marks": {},
       "kind": "list"
      },
      {
       "name": "even chain",
       "cells": [
        "2",
        "4"
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
     "title": "Round 2",
     "description": "odd takes 5; even.next is None → stop.",
     "codeLines": [
      6,
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "odd chain",
       "cells": [
        "1",
        "3",
        "5"
       ],
       "hot": [
        2
       ],
       "marks": {},
       "kind": "list"
      },
      {
       "name": "even chain",
       "cells": [
        "2",
        "4"
       ],
       "hot": [],
       "marks": {},
       "kind": "list"
      }
     ]
    },
    {
     "title": "Connect",
     "description": "odd tail → evenHead.",
     "codeLines": [
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "result",
       "cells": [
        "1",
        "3",
        "5",
        "2",
        "4"
       ],
       "hot": [
        3,
        4
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
   "name": "Two dummy lists",
   "tag": "Alternative",
   "code": "class Solution:\n    def oddEvenList(self, head):\n        od = o = ListNode(); ev = e = ListNode(); i = 1\n        while head:\n            if i % 2: o.next = head; o = o.next\n            else: e.next = head; e = e.next\n            head = head.next; i += 1\n        e.next = None; o.next = ev.next\n        return od.next",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Send nodes to an odd list or an even list by position, then join.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Rebuild from values",
   "tag": "Brute force",
   "code": "class Solution:\n    def oddEvenList(self, head):\n        vals, cur = [], head\n        while cur: vals.append(cur.val); cur = cur.next\n        vals = vals[0::2] + vals[1::2]\n        dummy = cur = ListNode()\n        for v in vals: cur.next = ListNode(v); cur = cur.next\n        return dummy.next",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Copy values, reorder them as odd-then-even, and rebuild the list.",
   "frames": [],
   "alt": true
  }
 ],
 "why": "1,2,3,4,5 → odd positions 1,3,5 first, then even positions 2,4 → 1,3,5,2,4.",
 "idea": "Build two chains (odd and even) and join them."
};
