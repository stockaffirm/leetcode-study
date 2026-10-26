window.PROBLEM = {
 "id": "3071",
 "title": "Minimum Operations to Write the Letter Y on a Grid",
 "level": "Medium",
 "topic": "Matrix",
 "question": "",
 "why": "A grid of 0/1/2. Make the cells that form the letter Y all the same value, and every other cell one DIFFERENT same value. Each cell change costs 1.",
 "idea": "Count how many Y cells and non-Y cells hold each value. For every choice of (value for Y, value for the rest) with the two different, the cost is the cells that don't already match; take the minimum.",
 "input": "[[1,2,2],[1,1,0],[0,1,0]]",
 "output": "3",
 "notes": [],
 "best": "Count how many Y cells and non-Y cells hold each value. For every choice of (value for Y, value for the rest) with the two different, the cost is the cells that don't already match; take the minimum.",
 "variants": [
  {
   "name": "Try every pair of values",
   "code": "class Solution:\n    def minimumOperationsToWriteY(self, grid):\n        n = len(grid)\n        c = n // 2\n        y, other = Counter(), Counter()\n        for i in range(n):\n            for j in range(n):\n                on_y = (i <= c and (i == j or i + j == n - 1)) or (i >= c and j == c)\n                (y if on_y else other)[grid[i][j]] += 1\n        ny, no = sum(y.values()), sum(other.values())\n        best = float('inf')\n        for a in range(3):\n            for b in range(3):\n                if a != b:\n                    best = min(best, (ny - y[a]) + (no - other[b]))\n        return best",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Count how many Y cells and non-Y cells hold each value. For every choice of (value for Y, value for the rest) with the two different, the cost is the cells that don't already match; take the minimum.",
   "frames": []
  }
 ]
};
