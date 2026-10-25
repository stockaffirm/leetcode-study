window.PROBLEM = {
 "id": "233",
 "title": "Number of Digit One",
 "level": "Hard",
 "topic": "Math / Bit Manipulation",
 "question": "Return how many times the digit 1 appears in all the numbers from 0 to n. Example: n=13 → 6 (1, 10, 11, 12, 13).",
 "why": "n=13: 1,10,11,12,13 contain 1s → 1+1+2+1+1 = 6.",
 "idea": "Count how many times a 1 appears in each decimal place separately. For place p (1, 10, 100…) split n into high = n // (10p), cur = digit at p, low = n % p. If cur = 0 the place is a 1 high·p times; if cur = 1, high·p + low + 1 times; if cur > 1, (high + 1)·p times.",
 "input": "n = 13",
 "output": "6",
 "notes": [],
 "best": "Count how many times a 1 appears in each decimal place separately. For place p (1, 10, 100…) split n into high = n // (10p), cur = digit at p, low = n % p. If cur = 0 the place is a 1 high·p times; if cur = 1, high·p + low + 1 times; if cur > 1, (high + 1)·p times.",
 "variants": [
  {
   "name": "Count the 1s place by place",
   "code": "class Solution:\n    def countDigitOne(self, n):\n        res = 0\n        p = 1\n        while p <= n:\n            high = n // (p * 10)\n            cur = (n // p) % 10\n            low = n % p\n            if cur == 0:\n                res += high * p\n            elif cur == 1:\n                res += high * p + low + 1\n            else:\n                res += (high + 1) * p\n            p *= 10\n        return res",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "Count how many times a 1 appears in each decimal place separately. For place p (1, 10, 100…) split n into high = n // (10p), cur = digit at p, low = n % p. If cur = 0 the place is a 1 high·p times; if cur = 1, high·p + low + 1 times; if cur > 1, (high + 1)·p times.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Count digits of every number",
   "tag": "Brute force",
   "code": "class Solution:\n    def countDigitOne(self, n):\n        return sum(str(i).count('1') for i in range(1, n + 1))",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "Loop from 1 to n and count the '1' characters.",
   "frames": [],
   "alt": true
  }
 ]
};
