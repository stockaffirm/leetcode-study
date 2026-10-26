window.PROBLEM = {
 "id": "2365",
 "title": "Task Scheduler II",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "Do tasks in order, one per day. After a task of some type, the next task of that SAME type must wait at least `space` days. Skipping (idling) is allowed. How many days in total?",
 "idea": "Keep the last day each task type ran. If the new task of that type is too soon, jump the day counter to last + space + 1.",
 "input": "tasks [1,2,1,2,3,1], space=3",
 "output": "9",
 "notes": [],
 "best": "Keep the last day each task type ran. If the new task of that type is too soon, jump the day counter to last + space + 1.",
 "variants": [
  {
   "name": "Remember the last day of each task type",
   "code": "class Solution:\n    def taskSchedulerII(self, tasks, space):\n        last, day = {}, 0\n        for t in tasks:\n            day += 1\n            if t in last and day - last[t] <= space:\n                day = last[t] + space + 1\n            last[t] = day\n        return day",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Keep the last day each task type ran. If the new task of that type is too soon, jump the day counter to last + space + 1.",
   "frames": []
  }
 ]
};
