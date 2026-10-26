window.PROBLEM = {
 "id": "2130",
 "title": "Maximum Twin Sum of a Linked List",
 "level": "Medium",
 "topic": "Linked List",
 "question": "In a linked list with an even number of nodes n, the node at index i (from 0) and the node at index n−1−i are twins, for 0 ≤ i < n/2. The twin sum is the sum of the two values. Return the maximum twin sum. Example: 4→2→2→3 → twins are (4,3) and (2,2), sums 7 and 4, so the answer is 7.",
 "input": "4 → 2 → 2 → 3",
 "output": "7",
 "notes": [
  "Twins: index i and n-1-i.",
  "Only n/2 pairs to check."
 ],
 "best": "Array copy is simplest; reversing the second half gives O(1) space.",
 "variants": [
  {
   "name": "Array copy + pairs",
   "code": "class Solution:\n    def pairSum(self, head):\n        vals = []\n        while head:\n            vals.append(head.val); head = head.next\n        return max(vals[i] + vals[-1 - i] for i in range(len(vals) // 2))",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Copy to an array, then pair ends inward.",
   "frames": [
    {
     "title": "List",
     "description": "Walk the list and copy values.",
     "codeLines": [
      3,
      4
     ],
     "facts": {},
     "rows": [
      {
       "name": "vals",
       "cells": [
        "4",
        "2",
        "2",
        "3"
       ],
       "hot": [],
       "marks": {},
       "kind": "list"
      }
     ]
    },
    {
     "title": "Pair 0",
     "description": "4 + 3 = 7",
     "codeLines": [
      6
     ],
     "facts": {
      "sum": 7
     },
     "rows": [
      {
       "name": "vals",
       "cells": [
        "4",
        "2",
        "2",
        "3"
       ],
       "hot": [
        0,
        3
       ],
       "marks": {
        "0": "i",
        "3": "twin"
       }
      }
     ]
    },
    {
     "title": "Pair 1",
     "description": "2 + 2 = 4",
     "codeLines": [
      6
     ],
     "facts": {
      "sum": 4,
      "max": 7
     },
     "rows": [
      {
       "name": "vals",
       "cells": [
        "4",
        "2",
        "2",
        "3"
       ],
       "hot": [
        1,
        2
       ],
       "marks": {
        "1": "i",
        "2": "twin"
       }
      }
     ]
    },
    {
     "title": "Return",
     "description": "Largest twin sum = 7.",
     "codeLines": [
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "answer",
       "cells": [
        "7"
       ],
       "hot": [
        0
       ],
       "marks": {}
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "Reverse the second half",
   "tag": "Optimal space",
   "code": "class Solution:\n    def pairSum(self, head):\n        slow = fast = head\n        while fast and fast.next: slow, fast = slow.next, fast.next.next\n        prev = None\n        while slow:\n            nxt = slow.next; slow.next = prev; prev = slow; slow = nxt\n        best, a, b = 0, head, prev\n        while b:\n            best = max(best, a.val + b.val); a, b = a.next, b.next\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Reverse the back half in place, then walk both halves together.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Stack for the first half",
   "tag": "Alternative",
   "code": "class Solution:\n    def pairSum(self, head):\n        st, slow, fast = [], head, head\n        while fast and fast.next:\n            st.append(slow.val); slow = slow.next; fast = fast.next.next\n        best = 0\n        while slow:\n            best = max(best, st.pop() + slow.val); slow = slow.next\n        return best",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Push the first half, then pop while walking the second half.",
   "frames": [],
   "alt": true
  }
 ],
 "why": "4→2→2→3: twins are (4,3) = 7 and (2,2) = 4. The biggest is 7.",
 "idea": "Copy the values to an array and pair them from both ends."
};
