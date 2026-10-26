window.PROBLEM = {
 "id": "875",
 "title": "Koko Eating Bananas",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "There are piles of bananas, piles[i] bananas in pile i, and h hours before the guards return. Koko picks a speed k (bananas per hour). Each hour she chooses one pile and eats up to k bananas from it (if the pile has fewer than k, she finishes it and wastes the rest of the hour). Return the smallest integer k that lets her eat all bananas within h hours. Example: piles=[3,6,7,11], h=8 → k=4 takes 1+2+2+3 = 8 hours.",
 "input": "piles=[3,6,7,11], h=8",
 "output": "4",
 "notes": [
  "hours(k) = Σ ceil(pile / k).",
  "Feasibility is monotonic in k."
 ],
 "best": "Binary search on the answer: faster speed always works if a slower one does.",
 "variants": [
  {
   "name": "Binary search on speed",
   "code": "class Solution:\n    def minEatingSpeed(self, piles, h):\n        lo, hi = 1, max(piles)\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if sum(ceil(p / mid) for p in piles) <= h: hi = mid\n            else: lo = mid + 1\n        return lo",
   "time": "O(n log max)",
   "space": "O(1)",
   "explain": "Binary search the answer (speed), not an index.",
   "frames": [
    {
     "title": "Speeds",
     "description": "Speed is between 1 and the biggest pile (11).",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "speed",
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
        "10",
        "11"
       ],
       "hot": [],
       "marks": {
        "0": "lo",
        "10": "hi"
       }
      }
     ]
    },
    {
     "title": "mid = 6",
     "description": "Hours needed = 6 ≤ 8 → try slower",
     "codeLines": [
      5,
      6
     ],
     "facts": {
      "hours": 6
     },
     "rows": [
      {
       "name": "speed",
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
        "10",
        "11"
       ],
       "hot": [
        5
       ],
       "marks": {
        "0": "lo",
        "5": "mid",
        "10": "hi"
       }
      }
     ]
    },
    {
     "title": "mid = 3",
     "description": "Hours needed = 10 > 8 → need faster",
     "codeLines": [
      5,
      7
     ],
     "facts": {
      "hours": 10
     },
     "rows": [
      {
       "name": "speed",
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
        "10",
        "11"
       ],
       "hot": [
        2
       ],
       "marks": {
        "0": "lo",
        "2": "mid",
        "5": "hi"
       }
      }
     ]
    },
    {
     "title": "mid = 5",
     "description": "Hours needed = 8 ≤ 8 → try slower",
     "codeLines": [
      5,
      6
     ],
     "facts": {
      "hours": 8
     },
     "rows": [
      {
       "name": "speed",
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
        "10",
        "11"
       ],
       "hot": [
        4
       ],
       "marks": {
        "3": "lo",
        "4": "mid",
        "5": "hi"
       }
      }
     ]
    },
    {
     "title": "mid = 4",
     "description": "Hours needed = 8 ≤ 8 → try slower",
     "codeLines": [
      5,
      6
     ],
     "facts": {
      "hours": 8
     },
     "rows": [
      {
       "name": "speed",
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
        "10",
        "11"
       ],
       "hot": [
        3
       ],
       "marks": {
        "3": "lo,mid",
        "4": "hi"
       }
      }
     ]
    },
    {
     "title": "Return",
     "description": "Minimum speed = 4.",
     "codeLines": [
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "speed",
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
        "10",
        "11"
       ],
       "hot": [
        3
       ],
       "marks": {
        "3": "answer"
       }
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "Try every speed",
   "tag": "Brute force",
   "code": "class Solution:\n    def minEatingSpeed(self, piles, h):\n        for k in range(1, max(piles) + 1):\n            if sum((p + k - 1) // k for p in piles) <= h: return k",
   "time": "O(n·max)",
   "space": "O(1)",
   "explain": "Check speeds 1, 2, 3 … until she finishes in time.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Binary search (lo ≤ hi)",
   "tag": "Alternative",
   "code": "class Solution:\n    def minEatingSpeed(self, piles, h):\n        lo, hi, ans = 1, max(piles), max(piles)\n        while lo <= hi:\n            mid = (lo + hi) // 2\n            if sum((p + mid - 1) // mid for p in piles) <= h: ans = mid; hi = mid - 1\n            else: lo = mid + 1\n        return ans",
   "time": "O(n log max)",
   "space": "O(1)",
   "explain": "Same idea with the inclusive-bounds template.",
   "frames": [],
   "alt": true
  }
 ],
 "why": "k = 4 needs 1+2+2+3 = 8 hours (allowed). k = 3 needs 10 hours (too slow) → 4.",
 "idea": "Binary search on the speed."
};
