window.PROBLEM = {
 "id": "773",
 "title": "Sliding Puzzle",
 "level": "Hard",
 "topic": "Graph",
 "question": "",
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
   "frames": []
  }
 ]
};
