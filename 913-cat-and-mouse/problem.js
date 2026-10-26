window.PROBLEM = {
 "id": "913",
 "title": "Cat and Mouse",
 "level": "Hard",
 "topic": "Graph",
 "question": "",
 "why": "A graph game where the mouse wins at the hole 0... the answer is 1 (mouse), 2 (cat) or 0 (draw).",
 "idea": "State = (mouse node, cat node, whose turn). Terminal states are known: the mouse at 0 wins, the cat on the mouse's node wins. Run a BFS (Breadth-First Search) backwards from them: a state is a win for the player to move if some move leads to a state they already won; it is a loss if every move leads to a state they lose (tracked by a degree counter). States never decided are draws.",
 "input": "graph = [[2,5],[3],[0,4,5],[1,4,5],[2,3],[0,2,3]]",
 "output": "0",
 "notes": [],
 "best": "State = (mouse node, cat node, whose turn). Terminal states are known: the mouse at 0 wins, the cat on the mouse's node wins. Run a BFS (Breadth-First Search) backwards from them: a state is a win for the player to move if some move leads to a state they already won; it is a loss if every move leads to a state they lose (tracked by a degree counter). States never decided are draws.",
 "variants": [
  {
   "name": "Retrograde analysis: work backwards from the known results",
   "code": "class Solution:\n    def catMouseGame(self, graph):\n        n = len(graph)\n        DRAW, MOUSE, CAT = 0, 1, 2\n        color = [[[DRAW] * 2 for _ in range(n)] for _ in range(n)]\n        degree = [[[0, 0] for _ in range(n)] for _ in range(n)]\n        for m in range(n):\n            for c in range(n):\n                degree[m][c][0] = len(graph[m])\n                degree[m][c][1] = len(graph[c]) - (0 in graph[c])\n        q = deque()\n        for t in range(2):\n            for c in range(1, n):\n                color[0][c][t] = MOUSE\n                q.append((0, c, t, MOUSE))\n                color[c][c][t] = CAT\n                q.append((c, c, t, CAT))\n        def parents(m, c, t):\n            if t == 1:\n                for pm in graph[m]:\n                    yield pm, c, 0\n            else:\n                for pc in graph[c]:\n                    if pc != 0:\n                        yield m, pc, 1\n        while q:\n            m, c, t, col = q.popleft()\n            for pm, pc, pt in parents(m, c, t):\n                if color[pm][pc][pt] != DRAW:\n                    continue\n                if (pt == 0 and col == MOUSE) or (pt == 1 and col == CAT):\n                    color[pm][pc][pt] = col\n                    q.append((pm, pc, pt, col))\n                else:\n                    degree[pm][pc][pt] -= 1\n                    if degree[pm][pc][pt] == 0:\n                        color[pm][pc][pt] = col\n                        q.append((pm, pc, pt, col))\n        return color[1][2][0]",
   "time": "O(n³)",
   "space": "O(n²)",
   "explain": "State = (mouse node, cat node, whose turn). Terminal states are known: the mouse at 0 wins, the cat on the mouse's node wins. Run a BFS (Breadth-First Search) backwards from them: a state is a win for the player to move if some move leads to a state they already won; it is a loss if every move leads to a state they lose (tracked by a degree counter). States never decided are draws.",
   "frames": []
  }
 ]
};
