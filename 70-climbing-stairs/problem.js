window.PROBLEM = {
 "id": "70",
 "title": "Climbing Stairs",
 "level": "Easy",
 "topic": "1D DP",
 "question": "You climb a staircase with n steps. Each time you may climb 1 or 2 steps. Return the number of distinct ways to reach the top. Example: n=5 → 8 ways (for n=3 the ways are 1+1+1, 1+2, 2+1).",
 "why": "n = 5 → 8 ways.",
 "idea": "Ways(n) = Ways(n−1) + Ways(n−2) — it's the Fibonacci sequence.",
 "input": "n = 5",
 "output": "8",
 "notes": [],
 "best": "Ways(n) = Ways(n−1) + Ways(n−2) — it's the Fibonacci sequence.",
 "variants": [
  {
   "name": "Rolling Fibonacci",
   "code": "class Solution:\n    def climbStairs(self, n):\n        a, b = 1, 1\n        for _ in range(n - 1): a, b = b, a + b\n        return b",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Ways(n) = Ways(n−1) + Ways(n−2) — it's the Fibonacci sequence.",
   "frames": [
    {
     "title": "Start",
     "description": "1 way to be on step 0, and 1 way to reach step 1.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "ways",
       "cells": [
        "1",
        "1"
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
     "title": "Step 2",
     "description": "1 + 1 = 2",
     "codeLines": [
      4
     ],
     "facts": {},
     "rows": [
      {
       "name": "ways",
       "cells": [
        "1",
        "1",
        "2"
       ],
       "hot": [
        2
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Step 3",
     "description": "1 + 2 = 3",
     "codeLines": [
      4
     ],
     "facts": {},
     "rows": [
      {
       "name": "ways",
       "cells": [
        "1",
        "1",
        "2",
        "3"
       ],
       "hot": [
        3
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Step 4",
     "description": "2 + 3 = 5",
     "codeLines": [
      4
     ],
     "facts": {},
     "rows": [
      {
       "name": "ways",
       "cells": [
        "1",
        "1",
        "2",
        "3",
        "5"
       ],
       "hot": [
        4
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Step 5",
     "description": "3 + 5 = 8",
     "codeLines": [
      4
     ],
     "facts": {},
     "rows": [
      {
       "name": "ways",
       "cells": [
        "1",
        "1",
        "2",
        "3",
        "5",
        "8"
       ],
       "hot": [
        5
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Return",
     "description": "8",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "answer",
       "cells": [
        "8"
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
   "name": "DP array",
   "tag": "Alternative",
   "code": "class Solution:\n    def climbStairs(self, n):\n        if n <= 2: return n\n        dp = [0] * (n + 1); dp[1] = 1; dp[2] = 2\n        for i in range(3, n + 1): dp[i] = dp[i - 1] + dp[i - 2]\n        return dp[n]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "dp[i] = dp[i-1] + dp[i-2].",
   "frames": [],
   "alt": true
  },
  {
   "name": "Fibonacci formula (Binet)",
   "tag": "Alternative",
   "code": "class Solution:\n    def climbStairs(self, n):\n        s = sqrt(5)\n        return round((((1 + s) / 2) ** (n + 1)) / s)",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "A closed form using the golden ratio (fine for small n).",
   "frames": [],
   "alt": true
  },
  {
   "name": "Plain recursion",
   "tag": "Brute force",
   "code": "class Solution:\n    def climbStairs(self, n):\n        if n <= 2: return n\n        return self.climbStairs(n - 1) + self.climbStairs(n - 2)",
   "time": "O(2ⁿ)",
   "space": "O(n)",
   "explain": "ways(n) = ways(n-1) + ways(n-2), recomputed many times.",
   "frames": [],
   "alt": true
  }
 ]
};
