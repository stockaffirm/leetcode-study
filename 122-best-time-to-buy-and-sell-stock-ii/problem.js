window.PROBLEM = {
 "id": "122",
 "title": "Best Time to Buy and Sell Stock II",
 "level": "Medium",
 "topic": "Array / String",
 "question": "prices[i] is a stock's price on day i. You may buy and sell as many times as you like, but you can hold only one share at a time (sell before buying again). Return the largest total profit. Example: [7,1,5,3,6,4] → buy at 1, sell at 5 (profit 4), then buy at 3, sell at 6 (profit 3) → 7.",
 "why": "[7,1,5,3,6,4]: buy 1 sell 5 (+4), buy 3 sell 6 (+3) → 7.",
 "idea": "Grab every upward step: add up each day's gain when the price rose.",
 "input": "[7,1,5,3,6,4]",
 "output": "7",
 "notes": [],
 "best": "Grab every upward step: add up each day's gain when the price rose.",
 "variants": [
  {
   "name": "Sum every rise",
   "code": "class Solution:\n    def maxProfit(self, prices):\n        profit = 0\n        for i in range(1, len(prices)):\n            if prices[i] > prices[i - 1]:\n                profit += prices[i] - prices[i - 1]\n        return profit",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Grab every upward step: add up each day's gain when the price rose.",
   "frames": [
    {
     "title": "Start",
     "description": "Collect every price rise.",
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
     "title": "Day 1",
     "description": "Down — no trade.",
     "codeLines": [
      5
     ],
     "facts": {
      "profit": 0
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
        0,
        1
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Day 2",
     "description": "Up 1 → 5: +4",
     "codeLines": [
      5,
      6
     ],
     "facts": {
      "profit": 4
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
        1,
        2
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Day 3",
     "description": "Down — no trade.",
     "codeLines": [
      5
     ],
     "facts": {
      "profit": 4
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
        2,
        3
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Day 4",
     "description": "Up 3 → 6: +3",
     "codeLines": [
      5,
      6
     ],
     "facts": {
      "profit": 7
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
        3,
        4
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Day 5",
     "description": "Down — no trade.",
     "codeLines": [
      5
     ],
     "facts": {
      "profit": 7
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
        4,
        5
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Return",
     "description": "Total profit = 7.",
     "codeLines": [
      7
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
   "name": "Valley and peak",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxProfit(self, prices):\n        i, profit = 0, 0\n        while i < len(prices) - 1:\n            while i < len(prices) - 1 and prices[i + 1] <= prices[i]: i += 1\n            buy = prices[i]\n            while i < len(prices) - 1 and prices[i + 1] >= prices[i]: i += 1\n            profit += prices[i] - buy\n        return profit",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Buy at each valley and sell at the next peak.",
   "frames": [],
   "alt": true
  },
  {
   "name": "DP hold / cash",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxProfit(self, prices):\n        hold, cash = -prices[0], 0\n        for p in prices[1:]:\n            hold, cash = max(hold, cash - p), max(cash, hold + p)\n        return cash",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Track the best profit while holding a share and while holding cash.",
   "frames": [],
   "alt": true
  }
 ]
};
