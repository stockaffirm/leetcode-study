window.PROBLEM = {
 "id": "461",
 "title": "Hamming Distance",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
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
   "frames": []
  }
 ]
};
