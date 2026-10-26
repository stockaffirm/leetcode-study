window.PROBLEM = {
 "id": "174",
 "title": "Dungeon Game",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "A knight crosses a grid from the top-left to the bottom-right moving right or down; each room adds or subtracts health. His health must stay at least 1 at all times. Find the smallest starting health.",
 "idea": "Work backwards: need[i][j] = the health required when entering the cell = max(1, min(need of the two next cells) − value).",
 "input": "[[-2,-3,3],[-5,-10,1],[10,30,-5]]",
 "output": "7",
 "notes": [],
 "best": "Work backwards: need[i][j] = the health required when entering the cell = max(1, min(need of the two next cells) − value).",
 "variants": [
  {
   "name": "DP from the princess backwards",
   "code": "class Solution:\n    def calculateMinimumHP(self, dungeon):\n        m, n = len(dungeon), len(dungeon[0])\n        need = [float('inf')] * (n + 1)\n        need[n - 1] = 1\n        for i in range(m - 1, -1, -1):\n            for j in range(n - 1, -1, -1):\n                need[j] = max(1, min(need[j], need[j + 1]) - dungeon[i][j])\n            need[n] = float('inf')\n        return need[0]",
   "time": "O(mn)",
   "space": "O(n)",
   "explain": "Work backwards: need[i][j] = the health required when entering the cell = max(1, min(need of the two next cells) − value).",
   "frames": []
  }
 ]
};
