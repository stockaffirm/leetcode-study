window.PROBLEM = {
 "id": "3870",
 "title": "Count Commas in Range",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "n=1002: 1,000, 1,001, 1,002 → 3 commas.",
 "idea": "With n up to 10⁵ every number from 1000 to n has exactly one comma and smaller numbers have none, so the answer is max(0, n − 999).",
 "input": "n = 1002",
 "output": "3",
 "notes": [],
 "best": "With n up to 10⁵ every number from 1000 to n has exactly one comma and smaller numbers have none, so the answer is max(0, n − 999).",
 "variants": [
  {
   "name": "Numbers from 1000 up have one comma",
   "code": "class Solution:\n    def countCommas(self, n):\n        return max(0, n - 999)",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "With n up to 10⁵ every number from 1000 to n has exactly one comma and smaller numbers have none, so the answer is max(0, n − 999).",
   "frames": []
  }
 ]
};
