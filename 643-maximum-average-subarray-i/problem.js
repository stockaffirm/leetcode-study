window.PROBLEM = {
 "id": "643",
 "title": "Maximum Average Subarray I",
 "level": "Easy",
 "topic": "Sliding Window",
 "question": "Given a list nums and an integer k, look at every subarray (a run of consecutive numbers) of length exactly k. Return the largest average among them. Example: nums=[1,12,-5,-6,50,3], k=4 → the window 12,-5,-6,50 has sum 51, average 12.75, which is the best.",
 "input": "[1, 12, -5, -6, 50, 3], k=4",
 "output": "12.75",
 "notes": [
  "Compare sums, divide once at the end.",
  "Never recompute the whole window."
 ],
 "best": "Sliding window updates the sum in O(1) per step.",
 "variants": [
  {
   "name": "Sliding window",
   "code": "class Solution:\n    def findMaxAverage(self, nums, k):\n        window = sum(nums[:k])\n        best = window\n        for i in range(k, len(nums)):\n            window += nums[i] - nums[i - k]\n            best = max(best, window)\n        return best / k",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Slide the window: add the new element, drop the old one.",
   "frames": [
    {
     "title": "First window",
     "description": "Sum of the first 4 = 2.",
     "codeLines": [
      3
     ],
     "facts": {
      "window": 2,
      "best": 2
     },
     "rows": [
      {
       "name": "nums",
       "cells": [
        "1",
        "12",
        "-5",
        "-6",
        "50",
        "3"
       ],
       "hot": [
        0,
        1,
        2,
        3
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Slide to i=4",
     "description": "Add 50, drop 1.",
     "codeLines": [
      6,
      7
     ],
     "facts": {
      "window": 51,
      "best": 51
     },
     "rows": [
      {
       "name": "nums",
       "cells": [
        "1",
        "12",
        "-5",
        "-6",
        "50",
        "3"
       ],
       "hot": [
        1,
        2,
        3,
        4
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Slide to i=5",
     "description": "Add 3, drop 12.",
     "codeLines": [
      6,
      7
     ],
     "facts": {
      "window": 42,
      "best": 51
     },
     "rows": [
      {
       "name": "nums",
       "cells": [
        "1",
        "12",
        "-5",
        "-6",
        "50",
        "3"
       ],
       "hot": [
        2,
        3,
        4,
        5
       ],
       "marks": {}
      }
     ]
    },
    {
     "title": "Return",
     "description": "51 / 4 = 12.75",
     "codeLines": [
      8
     ],
     "facts": {
      "answer": 12.75
     },
     "rows": [
      {
       "name": "nums",
       "cells": [
        "1",
        "12",
        "-5",
        "-6",
        "50",
        "3"
       ],
       "hot": [
        1,
        2,
        3,
        4
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
   "code": "class Solution:\n    def findMaxAverage(self, nums, k):\n        best = float('-inf')\n        for i in range(len(nums) - k + 1):\n            best = max(best, sum(nums[i:i+k]))\n        return best / k",
   "time": "O(n·k)",
   "space": "O(1)",
   "explain": "Add up every window from scratch.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Prefix sums",
   "tag": "Alternative",
   "code": "class Solution:\n    def findMaxAverage(self, nums, k):\n        prefix = [0]\n        for x in nums: prefix.append(prefix[-1] + x)\n        best = max(prefix[i + k] - prefix[i] for i in range(len(nums) - k + 1))\n        return best / k",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "With running totals each window sum is one subtraction.",
   "frames": [],
   "alt": true
  }
 ],
 "why": "k=4: the run [12, -5, -6, 50] adds to 51, the biggest sum. 51 ÷ 4 = 12.75.",
 "idea": "Slide a window one step at a time: add the new number, subtract the one that left."
};
