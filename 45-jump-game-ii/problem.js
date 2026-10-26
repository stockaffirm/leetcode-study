window.PROBLEM = {
 "id": "45",
 "title": "Jump Game II",
 "level": "Medium",
 "topic": "Array / String",
 "question": "Same jump rule as Jump Game: each number in nums is the farthest you can jump forward from that position, you start at the first position, and the last position is always reachable. Return the FEWEST jumps needed to reach the last position. Example: [2,3,1,1,4] → jump 1 step, then 3 steps → 2 jumps.",
 "why": "[2,3,1,1,4]: jump 0→1 (1 jump), then 1→4 (2 jumps) → 2.",
 "idea": "Think in 'waves': when you reach the end of the current wave, take a jump to the farthest spot seen.",
 "input": "[2,3,1,1,4]",
 "output": "2",
 "notes": [],
 "best": "Think in 'waves': when you reach the end of the current wave, take a jump to the farthest spot seen.",
 "variants": [
  {
   "name": "Greedy: jump waves",
   "code": "class Solution:\n    def jump(self, nums):\n        jumps = cur_end = far = 0\n        for i in range(len(nums) - 1):\n            far = max(far, i + nums[i])\n            if i == cur_end:\n                jumps += 1; cur_end = far\n        return jumps",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Think in 'waves': when you reach the end of the current wave, take a jump to the farthest spot seen.",
   "frames": [
    {
     "title": "Start",
     "description": "No jumps yet.",
     "codeLines": [
      3
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
        0
       ],
       "marks": {
        "0": "end"
       }
      }
     ]
    },
    {
     "title": "i = 0",
     "description": "farthest = 2 · end of wave → jump! next wave ends at 2",
     "codeLines": [
      5,
      7
     ],
     "facts": {
      "jumps": 1,
      "far": 2
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
        0
       ],
       "marks": {
        "0": "i",
        "2": "end"
       }
      }
     ]
    },
    {
     "title": "i = 1",
     "description": "farthest = 4",
     "codeLines": [
      5
     ],
     "facts": {
      "jumps": 1,
      "far": 4
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
        1
       ],
       "marks": {
        "1": "i",
        "2": "end"
       }
      }
     ]
    },
    {
     "title": "i = 2",
     "description": "farthest = 4 · end of wave → jump! next wave ends at 4",
     "codeLines": [
      5,
      7
     ],
     "facts": {
      "jumps": 2,
      "far": 4
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
        2
       ],
       "marks": {
        "2": "i",
        "4": "end"
       }
      }
     ]
    },
    {
     "title": "i = 3",
     "description": "farthest = 4",
     "codeLines": [
      5
     ],
     "facts": {
      "jumps": 2,
      "far": 4
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
        3
       ],
       "marks": {
        "3": "i",
        "4": "end"
       }
      }
     ]
    },
    {
     "title": "Return",
     "description": "2 jumps.",
     "codeLines": [
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "answer",
       "cells": [
        "2"
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
   "name": "DP",
   "tag": "Brute force",
   "code": "class Solution:\n    def jump(self, nums):\n        n = len(nums); dp = [float('inf')] * n; dp[0] = 0\n        for i in range(n):\n            for j in range(i + 1, min(n, i + nums[i] + 1)):\n                dp[j] = min(dp[j], dp[i] + 1)\n        return dp[-1]",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "dp[j] = fewest jumps to reach j.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Backward greedy",
   "tag": "Alternative",
   "code": "class Solution:\n    def jump(self, nums):\n        pos, jumps = len(nums) - 1, 0\n        while pos > 0:\n            for i in range(pos):\n                if i + nums[i] >= pos:\n                    pos = i; jumps += 1; break\n        return jumps",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "From the end, jump to the leftmost index that can reach the current one.",
   "frames": [],
   "alt": true
  }
 ]
};
