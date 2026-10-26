window.PROBLEM = {
 "id": "1246",
 "title": "Palindrome Removal",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "[1,3,4,1,5] → remove 4, then 1,3,1 ... → 3 moves.",
 "idea": "dp[i][j] = fewest moves to remove arr[i..j]. Remove arr[i] alone (1 + dp[i+1][j]); or if arr[i] equals some arr[k], remove the block between them first and let the two ends join a palindrome: dp[i+1][k−1] + dp[k+1][j] (with the case k = i + 1 costing 1 for the pair).",
 "input": "arr = [1,3,4,1,5]",
 "output": "3",
 "notes": [],
 "best": "dp[i][j] = fewest moves to remove arr[i..j]. Remove arr[i] alone (1 + dp[i+1][j]); or if arr[i] equals some arr[k], remove the block between them first and let the two ends join a palindrome: dp[i+1][k−1] + dp[k+1][j] (with the case k = i + 1 costing 1 for the pair).",
 "variants": [
  {
   "name": "Interval DP: remove a palindromic subarray each move",
   "code": "class Solution:\n    def minimumMoves(self, arr):\n        n = len(arr)\n        dp = [[0] * (n + 1) for _ in range(n + 1)]\n        for length in range(1, n + 1):\n            for i in range(n - length + 1):\n                j = i + length - 1\n                best = 1 + (dp[i + 1][j] if i + 1 <= j else 0)\n                for k in range(i + 1, j + 1):\n                    if arr[i] == arr[k]:\n                        inner = dp[i + 1][k - 1] if i + 1 <= k - 1 else 0\n                        outer = dp[k + 1][j] if k + 1 <= j else 0\n                        best = min(best, max(1, inner) + outer)\n                dp[i][j] = best\n        return dp[0][n - 1]",
   "time": "O(n³)",
   "space": "O(n²)",
   "explain": "dp[i][j] = fewest moves to remove arr[i..j]. Remove arr[i] alone (1 + dp[i+1][j]); or if arr[i] equals some arr[k], remove the block between them first and let the two ends join a palindrome: dp[i+1][k−1] + dp[k+1][j] (with the case k = i + 1 costing 1 for the pair).",
   "frames": []
  }
 ]
};
