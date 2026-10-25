window.PROBLEM = {
 "id": "334",
 "title": "Increasing Triplet Subsequence",
 "level": "Medium",
 "topic": "Greedy",
 "question": "Given a list nums, return true if there are three positions i < j < k such that nums[i] < nums[j] < nums[k] — three numbers in left-to-right order that strictly increase (they don't have to be next to each other). Otherwise return false. Example: [2,1,5,0,4,6] contains 2 < 5 < 6 (or 1 < 4 < 6), so true.",
 "input": "[2, 1, 5, 0, 4, 6]",
 "output": "True",
 "notes": [
  "Indices must increase and values must be strictly increasing, but positions need not be adjacent.",
  "first_num tracks a small first threshold; second_num tracks a small possible middle threshold.",
  "<= is deliberate: duplicates must not count as a strictly increasing triplet.",
  "[2,1,5,0,4,6] has valid triplets (2,5,6), (1,5,6), and (0,4,6).",
  "The task only asks whether a triplet exists; it does not need to return which one."
 ],
 "best": "Greedy keeps improving small thresholds, making a future larger third value easier to find.",
 "variants": [
  {
   "name": "Greedy two thresholds",
   "code": "class Solution:\n    def increasingTriplet(self, nums):\n        first_num = float('inf')\n        second_num = float('inf')\n        for n in nums:\n            if n <= first_num: first_num = n\n            elif n <= second_num: second_num = n\n            else: return True\n        return False",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Greedy keeps improving small thresholds, making a future larger third value easier to find.",
   "frames": [
    {
     "title": "Input",
     "description": "We need indices i<j<k and nums[i]<nums[j]<nums[k].",
     "codeLines": [
      2,
      3,
      4
     ],
     "facts": {},
     "rows": [
      {
       "name": "nums",
       "cells": [
        "2",
        "1",
        "5",
        "0",
        "4",
        "6"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "See 2 and 1",
     "description": "Update first from ∞→2→1.",
     "codeLines": [
      5,
      6
     ],
     "facts": {
      "first": 1,
      "second": "∞"
     },
     "rows": [
      {
       "name": "nums",
       "cells": [
        "2",
        "1",
        "5",
        "0",
        "4",
        "6"
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
     "title": "See 5",
     "description": "5 is greater than first=1; set second=5.",
     "codeLines": [
      7
     ],
     "facts": {
      "first": 1,
      "second": 5
     },
     "rows": [
      {
       "name": "nums",
       "cells": [
        "2",
        "1",
        "5",
        "0",
        "4",
        "6"
       ],
       "hot": [
        2
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "See 0",
     "description": "Update first=0, while second remains 5.",
     "codeLines": [
      6
     ],
     "facts": {
      "first": 0,
      "second": 5
     },
     "rows": [
      {
       "name": "nums",
       "cells": [
        "2",
        "1",
        "5",
        "0",
        "4",
        "6"
       ],
       "hot": [
        3
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "See 4",
     "description": "4 is smaller than second=5, so second becomes 4.",
     "codeLines": [
      7
     ],
     "facts": {
      "first": 0,
      "second": 4
     },
     "rows": [
      {
       "name": "nums",
       "cells": [
        "2",
        "1",
        "5",
        "0",
        "4",
        "6"
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
     "title": "See 6: success",
     "description": "6 exceeds both thresholds: triplet 0<4<6. Also 2<5<6 is valid.",
     "codeLines": [
      8
     ],
     "facts": {
      "result": "True"
     },
     "rows": [
      {
       "name": "nums",
       "cells": [
        "2",
        "1",
        "5",
        "0",
        "4",
        "6"
       ],
       "hot": [
        3,
        4,
        5
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
   "code": "class Solution:\n    def increasingTriplet(self, nums):\n        n = len(nums)\n        for i in range(n):\n            for j in range(i + 1, n):\n                if nums[j] <= nums[i]: continue\n                for k in range(j + 1, n):\n                    if nums[k] > nums[j]: return True\n        return False",
   "time": "O(n³)",
   "space": "O(1)",
   "explain": "Try every i < j < k.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Left min / right max arrays",
   "tag": "Better",
   "code": "class Solution:\n    def increasingTriplet(self, nums):\n        n = len(nums)\n        if n < 3: return False\n        left_min = [0] * n; right_max = [0] * n\n        left_min[0] = nums[0]\n        for i in range(1, n): left_min[i] = min(left_min[i-1], nums[i])\n        right_max[-1] = nums[-1]\n        for i in range(n - 2, -1, -1): right_max[i] = max(right_max[i+1], nums[i])\n        return any(left_min[i-1] < nums[i] < right_max[i+1] for i in range(1, n - 1))",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A middle value works if something smaller is on its left and something bigger on its right.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Longest increasing subsequence",
   "tag": "Alternative",
   "code": "class Solution:\n    def increasingTriplet(self, nums):\n        tails = []\n        for x in nums:\n            i = bisect_left(tails, x)\n            if i == len(tails): tails.append(x)\n            else: tails[i] = x\n            if len(tails) >= 3: return True\n        return False",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "Keep the LIS 'tails'; the answer is True once the length reaches 3.",
   "frames": [],
   "alt": true
  }
 ],
 "why": "[2,1,5,0,4,6]: 0, then 4, then 6 keep growing in order → True.",
 "idea": "Track the smallest value and the smallest 'middle' value so far. A number bigger than both proves a triplet."
};
