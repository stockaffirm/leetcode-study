window.PROBLEM = {
 "id": "231",
 "title": "Power of Two",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "Is the number 1, 2, 4, 8, 16 …? 16 → yes, 6 → no.",
 "idea": "A power of two has exactly one 1-bit in binary (10000). Subtracting 1 flips that bit and everything below it, so n & (n−1) is 0 only for powers of two.",
 "input": "n = 16",
 "output": "True",
 "notes": [],
 "best": "A power of two has exactly one 1-bit in binary (10000). Subtracting 1 flips that bit and everything below it, so n & (n−1) is 0 only for powers of two.",
 "variants": [
  {
   "name": "Bit trick: n & (n−1)",
   "code": "class Solution:\n    def isPowerOfTwo(self, n):\n        if n <= 0: return False\n        return n & (n - 1) == 0",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "A power of two has exactly one 1-bit in binary (10000). Subtracting 1 flips that bit and everything below it, so n & (n−1) is 0 only for powers of two.",
   "frames": []
  }
 ]
};
