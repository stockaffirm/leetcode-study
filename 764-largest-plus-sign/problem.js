window.PROBLEM = {
 "id": "764",
 "title": "Largest Plus Sign",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "A 5×5 grid with one hole at (4,2): the biggest plus has order 2 (arm length 1 on each side).",
 "idea": "The plus around a cell is limited by the shortest of its four arms. For every cell compute how many consecutive non-hole cells end there from the left, right, top and bottom; the order is the minimum of the four. Take the maximum.",
 "input": "n = 5, mines = [[4,2]]",
 "output": "2",
 "notes": [],
 "best": "The plus around a cell is limited by the shortest of its four arms. For every cell compute how many consecutive non-hole cells end there from the left, right, top and bottom; the order is the minimum of the four. Take the maximum.",
 "variants": [
  {
   "name": "Four directional runs per cell",
   "code": "class Solution:\n    def orderOfLargestPlusSign(self, n, mines):\n        banned = {(x, y) for x, y in mines}\n        dp = [[n] * n for _ in range(n)]\n        for i in range(n):\n            cnt = 0\n            for j in range(n):\n                cnt = 0 if (i, j) in banned else cnt + 1\n                dp[i][j] = min(dp[i][j], cnt)\n            cnt = 0\n            for j in range(n - 1, -1, -1):\n                cnt = 0 if (i, j) in banned else cnt + 1\n                dp[i][j] = min(dp[i][j], cnt)\n        for j in range(n):\n            cnt = 0\n            for i in range(n):\n                cnt = 0 if (i, j) in banned else cnt + 1\n                dp[i][j] = min(dp[i][j], cnt)\n            cnt = 0\n            for i in range(n - 1, -1, -1):\n                cnt = 0 if (i, j) in banned else cnt + 1\n                dp[i][j] = min(dp[i][j], cnt)\n        return max(max(row) for row in dp)",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "The plus around a cell is limited by the shortest of its four arms. For every cell compute how many consecutive non-hole cells end there from the left, right, top and bottom; the order is the minimum of the four. Take the maximum.",
   "frames": []
  }
 ]
};
