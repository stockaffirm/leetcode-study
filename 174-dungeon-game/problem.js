window.PROBLEM = {
 "id": "174",
 "title": "Dungeon Game",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "A knight crosses a dungeon grid from the top-left to the bottom-right, moving only right or down. Each room changes his health by the number in it (negative = damage). His health must never drop to 0 or below. Return the minimum initial health needed. Example: [[−2,−3,3],[−5,−10,1],[10,30,−5]] → 7.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Binary search on the starting health",
   "tag": "Alternative",
   "code": "class Solution:\n    def calculateMinimumHP(self, dungeon):\n        m, n = len(dungeon), len(dungeon[0])\n        NEG = float('-inf')\n        def ok(h):\n            f = [[NEG] * n for _ in range(m)]\n            for i in range(m):\n                for j in range(n):\n                    prev = h if i == 0 and j == 0 else max(f[i - 1][j] if i else NEG, f[i][j - 1] if j else NEG)\n                    if prev == NEG: continue\n                    v = prev + dungeon[i][j]\n                    if v > 0: f[i][j] = v\n            return f[m - 1][n - 1] > 0\n        lo, hi = 1, 1 + sum(-x for row in dungeon for x in row if x < 0)\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if ok(mid): hi = mid\n            else: lo = mid + 1\n        return lo",
   "time": "O(mn log H)",
   "space": "O(n)",
   "explain": "For a starting health h, walk forwards keeping the best health along any path that stays positive.",
   "frames": [],
   "alt": true
  }
 ]
};
