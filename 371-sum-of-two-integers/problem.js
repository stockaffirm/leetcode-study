window.PROBLEM = {
 "id": "371",
 "title": "Sum of Two Integers",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "1 + 2: xor 3, carry 0 → 3. Python needs a 32-bit mask to behave like fixed-width ints.",
 "idea": "a XOR (exclusive OR) b adds without carrying; (a AND b) << 1 is the carry. Repeat until the carry is 0. Python integers are unbounded, so mask to 32 bits and convert back to a negative number if the sign bit is set.",
 "input": "a = 1, b = 2",
 "output": "3",
 "notes": [],
 "best": "a XOR (exclusive OR) b adds without carrying; (a AND b) << 1 is the carry. Repeat until the carry is 0. Python integers are unbounded, so mask to 32 bits and convert back to a negative number if the sign bit is set.",
 "variants": [
  {
   "name": "XOR for the sum, AND-shift for the carry",
   "code": "class Solution:\n    def getSum(self, a, b):\n        mask = 0xFFFFFFFF\n        while b:\n            a, b = (a ^ b) & mask, ((a & b) << 1) & mask\n        return a if a <= 0x7FFFFFFF else ~(a ^ mask)",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "a XOR (exclusive OR) b adds without carrying; (a AND b) << 1 is the carry. Repeat until the carry is 0. Python integers are unbounded, so mask to 32 bits and convert back to a negative number if the sign bit is set.",
   "frames": []
  }
 ]
};
