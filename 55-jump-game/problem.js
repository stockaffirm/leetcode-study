window.PROBLEM = {
 "id": "55",
 "title": "Jump Game",
 "level": "Medium",
 "topic": "Array / String",
 "question": "Each number in nums tells how far you can jump forward at most from that position. You start at the first position. Can you reach the LAST position? Return true or false. Example: [2,3,1,1,4] → from position 0 jump 1 step to position 1, then jump 3 steps to the end → true. For [3,2,1,0,4] you always get stuck at the 0 → false.",
 "why": "[2,3,1,1,4]: from 0 you can reach 1 or 2; from 1 you can jump up to 4 → the end is reachable → True.",
 "idea": "Track the farthest spot you can reach. If you ever stand beyond it, you're stuck.",
 "input": "[2,3,1,1,4]",
 "output": "True",
 "notes": [],
 "best": "Track the farthest spot you can reach. If you ever stand beyond it, you're stuck.",
 "variants": [
  {
   "name": "Greedy: farthest reach",
   "code": "class Solution:\n    def canJump(self, nums):\n        reach = 0\n        for i, x in enumerate(nums):\n            if i > reach: return False\n            reach = max(reach, i + x)\n        return True",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Track the farthest spot you can reach. If you ever stand beyond it, you're stuck.",
   "frames": [
    {
     "title": "Start",
     "description": "Farthest reachable = 0.",
     "codeLines": [
      3
     ],
     "facts": {
      "reach": 0
     },
     "rows": [
      {
       "name": "nums",
       "cells": [
        "2",
        "3",
        "1",
        "1",
        "4"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "i = 0",
     "description": "From here you can reach up to 2 → farthest = 2.",
     "codeLines": [
      5,
      6
     ],
     "facts": {
      "reach": 2
     },
     "rows": [
      {
       "name": "nums",
       "cells": [
        "2",
        "3",
        "1",
        "1",
        "4"
       ],
       "hot": [
        0,
        1,
        2
       ],
       "marks": {
        "0": "i"
       }
      }
     ]
    },
    {
     "title": "i = 1",
     "description": "From here you can reach up to 4 → farthest = 4.",
     "codeLines": [
      5,
      6
     ],
     "facts": {
      "reach": 4
     },
     "rows": [
      {
       "name": "nums",
       "cells": [
        "2",
        "3",
        "1",
        "1",
        "4"
       ],
       "hot": [
        1,
        2,
        3,
        4
       ],
       "marks": {
        "1": "i"
       }
      }
     ]
    },
    {
     "title": "i = 2",
     "description": "From here you can reach up to 3 → farthest = 4.",
     "codeLines": [
      5,
      6
     ],
     "facts": {
      "reach": 4
     },
     "rows": [
      {
       "name": "nums",
       "cells": [
        "2",
        "3",
        "1",
        "1",
        "4"
       ],
       "hot": [
        2,
        3,
        4
       ],
       "marks": {
        "2": "i"
       }
      }
     ]
    },
    {
     "title": "i = 3",
     "description": "From here you can reach up to 4 → farthest = 4.",
     "codeLines": [
      5,
      6
     ],
     "facts": {
      "reach": 4
     },
     "rows": [
      {
       "name": "nums",
       "cells": [
        "2",
        "3",
        "1",
        "1",
        "4"
       ],
       "hot": [
        3,
        4
       ],
       "marks": {
        "3": "i"
       }
      }
     ]
    },
    {
     "title": "i = 4",
     "description": "From here you can reach up to 8 → farthest = 8.",
     "codeLines": [
      5,
      6
     ],
     "facts": {
      "reach": 8
     },
     "rows": [
      {
       "name": "nums",
       "cells": [
        "2",
        "3",
        "1",
        "1",
        "4"
       ],
       "hot": [
        4
       ],
       "marks": {
        "4": "i"
       }
      }
     ]
    },
    {
     "title": "Return",
     "description": "Farthest 4 ≥ last index → True.",
     "codeLines": [
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "nums",
       "cells": [
        "2",
        "3",
        "1",
        "1",
        "4"
       ],
       "hot": [
        4
       ],
       "marks": {}
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "Backward: last good position",
   "tag": "Alternative",
   "code": "class Solution:\n    def canJump(self, nums):\n        last = len(nums) - 1\n        for i in range(len(nums) - 1, -1, -1):\n            if i + nums[i] >= last: last = i\n        return last == 0",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Move the goal left whenever an earlier index can reach it.",
   "frames": [],
   "alt": true
  },
  {
   "name": "DP",
   "tag": "Brute force",
   "code": "class Solution:\n    def canJump(self, nums):\n        n = len(nums); good = [False] * n; good[-1] = True\n        for i in range(n - 2, -1, -1):\n            good[i] = any(good[j] for j in range(i + 1, min(n, i + nums[i] + 1)))\n        return good[0]",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "good[i] = some index within reach of i is good.",
   "frames": [],
   "alt": true
  }
 ]
};
