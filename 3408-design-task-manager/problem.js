window.PROBLEM = {
 "id": "3408",
 "title": "Design Task Manager",
 "level": "Medium",
 "topic": "Design",
 "question": "",
 "why": "A task manager with add, edit (change priority), rmv (remove) and execTop (run the highest-priority task, ties → bigger task id, and return its user).",
 "idea": "Keep a dictionary of the current tasks and a max-heap of (priority, taskId). Edits push a new heap entry; stale entries (removed or changed tasks) are skipped when popped.",
 "input": "3 tasks; add, edit, execTop, rmv, add, execTop",
 "output": "3, then 5",
 "notes": [],
 "best": "Keep a dictionary of the current tasks and a max-heap of (priority, taskId). Edits push a new heap entry; stale entries (removed or changed tasks) are skipped when popped.",
 "variants": [
  {
   "name": "Heap with lazy deletion",
   "code": "class TaskManager:\n    def __init__(self, tasks):\n        self.info = {}\n        self.heap = []\n        for u, t, p in tasks: self.add(u, t, p)\n    def add(self, userId, taskId, priority):\n        self.info[taskId] = (userId, priority)\n        heappush(self.heap, (-priority, -taskId))\n    def edit(self, taskId, newPriority):\n        self.info[taskId] = (self.info[taskId][0], newPriority)\n        heappush(self.heap, (-newPriority, -taskId))\n    def rmv(self, taskId):\n        del self.info[taskId]\n    def execTop(self):\n        while self.heap:\n            np, nt = heappop(self.heap)\n            t, p = -nt, -np\n            if t in self.info and self.info[t][1] == p:\n                return self.info.pop(t)[0]\n        return -1",
   "time": "O(log n) per call",
   "space": "O(n)",
   "explain": "Keep a dictionary of the current tasks and a max-heap of (priority, taskId). Edits push a new heap entry; stale entries (removed or changed tasks) are skipped when popped.",
   "frames": []
  }
 ]
};
