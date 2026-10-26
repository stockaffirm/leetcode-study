window.PROBLEM = {
 "id": "2406",
 "title": "Divide Intervals Into Minimum Number of Groups",
 "level": "Medium",
 "topic": "Intervals",
 "question": "",
 "why": "[[5,10],[6,8],[1,5],[2,3],[1,10]]: three intervals overlap at time 5 or 6 → 3 groups.",
 "idea": "Intervals that share a point must be in different groups, so the answer is the maximum overlap. Sort by start and keep a min-heap of group end times: if the earliest-ending group ended before this start, reuse it, otherwise open a new group.",
 "input": "intervals = [[5,10],[6,8],[1,5],[2,3],[1,10]]",
 "output": "3",
 "notes": [],
 "best": "Intervals that share a point must be in different groups, so the answer is the maximum overlap. Sort by start and keep a min-heap of group end times: if the earliest-ending group ended before this start, reuse it, otherwise open a new group.",
 "variants": [
  {
   "name": "Heap of group end times",
   "code": "class Solution:\n    def minGroups(self, intervals):\n        heap = []\n        for s, e in sorted(intervals):\n            if heap and heap[0] < s:\n                heapreplace(heap, e)\n            else:\n                heappush(heap, e)\n        return len(heap)",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Intervals that share a point must be in different groups, so the answer is the maximum overlap. Sort by start and keep a min-heap of group end times: if the earliest-ending group ended before this start, reuse it, otherwise open a new group.",
   "frames": []
  }
 ]
};
