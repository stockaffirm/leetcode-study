window.PROBLEM = {
 "id": "167",
 "title": "Two Sum II - Input Array Is Sorted",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "numbers is a list of whole numbers sorted from smallest to largest. Find two different numbers that add up to target and return their positions, counting from 1 (smaller position first). Exactly one answer exists. Example: [2,7,11,15], target=9 → 2 + 7 = 9, which are at positions 1 and 2 → [1,2].",
 "why": "[2,7,11,15], target 9: 2 + 7 = 9 → positions 1 and 2.",
 "idea": "Pointers at both ends: sum too small → move left up; too big → move right down.",
 "input": "[2,7,11,15], target=9",
 "output": "[1, 2]",
 "notes": [],
 "best": "Pointers at both ends: sum too small → move left up; too big → move right down.",
 "variants": [
  {
   "name": "Two pointers",
   "code": "class Solution:\n    def twoSum(self, numbers, target):\n        l, r = 0, len(numbers) - 1\n        while l < r:\n            s = numbers[l] + numbers[r]\n            if s == target: return [l + 1, r + 1]\n            if s < target: l += 1\n            else: r -= 1",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Pointers at both ends: sum too small → move left up; too big → move right down.",
   "frames": [
    {
     "title": "Start",
     "description": "Ends of the sorted list.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "numbers",
       "cells": [
        "2",
        "7",
        "11",
        "15"
       ],
       "hot": [],
       "marks": {
        "0": "l",
        "3": "r"
       }
      }
     ]
    },
    {
     "title": "2 + 15 = 17",
     "description": "Too big → move r left.",
     "codeLines": [
      5,
      8
     ],
     "facts": {
      "sum": 17
     },
     "rows": [
      {
       "name": "numbers",
       "cells": [
        "2",
        "7",
        "11",
        "15"
       ],
       "hot": [
        0,
        3
       ],
       "marks": {
        "0": "l",
        "3": "r"
       }
      }
     ]
    },
    {
     "title": "2 + 11 = 13",
     "description": "Too big → move r left.",
     "codeLines": [
      5,
      8
     ],
     "facts": {
      "sum": 13
     },
     "rows": [
      {
       "name": "numbers",
       "cells": [
        "2",
        "7",
        "11",
        "15"
       ],
       "hot": [
        0,
        2
       ],
       "marks": {
        "0": "l",
        "2": "r"
       }
      }
     ]
    },
    {
     "title": "2 + 7 = 9",
     "description": "Equals target → positions 1 and 2.",
     "codeLines": [
      6
     ],
     "facts": {
      "sum": 9
     },
     "rows": [
      {
       "name": "numbers",
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
       "marks": {
        "0": "l",
        "1": "r"
       }
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "Hash map",
   "tag": "Alternative",
   "code": "class Solution:\n    def twoSum(self, numbers, target):\n        seen = {}\n        for i, x in enumerate(numbers):\n            if target - x in seen: return [seen[target - x] + 1, i + 1]\n            seen[x] = i",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Remember each number's index and look up the complement.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Binary search for the complement",
   "tag": "Alternative",
   "code": "class Solution:\n    def twoSum(self, numbers, target):\n        for i in range(len(numbers)):\n            lo, hi, need = i + 1, len(numbers) - 1, target - numbers[i]\n            while lo <= hi:\n                mid = (lo + hi) // 2\n                if numbers[mid] == need: return [i + 1, mid + 1]\n                if numbers[mid] < need: lo = mid + 1\n                else: hi = mid - 1",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "For each number binary-search the rest for target − number.",
   "frames": [],
   "alt": true
  }
 ]
};
