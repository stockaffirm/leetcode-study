window.PROBLEM = {
 "id": "400",
 "title": "Nth Digit",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "Write 1, 2, 3, … 10, 11 … as one long string of digits. What is the n-th digit? n=11 → 0 (the '0' of 10).",
 "idea": "There are 9 one-digit numbers, 90 two-digit numbers, 900 three-digit… Subtract whole groups until n falls inside one, then compute which number and which digit of it.",
 "input": "n = 11",
 "output": "0",
 "notes": [],
 "best": "There are 9 one-digit numbers, 90 two-digit numbers, 900 three-digit… Subtract whole groups until n falls inside one, then compute which number and which digit of it.",
 "variants": [
  {
   "name": "Skip whole groups of equal-length numbers",
   "code": "class Solution:\n    def findNthDigit(self, n):\n        digits, count, start = 1, 9, 1\n        while n > digits * count:\n            n -= digits * count\n            digits += 1\n            count *= 10\n            start *= 10\n        num = start + (n - 1) // digits\n        return int(str(num)[(n - 1) % digits])",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "There are 9 one-digit numbers, 90 two-digit numbers, 900 three-digit… Subtract whole groups until n falls inside one, then compute which number and which digit of it.",
   "frames": []
  }
 ]
};
