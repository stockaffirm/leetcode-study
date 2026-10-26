window.PROBLEM = {
 "id": "1611",
 "title": "Minimum One Bit Operations to Make Integers Zero",
 "level": "Hard",
 "topic": "Math / Bit Manipulation",
 "question": "",
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
   "frames": []
  }
 ]
};
