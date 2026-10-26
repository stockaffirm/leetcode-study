window.PROBLEM = {
 "id": "470",
 "title": "Implement Rand10() Using Rand7()",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
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
   "frames": []
  }
 ]
};
