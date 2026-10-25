window.PROBLEM = {
 "id": "1221",
 "title": "Split a String in Balanced Strings",
 "level": "Easy",
 "topic": "Greedy",
 "question": "A string of 'L' and 'R' is balanced when it has the same number of each. Split the given balanced string into as many balanced pieces as possible and return how many. Example: 'RLRRLLRLRL' → 4.",
 "why": "'RLRRLLRLRL': cut after RL, RRLL, RL, RL → 4 balanced pieces.",
 "idea": "Walk through the string with a balance (+1 for R, −1 for L). Every time the balance returns to 0, the piece so far is balanced, so cut there. Cutting as early as possible gives the most pieces.",
 "input": "s = \"RLRRLLRLRL\"",
 "output": "4",
 "notes": [],
 "best": "Walk through the string with a balance (+1 for R, −1 for L). Every time the balance returns to 0, the piece so far is balanced, so cut there. Cutting as early as possible gives the most pieces.",
 "variants": [
  {
   "name": "Cut whenever L and R counts match",
   "code": "class Solution:\n    def balancedStringSplit(self, s):\n        bal = res = 0\n        for c in s:\n            bal += 1 if c == 'R' else -1\n            if bal == 0:\n                res += 1\n        return res",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Walk through the string with a balance (+1 for R, −1 for L). Every time the balance returns to 0, the piece so far is balanced, so cut there. Cutting as early as possible gives the most pieces.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Count L and R separately",
   "tag": "Alternative",
   "code": "class Solution:\n    def balancedStringSplit(self, s):\n        l = r = res = 0\n        for c in s:\n            if c == 'L':\n                l += 1\n            else:\n                r += 1\n            if l == r:\n                res += 1\n        return res",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Keep one counter per letter and cut when the two counters are equal.",
   "frames": [],
   "alt": true
  }
 ]
};
