window.PROBLEM = {
 "id": "556",
 "title": "Next Greater Element III",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "Given a positive number n, return the smallest number that has exactly the same digits as n (rearranged) and is bigger than n. If there is none, or the answer does not fit in a 32-bit integer (above 2147483647), return −1. Example: 12 → 21; 21 → −1.",
 "why": "Find the smallest number that uses exactly the same digits and is bigger than n (or −1; also −1 if it does not fit in 32 bits). 12 → 21.",
 "idea": "It is the 'next permutation' of the digits: find the rightmost digit smaller than its right neighbour, swap it with the next-larger digit on its right, and reverse the tail.",
 "input": "n = 12",
 "output": "21",
 "notes": [],
 "best": "It is the 'next permutation' of the digits: find the rightmost digit smaller than its right neighbour, swap it with the next-larger digit on its right, and reverse the tail.",
 "variants": [
  {
   "name": "Next permutation of the digits",
   "code": "class Solution:\n    def nextGreaterElement(self, n):\n        d = list(str(n))\n        i = len(d) - 2\n        while i >= 0 and d[i] >= d[i + 1]: i -= 1\n        if i < 0: return -1\n        j = len(d) - 1\n        while d[j] <= d[i]: j -= 1\n        d[i], d[j] = d[j], d[i]\n        d[i + 1:] = reversed(d[i + 1:])\n        val = int(''.join(d))\n        return val if val < 2 ** 31 else -1",
   "time": "O(digits)",
   "space": "O(digits)",
   "explain": "It is the 'next permutation' of the digits: find the rightmost digit smaller than its right neighbour, swap it with the next-larger digit on its right, and reverse the tail.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try all rearrangements",
   "tag": "Brute force",
   "code": "class Solution:\n    def nextGreaterElement(self, n):\n        digits = str(n)\n        cands = sorted({int(''.join(p)) for p in permutations(digits)})\n        for v in cands:\n            if v > n: return v if v < 2 ** 31 else -1\n        return -1",
   "time": "O(d!)",
   "space": "O(d!)",
   "explain": "Sort all rearrangements of the digits and take the first one bigger than n.",
   "frames": [],
   "alt": true
  }
 ]
};
