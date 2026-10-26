window.PROBLEM = {
 "id": "292",
 "title": "Nim Game",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "A heap of n stones; you and a friend alternately remove 1–3 stones, you go first, and whoever removes the last stone wins. Return true if you win with perfect play. Example: n=4 → false.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Win/lose table",
   "tag": "Brute force",
   "code": "class Solution:\n    def canWinNim(self, n):\n        win = [False] * (n + 4)\n        for i in range(1, n + 1):\n            win[i] = i <= 3 or not (win[i - 1] and win[i - 2] and win[i - 3])\n        return win[n]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "win[i] is true if some move of 1-3 stones leaves the opponent in a losing position.",
   "frames": [],
   "alt": true
  }
 ]
};
