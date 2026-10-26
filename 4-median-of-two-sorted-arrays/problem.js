window.PROBLEM = {
 "id": "4",
 "title": "Median of Two Sorted Arrays",
 "level": "Hard",
 "topic": "Binary Search",
 "question": "You have two sorted lists of numbers, nums1 and nums2. Return the median of all the numbers together: the middle value, or the average of the two middle values when the total count is even. Aim for O(log(m+n)) (very fast: the work shrinks to a tiny fraction of the input size) time. Example: [1,3] and [2] → merged [1,2,3] → median 2.0.",
 "why": "[1,3] and [2]: merged is 1,2,3 → median 2.",
 "idea": "Binary search how many items to take from the smaller list so the left half and right half are balanced.",
 "input": "A=[1,3], B=[2]",
 "output": "2.0",
 "notes": [],
 "best": "Binary search how many items to take from the smaller list so the left half and right half are balanced.",
 "variants": [
  {
   "name": "Partition binary search",
   "code": "class Solution:\n    def findMedianSortedArrays(self, A, B):\n        if len(A) > len(B): A, B = B, A\n        m, n, half = len(A), len(B), (len(A) + len(B) + 1) // 2\n        lo, hi = 0, m\n        while lo <= hi:\n            i = (lo + hi) // 2; j = half - i\n            a_left = A[i-1] if i else float('-inf'); a_right = A[i] if i < m else float('inf')\n            b_left = B[j-1] if j else float('-inf'); b_right = B[j] if j < n else float('inf')\n            if a_left <= b_right and b_left <= a_right:\n                if (m + n) % 2: return max(a_left, b_left)\n                return (max(a_left, b_left) + min(a_right, b_right)) / 2\n            if a_left > b_right: hi = i - 1\n            else: lo = i + 1",
   "time": "O(log min(m,n))",
   "space": "O(1)",
   "explain": "Binary search how many items to take from the smaller list so the left half and right half are balanced.",
   "frames": [
    {
     "title": "Smaller list first",
     "description": "A = [2] (smaller), B = [1,3]. Left half should have 2 items in total.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "A",
       "cells": [
        "2"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "B",
       "cells": [
        "1",
        "3"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Try taking 0 from A",
     "description": "Left = [] + [1,3]; right = [2]. 3 > 2 → not balanced → take more from A.",
     "codeLines": [
      10,
      14
     ],
     "facts": {},
     "rows": [
      {
       "name": "left",
       "cells": [
        "B: 1",
        "B: 3"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "right",
       "cells": [
        "A: 2"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Take 1 from A",
     "description": "Left = [2] + [1]; right = [3]. Every left ≤ every right ✓.",
     "codeLines": [
      10
     ],
     "facts": {},
     "rows": [
      {
       "name": "left",
       "cells": [
        "A: 2",
        "B: 1"
       ],
       "hot": [
        0,
        1
       ],
       "marks": {}
      },
      {
       "name": "right",
       "cells": [
        "B: 3"
       ],
       "hot": [
        0
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Median",
     "description": "Odd total → the biggest of the left side = 2.",
     "codeLines": [
      11
     ],
     "facts": {},
     "rows": [
      {
       "name": "answer",
       "cells": [
        "2.0"
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
   "name": "Merge and take the middle",
   "tag": "Brute force",
   "code": "class Solution:\n    def findMedianSortedArrays(self, A, B):\n        merged = sorted(A + B); n = len(merged)\n        return float(merged[n // 2]) if n % 2 else (merged[n // 2 - 1] + merged[n // 2]) / 2",
   "time": "O((m+n) log(m+n))",
   "space": "O(m+n)",
   "explain": "Merge both lists, sort, and read the median.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Two pointers until the middle",
   "tag": "Alternative",
   "code": "class Solution:\n    def findMedianSortedArrays(self, A, B):\n        n = len(A) + len(B); i = j = 0; prev = cur = 0\n        for _ in range(n // 2 + 1):\n            prev = cur\n            if i < len(A) and (j >= len(B) or A[i] <= B[j]): cur = A[i]; i += 1\n            else: cur = B[j]; j += 1\n        return cur if n % 2 else (prev + cur) / 2",
   "time": "O(m+n)",
   "space": "O(1)",
   "explain": "Walk both arrays like a merge, stopping at the median position.",
   "frames": [],
   "alt": true
  }
 ]
};
