window.PROBLEM = {
 "id": "374",
 "title": "Guess Number Higher or Lower",
 "level": "Easy",
 "topic": "Binary Search",
 "question": "I pick a number between 1 and n. You must find it by calling guess(num), a function provided by the system that returns -1 if my number is lower than num, 1 if it is higher, and 0 if num is correct. Return the number I picked, using as few guesses as possible. Example: n=10, picked=6 → the best strategy needs only a handful of guesses instead of up to 10.",
 "input": "n = 10, picked = 6",
 "output": "6",
 "notes": [
  "guess(mid) = -1 means the pick is lower than mid.",
  "Each call halves the search space."
 ],
 "best": "Classic binary search on the range 1…n.",
 "variants": [
  {
   "name": "Binary search",
   "code": "class Solution:\n    def guessNumber(self, n):\n        lo, hi = 1, n\n        while lo <= hi:\n            mid = (lo + hi) // 2\n            g = guess(mid)\n            if g == 0: return mid\n            if g < 0: hi = mid - 1\n            else: lo = mid + 1",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "Halve the range each guess.",
   "frames": [
    {
     "title": "Range",
     "description": "Pick is hidden in 1…10.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "n",
       "cells": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10"
       ],
       "hot": [],
       "marks": {
        "0": "lo",
        "9": "hi"
       }
      }
     ]
    },
    {
     "title": "mid = 5",
     "description": "Too low → lo = 6",
     "codeLines": [
      5,
      9
     ],
     "facts": {},
     "rows": [
      {
       "name": "n",
       "cells": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10"
       ],
       "hot": [
        4
       ],
       "marks": {
        "0": "lo",
        "4": "mid",
        "9": "hi"
       }
      }
     ]
    },
    {
     "title": "mid = 8",
     "description": "Too high → hi = 7",
     "codeLines": [
      5,
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "n",
       "cells": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10"
       ],
       "hot": [
        7
       ],
       "marks": {
        "5": "lo",
        "7": "mid",
        "9": "hi"
       }
      }
     ]
    },
    {
     "title": "mid = 6",
     "description": "Correct!",
     "codeLines": [
      5,
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "n",
       "cells": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10"
       ],
       "hot": [
        5
       ],
       "marks": {
        "5": "lo,mid",
        "6": "hi"
       }
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "Linear scan",
   "tag": "Brute force",
   "code": "class Solution:\n    def guessNumber(self, n):\n        for i in range(1, n + 1):\n            if guess(i) == 0: return i",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Guess 1, 2, 3 … until correct.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Ternary search",
   "tag": "Alternative",
   "code": "class Solution:\n    def guessNumber(self, n):\n        lo, hi = 1, n\n        while lo <= hi:\n            m1 = lo + (hi - lo) // 3; m2 = hi - (hi - lo) // 3\n            g1, g2 = guess(m1), guess(m2)\n            if g1 == 0: return m1\n            if g2 == 0: return m2\n            if g1 < 0: hi = m1 - 1\n            elif g2 > 0: lo = m2 + 1\n            else: lo, hi = m1 + 1, m2 - 1",
   "time": "O(log₃ n)",
   "space": "O(1)",
   "explain": "Split the range in three parts with two guesses per round.",
   "frames": [],
   "alt": true
  }
 ],
 "why": "n = 10, my number is 6: guess 5 (too low), guess 8 (too high), guess 6 ✓.",
 "idea": "Binary search: halve the range every guess."
};
