window.PROBLEM = {
 "id": "1679",
 "title": "Max Number of K-Sum Pairs",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "Given a list nums and an integer k, you may repeat this operation: pick two numbers in the list that add up to k and remove both. Return the maximum number of operations you can perform. Example: nums=[3,1,3,4,3], k=6 → remove one pair (3,3); the remaining 1, 4, 3 contain no other pair summing to 6, so the answer is 1.",
 "input": "[3, 1, 3, 4, 3], k=6",
 "output": "1",
 "notes": [
  "Sum too small → move left up; too big → move right down.",
  "Each number is used at most once."
 ],
 "best": "Sort + two pointers; a hash-map count gives O(n) if order doesn't matter.",
 "variants": [
  {
   "name": "Sort + two pointers",
   "code": "class Solution:\n    def maxOperations(self, nums, k):\n        nums.sort()\n        l, r, ops = 0, len(nums) - 1, 0\n        while l < r:\n            s = nums[l] + nums[r]\n            if s == k:\n                ops += 1; l += 1; r -= 1\n            elif s < k: l += 1\n            else: r -= 1\n        return ops",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "Sort, then squeeze from both ends.",
   "frames": [
    {
     "title": "Sorted",
     "description": "Sort first: [1,3,3,3,4], k = 6.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "nums",
       "cells": [
        "1",
        "3",
        "3",
        "3",
        "4"
       ],
       "hot": [],
       "marks": {
        "0": "l",
        "4": "r"
       }
      }
     ]
    },
    {
     "title": "sum = 5",
     "description": "1 + 4 < k → move l.",
     "codeLines": [
      6,
      9
     ],
     "facts": {
      "ops": 0
     },
     "rows": [
      {
       "name": "nums",
       "cells": [
        "1",
        "3",
        "3",
        "3",
        "4"
       ],
       "hot": [
        0,
        4
       ],
       "marks": {
        "0": "l",
        "4": "r"
       }
      }
     ]
    },
    {
     "title": "sum = 7",
     "description": "3 + 4 > k → move r.",
     "codeLines": [
      6,
      10
     ],
     "facts": {
      "ops": 0
     },
     "rows": [
      {
       "name": "nums",
       "cells": [
        "1",
        "3",
        "3",
        "3",
        "4"
       ],
       "hot": [
        1,
        4
       ],
       "marks": {
        "1": "l",
        "4": "r"
       }
      }
     ]
    },
    {
     "title": "sum = 6",
     "description": "3 + 3 = k → pair! ops = 1.",
     "codeLines": [
      6,
      8
     ],
     "facts": {
      "ops": 1
     },
     "rows": [
      {
       "name": "nums",
       "cells": [
        "1",
        "3",
        "3",
        "3",
        "4"
       ],
       "hot": [
        1,
        3
       ],
       "marks": {
        "1": "l",
        "3": "r"
       }
      }
     ]
    },
    {
     "title": "Return",
     "description": "l met r.",
     "codeLines": [
      11
     ],
     "facts": {
      "ops": 1
     },
     "rows": [
      {
       "name": "nums",
       "cells": [
        "1",
        "3",
        "3",
        "3",
        "4"
       ],
       "hot": [],
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
   "code": "class Solution:\n    def maxOperations(self, nums, k):\n        used = [False] * len(nums); ops = 0\n        for i in range(len(nums)):\n            for j in range(i + 1, len(nums)):\n                if not used[i] and not used[j] and nums[i] + nums[j] == k:\n                    used[i] = used[j] = True; ops += 1\n        return ops",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Try every pair and mark used numbers.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Hash map counts",
   "tag": "Optimal time",
   "code": "class Solution:\n    def maxOperations(self, nums, k):\n        cnt = Counter(); ops = 0\n        for x in nums:\n            if cnt[k - x] > 0:\n                cnt[k - x] -= 1; ops += 1\n            else:\n                cnt[x] += 1\n        return ops",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Remember unmatched numbers; pair a number with its complement when seen.",
   "frames": [],
   "alt": true
  }
 ],
 "why": "[3,1,3,4,3], k=6: only the two 3s add up to 6. Nothing else pairs → 1 operation.",
 "idea": "Sort first. Then use one pointer at each end."
};
