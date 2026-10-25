window.PROBLEM = {
 "id": "353",
 "title": "Design Snake Game",
 "level": "Medium",
 "topic": "Design",
 "question": "Design the classic Snake game on a grid of the given width and height. The snake starts at the top-left cell with length 1 and a list of foods (positions [row, col]) appears one at a time. move(direction) with 'U', 'D', 'L' or 'R' moves the snake one cell; it grows by 1 and the score increases when its head reaches the current food. The game ends (return −1) if the head leaves the grid or runs into its own body (the cell the tail has just left is free). Otherwise return the score. Example: 3 × 2 board, foods [[1,2],[0,1]], moves R, D, R, U, L, U → 0, 0, 1, 1, 2, −1.",
 "why": "Simulate the Snake game: the snake moves one cell per step, grows when it eats food, and the game ends if it hits a wall or itself. Report the score after every move (−1 when the game is over).",
 "idea": "Keep the body cells in a deque (head at the right) and in a set for quick collision checks. Each move: compute the new head; if no food is eaten drop the tail first; then check for walls and self-collision; add the new head.",
 "input": "3×2 board, food [[1,2],[0,1]]; moves R, D, R, U, L, U",
 "output": "0, 0, 1, 1, 2, -1",
 "notes": [],
 "best": "Keep the body cells in a deque (head at the right) and in a set for quick collision checks. Each move: compute the new head; if no food is eaten drop the tail first; then check for walls and self-collision; add the new head.",
 "variants": [
  {
   "name": "Deque of body cells + set",
   "code": "class SnakeGame:\n    def __init__(self, width, height, food):\n        self.w, self.h, self.food, self.fi = width, height, food, 0\n        self.body = deque([(0, 0)])\n        self.cells = {(0, 0)}\n        self.score = 0\n    def move(self, direction):\n        r, c = self.body[-1]\n        dr, dc = {'U': (-1, 0), 'D': (1, 0), 'L': (0, -1), 'R': (0, 1)}[direction]\n        r, c = r + dr, c + dc\n        if not (0 <= r < self.h and 0 <= c < self.w): return -1\n        ate = self.fi < len(self.food) and [r, c] == self.food[self.fi]\n        tail = self.body[0]\n        if not ate:\n            self.body.popleft()\n            self.cells.discard(tail)\n        if (r, c) in self.cells: return -1\n        self.body.append((r, c))\n        self.cells.add((r, c))\n        if ate:\n            self.fi += 1\n            self.score += 1\n        return self.score",
   "time": "O(1) per move",
   "space": "O(snake length)",
   "explain": "Keep the body cells in a deque (head at the right) and in a set for quick collision checks. Each move: compute the new head; if no food is eaten drop the tail first; then check for walls and self-collision; add the new head.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Plain list body",
   "tag": "Brute force",
   "code": "class SnakeGame:\n    def __init__(self, width, height, food):\n        self.w, self.h, self.food = width, height, [tuple(f) for f in food]\n        self.body = [(0, 0)]\n        self.score = 0\n    def move(self, direction):\n        dr, dc = {'U': (-1, 0), 'D': (1, 0), 'L': (0, -1), 'R': (0, 1)}[direction]\n        r, c = self.body[-1][0] + dr, self.body[-1][1] + dc\n        if not (0 <= r < self.h and 0 <= c < self.w): return -1\n        if self.score < len(self.food) and (r, c) == self.food[self.score]:\n            self.score += 1\n        else:\n            self.body.pop(0)\n        if (r, c) in self.body: return -1\n        self.body.append((r, c))\n        return self.score",
   "time": "O(length) per move",
   "space": "O(length)",
   "explain": "The snake as a list; collision is checked by scanning it.",
   "frames": [],
   "alt": true
  }
 ]
};
