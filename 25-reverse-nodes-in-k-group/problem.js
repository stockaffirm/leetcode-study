window.PROBLEM = {
 "id": "25",
 "title": "Reverse Nodes in k-Group",
 "level": "Hard",
 "topic": "Linked List",
 "question": "Given a linked list and a number k, reverse the nodes k at a time and return the new list. If the number of nodes isn't a multiple of k, the last leftover nodes stay in their original order. You may only change links, not node values. Example: 1→2→3→4→5, k=2 → 2→1→4→3→5.",
 "why": "1→2→3→4→5 with k = 2 → 2→1→4→3→5.",
 "idea": "Check that k nodes exist, reverse them, and attach to the result of handling the rest.",
 "input": "1→2→3→4→5, k=2",
 "output": "2→1→4→3→5",
 "notes": [],
 "best": "Check that k nodes exist, reverse them, and attach to the result of handling the rest.",
 "variants": [
  {
   "name": "Recursive groups",
   "code": "class Solution:\n    def reverseKGroup(self, head, k):\n        node, cnt = head, 0\n        while node and cnt < k: node = node.next; cnt += 1\n        if cnt < k: return head\n        prev, cur = self.reverseKGroup(node, k), head\n        for _ in range(k):\n            cur.next, prev, cur = prev, cur, cur.next\n        return prev",
   "time": "O(n)",
   "space": "O(n/k)",
   "explain": "Check that k nodes exist, reverse them, and attach to the result of handling the rest.",
   "frames": [
    {
     "title": "Start",
     "description": "k = 2: groups (1,2), (3,4), and a leftover 5.",
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
        1
       ],
       "marks": {},
       "kind": "list"
      }
     ]
    },
    {
     "title": "Group 1",
     "description": "Reverse 1,2 → 2,1; it attaches to whatever the rest becomes.",
     "codeLines": [
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "list",
       "cells": [
        "2",
        "1",
        "3",
        "4",
        "5"
       ],
       "hot": [
        0,
        1
       ],
       "marks": {},
       "kind": "list"
      }
     ]
    },
    {
     "title": "Group 2",
     "description": "Reverse 3,4 → 4,3.",
     "codeLines": [
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "list",
       "cells": [
        "2",
        "1",
        "4",
        "3",
        "5"
       ],
       "hot": [
        2,
        3
       ],
       "marks": {},
       "kind": "list"
      }
     ]
    },
    {
     "title": "Leftover",
     "description": "Only one node (5) left, fewer than k → unchanged.",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "list",
       "cells": [
        "2",
        "1",
        "4",
        "3",
        "5"
       ],
       "hot": [
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
   "name": "Iterative, group by group",
   "tag": "Optimal space",
   "code": "class Solution:\n    def reverseKGroup(self, head, k):\n        dummy = ListNode(0, head); group_prev = dummy\n        while True:\n            kth = group_prev\n            for _ in range(k):\n                kth = kth.next\n                if not kth: return dummy.next\n            group_next = kth.next; prev, cur = group_next, group_prev.next\n            while cur != group_next:\n                nxt = cur.next; cur.next = prev; prev = cur; cur = nxt\n            tmp = group_prev.next; group_prev.next = kth; group_prev = tmp",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Find the k-th node, reverse that block in place, and move on.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Stack of k nodes",
   "tag": "Alternative",
   "code": "class Solution:\n    def reverseKGroup(self, head, k):\n        dummy = ListNode(); tail = dummy; cur = head\n        while True:\n            st = []; tmp = cur\n            while tmp and len(st) < k: st.append(tmp); tmp = tmp.next\n            if len(st) < k: tail.next = cur; break\n            while st: tail.next = st.pop(); tail = tail.next\n            tail.next = tmp; cur = tmp\n        return dummy.next",
   "time": "O(n)",
   "space": "O(k)",
   "explain": "Push k nodes then pop them to reverse each group.",
   "frames": [],
   "alt": true
  }
 ]
};
