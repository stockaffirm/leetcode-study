window.PROBLEM = {
 "id": "3893",
 "title": "Maximum Team Size with Overlapping Intervals",
 "level": "Medium",
 "topic": "Intervals",
 "question": "",
 "why": "[1,4],[2,5],[3,6]: interval [1,4] touches both others → team of 3.",
 "idea": "A team is valid if one member (the hub) overlaps every other. So the best team for a hub is the hub plus everything overlapping it. The number overlapping interval [s, e] is n minus the intervals that end before s minus those that start after e (no interval can be both). Use sorted starts/ends and binary search; answer the maximum over hubs.",
 "input": "startTime = [1,2,3], endTime = [4,5,6]",
 "output": "3",
 "notes": [],
 "best": "A team is valid if one member (the hub) overlaps every other. So the best team for a hub is the hub plus everything overlapping it. The number overlapping interval [s, e] is n minus the intervals that end before s minus those that start after e (no interval can be both). Use sorted starts/ends and binary search; answer the maximum over hubs.",
 "variants": [
  {
   "name": "Count the intervals that overlap each hub",
   "code": "class Solution:\n    def maximumTeamSize(self, startTime, endTime):\n        n = len(startTime)\n        S = sorted(startTime)\n        E = sorted(endTime)\n        best = 0\n        for s, e in zip(startTime, endTime):\n            before = bisect_left(E, s)\n            after = n - bisect_right(S, e)\n            best = max(best, n - before - after)\n        return best",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "A team is valid if one member (the hub) overlaps every other. So the best team for a hub is the hub plus everything overlapping it. The number overlapping interval [s, e] is n minus the intervals that end before s minus those that start after e (no interval can be both). Use sorted starts/ends and binary search; answer the maximum over hubs.",
   "frames": []
  }
 ]
};
