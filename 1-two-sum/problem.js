window.PROBLEM = {
 "id": "1",
 "title": "Two Sum",
 "level": "Easy",
 "topic": "Hashmap",
 "question": "Given a list of numbers nums and a number target, find the two numbers that add up to target and return their positions (counting from 0). Exactly one answer exists, and you can't use the same position twice. Example: nums=[2,7,11,15], target=9 → 2 + 7 = 9 → positions [0,1].",
 "why": "[2,7,11,15], target 9: 2 + 7 = 9 → positions 0 and 1.",
 "idea": "For each number, check if (target − number) was already seen, using a dictionary.",
 "input": "[2,7,11,15], target=9",
 "output": "[0, 1]",
 "notes": [],
 "best": "For each number, check if (target − number) was already seen, using a dictionary.",
 "variants": [
  {
   "name": "Hash map",
   "code": "class Solution:\n    def twoSum(self, nums, target):\n        seen = {}\n        for i, x in enumerate(nums):\n            if target - x in seen: return [seen[target - x], i]\n            seen[x] = i",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "For each number, check if (target − number) was already seen, using a dictionary.",
   "frames": [
    {
     "title": "Start",
     "description": "seen is empty.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "nums",
       "cells": [
        "2",
        "7",
        "11",
        "15"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "x = 2",
     "description": "Need 7 — not seen yet. Remember 2.",
     "codeLines": [
      5,
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "nums",
       "cells": [
        "2",
        "7",
        "11",
        "15"
       ],
       "hot": [
        0
       ],
       "marks": {}
      },
      {
       "name": "seen",
       "cells": [
        "2→0"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "x = 7",
     "description": "Need 2 — seen at index 0!",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "nums",
       "cells": [
        "2",
        "7",
        "11",
        "15"
       ],
       "hot": [
        0,
        1
       ],
       "marks": {}
      },
      {
       "name": "seen",
       "cells": [
        "2→0"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Return",
     "description": "[0, 1]",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "answer",
       "cells": [
        "0",
        "1"
       ],
       "hot": [
        0,
        1
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
   "code": "class Solution:\n    def twoSum(self, nums, target):\n        for i in range(len(nums)):\n            for j in range(i + 1, len(nums)):\n                if nums[i] + nums[j] == target: return [i, j]",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Try every pair.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Sort + two pointers",
   "tag": "Alternative",
   "code": "class Solution:\n    def twoSum(self, nums, target):\n        pairs = sorted(enumerate(nums), key=lambda p: p[1]); l, r = 0, len(nums) - 1\n        while l < r:\n            s = pairs[l][1] + pairs[r][1]\n            if s == target: return sorted([pairs[l][0], pairs[r][0]])\n            if s < target: l += 1\n            else: r -= 1",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Sort (value, index) pairs and squeeze from both ends.",
   "frames": [],
   "alt": true
  }
 ]
};
