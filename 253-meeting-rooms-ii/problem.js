window.PROBLEM = {
 "id": "253",
 "title": "Meeting Rooms II",
 "level": "Medium",
 "topic": "Heap",
 "question": "",
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
   "frames": []
  }
 ]
};
