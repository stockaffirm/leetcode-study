window.PROBLEM = {
 "id": "826",
 "title": "Most Profit Assigning Work",
 "level": "Medium",
 "topic": "Greedy",
 "question": "Job i has a difficulty and pays a profit. A worker can do any job whose difficulty is at most the worker's ability, and each worker does ONE job (several workers may take the same job). Each worker picks the best-paying job they can do. Return the total profit of all workers. Example: difficulty [2,4,6,8,10], profit [10,20,30,40,50], workers [4,5,6,7] → 100 (each earns 20, 20, 30, 30).",
 "why": "Each worker can do jobs up to their ability and does exactly one job (several workers may do the same job). Maximise total profit.",
 "idea": "Sort jobs by difficulty and workers by ability. As abilities grow, keep the best profit among jobs the worker can do; every worker takes that best job.",
 "input": "difficulty [2,4,6,8,10], profit [10,20,30,40,50], workers [4,5,6,7]",
 "output": "100",
 "notes": [],
 "best": "Sort jobs by difficulty and workers by ability. As abilities grow, keep the best profit among jobs the worker can do; every worker takes that best job.",
 "variants": [
  {
   "name": "Sort jobs and workers, remember the best profit",
   "code": "class Solution:\n    def maxProfitAssignment(self, difficulty, profit, worker):\n        jobs = sorted(zip(difficulty, profit))\n        best = i = total = 0\n        for w in sorted(worker):\n            while i < len(jobs) and jobs[i][0] <= w:\n                best = max(best, jobs[i][1])\n                i += 1\n            total += best\n        return total",
   "time": "O(n log n + m log m)",
   "space": "O(n)",
   "explain": "Sort jobs by difficulty and workers by ability. As abilities grow, keep the best profit among jobs the worker can do; every worker takes that best job.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Best job per worker",
   "tag": "Brute force",
   "code": "class Solution:\n    def maxProfitAssignment(self, difficulty, profit, worker):\n        total = 0\n        for w in worker:\n            total += max([p for d, p in zip(difficulty, profit) if d <= w], default=0)\n        return total",
   "time": "O(n·m)",
   "space": "O(1)",
   "explain": "For each worker scan all jobs they can do and take the most profitable.",
   "frames": [],
   "alt": true
  }
 ]
};
