window.PROBLEM = {
 "id": "253",
 "title": "Meeting Rooms II",
 "level": "Medium",
 "topic": "Heap",
 "question": "You are given a list of meetings, each as [start, end] time (a meeting that ends at time t and another that starts at t do NOT overlap). Return the minimum number of meeting rooms needed so that all meetings can happen, with no two overlapping meetings in the same room. Example: [[0,30],[5,10],[15,20]] → the first meeting overlaps both others, which do not overlap each other → 2 rooms.",
 "why": "Given meeting times, how many rooms are needed so no two overlapping meetings share a room?",
 "idea": "Sort by start time. Keep a min-heap of the end times of rooms in use. If the earliest room is free by the next start, reuse it (pop); otherwise a new room is needed. The heap size is the answer.",
 "input": "[[0,30],[5,10],[15,20]]",
 "output": "2",
 "notes": [],
 "best": "Sort by start time. Keep a min-heap of the end times of rooms in use. If the earliest room is free by the next start, reuse it (pop); otherwise a new room is needed. The heap size is the answer.",
 "variants": [
  {
   "name": "Min-heap of end times",
   "code": "class Solution:\n    def minMeetingRooms(self, intervals):\n        intervals.sort()\n        heap = []\n        for start, end in intervals:\n            if heap and heap[0] <= start: heappop(heap)\n            heappush(heap, end)\n        return len(heap)",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Sort by start time. Keep a min-heap of the end times of rooms in use. If the earliest room is free by the next start, reuse it (pop); otherwise a new room is needed. The heap size is the answer.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sort starts and ends separately",
   "tag": "Alternative",
   "code": "class Solution:\n    def minMeetingRooms(self, intervals):\n        starts = sorted(s for s, e in intervals)\n        ends = sorted(e for s, e in intervals)\n        rooms = best = j = 0\n        for s in starts:\n            while ends[j] <= s:\n                j += 1\n                rooms -= 1\n            rooms += 1\n            best = max(best, rooms)\n        return best",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Walk through all starts in order; every time a meeting starts before the earliest unfinished one ends, one more room is in use.",
   "frames": [],
   "alt": true
  }
 ]
};
