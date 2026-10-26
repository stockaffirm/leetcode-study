window.PROBLEM = {
 "id": "2141",
 "title": "Maximum Running Time of N Computers",
 "level": "Hard",
 "topic": "Binary Search",
 "question": "",
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
   "frames": []
  }
 ]
};
