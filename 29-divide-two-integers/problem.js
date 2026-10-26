window.PROBLEM = {
 "id": "29",
 "title": "Divide Two Integers",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "10 ÷ 3: subtract 3·2 = 6 (adds 2), then 3 (adds 1) → 3, with 1 left over.",
 "idea": "Divide positives and fix the sign at the end. Repeatedly double the divisor (by shifting) as long as it still fits into what is left, subtract the biggest such multiple and add its multiplier to the answer. Watch the 32-bit overflow case.",
 "input": "dividend = 10, divisor = 3",
 "output": "3",
 "notes": [],
 "best": "Divide positives and fix the sign at the end. Repeatedly double the divisor (by shifting) as long as it still fits into what is left, subtract the biggest such multiple and add its multiplier to the answer. Watch the 32-bit overflow case.",
 "variants": [
  {
   "name": "Subtract doubled divisors",
   "code": "class Solution:\n    def divide(self, dividend, divisor):\n        INT_MAX, INT_MIN = 2 ** 31 - 1, -2 ** 31\n        if dividend == INT_MIN and divisor == -1:\n            return INT_MAX\n        neg = (dividend < 0) != (divisor < 0)\n        a, b = abs(dividend), abs(divisor)\n        res = 0\n        while a >= b:\n            t, m = b, 1\n            while a >= (t << 1):\n                t <<= 1\n                m <<= 1\n            a -= t\n            res += m\n        return -res if neg else res",
   "time": "O(log² n)",
   "space": "O(1)",
   "explain": "Divide positives and fix the sign at the end. Repeatedly double the divisor (by shifting) as long as it still fits into what is left, subtract the biggest such multiple and add its multiplier to the answer. Watch the 32-bit overflow case.",
   "frames": []
  }
 ]
};
