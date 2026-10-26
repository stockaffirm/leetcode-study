window.PROBLEM = {
 "id": "436",
 "title": "Find Right Interval",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "",
 "why": "[[3,4],[2,3],[1,2]] → right intervals: [−1, 0, 1].",
 "idea": "For each interval find the interval with the smallest start ≥ its end. Sort the starts with their original indices and binary search each end.",
 "input": "intervals = [[3,4],[2,3],[1,2]]",
 "output": "[-1, 0, 1]",
 "notes": [],
 "best": "For each interval find the interval with the smallest start ≥ its end. Sort the starts with their original indices and binary search each end.",
 "variants": [
  {
   "name": "Sorted starts and binary search",
   "code": "class Solution:\n    def findRightInterval(self, intervals):\n        starts = sorted((s, i) for i, (s, _) in enumerate(intervals))\n        keys = [s for s, _ in starts]\n        res = []\n        for _, e in intervals:\n            j = bisect_left(keys, e)\n            res.append(starts[j][1] if j < len(starts) else -1)\n        return res",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "For each interval find the interval with the smallest start ≥ its end. Sort the starts with their original indices and binary search each end.",
   "frames": []
  }
 ]
};
