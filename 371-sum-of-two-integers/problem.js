window.PROBLEM = {
 "id": "371",
 "title": "Sum of Two Integers",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "Return a + b without using the + or − operators (32-bit signed integers). Example: 1 and 2 → 3.",
 "why": "1 + 2: xor 3, carry 0 → 3. Python needs a 32-bit mask to behave like fixed-width ints.",
 "idea": "a XOR b adds without carrying; (a AND b) << 1 is the carry. Repeat until the carry is 0. Python integers are unbounded, so mask to 32 bits and convert back to a negative number if the sign bit is set.",
 "input": "a = 1, b = 2",
 "output": "3",
 "notes": [],
 "best": "a XOR b adds without carrying; (a AND b) << 1 is the carry. Repeat until the carry is 0. Python integers are unbounded, so mask to 32 bits and convert back to a negative number if the sign bit is set.",
 "variants": [
  {
   "name": "XOR for the sum, AND-shift for the carry",
   "code": "class Solution:\n    def getSum(self, a, b):\n        mask = 0xFFFFFFFF\n        while b:\n            a, b = (a ^ b) & mask, ((a & b) << 1) & mask\n        return a if a <= 0x7FFFFFFF else ~(a ^ mask)",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "a XOR b adds without carrying; (a AND b) << 1 is the carry. Repeat until the carry is 0. Python integers are unbounded, so mask to 32 bits and convert back to a negative number if the sign bit is set.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Full adder bit by bit",
   "tag": "Alternative",
   "code": "class Solution:\n    def getSum(self, a, b):\n        mask = 0xFFFFFFFF\n        res = carry = 0\n        for i in range(32):\n            x = (a >> i) & 1\n            y = (b >> i) & 1\n            res |= (x ^ y ^ carry) << i\n            carry = (x & y) | (carry & (x ^ y))\n        return res if res <= 0x7FFFFFFF else ~(res ^ mask)",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Add the 32 bits one at a time with an explicit carry.",
   "frames": [],
   "alt": true
  }
 ]
};
