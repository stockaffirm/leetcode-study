window.PROBLEM = {
 "id": "1221",
 "title": "Split a String in Balanced Strings",
 "level": "Easy",
 "topic": "Greedy",
 "question": "",
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
   "frames": []
  }
 ]
};
