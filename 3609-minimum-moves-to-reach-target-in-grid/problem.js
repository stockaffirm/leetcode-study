window.PROBLEM = {
 "id": "3609",
 "title": "Minimum Moves to Reach Target in Grid",
 "level": "Hard",
 "topic": "Greedy",
 "question": "",
 "why": "(1,2) → (1,4) → (5,4) takes 2 moves.",
 "idea": "A move adds m = max(x, y) to one coordinate. Reverse it: from (X, Y) with X > Y, if X ≥ 2Y the last move doubled X (needs X even, previous x = X/2); otherwise the previous point was (X − Y, Y). Symmetric for Y > X. At X == Y the previous point was (0, Y) or (X, 0), only possible if the start has a zero. Stop on reaching the start, or return −1 when a coordinate drops below the start's.",
 "input": "sx = 1, sy = 2, tx = 5, ty = 4",
 "output": "2",
 "notes": [],
 "best": "A move adds m = max(x, y) to one coordinate. Reverse it: from (X, Y) with X > Y, if X ≥ 2Y the last move doubled X (needs X even, previous x = X/2); otherwise the previous point was (X − Y, Y). Symmetric for Y > X. At X == Y the previous point was (0, Y) or (X, 0), only possible if the start has a zero. Stop on reaching the start, or return −1 when a coordinate drops below the start's.",
 "variants": [
  {
   "name": "Undo the moves from the target backwards",
   "code": "class Solution:\n    def minMoves(self, sx, sy, tx, ty):\n        moves = 0\n        while (tx, ty) != (sx, sy):\n            if tx < sx or ty < sy:\n                return -1\n            if tx == ty:\n                if sx == 0 and sy == 0:\n                    return -1\n                if sx == 0:\n                    tx = 0\n                elif sy == 0:\n                    ty = 0\n                else:\n                    return -1\n            elif tx > ty:\n                if tx >= 2 * ty:\n                    if tx % 2:\n                        return -1\n                    tx //= 2\n                else:\n                    tx -= ty\n            else:\n                if ty >= 2 * tx:\n                    if ty % 2:\n                        return -1\n                    ty //= 2\n                else:\n                    ty -= tx\n            moves += 1\n        return moves",
   "time": "O(log target)",
   "space": "O(1)",
   "explain": "A move adds m = max(x, y) to one coordinate. Reverse it: from (X, Y) with X > Y, if X ≥ 2Y the last move doubled X (needs X even, previous x = X/2); otherwise the previous point was (X − Y, Y). Symmetric for Y > X. At X == Y the previous point was (0, Y) or (X, 0), only possible if the start has a zero. Stop on reaching the start, or return −1 when a coordinate drops below the start's.",
   "frames": []
  }
 ]
};
