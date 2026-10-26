window.PROBLEM = {
 "id": "7",
 "title": "Reverse Integer",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
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
   "frames": []
  }
 ]
};
