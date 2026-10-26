window.PROBLEM = {
 "id": "2590",
 "title": "Design a Todo List",
 "level": "Medium",
 "topic": "Design",
 "question": "",
 "why": "Add tasks, ask for pending ones sorted by due date, filter by tag, complete some.",
 "idea": "Keep tasks by id (description, due date, tags, done flag, owner) and for each user the list of their task ids. The getters filter the user's pending tasks (optionally by tag) and sort by due date; completeTask marks the task done only if it belongs to that user.",
 "input": "addTask(1,'Task1',50,[]); addTask(1,'Task2',100,['P1']); getAllTasks(1); getAllTasks(5); addTask(1,'Task3',30,['P1']); getTasksForTag(1,'P1'); completeTask(5,1); completeTask(1,2); getTasksForTag(1,'P1'); getAllTasks(1)",
 "output": "[1, 2, ['Task1','Task2'], [], 3, ['Task3','Task2'], None, None, ['Task3'], ['Task3','Task1']]",
 "notes": [],
 "best": "Keep tasks by id (description, due date, tags, done flag, owner) and for each user the list of their task ids. The getters filter the user's pending tasks (optionally by tag) and sort by due date; completeTask marks the task done only if it belongs to that user.",
 "variants": [
  {
   "name": "Tasks per user, sorted by due date on demand",
   "code": "class TodoList:\n    def __init__(self):\n        self.tasks = {}\n        self.by_user = defaultdict(list)\n\n    def addTask(self, userId, taskDescription, dueDate, tags):\n        tid = len(self.tasks) + 1\n        self.tasks[tid] = [userId, taskDescription, dueDate, set(tags), False]\n        self.by_user[userId].append(tid)\n        return tid\n\n    def getAllTasks(self, userId):\n        return self._pending(userId, None)\n\n    def getTasksForTag(self, userId, tag):\n        return self._pending(userId, tag)\n\n    def completeTask(self, userId, taskId):\n        t = self.tasks.get(taskId)\n        if t and t[0] == userId:\n            t[4] = True\n\n    def _pending(self, userId, tag):\n        items = []\n        for tid in self.by_user[userId]:\n            owner, desc, due, tags, done = self.tasks[tid]\n            if not done and (tag is None or tag in tags):\n                items.append((due, tid, desc))\n        return [d for _, _, d in sorted(items)]",
   "time": "O(t log t) per query",
   "space": "O(t)",
   "explain": "Keep tasks by id (description, due date, tags, done flag, owner) and for each user the list of their task ids. The getters filter the user's pending tasks (optionally by tag) and sort by due date; completeTask marks the task done only if it belongs to that user.",
   "frames": []
  }
 ]
};
