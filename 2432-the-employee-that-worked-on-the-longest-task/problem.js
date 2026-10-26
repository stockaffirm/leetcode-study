window.PROBLEM = {
 "id": "2432",
 "title": "The Employee That Worked on the Longest Task",
 "level": "Easy",
 "topic": "Array / String",
 "question": "logs[i] = [employeeId, leaveTime]: employee i finishes task i at leaveTime; the first task starts at time 0 and every other starts when the previous one ends. Return the id of the employee with the longest task (smallest id on ties). Example: [[0,3],[2,5],[0,9],[1,15]] → 1.",
 "why": "logs [[0,3],[2,5],[0,9],[1,15]]: durations 3, 2, 4, 6 → employee 1.",
 "idea": "A task starts when the previous one ended (the first starts at 0), so its duration is leave − previous leave. Keep the longest duration and, on a tie, the smaller id.",
 "input": "n = 10, logs = [[0,3],[2,5],[0,9],[1,15]]",
 "output": "1",
 "notes": [],
 "best": "A task starts when the previous one ended (the first starts at 0), so its duration is leave − previous leave. Keep the longest duration and, on a tie, the smaller id.",
 "variants": [
  {
   "name": "Task durations from consecutive leave times",
   "code": "class Solution:\n    def hardestWorker(self, n, logs):\n        best, who, prev = -1, -1, 0\n        for emp, end in logs:\n            d = end - prev\n            if d > best or (d == best and emp < who):\n                best, who = d, emp\n            prev = end\n        return who",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "A task starts when the previous one ended (the first starts at 0), so its duration is leave − previous leave. Keep the longest duration and, on a tie, the smaller id.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Durations with max()",
   "tag": "Alternative",
   "code": "class Solution:\n    def hardestWorker(self, n, logs):\n        prev = 0\n        best = (-1, 0)\n        for emp, end in logs:\n            best = max(best, (end - prev, -emp))\n            prev = end\n        return -best[1]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Build the list of (duration, −id) and take the maximum.",
   "frames": [],
   "alt": true
  }
 ]
};
