window.PROBLEM = {
 "id": "2549",
 "title": "Count Distinct Numbers on Board",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "n=5: day 1 adds 2 and 4 (5 % x = 1), later days add 3 → numbers 2..5 → 4.",
 "idea": "For any x > 2 on the board, x % (x−1) = 1, so x−1 is added; repeating, every number down to 2 ends up on the board. For n > 1 the answer is n − 1; for n = 1 it is 1.",
 "input": "n = 5",
 "output": "4",
 "notes": [],
 "best": "For any x > 2 on the board, x % (x−1) = 1, so x−1 is added; repeating, every number down to 2 ends up on the board. For n > 1 the answer is n − 1; for n = 1 it is 1.",
 "variants": [
  {
   "name": "Everything from 2 to n appears",
   "code": "class Solution:\n    def distinctIntegers(self, n):\n        return max(1, n - 1)",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "For any x > 2 on the board, x % (x−1) = 1, so x−1 is added; repeating, every number down to 2 ends up on the board. For n > 1 the answer is n − 1; for n = 1 it is 1.",
   "frames": []
  }
 ]
};
