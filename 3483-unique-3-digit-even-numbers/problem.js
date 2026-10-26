window.PROBLEM = {
 "id": "3483",
 "title": "Unique 3-Digit Even Numbers",
 "level": "Easy",
 "topic": "Backtracking",
 "question": "",
 "why": "digits [1,2,3,4]: all 3-digit numbers from distinct positions that end in 2 or 4 → 12.",
 "idea": "Take every ordered choice of three positions (so each digit card is used at most once), form the number, keep it if the first digit is not 0 and the last digit is even, and count distinct values.",
 "input": "digits = [1,2,3,4]",
 "output": "12",
 "notes": [],
 "best": "Take every ordered choice of three positions (so each digit card is used at most once), form the number, keep it if the first digit is not 0 and the last digit is even, and count distinct values.",
 "variants": [
  {
   "name": "Distinct permutations without leading zero",
   "code": "class Solution:\n    def totalNumbers(self, digits):\n        seen = set()\n        for a, b, c in permutations(digits, 3):\n            if a != 0 and c % 2 == 0:\n                seen.add(a * 100 + b * 10 + c)\n        return len(seen)",
   "time": "O(n³)",
   "space": "O(n³)",
   "explain": "Take every ordered choice of three positions (so each digit card is used at most once), form the number, keep it if the first digit is not 0 and the last digit is even, and count distinct values.",
   "frames": []
  }
 ]
};
