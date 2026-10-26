window.PROBLEM = {
 "id": "1411",
 "title": "Number of Ways to Paint N × 3 Grid",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "n=1 has 12 colourings (6 of type ABC, 6 of type ABA); n=2 has 54.",
 "idea": "A row with 3 cells and 3 colours is either three different colours (ABC type, 6 ways) or the outer two equal (ABA type, 6 ways). From an ABC row the next row can be 2 ABC and 2 ABA patterns; from an ABA row it can be 2 ABC and 3 ABA. Iterate: abc' = 2·abc + 2·aba, aba' = 2·abc + 3·aba.",
 "input": "n = 2",
 "output": "54",
 "notes": [],
 "best": "A row with 3 cells and 3 colours is either three different colours (ABC type, 6 ways) or the outer two equal (ABA type, 6 ways). From an ABC row the next row can be 2 ABC and 2 ABA patterns; from an ABA row it can be 2 ABC and 3 ABA. Iterate: abc' = 2·abc + 2·aba, aba' = 2·abc + 3·aba.",
 "variants": [
  {
   "name": "Two row patterns: ABC and ABA",
   "code": "class Solution:\n    def numOfWays(self, n):\n        MOD = 10**9 + 7\n        abc, aba = 6, 6\n        for _ in range(n - 1):\n            abc, aba = (2 * abc + 2 * aba) % MOD, (2 * abc + 3 * aba) % MOD\n        return (abc + aba) % MOD",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "A row with 3 cells and 3 colours is either three different colours (ABC type, 6 ways) or the outer two equal (ABA type, 6 ways). From an ABC row the next row can be 2 ABC and 2 ABA patterns; from an ABA row it can be 2 ABC and 3 ABA. Iterate: abc' = 2·abc + 2·aba, aba' = 2·abc + 3·aba.",
   "frames": []
  }
 ]
};
