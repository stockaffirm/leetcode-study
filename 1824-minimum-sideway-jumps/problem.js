window.PROBLEM = {
 "id": "1824",
 "title": "Minimum Sideway Jumps",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "obstacles [0,1,2,3,0]: the frog needs 2 sideways jumps to dodge the obstacles → 2.",
 "idea": "dp[l] is the fewest side jumps to be in lane l at the current point. An obstacle in a lane makes that lane unreachable. At each point you can jump into any free lane from another lane for +1, so dp[l] = min(dp[l], min(dp) + 1) for the free lanes.",
 "input": "obstacles = [0,1,2,3,0]",
 "output": "2",
 "notes": [],
 "best": "dp[l] is the fewest side jumps to be in lane l at the current point. An obstacle in a lane makes that lane unreachable. At each point you can jump into any free lane from another lane for +1, so dp[l] = min(dp[l], min(dp) + 1) for the free lanes.",
 "variants": [
  {
   "name": "DP over the three lanes",
   "code": "class Solution:\n    def minSideJumps(self, obstacles):\n        INF = float('inf')\n        dp = [1, 0, 1]\n        for o in obstacles[1:]:\n            if o:\n                dp[o - 1] = INF\n            m = min(dp)\n            for l in range(3):\n                if l != o - 1:\n                    dp[l] = min(dp[l], m + 1)\n        return min(dp)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "dp[l] is the fewest side jumps to be in lane l at the current point. An obstacle in a lane makes that lane unreachable. At each point you can jump into any free lane from another lane for +1, so dp[l] = min(dp[l], min(dp) + 1) for the free lanes.",
   "frames": []
  }
 ]
};
