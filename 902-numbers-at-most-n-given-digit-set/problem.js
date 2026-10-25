window.PROBLEM = {
 "id": "902",
 "title": "Numbers At Most N Given Digit Set",
 "level": "Hard",
 "topic": "Math / Bit Manipulation",
 "question": "Given a set of digit characters, you may repeat digits to write positive numbers. Return how many such numbers are ≤ n. Example: digits ['1','3','5','7'], n=100 → 20.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Digit DP with a tight flag",
   "tag": "Alternative",
   "code": "class Solution:\n    def atMostNGivenDigitSet(self, digits, n):\n        s = str(n)\n        @lru_cache(None)\n        def go(pos, tight, started):\n            if pos == len(s):\n                return 1 if started else 0\n            total = 0 if started else go(pos + 1, False, False)\n            for d in digits:\n                if tight and d > s[pos]:\n                    continue\n                total += go(pos + 1, tight and d == s[pos], True)\n            return total\n        return go(0, True, False)",
   "time": "O(len·d)",
   "space": "O(len)",
   "explain": "count(pos, tight): numbers of the remaining length built from the digit set while staying ≤ N.",
   "frames": [],
   "alt": true
  }
 ]
};
