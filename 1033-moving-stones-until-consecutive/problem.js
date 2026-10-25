window.PROBLEM = {
 "id": "1033",
 "title": "Moving Stones Until Consecutive",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "Three stones lie at different positions on a line. In one move take a stone from an end and put it at a free position between the others' range so it is no longer at an end. The game ends when the three stones are in consecutive positions. Return [minimum moves, maximum moves]. Example: a=1, b=2, c=5 → [1,2].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Use the two gaps",
   "tag": "Alternative",
   "code": "class Solution:\n    def numMovesStones(self, a, b, c):\n        x, y, z = sorted((a, b, c))\n        g1, g2 = y - x - 1, z - y - 1\n        if g1 == 0 and g2 == 0:\n            return [0, 0]\n        return [1 if min(g1, g2) <= 1 else 2, g1 + g2]",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Look at the empty cells between the stones: g1 left and g2 right. Max = g1 + g2; min is 0, 1 or 2 depending on the smaller gap.",
   "frames": [],
   "alt": true
  }
 ]
};
