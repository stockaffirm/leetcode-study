window.PROBLEM = {
 "id": "3880",
 "title": "Minimum Absolute Difference Between Two Values",
 "level": "Easy",
 "topic": "Array / String",
 "question": "You are given a list nums containing only the numbers 0, 1 and 2. A pair of positions (i, j) is valid if nums[i] is 1 and nums[j] is 2. Return the smallest value of |i − j| over all valid pairs, or -1 if there is no valid pair. Example: [1,0,0,2,0,1] → the 2 is 3 away from the first 1 and 2 away from the last 1 → 2.",
 "why": "The list holds only 0, 1 and 2. Find the smallest distance (difference of positions) between a 1 and a 2.",
 "idea": "Walk once, remembering the latest position of a 1 and of a 2. Each new 1 is compared with the latest 2 and vice versa.",
 "input": "[1, 0, 0, 2, 0, 1]",
 "output": "2",
 "notes": [],
 "best": "Walk once, remembering the latest position of a 1 and of a 2. Each new 1 is compared with the latest 2 and vice versa.",
 "variants": [
  {
   "name": "Remember the last 1 and the last 2",
   "code": "class Solution:\n    def minAbsoluteDifference(self, nums):\n        last1 = last2 = None\n        best = float('inf')\n        for i, x in enumerate(nums):\n            if x == 1:\n                last1 = i\n                if last2 is not None: best = min(best, i - last2)\n            elif x == 2:\n                last2 = i\n                if last1 is not None: best = min(best, i - last1)\n        return best if best != float('inf') else -1",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Walk once, remembering the latest position of a 1 and of a 2. Each new 1 is compared with the latest 2 and vice versa.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Compare every pair",
   "tag": "Brute force",
   "code": "class Solution:\n    def minAbsoluteDifference(self, nums):\n        best = float('inf')\n        for i, x in enumerate(nums):\n            if x != 1: continue\n            for j, y in enumerate(nums):\n                if y == 2: best = min(best, abs(i - j))\n        return best if best != float('inf') else -1",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Check every 1 against every 2.",
   "frames": [],
   "alt": true
  }
 ]
};
