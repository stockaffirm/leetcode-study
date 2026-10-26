window.PROBLEM = {
 "id": "2015",
 "title": "Average Height of Buildings in Each Segment",
 "level": "Medium",
 "topic": "Intervals",
 "question": "",
 "why": "[[1,4,2],[3,9,4]] → [[1,3,2],[3,4,3],[4,9,4]].",
 "idea": "Create events: +height at start, −height at end (with the building count). Sweep the sorted event positions keeping total height and number of buildings. Between two consecutive positions, if buildings > 0 the segment has average total // count. Merge a segment into the previous one when it touches it and has the same average.",
 "input": "buildings = [[1,4,2],[3,9,4]]",
 "output": "[[1, 3, 2], [3, 4, 3], [4, 9, 4]]",
 "notes": [],
 "best": "Create events: +height at start, −height at end (with the building count). Sweep the sorted event positions keeping total height and number of buildings. Between two consecutive positions, if buildings > 0 the segment has average total // count. Merge a segment into the previous one when it touches it and has the same average.",
 "variants": [
  {
   "name": "Sweep line over start / end events, merge equal averages",
   "code": "class Solution:\n    def averageHeightOfBuildings(self, buildings):\n        events = defaultdict(lambda: [0, 0])\n        for s, e, h in buildings:\n            events[s][0] += h\n            events[s][1] += 1\n            events[e][0] -= h\n            events[e][1] -= 1\n        res = []\n        total = count = 0\n        points = sorted(events)\n        for idx, p in enumerate(points[:-1]):\n            total += events[p][0]\n            count += events[p][1]\n            if count == 0:\n                continue\n            avg = total // count\n            nxt = points[idx + 1]\n            if res and res[-1][1] == p and res[-1][2] == avg:\n                res[-1][1] = nxt\n            else:\n                res.append([p, nxt, avg])\n        return res",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Create events: +height at start, −height at end (with the building count). Sweep the sorted event positions keeping total height and number of buildings. Between two consecutive positions, if buildings > 0 the segment has average total // count. Merge a segment into the previous one when it touches it and has the same average.",
   "frames": []
  }
 ]
};
