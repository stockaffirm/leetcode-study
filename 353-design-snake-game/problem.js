window.PROBLEM = {
 "id": "353",
 "title": "Design Snake Game",
 "level": "Medium",
 "topic": "Design",
 "question": "",
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
   "frames": []
  }
 ]
};
