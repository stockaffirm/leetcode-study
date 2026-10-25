window.PROBLEM = {
 "id": "1882",
 "title": "Process Tasks Using Servers",
 "level": "Medium",
 "topic": "Heap",
 "question": "servers[i] is the weight of server i; task j arrives at second j and needs tasks[j] seconds. A task is given to a free server with the smallest weight (smallest index on ties). If no server is free, the tasks wait in order and the first to finish takes the next task. Return, for each task, the index of the server that runs it. Example: servers [3,3,2], tasks [1,2,3,2,1,2] → [2,2,0,2,1,2].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Scan instead of heaps",
   "tag": "Brute force",
   "code": "class Solution:\n    def assignTasks(self, servers, tasks):\n        free_at = [0] * len(servers)\n        res = []\n        t = 0\n        for j, dur in enumerate(tasks):\n            t = max(t, j)\n            avail = [i for i in range(len(servers)) if free_at[i] <= t]\n            if not avail:\n                t = min(free_at)\n                avail = [i for i in range(len(servers)) if free_at[i] <= t]\n            i = min(avail, key=lambda x: (servers[x], x))\n            res.append(i)\n            free_at[i] = t + dur\n        return res",
   "time": "O(m·n)",
   "space": "O(n)",
   "explain": "Keep the time each server becomes free and scan all servers for every task.",
   "frames": [],
   "alt": true
  }
 ]
};
