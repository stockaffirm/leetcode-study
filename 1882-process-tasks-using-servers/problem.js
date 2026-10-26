window.PROBLEM = {
 "id": "1882",
 "title": "Process Tasks Using Servers",
 "level": "Medium",
 "topic": "Heap",
 "question": "",
 "why": "Servers have weights; task j arrives at second j and needs tasks[j] seconds. Each task goes to the free server with the smallest weight (smaller index on ties); if none is free, it waits and takes the first server that frees up. Return the server used by each task.",
 "idea": "Keep two heaps: free servers (by weight, index) and busy servers (by finishing time). Move finished servers back to free before assigning each task, and jump the clock to the earliest finishing time when nobody is free.",
 "input": "servers [3,3,2], tasks [1,2,3,2,1,2]",
 "output": "[2,2,0,2,1,2]",
 "notes": [],
 "best": "Keep two heaps: free servers (by weight, index) and busy servers (by finishing time). Move finished servers back to free before assigning each task, and jump the clock to the earliest finishing time when nobody is free.",
 "variants": [
  {
   "name": "Free-server heap + busy-server heap",
   "code": "class Solution:\n    def assignTasks(self, servers, tasks):\n        free = [(w, i) for i, w in enumerate(servers)]\n        heapify(free)\n        busy = []\n        res = []\n        t = 0\n        for j, dur in enumerate(tasks):\n            t = max(t, j)\n            if not free: t = busy[0][0]\n            while busy and busy[0][0] <= t:\n                _, w, i = heappop(busy)\n                heappush(free, (w, i))\n            w, i = heappop(free)\n            res.append(i)\n            heappush(busy, (t + dur, w, i))\n        return res",
   "time": "O((n + m) log n)",
   "space": "O(n)",
   "explain": "Keep two heaps: free servers (by weight, index) and busy servers (by finishing time). Move finished servers back to free before assigning each task, and jump the clock to the earliest finishing time when nobody is free.",
   "frames": []
  }
 ]
};
