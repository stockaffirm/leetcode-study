window.PROBLEM = {
 "id": "1824",
 "title": "Minimum Sideway Jumps",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "A frog starts in lane 2 at point 0 of a 3-lane road and must reach point n in any lane. Obstacles[i] (1-3, or 0 for none) blocks that lane at point i. The frog moves forward when its lane is free and may jump to any other lane at the same point if that lane is free there (one side jump). Return the fewest side jumps. Example: [0,1,2,3,0] → 2.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Full DP table",
   "tag": "Alternative",
   "code": "class Solution:\n    def minSideJumps(self, obstacles):\n        INF = float('inf')\n        n = len(obstacles)\n        dp = [[INF] * 3 for _ in range(n)]\n        dp[0] = [1, 0, 1]\n        for i in range(1, n):\n            stay = [dp[i - 1][l] if obstacles[i] != l + 1 else INF for l in range(3)]\n            for l in range(3):\n                if obstacles[i] == l + 1:\n                    continue\n                best = stay[l]\n                for o in range(3):\n                    if o != l and obstacles[i] != o + 1:\n                        best = min(best, stay[o] + 1)\n                dp[i][l] = best\n        return min(dp[-1])",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "dp[i][lane] kept for every position; at each position first stay in the lane, then allow one jump from another free lane.",
   "frames": [],
   "alt": true
  }
 ]
};
