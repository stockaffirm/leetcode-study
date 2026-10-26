window.PROBLEM = {
 "id": "1235",
 "title": "Maximum Profit in Job Scheduling",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "You have n jobs; job i runs from startTime[i] to endTime[i] and pays profit[i]. You can do jobs one after another but never two at the same time; a job may start at the exact moment another ends. Return the largest total profit you can earn. Example: starts [1,2,3,3], ends [3,4,5,6], profits [50,10,40,70] → do job 0 (1–3, profit 50) and job 3 (3–6, profit 70) → 120.",
 "why": "Pick non-overlapping jobs (a job may start exactly when another ends) to maximise total profit.",
 "idea": "Sort jobs by end time and keep 'best profit so far at each end time'. For a job, binary-search the latest finished job that ends by its start and add its profit; keep it if it beats the current best.",
 "input": "start [1,2,3,3], end [3,4,5,6], profit [50,10,40,70]",
 "output": "120",
 "notes": [],
 "best": "Sort jobs by end time and keep 'best profit so far at each end time'. For a job, binary-search the latest finished job that ends by its start and add its profit; keep it if it beats the current best.",
 "variants": [
  {
   "name": "Sort by end time + binary search",
   "code": "class Solution:\n    def jobScheduling(self, startTime, endTime, profit):\n        jobs = sorted(zip(endTime, startTime, profit))\n        ends = [0]\n        best = [0]\n        for e, s, p in jobs:\n            i = bisect_right(ends, s) - 1\n            cand = best[i] + p\n            if cand > best[-1]:\n                ends.append(e)\n                best.append(cand)\n        return best[-1]",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Sort jobs by end time and keep 'best profit so far at each end time'. For a job, binary-search the latest finished job that ends by its start and add its profit; keep it if it beats the current best.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Memo recursion by start time",
   "tag": "Alternative",
   "code": "class Solution:\n    def jobScheduling(self, startTime, endTime, profit):\n        jobs = sorted(zip(startTime, endTime, profit))\n        starts = [j[0] for j in jobs]\n        @lru_cache(None)\n        def go(i):\n            if i == len(jobs): return 0\n            nxt = bisect_left(starts, jobs[i][1])\n            return max(go(i + 1), jobs[i][2] + go(nxt))\n        return go(0)",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "For each job choose: skip it, or take it and jump to the first job that starts after it ends.",
   "frames": [],
   "alt": true
  }
 ]
};
