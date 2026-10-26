window.PROBLEM = {
 "id": "326",
 "title": "Power of Three",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "27 = 3³ → true.",
 "idea": "3 is prime, so n is a power of 3 exactly when it divides the largest power of 3 that fits in 32 bits (3¹⁹ = 1,162,261,467).",
 "input": "n = 27",
 "output": "true",
 "notes": [],
 "best": "3 is prime, so n is a power of 3 exactly when it divides the largest power of 3 that fits in 32 bits (3¹⁹ = 1,162,261,467).",
 "variants": [
  {
   "name": "Divide the largest power of 3",
   "code": "class Solution:\n    def isPowerOfThree(self, n):\n        return n > 0 and 1162261467 % n == 0",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "3 is prime, so n is a power of 3 exactly when it divides the largest power of 3 that fits in 32 bits (3¹⁹ = 1,162,261,467).",
   "frames": []
  }
 ]
};
