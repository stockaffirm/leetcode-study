window.PROBLEM = {
 "id": "1390",
 "title": "Four Divisors",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "Given a list nums of whole numbers, find the numbers that have EXACTLY four divisors (numbers that divide them evenly, including 1 and the number itself) and return the sum of those divisors over all such numbers (0 if there is none). Example: [21,4,7] → 21 has divisors 1, 3, 7, 21 (sum 32); 4 has three divisors; 7 has two → 32.",
 "why": "For each number with exactly four divisors, add up its divisors; return the total. 21 has 1, 3, 7, 21 → 32.",
 "idea": "Divisors come in pairs d and x/d, so test d only up to √x. Stop early as soon as more than 4 divisors are found.",
 "input": "[21, 4, 7]",
 "output": "32",
 "notes": [],
 "best": "Divisors come in pairs d and x/d, so test d only up to √x. Stop early as soon as more than 4 divisors are found.",
 "variants": [
  {
   "name": "Count divisors up to √x",
   "code": "class Solution:\n    def sumFourDivisors(self, nums):\n        total = 0\n        for x in nums:\n            divs = set()\n            d = 1\n            while d * d <= x:\n                if x % d == 0:\n                    divs.add(d)\n                    divs.add(x // d)\n                    if len(divs) > 4: break\n                d += 1\n            if len(divs) == 4: total += sum(divs)\n        return total",
   "time": "O(n·√max)",
   "space": "O(1)",
   "explain": "Divisors come in pairs d and x/d, so test d only up to √x. Stop early as soon as more than 4 divisors are found.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "List every divisor",
   "tag": "Brute force",
   "code": "class Solution:\n    def sumFourDivisors(self, nums):\n        total = 0\n        for x in nums:\n            divs = [d for d in range(1, x + 1) if x % d == 0]\n            if len(divs) == 4: total += sum(divs)\n        return total",
   "time": "O(n·max)",
   "space": "O(1)",
   "explain": "Test every number up to x as a divisor.",
   "frames": [],
   "alt": true
  }
 ]
};
