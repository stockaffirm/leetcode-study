window.PROBLEM = {
 "id": "190",
 "title": "Reverse Bits",
 "level": "Easy",
 "topic": "Bit Manipulation",
 "question": "Write a non-negative whole number as 32 binary digits (bits, each 0 or 1), reverse the order of those 32 digits, and return the number that the reversed digits make. Example (shown with only 8 digits to keep it short): 00001011 reversed is 11010000. The real task uses 32 digits, e.g. 00000010100101000001111010011100 → 00111001011110000010100101000000.",
 "why": "(Shown with 8 bits.) 00001011 reversed is 11010000.",
 "idea": "Repeat: take the last bit of n and push it onto the end of the result.",
 "input": "00001011 (shown as 8 bits)",
 "output": "11010000",
 "notes": [],
 "best": "Repeat: take the last bit of n and push it onto the end of the result.",
 "variants": [
  {
   "name": "Shift bits one by one",
   "code": "class Solution:\n    def reverseBits(self, n):\n        res = 0\n        for _ in range(32):\n            res = (res << 1) | (n & 1)\n            n >>= 1\n        return res",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Repeat: take the last bit of n and push it onto the end of the result.",
   "frames": [
    {
     "title": "Start",
     "description": "n = 00001011, result = 0.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "n",
       "cells": [
        "0",
        "0",
        "0",
        "0",
        "1",
        "0",
        "1",
        "1"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "result",
       "cells": [
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "0"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Step 1",
     "description": "Last bit of n is 1 → result gets 1.",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "n",
       "cells": [
        "0",
        "0",
        "0",
        "0",
        "0",
        "1",
        "0",
        "1"
       ],
       "hot": [
        7
       ],
       "marks": {}
      },
      {
       "name": "result",
       "cells": [
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "1"
       ],
       "hot": [
        7
       ],
       "marks": {}
      }
     ],
     "sub": [
      {
       "description": "n[4] = 0",
       "codeLines": [
        5
       ],
       "facts": {},
       "rows": [
        {
         "name": "n",
         "cells": [
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "1",
          "1"
         ],
         "hot": [
          4
         ],
         "marks": {}
        },
        {
         "name": "result",
         "cells": [
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "1"
         ],
         "hot": [
          7
         ],
         "marks": {}
        }
       ]
      },
      {
       "description": "n[5] = 1",
       "codeLines": [
        5
       ],
       "facts": {},
       "rows": [
        {
         "name": "n",
         "cells": [
          "0",
          "0",
          "0",
          "0",
          "0",
          "1",
          "1",
          "1"
         ],
         "hot": [
          5
         ],
         "marks": {}
        },
        {
         "name": "result",
         "cells": [
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "1"
         ],
         "hot": [
          7
         ],
         "marks": {}
        }
       ]
      },
      {
       "description": "n[6] = 0. Last bit of n is 1 → result gets 1.",
       "codeLines": [
        5
       ],
       "facts": {},
       "rows": [
        {
         "name": "n",
         "cells": [
          "0",
          "0",
          "0",
          "0",
          "0",
          "1",
          "0",
          "1"
         ],
         "hot": [
          6
         ],
         "marks": {}
        },
        {
         "name": "result",
         "cells": [
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "1"
         ],
         "hot": [
          7
         ],
         "marks": {}
        }
       ]
      }
     ]
    },
    {
     "title": "Step 2",
     "description": "Last bit 1 → result 11.",
     "codeLines": [
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "n",
       "cells": [
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "1",
        "0"
       ],
       "hot": [
        7
       ],
       "marks": {}
      },
      {
       "name": "result",
       "cells": [
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "1",
        "1"
       ],
       "hot": [
        6,
        7
       ],
       "marks": {}
      }
     ],
     "sub": [
      {
       "description": "n[5] = 0",
       "codeLines": [
        6
       ],
       "facts": {},
       "rows": [
        {
         "name": "n",
         "cells": [
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "1"
         ],
         "hot": [
          5
         ],
         "marks": {}
        },
        {
         "name": "result",
         "cells": [
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "1",
          "1"
         ],
         "hot": [
          6,
          7
         ],
         "marks": {}
        }
       ]
      },
      {
       "description": "n[6] = 1",
       "codeLines": [
        6
       ],
       "facts": {},
       "rows": [
        {
         "name": "n",
         "cells": [
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "1",
          "1"
         ],
         "hot": [
          6
         ],
         "marks": {}
        },
        {
         "name": "result",
         "cells": [
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "1",
          "1"
         ],
         "hot": [
          6,
          7
         ],
         "marks": {}
        }
       ]
      },
      {
       "description": "n[7] = 0. Last bit 1 → result 11.",
       "codeLines": [
        6
       ],
       "facts": {},
       "rows": [
        {
         "name": "n",
         "cells": [
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "1",
          "0"
         ],
         "hot": [
          7
         ],
         "marks": {}
        },
        {
         "name": "result",
         "cells": [
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "1",
          "1"
         ],
         "hot": [
          6,
          7
         ],
         "marks": {}
        }
       ]
      }
     ]
    },
    {
     "title": "Step 3",
     "description": "Last bit 0 → result 110.",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "n",
       "cells": [
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "1"
       ],
       "hot": [
        7
       ],
       "marks": {}
      },
      {
       "name": "result",
       "cells": [
        "0",
        "0",
        "0",
        "0",
        "0",
        "1",
        "1",
        "0"
       ],
       "hot": [
        5,
        6,
        7
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Finish",
     "description": "After all bits: 11010000.",
     "codeLines": [
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "result",
       "cells": [
        "1",
        "1",
        "0",
        "1",
        "0",
        "0",
        "0",
        "0"
       ],
       "hot": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
       ],
       "marks": {}
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "String reverse",
   "tag": "Pythonic",
   "code": "class Solution:\n    def reverseBits(self, n):\n        return int(format(n, '032b')[::-1], 2)",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Write the 32 bits as text, reverse, parse.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Swap bit groups (divide and conquer)",
   "tag": "Alternative",
   "code": "class Solution:\n    def reverseBits(self, n):\n        n = (n >> 16) | ((n << 16) & 0xFFFFFFFF)\n        n = ((n & 0xFF00FF00) >> 8) | ((n & 0x00FF00FF) << 8)\n        n = ((n & 0xF0F0F0F0) >> 4) | ((n & 0x0F0F0F0F) << 4)\n        n = ((n & 0xCCCCCCCC) >> 2) | ((n & 0x33333333) << 2)\n        n = ((n & 0xAAAAAAAA) >> 1) | ((n & 0x55555555) << 1)\n        return n",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Swap halves, then bytes, nibbles, pairs and single bits with masks.",
   "frames": [],
   "alt": true
  }
 ]
};
