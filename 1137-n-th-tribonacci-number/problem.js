window.PROBLEM = {
 "id": "1137",
 "title": "N-th Tribonacci Number",
 "level": "Easy",
 "topic": "DP - 1D",
 "question": "The Tribonacci sequence is defined by T0 = 0, T1 = 1, T2 = 1, and Tn = T(n−1) + T(n−2) + T(n−3) for n ≥ 3. Given n, return Tn. Example: n=4 → T3 = 0+1+1 = 2, T4 = 1+1+2 = 4.",
 "input": "n = 4",
 "output": "4",
 "notes": [
  "Only the previous three terms matter.",
  "n = 1 and n = 2 both return 1."
 ],
 "best": "Rolling three variables instead of an array.",
 "variants": [
  {
   "name": "Rolling three values",
   "code": "class Solution:\n    def tribonacci(self, n):\n        if n == 0: return 0\n        a, b, c = 0, 1, 1\n        for _ in range(n - 2):\n            a, b, c = b, c, a + b + c\n        return c",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Keep only the last three values.",
   "frames": [
    {
     "title": "Base",
     "description": "T0=0, T1=1, T2=1.",
     "codeLines": [
      4
     ],
     "facts": {},
     "rows": [
      {
       "name": "T",
       "cells": [
        "0",
        "1",
        "1"
       ],
       "hot": [
        0,
        1,
        2
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Step 1",
     "description": "T3 = 0 + 1 + 1 = 2.",
     "codeLines": [
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "T",
       "cells": [
        "0",
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
     "title": "Step 2",
     "description": "T4 = 1 + 1 + 2 = 4.",
     "codeLines": [
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "T",
       "cells": [
        "0",
        "1",
        "1",
        "2",
        "4"
       ],
       "hot": [
        4
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Return",
     "description": "T4 = 4",
     "codeLines": [
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "answer",
       "cells": [
        "4"
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
   "code": "class Solution:\n    def tribonacci(self, n):\n        dp = [0, 1, 1] + [0] * max(0, n - 2)\n        for i in range(3, n + 1): dp[i] = dp[i-1] + dp[i-2] + dp[i-3]\n        return dp[n]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Fill a table where each entry is the sum of the previous three.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Recursion + memo",
   "tag": "Alternative",
   "code": "class Solution:\n    def tribonacci(self, n):\n        memo = {0: 0, 1: 1, 2: 1}\n        def t(k):\n            if k not in memo: memo[k] = t(k - 1) + t(k - 2) + t(k - 3)\n            return memo[k]\n        return t(n)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Recurse top-down and remember answers already computed.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Plain recursion",
   "tag": "Brute force",
   "code": "class Solution:\n    def tribonacci(self, n):\n        if n == 0: return 0\n        if n <= 2: return 1\n        return self.tribonacci(n - 1) + self.tribonacci(n - 2) + self.tribonacci(n - 3)",
   "time": "O(3ⁿ)",
   "space": "O(n)",
   "explain": "Follow the definition directly — it recomputes the same values many times.",
   "frames": [],
   "alt": true
  }
 ],
 "why": "The sequence goes 0, 1, 1, 2, 4. So T4 = 4.",
 "idea": "Keep only the last 3 values."
};
