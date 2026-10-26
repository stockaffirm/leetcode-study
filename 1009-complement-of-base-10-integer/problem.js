window.PROBLEM = {
 "id": "1009",
 "title": "Complement of Base 10 Integer",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "The complement of a number flips every bit of its binary representation (without leading zeros). Return the complement of n. Example: 5 (101) → 2 (010).",
 "why": "5 = 101 → complement 010 = 2.",
 "idea": "Build a mask of ones as long as n's binary form and XOR (exclusive OR) n with it. Zero is a special case (its complement is 1).",
 "input": "n = 5",
 "output": "2",
 "notes": [],
 "best": "Build a mask of ones as long as n's binary form and XOR (exclusive OR) n with it. Zero is a special case (its complement is 1).",
 "variants": [
  {
   "name": "XOR with an all-ones mask",
   "code": "class Solution:\n    def bitwiseComplement(self, n):\n        if n == 0:\n            return 1\n        return n ^ ((1 << n.bit_length()) - 1)",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Build a mask of ones as long as n's binary form and XOR (exclusive OR) n with it. Zero is a special case (its complement is 1).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Flip each bit",
   "tag": "Alternative",
   "code": "class Solution:\n    def bitwiseComplement(self, n):\n        return int(''.join('1' if c == '0' else '0' for c in bin(n)[2:]), 2)",
   "time": "O(log n)",
   "space": "O(log n)",
   "explain": "Invert the binary string.",
   "frames": [],
   "alt": true
  }
 ]
};
