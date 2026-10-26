window.PROBLEM = {
 "id": "108",
 "title": "Convert Sorted Array to Binary Search Tree",
 "level": "Easy",
 "topic": "Divide & Conquer",
 "question": "Given a list of numbers sorted from smallest to largest, build a height-balanced binary search tree from it, and return its root. 'Binary search tree' means every node has everything smaller on its left and everything larger on its right; 'height-balanced' means the two sides of every node differ in height by at most 1. Several answers can be correct, and any valid one is accepted. Example: [-10,-3,0,5,9] → one valid tree has 0 at the top.",
 "why": "[-10,-3,0,5,9] → a tree with 0 at the top.",
 "idea": "Pick the middle element as the root; build the left half and right half the same way.",
 "input": "[-10,-3,0,5,9]",
 "output": "[0,-10,5,null,-3,null,9]",
 "notes": [],
 "best": "Pick the middle element as the root; build the left half and right half the same way.",
 "variants": [
  {
   "name": "Middle element as root",
   "code": "class Solution:\n    def sortedArrayToBST(self, nums):\n        def build(lo, hi):\n            if lo > hi: return None\n            mid = (lo + hi) // 2\n            node = TreeNode(nums[mid])\n            node.left = build(lo, mid - 1); node.right = build(mid + 1, hi)\n            return node\n        return build(0, len(nums) - 1)",
   "time": "O(n)",
   "space": "O(log n)",
   "explain": "Pick the middle element as the root; build the left half and right half the same way.",
   "frames": [
    {
     "title": "Sorted list",
     "description": "The middle (0) becomes the root.",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "nums",
       "cells": [
        "-10",
        "-3",
        "0",
        "5",
        "9"
       ],
       "hot": [
        2
       ],
       "marks": {
        "2": "mid"
       }
      }
     ]
    },
    {
     "title": "Left half",
     "description": "[-10,-3] → root -10 (middle), with -3 on its right.",
     "codeLines": [
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "nums",
       "cells": [
        "-10",
        "-3",
        "0",
        "5",
        "9"
       ],
       "hot": [
        0,
        1
       ],
       "marks": {
        "0": "mid"
       }
      }
     ]
    },
    {
     "title": "Right half",
     "description": "[5,9] → root 5, with 9 on its right.",
     "codeLines": [
      7
     ],
     "facts": {},
     "rows": [
      {
       "name": "nums",
       "cells": [
        "-10",
        "-3",
        "0",
        "5",
        "9"
       ],
       "hot": [
        3,
        4
       ],
       "marks": {
        "3": "mid"
       }
      }
     ]
    },
    {
     "title": "Result",
     "description": "Balanced BST.",
     "codeLines": [
      9
     ],
     "facts": {},
     "rows": [
      {
       "name": "level 0",
       "cells": [
        "0"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 1",
       "cells": [
        "-10",
        "5"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "level 2",
       "cells": [
        "·",
        "-3",
        "·",
        "9"
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
   "name": "Recursion with slicing",
   "tag": "Alternative",
   "code": "class Solution:\n    def sortedArrayToBST(self, nums):\n        if not nums: return None\n        mid = (len(nums) - 1) // 2\n        return TreeNode(nums[mid], self.sortedArrayToBST(nums[:mid]), self.sortedArrayToBST(nums[mid + 1:]))",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Take the middle element and recurse on the two slices.",
   "frames": [],
   "alt": true
  }
 ]
};
