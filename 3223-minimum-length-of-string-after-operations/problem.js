window.PROBLEM = {
 "id": "3223",
 "title": "Minimum Length of String After Operations",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "'abaacbcbb': a×3 → 1, b×4 → 2, c×2 → 2 → 5.",
 "idea": "An operation deletes the nearest equal letters on both sides of a chosen letter, removing 2 of that letter at a time while at least 3 remain. So a letter with count c shrinks to 1 if c is odd, or to 2 if c is even (c ≥ 2). Sum over the letters.",
 "input": "s = \"abaacbcbb\"",
 "output": "5",
 "notes": [],
 "best": "An operation deletes the nearest equal letters on both sides of a chosen letter, removing 2 of that letter at a time while at least 3 remain. So a letter with count c shrinks to 1 if c is odd, or to 2 if c is even (c ≥ 2). Sum over the letters.",
 "variants": [
  {
   "name": "Odd count leaves one, even count leaves two",
   "code": "class Solution:\n    def minimumLength(self, s):\n        return sum(1 if c % 2 else 2 for c in Counter(s).values())",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "An operation deletes the nearest equal letters on both sides of a chosen letter, removing 2 of that letter at a time while at least 3 remain. So a letter with count c shrinks to 1 if c is odd, or to 2 if c is even (c ≥ 2). Sum over the letters.",
   "frames": []
  }
 ]
};
