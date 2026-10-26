window.PROBLEM = {
 "id": "121",
 "title": "Best Time to Buy and Sell Stock",
 "level": "Easy",
 "topic": "Array / String",
 "question": "prices[i] is the price of a stock on day i. You may buy on one day and sell on a LATER day, only once. Return the largest profit you can make, or 0 if every choice loses money. Example: [7,1,5,3,6,4] → buy at 1 (day 2), sell at 6 (day 5) → profit 5.",
 "why": "[7,1,5,3,6,4]: buy at 1, sell at 6 → profit 5.",
 "idea": "Track the lowest price so far; profit today = price − lowest.",
 "input": "[7,1,5,3,6,4]",
 "output": "5",
 "notes": [],
 "best": "Track the lowest price so far; profit today = price − lowest.",
 "variants": [
  {
   "name": "Track the lowest price",
   "code": "class Solution:\n    def maxProfit(self, prices):\n        low, best = float('inf'), 0\n        for p in prices:\n            low = min(low, p)\n            best = max(best, p - low)\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Track the lowest price so far; profit today = price − lowest.",
   "frames": [
    {
     "title": "Start",
     "description": "Nothing bought yet.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "prices",
       "cells": [
        "7",
        "1",
        "5",
        "3",
        "6",
        "4"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Day 0 (price 7)",
     "description": "lowest so far 7; profit if sold now 0",
     "codeLines": [
      5,
      6
     ],
     "facts": {
      "best": 0
     },
     "rows": [
      {
       "name": "prices",
       "cells": [
        "7",
        "1",
        "5",
        "3",
        "6",
        "4"
       ],
       "hot": [
        0
       ],
       "marks": {}
      },
      {
       "name": "low",
       "cells": [
        "7"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Day 1 (price 1)",
     "description": "lowest so far 1; profit if sold now 0",
     "codeLines": [
      5,
      6
     ],
     "facts": {
      "best": 0
     },
     "rows": [
      {
       "name": "prices",
       "cells": [
        "7",
        "1",
        "5",
        "3",
        "6",
        "4"
       ],
       "hot": [
        1
       ],
       "marks": {}
      },
      {
       "name": "low",
       "cells": [
        "1"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Day 2 (price 5)",
     "description": "lowest so far 1; profit if sold now 4",
     "codeLines": [
      5,
      6
     ],
     "facts": {
      "best": 4
     },
     "rows": [
      {
       "name": "prices",
       "cells": [
        "7",
        "1",
        "5",
        "3",
        "6",
        "4"
       ],
       "hot": [
        2
       ],
       "marks": {}
      },
      {
       "name": "low",
       "cells": [
        "1"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Day 3 (price 3)",
     "description": "lowest so far 1; profit if sold now 2",
     "codeLines": [
      5,
      6
     ],
     "facts": {
      "best": 4
     },
     "rows": [
      {
       "name": "prices",
       "cells": [
        "7",
        "1",
        "5",
        "3",
        "6",
        "4"
       ],
       "hot": [
        3
       ],
       "marks": {}
      },
      {
       "name": "low",
       "cells": [
        "1"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Day 4 (price 6)",
     "description": "lowest so far 1; profit if sold now 5",
     "codeLines": [
      5,
      6
     ],
     "facts": {
      "best": 5
     },
     "rows": [
      {
       "name": "prices",
       "cells": [
        "7",
        "1",
        "5",
        "3",
        "6",
        "4"
       ],
       "hot": [
        4
       ],
       "marks": {}
      },
      {
       "name": "low",
       "cells": [
        "1"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Day 5 (price 4)",
     "description": "lowest so far 1; profit if sold now 3",
     "codeLines": [
      5,
      6
     ],
     "facts": {
      "best": 5
     },
     "rows": [
      {
       "name": "prices",
       "cells": [
        "7",
        "1",
        "5",
        "3",
        "6",
        "4"
       ],
       "hot": [
        5
       ],
       "marks": {}
      },
      {
       "name": "low",
       "cells": [
        "1"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Return",
     "description": "Best profit = 5.",
     "codeLines": [
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "answer",
       "cells": [
        "5"
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
   "name": "Brute force",
   "tag": "Brute force",
   "code": "class Solution:\n    def maxProfit(self, prices):\n        best = 0\n        for i in range(len(prices)):\n            for j in range(i + 1, len(prices)):\n                best = max(best, prices[j] - prices[i])\n        return best",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Try every buy day and every later sell day.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Kadane on daily changes",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxProfit(self, prices):\n        best = cur = 0\n        for i in range(1, len(prices)):\n            cur = max(0, cur + prices[i] - prices[i - 1])\n            best = max(best, cur)\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The best trade is the best run of consecutive daily changes.",
   "frames": [],
   "alt": true
  }
 ]
};
