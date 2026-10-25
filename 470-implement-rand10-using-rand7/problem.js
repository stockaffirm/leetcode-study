window.PROBLEM = {
 "id": "470",
 "title": "Implement Rand10() Using Rand7()",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "You are given a function rand7() that returns a random whole number from 1 to 7, each equally likely. Write rand10() that returns a random number from 1 to 10, each equally likely, using only rand7(). Example: calling rand10() many times gives each of 1…10 about equally often.",
 "why": "You only have rand7() (uniform 1..7). Build rand10() that returns uniform 1..10.",
 "idea": "Two calls give a uniform number 1..49: (a−1)·7 + b. Keep it if it is ≤ 40 (an exact multiple of 10 outcomes), mapping to 1 + (x−1) mod 10; otherwise try again.",
 "input": "rand10() called many times",
 "output": "1..10, equally often",
 "notes": [],
 "best": "Two calls give a uniform number 1..49: (a−1)·7 + b. Keep it if it is ≤ 40 (an exact multiple of 10 outcomes), mapping to 1 + (x−1) mod 10; otherwise try again.",
 "variants": [
  {
   "name": "Rejection sampling",
   "code": "class Solution:\n    def rand10(self):\n        while True:\n            x = (rand7() - 1) * 7 + rand7()\n            if x <= 40: return 1 + (x - 1) % 10",
   "time": "O(1) expected",
   "space": "O(1)",
   "explain": "Two calls give a uniform number 1..49: (a−1)·7 + b. Keep it if it is ≤ 40 (an exact multiple of 10 outcomes), mapping to 1 + (x−1) mod 10; otherwise try again.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Three rolls in base 7",
   "tag": "Alternative",
   "code": "class Solution:\n    def rand10(self):\n        while True:\n            x = (rand7() - 1) * 49 + (rand7() - 1) * 7 + rand7()\n            if x <= 340: return 1 + (x - 1) % 10",
   "time": "O(1) expected",
   "space": "O(1)",
   "explain": "Three calls give a uniform number 1..343; accept ≤ 340 and use mod 10.",
   "frames": [],
   "alt": true
  }
 ]
};
