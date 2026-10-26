window.PROBLEM = {
 "id": "1353",
 "title": "Maximum Number of Events That Can Be Attended",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
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
   "frames": []
  }
 ]
};
