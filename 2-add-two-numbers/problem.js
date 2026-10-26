window.PROBLEM = {
 "id": "2",
 "title": "Add Two Numbers",
 "level": "Medium",
 "topic": "Linked List",
 "question": "Two non-negative numbers are stored as linked lists (chains of nodes), one digit per node, with the digits in REVERSE order (the first node is the ones place). Add the two numbers and return the sum as a linked list in the same format. Example: 2→4→3 is 342 and 5→6→4 is 465; 342 + 465 = 807 → 7→0→8.",
 "why": "2→4→3 is 342, 5→6→4 is 465 → 807, stored as 7→0→8.",
 "idea": "Add digit by digit like on paper, carrying over.",
 "input": "2→4→3 and 5→6→4",
 "output": "7 → 0 → 8",
 "notes": [],
 "best": "Add digit by digit like on paper, carrying over.",
 "variants": [
  {
   "name": "Digit-by-digit with carry",
   "code": "class Solution:\n    def addTwoNumbers(self, l1, l2):\n        dummy = cur = ListNode(); carry = 0\n        while l1 or l2 or carry:\n            s = (l1.val if l1 else 0) + (l2.val if l2 else 0) + carry\n            carry, d = divmod(s, 10)\n            cur.next = ListNode(d); cur = cur.next\n            l1 = l1.next if l1 else None; l2 = l2.next if l2 else None\n        return dummy.next",
   "time": "O(max(n,m))",
   "space": "O(max(n,m))",
   "explain": "Add digit by digit like on paper, carrying over.",
   "frames": [
    {
     "title": "Start",
     "description": "Add digits from the least significant end.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "l1",
       "cells": [
        "2",
        "4",
        "3"
       ],
       "hot": [],
       "marks": {},
       "kind": "list"
      },
      {
       "name": "l2",
       "cells": [
        "5",
        "6",
        "4"
       ],
       "hot": [],
       "marks": {},
       "kind": "list"
      },
      {
       "name": "sum",
       "cells": [
        "·"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "2 + 5",
     "description": "= 7, carry 0.",
     "codeLines": [
      5,
      6
     ],
     "facts": {
      "carry": 0
     },
     "rows": [
      {
       "name": "l1",
       "cells": [
        "2",
        "4",
        "3"
       ],
       "hot": [
        0
       ],
       "marks": {},
       "kind": "list"
      },
      {
       "name": "l2",
       "cells": [
        "5",
        "6",
        "4"
       ],
       "hot": [
        0
       ],
       "marks": {},
       "kind": "list"
      },
      {
       "name": "sum",
       "cells": [
        "7"
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
     "title": "4 + 6",
     "description": "= 10 → digit 0, carry 1.",
     "codeLines": [
      6
     ],
     "facts": {
      "carry": 1
     },
     "rows": [
      {
       "name": "l1",
       "cells": [
        "2",
        "4",
        "3"
       ],
       "hot": [
        1
       ],
       "marks": {},
       "kind": "list"
      },
      {
       "name": "l2",
       "cells": [
        "5",
        "6",
        "4"
       ],
       "hot": [
        1
       ],
       "marks": {},
       "kind": "list"
      },
      {
       "name": "sum",
       "cells": [
        "7",
        "0"
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
     "title": "3 + 4 + carry 1",
     "description": "= 8, carry 0.",
     "codeLines": [
      6
     ],
     "facts": {
      "carry": 0
     },
     "rows": [
      {
       "name": "l1",
       "cells": [
        "2",
        "4",
        "3"
       ],
       "hot": [
        2
       ],
       "marks": {},
       "kind": "list"
      },
      {
       "name": "l2",
       "cells": [
        "5",
        "6",
        "4"
       ],
       "hot": [
        2
       ],
       "marks": {},
       "kind": "list"
      },
      {
       "name": "sum",
       "cells": [
        "7",
        "0",
        "8"
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
     "title": "Return",
     "description": "7 → 0 → 8 (807).",
     "codeLines": [
      9
     ],
     "facts": {},
     "rows": [
      {
       "name": "answer",
       "cells": [
        "7",
        "0",
        "8"
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
   "name": "Convert to integers",
   "tag": "Alternative",
   "code": "class Solution:\n    def addTwoNumbers(self, l1, l2):\n        def toint(n):\n            v, mul = 0, 1\n            while n: v += n.val * mul; mul *= 10; n = n.next\n            return v\n        total = toint(l1) + toint(l2)\n        if total == 0: return ListNode(0)\n        dummy = cur = ListNode()\n        while total:\n            cur.next = ListNode(total % 10); cur = cur.next; total //= 10\n        return dummy.next",
   "time": "O(n+m)",
   "space": "O(n+m)",
   "explain": "Turn each list into a number, add, and turn the sum back into a list.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Recursion",
   "tag": "Alternative",
   "code": "class Solution:\n    def addTwoNumbers(self, l1, l2, carry=0):\n        if not l1 and not l2 and not carry: return None\n        s = (l1.val if l1 else 0) + (l2.val if l2 else 0) + carry\n        node = ListNode(s % 10)\n        node.next = self.addTwoNumbers(l1.next if l1 else None, l2.next if l2 else None, s // 10)\n        return node",
   "time": "O(max(n,m))",
   "space": "O(max(n,m))",
   "explain": "Each call adds one digit pair and recurses on the rest with the carry.",
   "frames": [],
   "alt": true
  }
 ]
};
