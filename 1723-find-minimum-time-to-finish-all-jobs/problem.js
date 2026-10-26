window.PROBLEM = {
 "id": "1723",
 "title": "Find Minimum Time to Finish All Jobs",
 "level": "Hard",
 "topic": "Backtracking",
 "question": "",
 "why": "jobs [1,2,4,7,8] on 2 workers: {8,2,1} and {7,4} → max 11.",
 "idea": "Assign every job to one of k workers to minimise the heaviest worker's total. Backtrack: sort jobs largest first (fail early), try each worker, but skip a worker whose current load equals one already tried (symmetry) and skip assignments that already exceed the best answer found.",
 "input": "jobs = [1,2,4,7,8], k = 2",
 "output": "11",
 "notes": [],
 "best": "Assign every job to one of k workers to minimise the heaviest worker's total. Backtrack: sort jobs largest first (fail early), try each worker, but skip a worker whose current load equals one already tried (symmetry) and skip assignments that already exceed the best answer found.",
 "variants": [
  {
   "name": "Backtracking with pruning",
   "code": "class Solution:\n    def minimumTimeRequired(self, jobs, k):\n        jobs.sort(reverse=True)\n        loads = [0] * k\n        best = sum(jobs)\n        def go(i):\n            nonlocal best\n            if i == len(jobs):\n                best = min(best, max(loads))\n                return\n            seen = set()\n            for w in range(k):\n                if loads[w] in seen or loads[w] + jobs[i] >= best:\n                    continue\n                seen.add(loads[w])\n                loads[w] += jobs[i]\n                go(i + 1)\n                loads[w] -= jobs[i]\n        go(0)\n        return best",
   "time": "O(k^n) with pruning",
   "space": "O(n + k)",
   "explain": "Assign every job to one of k workers to minimise the heaviest worker's total. Backtrack: sort jobs largest first (fail early), try each worker, but skip a worker whose current load equals one already tried (symmetry) and skip assignments that already exceed the best answer found.",
   "frames": []
  }
 ]
};
