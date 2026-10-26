window.PROBLEM = {
 "id": "1851",
 "title": "Minimum Interval to Include Each Query",
 "level": "Hard",
 "topic": "Heap",
 "question": "",
 "why": "intervals [[1,4],[2,4],[3,6],[4,4]], query 2 → smallest interval containing 2 is [2,4] (size 3).",
 "idea": "Answer the queries in increasing order. Push every interval that starts at or before the query into a min-heap keyed by size (with its right end); pop intervals whose right end is before the query. The top of the heap is the smallest interval covering the query, or −1 if the heap is empty.",
 "input": "intervals = [[1,4],[2,4],[3,6],[4,4]], queries = [2,3,4,5]",
 "output": "[3, 3, 1, 4]",
 "notes": [],
 "best": "Answer the queries in increasing order. Push every interval that starts at or before the query into a min-heap keyed by size (with its right end); pop intervals whose right end is before the query. The top of the heap is the smallest interval covering the query, or −1 if the heap is empty.",
 "variants": [
  {
   "name": "Offline sweep: heap of intervals by size",
   "code": "class Solution:\n    def minInterval(self, intervals, queries):\n        intervals.sort()\n        res = {}\n        heap = []\n        i = 0\n        for q in sorted(queries):\n            while i < len(intervals) and intervals[i][0] <= q:\n                l, r = intervals[i]\n                heappush(heap, (r - l + 1, r))\n                i += 1\n            while heap and heap[0][1] < q:\n                heappop(heap)\n            res[q] = heap[0][0] if heap else -1\n        return [res[q] for q in queries]",
   "time": "O((n + q) log n)",
   "space": "O(n + q)",
   "explain": "Answer the queries in increasing order. Push every interval that starts at or before the query into a min-heap keyed by size (with its right end); pop intervals whose right end is before the query. The top of the heap is the smallest interval covering the query, or −1 if the heap is empty.",
   "frames": []
  }
 ]
};
