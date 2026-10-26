window.PROBLEM = {
 "id": "621",
 "title": "Task Scheduler",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "Run tasks (A–Z), one per time unit; the same task needs n units of cool-down between runs. Fewest time units to finish (idle allowed)?",
 "idea": "The most frequent task decides the frame: (maxCount−1) blocks of length n+1, plus the last row of all tasks tied at maxCount. If tasks exceed that, no idle is needed: the answer is at least len(tasks).",
 "input": "A,A,A,B,B,B with n=2",
 "output": "8",
 "notes": [],
 "best": "The most frequent task decides the frame: (maxCount−1) blocks of length n+1, plus the last row of all tasks tied at maxCount. If tasks exceed that, no idle is needed: the answer is at least len(tasks).",
 "variants": [
  {
   "name": "Formula from the most frequent task",
   "code": "class Solution:\n    def leastInterval(self, tasks, n):\n        cnt = Counter(tasks)\n        mx = max(cnt.values())\n        n_max = sum(1 for c in cnt.values() if c == mx)\n        return max(len(tasks), (mx - 1) * (n + 1) + n_max)",
   "time": "O(n)",
   "space": "O(26)",
   "explain": "The most frequent task decides the frame: (maxCount−1) blocks of length n+1, plus the last row of all tasks tied at maxCount. If tasks exceed that, no idle is needed: the answer is at least len(tasks).",
   "frames": []
  }
 ]
};
