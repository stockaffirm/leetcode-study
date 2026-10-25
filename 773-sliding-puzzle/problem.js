window.PROBLEM = {
 "id": "773",
 "title": "Sliding Puzzle",
 "level": "Hard",
 "topic": "Graph",
 "question": "A 2 × 3 board holds the tiles 1 to 5 and one empty square written 0. A move swaps the empty square with a tile next to it (up, down, left or right). The puzzle is solved when the board is [[1,2,3],[4,5,0]]. Given the starting board, return the fewest moves needed to solve it, or -1 if it can't be solved. Example: [[4,1,2],[5,0,3]] → 5 moves.",
 "why": "A 2×3 puzzle with tiles 1–5 and one empty square. Slide tiles into the gap to reach [[1,2,3],[4,5,0]]. Fewest moves?",
 "idea": "Every arrangement of the board is a state; one slide gets you to a neighbouring state. BFS from the start state finds the fewest moves; if the goal is never reached, it is unsolvable (−1).",
 "input": "[[4,1,2],[5,0,3]]",
 "output": "5",
 "notes": [],
 "best": "Every arrangement of the board is a state; one slide gets you to a neighbouring state. BFS from the start state finds the fewest moves; if the goal is never reached, it is unsolvable (−1).",
 "variants": [
  {
   "name": "BFS over board states",
   "code": "class Solution:\n    def slidingPuzzle(self, board):\n        start = ''.join(str(x) for row in board for x in row)\n        goal = '123450'\n        nbrs = {0: (1, 3), 1: (0, 2, 4), 2: (1, 5), 3: (0, 4), 4: (1, 3, 5), 5: (2, 4)}\n        q, seen = deque([(start, 0)]), {start}\n        while q:\n            s, d = q.popleft()\n            if s == goal: return d\n            z = s.index('0')\n            for j in nbrs[z]:\n                t = list(s)\n                t[z], t[j] = t[j], t[z]\n                t = ''.join(t)\n                if t not in seen:\n                    seen.add(t)\n                    q.append((t, d + 1))\n        return -1",
   "time": "O(6!)",
   "space": "O(6!)",
   "explain": "Every arrangement of the board is a state; one slide gets you to a neighbouring state. BFS from the start state finds the fewest moves; if the goal is never reached, it is unsolvable (−1).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "BFS level by level",
   "tag": "Alternative",
   "code": "class Solution:\n    def slidingPuzzle(self, board):\n        start = ''.join(str(x) for row in board for x in row)\n        goal = '123450'\n        nbrs = {0: (1, 3), 1: (0, 2, 4), 2: (1, 5), 3: (0, 4), 4: (1, 3, 5), 5: (2, 4)}\n        level, seen, steps = {start}, {start}, 0\n        while level:\n            if goal in level: return steps\n            nxt = set()\n            for s in level:\n                z = s.index('0')\n                for j in nbrs[z]:\n                    t = list(s)\n                    t[z], t[j] = t[j], t[z]\n                    t = ''.join(t)\n                    if t not in seen:\n                        seen.add(t)\n                        nxt.add(t)\n            level = nxt\n            steps += 1\n        return -1",
   "time": "O(6!)",
   "space": "O(6!)",
   "explain": "Keep the whole current layer of states in a set and expand it at once.",
   "frames": [],
   "alt": true
  }
 ]
};
