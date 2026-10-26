window.PROBLEM = {
 "id": "1945",
 "title": "Sum of Digits of String After Convert",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "'iiii', k=1 → 9999 → 36.",
 "idea": "Replace each letter by its alphabet position (a = 1) and join them into one number string. Then k times replace the number by the sum of its digits.",
 "input": "s = \"iiii\", k = 1",
 "output": "36",
 "notes": [],
 "best": "Replace each letter by its alphabet position (a = 1) and join them into one number string. Then k times replace the number by the sum of its digits.",
 "variants": [
  {
   "name": "Letters to numbers, then repeated digit sums",
   "code": "class Solution:\n    def getLucky(self, s, k):\n        digits = ''.join(str(ord(c) - 96) for c in s)\n        for _ in range(k):\n            digits = str(sum(int(d) for d in digits))\n        return int(digits)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Replace each letter by its alphabet position (a = 1) and join them into one number string. Then k times replace the number by the sum of its digits.",
   "frames": []
  }
 ]
};
