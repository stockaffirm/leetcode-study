window.PROBLEM = {
 "id": "231",
 "title": "Power of Two",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "Given a whole number n, return true if it is a power of two — that is, n equals 2 multiplied by itself some number of times (1, 2, 4, 8, 16, …) — otherwise false. Example: 16 → true; 6 → false; 0 and negative numbers → false.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Keep halving",
   "tag": "Alternative",
   "code": "class Solution:\n    def isPowerOfTwo(self, n):\n        if n <= 0: return False\n        while n % 2 == 0: n //= 2\n        return n == 1",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "Divide by 2 while even; a power of two ends at exactly 1.",
   "frames": [],
   "alt": true
  }
 ]
};
