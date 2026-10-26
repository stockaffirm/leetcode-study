window.PROBLEM = {
 "id": "1033",
 "title": "Moving Stones Until Consecutive",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "Stones at 1, 2, 5: at least 1 move (5 → 3), at most 2 moves (5 → 4 → 3).",
 "idea": "Sort the three positions x < y < z. Maximum: move one stone one step at a time → z − x − 2. Minimum: 0 if already consecutive, 1 if one gap is at most 1 (a stone can jump into it), otherwise 2.",
 "input": "a = 1, b = 2, c = 5",
 "output": "[1, 2]",
 "notes": [],
 "best": "Sort the three positions x < y < z. Maximum: move one stone one step at a time → z − x − 2. Minimum: 0 if already consecutive, 1 if one gap is at most 1 (a stone can jump into it), otherwise 2.",
 "variants": [
  {
   "name": "Case analysis on the gaps",
   "code": "class Solution:\n    def numMovesStones(self, a, b, c):\n        x, y, z = sorted((a, b, c))\n        high = z - x - 2\n        if high == 0:\n            return [0, 0]\n        low = 1 if y - x <= 2 or z - y <= 2 else 2\n        return [low, high]",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Sort the three positions x < y < z. Maximum: move one stone one step at a time → z − x − 2. Minimum: 0 if already consecutive, 1 if one gap is at most 1 (a stone can jump into it), otherwise 2.",
   "frames": []
  }
 ]
};
