window.PROBLEM = {
 "id": "529",
 "title": "Minesweeper",
 "level": "Medium",
 "topic": "Matrix",
 "question": "",
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
   "frames": []
  }
 ]
};
