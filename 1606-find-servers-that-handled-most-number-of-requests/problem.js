window.PROBLEM = {
 "id": "1606",
 "title": "Find Servers That Handled the Most Number of Requests",
 "level": "Hard",
 "topic": "Heap",
 "question": "",
 "why": "k servers. Request i arrives at time arrival[i], takes load[i], and goes to server i mod k if free, otherwise to the next free server (wrapping around); if none is free it is dropped. Return the servers that handled the most requests.",
 "idea": "Keep a sorted list of free server ids and a heap of busy servers by finish time. Release finished servers, then use bisect to find the first free id ≥ i mod k (wrapping to the smallest).",
 "input": "k=3, arrival [1,2,3,4,5], load [5,2,3,3,3]",
 "output": "[1]",
 "notes": [],
 "best": "Keep a sorted list of free server ids and a heap of busy servers by finish time. Release finished servers, then use bisect to find the first free id ≥ i mod k (wrapping to the smallest).",
 "variants": [
  {
   "name": "Sorted free list + busy heap",
   "code": "class Solution:\n    def busiestServers(self, k, arrival, load):\n        free = list(range(k))\n        busy = []\n        cnt = [0] * k\n        for i, (a, l) in enumerate(zip(arrival, load)):\n            while busy and busy[0][0] <= a:\n                _, s = heappop(busy)\n                insort(free, s)\n            if not free: continue\n            j = bisect_left(free, i % k)\n            if j == len(free): j = 0\n            s = free.pop(j)\n            cnt[s] += 1\n            heappush(busy, (a + l, s))\n        m = max(cnt)\n        return [i for i in range(k) if cnt[i] == m]",
   "time": "O(n log k)",
   "space": "O(k)",
   "explain": "Keep a sorted list of free server ids and a heap of busy servers by finish time. Release finished servers, then use bisect to find the first free id ≥ i mod k (wrapping to the smallest).",
   "frames": []
  }
 ]
};
