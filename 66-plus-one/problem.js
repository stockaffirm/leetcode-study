window.PROBLEM = {
 "id": "66",
 "title": "Plus One",
 "level": "Easy",
 "topic": "Math",
 "question": "A large number is stored as a list of its digits, most significant digit first. Add 1 to it and return the digits of the result. Example: [1,2,9] means 129; plus one is 130 → [1,3,0]. And [9,9] → [1,0,0].",
 "why": "[1,2,9] means 129 → 130 → [1,3,0].",
 "idea": "From the right: a 9 becomes 0 and carries; the first non-9 digit gets +1.",
 "input": "[1,2,9]",
 "output": "[1,3,0]",
 "notes": [],
 "best": "From the right: a 9 becomes 0 and carries; the first non-9 digit gets +1.",
 "variants": [
  {
   "name": "Carry from the right",
   "code": "class Solution:\n    def plusOne(self, digits):\n        for i in range(len(digits) - 1, -1, -1):\n            if digits[i] < 9:\n                digits[i] += 1; return digits\n            digits[i] = 0\n        return [1] + digits",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "From the right: a 9 becomes 0 and carries; the first non-9 digit gets +1.",
   "frames": [
    {
     "title": "Start",
     "description": "Look at the last digit.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "digits",
       "cells": [
        "1",
        "2",
        "9"
       ],
       "hot": [
        2
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "9 → 0",
     "description": "9 can't grow → set to 0 and carry.",
     "codeLines": [
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "digits",
       "cells": [
        "1",
        "2",
        "0"
       ],
       "hot": [
        2
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "2 → 3",
     "description": "2 < 9 → add 1 and stop.",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "digits",
       "cells": [
        "1",
        "3",
        "0"
       ],
       "hot": [
        1
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Return",
     "description": "[1, 3, 0]",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "answer",
       "cells": [
        "1",
        "3",
        "0"
       ],
       "hot": [
        0,
        1,
        2
       ],
       "marks": {}
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "Convert to an integer",
   "tag": "Alternative",
   "code": "class Solution:\n    def plusOne(self, digits):\n        n = int(''.join(map(str, digits))) + 1\n        return [int(c) for c in str(n)]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Join the digits, add 1, split again.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Explicit carry",
   "tag": "Alternative",
   "code": "class Solution:\n    def plusOne(self, digits):\n        carry = 1\n        for i in range(len(digits) - 1, -1, -1):\n            s = digits[i] + carry; digits[i] = s % 10; carry = s // 10\n        return [1] + digits if carry else digits",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Add 1 with a carry flowing from the right.",
   "frames": [],
   "alt": true
  }
 ]
};
