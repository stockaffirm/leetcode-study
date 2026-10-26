window.PROBLEM = {
 "id": "1834",
 "title": "Single-Threaded CPU",
 "level": "Medium",
 "topic": "Heap",
 "question": "",
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
   "frames": []
  }
 ]
};
