window.PROBLEM = {
 "id": "2275",
 "title": "Largest Combination With Bitwise AND Greater Than Zero",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "[16,17,71,62,12,24,14]: four of them have bit 2 set, and their AND is > 0 → 4.",
 "idea": "The AND of a group is non-zero exactly when all of them share at least one set bit. So count, for each bit position, how many numbers have it, and take the largest count.",
 "input": "candidates = [16,17,71,62,12,24,14]",
 "output": "4",
 "notes": [],
 "best": "The AND of a group is non-zero exactly when all of them share at least one set bit. So count, for each bit position, how many numbers have it, and take the largest count.",
 "variants": [
  {
   "name": "Most numbers sharing one bit",
   "code": "class Solution:\n    def largestCombination(self, candidates):\n        return max(sum((x >> b) & 1 for x in candidates) for b in range(25))",
   "time": "O(n log max)",
   "space": "O(1)",
   "explain": "The AND of a group is non-zero exactly when all of them share at least one set bit. So count, for each bit position, how many numbers have it, and take the largest count.",
   "frames": []
  }
 ]
};
