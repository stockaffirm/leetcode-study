window.PROBLEM = {
 "id": "1979",
 "title": "Find Greatest Common Divisor of Array",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
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
   "frames": []
  }
 ]
};
