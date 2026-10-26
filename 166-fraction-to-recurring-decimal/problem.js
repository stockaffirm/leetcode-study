window.PROBLEM = {
 "id": "166",
 "title": "Fraction to Recurring Decimal",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "Given a numerator and a denominator return the fraction as a decimal string; put the repeating part of the decimals in brackets. Example: 4 ÷ 333 → '0.(012)'; 1 ÷ 2 → '0.5'; 2 ÷ 1 → '2'.",
 "why": "4 ÷ 333 = 0.012012012… → '0.(012)'.",
 "idea": "Do long division by hand. The digits repeat as soon as a remainder appears for the second time. Store the position where each remainder first appeared and put the brackets around the repeating part.",
 "input": "numerator = 4, denominator = 333",
 "output": "\"0.(012)\"",
 "notes": [],
 "best": "Do long division by hand. The digits repeat as soon as a remainder appears for the second time. Store the position where each remainder first appeared and put the brackets around the repeating part.",
 "variants": [
  {
   "name": "Long division with a remainder map",
   "code": "class Solution:\n    def fractionToDecimal(self, numerator, denominator):\n        if numerator == 0:\n            return \"0\"\n        sign = \"-\" if (numerator < 0) != (denominator < 0) else \"\"\n        n, d = abs(numerator), abs(denominator)\n        res = [sign + str(n // d)]\n        rem = n % d\n        if rem == 0:\n            return res[0]\n        res.append(\".\")\n        seen = {}\n        while rem:\n            if rem in seen:\n                res.insert(seen[rem], \"(\")\n                res.append(\")\")\n                break\n            seen[rem] = len(res)\n            rem *= 10\n            res.append(str(rem // d))\n            rem %= d\n        return \"\".join(res)",
   "time": "O(d)",
   "space": "O(d)",
   "explain": "Do long division by hand. The digits repeat as soon as a remainder appears for the second time. Store the position where each remainder first appeared and put the brackets around the repeating part.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Remainders in a list",
   "tag": "Alternative",
   "code": "class Solution:\n    def fractionToDecimal(self, numerator, denominator):\n        if numerator == 0:\n            return \"0\"\n        sign = \"-\" if (numerator < 0) != (denominator < 0) else \"\"\n        n, d = abs(numerator), abs(denominator)\n        whole, rem = divmod(n, d)\n        if rem == 0:\n            return sign + str(whole)\n        digits, rems = [], []\n        while rem and rem not in rems:\n            rems.append(rem)\n            rem *= 10\n            digits.append(str(rem // d))\n            rem %= d\n        if rem == 0:\n            return sign + str(whole) + \".\" + \"\".join(digits)\n        i = rems.index(rem)\n        return sign + str(whole) + \".\" + \"\".join(digits[:i]) + \"(\" + \"\".join(digits[i:]) + \")\"",
   "time": "O(d²)",
   "space": "O(d)",
   "explain": "Same long division, but remember the remainders in a list and look up the first position of a repeated one.",
   "frames": [],
   "alt": true
  }
 ]
};
