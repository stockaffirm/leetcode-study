window.PROBLEM = {
 "id": "1665",
 "title": "Minimum Initial Energy to Finish Tasks",
 "level": "Hard",
 "topic": "Greedy",
 "question": "",
 "why": "tasks [[1,2],[2,4],[4,8]] (actual, minimum): start with 8 energy.",
 "idea": "A task needs at least `minimum` energy to start and uses `actual`. Order tasks by (minimum − actual) descending — the ones that leave the most 'slack' unused go first. Simulate: whenever current energy is below a task's minimum, top it up and count what you added.",
 "input": "tasks = [[1,2],[2,4],[4,8]]",
 "output": "8",
 "notes": [],
 "best": "A task needs at least `minimum` energy to start and uses `actual`. Order tasks by (minimum − actual) descending — the ones that leave the most 'slack' unused go first. Simulate: whenever current energy is below a task's minimum, top it up and count what you added.",
 "variants": [
  {
   "name": "Do tasks with the biggest minimum − actual gap first",
   "code": "class Solution:\n    def minimumEffort(self, tasks):\n        need = cur = 0\n        for actual, minimum in sorted(tasks, key=lambda t: t[0] - t[1]):\n            if cur < minimum:\n                need += minimum - cur\n                cur = minimum\n            cur -= actual\n        return need",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "A task needs at least `minimum` energy to start and uses `actual`. Order tasks by (minimum − actual) descending — the ones that leave the most 'slack' unused go first. Simulate: whenever current energy is below a task's minimum, top it up and count what you added.",
   "frames": []
  }
 ]
};
