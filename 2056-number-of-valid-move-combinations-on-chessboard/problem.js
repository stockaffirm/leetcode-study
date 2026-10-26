window.PROBLEM = {
 "id": "2056",
 "title": "Number of Valid Move Combinations On Chessboard",
 "level": "Hard",
 "topic": "Backtracking",
 "question": "",
 "why": "One rook at (1,1) can end on 15 squares (14 moves along its row and column plus staying) → 15.",
 "idea": "Each piece chooses a direction and a distance (or stays). Describe every move by the square it occupies at times 0 … 7 (it waits at the destination). Backtrack over the pieces choosing one move each and reject a combination as soon as two pieces share a square at the same time. Count the complete combinations.",
 "input": "pieces = [\"rook\"], positions = [[1,1]]",
 "output": "15",
 "notes": [],
 "best": "Each piece chooses a direction and a distance (or stays). Describe every move by the square it occupies at times 0 … 7 (it waits at the destination). Backtrack over the pieces choosing one move each and reject a combination as soon as two pieces share a square at the same time. Count the complete combinations.",
 "variants": [
  {
   "name": "Enumerate each piece's moves, compare paths over time",
   "code": "class Solution:\n    def countCombinations(self, pieces, positions):\n        rook = [(1, 0), (-1, 0), (0, 1), (0, -1)]\n        bishop = [(1, 1), (1, -1), (-1, 1), (-1, -1)]\n        def all_moves(piece, r, c):\n            dirs = {\"rook\": rook, \"bishop\": bishop, \"queen\": rook + bishop}[piece]\n            moves = [[(r, c)] * 8]\n            for dr, dc in dirs:\n                for k in range(1, 8):\n                    nr, nc = r + dr * k, c + dc * k\n                    if not (1 <= nr <= 8 and 1 <= nc <= 8):\n                        break\n                    moves.append([(r + dr * min(t, k), c + dc * min(t, k)) for t in range(8)])\n            return moves\n        options = [all_moves(p, r, c) for p, (r, c) in zip(pieces, positions)]\n        chosen = []\n        def clash(a, b):\n            return any(x == y for x, y in zip(a, b))\n        def go(i):\n            if i == len(pieces):\n                return 1\n            total = 0\n            for mv in options[i]:\n                if all(not clash(mv, other) for other in chosen):\n                    chosen.append(mv)\n                    total += go(i + 1)\n                    chosen.pop()\n            return total\n        return go(0)",
   "time": "O(moves^n · 8)",
   "space": "O(n)",
   "explain": "Each piece chooses a direction and a distance (or stays). Describe every move by the square it occupies at times 0 … 7 (it waits at the destination). Backtrack over the pieces choosing one move each and reject a combination as soon as two pieces share a square at the same time. Count the complete combinations.",
   "frames": []
  }
 ]
};
