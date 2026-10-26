window.PROBLEM = {
 "id": "1025",
 "title": "Divisor Game",
 "level": "Easy",
 "topic": "Dynamic Programming",
 "question": "Alice and Bob start with a number n and take turns (Alice first): pick x with 0 < x < n and n % x == 0, and replace n by n − x. The player who cannot move loses. Return true if Alice wins with optimal play. Example: n=2 → true; n=3 → false.",
 "why": "n = 2: Alice picks 1, Bob has n = 1 and cannot move → Alice wins.",
 "idea": "dp[i] is true if the player to move wins with the number i. They win if some divisor x (0 < x < i) leaves the opponent in a losing position: not dp[i − x]. dp[1] is false. (It turns out Alice wins exactly for even n.)",
 "input": "n = 2",
 "output": "true",
 "notes": [],
 "best": "dp[i] is true if the player to move wins with the number i. They win if some divisor x (0 < x < i) leaves the opponent in a losing position: not dp[i − x]. dp[1] is false. (It turns out Alice wins exactly for even n.)",
 "variants": [
  {
   "name": "Win/lose DP over n",
   "code": "class Solution:\n    def divisorGame(self, n):\n        dp = [False] * (n + 1)\n        for i in range(2, n + 1):\n            dp[i] = any(i % x == 0 and not dp[i - x] for x in range(1, i))\n        return dp[n]",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "dp[i] is true if the player to move wins with the number i. They win if some divisor x (0 < x < i) leaves the opponent in a losing position: not dp[i − x]. dp[1] is false. (It turns out Alice wins exactly for even n.)",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Even n wins",
   "tag": "Math",
   "code": "class Solution:\n    def divisorGame(self, n):\n        return n % 2 == 0",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Alice can always subtract 1 on an even number, leaving an odd number from which every move gives back an even one.",
   "frames": [],
   "alt": true
  }
 ]
};
