window.PROBLEM = {
 "id": "1861",
 "title": "Rotating the Box",
 "level": "Medium",
 "topic": "Matrix",
 "question": "You are given a box as a grid of characters: '#' is a stone, '*' is a fixed obstacle and '.' is empty. The box is turned 90° CLOCKWISE; during the turn, gravity makes every stone fall as far as it can (it stops at an obstacle, another stone or the bottom) — obstacles do not move. Return the grid after the rotation. Example: [['#','.','#']] → [['.'],['#'],['#']].",
 "why": "A box of stones (#), obstacles (*) and empty cells (.) is rotated 90° clockwise; stones fall down (towards the new bottom) until they hit something.",
 "idea": "Before rotating, a stone falls to the RIGHT. So in each row, scan from the right and move every stone to the rightmost free cell before the next obstacle. Then rotate the grid clockwise.",
 "input": "[[\"#\",\".\",\"#\"]]",
 "output": "[[\".\"],[\"#\"],[\"#\"]]",
 "notes": [],
 "best": "Before rotating, a stone falls to the RIGHT. So in each row, scan from the right and move every stone to the rightmost free cell before the next obstacle. Then rotate the grid clockwise.",
 "variants": [
  {
   "name": "Let stones fall right, then rotate",
   "code": "class Solution:\n    def rotateTheBox(self, boxGrid):\n        m, n = len(boxGrid), len(boxGrid[0])\n        for row in boxGrid:\n            empty = n - 1\n            for j in range(n - 1, -1, -1):\n                if row[j] == '*': empty = j - 1\n                elif row[j] == '#':\n                    row[j], row[empty] = '.', '#'\n                    empty -= 1\n        return [[boxGrid[m - 1 - i][j] for i in range(m)] for j in range(n)]",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Before rotating, a stone falls to the RIGHT. So in each row, scan from the right and move every stone to the rightmost free cell before the next obstacle. Then rotate the grid clockwise.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Rotate first, then drop stones",
   "tag": "Alternative",
   "code": "class Solution:\n    def rotateTheBox(self, boxGrid):\n        m, n = len(boxGrid), len(boxGrid[0])\n        rot = [[boxGrid[m - 1 - i][j] for i in range(m)] for j in range(n)]\n        for c in range(m):\n            lowest = n - 1\n            for r in range(n - 1, -1, -1):\n                if rot[r][c] == '*': lowest = r - 1\n                elif rot[r][c] == '#':\n                    rot[r][c] = '.'\n                    rot[lowest][c] = '#'\n                    lowest -= 1\n        return rot",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Rotate the grid, then let stones fall down each column of the rotated grid.",
   "frames": [],
   "alt": true
  }
 ]
};
