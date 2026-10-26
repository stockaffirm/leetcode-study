window.PROBLEM = {
 "id": "279",
 "title": "Perfect Squares",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "Return the least number of perfect squares (1, 4, 9, 16 …) that add up to n. Example: 12 → 3 (4+4+4).",
 "why": "n=12 = 4 + 4 + 4 → 3 squares.",
 "idea": "dp[i] = fewest perfect squares summing to i: min over squares s ≤ i of dp[i − s] + 1. Build up to n.",
 "input": "n = 12",
 "output": "3",
 "notes": [],
 "best": "dp[i] = fewest perfect squares summing to i: min over squares s ≤ i of dp[i − s] + 1. Build up to n.",
 "variants": [
  {
   "name": "Coin-change style DP over squares",
   "code": "class Solution:\n    def numSquares(self, n):\n        dp = [0] + [float('inf')] * n\n        for i in range(1, n + 1):\n            j = 1\n            while j * j <= i:\n                dp[i] = min(dp[i], dp[i - j * j] + 1)\n                j += 1\n        return dp[n]",
   "time": "O(n√n)",
   "space": "O(n)",
   "explain": "dp[i] = fewest perfect squares summing to i: min over squares s ≤ i of dp[i − s] + 1. Build up to n.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "BFS over remainders",
   "tag": "Alternative",
   "code": "class Solution:\n    def numSquares(self, n):\n        q = deque([n])\n        seen = {n}\n        steps = 0\n        while q:\n            steps += 1\n            for _ in range(len(q)):\n                x = q.popleft()\n                j = 1\n                while j * j <= x:\n                    y = x - j * j\n                    if y == 0:\n                        return steps\n                    if y not in seen:\n                        seen.add(y)\n                        q.append(y)\n                    j += 1\n        return steps",
   "time": "O(n√n)",
   "space": "O(n)",
   "explain": "Breadth-first search from n subtracting squares; the first time 0 is reached is the answer.",
   "frames": [],
   "alt": true
  }
 ]
};
