window.PROBLEM = {
 "id": "2429",
 "title": "Minimize XOR",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "Find the number x that has the same number of set bits as num2 and makes x XOR num1 as small as possible (the answer is unique). Example: num1=1, num2=12 → 3.",
 "why": "num1=1 (0001), num2=12 (1100 has two 1s): x needs two set bits; 0011 = 3 gives XOR 2, the smallest.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every candidate x",
   "tag": "Brute force",
   "code": "class Solution:\n    def minimizeXor(self, num1, num2):\n        cnt = bin(num2).count('1')\n        best, ans = float('inf'), 0\n        for x in range(1 << (num1.bit_length() + cnt)):\n            if bin(x).count('1') == cnt and x ^ num1 < best:\n                best, ans = x ^ num1, x\n        return ans",
   "time": "O(2^(bits))",
   "space": "O(1)",
   "explain": "Check all x below a bound and pick the smallest XOR among those with the right number of set bits.",
   "frames": [],
   "alt": true
  }
 ]
};
