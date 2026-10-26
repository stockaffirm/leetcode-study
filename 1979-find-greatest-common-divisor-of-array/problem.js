window.PROBLEM = {
 "id": "1979",
 "title": "Find Greatest Common Divisor of Array",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "Return the greatest common divisor of the smallest and the largest number of nums. Example: [2,5,6,9,10] → 2.",
 "why": "[2,5,6,9,10]: gcd(2, 10) = 2.",
 "idea": "The common divisors of the smallest and largest numbers are the common divisors of all of them for this problem's definition; return gcd(min, max).",
 "input": "nums = [2,5,6,9,10]",
 "output": "2",
 "notes": [],
 "best": "The common divisors of the smallest and largest numbers are the common divisors of all of them for this problem's definition; return gcd(min, max).",
 "variants": [
  {
   "name": "gcd(min, max)",
   "code": "class Solution:\n    def findGCD(self, nums):\n        return gcd(min(nums), max(nums))",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The common divisors of the smallest and largest numbers are the common divisors of all of them for this problem's definition; return gcd(min, max).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Euclid by hand",
   "tag": "Alternative",
   "code": "class Solution:\n    def findGCD(self, nums):\n        a, b = max(nums), min(nums)\n        while b:\n            a, b = b, a % b\n        return a",
   "time": "O(log)",
   "space": "O(1)",
   "explain": "Run Euclid's algorithm explicitly.",
   "frames": [],
   "alt": true
  }
 ]
};
