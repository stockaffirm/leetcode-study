window.PROBLEM = {
 "id": "2402",
 "title": "Meeting Rooms III",
 "level": "Hard",
 "topic": "Heap",
 "question": "",
 "why": "Meetings start at fixed times; each uses the lowest-numbered free room, or waits for the earliest room to free up (keeping its length). Which room hosts the most meetings (lowest number on ties)?",
 "idea": "Sort meetings by start. Keep a min-heap of free room numbers and a min-heap of (end time, room) for busy rooms. Free rooms whose meeting ended; if none is free, take the room that frees first and delay the meeting by the wait.",
 "input": "n=2, [[0,10],[1,5],[2,7],[3,4]]",
 "output": "0",
 "notes": [],
 "best": "Sort meetings by start. Keep a min-heap of free room numbers and a min-heap of (end time, room) for busy rooms. Free rooms whose meeting ended; if none is free, take the room that frees first and delay the meeting by the wait.",
 "variants": [
  {
   "name": "Two heaps: free rooms and busy rooms",
   "code": "class Solution:\n    def mostBooked(self, n, meetings):\n        meetings.sort()\n        free = list(range(n))\n        heapify(free)\n        busy = []\n        count = [0] * n\n        for start, end in meetings:\n            while busy and busy[0][0] <= start:\n                _, room = heappop(busy)\n                heappush(free, room)\n            if free:\n                room = heappop(free)\n                heappush(busy, (end, room))\n            else:\n                t, room = heappop(busy)\n                heappush(busy, (t + end - start, room))\n            count[room] += 1\n        return count.index(max(count))",
   "time": "O(m log m)",
   "space": "O(n)",
   "explain": "Sort meetings by start. Keep a min-heap of free room numbers and a min-heap of (end time, room) for busy rooms. Free rooms whose meeting ended; if none is free, take the room that frees first and delay the meeting by the wait.",
   "frames": []
  }
 ]
};
