window.PROBLEM = {
 "id": "292",
 "title": "Nim Game",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "n=4: whatever you take (1-3), your friend takes the rest → you lose → false.",
 "idea": "Taking 1–3 stones each turn, if n is a multiple of 4 the opponent can always answer so that 4 stones disappear per round, and you take the last-but-never. Otherwise take n mod 4 first and keep that up. So you win iff n % 4 != 0.",
 "input": "n = 4",
 "output": "false",
 "notes": [],
 "best": "Taking 1–3 stones each turn, if n is a multiple of 4 the opponent can always answer so that 4 stones disappear per round, and you take the last-but-never. Otherwise take n mod 4 first and keep that up. So you win iff n % 4 != 0.",
 "variants": [
  {
   "name": "You lose exactly when n is a multiple of 4",
   "code": "class Solution:\n    def canWinNim(self, n):\n        return n % 4 != 0",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Taking 1–3 stones each turn, if n is a multiple of 4 the opponent can always answer so that 4 stones disappear per round, and you take the last-but-never. Otherwise take n mod 4 first and keep that up. So you win iff n % 4 != 0.",
   "frames": []
  }
 ]
};
