window.PROBLEM = {
 "id": "877",
 "title": "Stone Game",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "Alice and Bob play with an even number of piles of stones in a row; with the total number of stones odd. They take turns taking a whole pile from either end, Alice first. The player with more stones wins. Assuming both play optimally return true if Alice wins. Example: [5,3,4,5] → true.",
 "why": "Piles [5,3,4,5]: Alice takes the first 5, Bob takes 5 or 4 … Alice can always end ahead → true.",
 "idea": "dp[i][j] is the best score difference (current player minus the other) for the piles i…j. The current player takes the left pile or the right pile and then faces the opponent's best difference on the rest: dp[i][j] = max(piles[i] − dp[i+1][j], piles[j] − dp[i][j−1]). Alice wins if dp[0][n−1] > 0.",
 "input": "piles = [5,3,4,5]",
 "output": "true",
 "notes": [],
 "best": "dp[i][j] is the best score difference (current player minus the other) for the piles i…j. The current player takes the left pile or the right pile and then faces the opponent's best difference on the rest: dp[i][j] = max(piles[i] − dp[i+1][j], piles[j] − dp[i][j−1]). Alice wins if dp[0][n−1] > 0.",
 "variants": [
  {
   "name": "Interval DP on the score difference",
   "code": "class Solution:\n    def stoneGame(self, piles):\n        n = len(piles)\n        dp = [[0] * n for _ in range(n)]\n        for i in range(n):\n            dp[i][i] = piles[i]\n        for length in range(2, n + 1):\n            for i in range(n - length + 1):\n                j = i + length - 1\n                dp[i][j] = max(piles[i] - dp[i + 1][j], piles[j] - dp[i][j - 1])\n        return dp[0][n - 1] > 0",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "dp[i][j] is the best score difference (current player minus the other) for the piles i…j. The current player takes the left pile or the right pile and then faces the opponent's best difference on the rest: dp[i][j] = max(piles[i] − dp[i+1][j], piles[j] − dp[i][j−1]). Alice wins if dp[0][n−1] > 0.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Alice always wins",
   "tag": "Math",
   "code": "class Solution:\n    def stoneGame(self, piles):\n        return True",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "With an even number of piles and an odd total Alice can choose to take all odd-position piles or all even-position piles, so she can always win.",
   "frames": [],
   "alt": true
  }
 ]
};
