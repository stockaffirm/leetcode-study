window.PROBLEM = {
 "id": "2406",
 "title": "Divide Intervals Into Minimum Number of Groups",
 "level": "Medium",
 "topic": "Intervals",
 "question": "Put each interval into a group so that no two intervals in a group share a point (endpoints count). Return the smallest number of groups. Example: [[5,10],[6,8],[1,5],[2,3],[1,10]] → 3.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sweep over start/end events",
   "tag": "Alternative",
   "code": "class Solution:\n    def minGroups(self, intervals):\n        events = []\n        for s, e in intervals:\n            events.append((s, 1))\n            events.append((e + 1, -1))\n        events.sort()\n        cur = best = 0\n        for _, d in events:\n            cur += d\n            best = max(best, cur)\n        return best",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Sort start events (+1) and end events (−1, placed just after the end); the biggest running total is the group count.",
   "frames": [],
   "alt": true
  }
 ]
};
