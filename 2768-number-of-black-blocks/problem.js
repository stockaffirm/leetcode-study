window.PROBLEM = {
 "id": "2768",
 "title": "Number of Black Blocks",
 "level": "Medium",
 "topic": "Matrix",
 "question": "You have an m × n grid. Most cells are white; the black cells are listed in coordinates. A block is any 2 × 2 square of the grid. Return a list of 5 numbers where entry i is the number of blocks that contain exactly i black cells. Example: m=3, n=3, coordinates [[0,0]] → there are 4 blocks; one contains the black cell and three are all white → [3,1,0,0,0].",
 "why": "On an m×n grid some cells are black. How many 2×2 blocks contain 0, 1, 2, 3 and 4 black cells?",
 "idea": "The grid is huge but black cells are few. Each black cell touches up to four 2×2 blocks; count how many black cells each touched block has. Blocks never touched have 0 (total blocks minus the rest).",
 "input": "m=3, n=3, black [[0,0]]",
 "output": "[3, 1, 0, 0, 0]",
 "notes": [],
 "best": "The grid is huge but black cells are few. Each black cell touches up to four 2×2 blocks; count how many black cells each touched block has. Blocks never touched have 0 (total blocks minus the rest).",
 "variants": [
  {
   "name": "Count black cells per 2×2 block",
   "code": "class Solution:\n    def countBlackBlocks(self, m, n, coordinates):\n        cnt = Counter()\n        for x, y in coordinates:\n            for a in (x - 1, x):\n                for b in (y - 1, y):\n                    if 0 <= a < m - 1 and 0 <= b < n - 1: cnt[(a, b)] += 1\n        ans = [0] * 5\n        for c in cnt.values(): ans[c] += 1\n        ans[0] = (m - 1) * (n - 1) - sum(ans[1:])\n        return ans",
   "time": "O(black cells)",
   "space": "O(black cells)",
   "explain": "The grid is huge but black cells are few. Each black cell touches up to four 2×2 blocks; count how many black cells each touched block has. Blocks never touched have 0 (total blocks minus the rest).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every block",
   "tag": "Brute force",
   "code": "class Solution:\n    def countBlackBlocks(self, m, n, coordinates):\n        black = set(map(tuple, coordinates))\n        ans = [0] * 5\n        for a in range(m - 1):\n            for b in range(n - 1):\n                c = sum((a + i, b + j) in black for i in (0, 1) for j in (0, 1))\n                ans[c] += 1\n        return ans",
   "time": "O(m·n)",
   "space": "O(black cells)",
   "explain": "Slide over every 2×2 block and count its black cells (too slow for huge grids).",
   "frames": [],
   "alt": true
  }
 ]
};
