window.PROBLEM = {
 "id": "1611",
 "title": "Minimum One Bit Operations to Make Integers Zero",
 "level": "Hard",
 "topic": "Math / Bit Manipulation",
 "question": "You are given a whole number n and may change its binary digits (bits) with two rules: you may always flip the rightmost bit (bit 0); and you may flip bit i only if bit i−1 is 1 and every bit below i−1 is 0. Return the minimum number of flips needed to turn n into 0. Example: n=3 (binary 11) → 2 flips; n=6 (binary 110) → 4 flips.",
 "why": "With special bit-flip rules, how many flips turn n into 0? n=3 (11) → 2, n=6 (110) → 4.",
 "idea": "The allowed flips walk through a Gray-code sequence, so the answer is the position of n in that sequence: the XOR of n with all its right-shifts (n ^ n>>1 ^ n>>2 ^ …).",
 "input": "n = 6",
 "output": "4",
 "notes": [],
 "best": "The allowed flips walk through a Gray-code sequence, so the answer is the position of n in that sequence: the XOR of n with all its right-shifts (n ^ n>>1 ^ n>>2 ^ …).",
 "variants": [
  {
   "name": "Inverse Gray code (XOR of shifts)",
   "code": "class Solution:\n    def minimumOneBitOperations(self, n):\n        ans = 0\n        while n:\n            ans ^= n\n            n >>= 1\n        return ans",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "The allowed flips walk through a Gray-code sequence, so the answer is the position of n in that sequence: the XOR of n with all its right-shifts (n ^ n>>1 ^ n>>2 ^ …).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursion on the top bit",
   "tag": "Alternative",
   "code": "class Solution:\n    def minimumOneBitOperations(self, n):\n        if n == 0: return 0\n        k = n.bit_length() - 1\n        return (1 << (k + 1)) - 1 - self.minimumOneBitOperations(n - (1 << k))",
   "time": "O(log n)",
   "space": "O(log n)",
   "explain": "Clearing the top bit takes 2^(k+1) − 1 operations minus the cost of the rest.",
   "frames": [],
   "alt": true
  }
 ]
};
