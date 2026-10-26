window.PROBLEM = {
 "id": "3536",
 "title": "Maximum Product of Two Digits",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "n=31 → 3 × 1 = 3.",
 "idea": "The product of two digits is largest for the two largest digits of the number (the same digit may be used twice if it occurs twice). Sort the digits and multiply the last two.",
 "input": "n = 31",
 "output": "3",
 "notes": [],
 "best": "The product of two digits is largest for the two largest digits of the number (the same digit may be used twice if it occurs twice). Sort the digits and multiply the last two.",
 "variants": [
  {
   "name": "Multiply the two largest digits",
   "code": "class Solution:\n    def maxProduct(self, n):\n        d = sorted(map(int, str(n)))\n        return d[-1] * d[-2]",
   "time": "O(d log d)",
   "space": "O(d)",
   "explain": "The product of two digits is largest for the two largest digits of the number (the same digit may be used twice if it occurs twice). Sort the digits and multiply the last two.",
   "frames": []
  }
 ]
};
