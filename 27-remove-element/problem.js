window.PROBLEM = {
 "id": "27",
 "title": "Remove Element",
 "level": "Easy",
 "topic": "Array / String",
 "question": "You have a list of numbers nums and a number val. Remove every copy of val from the list by changing the list itself (not making a new one): move all the other numbers to the front, in any order you like. Return k, how many numbers are left. Only the first k slots are checked; what sits after them doesn't matter. Example: nums=[3,2,2,3], val=3 → k=2 and the list starts with [2,2].",
 "why": "[3,2,2,3], val = 3 → keep 2,2 → return 2.",
 "idea": "One pointer reads, another writes: copy only the values you want to keep.",
 "input": "nums=[3,2,2,3], val=3",
 "output": "2 → [2,2,_,_]",
 "notes": [],
 "best": "One pointer reads, another writes: copy only the values you want to keep.",
 "variants": [
  {
   "name": "Read / write pointers",
   "code": "class Solution:\n    def removeElement(self, nums, val):\n        k = 0\n        for x in nums:\n            if x != val:\n                nums[k] = x; k += 1\n        return k",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "One pointer reads, another writes: copy only the values you want to keep.",
   "frames": [
    {
     "title": "Start",
     "description": "k = next free slot.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "nums",
       "cells": [
        "3",
        "2",
        "2",
        "3"
       ],
       "hot": [],
       "marks": {
        "0": "k"
       }
      }
     ]
    },
    {
     "title": "x = 3",
     "description": "Equals val → skip.",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "nums",
       "cells": [
        "3",
        "2",
        "2",
        "3"
       ],
       "hot": [],
       "marks": {
        "0": "k,read"
       }
      }
     ]
    },
    {
     "title": "x = 2",
     "description": "Not 3 → keep it at k.",
     "codeLines": [
      5,
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "nums",
       "cells": [
        "2",
        "2",
        "2",
        "3"
       ],
       "hot": [
        0
       ],
       "marks": {
        "1": "k,read"
       }
      }
     ]
    },
    {
     "title": "x = 2",
     "description": "Not 3 → keep it at k.",
     "codeLines": [
      5,
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "nums",
       "cells": [
        "2",
        "2",
        "2",
        "3"
       ],
       "hot": [
        1
       ],
       "marks": {
        "2": "k,read"
       }
      }
     ]
    },
    {
     "title": "x = 3",
     "description": "Equals val → skip.",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "nums",
       "cells": [
        "2",
        "2",
        "2",
        "3"
       ],
       "hot": [],
       "marks": {
        "2": "k",
        "3": "read"
       }
      }
     ]
    },
    {
     "title": "Return",
     "description": "First k = 2 slots hold the answer.",
     "codeLines": [
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "nums",
       "cells": [
        "2",
        "2"
       ],
       "hot": [
        0,
        1
       ],
       "marks": {}
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "Swap with the last element",
   "tag": "Alternative",
   "code": "class Solution:\n    def removeElement(self, nums, val):\n        i, n = 0, len(nums)\n        while i < n:\n            if nums[i] == val:\n                nums[i] = nums[n - 1]; n -= 1\n            else: i += 1\n        return n",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Overwrite each unwanted value with the current last element.",
   "frames": [],
   "alt": true
  }
 ]
};
