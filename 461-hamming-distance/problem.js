window.PROBLEM = {
 "id": "461",
 "title": "Hamming Distance",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "The Hamming distance of two integers is the number of bit positions at which they differ. Return it. Example: 1 (0001) and 4 (0100) → 2.",
 "why": "1 = 0001 and 4 = 0100 differ in 2 bit positions.",
 "idea": "x XOR y has a 1 exactly where the bits differ. Count the 1s.",
 "input": "x = 1, y = 4",
 "output": "2",
 "notes": [],
 "best": "x XOR y has a 1 exactly where the bits differ. Count the 1s.",
 "variants": [
  {
   "name": "XOR and count the ones",
   "code": "class Solution:\n    def hammingDistance(self, x, y):\n        return bin(x ^ y).count(\"1\")",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "x XOR y has a 1 exactly where the bits differ. Count the 1s.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Count bits with n & (n − 1)",
   "tag": "Bit trick",
   "code": "class Solution:\n    def hammingDistance(self, x, y):\n        z = x ^ y\n        cnt = 0\n        while z:\n            z &= z - 1\n            cnt += 1\n        return cnt",
   "time": "O(bits)",
   "space": "O(1)",
   "explain": "x & (x − 1) removes the lowest set bit; count how many times you can do that.",
   "frames": [],
   "alt": true
  }
 ]
};
