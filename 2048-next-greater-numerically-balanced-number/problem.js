window.PROBLEM = {
 "id": "2048",
 "title": "Next Greater Numerically Balanced Number",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "A number is numerically balanced if every digit d appears exactly d times. Return the smallest numerically balanced number strictly greater than n. Example: n=1 → 22.",
 "why": "n=1 → the next balanced number is 22.",
 "idea": "A number is numerically balanced if each digit d appears exactly d times. Starting at n + 1 test each number until one is balanced (balanced numbers are dense enough for n ≤ 10⁶).",
 "input": "n = 1",
 "output": "22",
 "notes": [],
 "best": "A number is numerically balanced if each digit d appears exactly d times. Starting at n + 1 test each number until one is balanced (balanced numbers are dense enough for n ≤ 10⁶).",
 "variants": [
  {
   "name": "Increase until every digit d appears d times",
   "code": "class Solution:\n    def nextBeautifulNumber(self, n):\n        x = n + 1\n        while True:\n            cnt = Counter(str(x))\n            if all(int(d) == c for d, c in cnt.items()):\n                return x\n            x += 1",
   "time": "O(answer − n)",
   "space": "O(1)",
   "explain": "A number is numerically balanced if each digit d appears exactly d times. Starting at n + 1 test each number until one is balanced (balanced numbers are dense enough for n ≤ 10⁶).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Search with a generator of balanced numbers",
   "tag": "Alternative",
   "code": "class Solution:\n    def nextBeautifulNumber(self, n):\n        x = n + 1\n        while True:\n            s = str(x)\n            if all(s.count(d) == int(d) for d in set(s)):\n                return x\n            x += 1",
   "time": "small",
   "space": "O(1)",
   "explain": "Compare digit counts with the digit value using str.count.",
   "frames": [],
   "alt": true
  }
 ]
};
