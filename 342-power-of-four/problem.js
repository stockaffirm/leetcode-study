window.PROBLEM = {
 "id": "342",
 "title": "Power of Four",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "16 = 4² → true; 8 is a power of two but not four → false.",
 "idea": "A power of four has exactly one set bit, and that bit is at an even position. So n > 0, n & (n−1) == 0 and n & 0x55555555 != 0.",
 "input": "n = 16",
 "output": "true",
 "notes": [],
 "best": "A power of four has exactly one set bit, and that bit is at an even position. So n > 0, n & (n−1) == 0 and n & 0x55555555 != 0.",
 "variants": [
  {
   "name": "Single set bit at an even position",
   "code": "class Solution:\n    def isPowerOfFour(self, n):\n        return n > 0 and n & (n - 1) == 0 and n & 0x55555555 != 0",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "A power of four has exactly one set bit, and that bit is at an even position. So n > 0, n & (n−1) == 0 and n & 0x55555555 != 0.",
   "frames": []
  }
 ]
};
