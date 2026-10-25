window.PROBLEM = {
 "id": "188",
 "title": "Best Time to Buy and Sell Stock IV",
 "level": "Hard",
 "topic": "Multidimensional DP",
 "question": "prices[i] is a stock's price on day i. You may complete at most k buy-then-sell trades, and you must sell before you buy again. Return the maximum profit. Example: k=2, prices=[3,2,6,5,0,3] → buy at 2 sell at 6 (4), buy at 0 sell at 3 (3) → 7.",
 "why": "k = 2, prices [3,2,6,5,0,3]: buy 2 sell 6 (+4), buy 0 sell 3 (+3) → 7.",
 "idea": "Like the two-trade version, but keep buy[t] and sell[t] for every trade count t up to k.",
 "input": "k=2, prices=[3,2,6,5,0,3]",
 "output": "7",
 "notes": [],
 "best": "Like the two-trade version, but keep buy[t] and sell[t] for every trade count t up to k.",
 "variants": [
  {
   "name": "Buy / sell per trade count",
   "code": "class Solution:\n    def maxProfit(self, k, prices):\n        buy = [float('-inf')] * (k + 1); sell = [0] * (k + 1)\n        for p in prices:\n            for t in range(1, k + 1):\n                buy[t] = max(buy[t], sell[t-1] - p)\n                sell[t] = max(sell[t], buy[t] + p)\n        return sell[k]",
   "time": "O(n·k)",
   "space": "O(k)",
   "explain": "Like the two-trade version, but keep buy[t] and sell[t] for every trade count t up to k.",
   "frames": [
    {
     "title": "Start",
     "description": "sell[t] = best profit with t trades.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "prices",
       "cells": [
        "3",
        "2",
        "6",
        "5",
        "0",
        "3"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "sell",
       "cells": [
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
     "title": "Day 0 (price 3)",
     "description": "sell[1] = 0, sell[2] = 0",
     "codeLines": [
      6,
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "prices",
       "cells": [
        "3",
        "2",
        "6",
        "5",
        "0",
        "3"
       ],
       "hot": [
        0
       ],
       "marks": {}
      },
      {
       "name": "sell",
       "cells": [
        "0",
        "0",
        "0"
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
     "title": "Day 1 (price 2)",
     "description": "sell[1] = 0, sell[2] = 0",
     "codeLines": [
      6,
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "prices",
       "cells": [
        "3",
        "2",
        "6",
        "5",
        "0",
        "3"
       ],
       "hot": [
        1
       ],
       "marks": {}
      },
      {
       "name": "sell",
       "cells": [
        "0",
        "0",
        "0"
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
     "title": "Day 2 (price 6)",
     "description": "sell[1] = 4, sell[2] = 4",
     "codeLines": [
      6,
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "prices",
       "cells": [
        "3",
        "2",
        "6",
        "5",
        "0",
        "3"
       ],
       "hot": [
        2
       ],
       "marks": {}
      },
      {
       "name": "sell",
       "cells": [
        "0",
        "4",
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
     "title": "Day 3 (price 5)",
     "description": "sell[1] = 4, sell[2] = 4",
     "codeLines": [
      6,
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "prices",
       "cells": [
        "3",
        "2",
        "6",
        "5",
        "0",
        "3"
       ],
       "hot": [
        3
       ],
       "marks": {}
      },
      {
       "name": "sell",
       "cells": [
        "0",
        "4",
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
     "title": "Day 4 (price 0)",
     "description": "sell[1] = 4, sell[2] = 4",
     "codeLines": [
      6,
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "prices",
       "cells": [
        "3",
        "2",
        "6",
        "5",
        "0",
        "3"
       ],
       "hot": [
        4
       ],
       "marks": {}
      },
      {
       "name": "sell",
       "cells": [
        "0",
        "4",
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
     "title": "Day 5 (price 3)",
     "description": "sell[1] = 4, sell[2] = 7",
     "codeLines": [
      6,
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "prices",
       "cells": [
        "3",
        "2",
        "6",
        "5",
        "0",
        "3"
       ],
       "hot": [
        5
       ],
       "marks": {}
      },
      {
       "name": "sell",
       "cells": [
        "0",
        "4",
        "7"
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
     "title": "Return",
     "description": "sell[2] = 7.",
     "codeLines": [
      8
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
   "name": "DP table dp[trades][day]",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxProfit(self, k, prices):\n        if not prices: return 0\n        n = len(prices); dp = [[0] * n for _ in range(k + 1)]\n        for t in range(1, k + 1):\n            best = -prices[0]\n            for d in range(1, n):\n                dp[t][d] = max(dp[t][d - 1], prices[d] + best)\n                best = max(best, dp[t - 1][d] - prices[d])\n        return dp[k][-1]",
   "time": "O(n·k)",
   "space": "O(n·k)",
   "explain": "dp[t][d] = best profit with t trades by day d.",
   "frames": [],
   "alt": true
  }
 ]
};
