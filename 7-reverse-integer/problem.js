window.PROBLEM = {
 "id": "7",
 "title": "Reverse Integer",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "Reverse the digits of a 32-bit signed integer. If the reversed number does not fit in the range −2³¹ … 2³¹−1, return 0. Example: 123 → 321; −123 → −321; 120 → 21.",
 "why": "Reverse the digits of an integer (keeping the sign). If the result does not fit in a signed 32-bit integer, return 0.",
 "idea": "Reverse the absolute value's digits and put the sign back; compare against −2³¹ and 2³¹−1.",
 "input": "x = 123",
 "output": "321",
 "notes": [],
 "best": "Reverse the absolute value's digits and put the sign back; compare against −2³¹ and 2³¹−1.",
 "variants": [
  {
   "name": "Reverse the digits, check the 32-bit range",
   "code": "class Solution:\n    def reverse(self, x):\n        sign = -1 if x < 0 else 1\n        r = int(str(abs(x))[::-1]) * sign\n        return r if -2 ** 31 <= r <= 2 ** 31 - 1 else 0",
   "time": "O(log x)",
   "space": "O(1)",
   "explain": "Reverse the absolute value's digits and put the sign back; compare against −2³¹ and 2³¹−1.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Pop digits with math",
   "tag": "Alternative",
   "code": "class Solution:\n    def reverse(self, x):\n        sign = -1 if x < 0 else 1\n        x = abs(x)\n        r = 0\n        while x:\n            r = r * 10 + x % 10\n            x //= 10\n        r *= sign\n        return r if -2 ** 31 <= r <= 2 ** 31 - 1 else 0",
   "time": "O(log x)",
   "space": "O(1)",
   "explain": "Build the answer digit by digit with % 10 and // 10.",
   "frames": [],
   "alt": true
  }
 ]
};
