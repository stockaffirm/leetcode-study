window.PROBLEM = {
 "id": "1342",
 "title": "Number of Steps to Reduce a Number to Zero",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "14 → 7 → 6 → 3 → 2 → 1 → 0: 6 steps.",
 "idea": "Each 1 bit costs one subtraction and each shift costs one division. The answer is bit_length − 1 + popcount (for n > 0), 0 for n = 0.",
 "input": "num = 14",
 "output": "6",
 "notes": [],
 "best": "Each 1 bit costs one subtraction and each shift costs one division. The answer is bit_length − 1 + popcount (for n > 0), 0 for n = 0.",
 "variants": [
  {
   "name": "Bit length plus set bits",
   "code": "class Solution:\n    def numberOfSteps(self, num):\n        return 0 if num == 0 else num.bit_length() - 1 + bin(num).count('1')",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Each 1 bit costs one subtraction and each shift costs one division. The answer is bit_length − 1 + popcount (for n > 0), 0 for n = 0.",
   "frames": []
  }
 ]
};
