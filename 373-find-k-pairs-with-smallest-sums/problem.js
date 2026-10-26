window.PROBLEM = {
 "id": "373",
 "title": "Find K Pairs with Smallest Sums",
 "level": "Medium",
 "topic": "Heap",
 "question": "You have two lists of numbers, each sorted from smallest to largest. A pair takes one number from the first list and one from the second. Return the k pairs with the SMALLEST sums (sum of the two numbers). Example: nums1=[1,7,11], nums2=[2,4,6], k=3 → [[1,2],[1,4],[1,6]].",
 "why": "[1,7,11] and [2,4,6], k = 3 → (1,2), (1,4), (1,6).",
 "idea": "A min-heap of candidate pairs; after taking (i, j), push the next pair (i, j+1).",
 "input": "nums1=[1,7,11], nums2=[2,4,6], k=3",
 "output": "[[1,2],[1,4],[1,6]]",
 "notes": [],
 "best": "A min-heap of candidate pairs; after taking (i, j), push the next pair (i, j+1).",
 "variants": [
  {
   "name": "Min-heap of candidate pairs",
   "code": "class Solution:\n    def kSmallestPairs(self, nums1, nums2, k):\n        heap = [(nums1[i] + nums2[0], i, 0) for i in range(min(k, len(nums1)))]; heapify(heap)\n        res = []\n        while heap and len(res) < k:\n            s, i, j = heappop(heap)\n            res.append([nums1[i], nums2[j]])\n            if j + 1 < len(nums2): heappush(heap, (nums1[i] + nums2[j+1], i, j + 1))\n        return res",
   "time": "O(k log k)",
   "space": "O(k)",
   "explain": "A min-heap of candidate pairs; after taking (i, j), push the next pair (i, j+1).",
   "frames": [
    {
     "title": "Start",
     "description": "Pair each nums1 value with the first of nums2: sums 3, 9, 13.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "heap (sum)",
       "cells": [
        "3",
        "9",
        "13"
       ],
       "hot": [
        0
       ],
       "marks": {}
      },
      {
       "name": "result",
       "cells": [
        "·"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Pop (1,2)",
     "description": "Smallest sum 3. Push the next pair for 1: (1,4) = 5.",
     "codeLines": [
      7,
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "heap (sum)",
       "cells": [
        "5",
        "9",
        "13"
       ],
       "hot": [
        0
       ],
       "marks": {}
      },
      {
       "name": "result",
       "cells": [
        "[1,2]"
       ],
       "hot": [
        0
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Pop (1,4)",
     "description": "Sum 5. Push (1,6) = 7.",
     "codeLines": [
      7,
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "heap (sum)",
       "cells": [
        "7",
        "9",
        "13"
       ],
       "hot": [
        0
       ],
       "marks": {}
      },
      {
       "name": "result",
       "cells": [
        "[1,2]",
        "[1,4]"
       ],
       "hot": [
        1
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Pop (1,6)",
     "description": "Sum 7 → we have k = 3 pairs.",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "result",
       "cells": [
        "[1,2]",
        "[1,4]",
        "[1,6]"
       ],
       "hot": [
        2
       ],
       "marks": {}
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "All pairs, sorted",
   "tag": "Brute force",
   "code": "class Solution:\n    def kSmallestPairs(self, nums1, nums2, k):\n        pairs = sorted(((a, b) for a in nums1 for b in nums2), key=lambda p: p[0] + p[1])\n        return [list(p) for p in pairs[:k]]",
   "time": "O(nm log nm)",
   "space": "O(nm)",
   "explain": "Build every pair and sort by sum.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Heap with a visited set",
   "tag": "Alternative",
   "code": "class Solution:\n    def kSmallestPairs(self, nums1, nums2, k):\n        heap = [(nums1[0] + nums2[0], 0, 0)]; seen = {(0, 0)}; res = []\n        while heap and len(res) < k:\n            s, i, j = heappop(heap); res.append([nums1[i], nums2[j]])\n            if i + 1 < len(nums1) and (i + 1, j) not in seen:\n                seen.add((i + 1, j)); heappush(heap, (nums1[i + 1] + nums2[j], i + 1, j))\n            if j + 1 < len(nums2) and (i, j + 1) not in seen:\n                seen.add((i, j + 1)); heappush(heap, (nums1[i] + nums2[j + 1], i, j + 1))\n        return res",
   "time": "O(k log k)",
   "space": "O(k)",
   "explain": "Start at (0,0) and expand to (i+1,j) and (i,j+1), avoiding repeats.",
   "frames": [],
   "alt": true
  }
 ]
};
