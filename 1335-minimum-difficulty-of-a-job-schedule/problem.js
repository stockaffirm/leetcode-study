window.PROBLEM = {
 "id": "1335",
 "title": "Minimum Difficulty of a Job Schedule",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "You must finish a list of jobs in the given order over exactly d days, doing at least one job each day. The difficulty of a day is the difficulty of its hardest job, and the difficulty of the whole schedule is the sum over all days. Return the minimum possible total difficulty, or −1 if it cannot be done in d days. Example: [6,5,4,3,2,1], d=2 → day 1: jobs 6,5,4,3,2 (hardest 6), day 2: job 1 (hardest 1) → 6 + 1 = 7.",
 "why": "Jobs must be done in order over exactly d days (at least one per day). A day's difficulty is its hardest job; minimise the sum over all days.",
 "idea": "go(i, days) = best total for jobs from i on using `days` days: choose how many jobs to do today (the day's cost is the maximum so far), then solve the rest. Cache by (i, days).",
 "input": "[6,5,4,3,2,1], d=2",
 "output": "7",
 "notes": [],
 "best": "go(i, days) = best total for jobs from i on using `days` days: choose how many jobs to do today (the day's cost is the maximum so far), then solve the rest. Cache by (i, days).",
 "variants": [
  {
   "name": "DP: which jobs go on which day",
   "code": "class Solution:\n    def minDifficulty(self, jobDifficulty, d):\n        n = len(jobDifficulty)\n        if n < d: return -1\n        @lru_cache(None)\n        def go(i, days):\n            if days == 1: return max(jobDifficulty[i:])\n            best, cur = float('inf'), 0\n            for j in range(i, n - days + 1):\n                cur = max(cur, jobDifficulty[j])\n                best = min(best, cur + go(j + 1, days - 1))\n            return best\n        return go(0, d)",
   "time": "O(n²·d)",
   "space": "O(n·d)",
   "explain": "go(i, days) = best total for jobs from i on using `days` days: choose how many jobs to do today (the day's cost is the maximum so far), then solve the rest. Cache by (i, days).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Bottom-up table",
   "tag": "Alternative",
   "code": "class Solution:\n    def minDifficulty(self, jobDifficulty, d):\n        n = len(jobDifficulty)\n        if n < d: return -1\n        INF = float('inf')\n        dp = [[INF] * (n + 1) for _ in range(d + 1)]\n        dp[0][0] = 0\n        for day in range(1, d + 1):\n            for i in range(day, n + 1):\n                cur = 0\n                for j in range(i, day - 1, -1):\n                    cur = max(cur, jobDifficulty[j - 1])\n                    dp[day][i] = min(dp[day][i], dp[day - 1][j - 1] + cur)\n        return dp[d][n]",
   "time": "O(n²·d)",
   "space": "O(n·d)",
   "explain": "dp[day][i] = best for the first i jobs done in `day` days.",
   "frames": [],
   "alt": true
  }
 ]
};
