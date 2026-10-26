window.PROBLEM = {
 "id": "3192",
 "title": "Minimum Operations to Make Binary Array Elements Equal to One II",
 "level": "Medium",
 "topic": "Greedy",
 "question": "A binary array is given. In one operation you choose an index i and flip every element from i to the end. Return the minimum number of operations to make every element 1. Example: [0,1,1,0,1] → 4.",
 "why": "In one operation pick an index and flip every bit from it to the end. Make all bits 1 with the fewest operations.",
 "idea": "Go left to right keeping the number of flips done so far; the current bit's real value is its value XOR (flips mod 2). Whenever it is 0, flip from here.",
 "input": "[0,1,1,0,1]",
 "output": "4",
 "notes": [],
 "best": "Go left to right keeping the number of flips done so far; the current bit's real value is its value XOR (flips mod 2). Whenever it is 0, flip from here.",
 "variants": [
  {
   "name": "Count flips as a parity",
   "code": "class Solution:\n    def minOperations(self, nums):\n        flips = 0\n        for x in nums:\n            if (x ^ (flips & 1)) == 0: flips += 1\n        return flips",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Go left to right keeping the number of flips done so far; the current bit's real value is its value XOR (flips mod 2). Whenever it is 0, flip from here.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Count changes between neighbours",
   "tag": "Alternative",
   "code": "class Solution:\n    def minOperations(self, nums):\n        ops, prev = 0, 1\n        for x in nums:\n            if x != prev: ops += 1\n            prev = x\n        return ops",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Every place where the value differs from the previous one (starting from an imaginary 1) needs one flip.",
   "frames": [],
   "alt": true
  }
 ]
};
