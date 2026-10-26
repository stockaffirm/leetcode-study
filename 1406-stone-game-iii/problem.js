window.PROBLEM = {
 "id": "1406",
 "title": "Stone Game III",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "[1,2,3,7] → Bob wins.",
 "idea": "Let dp[i] be the best (current player − other player) score difference using stones from i onwards. Taking j = 1…3 stones gives the sum of those stones minus dp[i + j]. Alice wins if dp[0] > 0, Bob if < 0, otherwise a tie.",
 "input": "stoneValue = [1,2,3,7]",
 "output": "\"Bob\"",
 "notes": [],
 "best": "Let dp[i] be the best (current player − other player) score difference using stones from i onwards. Taking j = 1…3 stones gives the sum of those stones minus dp[i + j]. Alice wins if dp[0] > 0, Bob if < 0, otherwise a tie.",
 "variants": [
  {
   "name": "dp[i] = best score difference for the player to move",
   "code": "class Solution:\n    def stoneGameIII(self, stoneValue):\n        n = len(stoneValue)\n        dp = [0] * (n + 3)\n        for i in range(n - 1, -1, -1):\n            best = float('-inf')\n            take = 0\n            for j in range(3):\n                if i + j < n:\n                    take += stoneValue[i + j]\n                    best = max(best, take - dp[i + j + 1])\n            dp[i] = best\n        return \"Alice\" if dp[0] > 0 else \"Bob\" if dp[0] < 0 else \"Tie\"",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Let dp[i] be the best (current player − other player) score difference using stones from i onwards. Taking j = 1…3 stones gives the sum of those stones minus dp[i + j]. Alice wins if dp[0] > 0, Bob if < 0, otherwise a tie.",
   "frames": []
  }
 ]
};
