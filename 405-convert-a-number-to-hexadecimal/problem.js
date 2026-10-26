window.PROBLEM = {
 "id": "405",
 "title": "Convert a Number to Hexadecimal",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "26 = 0x1a: the lowest 4 bits are 1010 (a) and the next 4 bits are 0001 (1).",
 "idea": "Negative numbers use 32-bit two's complement, so mask them with 0xFFFFFFFF first. Then repeatedly take the lowest 4 bits as a hex digit and shift right by 4.",
 "input": "num = 26",
 "output": "\"1a\"",
 "notes": [],
 "best": "Negative numbers use 32-bit two's complement, so mask them with 0xFFFFFFFF first. Then repeatedly take the lowest 4 bits as a hex digit and shift right by 4.",
 "variants": [
  {
   "name": "Take 4 bits at a time",
   "code": "class Solution:\n    def toHex(self, num):\n        if num == 0:\n            return \"0\"\n        num &= 0xFFFFFFFF\n        digits = \"0123456789abcdef\"\n        res = []\n        while num:\n            res.append(digits[num & 15])\n            num >>= 4\n        return \"\".join(reversed(res))",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Negative numbers use 32-bit two's complement, so mask them with 0xFFFFFFFF first. Then repeatedly take the lowest 4 bits as a hex digit and shift right by 4.",
   "frames": []
  }
 ]
};
