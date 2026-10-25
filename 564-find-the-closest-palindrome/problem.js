window.PROBLEM = {
 "id": "564",
 "title": "Find the Closest Palindrome",
 "level": "Hard",
 "topic": "Math / Bit Manipulation",
 "question": "Given a number as a string, return the closest palindromic number (reads the same backwards) as a string. It must not be the number itself; if two palindromes are equally close, return the smaller. Example: '123' → '121'; '1' → '0'.",
 "why": "Given a number (as text), return the closest palindromic number that is not the number itself (the smaller one if two are equally close).",
 "idea": "The answer is one of only five candidates: the mirrored first half, the mirrored first half ± 1, and the edge cases 10^(L−1) − 1 (like 999) and 10^L + 1 (like 1001). Pick the closest.",
 "input": "'123'",
 "output": "'121'",
 "notes": [],
 "best": "The answer is one of only five candidates: the mirrored first half, the mirrored first half ± 1, and the edge cases 10^(L−1) − 1 (like 999) and 10^L + 1 (like 1001). Pick the closest.",
 "variants": [
  {
   "name": "Mirror the first half",
   "code": "class Solution:\n    def nearestPalindromic(self, n):\n        L, num = len(n), int(n)\n        cands = {10 ** (L - 1) - 1, 10 ** L + 1}\n        prefix = int(n[:(L + 1) // 2])\n        for p in (prefix - 1, prefix, prefix + 1):\n            s = str(p)\n            mirror = s + s[::-1] if L % 2 == 0 else s + s[-2::-1]\n            cands.add(int(mirror))\n        cands.discard(num)\n        return str(min(cands, key=lambda c: (abs(c - num), c)))",
   "time": "O(L)",
   "space": "O(L)",
   "explain": "The answer is one of only five candidates: the mirrored first half, the mirrored first half ± 1, and the edge cases 10^(L−1) − 1 (like 999) and 10^L + 1 (like 1001). Pick the closest.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Search outwards from n",
   "tag": "Brute force",
   "code": "class Solution:\n    def nearestPalindromic(self, n):\n        num = int(n)\n        d = 1\n        while True:\n            for c in (num - d, num + d):\n                if c >= 0 and str(c) == str(c)[::-1]: return str(c)\n            d += 1",
   "time": "O(distance)",
   "space": "O(1)",
   "explain": "Try n−1, n+1, n−2, n+2, … until a palindrome appears.",
   "frames": [],
   "alt": true
  }
 ]
};
