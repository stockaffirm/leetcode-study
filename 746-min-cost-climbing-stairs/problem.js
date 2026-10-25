window.PROBLEM = {
 "id": "746",
 "title": "Min Cost Climbing Stairs",
 "level": "Easy",
 "topic": "DP - 1D",
 "question": "cost[i] is the price you pay when you LEAVE stair i by stepping up from it. You may start on stair 0 or stair 1, and each move climbs one or two stairs. The top is just past the last stair. Return the smallest total price to reach the top. Example: cost=[1,100,1,1,1,100,1] → start on stair 0, go to stairs 2, 4 and 6, then to the top, paying cost[0]+cost[2]+cost[4]+cost[6] = 1+1+1+1 = 4 (skipping the 100s).",
 "input": "[1, 100, 1, 1, 1, 100, 1]",
 "output": "4",
 "notes": [
  "dp[i] = min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2]).",
  "The top is index n, one past the last step."
 ],
 "best": "Two rolling values: cost to reach i-2 and i-1.",
 "variants": [
  {
   "name": "Rolling two values",
   "code": "class Solution:\n    def minCostClimbingStairs(self, cost):\n        a, b = 0, 0\n        for i in range(2, len(cost) + 1):\n            a, b = b, min(b + cost[i-1], a + cost[i-2])\n        return b",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "dp[i] = cheapest way to stand on step i.",
   "frames": [
    {
     "title": "Start",
     "description": "Standing on step 0 or 1 is free.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "cost",
       "cells": [
        "1",
        "100",
        "1",
        "1",
        "1",
        "100",
        "1"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "dp",
       "cells": [
        "0",
        "0"
       ],
       "hot": [
        0,
        1
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "dp[2]",
     "description": "min(0 + 100, 0 + 1) = 1",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "cost",
       "cells": [
        "1",
        "100",
        "1",
        "1",
        "1",
        "100",
        "1"
       ],
       "hot": [
        1,
        0
       ],
       "marks": {}
      },
      {
       "name": "dp",
       "cells": [
        "0",
        "0",
        "1"
       ],
       "hot": [
        2
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "dp[3]",
     "description": "min(1 + 1, 0 + 100) = 2",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "cost",
       "cells": [
        "1",
        "100",
        "1",
        "1",
        "1",
        "100",
        "1"
       ],
       "hot": [
        2,
        1
       ],
       "marks": {}
      },
      {
       "name": "dp",
       "cells": [
        "0",
        "0",
        "1",
        "2"
       ],
       "hot": [
        3
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "dp[4]",
     "description": "min(2 + 1, 1 + 1) = 2",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "cost",
       "cells": [
        "1",
        "100",
        "1",
        "1",
        "1",
        "100",
        "1"
       ],
       "hot": [
        3,
        2
       ],
       "marks": {}
      },
      {
       "name": "dp",
       "cells": [
        "0",
        "0",
        "1",
        "2",
        "2"
       ],
       "hot": [
        4
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "dp[5]",
     "description": "min(2 + 1, 2 + 1) = 3",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "cost",
       "cells": [
        "1",
        "100",
        "1",
        "1",
        "1",
        "100",
        "1"
       ],
       "hot": [
        4,
        3
       ],
       "marks": {}
      },
      {
       "name": "dp",
       "cells": [
        "0",
        "0",
        "1",
        "2",
        "2",
        "3"
       ],
       "hot": [
        5
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "dp[6]",
     "description": "min(3 + 100, 2 + 1) = 3",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "cost",
       "cells": [
        "1",
        "100",
        "1",
        "1",
        "1",
        "100",
        "1"
       ],
       "hot": [
        5,
        4
       ],
       "marks": {}
      },
      {
       "name": "dp",
       "cells": [
        "0",
        "0",
        "1",
        "2",
        "2",
        "3",
        "3"
       ],
       "hot": [
        6
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "dp[7]",
     "description": "min(3 + 1, 3 + 100) = 4",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "cost",
       "cells": [
        "1",
        "100",
        "1",
        "1",
        "1",
        "100",
        "1"
       ],
       "hot": [
        6,
        5
       ],
       "marks": {}
      },
      {
       "name": "dp",
       "cells": [
        "0",
        "0",
        "1",
        "2",
        "2",
        "3",
        "3",
        "4"
       ],
       "hot": [
        7
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Return",
     "description": "dp[7] = 4",
     "codeLines": [
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "dp",
       "cells": [
        "0",
        "0",
        "1",
        "2",
        "2",
        "3",
        "3",
        "4"
       ],
       "hot": [
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
   "name": "DP array",
   "tag": "Alternative",
   "code": "class Solution:\n    def minCostClimbingStairs(self, cost):\n        dp = [0, 0]\n        for i in range(2, len(cost) + 1):\n            dp.append(min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2]))\n        return dp[-1]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "dp[i] = cheapest cost to stand on step i.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Top-down recursion + memo",
   "tag": "Alternative",
   "code": "class Solution:\n    def minCostClimbingStairs(self, cost):\n        memo = {}\n        def go(i):\n            if i <= 1: return 0\n            if i not in memo: memo[i] = min(go(i - 1) + cost[i - 1], go(i - 2) + cost[i - 2])\n            return memo[i]\n        return go(len(cost))",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Ask for the cost to reach the top and recurse downwards.",
   "frames": [],
   "alt": true
  }
 ],
 "why": "[1,100,1,1,1,100,1]: skip over the two 100s and pay 1+1+1+1 = 4.",
 "idea": "Cheapest cost to reach stair i = the better of the previous two stairs."
};
