window.PROBLEM = {
 "id": "2463",
 "title": "Minimum Total Distance Traveled",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "robots [0,4,6], factories [[2,2],[6,2]] → robots 0 and 4 to factory 2, robot 6 to factory 6 → total 4.",
 "idea": "Sort robots and factories by position. dp[i][j] = minimum distance for the first i robots using the first j factories. For factory j with capacity c, let it take the last t robots (0 ≤ t ≤ c) of the first i: dp[i][j] = min over t of dp[i−t][j−1] + sum of |robot − factory| for those t robots.",
 "input": "robot = [0,4,6], factory = [[2,2],[6,2]]",
 "output": "4",
 "notes": [],
 "best": "Sort robots and factories by position. dp[i][j] = minimum distance for the first i robots using the first j factories. For factory j with capacity c, let it take the last t robots (0 ≤ t ≤ c) of the first i: dp[i][j] = min over t of dp[i−t][j−1] + sum of |robot − factory| for those t robots.",
 "variants": [
  {
   "name": "Sort both, DP over robots and factories",
   "code": "class Solution:\n    def minimumTotalDistance(self, robot, factory):\n        robot.sort()\n        factory.sort()\n        INF = float('inf')\n        n, m = len(robot), len(factory)\n        dp = [[INF] * (m + 1) for _ in range(n + 1)]\n        for j in range(m + 1):\n            dp[0][j] = 0\n        for j in range(1, m + 1):\n            pos, cap = factory[j - 1]\n            for i in range(1, n + 1):\n                dp[i][j] = dp[i][j - 1]\n                cost = 0\n                for t in range(1, min(cap, i) + 1):\n                    cost += abs(robot[i - t] - pos)\n                    if dp[i - t][j - 1] + cost < dp[i][j]:\n                        dp[i][j] = dp[i - t][j - 1] + cost\n        return dp[n][m]",
   "time": "O(R·F·cap)",
   "space": "O(R·F)",
   "explain": "Sort robots and factories by position. dp[i][j] = minimum distance for the first i robots using the first j factories. For factory j with capacity c, let it take the last t robots (0 ≤ t ≤ c) of the first i: dp[i][j] = min over t of dp[i−t][j−1] + sum of |robot − factory| for those t robots.",
   "frames": []
  }
 ]
};
