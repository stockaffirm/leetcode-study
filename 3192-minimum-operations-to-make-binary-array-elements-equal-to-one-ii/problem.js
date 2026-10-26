window.PROBLEM = {
 "id": "3192",
 "title": "Minimum Operations to Make Binary Array Elements Equal to One II",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
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
   "frames": []
  }
 ]
};
