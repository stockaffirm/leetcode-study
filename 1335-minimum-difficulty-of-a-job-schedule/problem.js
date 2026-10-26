window.PROBLEM = {
 "id": "1335",
 "title": "Minimum Difficulty of a Job Schedule",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
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
   "frames": []
  }
 ]
};
