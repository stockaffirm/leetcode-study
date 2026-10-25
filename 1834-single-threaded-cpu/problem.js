window.PROBLEM = {
 "id": "1834",
 "title": "Single-Threaded CPU",
 "level": "Medium",
 "topic": "Heap",
 "question": "Each task is [enqueueTime, processingTime]. A single CPU runs one task at a time without interruption. Whenever it is free it picks, among the tasks already available (enqueueTime ≤ now), the one with the shortest processing time (ties: smaller index); if none is available it waits for the next one. Return the order in which the tasks run (their indices). Example: [[1,2],[2,4],[3,2],[4,1]] → [0,2,3,1].",
 "why": "A CPU runs one task at a time. Tasks arrive at given times with given running times; whenever it is free it picks the shortest available task (lowest index on ties). In what order do tasks run?",
 "idea": "Sort tasks by arrival. Keep a min-heap of (running time, index) of tasks that have arrived. When the heap is empty, jump the clock to the next arrival.",
 "input": "[[1,2],[2,4],[3,2],[4,1]]",
 "output": "[0, 2, 3, 1]",
 "notes": [],
 "best": "Sort tasks by arrival. Keep a min-heap of (running time, index) of tasks that have arrived. When the heap is empty, jump the clock to the next arrival.",
 "variants": [
  {
   "name": "Min-heap of available tasks",
   "code": "class Solution:\n    def getOrder(self, tasks):\n        order = sorted(range(len(tasks)), key=lambda i: tasks[i][0])\n        heap, res, t, k = [], [], 0, 0\n        while len(res) < len(tasks):\n            if not heap and k < len(order) and tasks[order[k]][0] > t: t = tasks[order[k]][0]\n            while k < len(order) and tasks[order[k]][0] <= t:\n                i = order[k]\n                heappush(heap, (tasks[i][1], i))\n                k += 1\n            p, i = heappop(heap)\n            t += p\n            res.append(i)\n        return res",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Sort tasks by arrival. Keep a min-heap of (running time, index) of tasks that have arrived. When the heap is empty, jump the clock to the next arrival.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Simulate by scanning",
   "tag": "Brute force",
   "code": "class Solution:\n    def getOrder(self, tasks):\n        n = len(tasks)\n        done = [False] * n\n        t, res = 0, []\n        while len(res) < n:\n            avail = [i for i in range(n) if not done[i] and tasks[i][0] <= t]\n            if not avail:\n                t = min(tasks[i][0] for i in range(n) if not done[i])\n                continue\n            i = min(avail, key=lambda x: (tasks[x][1], x))\n            done[i] = True\n            t += tasks[i][1]\n            res.append(i)\n        return res",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "At each moment scan all tasks for the shortest available one.",
   "frames": [],
   "alt": true
  }
 ]
};
