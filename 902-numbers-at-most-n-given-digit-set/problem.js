window.PROBLEM = {
 "id": "902",
 "title": "Numbers At Most N Given Digit Set",
 "level": "Hard",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "digits {1,3,5,7}, n=100: 4 one-digit + 16 two-digit numbers = 20.",
 "idea": "Numbers shorter than N's length can use any digit at each place: Σ d^len. For numbers with the same length as N walk its digits left to right: for each position add (number of allowed digits smaller than N's digit) × d^(remaining positions); continue only if N's digit itself is allowed; if every digit is allowed, N itself counts +1.",
 "input": "digits = [\"1\",\"3\",\"5\",\"7\"], n = 100",
 "output": "20",
 "notes": [],
 "best": "Numbers shorter than N's length can use any digit at each place: Σ d^len. For numbers with the same length as N walk its digits left to right: for each position add (number of allowed digits smaller than N's digit) × d^(remaining positions); continue only if N's digit itself is allowed; if every digit is allowed, N itself counts +1.",
 "variants": [
  {
   "name": "Count shorter lengths, then walk the digits of N",
   "code": "class Solution:\n    def atMostNGivenDigitSet(self, digits, n):\n        s = str(n)\n        L = len(s)\n        d = len(digits)\n        res = sum(d ** i for i in range(1, L))\n        for i, ch in enumerate(s):\n            smaller = sum(x < ch for x in digits)\n            res += smaller * d ** (L - i - 1)\n            if ch not in digits:\n                return res\n        return res + 1",
   "time": "O(len · d)",
   "space": "O(1)",
   "explain": "Numbers shorter than N's length can use any digit at each place: Σ d^len. For numbers with the same length as N walk its digits left to right: for each position add (number of allowed digits smaller than N's digit) × d^(remaining positions); continue only if N's digit itself is allowed; if every digit is allowed, N itself counts +1.",
   "frames": []
  }
 ]
};
