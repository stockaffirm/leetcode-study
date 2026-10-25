window.PROBLEM = {
 "id": "2141",
 "title": "Maximum Running Time of N Computers",
 "level": "Hard",
 "topic": "Binary Search",
 "question": "You have n computers and a list of batteries, batteries[i] being the number of minutes battery i can run a computer. Each computer must use ONE battery at a time, but you can swap batteries between computers at any whole minute without losing time, and a battery may be moved around as often as you like (not recharged). Return the maximum number of minutes all n computers can run at the same time. Example: n=2, batteries [3,3,3] → 9 battery-minutes shared by 2 computers, 4 minutes is achievable → 4.",
 "why": "You have n computers and a pile of batteries (each with some minutes). Batteries can be swapped any time. For how many minutes can all n computers run at once?",
 "idea": "Guess a time T. A battery can give at most T minutes (a computer can't use more than T), so we need Σ min(battery, T) ≥ n·T. This is true for small T and false for large T — binary-search the largest T that works.",
 "input": "n=2, batteries [3, 3, 3]",
 "output": "4",
 "notes": [],
 "best": "Guess a time T. A battery can give at most T minutes (a computer can't use more than T), so we need Σ min(battery, T) ≥ n·T. This is true for small T and false for large T — binary-search the largest T that works.",
 "variants": [
  {
   "name": "Binary search on the running time",
   "code": "class Solution:\n    def maxRunTime(self, n, batteries):\n        lo, hi = 0, sum(batteries) // n\n        while lo < hi:\n            mid = (lo + hi + 1) // 2\n            if sum(min(b, mid) for b in batteries) >= n * mid: lo = mid\n            else: hi = mid - 1\n        return lo",
   "time": "O(m log(sum/n))",
   "space": "O(1)",
   "explain": "Guess a time T. A battery can give at most T minutes (a computer can't use more than T), so we need Σ min(battery, T) ≥ n·T. This is true for small T and false for large T — binary-search the largest T that works.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Greedy: drop the over-sized batteries",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxRunTime(self, n, batteries):\n        batteries = sorted(batteries)\n        total = sum(batteries)\n        while batteries[-1] > total // n:\n            total -= batteries.pop()\n            n -= 1\n        return total // n",
   "time": "O(m log m)",
   "space": "O(1)",
   "explain": "A battery bigger than the average computer share can only power one computer fully; remove it and recompute the average of the rest.",
   "frames": [],
   "alt": true
  }
 ]
};
