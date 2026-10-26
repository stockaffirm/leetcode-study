window.PROBLEM = {
 "id": "2429",
 "title": "Minimize XOR",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "num1=1 (0001), num2=12 (1100 has two 1s): x needs two set bits; 0011 = 3 gives XOR (exclusive OR) 2, the smallest.",
 "idea": "x must have as many set bits as num2. To make x XOR num1 small, match the highest set bits of num1 first; if bits are left over, set the lowest unset bits of x.",
 "input": "num1 = 1, num2 = 12",
 "output": "3",
 "notes": [],
 "best": "x must have as many set bits as num2. To make x XOR num1 small, match the highest set bits of num1 first; if bits are left over, set the lowest unset bits of x.",
 "variants": [
  {
   "name": "Copy num1's high bits, fill low bits",
   "code": "class Solution:\n    def minimizeXor(self, num1, num2):\n        cnt = bin(num2).count('1')\n        x = 0\n        for b in range(30, -1, -1):\n            if cnt and (num1 >> b) & 1:\n                x |= 1 << b\n                cnt -= 1\n        b = 0\n        while cnt:\n            if not (x >> b) & 1:\n                x |= 1 << b\n                cnt -= 1\n            b += 1\n        return x",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "x must have as many set bits as num2. To make x XOR num1 small, match the highest set bits of num1 first; if bits are left over, set the lowest unset bits of x.",
   "frames": []
  }
 ]
};
