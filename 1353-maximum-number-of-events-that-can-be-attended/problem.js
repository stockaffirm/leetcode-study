window.PROBLEM = {
 "id": "1353",
 "title": "Maximum Number of Events That Can Be Attended",
 "level": "Medium",
 "topic": "Greedy",
 "question": "events[i] = [start, end] means event i can be attended on any single day from start to end. You may attend only one event per day, and each event only once. Return the largest number of events you can attend. Example: [[1,2],[2,3],[3,4]] → attend the first on day 1, the second on day 2, the third on day 3 → 3.",
 "why": "Each event runs over a range of days but you can only attend one event per day (on any one day of its range). Attend as many events as possible.",
 "idea": "Go day by day. Among the events already started and not yet expired, attend the one that ends earliest (a min-heap of end days); drop events whose last day has passed.",
 "input": "[[1,2],[2,3],[3,4]]",
 "output": "3",
 "notes": [],
 "best": "Go day by day. Among the events already started and not yet expired, attend the one that ends earliest (a min-heap of end days); drop events whose last day has passed.",
 "variants": [
  {
   "name": "Day by day, attend the event ending soonest",
   "code": "class Solution:\n    def maxEvents(self, events):\n        events.sort()\n        heap, i, day, ans, n = [], 0, 0, 0, len(events)\n        while i < n or heap:\n            if not heap: day = events[i][0]\n            while i < n and events[i][0] <= day:\n                heappush(heap, events[i][1])\n                i += 1\n            heappop(heap)\n            ans += 1\n            day += 1\n            while heap and heap[0] < day: heappop(heap)\n        return ans",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Go day by day. Among the events already started and not yet expired, attend the one that ends earliest (a min-heap of end days); drop events whose last day has passed.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sort by end day, grab the first free day",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxEvents(self, events):\n        used, ans = set(), 0\n        for s, e in sorted(events, key=lambda x: (x[1], x[0])):\n            for d in range(s, e + 1):\n                if d not in used:\n                    used.add(d)\n                    ans += 1\n                    break\n        return ans",
   "time": "O(n·days)",
   "space": "O(days)",
   "explain": "Take events by earliest end; give each the earliest unused day in its range.",
   "frames": [],
   "alt": true
  }
 ]
};
