window.PROBLEM = {
 "id": "901",
 "title": "Online Stock Span",
 "level": "Medium",
 "topic": "Monotonic Stack",
 "question": "Design a class StockSpanner. next(price) takes today's price and returns today's span: the number of consecutive days (going backward from today and including today) on which the price was less than or equal to today's price. Example: prices 100, 80, 60, 70, 60, 75, 85 → spans 1, 1, 1, 2, 1, 4, 6.",
 "input": "100, 80, 60, 70, 60, 75, 85",
 "output": "1, 1, 1, 2, 1, 4, 6",
 "notes": [
  "Popped entries are absorbed into the span.",
  "Stack stays strictly decreasing in price."
 ],
 "best": "Monotonic stack of (price, span) pairs.",
 "variants": [
  {
   "name": "Monotonic stack of (price, span)",
   "code": "class StockSpanner:\n    def __init__(self):\n        self.stack = []\n    def next(self, price):\n        span = 1\n        while self.stack and self.stack[-1][0] <= price:\n            span += self.stack.pop()[1]\n        self.stack.append((price, span))\n        return span",
   "time": "O(1) amortised",
   "space": "O(n)",
   "explain": "Merge smaller days into one (price, span) entry.",
   "frames": [
    {
     "title": "Start",
     "description": "Stack of (price, span) pairs.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "prices",
       "cells": [
        "100",
        "80",
        "60",
        "70",
        "60",
        "75",
        "85"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "stack",
       "cells": [
        "·"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "price 100",
     "description": "span = 1",
     "codeLines": [
      6,
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "prices",
       "cells": [
        "100",
        "80",
        "60",
        "70",
        "60",
        "75",
        "85"
       ],
       "hot": [
        0
       ],
       "marks": {}
      },
      {
       "name": "stack (price,span)",
       "cells": [
        "(100,1)"
       ],
       "hot": [
        0
       ],
       "marks": {}
      },
      {
       "name": "spans",
       "cells": [
        "1"
       ],
       "hot": [
        0
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "price 80",
     "description": "span = 1",
     "codeLines": [
      6,
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "prices",
       "cells": [
        "100",
        "80",
        "60",
        "70",
        "60",
        "75",
        "85"
       ],
       "hot": [
        1
       ],
       "marks": {}
      },
      {
       "name": "stack (price,span)",
       "cells": [
        "(100,1)",
        "(80,1)"
       ],
       "hot": [
        1
       ],
       "marks": {}
      },
      {
       "name": "spans",
       "cells": [
        "1",
        "1"
       ],
       "hot": [
        1
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "price 60",
     "description": "span = 1",
     "codeLines": [
      6,
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "prices",
       "cells": [
        "100",
        "80",
        "60",
        "70",
        "60",
        "75",
        "85"
       ],
       "hot": [
        2
       ],
       "marks": {}
      },
      {
       "name": "stack (price,span)",
       "cells": [
        "(100,1)",
        "(80,1)",
        "(60,1)"
       ],
       "hot": [
        2
       ],
       "marks": {}
      },
      {
       "name": "spans",
       "cells": [
        "1",
        "1",
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
     "title": "price 70",
     "description": "span = 2",
     "codeLines": [
      6,
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "prices",
       "cells": [
        "100",
        "80",
        "60",
        "70",
        "60",
        "75",
        "85"
       ],
       "hot": [
        3
       ],
       "marks": {}
      },
      {
       "name": "stack (price,span)",
       "cells": [
        "(100,1)",
        "(80,1)",
        "(70,2)"
       ],
       "hot": [
        2
       ],
       "marks": {}
      },
      {
       "name": "spans",
       "cells": [
        "1",
        "1",
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
     "title": "price 60",
     "description": "span = 1",
     "codeLines": [
      6,
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "prices",
       "cells": [
        "100",
        "80",
        "60",
        "70",
        "60",
        "75",
        "85"
       ],
       "hot": [
        4
       ],
       "marks": {}
      },
      {
       "name": "stack (price,span)",
       "cells": [
        "(100,1)",
        "(80,1)",
        "(70,2)",
        "(60,1)"
       ],
       "hot": [
        3
       ],
       "marks": {}
      },
      {
       "name": "spans",
       "cells": [
        "1",
        "1",
        "1",
        "2",
        "1"
       ],
       "hot": [
        4
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "price 75",
     "description": "span = 4",
     "codeLines": [
      6,
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "prices",
       "cells": [
        "100",
        "80",
        "60",
        "70",
        "60",
        "75",
        "85"
       ],
       "hot": [
        5
       ],
       "marks": {}
      },
      {
       "name": "stack (price,span)",
       "cells": [
        "(100,1)",
        "(80,1)",
        "(75,4)"
       ],
       "hot": [
        2
       ],
       "marks": {}
      },
      {
       "name": "spans",
       "cells": [
        "1",
        "1",
        "1",
        "2",
        "1",
        "4"
       ],
       "hot": [
        5
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "price 85",
     "description": "span = 6",
     "codeLines": [
      6,
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "prices",
       "cells": [
        "100",
        "80",
        "60",
        "70",
        "60",
        "75",
        "85"
       ],
       "hot": [
        6
       ],
       "marks": {}
      },
      {
       "name": "stack (price,span)",
       "cells": [
        "(100,1)",
        "(85,6)"
       ],
       "hot": [
        1
       ],
       "marks": {}
      },
      {
       "name": "spans",
       "cells": [
        "1",
        "1",
        "1",
        "2",
        "1",
        "4",
        "6"
       ],
       "hot": [
        6
       ],
       "marks": {}
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "Scan back through all prices",
   "tag": "Brute force",
   "code": "class StockSpanner:\n    def __init__(self): self.p = []\n    def next(self, price):\n        self.p.append(price); span = 1\n        i = len(self.p) - 2\n        while i >= 0 and self.p[i] <= price:\n            span += 1; i -= 1\n        return span",
   "time": "O(n) per call",
   "space": "O(n)",
   "explain": "Keep every price and count backwards.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Stack of (index, price)",
   "tag": "Alternative",
   "code": "class StockSpanner:\n    def __init__(self): self.st = []; self.i = -1\n    def next(self, price):\n        self.i += 1\n        while self.st and self.st[-1][1] <= price: self.st.pop()\n        span = self.i - (self.st[-1][0] if self.st else -1)\n        self.st.append((self.i, price))\n        return span",
   "time": "O(1) amortised",
   "space": "O(n)",
   "explain": "Pop smaller prices; the span is the distance to the previous bigger one.",
   "frames": [],
   "alt": true
  }
 ],
 "why": "Price 75: the days 60, 70, 60, 75 are all ≤ 75 → span 4. Price 85 → span 6.",
 "idea": "Keep a stack of (price, span) pairs."
};
