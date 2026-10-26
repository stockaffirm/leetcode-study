window.PROBLEM = {
 "id": "2413",
 "title": "Smallest Even Multiple",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "5 → 10; 6 → 6.",
 "idea": "The smallest positive number divisible by both 2 and n is n when n is even and 2n otherwise.",
 "input": "n = 5",
 "output": "10",
 "notes": [],
 "best": "The smallest positive number divisible by both 2 and n is n when n is even and 2n otherwise.",
 "variants": [
  {
   "name": "n if even, else 2n",
   "code": "class Solution:\n    def smallestEvenMultiple(self, n):\n        return n if n % 2 == 0 else 2 * n",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "The smallest positive number divisible by both 2 and n is n when n is even and 2n otherwise.",
   "frames": []
  }
 ]
};
