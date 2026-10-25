window.PROBLEM = {
 "id": "2095",
 "title": "Delete the Middle Node of a Linked List",
 "level": "Medium",
 "topic": "Linked List",
 "question": "You are given the head of a singly linked list. Delete the middle node and return the head. For a list of n nodes, the middle node is the one at index ⌊n/2⌋ (counting from 0); for example with 7 nodes it's the 4th node, with 2 nodes it's the 2nd. Example: 1→3→4→7→1→2→6 → remove 7 → 1→3→4→1→2→6.",
 "input": "1 → 3 → 4 → 7 → 1 → 2 → 6",
 "output": "1 → 3 → 4 → 1 → 2 → 6",
 "notes": [
  "Starting fast at head.next.next makes slow the node before the middle.",
  "Single-node list returns None."
 ],
 "best": "Slow/fast pointers; start fast one step ahead so slow lands before the middle.",
 "variants": [
  {
   "name": "Slow / fast pointers",
   "code": "class Solution:\n    def deleteMiddle(self, head):\n        if not head.next: return None\n        slow, fast = head, head.next.next\n        while fast and fast.next:\n            slow, fast = slow.next, fast.next.next\n        slow.next = slow.next.next\n        return head",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "fast moves twice as fast; slow stops just before the middle.",
   "frames": [
    {
     "title": "Start",
     "description": "slow at 0, fast at 2.",
     "codeLines": [
      4
     ],
     "facts": {},
     "rows": [
      {
       "name": "list",
       "cells": [
        "1",
        "3",
        "4",
        "7",
        "1",
        "2",
        "6"
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
    },
    {
     "title": "Advance",
     "description": "slow +1, fast +2.",
     "codeLines": [
      5,
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "list",
       "cells": [
        "1",
        "3",
        "4",
        "7",
        "1",
        "2",
        "6"
       ],
       "hot": [
        1
       ],
       "marks": {
        "1": "slow",
        "4": "fast"
       },
       "kind": "list"
      }
     ]
    },
    {
     "title": "Advance",
     "description": "slow +1, fast +2.",
     "codeLines": [
      5,
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "list",
       "cells": [
        "1",
        "3",
        "4",
        "7",
        "1",
        "2",
        "6"
       ],
       "hot": [
        2
       ],
       "marks": {
        "2": "slow",
        "6": "fast"
       },
       "kind": "list"
      }
     ]
    },
    {
     "title": "Unlink",
     "description": "slow.next jumps over the middle (7).",
     "codeLines": [
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "list",
       "cells": [
        "1",
        "3",
        "4",
        "7",
        "1",
        "2",
        "6"
       ],
       "hot": [
        2,
        3
       ],
       "marks": {
        "2": "slow",
        "3": "skip"
       },
       "kind": "list"
      }
     ]
    },
    {
     "title": "Return",
     "description": "Middle removed.",
     "codeLines": [
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "list",
       "cells": [
        "1",
        "3",
        "4",
        "1",
        "2",
        "6"
       ],
       "hot": [],
       "marks": {},
       "kind": "list"
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "Count, then walk",
   "tag": "Alternative",
   "code": "class Solution:\n    def deleteMiddle(self, head):\n        n, cur = 0, head\n        while cur: n += 1; cur = cur.next\n        if n == 1: return None\n        cur = head\n        for _ in range(n // 2 - 1): cur = cur.next\n        cur.next = cur.next.next\n        return head",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Measure the length, then stop at the node before the middle.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Copy to a list and rebuild",
   "tag": "Brute force",
   "code": "class Solution:\n    def deleteMiddle(self, head):\n        vals, cur = [], head\n        while cur: vals.append(cur.val); cur = cur.next\n        vals.pop(len(vals) // 2)\n        dummy = cur = ListNode()\n        for v in vals: cur.next = ListNode(v); cur = cur.next\n        return dummy.next",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Put values in an array, delete the middle one, rebuild the list.",
   "frames": [],
   "alt": true
  }
 ],
 "why": "7 nodes: the middle is the 4th (value 7). Remove it.",
 "idea": "Slow and fast pointers: when fast reaches the end, slow is at the middle."
};
