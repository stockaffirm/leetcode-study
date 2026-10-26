window.PROBLEM = {
 "id": "529",
 "title": "Minesweeper",
 "level": "Medium",
 "topic": "Matrix",
 "question": "Play one click of Minesweeper. Cells are 'M' (hidden mine), 'E' (hidden empty), 'B' (revealed blank), a digit (revealed, number of neighbouring mines) or 'X' (revealed mine). After a click: a mine becomes 'X'; an empty cell with no neighbouring mines becomes 'B' and all its neighbours (8 directions) are revealed the same way; an empty cell with mines around becomes that digit. Return the board.",
 "why": "Clicking the bottom-left empty cell has no mine around it, so it opens ('B') and the opening spreads to its neighbours until cells next to the mine show numbers.",
 "idea": "Clicking a mine ends the game ('X'). Otherwise count the mines around the clicked cell. If there are some, show the number; if none, mark it 'B' and reveal all its unrevealed neighbours the same way.",
 "input": "board 3×3 with one mine \"M\" at the right of the middle row, click = [2,0]",
 "output": "[[\"B\",\"1\",\"E\"],[\"B\",\"1\",\"M\"],[\"B\",\"1\",\"E\"]]",
 "notes": [],
 "best": "Clicking a mine ends the game ('X'). Otherwise count the mines around the clicked cell. If there are some, show the number; if none, mark it 'B' and reveal all its unrevealed neighbours the same way.",
 "variants": [
  {
   "name": "DFS reveal",
   "code": "class Solution:\n    def updateBoard(self, board, click):\n        m, n = len(board), len(board[0])\n        r, c = click\n        if board[r][c] == \"M\":\n            board[r][c] = \"X\"\n            return board\n        def dfs(i, j):\n            if not (0 <= i < m and 0 <= j < n) or board[i][j] != \"E\":\n                return\n            mines = sum(0 <= a < m and 0 <= b < n and board[a][b] == \"M\"\n                        for a in range(i - 1, i + 2) for b in range(j - 1, j + 2))\n            if mines:\n                board[i][j] = str(mines)\n                return\n            board[i][j] = \"B\"\n            for a in range(i - 1, i + 2):\n                for b in range(j - 1, j + 2):\n                    dfs(a, b)\n        dfs(r, c)\n        return board",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Clicking a mine ends the game ('X'). Otherwise count the mines around the clicked cell. If there are some, show the number; if none, mark it 'B' and reveal all its unrevealed neighbours the same way.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "BFS reveal",
   "tag": "Alternative",
   "code": "class Solution:\n    def updateBoard(self, board, click):\n        m, n = len(board), len(board[0])\n        r, c = click\n        if board[r][c] == \"M\":\n            board[r][c] = \"X\"\n            return board\n        q = deque([(r, c)])\n        seen = {(r, c)}\n        while q:\n            i, j = q.popleft()\n            nbrs = [(a, b) for a in range(i - 1, i + 2) for b in range(j - 1, j + 2)\n                    if 0 <= a < m and 0 <= b < n and (a, b) != (i, j)]\n            mines = sum(board[a][b] == \"M\" for a, b in nbrs)\n            if mines:\n                board[i][j] = str(mines)\n            else:\n                board[i][j] = \"B\"\n                for a, b in nbrs:\n                    if (a, b) not in seen and board[a][b] == \"E\":\n                        seen.add((a, b))\n                        q.append((a, b))\n        return board",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "The same reveal rules with a queue instead of recursion.",
   "frames": [],
   "alt": true
  }
 ]
};
