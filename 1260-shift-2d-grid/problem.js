window.PROBLEM = {
 "id": "1260",
 "title": "Shift 2D Grid",
 "level": "Easy",
 "topic": "Matrix",
 "question": "",
 "why": "[[1,2,3],[4,5,6],[7,8,9]], k=1 → [[9,1,2],[3,4,5],[6,7,8]].",
 "idea": "Shifting k times moves every cell k places forward in row-major order (wrapping). Flatten the grid, rotate the list right by k mod (m·n), and cut it back into rows.",
 "input": "grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1",
 "output": "[[9, 1, 2], [3, 4, 5], [6, 7, 8]]",
 "notes": [],
 "best": "Shifting k times moves every cell k places forward in row-major order (wrapping). Flatten the grid, rotate the list right by k mod (m·n), and cut it back into rows.",
 "variants": [
  {
   "name": "Flatten, rotate by k, reshape",
   "code": "class Solution:\n    def shiftGrid(self, grid, k):\n        m, n = len(grid), len(grid[0])\n        flat = [v for row in grid for v in row]\n        k %= m * n\n        flat = flat[-k:] + flat[:-k] if k else flat\n        return [flat[i * n:(i + 1) * n] for i in range(m)]",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Shifting k times moves every cell k places forward in row-major order (wrapping). Flatten the grid, rotate the list right by k mod (m·n), and cut it back into rows.",
   "frames": []
  }
 ]
};
