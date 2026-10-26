window.PROBLEM = {
 "id": "1235",
 "title": "Maximum Profit in Job Scheduling",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
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
   "frames": []
  }
 ]
};
