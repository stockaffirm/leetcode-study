window.PROBLEM = {
 "id": "2402",
 "title": "Meeting Rooms III",
 "level": "Hard",
 "topic": "Heap",
 "question": "There are n meeting rooms numbered 0 to n−1 and meetings given as [start, end] (all starts are different). Meetings are handled in order of start time: a meeting takes the lowest-numbered room that is free at its start time; if no room is free it waits until the earliest room becomes free (the room that frees first, lowest number on ties) and then runs for its original length. Return the number of the room that hosts the most meetings (the lowest number if tied). Example: n=2, [[0,10],[1,5],[2,7],[3,4]] → room 0 hosts 3 meetings → 0.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Array of room free-times",
   "tag": "Alternative",
   "code": "class Solution:\n    def mostBooked(self, n, meetings):\n        meetings.sort()\n        free_at = [0] * n\n        count = [0] * n\n        for start, end in meetings:\n            dur = end - start\n            for r in range(n):\n                if free_at[r] <= start:\n                    free_at[r] = end\n                    count[r] += 1\n                    break\n            else:\n                r = min(range(n), key=lambda x: (free_at[x], x))\n                free_at[r] += dur\n                count[r] += 1\n        return count.index(max(count))",
   "time": "O(m·n)",
   "space": "O(n)",
   "explain": "Keep when each room becomes free; give each meeting the first free room or delay it in the room that frees up first.",
   "frames": [],
   "alt": true
  }
 ]
};
