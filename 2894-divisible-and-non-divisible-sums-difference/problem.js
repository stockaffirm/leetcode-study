window.PROBLEM = {
 "id": "2894",
 "title": "Divisible and Non-divisible Sums Difference",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "n=10, m=3: non-multiples sum 37, multiples (3+6+9) sum 18 → 19.",
 "idea": "Sum the numbers 1…n that are not divisible by m and subtract the sum of those that are.",
 "input": "n = 10, m = 3",
 "output": "19",
 "notes": [],
 "best": "Sum the numbers 1…n that are not divisible by m and subtract the sum of those that are.",
 "variants": [
  {
   "name": "Sum of non-multiples minus sum of multiples",
   "code": "class Solution:\n    def differenceOfSums(self, n, m):\n        return sum(x if x % m else -x for x in range(1, n + 1))",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Sum the numbers 1…n that are not divisible by m and subtract the sum of those that are.",
   "frames": []
  }
 ]
};
